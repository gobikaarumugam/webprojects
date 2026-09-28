import React from "react";
import "./style.css";

function HobbyCard({ image, name, description }) {
  return (
    <div className="hobby-card">
      <img src={image} alt={name} />

      <div className="card-content">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

function App() {
  const hobbies = [
    {
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      name: "Reading",
      description:
        "Reading books helps me gain knowledge, improve my vocabulary, and relax during my free time."
    },
    {
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
      name: "Listening to Music",
      description:
        "Listening to music helps me feel relaxed, happy, and refreshed after a busy day."
    },
    {
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136",
      name: "Photography",
      description:
        "Photography allows me to capture beautiful moments and express my creativity through pictures."
    },
    {
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
      name: "Cooking",
      description:
        "Cooking is an enjoyable hobby that allows me to try new recipes and create delicious food."
    },
    {
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      name: "Traveling",
      description:
        "Traveling gives me an opportunity to explore new places, meet people, and learn about different cultures."
    },
    {
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
      name: "Playing Sports",
      description:
        "Playing sports keeps me active and healthy while also teaching teamwork and discipline."
    }
  ];

  return (
    <div className="app">

      <h1>My Hobbies</h1>

      <p className="subtitle">
        A few things I enjoy doing in my free time
      </p>

      <div className="hobby-container">
        {hobbies.map((hobby, index) => (
          <HobbyCard
            key={index}
            image={hobby.image}
            name={hobby.name}
            description={hobby.description}
          />
        ))}
      </div>

    </div>
  );
}

export default App;