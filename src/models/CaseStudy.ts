import { PortfolioItem } from "./PortfolioItem";

export interface CaseStudyPhase {
  name: string;
  description: string;
  deliverables: string[];
}

export interface LearningAndDecision {
  title: string;
  content: string;
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
  private _images2: string[];
  private _liveUrl?: string;
  private _prototypeUrl?: string;
  private _learnings: string;
  private _gradient: string;
  // Additional fields from JSON
  private _hmwQuestion?: string;
  private _problem?: string;
  private _goal?: string;
  private _process?: string;
  private _learningsAndDecisions?: LearningAndDecision[];
  private _userFeedback?: string;
  private _funFact?: string;
  private _lessonLearned?: string;
  private _previewImage: string;

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
    previewImage: string,
    tools: string[] = [],
    skillIds: string[] = [],
    phases: CaseStudyPhase[] = [],
    images: string[] = [],
    images2: string[] = [],
    learnings: string = "",
    gradient: string = "linear-gradient(157.13deg, #53FEA6 -13.87%, #90CBFF 48.8%, #B9B3FF 112.68%)",
    hmwQuestion?: string,
    problem?: string,
    goal?: string,
    process?: string,
    learningsAndDecisions?: LearningAndDecision[],
    userFeedback?: string,
    funFact?: string,
    lessonLearned?: string
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
    this._images2 = images2;
    this._learnings = learnings;
    this._gradient = gradient;
    this._hmwQuestion = hmwQuestion;
    this._problem = problem;
    this._goal = goal;
    this._process = process;
    this._learningsAndDecisions = learningsAndDecisions;
    this._userFeedback = userFeedback;
    this._funFact = funFact;
    this._lessonLearned = lessonLearned;
    this._previewImage = previewImage;
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
  get images2(): string[] {
    return [...this._images2];
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

  // Additional field getters
  get hmwQuestion(): string | undefined {
    return this._hmwQuestion;
  }

  get problem(): string | undefined {
    return this._problem;
  }

  get goal(): string | undefined {
    return this._goal;
  }

  get process(): string | undefined {
    return this._process;
  }

  get learningsAndDecisions(): LearningAndDecision[] | undefined {
    return this._learningsAndDecisions;
  }

  get userFeedback(): string | undefined {
    return this._userFeedback;
  }

  get funFact(): string | undefined {
    return this._funFact;
  }

  get lessonLearned(): string | undefined {
    return this._lessonLearned;
  }

  get gradient(): string {
    return this._gradient;
  }

  get previewImage(): string {
    return this._previewImage;
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
      images2: this._images2,
      liveUrl: this._liveUrl,
      prototypeUrl: this._prototypeUrl,
      learnings: this._learnings,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
