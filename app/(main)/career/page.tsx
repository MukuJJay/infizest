import { Spotlight } from "@/components/aceternity/spotlight";
import { CareerFormDialog } from "@/components/forms/career-form-dialog";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards";
import employee1 from "@/public/employee1.jpg";
import employee2 from "@/public/employee2.jpg";
import employee3 from "@/public/employee3.jpg";

const testimonials = [
  employee1,
  employee2,
  employee2,
  employee1,
  employee3,
  employee1,
  employee3,
  employee1,
  employee2,
  employee3,
  employee1,
  employee3,
  employee1,
  employee2,
  employee3,
];

const Career = () => {
  return (
    <div className="px-5">
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
            potential. Do not just work, make your mark. Spotlight your talents
            - join our team!
          </p>
          <CareerFormDialog />
        </div>
      </div>
      <div className="py-[100px]">
        <h2 className="text-4xl font-bold text-center">Meet Our Members</h2>
        <p className="text-center mx-auto max-w-[600px] my-6 text-muted-foreground">
          Our talented employees are the backbone of this company. Their
          dedication and expertise drive our success, and we are proud to have
          them on board.
        </p>
        <InfiniteMovingCardsDemo />
      </div>
    </div>
  );
};

export default Career;

function InfiniteMovingCardsDemo() {
  return (
    <div className="rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
