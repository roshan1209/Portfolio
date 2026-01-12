import { Button } from "@/components/ui/button"
import { DiBootstrap, DiDocker, DiGithub, DiMongodb, DiMysql } from "react-icons/di"
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa"
import { FaLaravel, FaPhp } from "react-icons/fa6"
import { RiNextjsLine, RiVercelLine } from "react-icons/ri"
import { SiExpress, SiTailwindcss, SiTypescript } from "react-icons/si"

/* Animated Card */
const Card = ({ children }: { children: React.ReactNode }) => (
    <div
        className="group flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-4
      opacity-0 translate-y-6
      animate-[fadeUp_0.6s_ease-out_forwards]
      hover:-translate-y-2 hover:shadow-xl
      transition-all duration-300"
    >
      <div className="group-hover:scale-110 transition-transform duration-300">
        {children}
      </div>
    </div>
)

const About = () => {
  return (
      <section id="about" className="w-full overflow-hidden">
        <div className="flex justify-center py-16 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">

            {/* Top Section */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

              {/* Image */}
              <div
                  className="hidden lg:block w-full rounded-xl bg-center bg-no-repeat bg-contain border border-border aspect-[16/10] [image-rendering:crisp-edges] [image-rendering:-webkit-optimize-contrast]"
                  style={{
                    backgroundImage:
                        'url("./about.png")'
                  }}
              />

              {/* Text */}
              <div className="flex flex-col justify-center gap-6
              opacity-0 translate-y-6
              animate-[fadeUp_0.8s_ease-out_0.3s_forwards]">

                <div className="flex flex-col gap-4 text-left">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                    Crafting Seamless Digital Experiences
                  </h1>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Driven by a passion for innovation and a commitment to excellence,
                    I specialize in full-stack development, creating robust and scalable
                    web applications. My expertise spans React, Next.js, and Node.js,
                    enabling me to deliver high-quality solutions tailored to unique
                    business needs.
                  </p>
                </div>

                <Button
                    asChild
                    className="h-12 w-fit px-6 bg-blue-700 text-white shadow-lg
                  hover:scale-105 hover:shadow-xl
                  active:scale-95
                  transition-all duration-300">
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-20">

              <h2 className="mb-8 text-center text-3xl font-bold tracking-tight
              opacity-0 translate-y-4
              animate-[fadeUp_0.7s_ease-out_0.4s_forwards]">
                My Tech Stack
              </h2>

              <div className="flex flex-col gap-12">

                {/* Frontend */}
                <div className="animate-[fadeUp_0.2s_ease-out_0.2s_forwards] opacity-0">
                  <h3 className="mb-6 text-xl font-semibold text-[var(--primary-color,#3b82f6)]">
                    Frontend
                  </h3>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    <Card><FaReact className="size-8 text-[var(--primary-color,#3b82f6)]" /><h4>React</h4></Card>
                    <Card><RiNextjsLine className="size-8 text-[var(--primary-color,#3b82f6)]" /><h4>Next.js</h4></Card>
                    <Card><FaJs className="size-8 text-[var(--primary-color,#3b82f6)]" /><h4>JavaScript</h4></Card>
                    <Card><SiTypescript className="size-8 text-[var(--primary-color,#3b82f6)]" /><h4>TypeScript</h4></Card>
                    <Card><SiTailwindcss className="size-8 text-[var(--primary-color,#3b82f6)]" /><h4>Tailwind</h4></Card>
                    <Card><DiBootstrap className="size-8 text-[var(--primary-color,#3b82f6)]" /><h4>Bootstrap</h4></Card>
                    <Card><FaHtml5 className="size-8 text-[var(--primary-color,#3b82f6)]" /><h4>HTML</h4></Card>
                    <Card><FaCss3 className="size-8 text-[var(--primary-color,#3b82f6)]" /><h4>CSS</h4></Card>
                  </div>
                </div>

                {/* Backend */}
                <div className="animate-[fadeUp_0.2s_ease-out_0.2s_forwards] opacity-0">
                  <h3 className="mb-6 text-xl font-semibold text-[var(--primary-color,#3b82f6)]">
                    Backend
                  </h3>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    <Card><FaNodeJs className="size-10 text-[var(--primary-color,#3b82f6)]" /><h4>Node.js</h4></Card>
                    <Card><SiExpress className="size-8 text-[var(--primary-color,#3b82f6)]" /><h4>Express</h4></Card>
                    <Card><FaPhp className="size-8 text-[var(--primary-color,#3b82f6)]" /><h4>PHP</h4></Card>
                    <Card><FaLaravel className="size-8 text-[var(--primary-color,#3b82f6)]" /><h4>Laravel</h4></Card>
                  </div>
                </div>

                {/* Database */}
                <div className="animate-[fadeUp_0.2s_ease-out_0.2s_forwards] opacity-0">
                  <h3 className="mb-6 text-xl font-semibold text-[var(--primary-color,#3b82f6)]">
                    Database
                  </h3>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    <Card><DiMysql className="size-8 text-[var(--primary-color,#3b82f6)]" /><h4>MySQL</h4></Card>
                    <Card><DiMongodb className="size-8 text-[var(--primary-color,#3b82f6)]" /><h4>MongoDB</h4></Card>
                  </div>
                </div>

                {/* Tools */}
                <div className="animate-[fadeUp_0.2s_ease-out_0.2s_forwards] opacity-0">
                  <h3 className="mb-6 text-xl font-semibold text-[var(--primary-color,#3b82f6)]">
                    Tools & DevOps
                  </h3>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    <Card><DiGithub className="size-8 text-[var(--primary-color,#3b82f6)]" /><h4>GitHub</h4></Card>
                    <Card><DiDocker className="size-8 text-[var(--primary-color,#3b82f6)]" /><h4>Docker</h4></Card>
                    <Card><RiVercelLine className="size-8 text-[var(--primary-color,#3b82f6)]" /><h4>Vercel</h4></Card>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About
