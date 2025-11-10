import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  const NavLink = ({ id, children }) => (
    <button onClick={() => scrollToId(id)} className="text-sm md:text-base text-white/90 hover:text-white transition-colors">
      {children}
    </button>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-xl mt-4 bg-white/10 backdrop-blur-md border border-white/20 px-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 via-sky-400 to-violet-600 shadow-md"></div>
            <span className="text-white font-semibold tracking-tight">BlueForge Labs</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink id="services">Services</NavLink>
            <NavLink id="process">Process</NavLink>
            <NavLink id="work">Work</NavLink>
            <NavLink id="contact">Contact</NavLink>
            <a href="#contact" onClick={(e)=>{e.preventDefault();scrollToId('contact')}} className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-4 py-2 text-sm font-medium shadow hover:shadow-lg transition-shadow">Start a Project</a>
          </nav>
          <button className="md:hidden text-white" onClick={()=>setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 flex flex-col gap-3">
            <NavLink id="services">Services</NavLink>
            <NavLink id="process">Process</NavLink>
            <NavLink id="work">Work</NavLink>
            <NavLink id="contact">Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
