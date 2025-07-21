import React, { useState, useEffect } from "react";
import { Project } from "../models/Project";
import projectsData from "../data/projects.json";

interface ProjectCardProps {
  caseStudyId: string;
  onFilteredCountChange?: (count: number) => void;
}

const ALL_TAGS = Array.from(
  new Set(projectsData.projects.flatMap((project) => project.tags))
).sort();

const ProjectCard: React.FC<ProjectCardProps> = ({
  caseStudyId,
  onFilteredCountChange,
}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredProjects =
    selectedTags.length === 0
      ? projectsData.projects
      : projectsData.projects.filter((project) =>
          selectedTags.some((tag) => project.tags.includes(tag))
        );

  useEffect(() => {
    onFilteredCountChange?.(filteredProjects.length);
  }, [filteredProjects.length, onFilteredCountChange]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="project-section">
      {/* Tag Filters */}
      <div className="project-filters" style={{ marginBottom: "48px" }}>
        {ALL_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`project-filter-tag ${
              selectedTags.includes(tag) ? "project-filter-tag-selected" : ""
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            {/* Left side - Image */}
            {project.imagePath && (
              <div className="project-image-container">
                <img
                  src={project.imagePath}
                  alt={project.title}
                  className="project-image"
                />
              </div>
            )}

            {/* Right side - Content */}
            <div className="project-content">
              {/* Tags */}
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="project-title">{project.title}</h2>

              {/* Goal Section */}
              <div className="project-section">
                <h3 className="project-section-title">Goal</h3>
                <p className="project-section-text">{project.goal}</p>
              </div>

              {/* Process Section */}
              <div className="project-section">
                <h3 className="project-section-title">Process</h3>
                <p className="project-section-text">{project.process}</p>
              </div>

              {/* Impact Section */}
              <div className="project-section">
                <h3 className="project-section-title">Impact</h3>
                <p className="project-section-text">{project.impact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
