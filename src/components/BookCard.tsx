import React from "react";
import { Book, ReadingStatus } from "../models/Book";

interface BookCardProps {
  book: Book;
  onClick?: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
  // Use coverImageUrl if available, otherwise fallback to a placeholder
  const imageUrl =
    (book as any).coverImageUrl ||
    "https://placehold.co/200x300?text=Book+Cover";

  // Build tags string
  let tags = [];
  if (book.status === ReadingStatus.COMPLETED) tags.push("Done");
  else if (book.status === ReadingStatus.CURRENTLY_READING)
    tags.push("Currently reading");
  else if (book.status === ReadingStatus.DNF) tags.push("Did not finish");
  else if (book.status === ReadingStatus.REFERENCE) tags.push("Reference");
  else tags.push(book.status);
  if (book.hasNotes) tags.push("With notes");

  return (
    <div
      onClick={onClick}
      className="bg-gray-50 border border-gray-300 rounded-md p-0 flex flex-col items-center cursor-pointer"
      style={{ width: 220, minHeight: 390 }}
    >
      {/* Book Cover */}
      <div
        className="w-full flex justify-center border-b border-gray-200"
        style={{ background: "#fff" }}
      >
        <img
          src={imageUrl}
          alt={book.title}
          className="object-contain"
          style={{
            width: 200,
            height: 260,
            margin: 0,
            padding: 0,
            border: "1px solid #bbb",
            borderRadius: 2,
            background: "#fff",
          }}
        />
      </div>
      {/* Tags */}
      <div
        className="w-full text-xs text-gray-500 text-left px-3 py-2"
        style={{ minHeight: 24 }}
      >
        [{tags.join(", ")}]
      </div>
      {/* Title */}
      <div className="w-full px-3 mt-2">
        <div
          className="font-bold text-base text-gray-900"
          style={{ fontFamily: "serif" }}
        >
          {book.title}
        </div>
        <div className="text-xs text-gray-700 mt-1 mb-2">{book.author}</div>
      </div>
    </div>
  );
};

export default BookCard;
