import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const { theme } = useTheme();
  return (
      <section className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden">
        {/* Left Content */}
        <div className="flex flex-col gap-6 opacity-0 translate-y-6 animate-[fadeSlideUp_0.8s_ease-out_forwards]">
          <p className="text-lg font-medium text-[var(--accent-color)]
          opacity-0 translate-y-4
          animate-[fadeSlideUp_0.8s_ease-out_0.1s_forwards]">
            Full-Stack Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight
          opacity-0 translate-y-4
          animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards]">
            Hi, I'm <span className="text-[var(--accent-color)]">Roshan Britto</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground
          opacity-0 translate-y-4
          animate-[fadeSlideUp_0.8s_ease-out_0.3s_forwards]">
            I specialize in building scalable web applications with a focus on user
            experience and clean code. Passionate about creating innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4
          opacity-0 translate-y-4
          animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards]">

            <Button
                asChild
                className="h-12 px-6 bg-blue-700 text-white shadow-lg
              hover:scale-105 hover:shadow-xl
              active:scale-95
              transition-all duration-300">
              <a href="#projects" className="flex items-center">
                View My Work
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <Button
                asChild
                variant="outline"
                className="h-12 px-6 shadow-lg
              hover:bg-[var(--accent-color)]
              hover:text-white
              hover:border-[var(--accent-color)]
              hover:scale-105
              active:scale-95
              transition-all duration-300">
              <a href="#contact">Hire Me</a>
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
              src={theme === "dark" ? "/logo/dark.png" : "/logo/light.png"}
              alt="Portrait"
              className="rounded-xl w-full max-w-md shadow-xl border border-border"
          />
        </div>
      </section>
  );
};

export default Hero;
