import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./styles.css";
import AddImages from "./AddImages";

const EditProduct = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          elevation={0}
          style={{ backgroundColor: "#1e3a8a" }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <h4 className="mt-1">Edit Products</h4>
            </Typography>
            <Link to="/products" className="product_link">
              Products
            </Link>
          </Toolbar>
        </AppBar>
      </Box>

      <div className="container mt-5">
        <form className="form-group">
          <label for="medicine" className="label">
            Medicine Formula:
          </label>
          <input
            className="form-control"
            id="medicine"
            type="text"
            placeholder="Write new medicine formula"
          />
          <br />
          <label for="products" className="label">
            Products Sold:
          </label>
          <input
            className="form-control"
            id="products"
            type="number"
            placeholder="Write new number of products sold"
          />
          <br/><br/>
          <AddImages className='edit_images'/>
          <button className="edit__button">Edit</button>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
