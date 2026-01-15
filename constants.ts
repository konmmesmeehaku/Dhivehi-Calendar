import { EventType, CalendarEvent, Nakaiy, PrayerTimes, LocationId, IslandData } from './types';

export const WEEKDAYS_DV = ['އާދީއްތަ', 'ހޯމަ', 'އަންގާރަ', 'ބުދަ', 'ބުރާސްފަތި', 'ހުކުރު', 'ހޮނިހިރު'];
export const WEEKDAYS_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const MONTHS_DV = [
  'ޖަނަވަރީ', 'ފެބްރުއަރީ', 'މާރިޗު', 'އޭޕްރީލް', 'މެއި', 'ޖޫން',
  'ޖުލައި', 'އޯގަސްޓު', 'ސެޕްޓެމްބަރު', 'އޮކްޓޯބަރު', 'ނޮވެމްބަރު', 'ޑިސެމްބަރު'
];

export const MONTHS_EN = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const UI_STRINGS = {
  en: {
    today: "Today",
    events: "Events",
    hijriDate: "Hijri Date",
    nakaiy: "Nakaiy",
    season: "Season",
    iruvai: "Iruvai",
    hulhangu: "Hulhangu",
    selectDate: "Select a date to view details",
    noEvents: "Enjoy your day!",
    footer: "© Dhivehi Calendar. Native Maldivian Experience.",
    close: "Close",
    prayers: "Prayer Times",
    seaState: "Sea State",
    tentative: "Tentative",
    confirmed: "Confirmed",
    sync: "Sync",
    google: "Google Calendar",
    outlook: "Outlook",
    fajr: "Fajr",
    dhuhr: "Dhuhr",
    asr: "Asr",
    maghrib: "Maghrib",
    isha: "Isha",
    nextPrayer: "Next",
    settings: "Settings",
    hijriOffset: "Hijri Offset",
    location: "Location",
    days: "days",
    searchLocation: "Search island or atoll...",
    useCurrentLocation: "Use Current Location",
    noResults: "No islands found"
  },
  dv: {
    today: "މިއަދު",
    events: "ހަރަކާތްތައް",
    hijriDate: "ހިޖުރީ ތާރީޚް",
    nakaiy: "ނަކަތް",
    season: "މޫސުން",
    iruvai: "އިރުވައި",
    hulhangu: "ހުޅަނގު",
    selectDate: "ތަފްސީލު ބެލުމަށް ތާރީޚެއް ނަގާ",
    noEvents: "އުފާވެރި ދުވަހަކަށް އެދެން!",
    footer: "© ދިވެހި ކަލަންޑަރު. ދިވެހިރާއްޖެއަށް ޚާއްސަ.",
    close: "ލައްޕާލައްވާ",
    prayers: "ނަމާދު ވަގުތުތައް",
    seaState: "ކަނޑުގެ ހާލަތު",
    tentative: "ލަފާކުރެވޭ",
    confirmed: "ކަށަވަރު",
    sync: "ސިންކް",
    google: "ގޫގުލް ކަލަންޑަރު",
    outlook: "އައުޓްލުކް",
    fajr: "ފަތިސް",
    dhuhr: "މެންދުރު",
    asr: "ޢަޞްރު",
    maghrib: "މަޣްރިބް",
    isha: "ޢިޝާ",
    nextPrayer: "ދެން",
    settings: "ސެޓިންގްސް",
    hijriOffset: "ހިޖުރީ ތަފާތު",
    location: "ރަށް",
    days: "ދުވަސް",
    searchLocation: "ރަށް ނުވަތަ އަތޮޅު ހޯއްދަވާ...",
    useCurrentLocation: "މިހާރު ހުރިތަން ބޭނުންކުރޭ",
    noResults: "ރަށެއް ނުފެނުނު"
  }
};

