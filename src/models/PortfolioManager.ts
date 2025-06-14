import { PortfolioItem } from "./PortfolioItem";
import { CaseStudy } from "./CaseStudy";
import { Skill, SkillCategory, SkillLevel } from "./Skill";
import { Tool, ToolCategory } from "./Tool";
import { Book, BookCategory, ReadingStatus } from "./Book";
import { Achievement, AchievementType } from "./Achievement";

// Strategy pattern for different sorting strategies
export interface SortStrategy<T extends PortfolioItem> {
  sort(items: T[]): T[];
}

export class DateSortStrategy<T extends PortfolioItem>
  implements SortStrategy<T>
{
  constructor(private ascending: boolean = false) {}

  sort(items: T[]): T[] {
    return [...items].sort((a, b) => {
      const dateA = a.updatedAt.getTime();
      const dateB = b.updatedAt.getTime();
      return this.ascending ? dateA - dateB : dateB - dateA;
    });
  }
}

export class TitleSortStrategy<T extends PortfolioItem>
  implements SortStrategy<T>
{
  constructor(private ascending: boolean = true) {}

  sort(items: T[]): T[] {
    return [...items].sort((a, b) => {
      const comparison = a.title.localeCompare(b.title);
      return this.ascending ? comparison : -comparison;
    });
  }
}

// Filter interfaces
export interface FilterCriteria {
  searchTerm?: string;
  categories?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
}

export interface SkillFilterCriteria extends FilterCriteria {
  levels?: SkillLevel[];
  categories?: SkillCategory[];
  yearsOfExperience?: {
    min: number;
    max: number;
  };
}

export interface BookFilterCriteria extends FilterCriteria {
  categories?: BookCategory[];
  statuses?: ReadingStatus[];
  authors?: string[];
  rating?: {
    min: number;
    max: number;
  };
}

export interface ToolFilterCriteria extends FilterCriteria {
  categories?: ToolCategory[];
  proficiencyLevels?: string[];
}

export interface AchievementFilterCriteria extends FilterCriteria {
  types?: AchievementType[];
  issuers?: string[];
  verified?: boolean;
  expired?: boolean;
}

// Main Portfolio Manager class
export class PortfolioManager {
  private _caseStudies: Map<string, CaseStudy> = new Map();
  private _skills: Map<string, Skill> = new Map();
  private _tools: Map<string, Tool> = new Map();
  private _books: Map<string, Book> = new Map();
  private _achievements: Map<string, Achievement> = new Map();

  // Case Study methods
  public addCaseStudy(caseStudy: CaseStudy): void {
    this._caseStudies.set(caseStudy.id, caseStudy);
  }

  public getCaseStudy(id: string): CaseStudy | undefined {
    return this._caseStudies.get(id);
  }

  public getAllCaseStudies(): CaseStudy[] {
    return Array.from(this._caseStudies.values());
  }

  public getAllCaseStudiesWithSort(
    sortStrategy?: SortStrategy<CaseStudy>
  ): CaseStudy[] {
    const caseStudies = Array.from(this._caseStudies.values());
    return sortStrategy ? sortStrategy.sort(caseStudies) : caseStudies;
  }

  public removeCaseStudy(id: string): boolean {
    return this._caseStudies.delete(id);
  }

  public filterCaseStudies(
    criteria: FilterCriteria,
    sortStrategy?: SortStrategy<CaseStudy>
  ): CaseStudy[] {
    let filtered = Array.from(this._caseStudies.values());

    if (criteria.searchTerm) {
      const term = criteria.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (cs) =>
          cs.title.toLowerCase().includes(term) ||
          cs.description.toLowerCase().includes(term) ||
          cs.client.toLowerCase().includes(term) ||
          cs.challenge.toLowerCase().includes(term) ||
          cs.solution.toLowerCase().includes(term)
      );
    }

    if (criteria.dateRange) {
      filtered = filtered.filter(
        (cs) =>
          cs.createdAt >= criteria.dateRange!.start &&
          cs.createdAt <= criteria.dateRange!.end
      );
    }

