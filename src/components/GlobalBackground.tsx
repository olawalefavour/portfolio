import { motion } from 'framer-motion'

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-paper">
      <motion.div
        className="absolute inset-[-10%]"
        style={{
          backgroundImage: 'radial-gradient(rgba(23,24,26,0.16) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '24px 24px', '0px 0px'],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          top: '-10%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(31,111,79,0.10), transparent 70%)',
        }}
        animate={{ x: [0, 80, -30, 0], y: [0, 60, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          bottom: '-10%',
          right: '-10%',
          background: 'radial-gradient(circle, rgba(31,111,79,0.08), transparent 70%)',
        }}
        animate={{ x: [0, -70, 40, 0], y: [0, -50, -90, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}