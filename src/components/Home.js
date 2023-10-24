"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Home = ({ setSectionActive }) => {
  return (
    <section className="overflow-y-hidden home">
      <div className="flexBetween">
        <div className="w-[50%]">
          <Image
            src={"/images/HomeSection/orange-juice_fruit.svg"}
            alt="stack image"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col w-[50%]">
          <h1 className="text-[64px] font-extrabold text-[#f9a61f] fontLilita">
            LAILAOLAB Brand
          </h1>
          <p className="fontLeague max-w-[90%] text-[24px] text-[#4d4946]">{`"Our fresh fruit juice is made with only the finest ingredients and is packed with vitamins and minerals. it's the perfect way to start your day our to refuel after a workout."`}</p>
          <div className="w-[80%] mt-10 flexAround text-[24px] text-[#4d4946]">
            <p className="cursor-pointer">Orange Juice</p>
            <p className="cursor-pointer">Apple Juice</p>
            <p className="cursor-pointer">Peach Juice</p>
          </div>
        </div>
      </div>

      <div
        className="cursor-pointer circle"
        onClick={() => {
          setSectionActive("orange");
        }}
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: -20 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: "reverse",
          }}
          className="mt-8 font-bold text-white "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[50px] h-[50px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
            />
          </svg>
        </motion.div>
        <h3 className="fontLilita text-[56px] text-[#FFF7EB]">{`Let's Try`}</h3>
      </div>
    </section>
  );
};

export default Home;
