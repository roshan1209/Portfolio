import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || ""
  const GITHUB_URL = import.meta.env.VITE_GITHUB_URL || "#"
  const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || "#"
  const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || "#"

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!WHATSAPP_NUMBER) {
      console.warn("VITE_WHATSAPP_NUMBER is not set")
      return
    }

    const text = encodeURIComponent(
        `Hi Roshan \n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}`
    )

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    window.open(whatsappUrl, "_blank")
  }

  return (
      <section id="contact" className="px-4 md:px-10 lg:px-20 xl:px-40 bg-muted/30 flex justify-center py-24">
        <div className="w-full max-w-4xl">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Let’s build something amazing together.
            </h2>
            <p className="text-lg text-muted-foreground">
              I'm always open to discussing new projects and opportunities.
            </p>
          </div>

          {/* Form */}
          <div className="bg-muted dark:bg-card border border-border rounded-xl p-8 md:p-12 w-full">
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                      type="text"
                      placeholder="Your Name"
                      className="form-input block w-full rounded-lg border-input bg-background h-12 px-4"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                      type="email"
                      placeholder="Your Email"
                      className="form-input block w-full rounded-lg border-input bg-background h-12 px-4"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                    placeholder="Your Message"
                    className="form-textarea block w-full rounded-lg border-input bg-background min-h-[160px] p-4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
              </div>

              <div className="flex justify-center pt-4">
                <Button type="submit" className="h-12 px-8">
                  Send via WhatsApp
                </Button>
              </div>
            </form>
          </div>

          {/* Other ways to connect */}
          <div className="mt-16">
            <h3 className="text-sm font-semibold text-center tracking-wide text-muted-foreground mb-4">
              OTHER WAYS TO CONNECT
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp */}
              <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
                  <FaWhatsapp className="h-6 w-6" />
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-medium">WhatsApp</span>
                  <span className="text-sm text-muted-foreground">
          {WHATSAPP_NUMBER}
        </span>
                </div>
              </a>

              {/* Email */}
              <a
                  href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-red-600">
                  <SiGmail className="h-6 w-6" />
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-medium">Email</span>
                  <span className="text-sm text-muted-foreground">
          {import.meta.env.VITE_CONTACT_EMAIL}
        </span>
                </div>
              </a>
            </div>
          </div>


          <div className="flex justify-center items-center gap-6 mt-12">
            <a className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
               href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <div
                  className="rounded-full bg-card border border-border group-hover:bg-primary/10 group-hover:border-primary p-4 transition-all">
                <svg className="group-hover:text-primary text-muted-foreground" fill="currentColor" height="24px"
                     viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                </svg>
              </div>
              <p className="text-sm font-medium">GitHub</p>
            </a>
            <a className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
               href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <div
                  className="rounded-full bg-card border border-border group-hover:bg-primary/10 group-hover:border-primary p-4 transition-all">
                <svg className="group-hover:text-primary text-muted-foreground" fill="currentColor" height="24px"
                     viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                </svg>
              </div>
              <p className="text-sm font-medium">LinkedIn</p>
            </a>
            <a className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram profile">
              <div
                  className="rounded-full bg-card border border-border group-hover:bg-primary/10 group-hover:border-primary p-4 transition-all">
                <svg
                    className="group-hover:text-primary text-muted-foreground"
                    fill="currentColor"
                    height="24px"
                    viewBox="0 0 256 256"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                </svg>
              </div>
              <p className="text-sm font-medium">Instagram</p>
            </a>

          </div>
        </div>
      </section>
  )
}

export default Contact
