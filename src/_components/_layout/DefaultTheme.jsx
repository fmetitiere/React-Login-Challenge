export const ThemeLight = {
  "id":"ThemeLight",
  NavBarMenuColor: "#68b5f0",
  BackgroundColor: "white",
  primaryColor: "#E04E39",
  secondaryColor: "#F2C75C",
  greyBackgroundColor: "#F4F1EF",
  fontColor: "#fff",
  Shadows: "0 0 10px rgba(0, 0, 0, 0.2)",
  fontFamily: "sans-serif",
};

export const ThemeDark = {
  "id":"ThemeDark",
  NavBarMenuColor: "#68b5f0",
  BackgroundColor: "black",
  primaryColor: "#E04E39",
  secondaryColor: "#F2C75C",
  greyBackgroundColor: "#F4F1EF",
  fontColor: "#302E38",
  Shadows: "0 0 10px rgba(0, 0, 0, 0.2)",
  fontFamily: "sans-serif",
};

export const ThemeButtons = [
  {
    id: ThemeLight.id,
    background: "#0971ce",
    color: "white",
    name: "Light",
  },
  {
    id: ThemeDark.id,
    background: "#0971ce",
    color: "white",
    name: "Dark",
  }
];

export const Themes=[ThemeLight, ThemeDark];
