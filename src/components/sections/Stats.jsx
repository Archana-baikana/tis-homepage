
import { motion } from "framer-motion";
import Reveal from "../animation/Reveal";

function Stats() {
  const stats = [
    { value: "22", label: "Acre Campus" },
    { value: "16+", label: "Olympic Sports" },
    { value: "24×7", label: "Medical Assistance" },
    { value: "6:1", label: "Student-Teacher Ratio" },
  ];

  return (
    <section className="relative overflow-hidden bg-blue-600 px-6 py-20 text-white lg:px-8">
      {/* Background decoration */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-white"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group text-center lg:text-left"
              >
                <p className="text-4xl font-bold tracking-tight sm:text-5xl">
                  {stat.value}
                </p>

                <div className="mt-3 h-1 w-8 rounded-full bg-white/40 transition-all duration-300 group-hover:w-14 group-hover:bg-white" />

                <p className="mt-3 text-sm text-white/75 sm:text-base">
                  {stat.label}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;