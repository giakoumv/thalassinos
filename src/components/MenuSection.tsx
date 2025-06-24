import React from "react";

const renderItem = (name: string, description: string, price: string) => (
    <div style={styles.item}>
      <div>
        <div style={styles.name}>{name}</div>
        <div style={styles.description}>{description}</div>
      </div>
      <div style={styles.price}>{price}</div>
    </div>
  );

const MenuSection: React.FC = () => {
  const styles = {
    nav: {
      position: "sticky" as const,
      top: 0,
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      padding: "10px 20px",
      zIndex: 10,
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap" as const,
      gap: "10px",
      borderBottom: "1px solid #ddd",
    },
    navLink: {
      fontSize: "0.95rem",
      color: "#0077b6",
      textDecoration: "none",
      fontWeight: "bold" as const,
      padding: "6px 12px",
      borderRadius: "20px",
      backgroundColor: "#e0f7fa",
      transition: "background-color 0.3s",
    },
    section: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      padding: "60px 20px",
      maxWidth: "1000px",
      margin: "0 auto",
      borderRadius: "12px",
      scrollBehavior: "smooth" as const,
    },
    category: {
      marginBottom: "40px",
    },
    heading: {
      fontSize: "1.8rem",
      color: "#0077b6",
      borderBottom: "2px solid #00b4d8",
      paddingBottom: "10px",
      marginBottom: "20px",
    },
    item: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "16px",
    },
    name: {
      fontWeight: "bold" as const,
      fontSize: "1rem",
      marginRight: "20px",
    },
    description: {
      fontSize: "0.95rem",
      fontStyle: "italic",
      color: "#444",
      flex: 1,
    },
    price: {
      fontWeight: "bold" as const,
      marginLeft: "20px",
      whiteSpace: "nowrap" as const,
    },
  };

  const renderItem = (name: string, description: string, price: string) => (
    <div style={styles.item}>
      <div>
        <div style={styles.name}>{name}</div>
        <div style={styles.description}>{description}</div>
      </div>
      <div style={styles.price}>{price}</div>
    </div>
  );

  const categories = [
    "Salads",
    "Hot Appetizers",
    "Cold Appetizers",
    "Seafood",
    "Meats",
    "Cheese",
    "Pasta",
    "Traditional Dishes",
    "Drinks",
  ];

  return (
    <>
      <nav style={styles.nav}>
        {categories.map((cat) => (
          <a key={cat} href={`#${cat.replace(/\s+/g, "-")}`} style={styles.navLink}>
            {cat}
          </a>
        ))}
      </nav>
      <section style={styles.section}>
        <div style={styles.category} id="Salads">
          <h2 style={styles.heading}>Salads</h2>
          {renderItem("Greek Salad", "tomato, cucumber, onion, feta cheese, olives, pepper, fresh herbs, olive oil", "8.50€")}
        {renderItem("Boiled Greens", "with olive oil and lemon juice", "5.00€")}
        {renderItem("Politiki Salad", "cabbage, carrot, celery, peppers, olive oil, vinegar", "5.00€")}
        {renderItem("Tomato & Cucumber", "tomato, cucumber, onion, fresh herbs, olive oil", "5.00€")}
        {renderItem("Lettuce Salad", "lettuce, fresh dill, green onion and lemon", "5.00€")}
        {renderItem("Beet Salad", "steamed beets with olive oil, vinegar, garlic sauce", "5.50€")}
        {renderItem("Green Mediterranean", "lettuce, rocket, tomato, cucumber, shredded kefalotyri, olive oil, balsamic vinegar", "8.50€")}
        {renderItem("Shrimp Salad", "green salad with tomato, grilled shrimps, olive oil and balsamic cream", "9.00€")}
        </div>
        <div style={styles.category} id="Hot-Appetizers">
          <h2 style={styles.heading}>Hot Appetizers</h2>
          {renderItem("Grilled Eggplant", "with feta, olive oil, vinegar, parsley, oregano", "7.00€")}
        {renderItem("French Fries", "hand-cut and crispy", "5.00€")}
        {renderItem("Grilled Mushrooms", "with olive oil, lemon juice, balsamic cream", "6.00€")}
        {renderItem("Grilled Vegetables", "zucchini, pepper, tomato, onion, mushroom, eggplant, olive oil, balsamic", "9.50€")}
        {renderItem("Cheese Croquettes", "handmade with a mix of cheeses", "6.00€")}
        {renderItem("Fried Zucchini", "served with handmade garlic sauce", "5.50€")}
        {renderItem("Eggplant Rolls", "with feta cheese and herbs", "8.50€")}
        </div>
        <div style={styles.category} id="Cold-Appetizers">
          <h2 style={styles.heading}>Cold Appetizers</h2>
           {renderItem("Tzatziki", "Greek yogurt, cucumber, dill, garlic", "5.00€")}
        {renderItem("Salt-Cured Mackerel", "traditional meze", "6.00€")}
        {renderItem("Marinated Anchovies", "fresh and zesty", "6.00€")}
        {renderItem("Tyrosalata", "feta cheese, hot pepper, olive oil", "5.00€")}
        {renderItem("Dolmadakia", "grape leaves stuffed with rice and herbs", "6.00€")}
        {renderItem("Stuffed Zucchini Blossoms", "with rice, served with tzatziki", "7.00€")}
        {renderItem("Sunshine Platter", "variety of Greek meze, ideal with ouzo or wine", "12.00€")}
        {renderItem("White Tarama", "premium fish roe spread", "5.50€")}
        </div>
        <div style={styles.category} id="Seafood">
          <h2 style={styles.heading}>Seafood</h2>
         {renderItem("Grilled Shrimps", "with olive oil and lemon or fried", "15.00€")}
        {renderItem("Fried Calamari", "served with yogurt and lime dip", "9.50€")}
        {renderItem("Stuffed Calamari", "with feta, tomato, parsley", "16.50€")}
        {renderItem("Grilled Octopus", "with olive oil, lemon juice, parsley", "15.00€")}
        {renderItem("Mussel Pilaf", "mussels with rice, lemon and herbs", "9.50€")}
        {renderItem("Mussels Saganaki", "with tomato, feta, mustard", "9.50€")}
        {renderItem("Steamed Mussels", "with wine, lemon, herbs", "9.50€")}
        {renderItem("Fried Mussels", "crispy and delicious", "9.50€")}
        {renderItem("Mixed Fish & Seafood", "fried mix with fries", "13.00€")}
        {renderItem("Shrimps Saganaki", "with tomato, feta, herbs", "16.00€")}
        {renderItem("Octopus Stir-Fry", "octopus, onion, pepper, vinegar, sage", "16.00€")}
        {renderItem("Grilled Calamari", "with olive oil, lemon, parsley", "15.00€")}
        {renderItem("Fried Red Mullet", "tender and golden", "—")}
        {renderItem("Calamari in Spicy Sauce", "sautéed in tomato, pepper and feta", "14.00€")}
        </div>
        <div style={styles.category} id="Meats">
          <h2 style={styles.heading}>Meats</h2>
          {renderItem("Pork Pancetta", "grilled and juicy", "9.00€")}
        {renderItem("Pork Souvlaki", "classic Greek skewer", "9.00€")}
        {renderItem("Chicken Schnitzel", "breaded and fried", "9.00€")}
        {renderItem("Greek Bifteki", "grilled beef patty", "12.00€")}
        {renderItem("Chicken Souvlaki", "skewered grilled chicken", "9.00€")}
        {renderItem("Grilled Chicken Fillet", "tender and well seasoned", "10.00€")}
        {renderItem("Pork Steak", "hearty and flavorful", "10.00€")}
        </div>
        <div style={styles.category} id="Cheese">
          <h2 style={styles.heading}>Cheese</h2>
          {renderItem("Feta", "classic Greek cheese", "5.00€")}
        {renderItem("Grilled Manouri", "soft and rich", "5.00€")}
        {renderItem("Grilled Cheese Platter", "variety of grilled cheeses", "9.00€")}
        {renderItem("Kefalotyri on Grill", "with spicy tomato marmalade", "6.00€")}
        {renderItem("Haloumi on Grill", "with spicy tomato marmalade", "6.50€")}
        {renderItem("Bouyourdi", "feta with hot pepper and tomato, baked", "6.50€")}
        {renderItem("Meat Platter", "mix grill platter", "12.50€")}
        </div>
        <div style={styles.category} id="Pasta">
          <h2 style={styles.heading}>Pasta</h2>
          {renderItem("Spaghetti with Shrimps", "fresh shrimps, tomato sauce, herbs", "16.00€")}
        {renderItem("Seafood Giouvetsi", "orzo, octopus, calamari, mussels, shrimps, tomato, feta", "16.50€")}
        {renderItem("Spaghetti Bolognese", "with tomato sauce, minced beef, kefalotyri", "10.00€")}
        </div>
        <div style={styles.category} id="Traditional-Dishes">
          <h2 style={styles.heading}>Traditional Dishes</h2>
          {renderItem("Moussaka", "minced beef, potato, zucchini, eggplant, béchamel", "10.00€")}
        {renderItem("Pastitsio", "minced beef, pasta, béchamel", "10.00€")}
        {renderItem("Gemista", "stuffed peppers and tomatoes with rice, herbs", "8.00€")}
        {renderItem("Baked Giant Beans", "with tomato, onion, herbs", "7.00€")}
        {renderItem("Pappoutsaki", "eggplant with beef and béchamel", "9.00€")}
        </div>
        <div style={styles.category} id="Drinks">
          <h2 style={styles.heading}>Drinks</h2>
          {renderItem("Amstel 500ml", "", "5.00€")}
        {renderItem("Heineken 500ml", "", "4.50€")}
        {renderItem("Mythos 500ml", "", "4.50€")}
        {renderItem("Kaizer 500ml", "", "4.50€")}
        {renderItem("Alfa 500ml", "", "4.50€")}
        {renderItem("Fix Hellas 500ml", "", "5.00€")}
        {renderItem("Fischer 500ml", "", "5.00€")}
        {renderItem("Mamos 500ml", "", "4.50€")}
        {renderItem("Nymfi Draft 500ml", "", "5.00€")}
        {renderItem("Nymfi Draft 250ml", "", "3.00€")}
        {renderItem("Malamatina Retsina 500ml", "", "4.50€")}
        {renderItem("Georgiadi Retsina 500ml", "", "5.00€")}
        {renderItem("Vasiliki Retsina 500ml", "", "4.50€")}
        {renderItem("Kechribari Retsina 500ml", "", "6.00€")}
        {renderItem("Ouzo Plomari 200ml", "", "8.00€")}
        {renderItem("Ouzo Mageia 200ml", "", "7.50€")}
        {renderItem("Ouzo Mini 200ml", "", "8.00€")}
        {renderItem("Ouzo Varvagianni 200ml", "", "8.00€")}
        {renderItem("Tsipouro Tsilili 200ml", "", "8.00€")}
        {renderItem("Tsipouro Idoniko 200ml", "", "8.50€")}
        {renderItem("Tsipouro Babatzim 200ml", "", "8.00€")}
        {renderItem("House Wine 500ml (White)", "", "5.00€")}
        {renderItem("House Wine 500ml (Dry Red)", "", "5.00€")}
        {renderItem("House Wine 500ml (Semi-sweet Red)", "", "5.00€")}
        {renderItem("Coca Cola", "", "2.50€")}
        {renderItem("Orangeade", "", "2.50€")}
        {renderItem("Lemonade", "", "2.50€")}
        {renderItem("Sprite", "", "2.50€")}
        {renderItem("Fruit Juices", "various flavors", "3.00€")}
        {renderItem("Fresh Orange Juice", "", "4.50€")}
        {renderItem("Sparkling Water", "", "2.50€")}
        {renderItem("Water 1L", "", "2.00€")}
        {renderItem("House Tsipouro 200ml", "", "7.50€")}
        {renderItem("Vergina Beer 500ml", "", "4.50€")}
        </div>
      </section>
    </>
  );
};

export default MenuSection;
