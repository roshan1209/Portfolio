import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col gap-6">
        <p className="text-lg font-medium text-[var(--accent-color)]">Full-Stack Developer</p>
        <h1 className="text-5xl md:text-7xl font-black">Hi, I'm Roshan Britto</h1>
        <p className="text-base md:text-lg text-muted-foreground">
          I specialize in building scalable web applications with a focus on user experience and clean code. Passionate about creating innovative solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="h-12 px-6 bg-blue-700 text-white shadow-lg hover:bg-[var(--accent-color)]/90 transition-all duration-300">
            <a href="#projects" className="flex items-center">
              <span className="truncate">View My Work</span>
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
          <Button asChild variant="outline" className="h-12 px-6 shadow-lg hover:bg-[var(--accent-color)] hover:text-white hover:border-[var(--accent-color)] transition-all duration-300">
            <a href="#contact">
              <span className="truncate">Hire Me</span>
            </a>
          </Button>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <img
          src={theme === "dark" ? "/logo/dark.png" : "/logo/light.png"}
          alt="Portrait"
          className="rounded-xl w-full max-w-md shadow-xl border border-border"
        />
      </div>
    </section>
  )
}

export default Hero;
