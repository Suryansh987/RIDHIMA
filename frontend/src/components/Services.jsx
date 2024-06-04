import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/birthday.jpg",
      title: "Birthday Planning",
      details:"Rs. 5999 and more"
    },
    {
      id: 2,
      url: "/anniversary.jpg",
      title: "Anniversary Planning",
      details:"Rs. 6999 and more"
    },
    {
      id: 3,
      url: "/camping.jpg",
      title: "Camping Trip Planning",
      details:"Rs. 7999 and more"
    },
    {
      id: 4,
      url: "/gamenight.jpg",
      title: "Game Night Planning",
      details: "Rs. 10999 and more"
    },
    {
      id: 5,
      url: "/party.jpg",
      title: "Party Planning",
      details:"Rs. 20999 and more"
    },
    {
      id: 6,
      url: "/wedding.jpg",
      title: "Wedding Planning",
      details: "Rs. 5L and more"
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3 style={{display:"flex",
                  flexDirection:"column"
                }}>{element.title}
                <h4>{element.details}</h4>
                </h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
