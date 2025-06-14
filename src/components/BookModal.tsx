import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Star, BookOpen, Quote } from "lucide-react";
import { Book, ReadingStatus } from "../models/Book";
import { PortfolioManager } from "../models/PortfolioManager";
import SkillCard from "./SkillCard";
import BookCard from "./BookCard";

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
          borderRadius: "0.75rem",
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          maxWidth: "48rem",
          width: "100%",
          maxHeight: "80vh",
          overflow: "auto",
          border: "1px solid #e5e7eb",
          display: "flex",
          flexDirection: "column",
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
            <div className="flex gap-6">
              {/* Book Cover */}
              <div className="w-48 h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <BookOpen size={48} className="text-gray-400" />
              </div>
              {/* Book Info */}
              <div className="flex-1">
                <div className="flex gap-2 mb-4">
                  <span
                    className={`badge ${
                      book.status === ReadingStatus.COMPLETED
                        ? "badge-success"
                        : book.status === ReadingStatus.CURRENTLY_READING
                        ? "badge-primary"
                        : book.status === ReadingStatus.DNF
                        ? "badge-warning"
                        : "badge-info"
                    }`}
                  >
                    {book.status}
                  </span>
                  {book.hasNotes && (
                    <span className="badge badge-secondary">Has Notes</span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {book.title}
                </h3>
                <p className="text-lg text-gray-600 mb-4">by {book.author}</p>

                {/* Rating */}
                {book.rating !== undefined && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(10)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={`${
                            i < (book.rating || 0)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600">{book.rating}/10</span>
                  </div>
                )}

                {/* Thoughts */}
                {book.thoughts && (
                  <p className="text-gray-600 italic">"{book.thoughts}"</p>
                )}
              </div>
            </div>

            {/* Favorite Quotes Section */}
            {book.quotes && book.quotes.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Quote size={20} className="text-purple-600" />
                  Favorite Quotes
                </h3>
                <div className="space-y-4">
                  {book.quotes.map((quote, index) => (
                    <div key={index} className="card">
                      <p className="text-gray-600 italic">"{quote}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Section */}
            {book.skillIds && book.skillIds.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What I am reading this for
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {book.skillIds.map((skillId) => {
                    const skill = portfolioManager.getSkill(skillId);
                    if (!skill) return null;
                    return (
                      <SkillCard
                        key={skill.id}
                        skill={skill}
                        portfolioManager={portfolioManager}
                        showCaseStudies={false}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {/* Other Books Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Other Books
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {portfolioManager
                  .getAllBooks()
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
