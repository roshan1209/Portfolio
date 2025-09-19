import { Button } from "@/components/ui/button"
import { useTheme } from "@/context/ThemeContext"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useState } from "react"

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <nav className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur border-b">
      <div className="max-w-8xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={theme === "dark" ? "/logo/dark.png" : "/logo/light.png"}
            alt="Logo"
            className="h-12 w-auto"
          />
          <h5 className="text-lg font-semibold">Roshan Britto</h5>
        </div>
        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-2">
          <Button asChild variant="ghost">
            <a href="#about" onClick={close}>About</a>
          </Button>
          <Button asChild variant="ghost">
            <a href="#projects" onClick={close}>Projects</a>
          </Button>
          <Button asChild variant="ghost">
            <a href="#contact" onClick={close}>Contact</a>
          </Button>
          <Button variant="outline" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
        </div>
        {/* Mobile hamburger */}
        <div className="sm:hidden">
          <Button variant="outline" aria-label="Open menu" onClick={() => setOpen(v => !v)}>
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t bg-background/95 backdrop-blur">
          <div className="max-w-8xl mx-auto px-4 py-3 grid gap-2">
            <Button asChild variant="ghost" className="justify-start" onClick={close}>
              <a href="#about">About</a>
            </Button>
            <Button asChild variant="ghost" className="justify-start" onClick={close}>
              <a href="#projects">Projects</a>
            </Button>
            <Button asChild variant="ghost" className="justify-start" onClick={close}>
              <a href="#contact">Contact</a>
            </Button>
            <Button variant="outline" onClick={() => { toggleTheme(); close(); }} aria-label="Toggle theme" className="justify-start">
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
              <span className="ml-2">Toggle theme</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
