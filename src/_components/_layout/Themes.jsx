export const ThemeLight = {
  id: "ThemeLight",
  BackgroundColor: "rgb(255 255 255 / 98%);",
  iconColor: "black",
  fontColor: "black",
  buttonColor: "#84c641",
  secondaryButtonColor: "#84c641",
  secondaryFontColor: "#84c641",
  userBoxColor: "#e2e2e2",
  fontFamily: "KoHo, sans-serif",
};

export const ThemeDark = {
  id: "ThemeDark",
  BackgroundColor: "#061726;",
  iconColor: "white",
  fontColor: "white",
  buttonColor: "#84c641",
  secondaryButtonColor: "#84c641",
  secondaryFontColor: "#84c641",
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
    background: "#061726",
    color: "white",
    name: "Dark",
  },
];

export const Themes = [ThemeLight, ThemeDark];
