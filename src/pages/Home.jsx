import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";

const Home = () => {
  const navigate = useNavigate();
  const click = () => {
    navigate("/registration");
  };
  return (
    <>
      <div className="block  bg-[#FFFFFF]">
        <div className="border-[1px] mx-auto rounded-[65.28px] py-[16.97px] px-[20.89px] w-[1392px] h-[111px] left-[24px] mt-[24px]">
          <div className="flex  justify-between items-center">
            <div className="">
              <svg
                width="129"
                height="49"
                viewBox="0 0 129 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.2621 18.7612C44.6781 17.5407 46.224 16.5724 49.5571 16.2333V21.9571L47.4347 22.2961C44.3511 22.8436 43.4284 23.3001 43.4284 26.0816V38.4385H37.0051V16.4438H43.2626V18.7612H43.2621ZM65.2149 30.1554C65.1663 31.3377 65.1242 32.4281 63.7512 33.2663C62.7914 33.8163 61.9143 33.8163 61.5417 33.8163C60.2478 33.8163 59.3712 33.2262 58.996 32.7229C58.4971 32.0448 58.4971 31.0815 58.4971 30.1177V16.4905H52.0373V30.2774C52.0373 33.8555 52.2452 35.1573 53.3672 36.7595C54.8695 38.8615 57.4958 39.0714 58.9133 39.0714C60.335 39.0714 61.7475 38.7278 63.0419 38.0654C64.2075 37.4752 64.5832 37.0538 65.2144 36.3386V38.439H71.6356V16.4905H65.2144V30.1554H65.2149ZM21.113 33.0569C23.574 33.0106 26.7839 32.9293 26.7839 29.5271C26.7839 25.9474 23.8625 25.9073 22.3633 25.8651H15.9882V33.0569H21.113ZM32.6251 25.6989C33.667 26.8309 34.2526 28.4657 34.2526 30.1569C34.2526 32.4687 33.0429 35.7032 29.3721 37.3431C27.1621 38.313 24.7817 38.438 21.404 38.438H8.98037V20.4443L21.5303 20.4783C23.1978 20.4392 25.9093 20.3579 25.9093 17.2855C25.9093 14.4252 23.4498 14.3007 22.0307 14.3007L12.4787 14.2747L7 8.75024H20.3652C23.4498 8.75024 26.2454 8.8758 28.0402 9.46648C31.6648 10.6407 33.1255 13.5463 33.1255 16.3634C33.1255 17.9565 32.7067 18.929 32.5835 19.2162C31.2491 22.2463 28.4104 22.8355 26.8305 23.1709C28.6233 23.4658 30.9966 23.8486 32.6251 25.6989ZM82.0333 16.5297H75.5736V38.4395H81.9948V26.5859C81.9948 23.8485 81.9948 21.1148 85.374 21.1148C86.6238 21.1148 87.7483 21.6251 88.2492 22.7948C88.4971 23.387 88.5407 24.0986 88.5407 26.0832V38.4401H94.9194V23.4282C94.9194 20.0229 94.3379 18.0445 92.0437 16.823C90.9156 16.1967 89.4554 15.9481 88.1646 15.9481C86.6238 15.9481 85.2026 16.3207 84.2043 16.7427C83.0808 17.2861 82.659 17.7918 82.0333 18.4679V16.5297ZM103.81 24.7463C104.016 23.8216 104.227 22.809 105.107 21.8422C105.728 21.1702 106.814 20.4133 108.355 20.4133C109.485 20.4133 110.694 20.8337 111.489 21.6378C112.401 22.6006 112.566 23.8216 112.691 24.7463H103.81ZM113.494 31.0531C113.154 32.2131 111.957 34.2459 108.454 34.2459C104.992 34.2459 103.729 31.5156 103.77 28.7808H119.326C119.237 26.3002 119.075 22.0104 116.232 18.9402C113.447 15.9105 109.689 15.7926 108.393 15.7926C99.809 15.7926 97.2222 22.6001 97.2222 27.8974C97.2222 35.0897 101.764 39.2493 108.227 39.2493C111.735 39.2493 114.563 37.9038 116.446 36.1445C117.569 35.0897 118.781 33.3258 119.036 31.0525H113.494V31.0531ZM128 8.75431H121.577V38.439H128V8.75431Z"
                  fill="#333333"
                />
              </svg>
            </div>
            <div className="flex items-center justify-cente gap-[15px]">
              <button onClick={click}>
                <div className="w-[189.56px] h-[77.22px] rounded-[107.06px] border-[1.31px]  border-[#EAEAEA] hover:bg-[#EAEAEA] py-[26.11px] px-[38px] ">
                  <p className=" font-manrope font-[500] text-center flex text-[18px] leading-[24.59px]">
                    Get Projects
                  </p>
                </div>
              </button>
              <div className="w-[223.39px] h-[77.22px] rounded-[107.06px] border-[1.31px] text-white bg-[#1C1C1C] hover:bg-[#454444] border-black py-[26.11px] px-[39.61px] ">
                <button>
                  <p className=" font-manrope font-[600] text-[18px] leading-[24.59px]">
                    Onboard Talent
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  justify-center items-center">
          <div className="gap-[16px]  mt-[65px]  w-[588px] h-[178px]">
            <p className=" h-[28px] text-center text-[36px]  font-covered text-[#2DA950] leading-[39.6px] tracking-[-2%] font-[400]">
              Success stories
            </p>
            <p className="text-[56px] font-[600] font-manrope  h-[134px] text-center leading-[67.2px] tracking-[-2%] ">
              Start your success Journey here!
            </p>
          </div>
        </div>
        <div className=" flex flex-row w-[780.49px] h-[613.29px]">
          <div className="w-full flex">
            <div className="relative w-1/2 mt-[25px]">
              <img
                className="absolute w-[596.98px] h-[470.27px]  rounded-[50.7px] left-[206.69px] "
                src="https://i.ibb.co/5G39bPL/image32618.png"
                alt="image32618"
              />
              <img
                className="absolute w-[267px] h-[239px] left-[30px] mt-[60px] gap-[10px]"
                src="https://i.ibb.co/GPZNTKd/Frame-1261155509.png"
                alt="Frame-1261155509"
              />
              <img
                className=" absolute mt-[316px] w-[290px] h-[239px] left-[415px]  rounded-[28.36px]    "
                src="https://i.ibb.co/9TTPs3Y/Frame-1261155512.png"
                alt="Frame-1261155512"
              />
              <img
                className=" absolute mt-[336px] w-[245px] h-[120px] rounded-[111.54px] left-[104.49px]"
                src="https://i.ibb.co/NTVtmFx/Frame-1261155429.png"
                alt="Frame-1261155429"
              />
            </div>
            <div className="relative w-1/2 bg-[url-('https://i.ibb.co/qW6W7Yn/Group-1171281397.png')] mt-[100px] ">
              <p className="absolute w-[398px] text-[#1C1C1C] font-manrope ml-[450px] font-[600] text-[40px] leading-[48px] tracking-[-2%]">
                Enhance fortune 50 companys insights teams research capabilities
              </p>
              <div className="absolute mt-[250px] flex flex-row mb-[30px] gap-[5px] ml-[450px]">
                <span className="w-[10.75px] h-[10.75px] rounded-full bg-[#2DA950]"></span>
                <span className="w-[10.75px] h-[10.75px] rounded-full bg-[#E4E3E3]"></span>
                <span className="w-[10.75px] h-[10.75px] rounded-full bg-[#E4E3E3]"></span>
              </div>
              <button className="absolute mt-[320px] flex rounded-[100px] gap-[16px] text-[#FFFFFF] justify-center font-manrope font-[600] text-[20px] leading-[27.32px] items-center ml-[450px] w-[245px] h-[88px] bg-black">
                Explore more{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1716 10.9999L4 10.9999L4 12.9999L16.1716 12.9999L10.8076 18.3638L12.2218 19.778L20 11.9999L12.2218 4.22168L10.8076 5.63589L16.1716 10.9999Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div></div>
        </div>
        <div className="">
          <Footer />
        </div>
        <div className="mx-auto mt-[30px] bg-[#F5F5F5] mb-[30px] rounded-[40px]  p-[60px] w-[1376px] h-[144px]">
          <div className="flex justify-between items-center">
            <div>
              <p className=" font-manrope font-[500] text-[18px] leading-[19.8px]">
                &copy;Talup 2023. All rights reserved
              </p>
            </div>
            <div className="flex gap-[25px] underline">
              <div>
                <p className=" cursor-pointer font-manrope font-[400] text-[#1C1C1C] text-[18px] leading-[19.8px]">
                  Terms & Conditions
                </p>
              </div>
              <div>
                <p className="cursor-pointer font-manrope font-[400] text-[#1C1C1C] text-[18px] leading-[19.8px]">
                  Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
