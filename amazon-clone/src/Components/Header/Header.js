import React from "react";
import amazoneimg from "../../assets/amazon.png";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import classes from "./header.module.css";
import LowerHeader from "./LowerHeader";
const Header = () => {
  return (
    <>
      <section>
        {/* logo section */}
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <img src={amazoneimg} alt="amazon-logo" />
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            <BsSearch size={25} />
          </div>
          {/* other section */}
          <div className={classes.order_container}>
            <a className={classes.language}>
              <img
                src="https://media.flaticon.com/dist/min/img/flags/en.svg"
                alt=""
              />

              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>

            <a href="">
              <div>
                <p>SignIn</p>
                <span>Account & Lists</span>
              </div>
            </a>
            <a href="">
              <p>returns</p>
              <span>& orders</span>
            </a>

            <a className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
