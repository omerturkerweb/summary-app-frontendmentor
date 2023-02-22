export default function SideBar() {
  return (
    <div className="sidebar flex flex-col py-7 px-5 gap-y-8 items-center rounded-3xl w-[50%] bg-gradient-to-br from-[var(--light-slate-blue-background)] to-[var(--light-royal-blue-background)]">
      <h3 className="text-[var(--dark-white)] text-[20px]">Your Result</h3>
      <div className="flex flex-col items-center justify-center score h-[35%] w-[42%] rounded-full bg-gradient-to-b from-[var(--violet-blue-circle)] to-[var(--persian-blue-circle)]">
        <h3 className="text-[45px] text-[var(--white)]">76</h3>
        <span className="text-sm text-[var(--dark-white)] -mt-2">of 100</span>
      </div>
      <h3 className="text-[32px] text-[var(--white)]">Great</h3>
      <span className="text-[var(--light-dark-white)] text-center px-14">
        You scored higher than 65% of the people who have taken these tests.
      </span>
    </div>
  );
}
