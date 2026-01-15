import React from 'react';
import { CalendarDay, Language } from '../types';
import { WEEKDAYS_DV, WEEKDAYS_EN } from '../constants';
import DayCell from './DayCell';
import { clsx } from 'clsx';

interface CalendarGridProps {
  days: CalendarDay[];
  onDayClick: (day: CalendarDay) => void;
  selectedDay: CalendarDay | null;
  lang: Language;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ days, onDayClick, selectedDay, lang }) => {
  return (
    <div className="w-full bg-white dark:bg-slate-800 rounded-[2rem] shadow-card border border-slate-100 dark:border-slate-700 overflow-hidden transition-colors duration-300">
      {/* Weekday Headers */}
      <div className="grid grid-cols-7 border-b border-slate-50 dark:border-slate-700 bg-white dark:bg-slate-800">
        {WEEKDAYS_DV.map((day, idx) => (
          <div key={idx} className="py-5 text-center px-1">
            {/* Primary Day Label - English (Poppins Medium) */}
            <span className="block font-sans font-medium text-slate-600 dark:text-slate-300 text-[10px] sm:text-xs uppercase tracking-[0.15em] mb-1">
              {WEEKDAYS_EN[idx]}
            </span>
            
            {/* Secondary Subtitle - Dhivehi (Waheed) */}
            <span className="block font-waheed text-slate-400 dark:text-slate-500 text-sm sm:text-base">
              {day}
            </span>
          </div>
        ))}
      </div>
      
      {/* Days Grid - Subtle borders */}
      <div className="grid grid-cols-7 bg-slate-50 dark:bg-slate-800 gap-px border-t border-slate-50 dark:border-slate-700/50">
        {days.map((day, idx) => (
          <DayCell 
            key={idx} 
            day={day} 
            onClick={onDayClick}
            isSelected={selectedDay?.date.toDateString() === day.date.toDateString()}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;