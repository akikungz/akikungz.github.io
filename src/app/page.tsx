"use client";
import Image from "next/image";

import { _class, sortByDate } from "@/functions";
import { Suspense } from "react";

import Link from "@/components/Link";
import projects from "@/assets/projects";
import Project from "@/components/Project";

export default function Home() {
  return (
    <>
      <div className="flex flex-col-reverse items-center justify-center md:flex-row md:justify-start lg:justify-center gap-4 p-4">
        <div className={_class(
          "mt-4 px-4 max-w-[720px] col-span-2 h-full gap-4",
          "flex flex-col justify-center items-center md:items-start"
        )}>
          <h1 className="text-3xl font-bold">
            Thitipong Tapianthong
          </h1>
          <p className="text-center md:text-left">
            Hello there! I'm Thitipong Tapianthong, a student in network engineering at King Mongkut's University of Technology North Bangkok.
          </p>

          <p className="text-center md:text-left">
            I'm interested in web development and programming. Mainly I use React, Next.js, and Tailwind CSS for my projects.
          </p>
        </div>

        <Image
          className="rounded-2xl w-48 h-48 md:w-64 md:h-64 object-cover"
          src="https://avatars.githubusercontent.com/u/60536406"
          alt="avatar"
          width={128}
          height={128}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          { 
            projects
              .filter(({ publish }) => publish)
              .sort((a, b) => sortByDate(b.date, a.date))
              .map((project, index) => <Project key={index} project={project} />)
          }
        </div>
      </div>

      <Suspense fallback={null}>
        <Link />
      </Suspense>
    </>
  );
}
