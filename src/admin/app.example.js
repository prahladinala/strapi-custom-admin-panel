const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  // Extend the translations
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Dashboard",

      "app.components.LeftMenu.navbrand.workplace": "A Simple Workplace",

      "Auth.form.welcome.title": "Welcome to ToolMate",

      "Auth.form.welcome.subtitle": "Login to a beautiful world",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
