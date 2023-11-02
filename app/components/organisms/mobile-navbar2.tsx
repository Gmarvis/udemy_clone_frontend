"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

type Props = {
  className?: string;
  onClickMenuButton2(): void;
};

const MobileNavbar = ({ className, onClickMenuButton2 }: Props) => {

  return (
    <div className={className} >
      <div className="flex md:hidden justify-between shadow-lg px-6 py-4">
        <AiOutlineMenu
          className="my-auto w-fit h-6"
          onClick={onClickMenuButton2}
        />
        <Image
          className="w-20 my-auto"
          width={75}
          height={28}
          loading="lazy"
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt="Udemy logo"
        />
        <div className="flex gap-4 my-auto">
          <AiOutlineSearch className="h-5 w-5 hover:cursor-pointer hover:text-violet-600" />
          <Link href="/cart">
            <AiOutlineShoppingCart
              className="h-5 w-5 hover:cursor-pointer text-black hover:text-violet"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;