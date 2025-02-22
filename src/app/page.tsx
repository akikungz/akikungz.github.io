"use client";
import Image from "next/image";

import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";

import { _class } from "@/functions/class";
import { Suspense } from "react";
import Link from "@/components/Link";

export default function Home() {
  return (
    <div className="w-[98dvw] min-h-screen px-2 py-4 mx-auto">
      <div className={_class(
        "flex flex-col-reverse items-center justify-center md:flex-row md:items-start md:justify-start",
        "md:grid md:grid-cols-3 gap-2",
        "md:px-4 md:py-8 md:mx-auto md:max-w-[1024px]"
      )}>
        <div className={_class(
          "mt-4 px-4 max-w-[720px] col-span-2 h-full",
          "flex flex-col justify-center md:items-start text-slate-50"
        )}>
          <h1 className="text-3xl font-bold text-slate-50">
            Thitipong Tapianthong
          </h1>
          <h2 className="text-xl font-bold text-slate-50 mt-4">
            About me
          </h2>
          <p className="text-left text-slate-50 mt-4">
            Hello there! I'm Thitipong Tapianthong, a student in network engineering at King Mongkut's University of Technology North Bangkok.
          </p>

          <p className="text-left text-slate-50 mt-4">
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

      <hr className="border-t border-gray-300 my-8 mx-auto max-w-[1024px]" />

      <div className={_class(
        "flex flex-col items-center justify-center",
        "px-4 max-w-[720px] gap-4 mx-auto"
      )}>
        <h2 className="text-2xl font-bold text-slate-50">
          My Tools & Languages
        </h2>

        <div className={
          _class(
            "grid grid-rows-2 grid-cols-1 gap-4",
            "md:grid-cols-2 md:grid-rows-1 md:gap-4"
          )
        }>
          <div className="bg-pink-400 p-4 rounded-md text-slate-50 font-bold text-xl">
            <h3 className="text-center">Tools</h3>
            <ul className="list-disc list-inside text-base">
              <li>Text editor: Visual Studio Code</li>
              <li>Tools: Git & Github, Docker</li>
              <li>Browser: Microsoft Edge</li>
              <li>Framework: Nextjs</li>
              <li>Database: Postgresql</li>
            </ul>
          </div>

          <div className="bg-pink-400 p-4 rounded-md text-slate-50 font-bold text-xl">
            <h3 className="text-center">Languages</h3>
            <ul className="list-disc list-inside text-base">
              <li>JavaScript</li>
              <li>Typescript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-300 my-8 mx-auto max-w-[1024px]" />

      <div className={_class(
        "flex flex-col items-center justify-center",
        "px-4 max-w-[1024px] gap-4 mx-auto"
      )}>
        <h2 className="text-2xl font-bold text-slate-50">My Projects</h2>
        <p className="text-slate-50">Comming soon...</p>
      </div>

      <hr className="border-t border-gray-300 my-8 mx-auto max-w-[1024px]" />

      <div className={_class(
        "flex flex-col items-center justify-center",
        "px-4 max-w-[720px] mx-auto gap-4"
      )}>
        <h2 className="text-2xl font-bold text-slate-50">
          Link to my social medias
        </h2>

        <a href="https://www.github.com/akikungz" target="_blank" className="py-2 bg-pink-400 w-full text-slate-50 font-bold text-xl flex flex-row items-center justify-center gap-2 rounded-md">
          <FaGithubSquare />
          Github
        </a>

        <a href="https://www.facebook.com/akikungz" target="_blank" className="py-2 bg-pink-400 w-full text-slate-50 font-bold text-xl flex flex-row items-center justify-center gap-2 rounded-md">
          <FaFacebookSquare />
          Facebook
        </a>

        <a href="https://www.instagram.com/akikungz" target="_blank" className="py-2 bg-pink-400 w-full text-slate-50 font-bold text-xl flex flex-row items-center justify-center gap-2 rounded-md">
          <FaInstagramSquare />
          Instagram
        </a>

        <a href="https://www.youtube.com/@akikungz" target="_blank" className="py-2 bg-pink-400 w-full text-slate-50 font-bold text-xl flex flex-row items-center justify-center gap-2 rounded-md">
          <FaYoutubeSquare />
          Youtube
        </a>
      </div>

      <hr className="border-t border-gray-300 my-8 mx-auto max-w-[1024px]" />

      <footer className="text-center text-slate-50 mt-auto">
        <p>
          &copy; 2024 Thitipong Tapianthong
        </p>
      </footer>

      <Suspense fallback={null}>
        <Link />
      </Suspense>
    </div>
  );
}