// Comprehensive list of Inhabited Islands
export const ISLANDS_LIST: IslandData[] = [

  // Haa Alif (Thiladhunmathi Uthuruburi)

  { "code": "HA", "atoll": "Haa Alif", "nameEn": "Baarah", "nameDv": "ބާރަށް" },

  { "code": "HA", "atoll": "Haa Alif", "nameEn": "Dhidhdhoo", "nameDv": "ދިއްދޫ" },

  { "code": "HA", "atoll": "Haa Alif", "nameEn": "Filladhoo", "nameDv": "ފިއްލަދޫ" },

  { "code": "HA", "atoll": "Haa Alif", "nameEn": "Hoarafushi", "nameDv": "ހޯރަފުށި" },

  { "code": "HA", "atoll": "Haa Alif", "nameEn": "Ihavandhoo", "nameDv": "އިހަވަންދޫ" },

  { "code": "HA", "atoll": "Haa Alif", "nameEn": "Kelaa", "nameDv": "ކެލާ" },

  { "code": "HA", "atoll": "Haa Alif", "nameEn": "Maarandhoo", "nameDv": "މާރަންދޫ" },

  { "code": "HA", "atoll": "Haa Alif", "nameEn": "Mulhadhoo", "nameDv": "މުޅަދޫ" },

  { "code": "HA", "atoll": "Haa Alif", "nameEn": "Muraidhoo", "nameDv": "މުރައިދޫ" },

  { "code": "HA", "atoll": "Haa Alif", "nameEn": "Thakandhoo", "nameDv": "ތަކަންދޫ" },

  { "code": "HA", "atoll": "Haa Alif", "nameEn": "Thuraakunu", "nameDv": "ތުރާކުނު" },

  { "code": "HA", "atoll": "Haa Alif", "nameEn": "Uligamu", "nameDv": "އުލިގަމު" },

  { "code": "HA", "atoll": "Haa Alif", "nameEn": "Utheemu", "nameDv": "އުތީމު" },

  { "code": "HA", "atoll": "Haa Alif", "nameEn": "Vashafaru", "nameDv": "ވަށަފަރު" },



  // Haa Dhaalu (Thiladhunmathi Dhekunuburi)

  { "code": "HDh", "atoll": "Haa Dhaalu", "nameEn": "Finey", "nameDv": "ފިނޭ" },

  { "code": "HDh", "atoll": "Haa Dhaalu", "nameEn": "Hanimaadhoo", "nameDv": "ހަނިމާދޫ" },

  { "code": "HDh", "atoll": "Haa Dhaalu", "nameEn": "Hirimaradhoo", "nameDv": "ހިރިމަރަދޫ" },

  { "code": "HDh", "atoll": "Haa Dhaalu", "nameEn": "Kulhudhuffushi", "nameDv": "ކުޅުދުއްފުށި" },

  { "code": "HDh", "atoll": "Haa Dhaalu", "nameEn": "Kumundhoo", "nameDv": "ކުމުންދޫ" },

  { "code": "HDh", "atoll": "Haa Dhaalu", "nameEn": "Kun'burudhoo", "nameDv": "ކުނބުރުދޫ" },

  { "code": "HDh", "atoll": "Haa Dhaalu", "nameEn": "Kurin'bee", "nameDv": "ކުރިންބީ" },

  { "code": "HDh", "atoll": "Haa Dhaalu", "nameEn": "Makunudhoo", "nameDv": "މަކުނުދޫ" },

  { "code": "HDh", "atoll": "Haa Dhaalu", "nameEn": "Naivaadhoo", "nameDv": "ނައިވާދޫ" },

  { "code": "HDh", "atoll": "Haa Dhaalu", "nameEn": "Nellaidhoo", "nameDv": "ނެއްލައިދޫ" },

  { "code": "HDh", "atoll": "Haa Dhaalu", "nameEn": "Neykurendhoo", "nameDv": "ނޭކުރެންދޫ" },

  { "code": "HDh", "atoll": "Haa Dhaalu", "nameEn": "Nolhivaramu", "nameDv": "ނޮޅިވަރަމް" },

  { "code": "HDh", "atoll": "Haa Dhaalu", "nameEn": "Nolhivaranfaru", "nameDv": "ނޮޅިވަރަންފަރު" },

  { "code": "HDh", "atoll": "Haa Dhaalu", "nameEn": "Vaikaradhoo", "nameDv": "ވައިކަރަދޫ" },



  // Shaviyani (Miladhunmadulu Uthuruburi)

  { "code": "Sh", "atoll": "Shaviyani", "nameEn": "Bileiyfahi", "nameDv": "ބިލެއްފަހި" },

  { "code": "Sh", "atoll": "Shaviyani", "nameEn": "Feevah", "nameDv": "ފީވަކު" },

  { "code": "Sh", "atoll": "Shaviyani", "nameEn": "Feydhoo", "nameDv": "ފޭދޫ" },

  { "code": "Sh", "atoll": "Shaviyani", "nameEn": "Foakaidhoo", "nameDv": "ފޯކައިދޫ" },

  { "code": "Sh", "atoll": "Shaviyani", "nameEn": "Funadhoo", "nameDv": "ފުނަދޫ" },

  { "code": "Sh", "atoll": "Shaviyani", "nameEn": "Goidhoo", "nameDv": "ގޮއިދޫ" },

  { "code": "Sh", "atoll": "Shaviyani", "nameEn": "Kan'ditheemu", "nameDv": "ކަނޑިތީމު" },

  { "code": "Sh", "atoll": "Shaviyani", "nameEn": "Komandoo", "nameDv": "ކޮމަންޑޫ" },

  { "code": "Sh", "atoll": "Shaviyani", "nameEn": "Lhaimagu", "nameDv": "ޅައިމަގު" },

  { "code": "Sh", "atoll": "Shaviyani", "nameEn": "Maaun'goodhoo", "nameDv": "މާއުނގޫދޫ" },

  { "code": "Sh", "atoll": "Shaviyani", "nameEn": "Maroshi", "nameDv": "މަރޮށި" },

  { "code": "Sh", "atoll": "Shaviyani", "nameEn": "Milandhoo", "nameDv": "މިލަންދޫ" },

  { "code": "Sh", "atoll": "Shaviyani", "nameEn": "Narudhoo", "nameDv": "ނަރުދޫ" },

  { "code": "Sh", "atoll": "Shaviyani", "nameEn": "Noomaraa", "nameDv": "ނޫމަރާ" },



  // Noonu (Miladhunmadulu Dhekunuburi)

  { "code": "N", "atoll": "Noonu", "nameEn": "Fohdhoo", "nameDv": "ފޮއްދޫ" },

  { "code": "N", "atoll": "Noonu", "nameEn": "Hen'badhoo", "nameDv": "ހެނބަދޫ" },

  { "code": "N", "atoll": "Noonu", "nameEn": "Holhudhoo", "nameDv": "ހޮޅުދޫ" },

  { "code": "N", "atoll": "Noonu", "nameEn": "Ken'dhikulhudhoo", "nameDv": "ކެނދިކުޅުދޫ" },

  { "code": "N", "atoll": "Noonu", "nameEn": "Kudafari", "nameDv": "ކުޑަފަރީ" },

  { "code": "N", "atoll": "Noonu", "nameEn": "Landhoo", "nameDv": "ލަންދޫ" },

  { "code": "N", "atoll": "Noonu", "nameEn": "Lhohi", "nameDv": "ޅޮހި" },

  { "code": "N", "atoll": "Noonu", "nameEn": "Maafaru", "nameDv": "މާފަރު" },

  { "code": "N", "atoll": "Noonu", "nameEn": "Maalhendhoo", "nameDv": "މާޅެންދޫ" },

  { "code": "N", "atoll": "Noonu", "nameEn": "Magoodhoo", "nameDv": "މަގޫދޫ" },

  { "code": "N", "atoll": "Noonu", "nameEn": "Manadhoo", "nameDv": "މަނަދޫ" },

  { "code": "N", "atoll": "Noonu", "nameEn": "Miladhoo", "nameDv": "މިލަދޫ" },

  { "code": "N", "atoll": "Noonu", "nameEn": "Velidhoo", "nameDv": "ވެލިދޫ" },



  // Raa (Maalhosmadulu Uthuruburi)

  { "code": "R", "atoll": "Raa", "nameEn": "Alifushi", "nameDv": "އަލިފުށި" },

  { "code": "R", "atoll": "Raa", "nameEn": "An'golhitheemu", "nameDv": "އަނގޮޅިތީމު" },

  { "code": "R", "atoll": "Raa", "nameEn": "Dhuvaafaru", "nameDv": "ދުވާފަރު" },

  { "code": "R", "atoll": "Raa", "nameEn": "Fainu", "nameDv": "ފައިނު" },

  { "code": "R", "atoll": "Raa", "nameEn": "Hulhudhuffaaru", "nameDv": "ހުޅުދުއްފާރު" },

  { "code": "R", "atoll": "Raa", "nameEn": "In'guraidhoo", "nameDv": "އިނގުރައިދޫ" },

  { "code": "R", "atoll": "Raa", "nameEn": "Innamaadhoo", "nameDv": "އިއްނަމާދޫ" },

  { "code": "R", "atoll": "Raa", "nameEn": "Kinolhas", "nameDv": "ކިނޮޅަސް" },

  { "code": "R", "atoll": "Raa", "nameEn": "Maakurathu", "nameDv": "މާކުރަތު" },

  { "code": "R", "atoll": "Raa", "nameEn": "Maduvvari", "nameDv": "މަޑުއްވަރީ" },

  { "code": "R", "atoll": "Raa", "nameEn": "Meedhoo", "nameDv": "މީދޫ" },

  { "code": "R", "atoll": "Raa", "nameEn": "Rasgetheemu", "nameDv": "ރަސްގެތީމު" },

  { "code": "R", "atoll": "Raa", "nameEn": "Rasmaadhoo", "nameDv": "ރަސްމާދޫ" },

  { "code": "R", "atoll": "Raa", "nameEn": "Un'goofaaru", "nameDv": "އުނގޫފާރު" },

  { "code": "R", "atoll": "Raa", "nameEn": "Vaadhoo", "nameDv": "ވާދޫ" },



  // Baa (Maalhosmadulu Dhekunuburi)

  { "code": "B", "atoll": "Baa", "nameEn": "Dharavandhoo", "nameDv": "ދަރަވަންދޫ" },

  { "code": "B", "atoll": "Baa", "nameEn": "Dhonfanu", "nameDv": "ދޮންފަނު" },

  { "code": "B", "atoll": "Baa", "nameEn": "Eydhafushi", "nameDv": "އޭދަފުށި" },

  { "code": "B", "atoll": "Baa", "nameEn": "Fehendhoo", "nameDv": "ފެހެންދޫ" },

  { "code": "B", "atoll": "Baa", "nameEn": "Fulhadhoo", "nameDv": "ފުޅަދޫ" },

  { "code": "B", "atoll": "Baa", "nameEn": "Goidhoo", "nameDv": "ގޮއިދޫ" },

  { "code": "B", "atoll": "Baa", "nameEn": "Hithaadhoo", "nameDv": "ހިތާދޫ" },

  { "code": "B", "atoll": "Baa", "nameEn": "Kamadhoo", "nameDv": "ކަމަދޫ" },

  { "code": "B", "atoll": "Baa", "nameEn": "Kendhoo", "nameDv": "ކެންދޫ" },

  { "code": "B", "atoll": "Baa", "nameEn": "Kihaadhoo", "nameDv": "ކިހާދޫ" },

  { "code": "B", "atoll": "Baa", "nameEn": "Kudarikilu", "nameDv": "ކުޑަރިކިލު" },

  { "code": "B", "atoll": "Baa", "nameEn": "Maalhos", "nameDv": "މާޅޮސް" },

  { "code": "B", "atoll": "Baa", "nameEn": "Thulhaadhoo", "nameDv": "ތުޅާދޫ" },



  // Lhaviyani (Faadhippolhu)

  { "code": "Lh", "atoll": "Lhaviyani", "nameEn": "Hinnavaru", "nameDv": "ހިންނަވަރު" },

  { "code": "Lh", "atoll": "Lhaviyani", "nameEn": "Kurendhoo", "nameDv": "ކުރެންދޫ" },

  { "code": "Lh", "atoll": "Lhaviyani", "nameEn": "Maafilaafushi", "nameDv": "މާފިލާފުށި" },

  { "code": "Lh", "atoll": "Lhaviyani", "nameEn": "Naifaru", "nameDv": "ނައިފަރު" },

  { "code": "Lh", "atoll": "Lhaviyani", "nameEn": "Olhuvelifushi", "nameDv": "އޮޅުވެލިފުށި" },



  // Kaafu (Male Atholhu)

  { "code": "K", "atoll": "Kaafu", "nameEn": "Dhiffushi", "nameDv": "ދިއްފުށި" },

  { "code": "K", "atoll": "Kaafu", "nameEn": "Gaafaru", "nameDv": "ގާފަރު" },

  { "code": "K", "atoll": "Kaafu", "nameEn": "Gulhi", "nameDv": "ގުޅި" },

  { "code": "K", "atoll": "Kaafu", "nameEn": "Guraidhoo", "nameDv": "ގުރައިދޫ" },

  { "code": "K", "atoll": "Kaafu", "nameEn": "Himmafushi", "nameDv": "ހިއްމަފުށި" },

  { "code": "K", "atoll": "Kaafu", "nameEn": "Huraa", "nameDv": "ހުރާ" },

  { "code": "K", "atoll": "Kaafu", "nameEn": "Kaashidhoo", "nameDv": "ކާށިދޫ" },

  { "code": "K", "atoll": "Kaafu", "nameEn": "Maafushi", "nameDv": "މާފުށި" },

  { "code": "K", "atoll": "Kaafu", "nameEn": "Thulusdhoo", "nameDv": "ތުލުސްދޫ" },



  // Alifu Alifu (Ari Atholhu Uthuruburi)

  { "code": "AA", "atoll": "Alifu Alifu", "nameEn": "Bodufolhudhoo", "nameDv": "ބޮޑުފޮޅުދޫ" },

  { "code": "AA", "atoll": "Alifu Alifu", "nameEn": "Feridhoo", "nameDv": "ފެރިދޫ" },

  { "code": "AA", "atoll": "Alifu Alifu", "nameEn": "Himendhoo", "nameDv": "ހިމެންދޫ" },

  { "code": "AA", "atoll": "Alifu Alifu", "nameEn": "Maalhos", "nameDv": "މާޅޮސް" },

  { "code": "AA", "atoll": "Alifu Alifu", "nameEn": "Mathiveri", "nameDv": "މަތިވެރި" },

  { "code": "AA", "atoll": "Alifu Alifu", "nameEn": "Rasdhoo", "nameDv": "ރަސްދޫ" },

  { "code": "AA", "atoll": "Alifu Alifu", "nameEn": "Thoddoo", "nameDv": "ތޮއްޑޫ" },

  { "code": "AA", "atoll": "Alifu Alifu", "nameEn": "Ukulhas", "nameDv": "އުކުޅަސް" },



  // Alifu Dhaalu (Ari Atholhu Dhekunuburi)

  { "code": "ADh", "atoll": "Alifu Dhaalu", "nameEn": "Dhan'gethi", "nameDv": "ދަނގެތި" },

  { "code": "ADh", "atoll": "Alifu Dhaalu", "nameEn": "Dhigurah", "nameDv": "ދިގުރަށް" },

  { "code": "ADh", "atoll": "Alifu Dhaalu", "nameEn": "Dhidhdhoo", "nameDv": "ދިއްދޫ" },

  { "code": "ADh", "atoll": "Alifu Dhaalu", "nameEn": "Fenfushi", "nameDv": "ފެންފުށި" },

  { "code": "ADh", "atoll": "Alifu Dhaalu", "nameEn": "Hangnaameedhoo", "nameDv": "ހަންޏާމީދޫ" },

  { "code": "ADh", "atoll": "Alifu Dhaalu", "nameEn": "Kun'burudhoo", "nameDv": "ކުނބުރުދޫ" },

  { "code": "ADh", "atoll": "Alifu Dhaalu", "nameEn": "Maamin'gili", "nameDv": "މާމިނގިލި" },

  { "code": "ADh", "atoll": "Alifu Dhaalu", "nameEn": "Mahibadhoo", "nameDv": "މަހިބަދޫ" },

  { "code": "ADh", "atoll": "Alifu Dhaalu", "nameEn": "Mandhoo", "nameDv": "މަންދޫ" },

  { "code": "ADh", "atoll": "Alifu Dhaalu", "nameEn": "Omadhoo", "nameDv": "އޮމަދޫ" },



  // Vaavu (Felidhe Atholhu)

  { "code": "V", "atoll": "Vaavu", "nameEn": "Felidhoo", "nameDv": "ފެލިދޫ" },

  { "code": "V", "atoll": "Vaavu", "nameEn": "Fulidhoo", "nameDv": "ފުލިދޫ" },

  { "code": "V", "atoll": "Vaavu", "nameEn": "Keyodhoo", "nameDv": "ކެޔޮދޫ" },

  { "code": "V", "atoll": "Vaavu", "nameEn": "Rakeedhoo", "nameDv": "ރަކީދޫ" },

  { "code": "V", "atoll": "Vaavu", "nameEn": "Thinadhoo", "nameDv": "ތިނަދޫ" },



  // Meemu (Mulaku Atholhu)

  { "code": "M", "atoll": "Meemu", "nameEn": "Dhiggaru", "nameDv": "ދިއްގަރު" },

  { "code": "M", "atoll": "Meemu", "nameEn": "Kolhufushi", "nameDv": "ކޮޅުފުށި" },

  { "code": "M", "atoll": "Meemu", "nameEn": "Maduvvari", "nameDv": "މަޑުއްވަރީ" },

  { "code": "M", "atoll": "Meemu", "nameEn": "Mulah", "nameDv": "މުލައް" },

  { "code": "M", "atoll": "Meemu", "nameEn": "Muli", "nameDv": "މުލި" },

  { "code": "M", "atoll": "Meemu", "nameEn": "Naalaafushi", "nameDv": "ނާލާފުށި" },

  { "code": "M", "atoll": "Meemu", "nameEn": "Raiymandhoo", "nameDv": "ރަތްމަންދޫ" },

  { "code": "M", "atoll": "Meemu", "nameEn": "Veyvah", "nameDv": "ވޭވަށް" },



  // Faafu (Nilandhe Atholhu Uthuruburi)

  { "code": "F", "atoll": "Faafu", "nameEn": "Bileddhoo", "nameDv": "ބިލެއްދޫ" },

  { "code": "F", "atoll": "Faafu", "nameEn": "Dharan'boodhoo", "nameDv": "ދަރަނބޫދޫ" },

  { "code": "F", "atoll": "Faafu", "nameEn": "Feeali", "nameDv": "ފީއަލި" },

  { "code": "F", "atoll": "Faafu", "nameEn": "Magoodhoo", "nameDv": "މަގޫދޫ" },

  { "code": "F", "atoll": "Faafu", "nameEn": "Nilandhoo", "nameDv": "ނިލަންދޫ" },



  // Dhaalu (Nilandhe Atholhu Dhekunuburi)

  { "code": "Dh", "atoll": "Dhaalu", "nameEn": "Ban'didhoo", "nameDv": "ބަނޑިދޫ" },

  { "code": "Dh", "atoll": "Dhaalu", "nameEn": "Hulhudheli", "nameDv": "ހުޅުދެލި" },

  { "code": "Dh", "atoll": "Dhaalu", "nameEn": "Kudahuvadhoo", "nameDv": "ކުޑަހުވަދޫ" },

  { "code": "Dh", "atoll": "Dhaalu", "nameEn": "Maaen'boodhoo", "nameDv": "މާއެނބޫދޫ" },

  { "code": "Dh", "atoll": "Dhaalu", "nameEn": "Meedhoo", "nameDv": "މީދޫ" },

  { "code": "Dh", "atoll": "Dhaalu", "nameEn": "Rin'budhoo", "nameDv": "ރިނބުދޫ" },

  { "code": "Dh", "atoll": "Dhaalu", "nameEn": "Vaanee", "nameDv": "ވާނީ" },



  // Thaa (Kolhumadulu)

  { "code": "Th", "atoll": "Thaa", "nameEn": "Burunee", "nameDv": "ބުރުނީ" },

  { "code": "Th", "atoll": "Thaa", "nameEn": "Dhiyamigili", "nameDv": "ދިޔަމިގިލި" },

  { "code": "Th", "atoll": "Thaa", "nameEn": "Gaadhiffushi", "nameDv": "ގާދިއްފުށި" },

  { "code": "Th", "atoll": "Thaa", "nameEn": "Guraidhoo", "nameDv": "ގުރައިދޫ" },

  { "code": "Th", "atoll": "Thaa", "nameEn": "Hirilandhoo", "nameDv": "ހިރިލަންދޫ" },

  { "code": "Th", "atoll": "Thaa", "nameEn": "Kan'doodhoo", "nameDv": "ކަނޑޫދޫ" },

  { "code": "Th", "atoll": "Thaa", "nameEn": "Kin'bidhoo", "nameDv": "ކިނބިދޫ" },

  { "code": "Th", "atoll": "Thaa", "nameEn": "Madifushi", "nameDv": "މަޑިފުށި" },

  { "code": "Th", "atoll": "Thaa", "nameEn": "Omadhoo", "nameDv": "އޮމަދޫ" },

  { "code": "Th", "atoll": "Thaa", "nameEn": "Thimarafushi", "nameDv": "ތިމަރަފުށި" },

  { "code": "Th", "atoll": "Thaa", "nameEn": "Vandhoo", "nameDv": "ވަންދޫ" },

  { "code": "Th", "atoll": "Thaa", "nameEn": "Veymandoo", "nameDv": "ވޭމަންޑޫ" },

  { "code": "Th", "atoll": "Thaa", "nameEn": "Vilufushi", "nameDv": "ވިލުފުށި" },



  // Laamu (Hahdhunmathi)

  { "code": "L", "atoll": "Laamu", "nameEn": "Dhan'bidhoo", "nameDv": "ދަނބިދޫ" },

  { "code": "L", "atoll": "Laamu", "nameEn": "Fonadhoo", "nameDv": "ފޮނަދޫ" },

  { "code": "L", "atoll": "Laamu", "nameEn": "Gan", "nameDv": "ގަން" },

  { "code": "L", "atoll": "Laamu", "nameEn": "Hithadhoo", "nameDv": "ހިތަދޫ" },

  { "code": "L", "atoll": "Laamu", "nameEn": "Isdhoo", "nameDv": "އިސްދޫ" },

  { "code": "L", "atoll": "Laamu", "nameEn": "Kalaidhoo", "nameDv": "ކަލައިދޫ" },

  { "code": "L", "atoll": "Laamu", "nameEn": "Kunahandhoo", "nameDv": "ކުނަހަންދޫ" },

  { "code": "L", "atoll": "Laamu", "nameEn": "Maabaidhoo", "nameDv": "މާބައިދޫ" },

  { "code": "L", "atoll": "Laamu", "nameEn": "Maamendhoo", "nameDv": "މާމެންދޫ" },

  { "code": "L", "atoll": "Laamu", "nameEn": "Maavah", "nameDv": "މާވަށު" },

  { "code": "L", "atoll": "Laamu", "nameEn": "Mundoo", "nameDv": "މުންޑޫ" },



  // Gaafu Alif (Huvadhu Atholhu Uthuruburi)

  { "code": "GA", "atoll": "Gaafu Alif", "nameEn": "Dhaandhoo", "nameDv": "ދާންދޫ" },

  { "code": "GA", "atoll": "Gaafu Alif", "nameEn": "Dhevvadhoo", "nameDv": "ދެއްވަދޫ" },

  { "code": "GA", "atoll": "Gaafu Alif", "nameEn": "Gemanafushi", "nameDv": "ގެމަނަފުށި" },

  { "code": "GA", "atoll": "Gaafu Alif", "nameEn": "Kan'duhulhudhoo", "nameDv": "ކަނޑުހުޅުދޫ" },

  { "code": "GA", "atoll": "Gaafu Alif", "nameEn": "Kolamaafushi", "nameDv": "ކޮލަމާފުށި" },

  { "code": "GA", "atoll": "Gaafu Alif", "nameEn": "Kon'dey", "nameDv": "ކޮނޑޭ" },

  { "code": "GA", "atoll": "Gaafu Alif", "nameEn": "Maamendhoo", "nameDv": "މާމެންދޫ" },

  { "code": "GA", "atoll": "Gaafu Alif", "nameEn": "Nilandhoo", "nameDv": "ނިލަންދޫ" },

  { "code": "GA", "atoll": "Gaafu Alif", "nameEn": "Vilingili", "nameDv": "ވިލިނގިލި" },



  // Gaafu Dhaalu (Huvadhu Atholhu Dhekunuburi)

  { "code": "GDh", "atoll": "Gaafu Dhaalu", "nameEn": "Faresmaathodaa", "nameDv": "ފަރެސްމާތޮޑާ" },

  { "code": "GDh", "atoll": "Gaafu Dhaalu", "nameEn": "Fiyoari", "nameDv": "ފިޔޯރީ" },

  { "code": "GDh", "atoll": "Gaafu Dhaalu", "nameEn": "Gahdhoo", "nameDv": "ގައްދޫ" },

  { "code": "GDh", "atoll": "Gaafu Dhaalu", "nameEn": "Hoan'dehdoo", "nameDv": "ހޯނޑެއްދޫ" },

  { "code": "GDh", "atoll": "Gaafu Dhaalu", "nameEn": "Madaveli", "nameDv": "މަޑަވެލި" },

  { "code": "GDh", "atoll": "Gaafu Dhaalu", "nameEn": "Nadellaa", "nameDv": "ނަޑެއްލާ" },

  { "code": "GDh", "atoll": "Gaafu Dhaalu", "nameEn": "Rathafandhoo", "nameDv": "ރަތަފަންދޫ" },

  { "code": "GDh", "atoll": "Gaafu Dhaalu", "nameEn": "Thinadhoo", "nameDv": "ތިނަދޫ" },

  { "code": "GDh", "atoll": "Gaafu Dhaalu", "nameEn": "Vaadhoo", "nameDv": "ވާދޫ" },



  // Gnaviyani (Fuvahmulah)

  { "code": "Gn", "atoll": "Gnaviyani", "nameEn": "Fuvahmulah", "nameDv": "ފުވައްމުލައް" },



  // Seenu (Addu Atoll)

  { "code": "S", "atoll": "Seenu", "nameEn": "Feydhoo", "nameDv": "ފޭދޫ" },

  { "code": "S", "atoll": "Seenu", "nameEn": "Hithadhoo", "nameDv": "ހިތަދޫ" },

  { "code": "S", "atoll": "Seenu", "nameEn": "Hulhudhoo", "nameDv": "ހުޅުދޫ" },

  { "code": "S", "atoll": "Seenu", "nameEn": "Maradhoo", "nameDv": "މަރަދޫ" },

  { "code": "S", "atoll": "Seenu", "nameEn": "Maradhoo-Feydhoo", "nameDv": "މަރަދޫފޭދޫ" },

  { "code": "S", "atoll": "Seenu", "nameEn": "Meedhoo", "nameDv": "މީދޫ" }

]
];

