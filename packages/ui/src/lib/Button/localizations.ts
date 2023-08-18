import { createLocalization } from '../../../hooks/createLocalization';

const localizations = createLocalization<LanguageKeys>();

type LanguageKeys = {
  loading: string;
};

const enDefault = {
  loading: 'Loading',
};

const esDefault = {
  loading: 'Cargando',
};

const deDefault = {
  loading: 'Wird geladen',
};

const frDefault = {
  loading: 'Chargement',
};

const nlDefault = {
  loading: 'Laden',
};

// EN

localizations.addDefault(enDefault);

['en', 'en-GB', 'en-CA', 'en-IE'].forEach(lang => localizations.addLanguage(lang, enDefault));

// DE

['de', 'de-AT'].forEach(lang => localizations.addLanguage(lang, deDefault));

// ES

['es', 'es-AR'].forEach(lang => localizations.addLanguage(lang, esDefault));

// FR

['fr', 'fr-CA'].forEach(lang => localizations.addLanguage(lang, frDefault));

// NL

['nl', 'nl-NL'].forEach(lang => localizations.addLanguage(lang, nlDefault));

export const getLanguageStrings = localizations.getLanguage;
