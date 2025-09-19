const TimelineDot = ({ src, ringColor }: { src: string; ringColor?: string }) => (
  <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background ring-4 ring-background">
    <div className={`flex h-full w-full items-center justify-center rounded-full ${ringColor ?? "bg-muted"}`}>
      <img alt="logo" className="h-8 w-8 rounded-full object-cover" src={src} />
    </div>
  </div>
)

const Timeline = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mt-8">
    <div className="absolute left-3.5 top-3.5 h-full w-0.5 bg-border" />
    <div className="space-y-12">{children}</div>
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
    <div className="flex flex-col gap-0.5 pt-1">
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-base text-muted-foreground">{org}</p>
      <p className="text-sm text-muted-foreground/70">{period}</p>
    </div>
  </div>
)

const Experience = () => {
  return (
    <main className="flex flex-1 justify-center py-16 sm:py-20 md:py-24">
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience</h2>
            <Timeline>
              <TimelineRow
                logo="./logo/dark.png"
                title="Freelancer"
                org=""
                period="Jul 2025 - Present"
                ringColor="bg-primary/90 ring-2 ring-primary"
              />
              <TimelineRow
                logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeC3M0mM1Btyx0tz68RyEytnDB0E7OVFNeFAidfrq5Kd6s51rhB8IG-9JGYVXMGKzgFFc&usqp=CAU"
                title="Software Engineer"
                org="Cartrabbit"
                period="Jul 2023 - Jul 2025"
              />
              <TimelineRow
                logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjFIezIDwAhOKM-M0VsFC0qFB2KQfKJSGPAw&s"
                title="Web Developer Intern"
                org="Amizhth Techno Solutions"
                period="Jan 2023 - Apr 2023"
              />
            </Timeline>
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Education</h2>
            <Timeline>
              <TimelineRow
                logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJKhsh-UjtJbFeRY12c39bP0wUMFcYy60xg&s"
                title="Bachelor of Science in Computer Science"
                org="Subbalakshmi Lakshmipathy College of Science"
                period="2020 - 2023"
              />
              <TimelineRow
                logo="https://schools.org.in/assets/images/favicon.png"
                title="Higher Secondary Education"
                org="E.B.G Matriculation Higher Secondary School"
                period="2018 - 2020"
              />
            </Timeline>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Experience


