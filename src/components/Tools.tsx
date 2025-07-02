import React from "react";
import { PortfolioManager } from "../models/PortfolioManager";

interface ToolsProps {
  portfolioManager: PortfolioManager;
}

const Tools: React.FC<ToolsProps> = ({ portfolioManager }) => {
  const tools = portfolioManager.getAllTools();

  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">Tools & Technologies</h2>
        <div className="grid grid-4">
          {tools.map((tool) => (
            <div key={tool.id} className="card">
              <div className="card-header">
                <h3 className="card-title">{tool.title}</h3>
                <div className="card-subtitle">{tool.category}</div>
              </div>
              <div className="card-content">
                <p>{tool.description}</p>
                <div style={{ marginTop: "1rem" }}>
                  <span className="badge badge-primary">
                    {tool.proficiency}
                  </span>
                  {tool.version && (
                    <span className="badge" style={{ marginLeft: "0.5rem" }}>
                      v{tool.version}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
