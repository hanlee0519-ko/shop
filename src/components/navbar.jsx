import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menuList = ["남성", "Divided", "여성", "신생아 / 유아", "지속가능성"];

  return (
    <div>
      <div className="login-btn">
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
      <div className="nav-section">
        <img width={150} src="/images/logo.png" />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="menu-search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
