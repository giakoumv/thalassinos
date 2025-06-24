import React from "react";

const TavernaWebsite: React.FC = () => {
  const colors = {
    sand: "#fdf8f2",
    seaBlue: "#0077b6",
    skyBlue: "#00b4d8",
    textDark: "#1f2e3d",
    white: "#ffffff",
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
      backgroundImage: `url('/hero-bg.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: colors.white,
      padding: "100px 20px",
      textAlign: "center" as const,
      position: "relative" as const,
    },
    heroOverlay: {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      padding: "60px 20px",
    },
    logo: {
      width: "100px",
      height: "auto",
      marginBottom: "20px",
    },
    heroTitle: {
      fontSize: "3rem",
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
    footer: {
      backgroundColor: colors.seaBlue,
      color: colors.white,
      textAlign: "center" as const,
      padding: "30px 20px",
      marginTop: "40px",
    },
    footerText: {
      fontSize: "0.9rem",
      opacity: 0.85,
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.hero}>
        <div style={styles.heroOverlay}>
          <img src="/logo.png" alt="Taverna Logo" style={styles.logo} />
          <h1 style={styles.heroTitle}>Thalassinos Taverna</h1>
          <p style={styles.heroSubtitle}>
            Authentic seaside dining in Nea Plagia, Chalkidiki — Taste the Aegean
          </p>
        </div>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Welcome</h2>
        <p style={styles.text}>
          Step onto the sands and enjoy authentic Greek cuisine made with love and the freshest ingredients. 
          At Thalassinos, we bring the flavors of the sea straight to your table—perfect for sunset dinners or midday snacks by the waves.
        </p>
        <a
          href="/menu.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.menuButton}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.skyBlue)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors.seaBlue)}
        >
          View Menu (PDF)
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
