import Data from "../data.json";
import Memory from "../assets/images/icon-memory.svg";
import Reaction from "../assets/images/icon-reaction.svg";
import Verbal from "../assets/images/icon-verbal.svg";
import Visual from "../assets/images/icon-visual.svg";

const icons = {
  Memory,
  Reaction,
  Verbal,
  Visual,
};

export default function Sumamry() {
  return (
    <div className="summary h-full w-[50%] p-8 flex flex-col gap-y-4">
      <h3 className="text-[var(--dark-gray-blue)] stats font-semibold text-[24px] ">
        Summary
      </h3>
      <div className="summary flex flex-col justify-center gap-3">
        {Data.map((stat) => {
          return (
            <div
              key={stat.category}
              className={`stat-${
                stat.category
              } w-[100%] p-3 flex flex-row items-center justify-between rounded-md bg-${stat.category.toLowerCase()}`}
            >
              <div className="stat-description flex flex-row items-center justify-center gap-x-3">
                {<img src={icons[stat.category]} />}
                <span className="category-name">{stat.category}</span>
              </div>

              <span className="font-extrabold text-[var(--dark-gray-blue)]">
                {stat.score} /
                <span className="text-[var(--light-dark)]">{` 100 `}</span>{" "}
              </span>
            </div>
          );
        })}
      </div>
      <button className="bg-[var(--contunie-button-bg)] text-[var(--white)] p-3 rounded-3xl mt-10">
        Continue
      </button>
    </div>
  );
}
