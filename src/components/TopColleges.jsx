import { useContext } from "react";
import { AllContext } from "../App";

const TopColleges = () => {
  const { Colleges } = useContext(AllContext);
  const { images, collegeDatas } = Colleges;
  return (
    <section className="hidden lg:flex flex-col gap-2">
      <div className="flex flex-col gap-4">
        <span
          role="button"
          className="flex flex-row flex-nowrap items-center bg-custom-green-color rounded-custom-radius-20px transition-transform duration-300 transform hover:scale-110"
        >
          <p className="w-full px-10 py-4 text-white font-semibold whitespace-nowrap text-center">
            Apply Now
          </p>
          <span className="px-5 py-4 rounded-custom-radius-20px bg-[#00D066]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="33"
              viewBox="0 0 31 33"
              fill="none"
            >
              <path
                d="M21.4506 9.71767C21.3612 9.81064 21.2901 9.92124 21.2417 10.0431C21.1932 10.165 21.1682 10.2957 21.1682 10.4277C21.1682 10.5597 21.1932 10.6904 21.2417 10.8123C21.2901 10.9341 21.3612 11.0447 21.4506 11.1377L25.8422 15.7377H3.36876C3.11555 15.7377 2.87273 15.843 2.69369 16.0306C2.51465 16.2181 2.41406 16.4725 2.41406 16.7377C2.41406 17.0029 2.51465 17.2572 2.69369 17.4448C2.87273 17.6323 3.11555 17.7377 3.36876 17.7377H25.8231L21.4506 22.3077C21.2728 22.495 21.173 22.7485 21.173 23.0127C21.173 23.2769 21.2728 23.5303 21.4506 23.7177C21.6295 23.9039 21.8715 24.0085 22.1237 24.0085C22.3759 24.0085 22.6179 23.9039 22.7967 23.7177L28.8686 17.3577C28.9503 17.2755 29.0153 17.177 29.0598 17.0678C29.1042 16.9587 29.1271 16.8413 29.1271 16.7227C29.1271 16.604 29.1042 16.4866 29.0598 16.3775C29.0153 16.2684 28.9503 16.1698 28.8686 16.0877L22.8063 9.71767C22.7175 9.62394 22.612 9.54955 22.4956 9.49878C22.3793 9.44801 22.2545 9.42188 22.1285 9.42188C22.0024 9.42188 21.8777 9.44801 21.7613 9.49878C21.645 9.54955 21.5394 9.62394 21.4506 9.71767Z"
                fill="#E8E8F8"
              />
            </svg>
          </span>
        </span>
        <span
          role="button"
          className="flex flex-row flex-nowrap items-center bg-[#CCCCCC] rounded-custom-radius-20px transition-transform duration-300 transform hover:scale-110"
        >
          <p className="w-full px-10 py-4 text-custom-green-color font-semibold whitespace-nowrap text-center">
            Download Brochure
          </p>
          <span className="px-5 py-4 rounded-custom-radius-20px bg-[#A5A5A5]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="33"
              viewBox="0 0 31 33"
              fill="none"
            >
              <path
                d="M22.7042 21.7543C22.6112 21.6649 22.5006 21.5938 22.3788 21.5454C22.2569 21.4969 22.1262 21.4719 21.9942 21.4719C21.8622 21.4719 21.7315 21.4969 21.6096 21.5454C21.4878 21.5938 21.3772 21.6649 21.2842 21.7543L16.6842 26.1459L16.6842 3.67247C16.6842 3.41927 16.5788 3.17644 16.3913 2.9974C16.2038 2.81836 15.9494 2.71777 15.6842 2.71777C15.419 2.71777 15.1646 2.81836 14.9771 2.9974C14.7896 3.17644 14.6842 3.41927 14.6842 3.67247L14.6842 26.1268L10.1142 21.7543C9.92684 21.5765 9.67339 21.4767 9.4092 21.4767C9.14501 21.4767 8.89156 21.5765 8.7042 21.7543C8.51795 21.9332 8.41341 22.1752 8.41341 22.4274C8.41341 22.6796 8.51795 22.9216 8.7042 23.1005L15.0642 29.1723C15.1463 29.254 15.2449 29.3191 15.354 29.3635C15.4632 29.4079 15.5806 29.4308 15.6992 29.4308C15.8178 29.4308 15.9352 29.4079 16.0444 29.3635C16.1535 29.3191 16.2521 29.254 16.3342 29.1723L22.7042 23.11C22.7979 23.0213 22.8723 22.9157 22.9231 22.7993C22.9739 22.683 23 22.5582 23 22.4322C23 22.3061 22.9739 22.1814 22.9231 22.065C22.8723 21.9487 22.7979 21.8431 22.7042 21.7543Z"
                fill="#007E46"
              />
            </svg>
          </span>
        </span>
      </div>
      <h1 className="text-center my-5 text-xl">Top Colleges</h1>
      <div className="flex flex-col gap-custom-10px">
        {collegeDatas.slice(0, 5).map((data, i) => (
          <div
            className="flex flex-row flex-nowrap px-1 py-2 bg-white"
            key={`${data.id} + ${i}`}
          >
            <img
              src={data.college_logo}
              alt="#"
              className="w-custom-75px h-custom-75px mx-3"
              style={{
                objectFit:
                  images.dummy1.width > 75 || images.dummy1.height > 75
                    ? "contain"
                    : "cover",
              }}
            />
            <article>
              <h1 className="font-semibold">{data.name}</h1>
              <p>{data.address}</p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopColleges;
