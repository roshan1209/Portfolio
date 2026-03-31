import { useState } from "react"
import { Button } from "@/components/ui/button"
import projects from "../data/projects.json"

type Project = {
    title: string
    description: string
    tech: string[]
    details: string
    image: string
    demo: string
}

const Modal = ({
                   open,
                   onClose,
                   project
               }: {
    open: boolean
    onClose: () => void
    project: Project | null
}) => {
    if (!open || !project) return null

    return (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative z-10 w-full sm:max-w-lg bg-card border border-border rounded-xl overflow-hidden m-4 shadow-xl">

                <div className="h-48 w-full">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                {project.description}
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-muted-foreground hover:text-foreground"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="mt-4">
                        <p className="text-sm leading-6">{project.details}</p>
                    </div>

                    {/* TECH */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="text-xs px-2 py-1 rounded-md border border-border bg-muted/40"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* ACTIONS */}
                    {project.demo && (
                    <div className="mt-6 flex justify-center">
                        <Button asChild>
                            <a href={project.demo} target="_blank">
                                🚀 Live Demo
                            </a>
                        </Button>
                    </div>
                    )}
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
                {/* HEADER */}
                <div className="flex flex-col items-center text-center gap-4 mb-12">
                    <h2 className="text-4xl font-bold tracking-tight">My Work</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        A collection of my best work. I'm passionate about creating clean, modern, and user-friendly web applications.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(projects as Project[]).map((p) => (
                        <div
                            key={p.title}
                            onClick={() => openModal(p)}
                            className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition"
                        >
                            {/* IMAGE */}
                            <div className="h-40 w-full overflow-hidden">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition"
                                />
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-bold">{p.title}</h3>
                                <p className="text-base text-muted-foreground mt-1">
                                    {p.description}
                                </p>
                            </div>

                            <div className="px-5 pb-5 flex items-center justify-between gap-1">
                                <div className="flex flex-wrap gap-2">
                                    {p.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs px-2 py-1 rounded-md border border-border bg-muted/40"
                                        >
                                          {t}
                                        </span>
                                    ))}
                                </div>
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