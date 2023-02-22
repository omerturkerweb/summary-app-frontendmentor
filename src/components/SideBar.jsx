export default function SideBar() {
  return (
    <div
      className="sidebar flex flex-col py-7 px-5 gap-y-8 items-center rounded-3xl w-[50%] bg-gradient-to-br from-[var(--light-slate-blue-background)] to-[var(--light-royal-blue-background)]
    xs:w-[100%] xs:rounded-t-none rounded-b-[35px] xs:shadow-xl xs:gap-0 xs:py-4 
    sm:w-[100%] sm:rounded-3xl sm:gap-y-8 sm:py-7 
    md:w-[100%] md:rounded-3xl md:gap-y-8 md:py-7 
    lg:w-[50%] lg:rounded-3xl lg:gap-y-8 lg:py-7 
    xl:w-[50%] xl:rounded-3xl xl:gap-y-8 xl:py-7 
    2xl:w-[50%] 2xl:rounded-3xl 2xl:gap-y-8 2xl:py-7 "
    >
      <h3 className="text-[var(--dark-white)] text-[20px]">Your Result</h3>
      <div
        className="flex flex-col items-center justify-center score h-[35%] w-[42%] rounded-full bg-gradient-to-b from-[var(--violet-blue-circle)] to-[var(--persian-blue-circle)]
        xs:h-[17vh] 
        sm:h-[35%] 
        md:h-[35%] 
        lg:h-[35%] 
        xl:h-[35%] 
        2xl:h-[35%]"
      >
        <h3 className="text-[45px] text-[var(--white)]">76</h3>
        <span className="text-sm text-[var(--dark-white)] -mt-2">of 100</span>
      </div>
      <h3 className="text-[32px] text-[var(--white)]">Great</h3>
      <span
        className="text-[var(--light-dark-white)] text-center 
       xs:px-6 
       sm:px-14 
       md:px-14 
       lg:px-14 
       xl:px-14 
       2xl:px-14"
      >
        You scored higher than 65% of the people who have taken these tests.
      </span>
    </div>
  );
}
