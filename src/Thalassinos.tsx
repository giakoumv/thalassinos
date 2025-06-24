import React from "react";

const TavernaWebsite: React.FC = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f4e9",
      color: "#2c2c2c",
      minHeight: "100vh",
      padding: "0",
      margin: "0",
    },
    header: {
      backgroundColor: "#fcefdc",
      padding: "40px 20px",
      textAlign: "center" as const,
      borderBottom: "2px solid #e0d4b7",
    },
    title: {
      fontSize: "2.8rem",
      margin: "0",
      fontWeight: 700,
      letterSpacing: "1px",
    },
    subtitle: {
      fontSize: "1.2rem",
      marginTop: "10px",
      color: "#5a5a5a",
    },
    section: {
      padding: "40px 20px",
      maxWidth: "800px",
      margin: "0 auto",
      textAlign: "center" as const,
    },
    menuButton: {
      display: "inline-block",
      marginTop: "20px",
      padding: "12px 24px",
      backgroundColor: "#e7cfa1",
      color: "#2c2c2c",
      textDecoration: "none",
      fontWeight: "bold",
      borderRadius: "8px",
      border: "1px solid #d4ba8f",
      transition: "background-color 0.3s ease",
    },
    footer: {
      backgroundColor: "#fcefdc",
      textAlign: "center" as const,
      padding: "20px",
      borderTop: "2px solid #e0d4b7",
      fontSize: "0.9rem",
      color: "#5a5a5a",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Thalassinos Taverna</h1>
        <p style={styles.subtitle}>Fresh seafood by the beach in Nea Plagia, Chalkidiki</p>
      </header>

      <section style={styles.section}>
        <h2>Welcome to Our Seaside Taverna</h2>
        <p>
          Enjoy traditional Greek cuisine with fresh local ingredients, right on the sandy shores of Chalkidiki. 
          Our menu includes seafood delicacies, meze platters, grilled meats, and refreshing beverages.
        </p>
        <a
          href="/menu.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.menuButton}
        >
          View Our Menu (PDF)
        </a>
      </section>

      <footer style={styles.footer}>
        <p>Nea Plagia Beach, Chalkidiki · Tel: 23730 31024</p>
        <p>© {new Date().getFullYear()} Thalassinos Taverna. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TavernaWebsite;
