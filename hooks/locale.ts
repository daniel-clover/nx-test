/**
 * web-portal localization interface
 *
 */

let currentLocale;

enum supportedLocales {
  'en' = 'enUS',
  'de' = 'deDE',
  'nl' = 'nlNl',
  'en-US' = 'enUS',
  'en-CA' = 'enCA',
  'en-GB' = 'enGB',
  'en-IE' = 'enIE',
  'en-AR' = 'enAR',
  'es-AR' = 'esAR',
  'de-AT' = 'deAT',
  'de-DE' = 'deDE',
  'fr-CA' = 'frCA',
  'nl-NL' = 'nlNL',
}

export type SupportedLocales =
  | 'en'
  | 'de'
  | 'nl'
  | 'en-US'
  | 'en-CA'
  | 'en-GB'
  | 'en-IE'
  | 'en-AR'
  | 'es-AR'
  | 'de-AT'
  | 'fr-CA'
  | 'nl-NL';
// export type SupportedLocales = keyof typeof supportedLocales;

export function setCurrentLocale(locale: string) {
  currentLocale = locale;
}

export function getCurrentLocale(): SupportedLocales {
  return currentLocale;
}

export function getSupportedLocales() {
  return supportedLocales;
}
