import { Button } from "@/components/ui/button"
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJs,
} from "react-icons/fa"
import {
  RiNextjsLine,
  RiVercelLine,
} from "react-icons/ri"
import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
} from "react-icons/si"
import {
  DiMysql,
  DiMongodb,
  DiDocker,
  DiGithub,
} from "react-icons/di"
import { TbBrandReactNative } from "react-icons/tb"
import React from "react";

const CapabilityCard = ({
                          title,
                          description,
                        }: {
  title: string
  description: string
}) => (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
)

const TechBadge = ({
                     icon,
                     label,
                   }: {
  icon: React.ReactNode
  label: string
}) => (
    <div className="flex items-center flex-wrap gap-3 min-w-[160px] rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium shadow-sm">
      <span className="text-xl text-blue-600">{icon}</span>
      {label}
    </div>
)

const About = () => {
  return (
      <section id="about" className="w-full bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-24">

          {/* Header */}
          <div className="relative mx-auto max-w-3xl text-center space-y-6">
            <div className="absolute inset-0 -z-10 flex justify-center">
              <div className="h-32 w-32 rounded-full bg-blue-500/10 blur-3xl"/>
            </div>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50 px-4 py-1
            text-md font-medium text-blue-600 dark:text-gray-50 dark:border-blue-900/50 dark:bg-blue-950">
              About Me
            </span>
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Building Digital Products
              <span className="block text-blue-600">
      That Scale
    </span>
            </h1>

            {/* Description */}
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I help businesses design and build scalable web and mobile applications
              with a strong focus on performance, maintainability, and real-world impact.
            </p>
          </div>


          {/* Capabilities */}
          <div className="grid gap-8 md:grid-cols-4">
            <CapabilityCard
                title="Custom Web Applications"
                description="Design and development of scalable, secure web applications tailored to business needs."
            />
            <CapabilityCard
                title="Mobile App Development"
                description="Cross-platform mobile apps using React Native, delivering consistent UX across Android and iOS."
            />
            <CapabilityCard
                title="Performance Optimization"
                description="Improving speed, UX, and SEO through efficient rendering, caching, and API optimization."
            />
            <CapabilityCard
                title="System Architecture"
                description="Clean, modular system design that scales smoothly and minimizes long-term technical debt."
            />
          </div>

          {/* Tech Stack */}
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-center">
              Technology I Work With
            </h2>

            <div className="grid gap-10">

              {/* Frontend & Mobile */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-blue-600">
                  Frontend & Mobile
                </h3>
                <div className="flex flex-wrap gap-4">
                  <TechBadge icon={<RiNextjsLine />} label="Next.js" />
                  <TechBadge icon={<FaReact />} label="React" />
                  <TechBadge icon={<TbBrandReactNative />} label="React Native" />
                  <TechBadge icon={<FaJs />} label="JavaScript" />
                  <TechBadge icon={<SiTypescript />} label="TypeScript" />
                  <TechBadge icon={<SiTailwindcss />} label="Tailwind CSS" />
                  <TechBadge icon={<FaHtml5 />} label="HTML5" />
                  <TechBadge icon={<FaCss3 />} label="CSS3" />
                </div>
              </div>

              {/* Backend */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-blue-600">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-4">
                  <TechBadge icon={<FaNodeJs />} label="Node.js" />
                  <TechBadge icon={<SiExpress />} label="Express.js" />
                </div>
              </div>

              {/* Database & DevOps */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-blue-600">
                  Database & DevOps
                </h3>
                <div className="flex flex-wrap gap-4">
                  <TechBadge icon={<DiMysql />} label="MySQL" />
                  <TechBadge icon={<DiMongodb />} label="MongoDB" />
                  <TechBadge icon={<DiDocker />} label="Docker" />
                  <TechBadge icon={<DiGithub />} label="GitHub" />
                  <TechBadge icon={<RiVercelLine />} label="Vercel" />
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold">
              Ready to build your next product?
            </h3>
            <p className="text-muted-foreground">
              Let’s discuss how I can help bring your idea to life.
            </p>

            <Button className="h-12 px-6 bg-blue-700 text-white shadow-lg
              hover:scale-105 hover:shadow-xl hover:bg-blue-500
              active:scale-95
              transition-all duration-300">
              <a href="#contact" className="flex items-center">
                  Let's Talk
              </a>
            </Button>
          </div>

        </div>
      </section>
  )
}

export default About
