import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline, IoHomeOutline } from "react-icons/io5";
import { MdContactPage, MdGroups2 } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css";

function Navbar() {
  const [sidemenu, setSideMenu] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between p-1 bg-black">
        <div className="text-white">
          <p className="p-3 text-2xl capitalize">Certification</p>
        </div>
        <div className="md:hidden text-2xl text-white">
          <HiOutlineBars3BottomRight onClick={() => setSideMenu(true)} />
        </div>

        {/* offcanvas navbar (sidebar) section  */}
        <div
          className={clsx(
            "fixed h-full w-full md:hidden backdrop-blur-sm top-0 right-0 -translate-x-full duration-1000",
            sidemenu && "translate-x-0"
          )}
        >
          <div className="text-black bg-white flex flex-col absolute w-56 h-screen left-0 top-0 p-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="capitalize text-xl">Certification</p>
              </div>
              <div>
                <IoCloseOutline
                  onClick={() => setSideMenu(false)}
                  className="text-4xl items-center mt-0.5 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 ">
              <div className="flex justify-center items-center hover:text-pink-600">
                <IoHomeOutline />
                <p
                  className="ml-1 capitalize"
                  onClick={() => setSideMenu(false)}
                >
                  <Link to="/">Home</Link>
                </p>
              </div>
              <div className="flex justify-center items-center hover:text-pink-600">
                <IoInformationCircleOutline className="text-xl" />
                <p
                  className="ml-1 capitalize"
                  onClick={() => setSideMenu(false)}
                >
                  <Link to="/Table">Details</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nav items section */}
        <div className="hidden md:flex justify-evenly w-3/4  lg:w-2/4 ">
          <Link to="/">
            <div className="flex justify-center items-center hover:text-pink-600 text-white">
              <IoHomeOutline />
              <p className="ml-1 capitalize">Home</p>
            </div>
          </Link>
          <Link to="/Table">
            <div className="flex justify-center items-center hover:text-pink-600 text-white">
              <IoInformationCircleOutline className="text-xl" />
              <p className="ml-1 capitalize">Details</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Navbar;
