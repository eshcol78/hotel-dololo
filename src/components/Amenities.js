import React from "react";

const Amenities = () => {
  const amenities = [
    { id: 1, name: "Free WiFi", icon: "📶" },
    { id: 2, name: "Swimming Pool", icon: "🏊‍♂️" },
    { id: 3, name: "Restaurant", icon: "🍽️" },
    { id: 4, name: "Spa", icon: "💆‍♂️" },
    { id: 5, name: "Fitness Center", icon: "💪" },
    { id: 6, name: "24/7 Front Desk", icon: "🕒" },
  ];

  return (
    <section id="amenities" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Amenities</h2>
          <p>Enjoy our premium facilities and services</p>
        </div>
        <div className="amenities-grid">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="amenity-item">
              <div className="amenity-icon">{amenity.icon}</div>
              <h3>{amenity.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
