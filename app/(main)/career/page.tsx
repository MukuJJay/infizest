import { Spotlight } from "@/components/aceternity/spotlight";
import { CareerFormDialog } from "@/components/forms/career-form-dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Career = () => {
  return (
    <div className="h-[50rem] w-full rounded-md flex md:items-center md:justify-center bg-indigo-950 antialiased bg-grid-white/[0.02] relative overflow-hidden shadow-lg shadow-black">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Spotlight <br /> your career with us.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Shine bright! Launch your career with us and illuminate your
          potential. Don't just work, make your mark. Spotlight your talents -
          join our team!
        </p>
        <CareerFormDialog />
      </div>
    </div>
  );
};

export default Career;
