import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex">
              {index === 1 && (
                <div className="mr-[1vw] rounded-md w-[8vw] h-[5.7vw] relative -top-[1.2vw]"></div>
              )}
              <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[8vw] leading-[5.75vw] font-medium">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {["For Public and Private companies", "From the first pitch to IPO"].map(
          (item, index) => (
            <p
              key={index}
              className="text-md font-light tracking-tight leading-none"
            >
              {item}
            </p>
          )
        )}

        <div className="start flex items-center gap-2">
          <div className="px-5 py-2 border-2 border-zinc-500 rounded-full font-light text-md uppercase">
            Start the Project
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-zinc-500 rotate-45">
            <FaArrowUpLong />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
