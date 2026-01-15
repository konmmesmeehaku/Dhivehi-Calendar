import { CalendarDay, CalendarEvent, Nakaiy, PrayerTimes, LocationId, IslandData } from '../types';
import { HOLIDAYS_2026, NAKAIY_LIST, PRAYER_TIMES_BY_LOCATION, ISLANDS_LIST } from '../constants';

// Hijri Date Formatter using modern Intl API
const hijriFormatter = new Intl.DateTimeFormat('dv-MV', {
  calendar: 'islamic-umalqura',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

const hijriPartFormatter = new Intl.DateTimeFormat('en-US', {
  calendar: 'islamic-umalqura',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
});

export const getHijriDetails = (date: Date, offset: number = 0): { day: number; month: string; year: number } => {
  try {
    // Apply offset by manipulating the date object passed to the formatter
    // Note: adjusting the Gregorian date effectively finds the Hijri date for that adjusted time
    const adjustedDate = new Date(date);
    adjustedDate.setDate(date.getDate() + offset);

    const parts = hijriFormatter.formatToParts(adjustedDate);
    const day = parts.find(p => p.type === 'day')?.value;
    const month = parts.find(p => p.type === 'month')?.value;
    
    // Fallback for numeric parsing
    const numericParts = hijriPartFormatter.formatToParts(adjustedDate);
    const numericYear = parseInt(numericParts.find(p => p.type === 'year')?.value || '1447', 10);
    const numericDay = parseInt(numericParts.find(p => p.type === 'day')?.value || '1', 10);

    return {
      day: numericDay,
      month: month || '',
      year: numericYear
    };
  } catch (e) {
    console.error("Hijri conversion error", e);
    return { day: 0, month: '', year: 0 };
  }
};

export const isSameDate = (d1: Date, d2: Date) => {
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate();
};

export const getEventsForDate = (date: Date): CalendarEvent[] => {
  return HOLIDAYS_2026.filter(h => isSameDate(h.date, date));
};

export const getNakaiyForDate = (date: Date): { nakaiy: Nakaiy; isStart: boolean } => {
  const currentMonth = date.getMonth();
  const currentDay = date.getDate();
  const currentYear = date.getFullYear();

  const startingNakaiy = NAKAIY_LIST.find(n => n.startMonth === currentMonth && n.startDay === currentDay);
  if (startingNakaiy) {
    return { nakaiy: startingNakaiy, isStart: true };
  }

  const sortedNakaiy = [...NAKAIY_LIST].sort((a, b) => {
    if (a.startMonth !== b.startMonth) return a.startMonth - b.startMonth;
    return a.startDay - b.startDay;
  });

  let activeNakaiy = sortedNakaiy[sortedNakaiy.length - 1]; 

  for (let i = 0; i < sortedNakaiy.length; i++) {
    const n = sortedNakaiy[i];
    const nDate = new Date(currentYear, n.startMonth, n.startDay);
    if (date >= nDate) {
      activeNakaiy = n;
    } else {
      break; 
    }
  }

  return { nakaiy: activeNakaiy, isStart: false };
};

const isMaldivianWeekend = (date: Date): boolean => {
  const day = date.getDay();
  return day === 5 || day === 6; // Friday = 5, Saturday = 6
};

// Simplified Prayer time logic for the demo
// In a real app, this would use an algorithm based on Lat/Lng
export const getPrayerTimesForDate = (date: Date, location: LocationId): PrayerTimes => {
  // If location is a known key in PRAYER_TIMES_BY_LOCATION, use it
  if (PRAYER_TIMES_BY_LOCATION[location]) {
    return PRAYER_TIMES_BY_LOCATION[location];
  }

  // Otherwise, try to find the island in our list
  const island = ISLANDS_LIST.find(i => i.nameEn === location || i.nameDv === location);
  
  // Approximate logic: Map major regions to approximate times
  if (island) {
    const code = island.code.toLowerCase();
    // Southern Atolls
    if (['s', 'gn', 'gd', 'ga'].includes(code)) return PRAYER_TIMES_BY_LOCATION.addu;
    // Northern Atolls
    if (['ha', 'hd', 'sh'].includes(code)) return PRAYER_TIMES_BY_LOCATION.kulhudhuffushi;
  }
  
  // Default to Male'
  return PRAYER_TIMES_BY_LOCATION.male;
};

export const generateMonthGrid = (year: number, month: number, location: LocationId, hijriOffset: number): CalendarDay[] => {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  
  const daysInMonth = lastDayOfMonth.getDate();
  const startDayOfWeek = firstDayOfMonth.getDay(); 
  
  const grid: CalendarDay[] = [];

  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = 0; i < startDayOfWeek; i++) {
    const day = prevMonthLastDay - startDayOfWeek + 1 + i;
    const date = new Date(year, month - 1, day);
    const { day: hDay, month: hMonth, year: hYear } = getHijriDetails(date, hijriOffset);
    const { nakaiy, isStart } = getNakaiyForDate(date);
    
    grid.push({
      date,
      isCurrentMonth: false,
      isToday: isSameDate(date, new Date()),
      isWeekend: isMaldivianWeekend(date),
      hijriDay: hDay,
      hijriMonth: hMonth,
      hijriYear: hYear,
      events: getEventsForDate(date),
      nakaiy,
      isNakaiyStart: isStart,
      prayerTimes: getPrayerTimesForDate(date, location)
    });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    const { day: hDay, month: hMonth, year: hYear } = getHijriDetails(date, hijriOffset);
    const { nakaiy, isStart } = getNakaiyForDate(date);

    grid.push({
      date,
      isCurrentMonth: true,
      isToday: isSameDate(date, new Date()),
      isWeekend: isMaldivianWeekend(date),
      hijriDay: hDay,
      hijriMonth: hMonth,
      hijriYear: hYear,
      events: getEventsForDate(date),
      nakaiy,
      isNakaiyStart: isStart,
      prayerTimes: getPrayerTimesForDate(date, location)
    });
  }

  const remainingCells = 42 - grid.length;
  for (let i = 1; i <= remainingCells; i++) {
    const date = new Date(year, month + 1, i);
    const { day: hDay, month: hMonth, year: hYear } = getHijriDetails(date, hijriOffset);
    const { nakaiy, isStart } = getNakaiyForDate(date);

    grid.push({
      date,
      isCurrentMonth: false,
      isToday: isSameDate(date, new Date()),
      isWeekend: isMaldivianWeekend(date),
      hijriDay: hDay,
      hijriMonth: hMonth,
      hijriYear: hYear,
      events: getEventsForDate(date),
      nakaiy,
      isNakaiyStart: isStart,
      prayerTimes: getPrayerTimesForDate(date, location)
    });
  }

  return grid;
};