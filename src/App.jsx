import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import Navbar from './Navbar'
import Section from './components/Section'
import { Check, Rocket, Smartphone, Globe2, ArrowRight, Cog, Braces, MonitorSmartphone } from 'lucide-react'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-inset ring-white/20">
      {children}
    </span>
  )
}

function ServiceCard({ icon: Icon, title, desc, items }) {
  return (
    <div className="group rounded-2xl border border-white/15 bg-white/5 p-6 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-gradient-to-br from-fuchsia-500 via-sky-400 to-violet-600 p-2 text-white shadow">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>
      <p className="mt-3 text-white/80">{desc}</p>
      <ul className="mt-4 space-y-2">
        {items.map((it, idx) => (
          <li key={idx} className="flex items-center gap-2 text-white/80">
            <Check className="h-4 w-4 text-sky-300" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
      <button className="mt-5 inline-flex items-center gap-2 text-sky-200 hover:text-white">
        Learn more <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  )
}

function Step({ num, title, desc }) {
  return (
    <div className="relative rounded-2xl border border-white/15 bg-white/5 p-6">
      <div className="absolute -top-3 -left-3 h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 via-sky-400 to-violet-600 text-white flex items-center justify-center text-sm font-bold shadow">{num}</div>
      <h4 className="text-white font-semibold">{title}</h4>
      <p className="mt-2 text-white/80">{desc}</p>
    </div>
  )
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 text-center text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} BlueForge Labs. All rights reserved.</p>
      </div>
    </footer>
  )
}

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="min-h-screen bg-[#0b1020]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(217,70,239,0.12),transparent_40%)]" />
      </div>

      <Navbar />

      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center pt-28">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge><Rocket className="h-3.5 w-3.5" /> Futuristic Software Studio</Badge>
                <Badge>Web • iOS • Android</Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]">
                We build high-velocity apps for the next decade
              </h1>
              <p className="mt-4 text-lg text-white/85 max-w-xl">
                From design sprints to launch, we craft fast, scalable mobile and web experiences with a forward-looking, vibrant aesthetic.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-semibold shadow hover:shadow-lg transition">Start a project</a>
                <a href="#work" className="inline-flex items-center justify-center rounded-md bg-white/10 text-white px-5 py-3 text-sm font-semibold ring-1 ring-inset ring-white/20 hover:bg-white/15 transition">See our work</a>
              </div>
            </div>
            <div className="hidden md:block" />
          </div>
        </div>
      </section>

      <Section id="services" heading="Services" subheading="End-to-end software development for mobile and web">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard icon={MonitorSmartphone} title="Mobile Apps" desc="Native and cross-platform experiences that feel instant and delightful" items={["iOS & Android", "React Native", "App Store launch"]} />
          <ServiceCard icon={Globe2} title="Web Apps" desc="Fast, accessible, and scalable web platforms built for growth" items={["React frontends", "Backends & APIs", "Cloud & DevOps"]} />
          <ServiceCard icon={Braces} title="Custom Systems" desc="From prototypes to enterprise systems, we tailor software to your edge" items={["AI features", "Integrations", "Dashboards"]} />
        </div>
      </Section>

      <Section id="process" heading="Process" subheading="Transparent, collaborative, and optimized for speed">
        <div className="grid md:grid-cols-3 gap-6">
          <Step num="1" title="Discover & Design" desc="Align on goals, map the system, and craft high-fidelity prototypes." />
          <Step num="2" title="Build & Iterate" desc="Ship fast with weekly milestones, demos, and measurable progress." />
          <Step num="3" title="Launch & Scale" desc="Deploy, monitor, and evolve with data-driven improvements." />
        </div>
      </Section>

      <Section id="work" heading="Selected Work" subheading="A taste of recent projects">
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i)=>(
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-video bg-gradient-to-br from-fuchsia-500/30 via-sky-400/30 to-violet-600/30" />
              <div className="p-4">
                <h4 className="text-white font-semibold">Project {i}</h4>
                <p className="text-white/80 text-sm mt-1">Product design and full-stack development</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" heading="Start a project" subheading="Tell us about your idea and timeline">
        <form onSubmit={(e)=>e.preventDefault()} className="grid md:grid-cols-3 gap-4">
          <input className="col-span-3 md:col-span-1 rounded-md bg-white/10 px-4 py-3 text-white placeholder-white/60 ring-1 ring-inset ring-white/20 focus:outline-none focus:ring-sky-300/50" placeholder="Your name" />
          <input className="col-span-3 md:col-span-1 rounded-md bg-white/10 px-4 py-3 text-white placeholder-white/60 ring-1 ring-inset ring-white/20 focus:outline-none focus:ring-sky-300/50" placeholder="Email" />
          <input className="col-span-3 md:col-span-1 rounded-md bg-white/10 px-4 py-3 text-white placeholder-white/60 ring-1 ring-inset ring-white/20 focus:outline-none focus:ring-sky-300/50" placeholder="Company" />
          <textarea rows="4" className="col-span-3 rounded-md bg-white/10 px-4 py-3 text-white placeholder-white/60 ring-1 ring-inset ring-white/20 focus:outline-none focus:ring-sky-300/50" placeholder="What are you looking to build?" />
          <button className="col-span-3 inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-semibold shadow hover:shadow-lg transition">Request proposal</button>
        </form>
      </Section>

      <Footer />
    </div>
  )
}

export default App
