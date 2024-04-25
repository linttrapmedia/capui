import fs from "fs";
import { buttonDefinition } from "./button-definitions";

const lib = [
  buttonDefinition,
  {
    path: "./public/components/alerts/examples.html",
    gridColWidth: "200px",
    examples: [
      { class: ["alert"], code: `<div class="alert>Basic</div>` },
      { class: ["alert", "alert--success"], code: `<div class="alert alert--success">Success</div>` },
      { class: ["alert", "alert--info"], code: `<div class="alert alert--info">Info</div>` },
      { class: ["alert", "alert--warning"], code: `<div class="alert alert--warning">Warning</div>` },
      { class: ["alert", "alert--danger"], code: `<div class="alert alert--danger">Danger</div>` },
    ],
  },
];

for (const component of lib) {
  let html = `<div class="specs" style="grid-template-columns: repeat(auto-fit, minmax(${component.gridColWidth}, 1fr));">\n`;
  for (const example of component.examples) {
    html += `<div class="spec">
    <div class="spec__example">${example.code}</div>
    <div class="spec__code">${example.class.map((cls) => `<code>.${cls}</code>`).join("")}</div>
  </div>\n`;
  }
  html += `</div>`;
  fs.writeFile(component.path, html, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("File written successfully!");
    }
  });
}
