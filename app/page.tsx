"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "animate.css";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import "../app/globals.css"; // Make sure this is importing the correct global styles

const Home = () => {
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);
  const { width, height } = useWindowSize();
  const router = useRouter();

  const handleClick = () => {
    setIsConfettiVisible(true);

    setTimeout(() => {
      setIsConfettiVisible(false);
      router.push("/celebration");
    }, 2000);
  };

  return (
    <main className="relative flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 text-center min-h-screen bg-gradient-to-r from-[#1A1A1A] via-[#333333] to-[#4A4A4A] overflow-hidden">
      {isConfettiVisible && (
        <Confetti
          width={width}
          height={height}
          recycle={true}
          numberOfPieces={1000}
          gravity={0.2}
          initialVelocityY={3}
        />
      )}

      <section className="animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] py-4 animate__animated animate__slideInLeft !gradient-title">
          🎂 Wishing You a very Wonderful Birthday, Ananya! 🎂
        </h1>
        <p className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 mt-16 animate__animated animate__slideInRight animate__delay-1s">
          Wishing you a day filled with love, laughter, and all the joy your
          heart can hold! 🌟 May this year be full of exciting adventures,
          beautiful moments, and everything that makes you smile. 🥳✨
        </p>
      </section>

      <div className="flex justify-center gap-6 mt-2">
        <Button
          onClick={handleClick}
          size="lg"
          variant="secondary"
          className="bounce-medium"
        >
          Let's Celebrate! Please Open 🎉
        </Button>
      </div>
    </main>
  );
};

export default Home;
