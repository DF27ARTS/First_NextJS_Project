import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-z-A-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      return setMessage("Please introduce a correct email address");
    } else {
      setMessage("");
    }

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const data = await response.json();
      setMessage(data.message);
    } catch (e) {
      console.error("ERROR", e);
      setMessage(e.message);
    }

    inputEmail.current.value = "";
  };

  return (
    <div className="event_single_page">
      <Image src={data.image} width={700} height={500} alt={data.title} />
      <h2> {data.title} </h2>
      <p> {data.description} </p>

      <form onSubmit={onSubmit} className="email_registration">
        <label> Get Registered for this event! </label>
        <input
          ref={inputEmail}
          type="text"
          id="email"
          placeholder="Please insert your email"
        />
        <button type="submit">Submit</button>
      </form>
      {message}
    </div>
  );
};

export default SingleEvent;
