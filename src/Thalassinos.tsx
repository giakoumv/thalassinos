import React, { useState, useEffect } from 'react';

export default function ThalassinosWebsite() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    // Add Tailwind CSS if not already present
    if (!document.querySelector('link[href*="tailwindcss"]')) {
      const link = document.createElement('link');
      link.href = 'https://cdn.tailwindcss.com';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }, []);

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

  const menuItems = [
    { category: "Fresh Catch", items: [
      { name: "Grilled Sea Bass", price: "€24", desc: "With lemon & herbs" },
      { name: "Mediterranean Prawns", price: "€28", desc: "Garlic & white wine" },
      { name: "Seafood Platter", price: "€45", desc: "For two people" }
    ]},
    { category: "Traditional", items: [
      { name: "Moussaka", price: "€18", desc: "Classic Greek layers" },
      { name: "Souvlaki", price: "€16", desc: "Pork or chicken" },
      { name: "Greek Salad", price: "€12", desc: "Feta & olives" }
    ]}
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-white/30 animate-bounce">
          <div className="w-10 h-10 flex items-center justify-center text-3xl">〜</div>
        </div>
        <div className="absolute bottom-32 right-16 text-white/30 animate-pulse">
          <div className="w-8 h-8 flex items-center justify-center text-2xl">🐟</div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <div className="animate-fade-in">
            <h1 className="text-7xl md:text-8xl font-light mb-6 tracking-wide">
              Thalassinos
            </h1>
            <div className="w-32 h-px bg-white/60 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto leading-relaxed">
              Where the Aegean meets authentic flavors
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce">
          <div className="w-px h-16 bg-white/40 mx-auto mb-2"></div>
          <div className="text-sm font-light">Scroll</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 transform ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-light mb-8 text-slate-800">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    For three generations, Thalassinos has been serving the freshest catch 
                    and traditional Greek cuisine on the shores of the Mediterranean.
                  </p>
                  <p>
                    Our family recipes, passed down through time, blend with the daily 
                    harvest from local fishermen to create an authentic dining experience.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-50 rounded-3xl p-8 shadow-2xl">
                  <div className="h-full flex items-center justify-center">
                    <div className="text-8xl text-blue-600/30">🍽️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-1000 transform ${isVisible.menu ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-light text-center mb-16 text-slate-800">
              Today's Menu
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {menuItems.map((section, idx) => (
                <div key={idx} className="space-y-8">
                  <h3 className="text-3xl font-light text-blue-700 border-b border-blue-100 pb-4">
                    {section.category}
                  </h3>
                  <div className="space-y-6">
                    {section.items.map((item, i) => (
                      <div key={i} className="group hover:bg-slate-50 p-4 rounded-2xl transition-all duration-300">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-medium text-slate-800 group-hover:text-blue-700 transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-xl font-light text-blue-600 ml-4">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-slate-600 font-light">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-1000 transform ${isVisible.reviews ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-light text-center mb-16 text-slate-800">
              What Our Guests Say
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Maria K.", text: "The freshest seafood I've ever tasted. The sunset view is magical!" },
                { name: "James R.", text: "Authentic Greek hospitality. Every dish tells a story of tradition." },
                { name: "Sofia P.", text: "Three generations of perfection. This place is a true gem by the sea." }
              ].map((review, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 font-light leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="font-medium text-slate-800">
                    {review.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-1000 transform ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-5xl font-light mb-12">
                  Visit Us
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-400 mt-1 text-2xl">📍</div>
                    <div>
                      <div className="font-medium mb-1">Location</div>
                      <div className="text-slate-300 font-light">
                        Seaside Promenade 15<br />
                        Mykonos, Greece
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-400 mt-1 text-2xl">🕐</div>
                    <div>
                      <div className="font-medium mb-1">Hours</div>
                      <div className="text-slate-300 font-light">
                        Daily: 12:00 PM - 12:00 AM<br />
                        Kitchen closes at 11:30 PM
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-400 mt-1 text-2xl">📞</div>
                    <div>
                      <div className="font-medium mb-1">Reservations</div>
                      <div className="text-slate-300 font-light">
                        +30 22890 XXXXX
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl text-blue-400/40 mx-auto mb-6">🌊</div>
                    <p className="text-xl font-light text-slate-300">
                      Where every sunset<br />
                      becomes a memory
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-slate-400 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-3xl font-light mb-4 text-white">
            Thalassinos
          </div>
          <div className="w-16 h-px bg-slate-700 mx-auto mb-6"></div>
          <p className="font-light">
            © 2025 Thalassinos Seaside Taverna. Taste the tradition.
          </p>
        </div>
      </footer>
    </div>
  );
}