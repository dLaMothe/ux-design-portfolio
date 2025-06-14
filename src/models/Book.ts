import { PortfolioItem } from "./PortfolioItem";

export enum ReadingStatus {
  WANT_TO_READ = "Want to Read",
  CURRENTLY_READING = "Currently Reading",
  COMPLETED = "Completed",
  ON_HOLD = "On Hold",
  DNF = "Did Not Finish",
  REFERENCE = "Reference",
}

export enum BookCategory {
  UX_DESIGN = "UX Design",
  UI_DESIGN = "UI Design",
  DESIGN_THINKING = "Design Thinking",
  RESEARCH = "Research",
  PSYCHOLOGY = "Psychology",
  BUSINESS = "Business",
  TECHNOLOGY = "Technology",
  LEADERSHIP = "Leadership",
  CREATIVITY = "Creativity",
}

export interface BookReview {
  rating: number; // 1-5 stars
  review: string;
  dateReviewed: Date;
}

export class Book extends PortfolioItem {
  private _author: string;
  private _isbn?: string;
  private _publishedYear: number;
  private _category: BookCategory;
  private _status: ReadingStatus;
  private _dateStarted?: Date;
  private _dateCompleted?: Date;
  private _rating?: number; // 1-5 stars
  private _review?: BookReview;
  private _keyTakeaways: string[];
  private _quotes: string[];
  private _recommendedBy?: string;
  private _tags: string[];
  private _coverImageUrl?: string;
  private _purchaseUrl?: string;
  private _skillIds: string[];
  private _caseStudyIds: string[];
  private _toolIds: string[];
  private _achievementIds: string[];
  private _hasNotes: boolean;
  private _thoughts?: string;

  constructor(
    id: string,
    title: string,
    description: string,
    author: string,
    publishedYear: number,
    category: BookCategory,
    status: ReadingStatus = ReadingStatus.WANT_TO_READ,
    isbn?: string,
    keyTakeaways: string[] = [],
    quotes: string[] = [],
    tags: string[] = [],
    skillIds: string[] = [],
    caseStudyIds: string[] = [],
    toolIds: string[] = [],
    achievementIds: string[] = [],
    hasNotes: boolean = false,
    thoughts?: string
  ) {
    super(id, title, description);
    this._author = author;
    this._publishedYear = publishedYear;
    this._category = category;
    this._status = status;
    this._isbn = isbn;
    this._keyTakeaways = keyTakeaways;
    this._quotes = quotes;
    this._tags = tags;
    this._skillIds = skillIds;
    this._caseStudyIds = caseStudyIds;
    this._toolIds = toolIds;
    this._achievementIds = achievementIds;
    this._hasNotes = hasNotes;
    this._thoughts = thoughts;
  }

  // Getters
  get author(): string {
    return this._author;
  }
  get isbn(): string | undefined {
    return this._isbn;
  }
  get publishedYear(): number {
    return this._publishedYear;
  }
  get category(): BookCategory {
    return this._category;
  }
  get status(): ReadingStatus {
    return this._status;
  }
  get dateStarted(): Date | undefined {
    return this._dateStarted;
  }
  get dateCompleted(): Date | undefined {
    return this._dateCompleted;
  }
  get rating(): number | undefined {
    return this._rating;
  }
  get review(): BookReview | undefined {
    return this._review;
  }
  get keyTakeaways(): string[] {
    return [...this._keyTakeaways];
  }
  get quotes(): string[] {
    return [...this._quotes];
  }
  get recommendedBy(): string | undefined {
    return this._recommendedBy;
  }
  get tags(): string[] {
    return [...this._tags];
  }
  get coverImageUrl(): string | undefined {
    return this._coverImageUrl;
  }
  get purchaseUrl(): string | undefined {
    return this._purchaseUrl;
  }
  get skillIds(): string[] {
    return [...this._skillIds];
  }
  get caseStudyIds(): string[] {
    return [...this._caseStudyIds];
  }
  get toolIds(): string[] {
    return [...this._toolIds];
  }
  get achievementIds(): string[] {
    return [...this._achievementIds];
  }
  get hasNotes(): boolean {
    return this._hasNotes;
  }
  get thoughts(): string | undefined {
    return this._thoughts;
  }

  // Setters
  set author(value: string) {
    this._author = value;
    this.updateTimestamp();
  }
  set isbn(value: string | undefined) {
    this._isbn = value;
    this.updateTimestamp();
  }
  set publishedYear(value: number) {
    this._publishedYear = value;
    this.updateTimestamp();
  }
  set category(value: BookCategory) {
    this._category = value;
    this.updateTimestamp();
  }
  set recommendedBy(value: string | undefined) {
    this._recommendedBy = value;
    this.updateTimestamp();
  }
  set coverImageUrl(value: string | undefined) {
    this._coverImageUrl = value;
    this.updateTimestamp();
  }
  set purchaseUrl(value: string | undefined) {
    this._purchaseUrl = value;
    this.updateTimestamp();
  }
  set thoughts(value: string | undefined) {
    this._thoughts = value;
    this.updateTimestamp();
  }
  set hasNotes(value: boolean) {
    this._hasNotes = value;
    this.updateTimestamp();
  }

  // Status management methods
  public startReading(): void {
    this._status = ReadingStatus.CURRENTLY_READING;
    this._dateStarted = new Date();
    this.updateTimestamp();
  }

