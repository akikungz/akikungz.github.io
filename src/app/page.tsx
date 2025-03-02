"use client";
import Image from "next/image";

import { _class } from "@/functions/class";
import { Suspense } from "react";
import Link from "@/components/Link";

export default function Home() {
  return (
    <>
      <div className={_class(
        "flex flex-col-reverse items-center justify-center md:flex-row md:items-start md:justify-start",
        "md:grid md:grid-cols-3 gap-2",
      )}>
        <div className={_class(
          "mt-4 px-4 max-w-[720px] col-span-2 h-full",
          "flex flex-col justify-center md:items-start"
        )}>
          <h1 className="text-3xl font-bold">
            Thitipong Tapianthong
          </h1>
          <p className="text-left mt-4">
            Hello there! I'm Thitipong Tapianthong, a student in network engineering at King Mongkut's University of Technology North Bangkok.
          </p>

          <p className="text-left mt-4">
            I'm interested in web development and programming. Mainly I use React, Next.js, and Tailwind CSS for my projects.
          </p>
        </div>

        <Image
          className="rounded-2xl w-48 h-48 md:w-full md:h-full object-cover"
          src="https://avatars.githubusercontent.com/u/60536406"
          alt="avatar"
          width={192}
          height={192}
        />
      </div>

      <Suspense fallback={null}>
        <Link />
      </Suspense>
    </>
  );
}
