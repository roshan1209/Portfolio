import { useState } from "react"
import { Button } from "@/components/ui/button"

type Project = {
  title: string
  description: string
  tech: string[]
  details: string
}

const data: Project[] = [
    {
        title: "E-commerce Platform",
        description: "A full-featured online shopping platform with modern UI and secure transactions.",
        tech: ["Angular", "Bootstrap", "Firebase"],
        details:
            "Developed a scalable e-commerce solution with product catalog, advanced search, shopping cart, and checkout flow. Implemented Firebase authentication, real-time database for inventory management, and integrated secure payment gateways. Built an admin dashboard for product and order management."
    },
    {
        title: "News App",
        description: "A modern news application powered by third-party APIs.",
        tech: ["Next.js", "Tailwind CSS"],
        details:
            "Built a responsive news application using Next.js for server-side rendering and optimized performance. Integrated external APIs to fetch live headlines and articles across categories. Added features like search, category filtering, infinite scroll, and dark/light mode using TailwindCSS."
    },
    {
        title: "School Website",
        description: "A responsive school website with information management and contact features.",
        tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
        details:
            "Designed and developed a dynamic school website with sections for infrastructure, curriculum, extracurriculars, achievements, and announcements. Implemented a secure contact form with backend integration in Express.js and MongoDB. Added role-based authentication for admin to update content and manage inquiries."
    },
    {
        title: "YouTube Channel Site",
        description: "A video content platform inspired by YouTube, with modern UI and responsive design.",
        tech: ["React", "Tailwind CSS", "Material UI"],
        details:
          "Developed a YouTube-like video streaming site with React. Implemented video listing, search, and category filtering with responsive layouts using Tailwind CSS and Material UI components. Added watch pages with recommended videos and user interaction features like likes and subscriptions."
    },
    {
        title: "Student Management System",
        description: "A full-stack application for managing students, classes, and performance.",
        tech: ["React.js", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
        details:
          "Built a student management system with React frontend and Node.js backend. Features include student registration, class assignments, attendance tracking, and performance reports. Integrated Bootstrap for UI design and MongoDB for database management. Implemented role-based authentication for admin, teachers, and students."
    }
]

const Modal = ({ open, onClose, project }: { open: boolean; onClose: () => void; project: Project | null }) => {
  if (!open || !project) return null
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full sm:max-w-lg bg-card border border-border rounded-xl p-6 m-4 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">✕</button>
        </div>
        <div className="mt-4">
          <p className="text-sm leading-6">{project.details}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-md border border-border bg-muted/40">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Project | null>(null)

  const openModal = (p: Project) => {
    setSelected(p)
    setOpen(true)
  }

  return (
    <section id="projects" className="px-6 md:px-8 lg:px-12 xl:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tight">My Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of my best work. I'm passionate about creating clean, modern, and user-friendly web applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((p) => (
            <div key={p.title} className="group rounded-xl border border-border bg-card overflow-hidden">
              <div className="p-5">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="text-base text-muted-foreground mt-1">{p.description}</p>
              </div>
              <div className="px-5 pb-5 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {p.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md border border-border bg-muted/40">
                      {t}
                    </span>
                  ))}
                </div>
                <Button variant="outline" onClick={() => openModal(p)}>
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} project={selected} />
    </section>
  )
}

export default Projects
