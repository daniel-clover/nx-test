type LocInterface<T> = {
  addDefault: (data: T) => void;
  addLanguage: (_lang: string, data: T) => void;
  getLanguage: (_lang: string) => T;
  translateWithParams: (_key: string, params: object) => string;
};

export function createLocalization<T>(): LocInterface<T> {
  const ldict = {};

  return {
    addDefault: (data: T) => {
      ldict["en-us"] = Object.assign(ldict["en-us"] || {}, data);
    },
    addLanguage: (_lang: string, data: T) => {
      const lang = String(_lang).toLowerCase();
      ldict[lang] = Object.assign(ldict[lang] || {}, data);
    },
    getLanguage: (_lang: string) => {
      const lang = String(_lang).toLowerCase();
      if (lang in ldict) return ldict[lang];
      const shortLang = lang.slice(0, 2);
      if (shortLang in ldict) return ldict[shortLang];
      return ldict["en-us"];
    },
    translateWithParams: (valueWithParams: string, params: object) => {
      let value: string = valueWithParams;
      if (value) {
        Object.keys(params).forEach((param) => {
          const repStr = params[param];
          const regex = new RegExp(`{{${param}}}`, "g");
          value = value.replace(regex, repStr);
        });
      }
      return value as string;
    },
  };
}
