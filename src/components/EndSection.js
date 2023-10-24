import Image from "next/image";
const EndSection = () => {
  return (
    <section className="endSection">
      <div className="relative">
        <div className="w-[1400px] h-[1400px] rounded-full bg-[#b1e4ff] flexCenter flex-col absolute top-[-1300px] translate-x-[-100px]"></div>
        <div className="w-[1400px] h-[1400px] rounded-full bg-[#fad4e3] z-0 flexCenter flex-col absolute top-[-1300px] translate-x-[200px]"></div>
        <div className="w-[1400px] h-[1400px] rounded-full bg-[#faaf35] z-5 flex flex-col justify-end items-center  absolute top-[-1300px] translate-x-[50px]">
          <div className="translate-y-[200px]">
            <h1 className="fontLilita text-[56px] text-[#FFF7EB] text-center">
              Get your lifestyle!
            </h1>
            <div className="flex items-center justify-between w-[600px] gap-x-[20px]">
              <div className="flex flex-col items-center justify-center">
                <h4 className="fontLeague text-[24px] font-bold text-[#4d4946]">
                  Apple Juice
                </h4>
                <p className="fontLeague text-[24px] text-[#4d4946]">
                  on Tuesday
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4 className="fontLeague text-[24px] font-bold text-[#4d4946]">
                  Orange Juice
                </h4>
                <p className="fontLeague text-[24px] text-[#4d4946]">
                  on Monday
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4 className="fontLeague text-[24px] font-bold text-[#4d4946]">
                  Peach Juice
                </h4>
                <p className="fontLeague text-[24px] text-[#4d4946]">
                  on Wednesday
                </p>
              </div>
            </div>
          </div>
          <div className=" translate-y-[300px] w-[500px] h-[400px] flexBetween">
            <div>
              <Image
                src={"/images/EndSection/apple.svg"}
                width={100}
                height={100}
                alt="image"
              />
            </div>
            <div>
              <Image
                src={"/images/EndSection/orange.svg"}
                width={100}
                height={100}
                alt="image"
              />
            </div>
            <div>
              <Image
                src={"/images/EndSection/peach.svg"}
                width={100}
                height={100}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndSection;
