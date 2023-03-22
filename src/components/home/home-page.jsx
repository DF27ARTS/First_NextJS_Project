import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = ({ data }) => {
  return (
    <div className="home_body">
      {data.length &&
        data.map((event) => (
          <Link className="card" key={event.id} href={`events/${event.id}`}>
            <div className="image">
              <Image
                src={event.image}
                alt={event.title}
                width={600}
                height={400}
              />
            </div>
            <div className="content">
              <h2> {event.title}</h2>
              <p> {event.description} </p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default HomePage;
