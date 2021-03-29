import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

//https://png2.cleanpng.com/sh/3600beca81466956b8dd401fe44cdcf4/L0KzQYm3VsE4N6VnkpH0aYP2gLBuTgNwa5pmhJ92ZXTscX7zjBdwNaVuhtZucj3mf773lgRmel5ue9H3cz33ebBrhgIuPZM3TqMCY0bpQoeAWMQvOmo5T6M9Mkm0RYOCUsI0OWI1Uas7OT7zfri=/kisspng-social-media-logo-tinder-computer-icons-tinder-5b2617c6f26784.2947142915292231109929.png
//https://png2.cleanpng.com/sh/6c7f29a2e672b4138072f8f801c8bb74/L0KzQYm3VsE4N6dwkpH0aYP2gLBuTgRqdpVqip91b3fyPbT2jgB2fJZ3Rdtsb372PcXwjvRmel46eqQBMUflc4S5g8g1Ol8ASKg8M0m8RYK8UskzOmQ2SKI7MEixgLBu/kisspng-tinder-logo-computer-icons-tinder-5b2617bc32c842.906339951529223100208.png
const Header = ({ backButton }) => {
  const history = useHistory();

  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon className="headerIcon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="headerIcon" />
        </IconButton>
      )}

      <Link to="/">
        <img
          src="https://png2.cleanpng.com/sh/3600beca81466956b8dd401fe44cdcf4/L0KzQYm3VsE4N6VnkpH0aYP2gLBuTgNwa5pmhJ92ZXTscX7zjBdwNaVuhtZucj3mf773lgRmel5ue9H3cz33ebBrhgIuPZM3TqMCY0bpQoeAWMQvOmo5T6M9Mkm0RYOCUsI0OWI1Uas7OT7zfri=/kisspng-social-media-logo-tinder-computer-icons-tinder-5b2617c6f26784.2947142915292231109929.png"
          alt="tinder"
          className="tinder-image"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon fontSize="large" className="headerIcon" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
