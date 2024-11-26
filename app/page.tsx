"use client"

import { FcGoogle } from "react-icons/fc";
import useClientAuth from "@/hooks/useClientAuth";

export default function Home() {

  const {loginWithGoogle} = useClientAuth( )

  return (
    <section className="w-full h-screen flex items-center justify-center p-3">
      <div className="max-w-[1000 px] m-auto flex items-center justify-center flex-col gap-5 text-center">
        <h1 className="text-6lx uppercase font-black">CHAT <span className="text-blue-600">APP</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odio quis architecto sequi ea! Sapiente incidunt officiis, officia laboriosam iusto omnis dolores quo magnam sed quas! Suscipit deleniti ipsa, voluptatum cumque asperiores laboriosam odit vero enim fuga cum accusamus optio?</p>
        <button onClick={loginWithGoogle} className="bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-md p-2 flex items-center gap-2">
          <FcGoogle />
          <span>Se connecter avec Google</span>
        </button>
      </div>
    </section>
  );
}
