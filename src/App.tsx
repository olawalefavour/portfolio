import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import GlobalBackground from './components/GlobalBackground'
import Home from './page/Home'
import Story from './page/Story'
import Experience from './page/Experience'
import Projects from './page/Projects'
import DesignWork from './page/DesignWork'
import Contact from './page/Contact'

function Placeholder({ name }: { name: string }) {
  return <div className="px-6 md:px-16 pt-16 md:pt-24"><h1 className="font-display text-3xl">{name}</h1></div>
}

export default function App() {
  return (
    <div className="min-h-screen text-ink font-body">
      <GlobalBackground />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/system-design" element={<Placeholder name="System Design" />} />
          <Route path="/design-work" element={<DesignWork />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </div>
  )
}