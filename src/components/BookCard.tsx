import React from "react";
import { Book } from "../models/Book";
import { useModal } from "../App";

interface BookCardProps {
  book: Book;
  onClick?: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
  const { openBookModal } = useModal();
  const imageUrl =
    book.coverImageUrl || "https://placehold.co/166x255?text=Book+Cover";

  return (
    <div
      onClick={() => {
        if (onClick) onClick();
        else openBookModal(book);
      }}
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
        width: 174,
        height: "100%",
        background: "#EFEFEF",
        border: "1px solid #242628",
        boxShadow: "0px 4px 0px #000000",
        borderRadius: 2,
        cursor: "pointer",
        gap: 0,
        justifyContent: "flex-start",
      }}
    >
      {/* Picture */}
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          padding: 8,
          width: 166,
          height: 255,
          background: "#FFFFFF",
          border: "1px solid #242628",
          borderRadius: 0,
        }}
      >
        <img
          src={imageUrl}
          alt={book.title}
          style={{
            width: 150,
            height: 239,
            objectFit: "cover",
            background: "#fff",
            border: "none",
            borderRadius: 0,
          }}
        />
      </div>
      {/* Status (now Tag) */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          padding: 0,
          margin: 0,
          marginBottom: 8,
          height: "auto",
        }}
      >
        {Array.isArray(book.tags) && book.tags.length > 0 && (
          <span
            style={{
              fontFamily: "Ubuntu Mono, monospace",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "18px",
              color: "#242628",
              margin: "0 2px",
            }}
          >
            [{book.tags.join(", ")}]
          </span>
        )}
      </div>
      {/* Name and Creator */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          padding: 0,
          margin: "0 auto",
          width: 150,
          marginTop: "auto",
        }}
      >
        <div
          style={{
            fontFamily: "Ubuntu Mono, monospace",
            fontWeight: 700,
            fontSize: 14,
            lineHeight: "20px",
            color: "#242628",
            width: 150,
            marginBottom: 2,
            wordBreak: "break-word",
          }}
        >
          {book.title}
        </div>
        <div
          style={{
            fontFamily: "Ubuntu Mono, monospace",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "20px",
            color: "#242628",
            width: 150,
            marginTop: 2,
            wordBreak: "break-word",
          }}
        >
          {book.author}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
