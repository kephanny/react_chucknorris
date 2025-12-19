import React from "react";

export default function InfoCard({ title, children }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.content}>{children}</div>
    </div>
  );
}

const styles = {
  card: {
    maxWidth: "420px",
    margin: "30px auto",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif"
  },
  title: {
    textAlign: "center",
    marginBottom: "16px"
  },
  content: {
    lineHeight: "1.8"
  }
};
