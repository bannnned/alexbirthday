// src/components/FeedbackBox.tsx
import React from "react";

interface Feedback {
  speaker: string;
  text: string;
}

const FeedbackBox: React.FC<{ feedback: Feedback }> = ({ feedback }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "80px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(0,0,0,0.7)",
        color: "white",
        padding: "15px",
        borderRadius: "12px",
        maxWidth: "70%",
        textAlign: "center",
      }}
    >
      {feedback.speaker && (
        <div style={{ fontWeight: "bold", marginBottom: "6px" }}>
          {feedback.speaker}
        </div>
      )}
      <div>{feedback.text}</div>
    </div>
  );
};

export default FeedbackBox;
