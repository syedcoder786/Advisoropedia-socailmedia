import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { logout } from "../redux/auth/authSlice";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="fixed top-0 w-full z-10">
      <Navbar fluid className="bg-slate-800">
        <Navbar.Brand>
          <img
            src="https://www.flowbite-react.com/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img={
                  user?.profile_img
                    ? user.profile_img
                    : "https://st2.depositphotos.com/1007566/12294/v/450/depositphotos_122947692-stock-illustration-avatar-hacker-man.jpg"
                }
                rounded
              />
            }
            // className="relative z-10"
          >
            <Dropdown.Header>
              <span className="block text-sm">
                {user?.name ? user.name : "Name"}
              </span>
              <span className="block truncate text-sm font-medium">
                {user?.email ? user.email : "email@gmail.com"}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              onClick={() => {
                dispatch(logout());
              }}
            >
              Sign out
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active className="text-white">
            Home
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white">
            About
          </Navbar.Link>
          {/* <Navbar.Link href="#" className="text-white">
            Services
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white">
            Pricing
          </Navbar.Link> */}
          <Navbar.Link href="#" className="text-white">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
