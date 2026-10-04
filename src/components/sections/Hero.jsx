
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=80"
          alt="School campus"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/70" />

        {/* Animated light effect */}
        <motion.div
          className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
          >
            <Sparkles size={16} className="text-blue-400" />

            <span className="text-sm font-medium text-white/90">
              The Modern Gurukul
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-8xl"
          >
            Enlightening Through
            <span className="block text-blue-400">
              Education.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl"
          >
            Discover a learning environment where academic excellence,
            character, leadership, sports and creativity come together
            to shape confident global citizens.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#admissions"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-500/20"
            >
              Explore Admissions

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-semibold backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              <Play size={17} />

              Discover TIS
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-14 flex flex-wrap gap-8 border-t border-white/20 pt-7"
          >
            <div>
              <p className="text-2xl font-bold">22</p>
              <p className="mt-1 text-sm text-white/60">
                Acre Campus
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">16+</p>
              <p className="mt-1 text-sm text-white/60">
                Olympic Sports
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">IV–XII</p>
              <p className="mt-1 text-sm text-white/60">
                Grades
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-xs uppercase tracking-[0.25em] text-white/50">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-8 w-px bg-white/40"
        />
      </motion.div>
    </section>
  );
}

export default Hero;