export type Language = 'en' | 'dv';

export interface IslandData {
  code: string; // e.g., "HA"
  atoll: string; // e.g., "Haa Alif"
  nameEn: string;
  nameDv: string;
  lat?: number;
  lng?: number;
}

export type LocationId = string; // Changed from union type to string to support all islands

export interface Nakaiy {
  id: string;
  nameEn: string;
  nameDv: string;
  season: 'iruvai' | 'hulhangu';
  weatherEn: string;
  weatherDv: string;
  startMonth: number; // 0-11
  startDay: number;   // 1-31
  seaStateEn: string;
  seaStateDv: string;
  isRough: boolean;
}

export interface PrayerTimes {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isWeekend: boolean; // Friday & Saturday for Maldives
  hijriDay: number;
  hijriMonth: string;
  hijriYear: number;
  events: CalendarEvent[];
  nakaiy?: Nakaiy;
  isNakaiyStart?: boolean;
  prayerTimes: PrayerTimes;
}

export enum EventType {
  PUBLIC_HOLIDAY = 'PUBLIC_HOLIDAY',
  GOVERNMENT_HOLIDAY = 'GOVERNMENT_HOLIDAY',
  OBSERVANCE = 'OBSERVANCE',
  ACADEMIC = 'ACADEMIC',
  RELIGIOUS = 'RELIGIOUS'
}

export interface CalendarEvent {
  id: string;
  titleEn: string;
  titleDv: string; 
  date: Date;
  type: EventType;
  isTentative?: boolean;
  isConfirmed?: boolean;
}

export interface MonthData {
  nameEn: string;
  nameDv: string;
  year: number;
  days: CalendarDay[];
}