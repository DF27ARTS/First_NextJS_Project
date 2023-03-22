import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image
            src={"/images/logo_black.png"}
            width={50}
            height={50}
            alt="logo"
          />
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/about-us">About us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <h1>Ut enim ad minima exercitationem</h1>
      </div>
    </header>
  );
};

export default Header;
