/**
 * Single source of truth for event details.
 *
 * COUNTDOWN CONFIG: no start time or timezone was supplied, so the countdown
 * targets the START OF THE EVENT DATE. Edit `startsAt` (ISO 8601 WITH offset)
 * once the real start time / timezone is confirmed, e.g. "2026-11-15T10:30:00+05:30".
 * The "+05:30" offset below is a placeholder assumption (India Standard Time).
 */
export const EVENT = {
  couple: "Santhosh & Jency",
  coupleUpper: "SANTHOSH & JENCY",
  dateLong: "Sunday, 15 November 2026",
  venue: "SRK Hall",
  venueArea: "Arasur Bypass",
  startsAt: "2026-11-15T00:00:00+05:30",
  endsAt: "2026-11-16T00:00:00+05:30", // end of event day -> "post-event" state afterwards
};

export const MAPS_URL =
  "https://share.google/ZmD8FphYu7MSmIeWl" +
  encodeURIComponent("SRK HALL, Arasur Bypass");
