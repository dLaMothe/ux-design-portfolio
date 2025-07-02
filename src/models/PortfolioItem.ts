export abstract class PortfolioItem {
  protected _id: string;
  protected _title: string;
  protected _description: string;
  protected _createdAt: Date;
  protected _updatedAt: Date;

  constructor(id: string, title: string, description: string) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._createdAt = new Date();
    this._updatedAt = new Date();
  }

  // Getters
  get id(): string {
    return this._id;
  }
  get title(): string {
    return this._title;
  }
  get description(): string {
    return this._description;
  }
  get createdAt(): Date {
    return this._createdAt;
  }
  get updatedAt(): Date {
    return this._updatedAt;
  }

  // Setters
  set title(value: string) {
    this._title = value;
    this._updatedAt = new Date();
  }

  set description(value: string) {
    this._description = value;
    this._updatedAt = new Date();
  }

  // Abstract methods that must be implemented by subclasses
  abstract getDisplayInfo(): string;
  abstract toJSON(): Record<string, any>;

  // Common methods
  public updateTimestamp(): void {
    this._updatedAt = new Date();
  }
}
