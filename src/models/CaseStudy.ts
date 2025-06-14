import { PortfolioItem } from "./PortfolioItem";

export interface CaseStudyPhase {
  name: string;
  description: string;
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  role: string;
  client: string;
  team: string[];
  tools: string[];
  images: string[];
  phases: ProjectPhase[];
  learnings: string;
}

export class CaseStudy extends PortfolioItem {
  private _client: string;
  private _duration: string;
  private _role: string;
  private _team: string[];
  private _challenge: string;
  private _solution: string;
  private _outcome: string;
  private _tools: string[];
  private _skillIds: string[];
  private _phases: CaseStudyPhase[];
  private _images: string[];
  private _liveUrl?: string;
  private _prototypeUrl?: string;
  private _learnings: string;

  constructor(
    id: string,
    title: string,
    description: string,
    client: string,
    duration: string,
    role: string,
    team: string[],
    challenge: string,
    solution: string,
    outcome: string,
    tools: string[] = [],
    skillIds: string[] = [],
    phases: CaseStudyPhase[] = [],
    images: string[] = [],
    learnings: string = ""
  ) {
    super(id, title, description);
    this._client = client;
    this._duration = duration;
    this._role = role;
    this._team = team;
    this._challenge = challenge;
    this._solution = solution;
    this._outcome = outcome;
    this._tools = tools;
    this._skillIds = skillIds;
    this._phases = phases;
    this._images = images;
    this._learnings = learnings;
  }

  // Getters
  get client(): string {
    return this._client;
  }
  get duration(): string {
    return this._duration;
  }
  get role(): string {
    return this._role;
  }
  get team(): string[] {
    return [...this._team];
  }
  get challenge(): string {
    return this._challenge;
  }
  get solution(): string {
    return this._solution;
  }
  get outcome(): string {
    return this._outcome;
  }
  get tools(): string[] {
    return [...this._tools];
  }
  get skillIds(): string[] {
    return [...this._skillIds];
  }
  get phases(): CaseStudyPhase[] {
    return [...this._phases];
  }
  get images(): string[] {
    return [...this._images];
  }
  get liveUrl(): string | undefined {
    return this._liveUrl;
  }
  get prototypeUrl(): string | undefined {
    return this._prototypeUrl;
  }
  get learnings(): string {
    return this._learnings;
  }

  // Setters
  set client(value: string) {
    this._client = value;
    this.updateTimestamp();
  }
  set duration(value: string) {
    this._duration = value;
    this.updateTimestamp();
  }
  set role(value: string) {
    this._role = value;
    this.updateTimestamp();
  }
  set challenge(value: string) {
    this._challenge = value;
    this.updateTimestamp();
  }
  set solution(value: string) {
    this._solution = value;
    this.updateTimestamp();
  }
  set outcome(value: string) {
    this._outcome = value;
    this.updateTimestamp();
  }
  set liveUrl(value: string | undefined) {
    this._liveUrl = value;
    this.updateTimestamp();
  }
  set prototypeUrl(value: string | undefined) {
    this._prototypeUrl = value;
    this.updateTimestamp();
  }

  // Methods for managing arrays
  public addTeamMember(member: string): void {
    if (!this._team.includes(member)) {
      this._team.push(member);
      this.updateTimestamp();
    }
  }

  public removeTeamMember(member: string): void {
    const index = this._team.indexOf(member);
    if (index > -1) {
      this._team.splice(index, 1);
      this.updateTimestamp();
    }
  }

  public addTool(tool: string): void {
    if (!this._tools.includes(tool)) {
      this._tools.push(tool);
      this.updateTimestamp();
    }
  }

  public removeTool(tool: string): void {
    const index = this._tools.indexOf(tool);
    if (index > -1) {
      this._tools.splice(index, 1);
      this.updateTimestamp();
    }
  }

  // Methods for managing skills
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

  public hasSkill(skillId: string): boolean {
    return this._skillIds.includes(skillId);
  }

  public getSkillCount(): number {
    return this._skillIds.length;
  }

  public addPhase(phase: CaseStudyPhase): void {
    this._phases.push(phase);
    this.updateTimestamp();
  }

  public addImage(imageUrl: string): void {
    this._images.push(imageUrl);
    this.updateTimestamp();
  }

  // Implementation of abstract methods
  public getDisplayInfo(): string {
    const skillCount = this._skillIds.length;
    const skillInfo = skillCount > 0 ? ` (${skillCount} skills)` : "";
    return `${this.title} - ${this._role} for ${this._client} (${this._duration})${skillInfo}`;
  }

  public toJSON(): Record<string, any> {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      client: this._client,
      duration: this._duration,
      role: this._role,
      team: this._team,
      challenge: this._challenge,
      solution: this._solution,
      outcome: this._outcome,
      tools: this._tools,
      skillIds: this._skillIds,
      phases: this._phases,
      images: this._images,
      liveUrl: this._liveUrl,
      prototypeUrl: this._prototypeUrl,
      learnings: this._learnings,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
