import { useState } from 'react'
import { Button } from '@/components/ui/button'

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const TO_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || ""
  const GITHUB_URL = import.meta.env.VITE_GITHUB_URL || "#"
  const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || "#"

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`New message from ${name || 'Portfolio'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    const mailto = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`
    if (!TO_EMAIL) {
      console.warn('VITE_CONTACT_EMAIL is not set. Opening mail client without recipient.')
    }
    window.location.href = mailto
  }

  return (
    <section id="contact" className="px-4 md:px-10 lg:px-20 xl:px-40 flex justify-center py-24">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Let’s build something amazing together.</h2>
          <p className="text-lg text-muted-foreground">I'm always open to discussing new projects and opportunities.</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 md:p-12 w-full">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="form-input block w-full rounded-lg border-input bg-background focus:border-ring focus:ring-ring placeholder-muted-foreground h-12 px-4"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="form-input block w-full rounded-lg border-input bg-background focus:border-ring focus:ring-ring placeholder-muted-foreground h-12 px-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="form-textarea block w-full rounded-lg border-input bg-background focus:border-ring focus:ring-ring placeholder-muted-foreground min-h-[160px] p-4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-center pt-4">
              <Button type="submit" className="h-12 px-8">
                <span className="truncate">Send Message</span>
              </Button>
            </div>
          </form>
        </div>

        <div className="flex justify-center items-center gap-6 mt-12">
          <a className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors" href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <div className="rounded-full bg-card border border-border group-hover:bg-primary/10 group-hover:border-primary p-4 transition-all">
              <svg className="group-hover:text-primary text-muted-foreground" fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
              </svg>
            </div>
            <p className="text-sm font-medium">GitHub</p>
          </a>
          <a className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors" href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <div className="rounded-full bg-card border border-border group-hover:bg-primary/10 group-hover:border-primary p-4 transition-all">
              <svg className="group-hover:text-primary text-muted-foreground" fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
              </svg>
            </div>
            <p className="text-sm font-medium">LinkedIn</p>
          </a>
        </div>

        <footer className="mt-20 py-8 border-t border-border text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-6">
            <a className="text-muted-foreground hover:text-primary text-base font-normal transition-colors" href="#">Home</a>
            <a className="text-muted-foreground hover:text-primary text-base font-normal transition-colors" href="#projects">Projects</a>
            <a className="text-muted-foreground hover:text-primary text-base font-normal transition-colors" href="#contact">Contact</a>
          </div>
          <p className="text-muted-foreground/90 text-sm">© 2025 Roshan Britto. All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
