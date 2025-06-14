import { PortfolioItem } from "./PortfolioItem";

export enum AchievementType {
  CERTIFICATION = "Certification",
  AWARD = "Award",
  COURSE_COMPLETION = "Course Completion",
  CONFERENCE_SPEAKER = "Conference Speaker",
  PUBLICATION = "Publication",
  MENTORSHIP = "Mentorship",
  VOLUNTEER = "Volunteer Work",
  PROJECT_MILESTONE = "Project Milestone",
}

export enum AchievementLevel {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  ADVANCED = "Advanced",
  EXPERT = "Expert",
  INDUSTRY_RECOGNITION = "Industry Recognition",
}

export interface Verification {
  verified: boolean;
  verificationUrl?: string;
  verificationDate?: Date;
  verifiedBy?: string;
}

export class Achievement extends PortfolioItem {
  private _type: AchievementType;
  private _level: AchievementLevel;
  private _issuer: string;
  private _dateEarned: Date;
  private _expirationDate?: Date;
  private _credentialId?: string;
  private _verification: Verification;
  private _skills: string[]; // Skills this achievement validates
  private _relatedProjects: string[]; // Project IDs where this achievement was relevant
  private _certificateUrl?: string;
  private _badgeUrl?: string;
  private _publicUrl?: string; // Public profile URL showing this achievement
  private _evidence: string[]; // URLs or descriptions of supporting evidence

  constructor(
    id: string,
    title: string,
    description: string,
    type: AchievementType,
    level: AchievementLevel,
    issuer: string,
    dateEarned: Date,
    expirationDate?: Date,
    credentialId?: string,
    skills: string[] = [],
    relatedProjects: string[] = [],
    evidence: string[] = []
  ) {
    super(id, title, description);
    this._type = type;
    this._level = level;
    this._issuer = issuer;
    this._dateEarned = dateEarned;
    this._expirationDate = expirationDate;
    this._credentialId = credentialId;
    this._skills = skills;
    this._relatedProjects = relatedProjects;
    this._evidence = evidence;
    this._verification = { verified: false };
  }

  // Getters
  get type(): AchievementType {
    return this._type;
  }
  get level(): AchievementLevel {
    return this._level;
  }
  get issuer(): string {
    return this._issuer;
  }
  get dateEarned(): Date {
    return this._dateEarned;
  }
  get expirationDate(): Date | undefined {
    return this._expirationDate;
  }
  get credentialId(): string | undefined {
    return this._credentialId;
  }
  get verification(): Verification {
    return { ...this._verification };
  }
  get skills(): string[] {
    return [...this._skills];
  }
  get relatedProjects(): string[] {
    return [...this._relatedProjects];
  }
  get certificateUrl(): string | undefined {
    return this._certificateUrl;
  }
  get badgeUrl(): string | undefined {
    return this._badgeUrl;
  }
  get publicUrl(): string | undefined {
    return this._publicUrl;
  }
  get evidence(): string[] {
    return [...this._evidence];
  }

  // Setters
  set type(value: AchievementType) {
    this._type = value;
    this.updateTimestamp();
  }
  set level(value: AchievementLevel) {
    this._level = value;
    this.updateTimestamp();
  }
  set issuer(value: string) {
    this._issuer = value;
    this.updateTimestamp();
  }
  set dateEarned(value: Date) {
    this._dateEarned = value;
    this.updateTimestamp();
  }
  set expirationDate(value: Date | undefined) {
    this._expirationDate = value;
    this.updateTimestamp();
  }
  set credentialId(value: string | undefined) {
    this._credentialId = value;
    this.updateTimestamp();
  }
  set certificateUrl(value: string | undefined) {
    this._certificateUrl = value;
    this.updateTimestamp();
  }
  set badgeUrl(value: string | undefined) {
    this._badgeUrl = value;
    this.updateTimestamp();
  }
  set publicUrl(value: string | undefined) {
    this._publicUrl = value;
    this.updateTimestamp();
  }

  // Verification methods
  public markAsVerified(verificationUrl?: string, verifiedBy?: string): void {
    this._verification = {
      verified: true,
      verificationUrl,
      verificationDate: new Date(),
      verifiedBy,
    };
    this.updateTimestamp();
  }

  public revokeVerification(): void {
    this._verification = { verified: false };
    this.updateTimestamp();
  }

  // Skill and project management
  public addSkill(skill: string): void {
    if (!this._skills.includes(skill)) {
      this._skills.push(skill);
      this.updateTimestamp();
    }
  }

  public removeSkill(skill: string): void {
    const index = this._skills.indexOf(skill);
    if (index > -1) {
      this._skills.splice(index, 1);
      this.updateTimestamp();
    }
  }

  public addRelatedProject(projectId: string): void {
    if (!this._relatedProjects.includes(projectId)) {
      this._relatedProjects.push(projectId);
      this.updateTimestamp();
    }
  }

  public removeRelatedProject(projectId: string): void {
    const index = this._relatedProjects.indexOf(projectId);
    if (index > -1) {
      this._relatedProjects.splice(index, 1);
      this.updateTimestamp();
    }
  }

  public addEvidence(evidenceItem: string): void {
    if (!this._evidence.includes(evidenceItem)) {
      this._evidence.push(evidenceItem);
      this.updateTimestamp();
    }
  }

  public removeEvidence(evidenceItem: string): void {
    const index = this._evidence.indexOf(evidenceItem);
    if (index > -1) {
      this._evidence.splice(index, 1);
      this.updateTimestamp();
    }
  }

  // Status and validation methods
  public isExpired(): boolean {
    if (!this._expirationDate) return false;
    return new Date() > this._expirationDate;
  }

  public isValid(): boolean {
    return !this.isExpired();
  }

  public getDaysUntilExpiration(): number | null {
    if (!this._expirationDate) return null;
    const now = new Date();
    const timeDiff = this._expirationDate.getTime() - now.getTime();
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  }

  public getStatus(): string {
    if (this.isExpired()) return "Expired";
    if (!this._verification.verified) return "Unverified";

    const daysUntilExpiration = this.getDaysUntilExpiration();
    if (daysUntilExpiration !== null) {
      if (daysUntilExpiration <= 30) return "Expiring Soon";
      return "Valid";
    }

    return "Valid (No Expiration)";
  }

  // Implementation of abstract methods
  public getDisplayInfo(): string {
    const statusInfo = this._verification.verified ? "✓" : "";
    const expiryInfo = this.isExpired() ? " (Expired)" : "";
    return `${this.title} ${statusInfo} - ${
      this._issuer
    } (${this._dateEarned.getFullYear()})${expiryInfo}`;
  }

  public toJSON(): Record<string, any> {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      type: this._type,
      level: this._level,
      issuer: this._issuer,
      dateEarned: this._dateEarned,
      expirationDate: this._expirationDate,
      credentialId: this._credentialId,
      verification: this._verification,
      skills: this._skills,
      relatedProjects: this._relatedProjects,
      certificateUrl: this._certificateUrl,
      badgeUrl: this._badgeUrl,
      publicUrl: this._publicUrl,
      evidence: this._evidence,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