    return sortStrategy ? sortStrategy.sort(filtered) : filtered;
  }

  // New methods for managing skill-case study relationships
  public addSkillToCaseStudy(caseStudyId: string, skillId: string): boolean {
    const caseStudy = this.getCaseStudy(caseStudyId);
    if (caseStudy && this.getSkill(skillId)) {
      caseStudy.addSkill(skillId);
      return true;
    }
    return false;
  }

  public removeSkillFromCaseStudy(
    caseStudyId: string,
    skillId: string
  ): boolean {
    const caseStudy = this.getCaseStudy(caseStudyId);
    if (caseStudy) {
      caseStudy.removeSkill(skillId);
      return true;
    }
    return false;
  }

  public getSkillsForCaseStudy(caseStudyId: string): Skill[] {
    const caseStudy = this.getCaseStudy(caseStudyId);
    if (!caseStudy) return [];

    return caseStudy.skillIds
      .map((skillId) => this.getSkill(skillId))
      .filter((skill): skill is Skill => skill !== undefined);
  }

  public getCaseStudiesUsingSkill(skillId: string): CaseStudy[] {
    return this.getAllCaseStudies().filter((caseStudy) =>
      caseStudy.hasSkill(skillId)
    );
  }

  public getCaseStudiesWithSkillCount(): Array<{
    caseStudy: CaseStudy;
    skillCount: number;
  }> {
    return this.getAllCaseStudies().map((caseStudy) => ({
      caseStudy,
      skillCount: caseStudy.getSkillCount(),
    }));
  }

  // Skill methods
  public addSkill(skill: Skill): void {
    this._skills.set(skill.id, skill);
  }

  public getSkill(id: string): Skill | undefined {
    return this._skills.get(id);
  }

  public removeSkill(id: string): boolean {
    return this._skills.delete(id);
  }

  public getAllSkills(sortStrategy?: SortStrategy<Skill>): Skill[] {
    const skills = Array.from(this._skills.values());
    return sortStrategy ? sortStrategy.sort(skills) : skills;
  }

  public filterSkills(
    criteria: SkillFilterCriteria,
    sortStrategy?: SortStrategy<Skill>
  ): Skill[] {
    let filtered = Array.from(this._skills.values());

    if (criteria.searchTerm) {
      const term = criteria.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (skill) =>
          skill.title.toLowerCase().includes(term) ||
          skill.description.toLowerCase().includes(term)
      );
    }

    if (criteria.levels && criteria.levels.length > 0) {
      filtered = filtered.filter((skill) =>
        criteria.levels!.includes(skill.level)
      );
    }

    if (criteria.categories && criteria.categories.length > 0) {
      filtered = filtered.filter((skill) =>
        criteria.categories!.includes(skill.category)
      );
    }

    if (criteria.yearsOfExperience) {
      filtered = filtered.filter(
        (skill) =>
          skill.yearsOfExperience >= criteria.yearsOfExperience!.min &&
          skill.yearsOfExperience <= criteria.yearsOfExperience!.max
      );
    }

    return sortStrategy ? sortStrategy.sort(filtered) : filtered;
  }

  public getSkillsByCategory(): Map<SkillCategory, Skill[]> {
    const categorized = new Map<SkillCategory, Skill[]>();

    this._skills.forEach((skill) => {
      if (!categorized.has(skill.category)) {
        categorized.set(skill.category, []);
      }
      categorized.get(skill.category)!.push(skill);
    });

    return categorized;
  }

  // Tool methods
  public addTool(tool: Tool): void {
    this._tools.set(tool.id, tool);
  }

  public getTool(id: string): Tool | undefined {
    return this._tools.get(id);
  }

  public removeTool(id: string): boolean {
    return this._tools.delete(id);
  }

  public getAllTools(sortStrategy?: SortStrategy<Tool>): Tool[] {
    const tools = Array.from(this._tools.values());
    return sortStrategy ? sortStrategy.sort(tools) : tools;
  }

  public filterTools(
    criteria: ToolFilterCriteria,
    sortStrategy?: SortStrategy<Tool>
  ): Tool[] {
    let filtered = Array.from(this._tools.values());

    if (criteria.searchTerm) {
      const term = criteria.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (tool) =>
          tool.title.toLowerCase().includes(term) ||
          tool.description.toLowerCase().includes(term)
      );
    }

    if (criteria.categories && criteria.categories.length > 0) {
      filtered = filtered.filter((tool) =>
        criteria.categories!.includes(tool.category)
      );
    }

    return sortStrategy ? sortStrategy.sort(filtered) : filtered;
  }

  public getToolsByCategory(): Map<ToolCategory, Tool[]> {
    const categorized = new Map<ToolCategory, Tool[]>();

    this._tools.forEach((tool) => {
      if (!categorized.has(tool.category)) {
        categorized.set(tool.category, []);
      }
      categorized.get(tool.category)!.push(tool);
    });

    return categorized;
  }

  public getToolsForSkill(skillId: string): Tool[] {
    return Array.from(this._tools.values()).filter((tool) =>
      tool.skillIds.includes(skillId)
    );
  }

  // Book methods
  public addBook(book: Book): void {
    this._books.set(book.id, book);
  }

  public getBook(id: string): Book | undefined {
    return this._books.get(id);
  }

  public removeBook(id: string): boolean {
    return this._books.delete(id);
  }

  public getAllBooks(sortStrategy?: SortStrategy<Book>): Book[] {
    const books = Array.from(this._books.values());
    return sortStrategy ? sortStrategy.sort(books) : books;
  }

  public filterBooks(
    criteria: BookFilterCriteria,
    sortStrategy?: SortStrategy<Book>
  ): Book[] {
    let filtered = Array.from(this._books.values());

    if (criteria.searchTerm) {
      const term = criteria.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(term) ||
          book.description.toLowerCase().includes(term) ||
          book.author.toLowerCase().includes(term)
      );
    }

    if (criteria.categories && criteria.categories.length > 0) {
      filtered = filtered.filter((book) =>
        criteria.categories!.includes(book.category)
      );
    }

    if (criteria.statuses && criteria.statuses.length > 0) {
      filtered = filtered.filter((book) =>
        criteria.statuses!.includes(book.status)
      );
    }

    if (criteria.rating) {
      filtered = filtered.filter(
        (book) =>
          book.rating !== undefined &&
          book.rating >= criteria.rating!.min &&
          book.rating <= criteria.rating!.max
      );
    }

    return sortStrategy ? sortStrategy.sort(filtered) : filtered;
  }

  public getBooksForSkill(skillId: string): Book[] {
    return Array.from(this._books.values()).filter((book) =>
      book.skillIds.includes(skillId)
    );
  }

  // Achievement methods
  public addAchievement(achievement: Achievement): void {
    this._achievements.set(achievement.id, achievement);
  }

  public getAchievement(id: string): Achievement | undefined {
    return this._achievements.get(id);
  }

  public removeAchievement(id: string): boolean {
    return this._achievements.delete(id);
  }

  public getAllAchievements(
    sortStrategy?: SortStrategy<Achievement>
  ): Achievement[] {
    const achievements = Array.from(this._achievements.values());
    return sortStrategy ? sortStrategy.sort(achievements) : achievements;
  }

  public filterAchievements(
    criteria: AchievementFilterCriteria,
    sortStrategy?: SortStrategy<Achievement>
  ): Achievement[] {
    let filtered = Array.from(this._achievements.values());

    if (criteria.searchTerm) {
      const term = criteria.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (achievement) =>
          achievement.title.toLowerCase().includes(term) ||
          achievement.description.toLowerCase().includes(term) ||
          achievement.issuer.toLowerCase().includes(term)
      );
    }

    if (criteria.types && criteria.types.length > 0) {
      filtered = filtered.filter((achievement) =>
        criteria.types!.includes(achievement.type)
      );
    }

    if (criteria.verified !== undefined) {
      filtered = filtered.filter(
        (achievement) => achievement.verification.verified === criteria.verified
      );
    }

    if (criteria.expired !== undefined) {
      filtered = filtered.filter(
        (achievement) => achievement.isExpired() === criteria.expired
      );
    }

    return sortStrategy ? sortStrategy.sort(filtered) : filtered;
  }

  public getCaseStudiesForSkill(skillId: string): CaseStudy[] {
    return Array.from(this._caseStudies.values()).filter((caseStudy) =>
      caseStudy.skillIds.includes(skillId)
    );
  }

  // Utility methods
  public getPortfolioSummary() {
    return {
      caseStudies: this._caseStudies.size,
      skills: this._skills.size,
      tools: this._tools.size,
      books: this._books.size,
      achievements: this._achievements.size,
      totalItems:
        this._caseStudies.size +
        this._skills.size +
        this._tools.size +
        this._books.size +
        this._achievements.size,
    };
  }

  public searchAll(searchTerm: string): {
    caseStudies: CaseStudy[];
    skills: Skill[];
    tools: Tool[];
    books: Book[];
    achievements: Achievement[];
  } {
    const term = searchTerm.toLowerCase();

    return {
      caseStudies: this.filterCaseStudies({ searchTerm: term }),
      skills: this.filterSkills({ searchTerm: term }),
      tools: this.filterTools({ searchTerm: term }),
      books: this.filterBooks({ searchTerm: term }),
      achievements: this.filterAchievements({ searchTerm: term }),
    };
  }

  public exportToJSON(): string {
    return JSON.stringify(
      {
        caseStudies: Array.from(this._caseStudies.values()).map((cs) =>
          cs.toJSON()
        ),
        skills: Array.from(this._skills.values()).map((skill) =>
          skill.toJSON()
        ),
        tools: Array.from(this._tools.values()).map((tool) => tool.toJSON()),
        books: Array.from(this._books.values()).map((book) => book.toJSON()),
        achievements: Array.from(this._achievements.values()).map(
          (achievement) => achievement.toJSON()
        ),
      },
      null,
      2
    );
  }
}
