import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";

import { LoginUsername, LoginPassword, RegisterName } from "@/pages";

import "./styles.scss";
import Primary from "@/assets/media/primary.png";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const GuestLayout = () => {
  const history = useHistory();

  const hideBackButton = () => {
    return window.location.pathname === "/login";
  };

  const navigateBack = () => {
    history.goBack();
  };

  return (
    <div className="guest">
      <div className="navigation">
        {!hideBackButton() && (
          <IconButton onClick={navigateBack}>
            <ArrowBackIcon />
          </IconButton>
        )}
      </div>
      <img className="logo" src={Primary} alt="Logo da Fígaroo!" />
      <div className="content">
        <Route exact path="/login" component={LoginUsername} />
        <Route exact path="/login/senha" component={LoginPassword} />
        <Route exact path="/cadastro/nome" component={RegisterName} />
      </div>
    </div>
  );
};
export default GuestLayout;
