const LoadingSpinner = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center flex-col">
      {/* <div className="border-8 border-solid border-[#007E46] rounded-full w-16 h-16 animate-spin-slow"></div> */}
      <div className="w-16 h-16 border-8 border-solid border-t-[#007E46] rounded-full mx-auto animate-spin"></div>

      <div className="text-slate-700">Loading...</div>
    </div>
  );
};

export default LoadingSpinner;
