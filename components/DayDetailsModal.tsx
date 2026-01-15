import React, { useEffect, useState } from 'react';
import { CalendarDay, EventType, Language } from '../types';
import { createPortal } from 'react-dom';
import { X, Moon, CloudSun, Wind, Calendar, GraduationCap } from 'lucide-react';
import { MONTHS_DV, UI_STRINGS } from '../constants';
import { clsx } from 'clsx';

interface DayDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  day: CalendarDay | null;
  lang: Language;
}

const DayDetailsModal: React.FC<DayDetailsModalProps> = ({ isOpen, onClose, day, lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;
  if (!day) return null;

  const strings = UI_STRINGS[lang];
  const gregorianMonthName = MONTHS_DV[day.date.getMonth()];
  const nakaiy = day.nakaiy;
  const isHoliday = day.events.some(e => e.type === EventType.PUBLIC_HOLIDAY);
  const isWeekend = day.isWeekend;

  const modalContent = (
    <div 
      className={clsx(
        "fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6",
        "transition-all duration-300",
        isOpen ? "opacity-100" : "opacity-0"
      )}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Card Container - Bottom Sheet on Mobile, Centered on Desktop */}
      <div 
        className={clsx(
          "relative w-full max-w-md bg-white dark:bg-slate-800 shadow-2xl flex flex-col max-h-[85vh] sm:max-h-[90vh]", 
          "rounded-t-[2.5rem] sm:rounded-[2.5rem] border-t sm:border border-white/50 dark:border-slate-700",
          "transform transition-all duration-300 ease-out",
          isOpen ? "translate-y-0 scale-100" : "translate-y-full sm:translate-y-8 sm:scale-95"
        )}
        dir={lang === 'dv' ? 'rtl' : 'ltr'}
      >
        {/* Mobile Drag Handle */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-slate-300/50 rounded-full sm:hidden z-20"></div>

        {/* Header / Top Decor */}
        <div className={clsx(
          "shrink-0 h-32 sm:h-40 w-full p-6 sm:p-8 relative flex flex-col justify-end rounded-t-[2.5rem] overflow-hidden",
          (isHoliday || isWeekend)
            ? "bg-gradient-to-br from-crayon to-red-400" 
            : "bg-gradient-to-br from-grass to-sky"
        )}>
          {/* Decorative Elements */}
          <div className="absolute top-[-20%] left-[-10%] w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>

          <button 
            onClick={onClose}
            className="absolute top-5 left-5 text-white hover:text-white bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors z-10 backdrop-blur-md hidden sm:block"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
          
          <h2 className="text-6xl sm:text-7xl font-black text-white font-sans leading-none drop-shadow-sm tracking-tighter">
            {day.date.getDate()}
          </h2>
          <p className="text-white/95 font-thaana text-2xl sm:text-3xl font-bold mt-2 drop-shadow-sm">
            {gregorianMonthName} {day.date.getFullYear()}
          </p>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 space-y-5 overflow-y-auto overscroll-contain bg-star/20 dark:bg-transparent">
          
          {/* Hijri Date Row */}
          <div className="flex items-center gap-5 bg-white dark:bg-slate-900/50 p-5 rounded-3xl border border-sky-50 dark:border-slate-700/50 shadow-sm">
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-sky-50 dark:bg-slate-700 flex items-center justify-center text-sky-500 dark:text-slate-300">
               <Moon size={24} />
            </div>
            <div>
               <p className="text-[10px] sm:text-xs text-slate-400 dark:text-slate-400 font-black uppercase tracking-widest mb-1">{strings.hijriDate}</p>
               <p className="font-thaana text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 pt-1">
                  {day.hijriDay} {day.hijriMonth} {day.hijriYear}
               </p>
            </div>
          </div>

          {/* Nakaiy Row */}
          {nakaiy && (
            <div className="flex items-center gap-5 bg-sun-50/50 dark:bg-emerald-900/10 p-5 rounded-3xl border border-sun-100 dark:border-emerald-900/30 shadow-sm">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-sun-100 dark:bg-emerald-900/40 flex items-center justify-center text-sun-600 dark:text-emerald-400">
                    {nakaiy.season === 'iruvai' ? <CloudSun size={24} /> : <Wind size={24} />}
                </div>
                <div>
                   <p className="text-[10px] sm:text-xs text-sun-600 dark:text-emerald-400 font-black uppercase tracking-widest mb-1">{strings.nakaiy}</p>
                   <p className="font-thaana text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 pt-1">
                      {nakaiy.nameDv} <span className="font-sans text-sm font-bold opacity-60">({nakaiy.nameEn})</span>
                   </p>
                   <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-thaana">
                      {lang === 'dv' ? nakaiy.weatherDv : nakaiy.weatherEn}
                   </p>
                </div>
            </div>
          )}

          {/* Events List */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-slate-700 dark:text-slate-200 px-1 mt-2">
               <Calendar size={18} className="text-grass" />
               <h3 className="font-thaana font-bold text-xl">{strings.events}</h3>
            </div>
            
            {day.events.length > 0 ? (
              <div className="space-y-3">
                {day.events.map(event => (
                  <div 
                    key={event.id}
                    className={clsx(
                      "p-5 rounded-3xl border-l-[6px] shadow-sm bg-white dark:bg-slate-800",
                      event.type === EventType.PUBLIC_HOLIDAY 
                        ? "border-crayon" 
                        : event.type === EventType.ACADEMIC 
                            ? "border-sun"
                            : "border-sky"
                    )}
                  >
                    <div className="flex items-start gap-4">
                        {event.type === EventType.ACADEMIC && <GraduationCap size={20} className="mt-1 shrink-0 text-sun" />}
                        <div>
                            <p className={clsx(
                                "font-thaana font-bold text-xl leading-relaxed pt-1",
                                event.type === EventType.PUBLIC_HOLIDAY ? "text-crayon" : "text-slate-800 dark:text-slate-200"
                            )}>{event.titleDv}</p>
                            <p className="text-xs opacity-60 font-sans font-bold text-slate-500 uppercase tracking-widest mt-1">{event.titleEn}</p>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-8 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-3xl flex flex-col items-center justify-center text-slate-400 gap-2 bg-white/50 dark:bg-slate-800/30">
                <Calendar size={24} className="opacity-20" />
                <p className="font-thaana text-sm">{strings.noEvents}</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer (Fixed at bottom) */}
        <div className="shrink-0 p-6 bg-white dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-700 flex justify-center rounded-b-[2.5rem]">
            <button 
                onClick={onClose}
                className="w-full px-8 py-4 bg-grass hover:bg-grass-600 dark:bg-slate-700 rounded-2xl shadow-lg shadow-grass/20 text-sm font-bold text-white dark:text-slate-200 transition-all font-thaana active:scale-95"
            >
                {strings.close}
            </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default DayDetailsModal;