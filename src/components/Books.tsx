import React, { useState } from "react";
import { motion } from "framer-motion";
import { Book } from "../models/Book";
import { PortfolioManager } from "../models/PortfolioManager";
import BookModal from "./BookModal";
import BookCard from "./BookCard";
import BooksIcon from "./BooksIcon";
import { books } from "../data/books";

interface BooksProps {
  portfolioManager: PortfolioManager;
}

const Books: React.FC<BooksProps> = ({ portfolioManager }) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  return (
    <div className="section">
      <div className="container">
        {/* Section Header with Icon and Big Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 0,
            gap: 24,
            width: "100%",
            maxWidth: 1200,
            height: 100,
            marginBottom: 32,
          }}
        >
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
          <span
            style={{
              fontFamily: "'Jersey 10', sans-serif",
              fontWeight: 400,
              fontSize: 64,
              lineHeight: "69px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#242628",
              flex: 1,
            }}
          >
            Books
          </span>
        </div>
        <div className="overflow-x-auto w-full pb-4">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 24,
              minWidth: 1200,
              alignItems: "stretch",
            }}
          >
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="flex-shrink-0"
                style={{
                  width: 174,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                }}
              >
                <BookCard book={book} />
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
