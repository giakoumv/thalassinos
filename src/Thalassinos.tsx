import React, { useState, useEffect } from 'react';

export default function ThalassinosWebsite() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsVisible(prev => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting
        }));
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[id]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const [showPDF, setShowPDF] = useState(false);
  
  // Replace with your actual PDF path
  const menuPDFPath = "/menu.pdf";

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      color: '#0f172a',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    heroSection: {
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    heroBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to bottom right, #2563eb, #1d4ed8, #0891b2)',
      transform: `translateY(${scrollY * 0.5}px)`
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.2)'
    },
    floatingElement1: {
      position: 'absolute',
      top: '80px',
      left: '40px',
      color: 'rgba(255,255,255,0.3)',
      fontSize: '30px',
      animation: 'bounce 2s infinite'
    },
    floatingElement2: {
      position: 'absolute',
      bottom: '128px',
      right: '64px',
      color: 'rgba(255,255,255,0.3)',
      fontSize: '24px',
      animation: 'pulse 2s infinite'
    },
    heroContent: {
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      color: 'white',
      padding: '0 24px'
    },
    heroTitle: {
      fontSize: 'clamp(4rem, 8vw, 8rem)',
      fontWeight: '300',
      marginBottom: '24px',
      letterSpacing: '0.1em'
    },
    heroDivider: {
      width: '128px',
      height: '1px',
      backgroundColor: 'rgba(255,255,255,0.6)',
      margin: '0 auto 32px auto'
    },
    heroSubtitle: {
      fontSize: 'clamp(1.25rem, 3vw, 2rem)',
      fontWeight: '300',
      opacity: 0.9,
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: 1.6
    },
    scrollIndicator: {
      position: 'absolute',
      bottom: '32px',
      left: '50%',
      transform: 'translateX(-50%)',
      color: 'rgba(255,255,255,0.8)',
      textAlign: 'center',
      animation: 'bounce 2s infinite'
    },
    scrollLine: {
      width: '1px',
      height: '64px',
      backgroundColor: 'rgba(255,255,255,0.4)',
      margin: '0 auto 8px auto'
    },
    section: {
      padding: '96px 24px'
    },
    sectionWhite: {
      backgroundColor: 'white'
    },
    sectionGray: {
      background: 'linear-gradient(to bottom right, #f1f5f9, #e0f2fe)'
    },
    sectionDark: {
      backgroundColor: '#0f172a',
      color: 'white'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 5rem)',
      fontWeight: '300',
      marginBottom: '64px',
      color: '#1e293b',
      textAlign: 'center'
    },
    sectionTitleWhite: {
      color: 'white'
    },
    grid: {
      display: 'grid',
      gap: '64px',
      alignItems: 'center'
    },
    gridTwoCol: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'
    },
    gridThreeCol: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '32px'
    },
    aboutText: {
      fontSize: '18px',
      color: '#64748b',
      lineHeight: 1.7,
      marginBottom: '24px'
    },
    aboutImage: {
      aspectRatio: '1/1',
      background: 'linear-gradient(to bottom right, #dbeafe, #e0f2fe)',
      borderRadius: '24px',
      padding: '32px',
      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    menuButton: {
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '20px 40px',
      borderRadius: '50px',
      border: 'none',
      fontSize: '20px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 25px -5px rgba(37,99,235,0.3)',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      margin: '0 auto'
    },
    menuButtonHover: {
      backgroundColor: '#1d4ed8',
      transform: 'translateY(-2px)',
      boxShadow: '0 20px 40px -10px rgba(37,99,235,0.4)'
    },
    pdfModal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.9)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    },
    pdfContainer: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '20px',
      maxWidth: '90vw',
      maxHeight: '90vh',
      position: 'relative',
      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '15px',
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '24px',
      cursor: 'pointer',
      color: '#64748b',
      zIndex: 1001,
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    pdfEmbed: {
      width: '80vw',
      height: '80vh',
      border: 'none',
      borderRadius: '8px'
    },
    menuPreview: {
      backgroundColor: '#f8fafc',
      padding: '40px',
      borderRadius: '16px',
      textAlign: 'center',
      border: '2px dashed #cbd5e1',
      margin: '32px 0'
    },
    menuIcon: {
      fontSize: '60px',
      marginBottom: '16px'
    },
    reviewCard: {
      backgroundColor: 'white',
      padding: '32px',
      borderRadius: '24px',
      boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    reviewCardHover: {
      boxShadow: '0 20px 40px -10px rgba(0,0,0,0.15)',
      transform: 'translateY(-8px)'
    },
    stars: {
      display: 'flex',
      marginBottom: '16px'
    },
    star: {
      color: '#fbbf24',
      fontSize: '20px'
    },
    reviewText: {
      color: '#64748b',
      fontWeight: '300',
      lineHeight: 1.7,
      marginBottom: '24px',
      fontStyle: 'italic'
    },
    reviewAuthor: {
      fontWeight: '500',
      color: '#1e293b'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '64px'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
      marginBottom: '32px'
    },
    contactIcon: {
      fontSize: '24px',
      color: '#60a5fa',
      marginTop: '4px'
    },
    contactLabel: {
      fontWeight: '500',
      marginBottom: '4px'
    },
    contactText: {
      color: '#cbd5e1',
      fontWeight: '300'
    },
    contactVisual: {
      aspectRatio: '1/1',
      background: 'linear-gradient(to bottom right, rgba(37,99,235,0.2), rgba(8,145,178,0.2))',
      borderRadius: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    footer: {
      padding: '48px 24px',
      backgroundColor: '#020617',
      color: '#64748b',
      textAlign: 'center'
    },
    footerTitle: {
      fontSize: '2rem',
      fontWeight: '300',
      marginBottom: '16px',
      color: 'white'
    },
    footerDivider: {
      width: '64px',
      height: '1px',
      backgroundColor: '#334155',
      margin: '0 auto 24px auto'
    },
    fadeIn: {
      transition: 'all 1s ease',
      transform: isVisible.about ? 'translateY(0)' : 'translateY(80px)',
      opacity: isVisible.about ? 1 : 0
    },
    fadeInMenu: {
      transition: 'all 1s ease',
      transform: isVisible.menu ? 'translateY(0)' : 'translateY(80px)',
      opacity: isVisible.menu ? 1 : 0
    },
    fadeInReviews: {
      transition: 'all 1s ease',
      transform: isVisible.reviews ? 'translateY(0)' : 'translateY(80px)',
      opacity: isVisible.reviews ? 1 : 0
    },
    fadeInContact: {
      transition: 'all 1s ease',
      transform: isVisible.contact ? 'translateY(0)' : 'translateY(80px)',
      opacity: isVisible.contact ? 1 : 0
    }
  };

  // Add CSS animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes bounce {
        0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
        40%, 43% { transform: translateY(-30px); }
        70% { transform: translateY(-15px); }
        90% { transform: translateY(-4px); }
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroBackground} />
        <div style={styles.heroOverlay} />
        
        {/* Floating Elements */}
        <div style={styles.floatingElement1}>〜</div>
        <div style={styles.floatingElement2}>🐟</div>
        
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Thalassinos</h1>
          <div style={styles.heroDivider}></div>
          <p style={styles.heroSubtitle}>
            Where the Aegean meets authentic flavors
          </p>
        </div>

        {/* Scroll Indicator */}
        <div style={styles.scrollIndicator}>
          <div style={styles.scrollLine}></div>
          <div style={{fontSize: '14px', fontWeight: '300'}}>Scroll</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{...styles.section}}>
        <div style={styles.container}>
          <div style={styles.fadeIn}>
            <div style={{...styles.grid, ...styles.gridTwoCol}}>
              <div>
                <h2 style={styles.sectionTitle}>Our Story</h2>
                <div style={styles.aboutText}>
                  For three generations, Thalassinos has been serving the freshest catch 
                  and traditional Greek cuisine on the shores of the Mediterranean.
                </div>
                <div style={styles.aboutText}>
                  Our family recipes, passed down through time, blend with the daily 
                  harvest from local fishermen to create an authentic dining experience.
                </div>
              </div>
              <div style={styles.aboutImage}>
                <div style={{fontSize: '80px', color: 'rgba(37,99,235,0.3)'}}>🍽️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" style={{...styles.section, ...styles.sectionWhite}}>
        <div style={styles.container}>
          <div style={styles.fadeInMenu}>
            <h2 style={styles.sectionTitle}>Our Menu</h2>
            
            <div style={{textAlign: 'center'}}>
              <div style={styles.menuPreview}>
                <div style={styles.menuIcon}>📋</div>
                <h3 style={{fontSize: '24px', marginBottom: '16px', color: '#1e293b'}}>
                  Today's Fresh Selection
                </h3>
                <p style={{color: '#64748b', marginBottom: '32px', fontSize: '18px'}}>
                  Discover our daily specials featuring the freshest catch and traditional Greek favorites
                </p>
                <button 
                  style={styles.menuButton}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1d4ed8';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(37,99,235,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#2563eb';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(37,99,235,0.3)';
                  }}
                  onClick={() => setShowPDF(true)}
                >
                  <span>📄</span>
                  View Full Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      {showPDF && (
        <div style={styles.pdfModal} onClick={() => setShowPDF(false)}>
          <div style={styles.pdfContainer} onClick={(e) => e.stopPropagation()}>
            <button 
              style={styles.closeButton}
              onClick={() => setShowPDF(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f1f5f9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              ✕
            </button>
            <embed
              src={menuPDFPath}
              type="application/pdf"
              style={styles.pdfEmbed}
            />
          </div>
        </div>
      )}

      {/* Reviews Section */}
      <section id="reviews" style={{...styles.section, ...styles.sectionGray}}>
        <div style={styles.container}>
          <div style={styles.fadeInReviews}>
            <h2 style={styles.sectionTitle}>What Our Guests Say</h2>
            
            <div style={{...styles.grid, ...styles.gridThreeCol}}>
              {[
                { name: "Maria K.", text: "The freshest seafood I've ever tasted. The sunset view is magical!" },
                { name: "James R.", text: "Authentic Greek hospitality. Every dish tells a story of tradition." },
                { name: "Sofia P.", text: "Three generations of perfection. This place is a true gem by the sea." }
              ].map((review, idx) => (
                <div 
                  key={idx} 
                  style={styles.reviewCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.15)';
                    e.currentTarget.style.transform = 'translateY(-8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0,0,0,0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={styles.star}>★</span>
                    ))}
                  </div>
                  <p style={styles.reviewText}>"{review.text}"</p>
                  <div style={styles.reviewAuthor}>{review.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{...styles.section, ...styles.sectionDark}}>
        <div style={styles.container}>
          <div style={styles.fadeInContact}>
            <div style={styles.contactGrid}>
              <div>
                <h2 style={{...styles.sectionTitle, ...styles.sectionTitleWhite}}>Visit Us</h2>
                <div>
                  <div style={styles.contactItem}>
                    <div style={styles.contactIcon}>📍</div>
                    <div>
                      <div style={styles.contactLabel}>Location</div>
                      <div style={styles.contactText}>
                        Seaside Promenade 15<br />
                        Mykonos, Greece
                      </div>
                    </div>
                  </div>
                  
                  <div style={styles.contactItem}>
                    <div style={styles.contactIcon}>🕐</div>
                    <div>
                      <div style={styles.contactLabel}>Hours</div>
                      <div style={styles.contactText}>
                        Daily: 12:00 PM - 12:00 AM<br />
                        Kitchen closes at 11:30 PM
                      </div>
                    </div>
                  </div>
                  
                  <div style={styles.contactItem}>
                    <div style={styles.contactIcon}>📞</div>
                    <div>
                      <div style={styles.contactLabel}>Reservations</div>
                      <div style={styles.contactText}>
                        +30 22890 XXXXX
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={styles.contactVisual}>
                <div>
                  <img src="media/images/pic1.jpg" alt="restaurant">
                  <p style={{fontSize: '20px', fontWeight: '300', color: '#cbd5e1'}}>
                    Where every sunset<br />
                    becomes a memory
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerTitle}>Thalassinos</div>
          <div style={styles.footerDivider}></div>
          <p style={{fontWeight: '300'}}>
            © 2025 Thalassinos Seaside Taverna. Taste the tradition.
          </p>
        </div>
      </footer>
    </div>
  );
}
