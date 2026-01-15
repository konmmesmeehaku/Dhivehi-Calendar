import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import CalendarGrid from './components/CalendarGrid';
import InfoPanel from './components/InfoPanel';
import DayDetailsModal from './components/DayDetailsModal';
import { generateMonthGrid, isSameDate } from './utils/dateUtils';
import { CalendarDay, Language, LocationId, PrayerTimes } from './types';
import { UI_STRINGS } from './constants';

const App: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 1));
  const [selectedDay, setSelectedDay] = useState<CalendarDay | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Settings State
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<Language>('dv');
  const [location, setLocation] = useState<LocationId>('Malé'); // Default to Malé name
  const [hijriOffset, setHijriOffset] = useState<number>(0);
  
  // Live Data State
  const [livePrayerTimes, setLivePrayerTimes] = useState<PrayerTimes | null>(null);

  // Handle Dark Mode Side Effects
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Generate grid when dependencies change
  const days = useMemo(() => {
    return generateMonthGrid(currentDate.getFullYear(), currentDate.getMonth(), location, hijriOffset);
  }, [currentDate, location, hijriOffset]);

  // Auto-select date logic
  useEffect(() => {
    const today = new Date();
    const todayInGrid = days.find(d => 
      d.date.getDate() === today.getDate() && 
      d.date.getMonth() === today.getMonth() && 
      d.date.getFullYear() === today.getFullYear()
    );
    
    // Only auto-select if we haven't selected one, or if the view contains today
    if (todayInGrid && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear()) {
      setSelectedDay(todayInGrid);
    } else if (!selectedDay || selectedDay.date.getMonth() !== currentDate.getMonth()) {
      // If selected day is out of view, select first of month
      const firstOfMonth = days.find(d => d.date.getDate() === 1 && d.isCurrentMonth);
      if (firstOfMonth) setSelectedDay(firstOfMonth);
    }
  }, [days, currentDate]); 

  // Fetch Live Prayer Times
  useEffect(() => {
    const fetchPrayerTimes = async () => {
      // Only fetch if selected day is today (as typical simple APIs return current day times)
      const today = new Date();
      if (selectedDay && isSameDate(selectedDay.date, today)) {
         try {
           // We attempt to fetch using the provided API URL.
           // Note: In a production environment, this would likely require the specific Island ID 
           // or query parameters (e.g., ?id=102). Since we don't have the ID mapping, 
           // we fetch the base endpoint which usually returns the default (Male') or auto-detected location.
           const response = await fetch(`http://api.dhivehi.mv/prayer-times/`);
           const data = await response.json();

           if (data) {
             // Normalize keys (handle potential case sensitivity or extra fields)
             // Cleaning time string to HH:MM format
             const cleanTime = (t: string) => t ? t.slice(0, 5) : "";

             setLivePrayerTimes({
               fajr: cleanTime(data.fajr || data.Fajr),
               sunrise: cleanTime(data.sunrise || data.Sunrise),
               dhuhr: cleanTime(data.dhuhr || data.Dhuhr),
               asr: cleanTime(data.asr || data.Asr),
               maghrib: cleanTime(data.maghrib || data.Maghrib),
               isha: cleanTime(data.isha || data.Isha)
             });
           }
         } catch (error) {
           console.warn("Could not fetch live prayer times, falling back to static calculation.", error);
           setLivePrayerTimes(null);
         }
      } else {
        // If not today, clear live times so we use the static calculator for other dates
        setLivePrayerTimes(null);
      }
    };

    fetchPrayerTimes();
  }, [selectedDay, location]);


  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleToday = () => {
    const now = new Date();
    setCurrentDate(new Date(now.getFullYear(), now.getMonth(), 1));
  };

  const handleDayClick = (day: CalendarDay) => {
    setSelectedDay(day);
    // InfoPanel is now visible on mobile, so we don't strictly need the modal.
    // However, scrolling to view might be nice, but simple state update is cleaner.
    // We removed the auto-modal trigger to keep the "dashboard" feel requested.
  };

  return (
    <div 
      className="min-h-dvh bg-star dark:bg-charcoal text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden font-sans flex flex-col" 
      dir={lang === 'dv' ? 'rtl' : 'ltr'}
    >
      <div className="w-full max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6 flex-1">
        
        <Header 
          currentDate={currentDate}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
          onToday={handleToday}
          isDark={isDark}
          toggleTheme={() => setIsDark(!isDark)}
          lang={lang}
          toggleLang={() => setLang(prev => prev === 'en' ? 'dv' : 'en')}
          location={location}
          setLocation={setLocation}
          hijriOffset={hijriOffset}
          setHijriOffset={setHijriOffset}
        />

        {/* Layout: Split Screen on Large (Tablet/Desktop), Stack on Mobile */}
        <main className="flex flex-col lg:flex-row gap-8 items-start relative flex-1">
          
          {/* Left Column: Grid (Flex grow) */}
          <section className="w-full lg:w-2/3 xl:w-3/4">
            <CalendarGrid 
              days={days} 
              onDayClick={handleDayClick} 
              selectedDay={selectedDay}
              lang={lang}
            />
          </section>

          {/* Right Column: Info Panel */}
          {/* Changed from 'hidden lg:block' to visible on all screens. Adjusted positioning for mobile stack. */}
          <section className="w-full lg:w-1/3 xl:w-1/4 lg:sticky lg:top-6 lg:h-fit lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto no-scrollbar rounded-3xl mt-4 lg:mt-0">
            <InfoPanel 
              selectedDay={selectedDay}
              lang={lang}
              livePrayerTimes={livePrayerTimes}
            />
          </section>
        </main>

        <footer className="mt-auto text-center text-slate-400 dark:text-slate-600 text-[10px] font-bold tracking-widest uppercase border-t border-slate-200 dark:border-slate-800 pt-8 pb-10">
          <p className="font-thaana mb-2 text-xs">{UI_STRINGS[lang].footer}</p>
        </footer>

        {/* Day Details Modal - Kept available for potential future use or manual triggering */}
        <DayDetailsModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          day={selectedDay}
          lang={lang}
        />
      </div>
    </div>
  );
};

export default App;