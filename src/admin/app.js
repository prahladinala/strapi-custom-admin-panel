import Logo from "./extensions/toolmate.png";
export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: Logo,
    },
    // Replace the favicon
    head: {
      favicon: Logo,
    },
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: Logo,
    },
    // Override or extend the theme
    theme: {
      // overwrite light theme properties
      light: {
        colors: {
          primary100: "#f6ecfc",
          primary200: "#e0c1f4",
          primary500: "#ac73e6",
          primary600: "#9736e8",
          primary700: "#8312d1",
          danger700: "#b72b1a",
        },
      },

      // overwrite dark theme properties
      dark: {
        // ...
      },
    },
    // Extend the translations
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Dashboard",

        "app.components.LeftMenu.navbrand.workplace": "A Simple Workplace",

        "Auth.form.welcome.title": "Welcome to ToolMate",
        "Auth.form.welcome.subtitle": "Login to a beautiful world",
        "Auth.form.email.placeholder": "e.g. ironman@avengers.com",
        "Auth.form.firstname.placeholder": "e.g. ironman",
        "Auth.form.username.placeholder": "e.g. Iron_Man",
        "HomePage.welcome.congrats.content":
          "You are logged in as the first administrator. To discover the powerful features provided by ToolMate,",
        "Auth.form.button.login.strapi": "Log in via ToolMate",
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },

  bootstrap() {},
};
