import React, { useState } from "react";
import { motion } from "framer-motion";
import { Book } from "../models/Book";
import { PortfolioManager } from "../models/PortfolioManager";
import BookModal from "./BookModal";
import BookCard from "./BookCard";

interface BooksProps {
  portfolioManager: PortfolioManager;
}

const Books: React.FC<BooksProps> = ({ portfolioManager }) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const books = portfolioManager.getAllBooks();

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">Books</h2>
        <div className="overflow-x-auto w-full pb-4">
          <div className="inline-flex gap-6 min-w-[1200px]">
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="flex-shrink-0"
                style={{ width: 260 }}
              >
                <BookCard book={book} onClick={() => handleBookClick(book)} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {selectedBook && (
        <BookModal
          book={selectedBook}
          portfolioManager={portfolioManager}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </div>
  );
};

export default Books;
