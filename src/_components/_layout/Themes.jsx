export const ThemeLight = {
  id: "ThemeLight",
  BackgroundColor: "rgb(255 255 255 / 98%);",
  iconColor: "black",
  fontColor: "black",
  fontFamily: "KoHo, sans-serif",
};

export const ThemeDark = {
  id: "ThemeDark",
  BackgroundColor: "rgb(0 0 0 / 98%);",
  iconColor: "white",
  fontColor: "white",
  fontFamily: "KoHo, sans-serif",
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
  },
];

export const Themes = [ThemeLight, ThemeDark];
