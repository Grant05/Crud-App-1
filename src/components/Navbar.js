import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const Navbar = () => (
  <div>
    <FlatButton label="Codesmith" />
    <FlatButton label="Home" secondary={true} />
    <br />
  </div>
)

export default Navbar
