import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul className="headerWrapper">
        <li>
          <Link to="/">UserIdOne</Link>
        </li>
        <li>
          <Link to="/user-id-two">UserIdTwo</Link>
        </li>
        <li>
          <a href="/">UserIdOneWithATag</a>
        </li>
        <li>
          <a href="/user-id-two">UserIdTwoWithBTag</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
