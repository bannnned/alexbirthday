// src/components/FeedbackNavigation.tsx
import React from "react";

interface FeedbackNavigationProps {
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  isLast: boolean;
}

const FeedbackNavigation: React.FC<FeedbackNavigationProps> = ({
  currentIndex,
  total,
  onPrev,
  onNext,
  isLast,
}) => {
  const canGoBack = currentIndex > 0;
  const canGoForward = isLast ? true : currentIndex < total - 1;

  return (
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        right: "50%",
        transform: "translate(50%)",
        display: "flex",
        gap: "10px",
      }}
    >
      <button
        onClick={onPrev}
        disabled={!canGoBack}
        style={{
          background: canGoBack ? "#4a5568" : "#2d3748",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "6px 10px",
          cursor: canGoBack ? "pointer" : "not-allowed",
        }}
      >
        ←
      </button>
      <button
        onClick={onNext}
        disabled={!canGoForward}
        style={{
          background: canGoForward ? "#4a5568" : "#2d3748",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "6px 10px",
          cursor: canGoForward ? "pointer" : "not-allowed",
        }}
      >
        →
      </button>
    </div>
  );
};

export default FeedbackNavigation;
