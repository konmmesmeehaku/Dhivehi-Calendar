import React, { useState, useMemo, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Moon, Sun, MapPin, Settings, Search, Navigation, ChevronDown } from 'lucide-react';
import { MONTHS_DV, MONTHS_EN, UI_STRINGS, ISLANDS_LIST } from '../constants';
import { Language, LocationId, IslandData } from '../types';
import { clsx } from 'clsx';

interface HeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
  isDark: boolean;
  toggleTheme: () => void;
  lang: Language;
  toggleLang: () => void;
  location: LocationId;
  setLocation: (loc: LocationId) => void;
  hijriOffset: number;
  setHijriOffset: (offset: number) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentDate, 
  onPrevMonth, 
  onNextMonth, 
  onToday,
  isDark,
  toggleTheme,
  lang,
  toggleLang,
  location,
  setLocation,
  hijriOffset,
  setHijriOffset
}) => {
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const strings = UI_STRINGS[lang];
  const [showSettings, setShowSettings] = useState(false);
  
  // Location Combobox State
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Focus input when dropdown opens
  useEffect(() => {
    if (isLocationOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    } else {
      setSearchQuery('');
      setExpandedGroups({}); // Reset expansions on close
    }
  }, [isLocationOpen]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLocationOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter islands
  const filteredIslands = useMemo(() => {
    const query = searchQuery.toLowerCase();
    if (!query) return ISLANDS_LIST;
    return ISLANDS_LIST.filter(island => 
      island.nameEn.toLowerCase().includes(query) || 
      island.nameDv.includes(query) ||
      island.code.toLowerCase().includes(query) ||
      island.atoll.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Group by Atoll
  const groupedIslands = useMemo(() => {
    const groups: Record<string, IslandData[]> = {};
    filteredIslands.forEach(island => {
      const key = `${island.code} - ${island.atoll}`;
      if (!groups[key]) groups[key] = [];
      groups[key].push(island);
    });
    return groups;
  }, [filteredIslands]);

  const selectedIsland = ISLANDS_LIST.find(i => i.nameEn === location || i.nameDv === location);
  const displayLocation = selectedIsland ? (lang === 'dv' ? selectedIsland.nameDv : selectedIsland.nameEn) : location;

  const handleLocationSelect = (island: IslandData) => {
    setLocation(island.nameEn);
    setIsLocationOpen(false);
  };

  const toggleGroup = (key: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <header className="flex flex-col xl:flex-row items-center justify-between gap-6 py-2 border-b border-slate-200 dark:border-slate-800">
        
        {/* Left Group: Date & Navigation Combined */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 w-full xl:w-auto">
          
          {/* Date Identity */}
          <div className="flex flex-col leading-none">
             {/* Primary Line: Dhivehi Month + Year */}
             <div className="flex items-baseline gap-3">
               <span className="font-waheed text-2xl sm:text-3xl text-slate-800 dark:text-slate-200" dir="rtl">
                  {MONTHS_DV[monthIndex]}
               </span>
               <span className="font-sans font-medium text-2xl sm:text-3xl text-grass dark:text-grass-400">
                  {year}
               </span>
             </div>
             {/* Secondary Line: English Month */}
             <span className="font-sans font-bold text-xs sm:text-sm text-slate-400 uppercase tracking-widest mt-1">
               {MONTHS_EN[monthIndex]}
             </span>
          </div>

          {/* Navigation Controls (Left Aligned next to Date) */}
          <div className="flex items-center gap-2">
            <button
              onClick={onPrevMonth}
              className="w-9 h-9 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-500 transition-all active:scale-95"
              aria-label="Previous Month"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={onToday}
              className="px-5 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95 font-sans uppercase tracking-widest"
            >
              {strings.today}
            </button>

            <button
              onClick={onNextMonth} 
              className="w-9 h-9 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-500 transition-all active:scale-95"
              aria-label="Next Month"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>

        {/* Right Group: Utilities */}
        <div className="flex items-center gap-3 w-full xl:w-auto justify-between xl:justify-end relative" ref={dropdownRef}>
          
          {/* Smart Location Search */}
          <div className="relative">
            <button 
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold text-slate-600 dark:text-slate-300 hover:border-sky-300 hover:shadow-sm transition-all active:scale-95"
            >
               <MapPin size={14} className="text-sky" />
               <span className="font-thaana truncate max-w-[100px] sm:max-w-[150px]">{displayLocation}</span>
            </button>
            
            {/* Combobox Dropdown */}
            {isLocationOpen && (
              <div className="absolute top-full right-0 mt-3 w-[280px] sm:w-[320px] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-xl z-50 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
                 
                 {/* Sticky Search Header */}
                 <div className="p-3 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
                    <div className="relative">
                      <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        ref={searchInputRef}
                        type="text" 
                        placeholder={strings.searchLocation}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-100 dark:focus:ring-sky-900 font-thaana"
                        dir={lang === 'dv' ? 'rtl' : 'ltr'}
                      />
                    </div>
                    {/* GPS Button */}
                    <button className="flex items-center gap-2 mt-2 w-full px-2 py-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/20 rounded-lg transition-colors">
                       <Navigation size={12} className="fill-current" />
                       <span className="font-thaana">{strings.useCurrentLocation}</span>
                    </button>
                 </div>

                 {/* Scrollable List with Accordions */}
                 <div className="max-h-[350px] overflow-y-auto overflow-x-hidden p-2">
                    {Object.keys(groupedIslands).length > 0 ? (
                      Object.entries(groupedIslands).map(([atollKey, islands]) => {
                        const isExpanded = searchQuery.length > 0 ? true : !!expandedGroups[atollKey];
                        
                        return (
                          <div key={atollKey} className="mb-2">
                            <button
                              onClick={() => toggleGroup(atollKey)}
                              className={clsx(
                                "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-colors sticky top-0 z-10",
                                "bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/80 dark:hover:bg-slate-700",
                                isExpanded ? "text-slate-700 dark:text-slate-200" : "text-slate-500 dark:text-slate-400"
                              )}
                            >
                              <span>{atollKey}</span>
                              {searchQuery.length === 0 && (
                                <ChevronDown 
                                  size={14} 
                                  className={clsx("transition-transform duration-200 text-slate-400", isExpanded ? "rotate-180" : "")} 
                                />
                              )}
                            </button>
                            
                            {isExpanded && (
                              <div className="animate-in slide-in-from-top-1 duration-200 pt-1 pl-1">
                                {(islands as IslandData[]).map(island => (
                                  <button
                                    key={island.nameEn}
                                    onClick={() => handleLocationSelect(island)}
                                    className={clsx(
                                      "w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between group",
                                      (location === island.nameEn || location === island.nameDv) 
                                        ? "bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300" 
                                        : "hover:bg-slate-50 dark:hover:bg-slate-700/50 text-slate-600 dark:text-slate-300"
                                    )}
                                  >
                                    <span className="font-thaana text-sm">{lang === 'dv' ? island.nameDv : island.nameEn}</span>
                                    <span className="text-[9px] font-sans font-bold opacity-0 group-hover:opacity-60 transition-opacity uppercase tracking-wider bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-slate-100 dark:border-slate-700">
                                      {island.code}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })
                    ) : (
                      <div className="py-8 text-center text-slate-400">
                        <MapPin size={24} className="mx-auto mb-2 opacity-20" />
                        <p className="text-xs font-thaana">{strings.noResults}</p>
                      </div>
                    )}
                 </div>
              </div>
            )}
          </div>

          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1 hidden sm:block"></div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="w-10 h-10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full font-black text-[10px] transition-all"
            >
              {lang === 'en' ? 'DV' : 'EN'}
            </button>
            <button 
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className={clsx(
                "w-10 h-10 flex items-center justify-center rounded-full transition-all",
                showSettings ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              )}
            >
              <Settings size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Expanded Settings Panel */}
      {showSettings && (
        <div className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
             <Moon size={16} />
             <span className="text-xs font-bold font-thaana">{strings.hijriOffset}</span>
             <span className="text-[10px] bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded text-slate-600 dark:text-slate-300 font-mono">
               {hijriOffset > 0 ? `+${hijriOffset}` : hijriOffset} {strings.days}
             </span>
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-slate-900 rounded-xl p-1 border border-slate-200 dark:border-slate-700 shadow-sm">
             <button onClick={() => setHijriOffset(hijriOffset - 1)} className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 font-bold">-</button>
             <div className="w-px h-4 bg-slate-200 dark:bg-slate-700"></div>
             <button onClick={() => setHijriOffset(0)} className="px-3 h-8 text-[10px] font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 uppercase tracking-wider">Reset</button>
             <div className="w-px h-4 bg-slate-200 dark:bg-slate-700"></div>
             <button onClick={() => setHijriOffset(hijriOffset + 1)} className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 font-bold">+</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;