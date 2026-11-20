return (() => {
  const api = window.bunny || window.vendetta || window.kettu;
  const moment = api?.metro?.findByProps("updateLocale", "defineLocale");
  const originalFormats = {};

  const customFormat = {
    LT: "h:mm A",
    LTS: "h:mm:ss A",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY h:mm A",
    LLLL: "dddd, D MMMM YYYY h:mm A"
  };

  function getTargetLocales() {
    return [...new Set([moment.locale(), "en-gb", "en"])];
  }

  return {
    onLoad() {
      if (!moment) return;
      getTargetLocales().forEach((loc) => {
        const data = moment.localeData(loc);
        if (data?._longDateFormat && !originalFormats[loc]) {
          originalFormats[loc] = { ...data._longDateFormat };
        }
        moment.updateLocale(loc, { longDateFormat: customFormat });
      });
      moment.locale(moment.locale());
    },

    onUnload() {
      if (!moment) return;
      getTargetLocales().forEach((loc) => {
        if (originalFormats[loc]) {
          moment.updateLocale(loc, { longDateFormat: originalFormats[loc] });
        }
      });
      moment.locale(moment.locale());
    }
  };
})();
