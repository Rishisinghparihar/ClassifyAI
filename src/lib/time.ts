import { startOfDay, endOfDay } from 'date-fns';
import { fromZonedTime } from 'date-fns-tz';

const IST_TZ = 'Asia/Kolkata';

export function todayWindowUTC(date = new Date()) {
  const startIst = startOfDay(date);
  const endIst = endOfDay(date);
  const startUtc = fromZonedTime(startIst, IST_TZ);
  const endUtc = fromZonedTime(endIst, IST_TZ);

  return { startUtc, endUtc };
}
