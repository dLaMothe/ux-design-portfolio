import { PortfolioItem } from "./PortfolioItem";

export enum ToolCategory {
  DESIGN = "Design",
  PROTOTYPING = "Prototyping",
  RESEARCH = "Research",
  COLLABORATION = "Collaboration",
  DEVELOPMENT = "Development",
  ANALYTICS = "Analytics",
}

export enum ProficiencyLevel {
  BASIC = "Basic",
  INTERMEDIATE = "Intermediate",
  ADVANCED = "Advanced",
  EXPERT = "Expert",
}

export class Tool extends PortfolioItem {
  private _category: ToolCategory;
  private _proficiency: ProficiencyLevel;
  private _version?: string;
  private _website?: string;
  private _usedInProjects: string[]; // References to project IDs
  private _features: string[];
  private _alternatives: string[];
  private _learningResources: string[];
  private _skillIds: string[];

  constructor(
    id: string,
    title: string,
    description: string,
    category: ToolCategory,
    proficiency: ProficiencyLevel,
    version?: string,
    website?: string,
    usedInProjects: string[] = [],
    features: string[] = [],
    alternatives: string[] = [],
    learningResources: string[] = [],
    skillIds: string[] = []
  ) {
    super(id, title, description);
    this._category = category;
    this._proficiency = proficiency;
    this._version = version;
    this._website = website;
    this._usedInProjects = usedInProjects;
    this._features = features;
    this._alternatives = alternatives;
    this._learningResources = learningResources;
    this._skillIds = skillIds;
  }

  // Getters
  get category(): ToolCategory {
    return this._category;
  }
  get proficiency(): ProficiencyLevel {
    return this._proficiency;
  }
  get version(): string | undefined {
    return this._version;
  }
  get website(): string | undefined {
    return this._website;
  }
  get usedInProjects(): string[] {
    return [...this._usedInProjects];
  }
  get features(): string[] {
    return [...this._features];
  }
  get alternatives(): string[] {
    return [...this._alternatives];
  }
  get learningResources(): string[] {
    return [...this._learningResources];
  }
  get skillIds(): string[] {
    return [...this._skillIds];
  }

  // Setters
  set category(value: ToolCategory) {
    this._category = value;
    this.updateTimestamp();
  }

  set proficiency(value: ProficiencyLevel) {
    this._proficiency = value;
    this.updateTimestamp();
  }

  set version(value: string | undefined) {
    this._version = value;
    this.updateTimestamp();
  }

  set website(value: string | undefined) {
    this._website = value;
    this.updateTimestamp();
  }

  // Methods for managing arrays
  public addToProject(projectId: string): void {
    if (!this._usedInProjects.includes(projectId)) {
      this._usedInProjects.push(projectId);
      this.updateTimestamp();
    }
  }

  public removeFromProject(projectId: string): void {
    const index = this._usedInProjects.indexOf(projectId);
    if (index > -1) {
      this._usedInProjects.splice(index, 1);
      this.updateTimestamp();
    }
  }

  public addFeature(feature: string): void {
    if (!this._features.includes(feature)) {
      this._features.push(feature);
      this.updateTimestamp();
    }
  }

  public removeFeature(feature: string): void {
    const index = this._features.indexOf(feature);
    if (index > -1) {
      this._features.splice(index, 1);
      this.updateTimestamp();
    }
  }

  public addAlternative(alternative: string): void {
    if (!this._alternatives.includes(alternative)) {
      this._alternatives.push(alternative);
      this.updateTimestamp();
    }
  }

  public addLearningResource(resource: string): void {
    if (!this._learningResources.includes(resource)) {
      this._learningResources.push(resource);
      this.updateTimestamp();
    }
  }

  public addSkill(skillId: string): void {
    if (!this._skillIds.includes(skillId)) {
      this._skillIds.push(skillId);
      this.updateTimestamp();
    }
  }

  public removeSkill(skillId: string): void {
    const index = this._skillIds.indexOf(skillId);
    if (index > -1) {
      this._skillIds.splice(index, 1);
      this.updateTimestamp();
    }
  }

  public getUsageFrequency(): string {
    const projectCount = this._usedInProjects.length;
    if (projectCount === 0) return "Not used in any projects yet";
    if (projectCount === 1) return "Used in 1 project";
    if (projectCount < 5) return `Used in ${projectCount} projects`;
    return `Frequently used (${projectCount}+ projects)`;
  }

  // Implementation of abstract methods
  public getDisplayInfo(): string {
    const versionInfo = this._version ? ` v${this._version}` : "";
    return `${this.title}${versionInfo} (${this._proficiency}) - ${this._category}`;
  }

  public toJSON(): Record<string, any> {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      category: this._category,
      proficiency: this._proficiency,
      version: this._version,
      website: this._website,
      usedInProjects: this._usedInProjects,
      features: this._features,
      alternatives: this._alternatives,
      learningResources: this._learningResources,
      skillIds: this._skillIds,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
