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
    <div style={{ paddingTop: 192 }}>
      <div className="container">
        <div style={{ width: "100%", maxWidth: 1200 }}>
          {/* Section Header with Icon and Big Headline */}
          <div className="books-header">
            {/* Books Icon */}
            <div
              style={{
                width: 100,
                height: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "none",
                order: 0,
                flexGrow: 0,
              }}
            >
              <BooksIcon />
            </div>
            {/* Headline */}
            <h1
              style={{
                fontFamily: "'Jersey 10', sans-serif",
                fontWeight: 400,
                fontSize: 64,
                lineHeight: "69px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#242628",
                margin: 0,
                padding: 0,
              }}
            >
              Browse My Library
            </h1>
          </div>
        </div>

        {/* Book Section */}
        <div
          style={{
            width: "100vw",
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
            position: "relative",
            overflow: "visible",
          }}
        >
          <div
            className="books-scroll-area"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "24px",
              overflowX: "auto",
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              paddingTop: "20px",
              paddingBottom: "20px",
              paddingLeft: "calc((100vw - 1200px) / 2 + 16px)",
              paddingRight: "calc((100vw - 1200px) / 2 + 16px)",
              marginTop: "-20px",
              marginBottom: "-20px",
            }}
          >
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
