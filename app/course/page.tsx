"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineTrophy } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
//video play libery import
import ReactPlayer from "react-player";
import { LOCAL_STORAGE } from "@/services/storage";
import { useWatchCourse } from "../context/viewcourseProvider";
import Link from "next/link";

const CourseNavBar = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const { watchCourse } = useWatchCourse();
  const courseData = watchCourse;

  //   const clickHandler = () => {
  //   return (event: React.MouseEvent) => {
  //     ...do stuff...
  //     event.preventDefault();
  //   }
  // }
  return (
    <>
      <div className="flex justify-between px-6 py-2 bg-dark opacity-95 text-white h-fit">
        <div className="divide-x-2 divide-gray2 flex h-fit  my-auto">
          <Link href="/course">
            <Image
              src="	https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
              width={91}
              height={34}
              alt="logo"
              loading="lazy"
              className="w-20 pr-4 my-auto"
            />
          </Link>

          <span className="my-auto px-4 hover:cursor-pointer">
            {courseData?.title}
          </span>
        </div>
        <div className="flex justify-between gap-2">
          <div className="border-2 rounded-full hover:cursor-pointer">
            <AiOutlineTrophy size={30} className="p-2" />
          </div>
          <div className="flex my-auto gap-2">
            <p className="text-sm">Your progress</p>
            <span className="my-auto ">
              <RiArrowDownSLine />
            </span>
          </div>
          <div className="border-1 hover:cursor-pointer gap-2 flex px-2">
            <span className="my-auto text-xs ">Share</span>
            <RiArrowDownSLine className="my-auto" />
          </div>
          <div className="border-1 p-1 hover:cursor-pointer gap-2 flex">
            <CiMenuKebab size={20} className="my-auto " />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex w-9/12 items-center justify-center h-96 bg-dark py-1">
          <ReactPlayer
            url={videoUrl}
            controls
            style={{
              width: "70vw",
              height: "auto",
            }}
          />
        </div>
        <div className="w-3/12">
          <div className="flex justify-between w-full px-3 font-bold border-b border-lightGray py-3">
            <h3> Course content</h3>
            <button className="h-1 font-normal">x</button>
          </div>
          {courseData?.materials.map((material: any, index: any) => (
            <div key={index} className="">
              <h3 className="font-bold px-2 py-3 ">
                Section {index + 1} {material?.sectionTitle}
              </h3>
              <div
                onClick={() => setVideoUrl(material?.video)}
                className="flex gap-3 px-3 py-3 hover:bg-lightGray hover:cursor-pointer"
              >
                <input
                  type="checkbox"
                  name={material?.objective}
                  value={material?.objective}
                  className="outline-none border-2 border-b-dark bg-transparent rounded-none"
                />
                <p>{material?.objective}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CourseNavBar;
