import React from "react";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Standard Room",
      price: "ETB 1,500/night",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "Comfortable and affordable accommodation with all essential amenities.",
    },
    {
      id: 2,
      name: "Deluxe Room",
      price: "ETB 2,500/night",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Spacious room with premium amenities and beautiful views.",
    },
    {
      id: 3,
      name: "Executive Suite",
      price: "ETB 4,000/night",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "Luxurious suite with separate living area and premium services.",
    },
  ];

  return (
    <section id="rooms" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Our Rooms</h2>
          <p>Comfort and luxury for every traveler</p>
        </div>
        <div className="rooms-grid">
          {rooms.map((room) => (
            <div key={room.id} className="room-card">
              <img src={room.image} alt={room.name} className="room-image" />
              <div className="room-info">
                <h3>{room.name}</h3>
                <p className="room-price">{room.price}</p>
                <p>{room.description}</p>
                <a href="#contact" className="btn">
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
