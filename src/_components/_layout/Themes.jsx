export const ThemeLight = {
  id: "ThemeLight",
  BackgroundColor: "rgb(255 255 255 / 98%);",
  iconColor: "black",
  fontColor: "black",
  buttonColor: "#2a4b72",
  secondaryButtonColor: "#2a4b72",
  secondaryFontColor: "#2a4b72",
  userBoxColor: "#e2e2e2",
  fontFamily: "KoHo, sans-serif",
};

export const ThemeDark = {
  id: "ThemeDark",
  BackgroundColor: "rgb(0 0 0 / 98%);",
  iconColor: "white",
  fontColor: "white",
  buttonColor: "#2a4b72",
  secondaryButtonColor: "white",
  secondaryFontColor: "white",
  userBoxColor: "#444444",
  fontFamily: "KoHo, sans-serif",
};

export const ThemeButtons = [
  {
    id: ThemeLight.id,
    background: "white",
    color: "white",
    name: "Light",
  },
  {
    id: ThemeDark.id,
    background: "black",
    color: "white",
    name: "Dark",
  },
];

export const Themes = [ThemeLight, ThemeDark];
