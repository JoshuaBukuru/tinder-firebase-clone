import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons-repeat">
        <ReplayIcon fontSize="" />
      </IconButton>
      <IconButton className="swipeButtons-close">
        <CloseIcon fontSize="" />
      </IconButton>
      <IconButton className="swipeButtons-star">
        <StarRateIcon fontSize="" />
      </IconButton>
      <IconButton className="swipeButtons-favorite">
        <FavoriteIcon fontSize="" />
      </IconButton>
      <IconButton className="swipeButtons-flash">
        <FlashOnIcon fontSize="" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
