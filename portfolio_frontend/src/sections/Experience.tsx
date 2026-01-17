import React from "react"

const TimelineDot = ({
                       src,
                       ringColor,
                     }: {
  src: string
  ringColor?: string
}) => (
    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background ring-4 ring-background">
      <div
          className={`flex h-full w-full items-center justify-center rounded-full ${
              ringColor ?? "bg-muted"
          }`}
      >
        <img
            alt="logo"
            className="h-9 w-9 rounded-full object-cover"
            src={src}
        />
      </div>
    </div>
)

const Timeline = ({ children }: { children: React.ReactNode }) => (
    <div className="relative mt-10">
      {/* Vertical line */}
      <div className="absolute left-5 top-5 h-full w-px bg-border" />
      <div className="space-y-14">{children}</div>
    </div>
)

const TimelineRow = ({
                       logo,
                       title,
                       org,
                       period,
                       ringColor,
                     }: {
  logo: string
  title: string
  org: string
  period: string
  ringColor?: string
}) => (
    <div className="relative grid grid-cols-[auto_1fr] gap-x-6">
      <TimelineDot src={logo} ringColor={ringColor} />

      <div className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:shadow-md">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-foreground">
            {title}
          </h3>

          {org && (
              <p className="text-sm font-medium text-muted-foreground">
                {org}
              </p>
          )}

          <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground/80">
            {period}
          </p>
        </div>
      </div>
    </div>
)

const Experience = () => {
  return (
      <main className="flex flex-1 justify-center py-20">
        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Header */}
            <div className="mx-auto max-w-2xl text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">
                My Journey
              </h1>
              <p className="text-lg text-muted-foreground">
                From writing my first lines of code to building production-ready
                applications, my journey is driven by curiosity, ownership, and
                impact.
              </p>
            </div>

            {/* Experience */}
            <section className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">
                Experience
              </h2>

              <Timeline>
                <TimelineRow
                    logo="./logo/dark.png"
                    title="Freelancer"
                    org="Independent Projects"
                    period="Jul 2025 — Present"
                    ringColor="bg-primary/90 ring-2 ring-primary"
                />

                <TimelineRow
                    logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeC3M0mM1Btyx0tz68RyEytnDB0E7OVFNeFAidfrq5Kd6s51rhB8IG-9JGYVXMGKzgFFc&usqp=CAU"
                    title="Software Engineer"
                    org="Cartrabbit"
                    period="Jul 2023 — Jul 2025"
                />

                <TimelineRow
                    logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjFIezIDwAhOKM-M0VsFC0qFB2KQfKJSGPAw&s"
                    title="Web Developer Intern"
                    org="Amizhth Techno Solutions"
                    period="Jan 2023 — Apr 2023"
                />
              </Timeline>
            </section>

            {/* Education */}
            <section className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">
                Education
              </h2>

              <Timeline>
                <TimelineRow
                    logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJKhsh-UjtJbFeRY12c39bP0wUMFcYy60xg&s"
                    title="B.Sc. Computer Science"
                    org="Subbalakshmi Lakshmipathy College of Science"
                    period="2020 — 2023"
                />

                <TimelineRow
                    logo="https://schools.org.in/assets/images/favicon.png"
                    title="Higher Secondary Education"
                    org="E.B.G Matriculation Higher Secondary School"
                    period="2018 — 2020"
                />
              </Timeline>
            </section>
          </div>
        </div>
      </main>
  )
}

export default Experience
