import { Button } from "@/components/ui/button"
import { DiBootstrap, DiDocker, DiGithub, DiMongodb, DiMysql } from "react-icons/di"
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa"
import { FaLaravel, FaPhp } from "react-icons/fa6"
import { RiNextjsLine, RiVercelLine } from "react-icons/ri"
import { SiExpress, SiTailwindcss, SiTypescript } from "react-icons/si"

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-4">
    {children}
  </div>
)

const About = () => {
  return (
    <section id="about" className="w-full">
      <div className="flex justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div
              className="hidden lg:block w-full rounded-xl bg-center bg-no-repeat bg-contain border border-border aspect-[16/10] [image-rendering:crisp-edges] [image-rendering:-webkit-optimize-contrast]"
              style={{
                backgroundImage:
                  'url("./about.png")'
              }}
            />
            <div className="flex flex-col justify-center gap-6">
              <div className="flex flex-col gap-4 text-left">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                  Crafting Seamless Digital Experiences
                </h1>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Driven by a passion for innovation and a commitment to excellence, I specialize in full-stack development, creating robust and scalable web applications. My expertise spans React, Next.js, and Node.js, enabling me to deliver high-quality solutions tailored to unique business needs.
                </p>
              </div>
              <Button asChild className="w-fit bg-[var(--primary-color,#3b82f6)] hover:bg-[color-mix(in_oklab,var(--primary-color,#3b82f6)_90%,black)]">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">My Tech Stack</h2>
            <div className="flex flex-col gap-12">
              <div>
                <h3 className="mb-6 text-xl font-semibold text-[var(--primary-color,#3b82f6)]">Frontend</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  <Card>
                    <FaReact className="size-8 text-[var(--primary-color,#3b82f6)]" />
                    <h4 className="text-base font-medium">React</h4>
                  </Card>
                  <Card>
                    <RiNextjsLine className="size-8 text-[var(--primary-color,#3b82f6)]" />
                    <h4 className="text-base font-medium">Next.js</h4>
                  </Card>
                  <Card>
                    <FaJs className="size-8 text-[var(--primary-color,#3b82f6)]" />
                    <h4 className="text-base font-medium">JavaScript</h4>
                  </Card>
                  <Card>
                    <SiTypescript className="size-8 text-[var(--primary-color,#3b82f6)]" />
                    <h4 className="text-base font-medium">TypeScript</h4>
                  </Card>
                  <Card>
                    <SiTailwindcss className="size-8 text-[var(--primary-color,#3b82f6)]" />
                    <h4 className="text-base font-medium">Tailwind CSS</h4>
                  </Card>
                  <Card>
                    <DiBootstrap className="size-8 text-[var(--primary-color,#3b82f6)]" />
                    <h4 className="text-base font-medium">Bootstrap</h4>
                  </Card>
                  <Card>
                    <FaHtml5 className="size-8 text-[var(--primary-color,#3b82f6)]" />
                    <h4 className="text-base font-medium">HTML</h4>
                  </Card>
                  <Card>
                    <FaCss3 className="size-8 text-[var(--primary-color,#3b82f6)]" />
                    <h4 className="text-base font-medium">CSS</h4>
                  </Card>
                </div>
              </div>
              <div>
                <h3 className="mb-6 text-xl font-semibold text-[var(--primary-color,#3b82f6)]">Backend</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  <Card>
                    <FaNodeJs className="size-10 text-[var(--primary-color,#3b82f6)]" />
                    <h4 className="text-base font-medium">Node.js</h4>
                  </Card>
                  <Card>
                    <SiExpress className="size-8 text-[var(--primary-color,#3b82f6)]" />
                    <h4 className="text-base font-medium">Express.js</h4>
                  </Card>
                  <Card>
                    <FaPhp className="size-8 text-[var(--primary-color,#3b82f6)]" />
                    <h4 className="text-base font-medium">PHP</h4>
                  </Card>
                  <Card>
                    <FaLaravel className="size-8 text-[var(--primary-color,#3b82f6)]" />
                    <h4 className="text-base font-medium">Laravel</h4>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-xl font-semibold text-[var(--primary-color,#3b82f6)]">Database</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  <Card>
                    <DiMysql className="size-8 text-[var(--primary-color,#3b82f6)]" />
                    <h4 className="text-base font-medium">MySQL</h4>
                  </Card>
                  <Card>
                    <DiMongodb className="size-8 text-[var(--primary-color,#3b82f6)]" />
                    <h4 className="text-base font-medium">MongoDB</h4>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-xl font-semibold text-[var(--primary-color,#3b82f6)]">Tools & DevOps</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  <Card>
                    <DiGithub className="size-8 text-[var(--primary-color,#3b82f6)]" />
                    <h4 className="text-base font-medium">Github</h4>
                  </Card>
                  <Card>
                    <DiDocker className="size-8 text-[var(--primary-color,#3b82f6)]" />
                    <h4 className="text-base font-medium">Docker</h4>
                  </Card>
                  <Card>
                    <RiVercelLine className="size-8 text-[var(--primary-color,#3b82f6)]" />
                    <h4 className="text-base font-medium">Vercel</h4>
                  </Card>
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