  public completeReading(): void {
    this._status = ReadingStatus.COMPLETED;
    this._dateCompleted = new Date();
    this.updateTimestamp();
  }

  public pauseReading(): void {
    this._status = ReadingStatus.ON_HOLD;
    this.updateTimestamp();
  }

  public markAsDidNotFinish(): void {
    this._status = ReadingStatus.DNF;
    this.updateTimestamp();
  }

  // Review and rating methods
  public addReview(rating: number, reviewText: string): void {
    if (rating >= 1 && rating <= 5) {
      this._rating = rating;
      this._review = {
        rating,
        review: reviewText,
        dateReviewed: new Date(),
      };
      this.updateTimestamp();
    }
  }

  public updateRating(rating: number): void {
    if (rating >= 1 && rating <= 5) {
      this._rating = rating;
      if (this._review) {
        this._review.rating = rating;
        this._review.dateReviewed = new Date();
      }
      this.updateTimestamp();
    }
  }

  // Content management methods
  public addKeyTakeaway(takeaway: string): void {
    if (!this._keyTakeaways.includes(takeaway)) {
      this._keyTakeaways.push(takeaway);
      this.updateTimestamp();
    }
  }

  public removeKeyTakeaway(takeaway: string): void {
    const index = this._keyTakeaways.indexOf(takeaway);
    if (index > -1) {
      this._keyTakeaways.splice(index, 1);
      this.updateTimestamp();
    }
  }

  public addQuote(quote: string): void {
    if (!this._quotes.includes(quote)) {
      this._quotes.push(quote);
      this.updateTimestamp();
    }
  }

  public removeQuote(quote: string): void {
    const index = this._quotes.indexOf(quote);
    if (index > -1) {
      this._quotes.splice(index, 1);
      this.updateTimestamp();
    }
  }

  public addTag(tag: string): void {
    if (!this._tags.includes(tag)) {
      this._tags.push(tag);
      this.updateTimestamp();
    }
  }

  public removeTag(tag: string): void {
    const index = this._tags.indexOf(tag);
    if (index > -1) {
      this._tags.splice(index, 1);
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

  public addCaseStudy(caseStudyId: string): void {
    if (!this._caseStudyIds.includes(caseStudyId)) {
      this._caseStudyIds.push(caseStudyId);
      this.updateTimestamp();
    }
  }

  public removeCaseStudy(caseStudyId: string): void {
    const index = this._caseStudyIds.indexOf(caseStudyId);
    if (index > -1) {
      this._caseStudyIds.splice(index, 1);
      this.updateTimestamp();
    }
  }

  public addTool(toolId: string): void {
    if (!this._toolIds.includes(toolId)) {
      this._toolIds.push(toolId);
      this.updateTimestamp();
    }
  }

  public removeTool(toolId: string): void {
    const index = this._toolIds.indexOf(toolId);
    if (index > -1) {
      this._toolIds.splice(index, 1);
      this.updateTimestamp();
    }
  }

  public addAchievement(achievementId: string): void {
    if (!this._achievementIds.includes(achievementId)) {
      this._achievementIds.push(achievementId);
      this.updateTimestamp();
    }
  }

  public removeAchievement(achievementId: string): void {
    const index = this._achievementIds.indexOf(achievementId);
    if (index > -1) {
      this._achievementIds.splice(index, 1);
      this.updateTimestamp();
    }
  }

  // Utility methods
  public getReadingProgress(): string {
    switch (this._status) {
      case ReadingStatus.WANT_TO_READ:
        return "Not started";
      case ReadingStatus.CURRENTLY_READING:
        const daysReading = this._dateStarted
          ? Math.floor(
              (Date.now() - this._dateStarted.getTime()) / (1000 * 60 * 60 * 24)
            )
          : 0;
        return `Reading for ${daysReading} days`;
      case ReadingStatus.COMPLETED:
        return this._dateCompleted
          ? `Completed on ${this._dateCompleted.toLocaleDateString()}`
          : "Completed";
      case ReadingStatus.ON_HOLD:
        return "Paused";
      case ReadingStatus.DNF:
        return "Did not finish";
      case ReadingStatus.REFERENCE:
        return "Reference";
      default:
        return "Unknown status";
    }
  }

  // Implementation of abstract methods
  public getDisplayInfo(): string {
    const statusInfo = this._rating ? ` (${this._rating}★)` : "";
    return `${this.title} by ${this._author}${statusInfo} - ${this._status}`;
  }

  public toJSON(): Record<string, any> {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      author: this._author,
      isbn: this._isbn,
      publishedYear: this._publishedYear,
      category: this._category,
      status: this._status,
      dateStarted: this._dateStarted,
      dateCompleted: this._dateCompleted,
      rating: this._rating,
      review: this._review,
      keyTakeaways: this._keyTakeaways,
      quotes: this._quotes,
      recommendedBy: this._recommendedBy,
      tags: this._tags,
      coverImageUrl: this._coverImageUrl,
      purchaseUrl: this._purchaseUrl,
      skillIds: this._skillIds,
      caseStudyIds: this._caseStudyIds,
      toolIds: this._toolIds,
      achievementIds: this._achievementIds,
      hasNotes: this._hasNotes,
      thoughts: this._thoughts,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
