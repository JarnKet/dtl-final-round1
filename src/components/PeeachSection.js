import Image from "next/image";
import { motion } from "framer-motion";

const PeachSection = ({ setSectionActive }) => {
  return (
    <section className="flex items-center justify-center appleSection">
      <motion.div
        drag
        whileDrag={() => {
          setSectionActive("end");
        }}
        className="w-[1400px] h-[1400px] rounded-full bg-[#f272a1] flexCenter flex-col relative"
      >
        <motion.div className="mt-8 font-bold text-white absolute left-[500px] bottom-[700px] cursor-pointer z-[100]">
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
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
        </motion.div>
        <h1 className="fontLilita text-[64px] text-[#ffffff] mt-10">
          Wednesday Mood
        </h1>
        <p className="text-[24px] fontLeague text-[#ffffff]">for your best</p>
        <h2 className="absolute left-[100px] translate-y-[-120px]  text-[140px] text-[#cc1254] fontLilita  textStorke">
          PEACH
        </h2>
        <h2 className="absolute right-[200px] translate-y-[-120px]  text-[140px] text-[#cc1254] fontLilita  textStorke">
          JUICE
        </h2>
        <div className="relative z-10">
          <Image
            src={"/images/HomeSection/peach-juice.svg"}
            className="rotate-[-15deg] absolute z-0 -left-[100px] bottom-3 "
            width={200}
            height={200}
            alt="orange-juice"
          />
          <Image
            src={"/images/HomeSection/peach-juice.svg"}
            className="rotate-[11deg] z-3"
            width={300}
            height={300}
            alt="orange-juice"
          />
          <Image
            src={"/images/HomeSection/peach-juice.svg"}
            className="rotate-[35deg] absolute z-2 -right-[100px] bottom-3 "
            width={200}
            height={200}
            alt="orange-juice"
          />
        </div>
        <Image
          width={1800}
          height={1800}
          className="absolute z-1 bottom-[200px]"
          src={"/images/PeachSection/peach-fruit.svg"}
          alt="orange"
          sizes="100%"
        />
      </motion.div>
    </section>
  );
};

export default PeachSection;
