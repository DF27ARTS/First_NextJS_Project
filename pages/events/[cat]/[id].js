import SingleEvent from "@/src/components/events/sigle-event";
import React from "react";

const EventPage = ({ data }) => <SingleEvent data={data} />;

export default EventPage;

export const getStaticPaths = async () => {
  const { allEvents } = await import("/data/data.json");
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city.toString(),
        id: path.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { allEvents } = await import("/data/data.json");

  const id = context.params.id;
  const eventData = allEvents.find((ev) => ev.id === id);

  return {
    props: { data: eventData },
  };
};
