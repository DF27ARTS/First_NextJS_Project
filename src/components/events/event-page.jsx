import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllEvents = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((event, index) => (
        <Link className="card" key={index} href={`/events/${event.id}`}>
          <Image src={event.image} alt={event.title} width={400} height={400} />
          <h2> {event.title} </h2>
        </Link>
      ))}
    </div>
  );
};

export default AllEvents;
