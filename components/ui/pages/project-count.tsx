import { useUiObserver } from "@/hooks/useUiObserver";
import CountUp from "react-countup";

export const ProjectCount = () => {
  const { isNavActive } = useUiObserver();

  return (
    <div className="h-[50rem] w-full bg-[url('/project.jpg')] bg-cover">
      <div className="bg-background/60 w-full h-full flex flex-col gap-12 justify-center items-center">
        <h2 className="text-6xl 5xl text-white">
          Empowering Authors, Enriching Lives.
        </h2>
        <ul className="flex items-center px-5">
          <li className="flex flex-col gap-3 border-l-4 border-pink-500 px-6 min-w-[260px] text-center">
            <span className="text-pink-500 font-bold text-5xl">
              {isNavActive && <CountUp end={1000} duration={2.5} />}+
            </span>
            <span className="text-white">PROJECTS EXECUTED</span>
          </li>
          <li className="flex flex-col gap-3 border-l-4 border-emerald-500 px-6 min-w-[260px] text-center">
            <span className="text-emerald-500 font-bold text-5xl">
              {isNavActive && <CountUp end={50} duration={2.5} />}+
            </span>
            <span className="text-white">PROFESSIONALS</span>
          </li>
          <li className="flex flex-col gap-3 border-l-4 border-blue-500 px-6 min-w-[260px] text-center">
            <span className="text-blue-500 font-bold text-5xl">
              {isNavActive && <CountUp end={12000} duration={2.5} />}+
            </span>
            <span className="text-white">CLIENTS WORLDWIDE</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
