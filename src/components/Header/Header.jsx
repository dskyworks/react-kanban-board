import { useState } from "react";
import "./Header.css";
import avatar from "../../assets/images/user-avatar.svg";

const Header = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const handleDropDownOpen = (e) => {
    setDropDownOpen(!dropDownOpen);
  };

  const headerDropDownMenu = (
    <ul
      className="profile__list"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <li className="profile__item">Profile</li>
      <li className="profile__item">Logout</li>
    </ul>
  );

  return (
    <header className="header">
      <h1 className="header__title">Awesome Kanban Board</h1>
      <div className="header__profile" onClick={handleDropDownOpen}>
        <img
          className="header__avatar"
          draggable="false"
          src={avatar}
          alt="User avatar"
        />
        <button
          className={
            dropDownOpen
              ? "header__button header__button--active"
              : "header__button"
          }
          type="button"
        ></button>
        {dropDownOpen && headerDropDownMenu}
      </div>
    </header>
  );
};

export default Header;
