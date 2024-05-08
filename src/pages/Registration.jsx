import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import { useState } from "react";
const Registration = () => {
  const [x, setx] = useState("");
  const [name, setname] = useState("");
  const [v, setv] = useState(false);

  const navigate = useNavigate();
  const change = (e) => {
    setx(e.target.value);
  };
  const namechange = (e) => {
    setname(e.target.value);
  };

  const validation = () => {
    const emailRegex = /^[\w\\.-]+@[a-zA-Z\d\\.-]+\.[a-zA-Z]{2,}$/;
    const boole = emailRegex.test(x);
    if (!boole) {
      setv(true);
    } else {
      navigate("/success");
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="absolute left-[426px] gap-[62px]  mt-[141px]  w-[588px] h-[572px]">
        <div className="flex flex-col justify-center items-center gap-[10px]">
          <p className=" h-[28px] text-[36px] font-covered text-[#2DA950] leading-[39px] tracking-[-2%] gap-[10px] font-[400]">
            Registration Form
          </p>

          <p className="text-[56px] font-[600] w-[588px] h-[134px] text-center font-manrope leading-[67.2px] tracking-[-2%] gap-[62px]">
            Start your success Journey here!
          </p>
          <input
            value={name}
            onChange={namechange}
            className=" d-block font-manrope font-[500] leading-[27.32px] text-[20px] mt-10 w-[417px] h-[75px] bg-[#EFEFEF] px-[36px] py-[24px] border-[1px] border-[#00000005]  rounded-[64px] "
            type="text"
            placeholder="Enter your name"
          />
          <input
            value={x}
            onChange={change}
            className=" d-block w-[417px] font-manrope font-[500] leading-[27.32px] text-[20px] h-[75px] bg-[#EFEFEF] px-[36px] py-[24px] border-[1px] border-[#00000005]  rounded-[64px] "
            type="email"
            placeholder="Enter your email"
          />
          <span
            className={`${
              !v ? "hidden" : "flex"
            } flex font-manrope font-[500] text-[16px] text-[#FF0808] justify-center items-center`}
          >
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.50162 13.6666C3.81973 13.6666 0.834961 10.6818 0.834961 6.99992C0.834961 3.31802 3.81973 0.333252 7.50162 0.333252C11.1835 0.333252 14.1683 3.31802 14.1683 6.99992C14.1683 10.6818 11.1835 13.6666 7.50162 13.6666ZM6.83496 8.99992V10.3332H8.16829V8.99992H6.83496ZM6.83496 3.66658V7.66658H8.16829V3.66658H6.83496Z"
                fill="#FF0808"
              />
            </svg>
            Enter a valid email address
          </span>
          <button
            onClick={validation}
            className="d-flex text-[#FFFFFF] w-[417px] h-[75px] px-[36px] py-[24px] border-[1px] border-[#00000005] bg-[#827A7A]  rounded-[64px] gap-[20px]"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