export const PRAYER_TIMES_BY_LOCATION: Record<string, PrayerTimes> = {
  male: {
    fajr: "04:58",
    sunrise: "06:12",
    dhuhr: "12:18",
    asr: "15:38",
    maghrib: "18:24",
    isha: "19:34"
  },
  addu: {
    fajr: "05:05",
    sunrise: "06:19",
    dhuhr: "12:25",
    asr: "15:45",
    maghrib: "18:31",
    isha: "19:41"
  },
  kulhudhuffushi: {
    fajr: "04:50",
    sunrise: "06:05",
    dhuhr: "12:12",
    asr: "15:32",
    maghrib: "18:18",
    isha: "19:28"
  }
};

export const DEFAULT_PRAYER_TIMES = PRAYER_TIMES_BY_LOCATION.male;

export const NAKAIY_LIST: Nakaiy[] = [
  { id: 'mul', nameEn: 'Mula', nameDv: 'މުލަ', season: 'iruvai', startMonth: 11, startDay: 10, weatherEn: 'Strong winds, rough seas', weatherDv: 'ވައިބާރުވެ ކަނޑުތައް ގަދަވާނެ', seaStateEn: 'Rough', seaStateDv: 'ގަދަ', isRough: true },
  { id: 'fur', nameEn: 'Furahalha', nameDv: 'ފުރަހަޅަ', season: 'iruvai', startMonth: 11, startDay: 23, weatherEn: 'Strong northeasterly winds', weatherDv: 'އުތުރުން ވައިޖެހޭނެ', seaStateEn: 'Rough', seaStateDv: 'ގަދަ', isRough: true },
  { id: 'uth', nameEn: 'Uthuruhalha', nameDv: 'އުތުރުހަޅަ', season: 'iruvai', startMonth: 0, startDay: 6, weatherEn: 'Clear skies, strong winds', weatherDv: 'އުޑުމަތި ސާފުވެފައި ވައިގަދަވާނެ', seaStateEn: 'Moderate', seaStateDv: 'މެދުމިން', isRough: false },
  { id: 'huv', nameEn: 'Huvan', nameDv: 'ހުވަން', season: 'iruvai', startMonth: 0, startDay: 19, weatherEn: 'Calm seas, blue skies', weatherDv: 'ކަނޑު މަޑުވެފައި އުޑުމަތި ސާފުވާނެ', seaStateEn: 'Calm', seaStateDv: 'މަޑު', isRough: false },
  { id: 'dhi', nameEn: 'Dhinasha', nameDv: 'ދިނަށަ', season: 'iruvai', startMonth: 1, startDay: 1, weatherEn: 'Northeasterly moderate winds', weatherDv: 'އުތުރުން މެދުމިންވަރަކަށް ވައިޖެހޭނެ', seaStateEn: 'Moderate', seaStateDv: 'މެދުމިން', isRough: false },
  { id: 'hiy', nameEn: 'Hiyavia', nameDv: 'ހިޔަވި', season: 'iruvai', startMonth: 1, startDay: 14, weatherEn: 'Calm seas, hot days', weatherDv: 'ކަނޑުތައް މަޑުވެފައި ހޫނުގަދަވާނެ', seaStateEn: 'Calm', seaStateDv: 'މަޑު', isRough: false },
  { id: 'fub', nameEn: 'Furaabadhuruva', nameDv: 'ފުރާބަދުރުވަ', season: 'iruvai', startMonth: 1, startDay: 27, weatherEn: 'Frequent short showers', weatherDv: 'ކުއްލިއަކަށް ވިއްސާރަ ކުރާނެ', seaStateEn: 'Moderate', seaStateDv: 'މެދުމިން', isRough: false },
  { id: 'fab', nameEn: 'Fasbadhuruva', nameDv: 'ފަސްބަދުރުވަ', season: 'iruvai', startMonth: 2, startDay: 12, weatherEn: 'Occasional thunder', weatherDv: 'ގުގުރުމާއެކު ވިއްސާރަވުން އެކަށީގެންވޭ', seaStateEn: 'Moderate', seaStateDv: 'މެދުމިން', isRough: false },
  { id: 'rey', nameEn: 'Reyva', nameDv: 'ރޭވަ', season: 'iruvai', startMonth: 2, startDay: 26, weatherEn: 'Hot, storms possible', weatherDv: 'ހޫނުގަދަވެފައި ވިއްސާރަވުން އެކަށީގެންވޭ', seaStateEn: 'Moderate', seaStateDv: 'މެދުމިން', isRough: false },
  { id: 'ass', nameEn: 'Assidha', nameDv: 'އައްސިދަ', season: 'hulhangu', startMonth: 3, startDay: 8, weatherEn: 'Start of Hulhangu, storms', weatherDv: 'ހުޅަނގު މޫސުން ފެށި ވިއްސާރަ ކުރާނެ', seaStateEn: 'Rough', seaStateDv: 'ގަދަ', isRough: true },
  { id: 'bur', nameEn: 'Burunu', nameDv: 'ބުރުނު', season: 'hulhangu', startMonth: 3, startDay: 22, weatherEn: 'Windy and rainy', weatherDv: 'ވައިގަދަވެ ވިއްސާރަ ކުރާނެ', seaStateEn: 'Rough', seaStateDv: 'ގަދަ', isRough: true },
  { id: 'ket', nameEn: 'Kethi', nameDv: 'ކެތި', season: 'hulhangu', startMonth: 4, startDay: 6, weatherEn: 'Dark clouds, frequent rain', weatherDv: 'ވިލާ ބޯވެ ވާރޭ ވެހޭނެ', seaStateEn: 'Moderate', seaStateDv: 'މެދުމިން', isRough: false },
  { id: 'roa', nameEn: 'Roanu', nameDv: 'ރޯނު', season: 'hulhangu', startMonth: 4, startDay: 20, weatherEn: 'Strong winds, rough seas', weatherDv: 'ވައިބާރުވެ ކަނޑުތައް ގަދަވާނެ', seaStateEn: 'Rough', seaStateDv: 'ގަދަ', isRough: true },
  { id: 'mia', nameEn: 'Miaheli', nameDv: 'މިއަހެލި', season: 'hulhangu', startMonth: 5, startDay: 3, weatherEn: 'Stormy, high waves', weatherDv: 'ވިއްސާރަވެ ކަނޑުތައް ގަދަވާނެ', seaStateEn: 'Rough', seaStateDv: 'ގަދަ', isRough: true },
  { id: 'adh', nameEn: 'Adha', nameDv: 'އަދަ', season: 'hulhangu', startMonth: 5, startDay: 17, weatherEn: 'South westerly winds', weatherDv: 'ހުޅަނގު ދެކުނުން ވައިޖެހޭނެ', seaStateEn: 'Moderate', seaStateDv: 'މެދުމިން', isRough: false },
  { id: 'fun', nameEn: 'Funoas', nameDv: 'ފުނޯސް', season: 'hulhangu', startMonth: 6, startDay: 1, weatherEn: 'Stormy, rough seas', weatherDv: 'ވިއްސާރަވެ ކަނޑުތައް ގަދަވާނެ', seaStateEn: 'Rough', seaStateDv: 'ގަދަ', isRough: true },
  { id: 'fus', nameEn: 'Fus', nameDv: 'ފުސް', season: 'hulhangu', startMonth: 6, startDay: 15, weatherEn: 'Wet and cloudy', weatherDv: 'ވިއްސާރަވެ އުޑުމަތި ބަނަވާނެ', seaStateEn: 'Moderate', seaStateDv: 'މެދުމިން', isRough: false },
  { id: 'ahu', nameEn: 'Ahuliha', nameDv: 'އަހުލިހަ', season: 'hulhangu', startMonth: 6, startDay: 29, weatherEn: 'Calmer days anticipated', weatherDv: 'މޫސުން ތަންކޮޅެއް ރަނގަޅުވާނެ', seaStateEn: 'Calm', seaStateDv: 'މަޑު', isRough: false },
  { id: 'maa', nameEn: 'Maa', nameDv: 'މާ', season: 'hulhangu', startMonth: 7, startDay: 11, weatherEn: 'Generally calm', weatherDv: 'އާންމުކޮށް މޫސުން ރަނގަޅުވާނެ', seaStateEn: 'Calm', seaStateDv: 'މަޑު', isRough: false },
  { id: 'fura', nameEn: 'Fura', nameDv: 'ފުރަ', season: 'hulhangu', startMonth: 7, startDay: 24, weatherEn: 'Isolated showers', weatherDv: 'ތަންތަންކޮޅަށް ވާރޭވެހުން އެކަށީގެންވޭ', seaStateEn: 'Moderate', seaStateDv: 'މެދުމިން', isRough: false },
  { id: 'uthura', nameEn: 'Uthura', nameDv: 'އުތުރަ', season: 'hulhangu', startMonth: 8, startDay: 7, weatherEn: 'Strong north westerly winds', weatherDv: 'ހުޅަނގު އުތުރުން ބާރަށް ވައިޖެހޭނެ', seaStateEn: 'Rough', seaStateDv: 'ގަދަ', isRough: true },
  { id: 'ath', nameEn: 'Atha', nameDv: 'އަތަ', season: 'hulhangu', startMonth: 8, startDay: 21, weatherEn: 'Clear skies, calm winds', weatherDv: 'އުޑުމަތި ސާފުވެ ވައިމަޑުވާނެ', seaStateEn: 'Calm', seaStateDv: 'މަޑު', isRough: false },
  { id: 'hit', nameEn: 'Hitha', nameDv: 'ހިތަ', season: 'hulhangu', startMonth: 9, startDay: 4, weatherEn: 'Minor showers', weatherDv: 'ކޮންމެވެސް ވަރަކަށް ވާރޭވެހޭނެ', seaStateEn: 'Moderate', seaStateDv: 'މެދުމިން', isRough: false },
  { id: 'hey', nameEn: 'Hey', nameDv: 'ހޭ', season: 'hulhangu', startMonth: 9, startDay: 18, weatherEn: 'Strong winds', weatherDv: 'ވައިގަދަވާނެ', seaStateEn: 'Rough', seaStateDv: 'ގަދަ', isRough: true },
  { id: 'vih', nameEn: 'Viha', nameDv: 'ވިހަ', season: 'hulhangu', startMonth: 9, startDay: 31, weatherEn: 'Calm winds, smooth seas', weatherDv: 'ވައިމަޑުވެ ކަނޑުތައް މަޑުވާނެ', seaStateEn: 'Calm', seaStateDv: 'މަޑު', isRough: false },
  { id: 'nor', nameEn: 'Nora', nameDv: 'ނޮރަ', season: 'hulhangu', startMonth: 10, startDay: 14, weatherEn: 'Shift in wind direction', weatherDv: 'ވައިގެ މިސްރާބު ބަދަލުވާނެ', seaStateEn: 'Moderate', seaStateDv: 'މެދުމިން', isRough: false },
  { id: 'dos', nameEn: 'Dosha', nameDv: 'ދޮށަ', season: 'hulhangu', startMonth: 10, startDay: 27, weatherEn: 'Hulhangu ends', weatherDv: 'ހުޅަނގު މޫސުން ނިމޭނެ', seaStateEn: 'Calm', seaStateDv: 'މަޑު', isRough: false },
];

