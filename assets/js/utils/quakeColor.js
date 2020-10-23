const numColors = str =>
  (str.match(colorMatch) && str.match(colorMatch).length) || 0;

const colorElement = (color, content) =>
  `<span style="color: ${color};">${content && content + "</span>"}`;

const colorMatch = /\^(\d{1})/g;

export const colors = [
  "black",
  "#ff0101",
  "#02e801",
  "#ffff01",
  "#015aff",
  "#00ecff",
  "#c601ff",
  "white",
  "black"
];

export const quakeColor = (str, defaultColor = "white") =>
  colorElement(
    defaultColor,
    str.replace(colorMatch, (match, color) => colorElement(colors[color])) +
      "</span>".repeat(numColors(str))
  );
