"use client";
import React, { useState } from "react";
import InputField from "../atoms/input";
import Button from "../atoms/Button";
import Link from "next/link";
import PasswordStrenght from "../atoms/passwordStrenght";
// import { NextPage } from "next";
import { getUser, signUp } from "@/services/utils";
import { LOCAL_STORAGE } from "@/services/storage";
import { useRouter } from "next/navigation";
import validator from "validator";
import { useDisclosure } from "@nextui-org/react";

type Props = {
  className?: string;
  onClick?: () => void
}

const RegisterPage2 = ({className, onClick}: Props) => {
  const { onOpen, onClose } = useDisclosure()
  const [fullname, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMassage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setIsError(false);

    console.log("formData: ", { fullname, email, password });

    const isValidEmail = validator.isEmail(email);

    if (!isValidEmail) {
      setIsError(true);
      setErrorMassage("incurrect email");
      return;
    }

    if (fullname && email && password) {
      signUp({
        name: fullname,
        email,
        password,
      }).then((res) => {
        if (res.token) {
          LOCAL_STORAGE.save("token", res.token);
          getUser(res.token).then((response) => {
            LOCAL_STORAGE.save("currentUser", response);
            console.log(response);
            setIsLoading(false);
            setIsError(false);
            onClose
            router.push("/payment/checkout");
          });
        } else {
          setIsError(true);
          setIsLoading(false);
          setErrorMassage(
            `${res.message},There was a problem creating your account. Check that your email address is spelled correctly.`
          );
        }
      });
    } else {
      setIsError(true);
      setErrorMassage("Please input all fields");
    }
  };

  const handleContent = () => {
    LOCAL_STORAGE.save("isTrue", true)
  }

  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center  gap-2 mt-10 mb-8">
      <form onSubmit={handleSubmit} className="flex flex-col w-[350px] gap-2">
        <h3 className="font-bold text-left">Sign up and start learning</h3>
        {isError && (
          <div className=" p-4 bg-errRed">
            <span>{errorMessage}</span>
          </div>
        )}
        <InputField
          type="text"
          name="fullname"
          value={fullname}
          placeholder="Full name"
          className="w-full placeholder:text-black placeholder:font-bold h-[60px] text-[12px] px-4"
          onChange={(e) => setFullName(e.target.value)}
        />
        <InputField
          name="email"
          type="text"
          value={email}
          placeholder="Email"
          className="w-full placeholder:text-black placeholder:font-bold h-[60px] text-[12px] px-4 "
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          name="password"
          type="password"
          placeholder="Password"
          className="w-full placeholder:text-black placeholder:font-bold h-[60px] text-[12px] px-4"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <PasswordStrenght password={password} />
        <div className="flex  text-start">
          <input
            id="checked-checkbox"
            type="checkbox"
            className="mr-2 mt-1 w-4 h-4 text-black  border-black focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />{" "}
          <p className="text-[14px]">
            I would like to recieve special offers, personalized <br />{" "}
            recommendations and learning tips
          </p>
        </div>
        <div className="flex items-center justify-center bg-violt w-[350px] h-[50px] my-2">
          <Button
            className="text-white font-black text-[16px]"
            label={isLoading ? "loading..." : "sign up"}
            type="submit"
          />
        </div>
      </form>
      <p className="text-[11px] text-center">
        By signing up, you agree to our{" "}
        <span className="underline">Terms of Use</span> and{" "}
        <span className="underline">
          Privacy <br /> Policy.
        </span>
      </p>
      <hr className="w-[350px] h-[1px] my-3 bg-gray border-0 rounded  dark:bg-gray-700" />
      <p className="text-[13px] text-center">
        Already have an account?
        <span
          onClick={onClick}
          className="text-violet font-bold text-[14px] underline text-violt hover:cursor-pointer"
        >
          Log in{" "}
        </span>
      </p>
    </div>
    </div>
  );
};
export default RegisterPage2;