export const HOLIDAYS_2026: CalendarEvent[] = [
  { id: 'h1', date: new Date(2026, 0, 1), titleEn: 'New Year\'s Day', titleDv: 'އާ އަހަރު ދުވަސް', type: EventType.PUBLIC_HOLIDAY },
  { id: 'h2', date: new Date(2026, 1, 18), titleEn: 'First Day of Ramadan', titleDv: 'ރަމަޟާން މަހުގެ ފުރަތަމަ ދުވަސް', type: EventType.RELIGIOUS, isTentative: true },
  { id: 'h3', date: new Date(2026, 2, 20), titleEn: 'Eid al-Fitr', titleDv: 'ކުޑަ އީދު ދުވަސް', type: EventType.RELIGIOUS, isTentative: true },
  { id: 'h4', date: new Date(2026, 2, 21), titleEn: 'Eid al-Fitr Holiday', titleDv: 'ކުޑަ އީދު ބަންދު', type: EventType.PUBLIC_HOLIDAY },
  { id: 'h5', date: new Date(2026, 2, 22), titleEn: 'Eid al-Fitr Holiday', titleDv: 'ކުޑަ އީދު ބަންދު', type: EventType.PUBLIC_HOLIDAY },
  { id: 'h6', date: new Date(2026, 4, 1), titleEn: 'Labour Day', titleDv: 'މަސައްކަތްތެރިންގެ ދުވަސް', type: EventType.PUBLIC_HOLIDAY },
  { id: 'h7', date: new Date(2026, 4, 26), titleEn: 'Arafat Day', titleDv: 'ޢަރަފާތް ދުވަސް', type: EventType.RELIGIOUS, isTentative: true },
  { id: 'h8', date: new Date(2026, 4, 27), titleEn: 'Eid al-Adha', titleDv: 'އަޟްޙާ އީދު ދުވަސް', type: EventType.RELIGIOUS, isTentative: true },
  { id: 'h9', date: new Date(2026, 4, 28), titleEn: 'Eid al-Adha Holiday', titleDv: 'އަޟްޙާ އީދު ބަންދު', type: EventType.PUBLIC_HOLIDAY },
  { id: 'h10', date: new Date(2026, 6, 26), titleEn: 'Independence Day', titleDv: 'މިނިވަން ދުވަސް', type: EventType.PUBLIC_HOLIDAY },
  { id: 'h11', date: new Date(2026, 6, 27), titleEn: 'Independence Holiday', titleDv: 'މިނިވަން ދުވަހުގެ ބަންދު', type: EventType.PUBLIC_HOLIDAY },
  { id: 'h12', date: new Date(2026, 8, 14), titleEn: 'Islamic New Year', titleDv: 'ހިޖުރީ އާ އަހަރު', type: EventType.RELIGIOUS, isTentative: true },
  { id: 'h13', date: new Date(2026, 10, 3), titleEn: 'Victory Day', titleDv: 'ނަސްރުގެ ދުވަސް', type: EventType.PUBLIC_HOLIDAY },
  { id: 'h14', date: new Date(2026, 10, 11), titleEn: 'Republic Day', titleDv: 'ޖުމްހޫރީ ދުވަސް', type: EventType.PUBLIC_HOLIDAY },
  { id: 'h15', date: new Date(2026, 10, 23), titleEn: 'Prophet\'s Birthday', titleDv: 'ކީރިތި ރަސޫލާގެ ޢީދުމީލާދު', type: EventType.RELIGIOUS, isTentative: true },
  { id: 'h16', date: new Date(2026, 11, 11), titleEn: 'Embrace Islam Day', titleDv: 'ރާއްޖެ އިސްލާމްވި ދުވަސް', type: EventType.RELIGIOUS, isTentative: true },
];