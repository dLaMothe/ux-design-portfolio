import React, { useState } from "react";
import { motion } from "framer-motion";
import { Book } from "../models/Book";
import { PortfolioManager } from "../models/PortfolioManager";
import BookModal from "./BookModal";
import BookCard from "./BookCard";
import BooksIcon from "./BooksIcon";

interface BooksProps {
  portfolioManager: PortfolioManager;
}

const Books: React.FC<BooksProps> = ({ portfolioManager }) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const books = portfolioManager.getAllBooks();

  return (
    <div className="books-main-page" style={{ paddingTop: 192 }}>
      <div className="container">
        <div style={{ width: "100%", maxWidth: 1200 }}>
          {/* Section Header with Icon and Big Headline */}
          <div className="books-header">
            {/* Books Icon */}
            <div className="books-icon">
              <BooksIcon />
            </div>
            {/* Headline */}
            <h1 className="section-title-main">Browse My Library</h1>
          </div>
        </div>

        {/* Book Section */}
        <div className="books-container">
          <div className="books-scroll-area">
            {books.map((book, index) => (
              <motion.div key={book.id} className="book-item">
                <BookCard book={book} onClick={() => setSelectedBook(book)} />
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
