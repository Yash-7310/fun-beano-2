const AboutNumerics = () => {
  return (
    <div className="w-full flex justify-center items-center bg-white py-6">
      <div className="grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 place-items-center gap-8">
        {/* 1 */}
        <div className="border border-[#FFADAD] w-[240] h-[190] rounded-3xl flex flex-col items-center justify-center gap-2">
          <img src="/icons/AboutNumerics1.svg" alt="Home icon" />
          <h2 className="text-4xl quicksand-bold">500+</h2>
          <span className="text-xl quicksand-semibold">Verified Playzones</span>
        </div>
        {/* 2 */}
        <div className="border border-[#A0C4FF] w-[240] h-[190] rounded-3xl flex flex-col items-center justify-center gap-2">
          <img src="/icons/AboutNumerics2.svg" alt="Cities icon" />
          <h2 className="text-4xl quicksand-bold">50+</h2>
          <span className="text-xl quicksand-semibold">Indian Cities</span>
        </div>
        {/* 3 */}
        <div className="border border-[#FFC6FF] w-[240] h-[190] rounded-3xl flex flex-col items-center justify-center gap-2">
          <img src="/icons/AboutNumerics3.svg" alt="Family icon" />
          <h2 className="text-4xl quicksand-bold">10K+</h2>
          <span className="text-xl quicksand-semibold">Happy Family</span>
        </div>
        {/* 4 */}
        <div className="border border-[#FED7A5] w-[240] h-[190] rounded-3xl flex flex-col items-center justify-center gap-2">
          <img src="/icons/AboutNumerics4.svg" alt="Stars icon" />
          <h2 className="text-4xl quicksand-bold">4.8</h2>
          <span className="text-xl quicksand-semibold">Average Rating</span>
        </div>
      </div>
    </div>
  );
};

export default AboutNumerics;
