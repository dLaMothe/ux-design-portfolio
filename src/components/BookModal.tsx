import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Star, BookOpen, Quote } from "lucide-react";
import { Book, ReadingStatus } from "../models/Book";
import { PortfolioManager } from "../models/PortfolioManager";
import SkillCard from "./SkillCard";
import BookCard from "./BookCard";
import { books } from "../data/books";

interface BookModalProps {
  book: Book;
  portfolioManager: PortfolioManager;
  onClose: () => void;
}

const BookModal: React.FC<BookModalProps> = ({
  book,
  portfolioManager,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.body.style.overflowX = "hidden";
    };
  }, []);

  const modalContent = (
    <>
      {/* Dimmer overlay with rgba(0,0,0,0.25) */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "rgba(0,0,0,0.25)",
        }}
        aria-hidden="true"
      />
      {/* Modal Card */}
      <div
        ref={modalRef}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          zIndex: 10000,
          transform: "translate(-50%, -50%)",
          background: "white",
          borderRadius: 2,
          boxShadow:
            "0px 1497px 250px rgba(0, 0, 0, 0.01), 0px 842px 250px rgba(0, 0, 0, 0.05), 0px 374px 250px rgba(0, 0, 0, 0.09), 0px 94px 206px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "1000px",
          height: "90vh",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 0,
          gap: 64,
          overflow: "auto",
          border: "none",
        }}
      >
        {/* Header */}
        <div className="bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Book Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div
          className="overflow-y-auto"
          style={{
            height: "calc(80vh - 4rem)",
            WebkitOverflowScrolling: "touch",
            overflowX: "hidden",
          }}
        >
          <div className="p-6 space-y-8">
            {/* Book Header Section */}
            <div className="book-modal-hero">
              {/* Book Cover */}
              <div className="book-modal-cover">
                {/* Placeholder for book cover image */}
                <img
                  src={
                    book.coverImageUrl ||
                    "https://placehold.co/241x370?text=Book+Cover"
                  }
                  alt={book.title}
                  style={{
                    width: 225,
                    height: 354,
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
              </div>
              {/* Book Info */}
              <div className="book-modal-info">
                <div className="book-modal-tags">
                  {book.tags &&
                    book.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        [{tag}]
                      </span>
                    ))}
                </div>
                <div className="book-modal-title">{book.title}</div>
                <div className="book-modal-author">{book.author}</div>
                {book.thoughts && (
                  <div className="book-modal-thoughts">{book.thoughts}</div>
                )}
                {book.rating !== undefined && (
                  <div className="book-modal-rating">
                    My Rating:
                    {[...Array(10)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < (book.rating || 0)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span style={{ marginLeft: 4 }}>{book.rating}/10</span>
                  </div>
                )}
              </div>
            </div>

            {/* Favorite Quotes Section */}
            {book.quotes && book.quotes.length > 0 && (
              <div className="book-modal-quotes-section">
                <div className="book-modal-quotes-header">Favorite Quotes</div>
                <div className="book-modal-quotes-list">
                  {book.quotes.map((quote, index) => (
                    <div key={index} className="book-modal-quote-card">
                      {quote}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Section */}
            {book.skillIds && book.skillIds.length > 0 && (
              <>
                <div className="book-modal-skills-section">
                  <div className="book-modal-skills-header">
                    <span
                      className="book-modal-skills-star"
                      style={{
                        fontSize: 40,
                        color: "#FCFE53",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {/* SVG star icon for best match to Figma */}
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon
                          points="20,3 24.755,14.511 37,15.27 27.5,23.489 30.51,35.73 20,28.5 9.49,35.73 12.5,23.489 3,15.27 15.245,14.511"
                          fill="#FCFE53"
                          stroke="#242628"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                    <span className="book-modal-skills-title">
                      For what I am reading this
                    </span>
                  </div>
                  <div className="book-modal-skills-grid">
                    {book.skillIds.map((skillId, idx) => {
                      const skill = portfolioManager.getSkill(skillId);
                      if (!skill) return null;
                      return (
                        <SkillCard
                          key={skill.id}
                          skill={skill}
                          portfolioManager={portfolioManager}
                          showCaseStudies={false}
                          index={idx}
                        />
                      );
                    })}
                  </div>
                </div>
                {/* DEBUG: List all loaded skills and their IDs */}
                <div
                  style={{
                    marginTop: 24,
                    background: "#fffbe6",
                    padding: 16,
                    border: "1px solid #f5c542",
                    borderRadius: 4,
                  }}
                >
                  <strong>DEBUG: Loaded Skills</strong>
                  <ul
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: "none",
                    }}
                  >
                    {portfolioManager.getAllSkills().map((skill) => (
                      <li key={skill.id} style={{ fontFamily: "monospace" }}>
                        <b>{skill.id}</b>: {skill.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* Other Books Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Other Books
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {books
                  .filter((b) => b.id !== book.id)
                  .map((otherBook) => (
                    <BookCard
                      key={otherBook.id}
                      book={otherBook}
                      onClick={() => {
                        // Optionally, you could open this book in the modal
                      }}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
};

export default BookModal;
