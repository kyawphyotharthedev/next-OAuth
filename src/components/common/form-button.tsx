"use client";

import Image from "next/image";
interface ImageProps {
  img: string;
  buttonText: string;
}
export default function FormButton(props: ImageProps) {
  return (
    <button
      type="submit"
      className="flex items-center justify-center gap-3 text-black font-semibold rounded-md  w-full py-2 border border-gray-400"
    >
      <Image src={props.img} alt="button-logo" width={30} height={30} />
      <h4>
        <span className="mr-1">Sign in with</span>
        <span>{props.buttonText}</span>
      </h4>
    </button>
  );
}
