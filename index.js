(() => {
  const run = () => {
    const m = bunny?.metro?.findByProps("updateLocale", "defineLocale");
    if (!m) return false;
    m.updateLocale("en-gb", {
      longDateFormat: {
        LT: "h:mm A",
        LTS: "h:mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY h:mm A",
        LLLL: "dddd, D MMMM YYYY h:mm A"
      }
    });
    return true;
  };
  let t;
  return {
    onLoad() {
      if (!run()) t = setInterval(() => { if (run()) clearInterval(t); }, 500);
    },
    onUnload() {
      if (t) clearInterval(t);
    }
  };
})();
