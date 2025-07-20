const nodeHtmlToImage = require("node-html-to-image");

const projects = [
  {
    name: "checkout-flow",
    title: "Checkout Flow Redesign",
    color: "#667eea",
  },
  {
    name: "seller-dashboard",
    title: "Seller Dashboard Optimization",
    color: "#764ba2",
  },
  {
    name: "payment-integration",
    title: "Payment Integration Enhancement",
    color: "#f093fb",
  },
];

const baseHtml = (project) => `<!DOCTYPE html>
<html>
<head>
    <style>
        .placeholder {
            width: 800px;
            height: 600px;
            background: linear-gradient(135deg, ${project.color} 0%, #ffffff 100%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            font-family: -apple-system, system-ui, sans-serif;
            padding: 2rem;
            box-sizing: border-box;
        }
        .title {
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 1rem;
            color: #242628;
        }
    </style>
</head>
<body>
    <div class="placeholder">
        <div class="title">${project.title}</div>
    </div>
</body>
</html>`;

async function generateImages() {
  for (const project of projects) {
    await nodeHtmlToImage({
      output: `src/assets/projects/${project.name}.png`,
      html: baseHtml(project),
    });
    console.log(`Generated ${project.name}.png`);
  }
}

generateImages().catch(console.error);
