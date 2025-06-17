const fs = require("fs");

const coloredDots = [
  { x: 135, y: 30, color: "#DFB7FF" },
  { x: 15, y: 45, color: "#AFFF64" },
  { x: 165, y: 180, color: "#53FEA6" },
  { x: 210, y: 75, color: "#FCFE53" },
  { x: 45, y: 195, color: "#90CBFF" },
  { x: 240, y: 255, color: "#FF91D8" },
];

let svg =
  '<svg width="285" height="285" viewBox="0 0 285 285" fill="none" xmlns="http://www.w3.org/2000/svg">\n';

// Add gray grid background
svg += "<!-- Gray grid background -->\n";
for (let y = 0; y <= 270; y += 15) {
  for (let x = 0; x <= 270; x += 15) {
    svg += `<rect x="${x}" y="${y}" width="7" height="7" fill="#D5D7D1"/>\n`;
  }
}

// Add colored dots
svg += "<!-- Colored dots -->\n";
coloredDots.forEach((dot) => {
  svg += `<rect x="${dot.x}" y="${dot.y}" width="7" height="7" fill="${dot.color}"/>\n`;
});

svg += "</svg>";

fs.writeFileSync("public/case-study-tile-bg.svg", svg);
console.log("SVG file generated successfully at public/case-study-tile-bg.svg");
