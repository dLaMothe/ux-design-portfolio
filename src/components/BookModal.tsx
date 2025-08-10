import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Star } from "lucide-react";
import { Book } from "../models/Book";
import { PortfolioManager } from "../models/PortfolioManager";
import SkillCard from "./SkillCard";
import BookCard from "./BookCard";
import { books } from "../data/books";
import SkillModal from "./SkillModal";
import StarSmall from "./StarSmall";
import BookSmall from "./BookSmall";
import { motion } from "framer-motion";
import Close100 from "./Close100";

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
  const [selectedSkill, setSelectedSkill] = React.useState<any | null>(null);

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
          background: "rgba(0, 0, 0, 0.25)",
        }}
        aria-hidden="true"
      />
      {/* Modal Card */}
      <div
        ref={modalRef}
        className="book-modal-container"
        style={{
          zIndex: 10000,
          boxShadow:
            "0px 1497px 250px rgba(0, 0, 0, 0.01), 0px 842px 250px rgba(0, 0, 0, 0.05), 0px 374px 250px rgba(0, 0, 0, 0.09), 0px 94px 206px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "none",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#242628",
            zIndex: 1,
          }}
        >
          <Close100 />
        </button>
        <div
          className="book-modal-content"
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div style={{ padding: 0, margin: 0 }}>
            {/* Book Header Section */}
            <div className="book-modal-hero" style={{ padding: 0 }}>
              {/* Book Cover */}
              <div className="book-modal-cover">
                {/* Placeholder for book cover image */}
                <img
                  src={
                    book.coverImageUrl ||
                    "https://placehold.co/271x370?text=Book+Cover"
                  }
                  alt={book.title}
                />
              </div>
              {/* Book Info */}
              <div className="book-modal-info">
                <div className="book-modal-tags">
                  {book.tags && book.tags.length > 0 && (
                    <span className="tag">[{book.tags.join(", ")}]</span>
                  )}
                </div>
                <div className="book-modal-title">{book.title}</div>
                <div className="book-modal-author">{book.author}</div>
                <div className="book-modal-thoughts">{book.thoughts || ""}</div>
                <div className="book-modal-rating">
                  {book.rating !== undefined ? (
                    <>
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
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            {/* Favorite Quotes Section */}
            {book.quotes && book.quotes.length > 0 && (
              <div className="book-modal-quotes-section background-tile-pattern book-modal-quotes-with-bg">
                <div
                  className="book-modal-quotes-header"
                  style={{ margin: 0, padding: 0 }}
                >
                  Favorite Quotes
                </div>
                <div
                  className="book-modal-quotes-list"
                  style={{ margin: 0, padding: 0 }}
                >
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
                <div
                  className="book-modal-skills-section"
                  style={{ padding: 0, margin: "96px 0 0 0" }}
                >
                  <div
                    className="book-modal-skills-header"
                    style={{
                      margin: 0,
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "24px",
                    }}
                  >
                    <span
                      className="book-modal-skills-star"
                      style={{
                        fontSize: 40,
                        color: "#FCFE53",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <StarSmall width={40} height={40} />
                    </span>
                    <h2
                      className="book-modal-skills-title"
                      style={{ margin: 0, padding: 0 }}
                    >
                      For what I am reading this
                    </h2>
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
              </>
            )}

            {/* Related Books Section */}
            {book.relatedBookIds && book.relatedBookIds.length > 0 && (
              <div
                style={{
                  width: "calc(100% + 180px)",
                  position: "relative",
                  paddingBottom: "24px",
                  minHeight: "495px",
                  margin: "96px -90px 0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "24px",
                    marginBottom: "24px",
                    paddingLeft: "90px",
                  }}
                >
                  <BookSmall width={40} height={40} />
                  <h2
                    className="book-modal-skills-title"
                    style={{ padding: 0, margin: 0 }}
                  >
                    Related Books
                  </h2>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    overflowX: "auto",
                    overflowY: "visible",
                    paddingTop: "10px",
                    paddingBottom: "20px",
                    height: "440px",
                    msOverflowStyle: "none",
                    scrollbarWidth: "none",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      gap: "24px",
                      minWidth: "min-content",
                      height: "410px",
                      paddingLeft: "90px",
                      paddingRight: "90px",
                    }}
                  >
                    {book.relatedBookIds.map((relatedBookId) => {
                      const relatedBook =
                        portfolioManager.getBook(relatedBookId);
                      if (!relatedBook) return null;
                      return (
                        <motion.div
                          key={relatedBook.id}
                          className="book-item"
                          style={{
                            width: "174px",
                            height: "410px",
                            margin: 0,
                            padding: 0,
                          }}
                          whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <BookCard book={relatedBook} />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Skill Modal for selected skill */}
      {selectedSkill && (
        <SkillModal
          skill={selectedSkill}
          portfolioManager={portfolioManager}
          onClose={() => setSelectedSkill(null)}
          color={selectedSkill.customColor || "#EFEFEF"}
        />
      )}
    </>
  );

  return createPortal(modalContent, document.body);
};

export default BookModal;
