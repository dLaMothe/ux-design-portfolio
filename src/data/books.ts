import { Book, BookCategory, ReadingStatus } from "../models/Book";
import booksData from "./books.json";

export const books: Book[] = booksData.map((bookData) => {
  return new Book(
    bookData.id,
    bookData.title,
    bookData.description,
    bookData.author,
    bookData.publishedYear,
    bookData.category as BookCategory,
    bookData.status as ReadingStatus,
    bookData.isbn ?? undefined,
    bookData.keyTakeaways,
    bookData.quotes,
    bookData.tags,
    bookData.skillIds,
    bookData.caseStudyIds,
    bookData.toolIds,
    bookData.achievementIds,
    bookData.hasNotes,
    bookData.thoughts
  );
});
