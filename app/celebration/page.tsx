"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useWindowSize } from "react-use";
import "animate.css";

const CelebrationPage = () => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 text-center min-h-screen bg-gradient-to-r from-[#0D0D0D] via-[#232323] to-[#4A4A4A] overflow-hidden">
      {showConfetti && (
        <div className="absolute inset-0 z-10 confetti-container"></div>
      )}

      <section className="animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] py-4 animate__animated animate__fadeIn">
          🎉 Let's Celebrate! 🎉
        </h1>
        <p className="text-lg sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#00bcd4] to-[#ffeb3b] mt-6 animate__animated animate__fadeIn animate__delay-1s">
          Cheers to a fantastic year ahead! 🥳 Let’s make this year even more
          amazing! 💫 Whenever you need a friend to talk to, laugh with, or just
          hang out with, I’ve got your back—always! Stay happy and keep
          smiling🥳🥳🥳🥰
        </p>
      </section>

      <div className="flex flex-wrap gap-10 justify-center mt-10">
        <div className="animate__animated animate__slideInLeft animate__delay-1s w-full sm:w-1/2 md:w-1/4">
          <Image
            src="/images/ananya1.jpg"
            alt="Ananya 1"
            width={300}
            height={300}
            className="rounded-full border-4 border-[#ff7e5f]"
          />
        </div>

        <div className="animate__animated animate__slideInRight animate__delay-1s w-full sm:w-1/2 md:w-1/4">
          <Image
            src="/images/ananya2.jpg"
            alt="Ananya 2"
            width={300}
            height={300}
            className="rounded-full border-4 border-[#feb47b]"
          />
        </div>
        <div className="animate__animated animate__slideInRight animate__delay-1s w-full sm:w-1/2 md:w-1/4">
          <Image
            src="/images/ananya3.jpg"
            alt="Ananya 3"
            width={300}
            height={300}
            className="rounded-full border-4 border-[#feb47b]"
          />
        </div>
        <div className="animate__animated animate__slideInRight animate__delay-1s w-full sm:w-1/2 md:w-1/4">
          <Image
            src="/images/ananya4.jpg"
            alt="Ananya 4"
            width={300}
            height={300}
            className="rounded-full border-4 border-[#feb47b]"
          />
        </div>
      </div>
    </main>
  );
};

export default CelebrationPage;
