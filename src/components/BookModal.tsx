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
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          zIndex: 10000,
          transform: "translate(-50%, -50%)",
          background: "#EFEFEF",
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
          style={{
            width: "100%",
            height: "100%",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            overflowX: "hidden",
            padding: "0 90px 64px 90px",
            boxSizing: "border-box",
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
              <div
                className="book-modal-quotes-section"
                style={{
                  backgroundColor: "#F9F9F9",
                  padding: "64px 90px",
                  margin: "24px -90px",
                  width: "calc(100% + 180px)",
                }}
              >
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
                  style={{ padding: 0, margin: "129px 0 0 0" }}
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

            {/* Other Books Section */}
            <div style={{ marginTop: "129px" }}>
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
                  <BookSmall width={40} height={40} />
                </span>
                <h2
                  className="book-modal-skills-title"
                  style={{ margin: 0, padding: 0 }}
                >
                  Other Books
                </h2>
              </div>
              <div
                className="overflow-x-auto w-full pb-4"
                style={{ marginTop: "48px" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 24,
                    minWidth: 1200,
                    alignItems: "stretch",
                  }}
                >
                  {books
                    .filter((b) => b.id !== book.id)
                    .map((otherBook, index) => (
                      <motion.div
                        key={otherBook.id}
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
                        <BookCard
                          book={otherBook}
                          onClick={() => {
                            // Optionally, you could open this book in the modal
                          }}
                        />
                      </motion.div>
                    ))}
                </div>
              </div>
            </div>
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
