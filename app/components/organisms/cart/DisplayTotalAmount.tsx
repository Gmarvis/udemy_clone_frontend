"use client";
import React, { useEffect, useState } from "react";
import RegisterPage from "../../pages/register";
import ModalComponent from "./ModalComponent";
import { LOCAL_STORAGE } from "@/services/storage";
import { useRouter } from "next/navigation";
import { CartItemType } from "@/types";
import useCart from "@/app/Hooks/useCart";
import RegisterPage2 from "../../pages/register-page2";
import LoginForm2 from "../../pages/login2";

type Props = {
  price: number;
  listOfCourses: CartItemType[];
};

function DisplayTotalAmount({ price, listOfCourses }: Props): JSX.Element {
  const [tokenPresent, setTokenPresent] = useState<boolean>(false);
  const [show, setShow] = useState(false);
  const { dispatch, REDUCER_ACTION } = useCart();

  const router = useRouter();

  const token = LOCAL_STORAGE.get("token");
  console.log(token);

  console.log(listOfCourses);

  const checkoutPayement = () => {
    if (!token) {
      setTokenPresent(true);
    }
    dispatch({
      type: REDUCER_ACTION.SUBMIT,
      payload2: { courseList: [...listOfCourses] },
    });
    router.push("payment/checkout");
  };

  return (
    <div className=" flex flex-col w-full md:w-[30%] h-fit-content">
      <p className="text-udemy text-xs font-bold mb-0">Total</p>
      <p className=" font-body">
        {" "}
        <span className=" font-bold text-2xl lg:text-3xl text-black">
          ₦ {price}
        </span>
      </p>
      <p className="">
        {" "}
        <span className="line-through text-md text-udemy">₦200.75</span>
      </p>
      <p className=" text-sm text-black font-segoe">90%</p>
      {!token ? (
        <ModalComponent title="Checkout">
          <div>
            {!show && (
              <RegisterPage2 onClick={() => setShow((prev) => !prev)} />
            )}
          </div>
          <div>{show && <LoginForm2 />}</div>
        </ModalComponent>
      ) : (
        <button
          className=" w-full flex justify-center items-center py-2 px-10 bg-prple text-white bg-violt rounded-md"
          onClick={checkoutPayement}
        >
          Checkout
        </button>
      )}

      <hr className=" font-light border-gray boder-t-1 " />
      <h5 className=" font-bold text-sm mb-2 text-black">Promotions</h5>
      <span className=" text-udemy text-xs mb-0">
        x&nbsp;&nbsp; ST10MT101923 is applied
      </span>
      <div className=" flex justify-center h-14 w-full items-center mt-0">
        <input
          type="text"
          name="input-stm"
          id=""
          placeholder="Enter Coupon"
          className=" w-4/6 py-[7.5px] px-5 text-udemy text-xs ring-1 ring-ctitle border-0 outline-0"
        />
        <button className=" w-2/6 first-letter:flex items-center justify-center bg-prple  hover:bg-violt text-white text-sm py-[6.6px] px-5 h-fit">
          {" "}
          Apply
        </button>
      </div>
    </div>
  );
}

export default DisplayTotalAmount;
