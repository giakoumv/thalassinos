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
    background: {
      position: "fixed" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "url('/hero-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: -2,
    },
    overlay: {
      position: "fixed" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      zIndex: -1,
    },
    container: {
      fontFamily: "Segoe UI, Helvetica, sans-serif",
      color: colors.white,
      margin: 0,
      padding: 0,
      lineHeight: 1.6,
      position: "relative" as const,
      zIndex: 1,
    },
    header: {
      textAlign: "center" as const,
      padding: "100px 20px 60px",
    },
    logo: {
      width: "160px",
      height: "auto",
      marginBottom: "30px",
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
      color: colors.white,
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
      backgroundColor: "rgba(0, 119, 182, 0.85)",
      color: colors.white,
      textAlign: "center" as const,
      padding: "30px 20px",
      marginTop: "60px",
    },
    footerText: {
      fontSize: "0.9rem",
      opacity: 0.9,
    },
  };

  return (
    <>
      <div style={styles.background}></div>
      <div style={styles.overlay}></div>

      <div style={styles.container}>
        <header style={styles.header}>
          <img src="/logo.png" alt="Taverna Logo" style={styles.logo} />
          <h1 style={styles.heroTitle}>Thalassinos Taverna</h1>
          <p style={styles.heroSubtitle}>
            Authentic seaside dining in Nea Plagia, Chalkidiki — Taste the Aegean
          </p>
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
    </>
  );
};

export default TavernaWebsite;
