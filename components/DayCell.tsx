import React from 'react';
import { CalendarDay, EventType } from '../types';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Sun, CloudRain, GraduationCap, Flag, Info, Anchor } from 'lucide-react';

interface DayCellProps {
  day: CalendarDay;
  isSelected?: boolean;
  onClick: (day: CalendarDay) => void;
}

const DayCell: React.FC<DayCellProps> = ({ day, isSelected, onClick }) => {
  const isHoliday = day.events.some(e => e.type === EventType.PUBLIC_HOLIDAY || e.type === EventType.RELIGIOUS);
  const isWeekend = day.isWeekend; 
  const isNakaiyStart = day.isNakaiyStart && day.nakaiy;
  const isRoughSea = day.nakaiy?.isRough;

  const getEventStyles = (type: EventType) => {
    switch (type) {
      case EventType.PUBLIC_HOLIDAY:
      case EventType.RELIGIOUS:
        return {
          container: "bg-crayon-50 dark:bg-red-900/20 text-crayon-600 dark:text-red-200",
          dot: "bg-crayon",
          icon: <Flag size={8} className="shrink-0" />
        };
      case EventType.ACADEMIC:
        return {
          container: "bg-sun-50 dark:bg-amber-900/20 text-sun-600 dark:text-amber-200",
          dot: "bg-sun",
          icon: <GraduationCap size={8} className="shrink-0" />
        };
      default:
        return {
          container: "bg-sky-50 dark:bg-indigo-900/20 text-sky-600 dark:text-indigo-200",
          dot: "bg-sky",
          icon: <Info size={8} className="shrink-0" />
        };
    }
  };

  return (
    <div
      onClick={() => onClick(day)}
      className={twMerge(
        "relative min-h-[90px] xs:min-h-[110px] sm:min-h-[120px] md:min-h-[140px] p-2 sm:p-3 transition-all duration-200 group cursor-pointer flex flex-col overflow-hidden",
        "hover:z-20",
        day.isCurrentMonth 
            ? "bg-white dark:bg-slate-750" 
            : "bg-slate-50/50 dark:bg-slate-900/40",
        
        // Active State: Soft Fill instead of hard border
        isSelected && "bg-grass-50/50 dark:bg-grass-900/20 ring-1 ring-inset ring-grass-100 dark:ring-grass-900 z-10",
        
        // Weekend Styling - very subtle
        isWeekend && day.isCurrentMonth && !isSelected && "bg-slate-50/30 dark:bg-white/5",
        
        // Holiday Styling - subtle tint
        isHoliday && day.isCurrentMonth && !isSelected && "bg-crayon-50/10 dark:bg-red-900/5"
      )}
    >
      {/* Top Header */}
      <div className="flex justify-between items-start w-full relative z-10 mb-1">
        
        {/* Gregorian Date */}
        <span className={clsx(
          "font-sans text-xl sm:text-2xl leading-none tracking-tight transition-colors",
          day.isToday 
            ? "font-black text-grass" 
            : ( (isHoliday || isWeekend) && day.isCurrentMonth 
                ? "font-bold text-crayon" 
                : day.isCurrentMonth ? "font-medium text-slate-700 dark:text-slate-200" : "font-medium text-slate-300 dark:text-slate-600")
        )}>
          {day.date.getDate()}
        </span>

        {/* Hijri Date */}
        <div className={clsx("flex flex-col items-end transition-opacity", day.isCurrentMonth ? "opacity-60 group-hover:opacity-100" : "opacity-30")}>
          <span className={clsx(
            "font-sans font-medium text-[10px] sm:text-xs leading-none", 
            (isHoliday || isWeekend) ? "text-crayon/80" : "text-slate-400 dark:text-slate-500"
          )}>
            {day.hijriDay}
          </span>
          {day.hijriDay === 1 && (
            <span className="text-[9px] font-thaana font-bold text-grass leading-none mt-1 uppercase whitespace-nowrap pt-0.5">
              {day.hijriMonth.split(' ')[0]}
            </span>
          )}
        </div>
      </div>

      {/* Center Decorations: Marine/Rough Sea */}
      <div className="flex-1 flex items-center justify-center pointer-events-none">
        {isRoughSea && (
          <div className="opacity-[0.05] group-hover:opacity-[0.15] transition-opacity absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <Anchor size={36} className="text-sky rotate-12" />
          </div>
        )}
      </div>

      {/* Footer: Events & Nakaiy */}
      <div className="mt-auto space-y-1 w-full relative z-10 flex flex-col justify-end min-h-[20px]">
         
         {/* Nakaiy Start Badge */}
         {isNakaiyStart && day.nakaiy && (
            <div className={clsx(
               "flex items-center gap-1.5 px-2 py-0.5 rounded-md border shadow-sm w-fit max-w-full transition-transform mb-1",
               day.nakaiy.season === 'iruvai' 
                  ? "bg-sun-50 border-sun-100 text-sun-600" 
                  : "bg-sky-50 border-sky-100 text-sky-600"
            )}>
               {day.nakaiy.season === 'iruvai' 
                  ? <Sun size={10} className="shrink-0" /> 
                  : <CloudRain size={10} className="shrink-0" />
               }
               <span className="text-[10px] font-thaana font-bold leading-none pt-[3px] truncate">
                  {day.nakaiy.nameDv}
               </span>
            </div>
         )}
         
         {/* Event Listing Chips - Centered vertical aesthetic */}
         <div className="w-full">
           <div className="hidden sm:flex flex-col gap-1">
             {day.events.slice(0, 2).map(event => {
               const styles = getEventStyles(event.type);
               return (
                 <div key={event.id} className={clsx(
                   "text-[9px] truncate px-2 py-1 rounded-md font-thaana font-bold flex items-center gap-1 justify-center",
                   styles.container
                 )}>
                   <span className="truncate pt-[2px]">{event.titleDv}</span>
                 </div>
               );
             })}
           </div>

           {/* Mobile Dots */}
           <div className="flex sm:hidden gap-1 justify-center flex-wrap mt-1">
             {day.events.map(event => (
               <div key={event.id} className={clsx("w-1.5 h-1.5 rounded-full shadow-sm", getEventStyles(event.type).dot)} />
             ))}
           </div>
         </div>
      </div>
    </div>
  );
};

export default DayCell;