import React, { useMemo } from 'react';
import { CalendarDay, EventType, Language, PrayerTimes } from '../types';
import { Calendar, Info, Moon, CloudSun, Wind, GraduationCap, Sun, Anchor, Clock, AlertCircle, CheckCircle, Waves, Sunrise, Sparkles } from 'lucide-react';
import { MONTHS_DV, UI_STRINGS } from '../constants';
import { clsx } from 'clsx';

interface InfoPanelProps {
  selectedDay: CalendarDay | null;
  lang: Language;
  livePrayerTimes?: PrayerTimes | null;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ selectedDay, lang, livePrayerTimes }) => {
  const strings = UI_STRINGS[lang];

  // Helper to determine next prayer to highlight
  const getNextPrayer = (times: PrayerTimes): string | null => {
    if (!selectedDay?.isToday) return null; // Only highlight for today
    
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    const prayerOrder = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'] as const;
    
    for (const prayer of prayerOrder) {
      const [h, m] = times[prayer].split(':').map(Number);
      const prayerMinutes = h * 60 + m;
      if (currentMinutes < prayerMinutes) return prayer;
    }
    return 'fajr'; // Next day Fajr if all passed
  };

  if (!selectedDay) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 p-8 text-center text-slate-400 flex flex-col items-center justify-center h-full min-h-[400px] shadow-soft">
        <div className="w-20 h-20 bg-slate-50 dark:bg-slate-700/50 rounded-full flex items-center justify-center mb-6">
          <Calendar size={32} className="opacity-20 text-slate-500" />
        </div>
        <p className="font-thaana text-lg text-slate-500 font-bold mb-2">{strings.selectDate}</p>
        <p className="text-xs text-slate-400 uppercase tracking-widest">Select a day to see details</p>
      </div>
    );
  }

  const hasEvents = selectedDay.events.length > 0;
  const gregorianMonthName = MONTHS_DV[selectedDay.date.getMonth()];
  const nakaiy = selectedDay.nakaiy;
  
  const isUsingLive = !!livePrayerTimes && selectedDay.isToday;
  const prayers = isUsingLive ? livePrayerTimes! : selectedDay.prayerTimes;
  const nextPrayer = getNextPrayer(prayers);

  // Split date widget logic
  const dayName = selectedDay.date.toLocaleDateString('en-US', { weekday: 'long' });
  const dayNumber = selectedDay.date.getDate();
  const year = selectedDay.date.getFullYear();

  return (
    <div className="flex flex-col gap-6 h-full pb-4">
      
      {/* 1. Seamless Date Widget */}
      <div className="bg-white dark:bg-slate-800 rounded-[24px] shadow-soft border border-white dark:border-slate-700 p-6 flex flex-row justify-between items-start relative overflow-hidden h-[200px]">
         {/* Left Side: English */}
         <div className="flex flex-col justify-between h-full z-10">
            <div className="flex flex-col">
               <span className="font-sans font-medium text-slate-400 text-sm uppercase tracking-[0.2em] mb-1">
                 {dayName}
               </span>
               <span className="font-sans font-bold text-[64px] leading-none text-navy dark:text-white">
                 {dayNumber}
               </span>
            </div>
         </div>

         {/* Right Side: Dhivehi */}
         <div className="flex flex-col justify-between items-end h-full z-10">
            {/* Top Right Icon (Sun/Moon) */}
             <div className="text-sun dark:text-sun-600 mb-2">
               <Sun size={32} strokeWidth={1.5} />
             </div>
             
             <div className="flex flex-col items-end mt-auto">
                <div className="flex items-baseline gap-2 mb-3">
                   <span className="font-sans font-medium text-slate-400 text-lg">{year}</span>
                   <span className="font-waheed text-2xl text-grass dark:text-grass-400" dir="rtl">{gregorianMonthName}</span>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-full px-4 py-1.5 flex items-center gap-2 border border-slate-100 dark:border-slate-700">
                   <span className="font-sans font-bold text-navy dark:text-slate-200 text-sm">{selectedDay.hijriDay}</span>
                   <span className="font-thaana text-sm text-slate-600 dark:text-slate-400">{selectedDay.hijriMonth}</span>
                   <Moon size={12} className="text-slate-300 ml-1" />
                </div>
             </div>
         </div>
      </div>

      {/* 2. Seamless Prayer Times (Navy Card) */}
      <div className="bg-navy dark:bg-slate-900 rounded-[24px] p-6 shadow-lg text-white relative border border-slate-700/50">
        <div className="flex justify-between items-start mb-6">
           {/* Live Indicator */}
           <div className="flex items-center gap-2">
             {isUsingLive && (
                 <div className="flex items-center gap-1.5 text-grass-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-grass-400 animate-pulse"></div>
                    <span className="text-[9px] font-bold uppercase tracking-wider">Live</span>
                 </div>
             )}
           </div>
           
           {/* Dhivehi Header */}
           <div className="flex items-center gap-2 text-slate-300">
               <span className="font-waheed text-lg">{UI_STRINGS['dv'].prayers}</span>
               <Clock size={16} className="opacity-70" />
           </div>
        </div>

        <div className="flex justify-between items-center text-center">
             {(['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'] as const).map((key) => {
               const isActive = nextPrayer === key;
               return (
                 <div key={key} className="flex flex-col items-center gap-1.5">
                   <span className={clsx(
                     "text-[10px] font-medium uppercase tracking-wider font-sans transition-colors",
                     isActive ? "text-sun" : "text-slate-400"
                   )}>
                     {key}
                   </span>
                   <span className={clsx(
                     "text-base font-bold font-sans tracking-tight transition-colors",
                     isActive ? "text-sun" : "text-white"
                   )}>
                     {prayers[key]}
                   </span>
                 </div>
               );
             })}
        </div>
      </div>

      {/* 3. Combined Weather & Nakaiy Widget */}
      {nakaiy ? (
        <div className="bg-white dark:bg-slate-800 rounded-[24px] border border-white dark:border-slate-700 shadow-soft flex overflow-hidden h-[120px]">
           
           {/* Left: Sea State */}
           <div className="flex-1 p-4 flex flex-col items-center justify-center text-center border-r border-slate-100 dark:border-slate-700">
              <div className="mb-2">
                 {nakaiy.isRough ? <Anchor size={24} className="text-sky" /> : <Waves size={24} className="text-grass" />}
              </div>
              <span className="font-thaana text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                 {strings.seaState}
              </span>
              <span className="font-sans font-bold text-xs text-navy dark:text-white uppercase tracking-wider mt-0.5">
                 {nakaiy.seaStateEn}
              </span>
           </div>
           
           {/* Right: Nakaiy */}
           <div className="flex-1 p-4 flex flex-col items-center justify-center text-center">
              <div className="mb-2">
                 {nakaiy.season === 'iruvai' ? <Sun size={24} className="text-sun" /> : <Wind size={24} className="text-slate-400" />}
              </div>
              <span className="font-thaana font-bold text-lg text-navy dark:text-white leading-relaxed">
                 {nakaiy.nameDv}
              </span>
              <span className="font-sans font-medium text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">
                 {nakaiy.nameEn}
              </span>
           </div>
        </div>
      ) : null}

      {/* 4. Events Feed */}
      <div className="bg-white dark:bg-slate-800 rounded-[24px] border border-white dark:border-slate-700 p-6 flex-1 min-h-[200px] shadow-soft">
        <div className="flex items-center gap-2 mb-5 border-b border-slate-50 dark:border-slate-700 pb-3">
          <Calendar size={18} className="text-grass" />
          <h3 className="font-thaana font-bold text-xl">{strings.events}</h3>
        </div>

        {hasEvents ? (
          <div className="space-y-4">
            {selectedDay.events.map(event => (
              <div key={event.id} className="group">
                <p className={clsx(
                    "font-thaana font-bold text-lg leading-relaxed pt-1",
                    event.type === EventType.PUBLIC_HOLIDAY ? "text-crayon" : "text-navy dark:text-slate-100"
                )}>
                    {event.titleDv}
                </p>
                <p className="text-[10px] opacity-60 font-sans font-bold uppercase tracking-wide mt-1 text-slate-500">
                    {event.titleEn}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center py-6 opacity-40">
             <Sparkles size={24} className="text-slate-400 mb-2" />
             <p className="font-thaana text-sm text-slate-500">{strings.noEvents}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoPanel;