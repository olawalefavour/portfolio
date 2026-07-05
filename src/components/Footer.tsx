export default function Footer() {
  return (
    <footer className="border-t border-line px-6 md:px-16 py-8 mt-24 flex flex-col md:flex-row justify-between gap-2 font-mono text-xs text-muted">
      <span>© {new Date().getFullYear()} Kolade Favour Olawale. Built with React.</span>
      <span>Ibadan, Nigeria</span>
    </footer>
  )
}