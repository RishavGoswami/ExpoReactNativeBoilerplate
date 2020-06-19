// utils
import { unitToPx } from "../utils";

export const flag = {
  xxs: 16,
  xs: 24,
  sm: 32,
  md: 48,
  lg: 64,
};

export const SHADOW_COLOR = `rgba(0, 0, 0, 0.6)`;

export const elevationShadowStyle = (elevation) => ({
  elevation,
  shadowColor: color.black,
  shadowOffset: { width: 5, height: 0.5 * elevation },
  shadowOpacity: unitToPx(0.3),
  shadowRadius: unitToPx(0.8 * elevation),
});

export const color = {
  black: "#000000",
  white: "#FFFFFF",
  offWhite: "#f9f9f9",
  red: "red",
  matteBlack: "#1B1B1B",
  lightBlack: "rgba(0,0,0,.2)",
  peach: "#ffdcd7",
  persianGreen: "#00a6a2",
  solitaire: "#fef6e3",
  fountainGreen: "#4CBBB9",
  sandyBeach: "#FFE9C5",
};

export const horizontalRow = { flexDirection: "row", alignItems: "center" };

export const centerWithRow = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};

export const center = {
  alignItems: "center",
  justifyContent: "center",
};
