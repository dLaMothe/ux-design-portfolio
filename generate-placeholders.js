const nodeHtmlToImage = require("node-html-to-image");
const fs = require("fs").promises;
const path = require("path");

async function generateImage(config) {
  const { width, height, path: imagePath } = config;

  // Ensure directory exists
  const dir = path.dirname(imagePath);
  await fs.mkdir(dir, { recursive: true });

  const html = `
    <html>
      <head>
        <style>
          body {
            width: ${width}px;
            height: ${height}px;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #FFFFFF;
          }
          .image-container {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #FFFFFF;
            overflow: hidden;
          }
          .image-content {
            width: 100%;
            height: 100%;
            object-fit: cover;
            background-image: url('data:image/jpeg;base64,${config.imageData}');
            background-size: cover;
            background-position: center;
          }
        </style>
      </head>
      <body>
        <div class="image-container">
          <div class="image-content"></div>
        </div>
      </body>
    </html>
  `;

  await nodeHtmlToImage({
    output: imagePath,
    html,
    transparent: true,
    puppeteerArgs: {
      defaultViewport: {
        width,
        height,
      },
    },
  });

  console.log(`Generated ${imagePath}`);
}

// Read the image file
async function readImageFile(filePath) {
  const buffer = await fs.readFile(filePath);
  return buffer.toString("base64");
}

async function main() {
  const checkoutImageData = await readImageFile(
    "src/assets/checkout-preview.jpg"
  );

  const configs = [
    {
      width: 800,
      height: 600,
      path: "src/assets/caseStudy/preview/improving-marketplace-checkout-experience.png",
      imageData: checkoutImageData,
    },
  ];

  for (const config of configs) {
    await generateImage(config);
  }
}

main().catch(console.error);
