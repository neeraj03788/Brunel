import { useState } from "react";

const Footer = () => {
  const [x, setx] = useState(false);

  const abc = (
    <svg
      className="mt-2"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="black" />
    </svg>
  );
  const minus = (
    <svg
      width="14"
      height="2"
      viewBox="0 0 14 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0V2H14V0H0Z" fill="black" />
    </svg>
  );

  return (
    <div className="flex justify-center items-center mx-auto">
      <div className=" flex w-[1376px]  h-[749px] rounded-[40px] bg-[#E8EEE7]">
        <div className="w-[656px] mt-[80px] ml-[94.5px] flex flex-col gap-[20px]">
          <p className=" font-covered text-[#9E9D9D] text-[32px] leading-[35.2px] tracking-[-2%]">
            What’s on your mind
          </p>
          <p className=" font-manrope font-[600] text-[60px] leading-[66px] tracking-[-1%] text-[#1C1C1C] ">
            Ask Questions
          </p>
          <img
            className="absolute left-[70px] mt-[210px]"
            src="https://i.ibb.co/Nm63qRM/Union.png"
            alt="Union"
          />
        </div>
        <div className="w-[656px]  mt-[90px] h-[538px]">
          <div className="w-[581px] mt-[20px]  border-b-[1px] border-b-black">
            <div className="flex justify-between">
              <span className="text-[20px] font-manrope font-[600] leading-[28px] mb-4">
                Do you offer freelancers?
              </span>
              <button defaultValue={x}>{abc}</button>
            </div>
          </div>
          <div className="w-[581px]  mt-[10px] border-b-[1px] border-b-black">
            <div className="flex justify-between">
              <span className="text-[20px] font-manrope font-[600] mb-4 leading-[28px]">
                Do you offer freelancers?
              </span>
              <button>
                <svg
                  className="mt-2"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="black" />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-[581px] mt-[20px] mb-4 border-b-[1px] border-b-black">
            <div className="flex justify-between">
              <span className="text-[20px] font-manrope font-[600] leading-[28px] mb-4">
                Do you offer freelancers?
              </span>
              <button>
                <svg
                  className="mt-2"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="black" />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-[581px] mt-[20px]  border-b-[1px] border-b-black">
            <div className="flex justify-between">
              <span className="text-[20px] mb-4 font-manrope font-[600] leading-[28px]">
                Do you offer freelancers?
              </span>
              <button
                defaultValue={x}
                onClick={() => {
                  setx(!x);
                }}
              >
                {x ? abc : minus}
              </button>
            </div>
            <p
              className={`${
                x ? "hidden" : "block"
              } font-manrope font-[400] text-[15px] leading-[24px] mb-4`}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              minus . Perspiciatis, voluptate libero quam, veritatis veniam ex
              fuga eveniet quas deleniti cum voluptatem. Sapiente repellat,
              animi repellendus, accusantium .
            </p>
          </div>
          <div className="w-[581px]  mt-[20px] ">
            <div className="flex justify-between">
              <span className="text-[20px] font-manrope mb-4 font-[600] leading-[28px]">
                Do you offer freelancers?
              </span>
              <button>
                <svg
                  className="mt-2"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="black" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
