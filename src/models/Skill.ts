import { PortfolioItem } from "./PortfolioItem";

export enum SkillLevel {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  ADVANCED = "Advanced",
  EXPERT = "Expert",
}

export enum SkillCategory {
  RESEARCH = "Research",
  DESIGN = "Design",
  PROTOTYPING = "Prototyping",
  TESTING = "Testing",
  STRATEGY = "Strategy",
  COLLABORATION = "Collaboration",
}

export class Skill extends PortfolioItem {
  private _level: SkillLevel;
  private _category: SkillCategory;
  private _yearsOfExperience: number;
  private _certifications: string[];
  private _projects: string[]; // References to project IDs where this skill was used
  private _customColor: string | undefined;

  constructor(
    id: string,
    title: string,
    description: string,
    level: SkillLevel,
    category: SkillCategory,
    yearsOfExperience: number = 0,
    certifications: string[] = [],
    projects: string[] = [],
    customColor?: string
  ) {
    super(id, title, description);
    this._level = level;
    this._category = category;
    this._yearsOfExperience = yearsOfExperience;
    this._certifications = certifications;
    this._projects = projects;
    this._customColor = customColor;
  }

  // Getters
  get level(): SkillLevel {
    return this._level;
  }
  get category(): SkillCategory {
    return this._category;
  }
  get yearsOfExperience(): number {
    return this._yearsOfExperience;
  }
  get certifications(): string[] {
    return [...this._certifications];
  }
  get projects(): string[] {
    return [...this._projects];
  }
  get customColor(): string | undefined {
    return this._customColor;
  }

  // Setters
  set level(value: SkillLevel) {
    this._level = value;
    this.updateTimestamp();
  }

  set category(value: SkillCategory) {
    this._category = value;
    this.updateTimestamp();
  }

  set yearsOfExperience(value: number) {
    if (value >= 0) {
      this._yearsOfExperience = value;
      this.updateTimestamp();
    }
  }

  set customColor(value: string | undefined) {
    this._customColor = value;
    this.updateTimestamp();
  }

  // Methods
  public addCertification(certification: string): void {
    if (!this._certifications.includes(certification)) {
      this._certifications.push(certification);
      this.updateTimestamp();
    }
  }

  public removeCertification(certification: string): void {
    const index = this._certifications.indexOf(certification);
    if (index > -1) {
      this._certifications.splice(index, 1);
      this.updateTimestamp();
    }
  }

  public addProject(projectId: string): void {
    if (!this._projects.includes(projectId)) {
      this._projects.push(projectId);
      this.updateTimestamp();
    }
  }

  public removeProject(projectId: string): void {
    const index = this._projects.indexOf(projectId);
    if (index > -1) {
      this._projects.splice(index, 1);
      this.updateTimestamp();
    }
  }

  public getExperienceLevel(): string {
    if (this._yearsOfExperience < 1) return "New to this skill";
    if (this._yearsOfExperience < 2) return "1+ year";
    if (this._yearsOfExperience < 5) return `${this._yearsOfExperience}+ years`;
    return `${this._yearsOfExperience}+ years (Expert level)`;
  }

  // Implementation of abstract methods
  public getDisplayInfo(): string {
    return `${this.title} (${this._level}) - ${this._category}`;
  }

  public toJSON(): Record<string, any> {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      level: this._level,
      category: this._category,
      yearsOfExperience: this._yearsOfExperience,
      certifications: this._certifications,
      projects: this._projects,
      customColor: this._customColor,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
