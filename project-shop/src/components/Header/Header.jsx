import React from "react";
import logo from "../../assets/images/logo.webp";
import ico_user from "../../assets/images/ico_user.png";
import ico_search from "../../assets/images/ico_search.png";
import ico_bag from "../../assets/images/ico_bag.png";
import ico_heart from "../../assets/images/ico_heart.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const listMenu = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Product",
      to: "product",
    },
    {
      title: "Blog",
      to: "blog",
    },
    {
      title: "Cart",
      to: "cart",
    },
    {
      title: "Profile",
      to: "profile",
    },
  ];
  const data = useSelector((state) => state.carts.cartItems.length);

  return (
    <header className="py-5 lg:py-8 sticky top-0 bg-white shadow-lg z-10">
      <div className="container flex items-center">
        <h1 className="mr-5">
          <a className="block w-130" href="#">
            <img className="image" src={logo} alt="Darion" />
          </a>
        </h1>

        <div className="w-[500px] ml-[42.475px] relative lg:mr-20 hidden xl:block">
          <input
            className="search-input h-10 border border-black w-[500px] rounded-full pl-10 pr-4 focus:border-blue-500 focus:border-[2.5px] focus:outline-none"
            type="text"
            placeholder="Search..."
          />
          <div className="size-5 absolute left-3 top-1/2 -translate-y-1/2">
            <img className="image" src={ico_search} alt="Icon Search" />
          </div>
        </div>

        <nav className="hidden mr-28 lg:block ml-auto">
          <ul className="flex items-center gap-10">
            {listMenu.map((item) => (
              <NavLink key={item.to} to={item.to}>
                <li className="relative after:absolute after:w-full after:scale-x-0 after:duration-300 hover:after:scale-100 after:transition-all after:h-[1.5px] after:bg-black after:left-0 after:-bottom-[2px]">
                  {item.title}
                </li>
              </NavLink>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center lg:ml-0 gap-6 ml-auto">
          <li>
            <Link
              to="/login"
              className="block size-5 relative"
              href="login.html"
            >
              <img src={ico_user} alt="User Icon" />
            </Link>
          </li>
          <li>
            <a className="block size-5 relative" href="#">
              <img src={ico_heart} alt="Heart Icon" />
              <span className="absolute size-[18px] bg-black rounded-full text-white text-xs grid place-items-center -top-[8px] -right-[8px]">
                10
              </span>
            </a>
          </li>
          <li>
            <Link to={"/cart"} className="block size-5 relative" href="#">
              <img src={ico_bag} alt="Bag Icon" />
              <span className="absolute size-[18px] bg-black rounded-full text-white text-xs grid place-items-center -top-[8px] -right-[8px]">
                {data}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
