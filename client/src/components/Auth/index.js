import React from "react";

import withRoot from "../../withRoot";
import Login from './Login'
import Register from './Register'

const AuthIndex = () => {
  return <Register/>;
};

export default withRoot(AuthIndex)