import React from "react";

const TavernaWebsite: React.FC = () => {
  const colors = {
    sand: "#fdf8f2",
    seaBlue: "#0077b6",
    skyBlue: "#00b4d8",
    white: "#ffffff",
    textDark: "#1f2e3d",
    accent: "#90e0ef",
  };

  const styles = {
    container: {
      fontFamily: "Segoe UI, Helvetica, sans-serif",
      backgroundColor: colors.sand,
      color: colors.textDark,
      margin: 0,
      padding: 0,
      lineHeight: 1.6,
    },
    hero: {
      background: `linear-gradient(to right, ${colors.skyBlue}, ${colors.seaBlue})`,
      color: colors.white,
      padding: "80px 20px",
      textAlign: "center" as const,
    },
    heroTitle: {
      fontSize: "3.5rem",
      marginBottom: "10px",
    },
    heroSubtitle: {
      fontSize: "1.3rem",
      fontWeight: 300,
      maxWidth: "600px",
      margin: "0 auto",
    },
    section: {
      padding: "60px 20px",
      maxWidth: "900px",
      margin: "0 auto",
      textAlign: "center" as const,
    },
    sectionTitle: {
      fontSize: "2rem",
      marginBottom: "20px",
    },
    text: {
      fontSize: "1.1rem",
      maxWidth: "700px",
      margin: "0 auto",
      color: "#333",
    },
    menuButton: {
      display: "inline-block",
      marginTop: "30px",
      padding: "14px 30px",
      backgroundColor: colors.seaBlue,
      color: colors.white,
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "1rem",
      borderRadius: "50px",
      border: "none",
      transition: "background 0.3s ease",
    },
    menuButtonHover: {
      backgroundColor: colors.skyBlue,
    },
    footer: {
      backgroundColor: colors.seaBlue,
      color: colors.white,
      textAlign: "center" as const,
      padding: "30px 20px",
      marginTop: "40px",
    },
    footerText: {
      fontSize: "0.9rem",
      opacity: 0.8,
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.hero}>
        <h1 style={styles.heroTitle}>Thalassinos Taverna</h1>
        <p style={styles.heroSubtitle}>
          Authentic Greek seaside dining in Nea Plagia, Chalkidiki – where the waves meet the flavor
        </p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Welcome</h2>
        <p style={styles.text}>
          Our taverna sits right on the sand, offering an unforgettable view of the Aegean Sea. 
          We serve traditional Greek dishes made with fresh, local ingredients. From grilled fish to flavorful meze and cool drinks, it’s the perfect setting for a relaxing meal under the sun or stars.
        </p>
        <a
          href="/menu.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.menuButton}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.skyBlue)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors.seaBlue)}
        >
          View Full Menu (PDF)
        </a>
      </section>

      <footer style={styles.footer}>
        <p style={styles.footerText}>📍 Nea Plagia Beach, Chalkidiki — Tel: +30 23730 31024</p>
        <p style={styles.footerText}>© {new Date().getFullYear()} Thalassinos Taverna</p>
      </footer>
    </div>
  );
};

export default TavernaWebsite;
