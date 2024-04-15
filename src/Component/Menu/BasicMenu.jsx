import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
      
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{color:"rgb(202, 195, 182)"}}
      >
     <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
     <div>POEPLE</div>
      <ArrowDropDownIcon/>
     </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link
          to="/ÖMER"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "14px",
          }}
        >
        <MenuItem onClick={handleClose}>ÖMER CAN AKSOY</MenuItem>
        </Link>

        <Link
          to="/GİZEM"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "14px",
          }}
        >
        <MenuItem onClick={handleClose}>GİZEM KAHRAMAN  <br/> AKSOY</MenuItem>
        </Link>
        
        <Link
          to="/BURHAN"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "14px",
          }}
        >
        <MenuItem onClick={handleClose}>BURHAN ŞOHOĞLU</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
