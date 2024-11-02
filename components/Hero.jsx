import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Spotlight Container */}
      <div className="absolute inset-0">
        <Spotlight
          className="absolute -top-40 -left-10 md:-left-32 md:-top-20 h-full w-full opacity-100"
          fill="white"
        />
        <Spotlight
          className="absolute top-10 left-1/2 h-[80vh] w-1/2"
          fill="purple"
        />
        <Spotlight 
          className="absolute left-1/3 top-28 h-[80vh] w-1/2" 
          fill="blue" 
        />
      </div>

      {/* Grid Background */}
      <div className="relative h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]">
        <div className="absolute inset-0 dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="w-full max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
          <p className="text-center text-xs uppercase tracking-widest text-blue-100 mt-16">
            Dynamic Web Magic with Next.js
          </p>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="mb-4 text-center text-sm md:text-lg lg:text-2xl md:tracking-wider">
            Hi! I&apos;m Adrian, a Next.js Developer based in Croatia.
          </p>
          <div className="flex justify-center">
            <a href="#projects">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;