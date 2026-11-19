(() => {
  const moment = bunny.metro.findByProps("updateLocale", "defineLocale");
  return {
    onLoad() {
      moment?.updateLocale("en-gb", {
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        }
      });
    },
    onUnload() {
      moment?.updateLocale("en-gb", {
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        }
      });
    }
  };
})();
