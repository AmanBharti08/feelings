import { FEELINGS } from "../constants/index";

const Feeling = () => {
  return (
    <div className="feeling">
      {FEELINGS.map((feeling, index) => {
        return (
          <div
            key={index}
            id={feeling.feeling.toLowerCase()}
            className="feeling-item mt-28  flex flex-col justify-center"
          >
            <h1 className="viga ml-12 text-5xl lg:text-6xl ">
              {feeling.feeling.toLocaleUpperCase() + " ?"}
            </h1>

            {feeling.examples.map((exp, index) => {
              return (
                <div key={index} className="mt-16">
                  {/* exampletext */}
                  <div className="border border-black border-1 ml-10 lg:ml-48 mr-10 rounded-2xl lg:text-xl md:text-lg sm:text-md h-auto p-6 -mb-16 bg-white flex items-center justify-center z-2 relative">
                    <h2>{exp.text}</h2>
                  </div>
                  {/* container */}
                  <div className="">
                    <div
                      className="  h-auto rounded-3xl pt-20 overflow-hidden py-10 flex flex-col gap-9"
                      style={{ backgroundColor: feeling.color }}
                    >
                      <div className="Philosophical w-[100%] flex justify-between items-center h-auto gap-4 lg:text-xl md:text-lg sm:text-sm">
                        <div className="w-1/2 p-2 md:p-5 text-black font-medium  h-[100%] flex justify-center items-center">
                          {exp.philosophical.text}
                        </div>
                        <div className="w-1/2 ">
                          <div className="quote flex items-center text-right bg-black text-white p-2 md:p-5 rounded-bl-[50px] rounded-tl-[20px]">
                            {exp.philosophical.quote}
                          </div>
                        </div>
                      </div>
                      <div className="Psychological flex justify-between items-center w-[100%] h-auto gap-4 lg:text-xl md:text-lg sm:text-sm">
                        <div className="w-1/2">
                          <div className="p-2 lg:p-5 quote flex items-center bg-black text-white h-auto rounded-br-[50px] rounded-tr-[20px]">
                            {exp.psychological.quote}
                          </div>
                        </div>

                        <div className="w-1/2 h-[100%] font-medium p-2 md:p-5 flex justify-center items-center">
                          {exp.psychological.text}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Feeling;
