import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const { theme } = useTheme();
  return (
      <section className="max-w-6xl mx-auto px-4 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden">
        {/* Left Content */}
        <div className="flex flex-col gap-6 opacity-0 translate-y-6 animate-[fadeSlideUp_0.8s_ease-out_forwards]">
          <p className="text-3xl font-medium text-[var(--accent-color)]
          opacity-0 translate-y-4 font-bold
          animate-[fadeSlideUp_0.8s_ease-out_0.1s_forwards]">
            Hi, I'm Roshan Britto
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-blue-700 dark:text-blue-500
          opacity-0 translate-y-4
          animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards]">
            I help Businesses Build, Grow & Scale Digitally
          </h1>

          <p className="text-base md:text-xl text-muted-foreground
          opacity-0 translate-y-4
          animate-[fadeSlideUp_0.8s_ease-out_0.3s_forwards]">
            I work with startups and growing businesses to plan, build, and scale web and software solutions that solve real business problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4
          opacity-0 translate-y-4
          animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards]">

            <Button
                asChild
                className="h-12 px-6 bg-blue-700 text-white shadow-lg
              hover:scale-105 hover:shadow-xl hover:bg-blue-500
              active:scale-95
              transition-all duration-300">
              <a href="#contact" className="flex items-center">
                Start Your Project
              </a>
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
