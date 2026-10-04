
import { ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../animation/Reveal";

function Admissions() {
  return (
    <section
      id="admissions"
      className="bg-slate-950 px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-blue-600 px-8 py-14 shadow-2xl sm:px-12 lg:px-16 lg:py-16">
            {/* Decorative shapes */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.08, 0.15, 0.08],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white"
            />

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.06, 0.12, 0.06],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-white"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              {/* Content */}
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                  <CalendarDays size={17} />
                  <span className="text-sm font-medium">
                    Admissions Open
                  </span>
                </div>

                <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  Give your child a place
                  <span className="block text-white/70">
                    to discover and grow.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                  Explore the TIS experience and take the next step
                  towards an enriching school journey.
                </p>

                {/* Small benefits */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <div className="flex items-center gap-2 text-sm text-white/85">
                    <CheckCircle2 size={17} />
                    Holistic learning
                  </div>

                  <div className="flex items-center gap-2 text-sm text-white/85">
                    <CheckCircle2 size={17} />
                    Sports & activities
                  </div>

                  <div className="flex items-center gap-2 text-sm text-white/85">
                    <CheckCircle2 size={17} />
                    Residential education
                  </div>
                </div>
              </div>

              {/* CTA */}
              <motion.a
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.97 }}
                href="https://tis.edu.in/boarding-school/admission-open/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
              >
                Explore Admissions

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Admissions;