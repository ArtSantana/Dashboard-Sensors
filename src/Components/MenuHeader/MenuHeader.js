import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import './MenuHeader.css';

export default function MenuHeader() {
  const [anchorEl, setAnchorEl] = useState();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <div style={{cursor: "pointer"}}><MenuIcon style={{color: "white", margin:'5px'}} fontSize="large" onClick={handleClick} /></div>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/" style={{color: "black"}}>
            <HomeIcon style={{marginRight: "5px"}}/> Home
          </Link>
          </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/config" style={{color: "black"}}>
            <SettingsIcon style={{marginRight: "5px"}}/> Config
          </Link>
        </MenuItem>
      </Menu>
    </>
  )
}