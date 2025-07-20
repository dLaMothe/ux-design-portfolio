const fs = require("fs");
const path = require("path");

// Create the assets directory if it doesn't exist
const assetsDir = path.join(__dirname, "src", "assets");
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Save the image
const imageData = `
[Base64 image data will be provided by the user]
`;

const imagePath = path.join(assetsDir, "checkout-preview.jpg");
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync(imagePath, buffer);

console.log("Image saved successfully!");
