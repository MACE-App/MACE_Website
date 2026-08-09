// Port of LogoChooser.currentLogo from the MACE app, so the docs can show the
// same logo the app would pick today. First match wins, exactly as in Swift.
//
// Swift's Calendar uses weekday 1 = Sunday; JavaScript's getDay() is 0 = Sunday,
// so every weekday number below is the Swift value minus one.

const DAY = 86400000;

const atMidnight = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const daysBetween = (a, b) => Math.round((atMidnight(b) - atMidnight(a)) / DAY);

// Chinese New Year, which the app reads from Calendar(identifier: .chinese).
// Tabulated here rather than derived, so the docs never disagree with the app.
const LUNAR_NEW_YEAR = {
  2024: '2-10', 2025: '1-29', 2026: '2-17', 2027: '2-6',  2028: '1-26',
  2029: '2-13', 2030: '2-3',  2031: '1-23', 2032: '2-11', 2033: '1-31',
  2034: '2-19', 2035: '2-8',
};

function within1Day(d, month, day) {
  const target = new Date(d.getFullYear(), month - 1, day);
  return Math.abs(daysBetween(target, d)) <= 1;
}

// ordinal is 1-based: the nth `weekday` of the month
function within1DayOfNthWeekday(d, month, weekday, ordinal) {
  const first = new Date(d.getFullYear(), month - 1, 1);
  const shift = (weekday - first.getDay() + 7) % 7;
  const target = new Date(d.getFullYear(), month - 1, 1 + shift + (ordinal - 1) * 7);
  return Math.abs(daysBetween(target, d)) <= 1;
}

function within1DayOfLastWeekday(d, month, weekday) {
  const last = new Date(d.getFullYear(), month, 0);
  const offset = (last.getDay() - weekday + 7) % 7;
  const target = new Date(d.getFullYear(), month - 1, last.getDate() - offset);
  return Math.abs(daysBetween(target, d)) <= 1;
}

// Anonymous Gregorian Computus, matching the app's implementation.
function easter(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const dd = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - dd - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function withinEasterWindow(d, daysBefore, daysAfter) {
  const delta = daysBetween(easter(d.getFullYear()), d);
  return delta >= -daysBefore && delta <= daysAfter;
}

function withinLunarNewYear(d) {
  const entry = LUNAR_NEW_YEAR[d.getFullYear()];
  if (!entry) return false;
  const [m, day] = entry.split('-').map(Number);
  return within1Day(d, m, day);
}

function dayOfYear(d) {
  return daysBetween(new Date(d.getFullYear(), 0, 1), d) + 1;
}

/** Asset name the app would show on `date` with Holiday Logo turned on. */
export function scheduledLogo(date = new Date()) {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // National days: narrow windows, checked first
  if (withinLunarNewYear(date)) return 'logo_lunar_new_year';
  if (month === 1 && day >= 27 && day <= 29) return 'logo_puzzle';
  if (within1Day(date, 1, 24)) return 'logo_mac_day';
  if (within1Day(date, 1, 31)) return 'logo_hot_chocolate';
  if (month === 2 && day >= 2 && day <= 4) return 'logo_groundhog';
  if (within1Day(date, 2, 9)) return 'logo_pizza';
  if (within1Day(date, 3, 14)) return 'logo_pi';
  if (within1Day(date, 4, 1)) return 'logo_april_fools';
  if (within1Day(date, 4, 15)) return 'logo_tax_day';
  if (month === 5 && day === 5) return 'logo_cinco_de_mayo';
  if (within1Day(date, 5, 4)) return 'logo_star_wars';
  if (month === 7 && day === 1) return 'logo_canada_day';
  if (month === 7 && day === 14) return 'logo_bastille_day';
  if (within1DayOfNthWeekday(date, 7, 0, 3)) return 'logo_ice_cream';
  if (within1Day(date, 7, 16)) return 'logo_cherry_day';
  if (within1Day(date, 8, 8)) return 'logo_cat_day';
  if (within1Day(date, 8, 10)) return 'logo_smores';
  if (within1Day(date, 8, 15)) return 'logo_relaxation_day';
  if (within1Day(date, 8, 26)) return 'logo_dog_day';
  if (Math.abs(dayOfYear(date) - 256) <= 1) return 'logo_programmers_day';
  if (within1Day(date, 9, 19)) return 'logo_pirate_day';
  if (within1Day(date, 9, 29)) return 'logo_coffee';
  if (within1Day(date, 10, 10)) return 'logo_mental_health';
  if (within1Day(date, 10, 14)) return 'logo_dessert_day';
  if (month === 11 && day <= 2) return 'logo_dia_de_muertos';
  if (within1Day(date, 11, 11)) return 'logo_veterans_day';
  if (within1Day(date, 11, 14)) return 'logo_pickle';
  if (within1Day(date, 11, 30)) return 'logo_computer_security';
  if (within1Day(date, 12, 4)) return 'logo_cookie';
  if (within1DayOfNthWeekday(date, 1, 1, 3)) return 'logo_mlk_day';
  if (within1DayOfNthWeekday(date, 2, 1, 3)) return 'logo_presidents_day';
  if (within1DayOfNthWeekday(date, 5, 0, 2)) return 'logo_mothers_day';
  if (within1DayOfLastWeekday(date, 5, 1)) return 'logo_memorial_day';
  if (within1DayOfNthWeekday(date, 6, 5, 1)) return 'logo_donut';
  if (within1DayOfNthWeekday(date, 6, 0, 3)) return 'logo_fathers_day';
  if (month === 7 && day >= 20 && day <= 26) return 'logo_shark_week';
  if (within1DayOfLastWeekday(date, 7, 5)) return 'logo_sysadmin_day';
  if (within1DayOfNthWeekday(date, 9, 1, 1)) return 'logo_labor_day';
  if ((month === 9 && day === 30) || (month === 10 && day <= 5)) return 'logo_oktoberfest';

  // Major holidays: broader windows
  if ((month === 12 && day >= 26) || (month === 1 && day <= 7)) return 'logo_new_years';
  if (month === 2 && day >= 5 && day <= 20) return 'logo_valentines';
  if (month === 3 && day >= 8 && day <= 24) return 'logo_stpatricks';
  if (withinEasterWindow(date, 10, 3)) return 'logo_easter';
  if (month === 4 && day >= 15 && day <= 30) return 'logo_national_earth_day';
  if (month === 6 && day <= 9) return 'logo_pride';
  if (month === 6 && day >= 10 && day <= 24) return 'logo_birthday';
  if ((month === 6 && day >= 25) || (month === 7 && day <= 10)) return 'logo_independence';
  if (month === 9 && day >= 14 && day <= 28) return 'logo_peace';
  if ((month === 10 && day >= 20) || (month === 11 && day <= 3)) return 'logo_halloween';

  // Thanksgiving: two weeks centred on the 4th Thursday of November
  if (month === 11) {
    const first = new Date(date.getFullYear(), 10, 1);
    const shift = (4 - first.getDay() + 7) % 7;
    const fourthThursday = new Date(date.getFullYear(), 10, 1 + shift + 21);
    if (Math.abs(daysBetween(fourthThursday, date)) <= 7) return 'logo_thanksgiving';
  }

  if (month === 12 && day >= 11 && day <= 25) return 'logo_christmas';

  // Seasonal fallbacks
  if (month >= 3 && month <= 5) return 'logo_spring';
  if (month >= 6 && month <= 8) return 'logo_summer';
  if (month >= 9 && month <= 11) return 'logo_fall';
  return 'logo_winter';
}
