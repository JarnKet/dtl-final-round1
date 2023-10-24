"use client";

import Link from "next/link";
import Image from "next/image";

const MenuBar = ({ setSectionActive }) => {
  return (
    <header className=" header">
      <div className="relative w-full flexCenter">
        <div
          className="absolute cursor-pointer left-5"
          onClick={() => {
            setSectionActive("home");
          }}
        >
          <div className="w-[70px] h-[70px] relative">
            <Image
              src={"/images/MenuBar/Logo_DTL3.png"}
              alt="logo"
              fill
              sizes="100%"
            />
          </div>
        </div>

        <nav className="gap-x-[40px] w-[400px] flexBetween  fontLeague">
          {navLink.map((item, index) => (
            <div
              key={index}
              className={`text-[20px] ${
                item.name === "Home"
                  ? "text-[#F9A61F] font-bold"
                  : "text-[#4d4946]"
              }`}
            >
              <Link href={item.link}>{item.name}</Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default MenuBar;

const navLink = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Service",
    link: "/",
  },
  {
    name: "About us",
    link: "/",
  },
];
