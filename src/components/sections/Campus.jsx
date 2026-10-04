
import { ArrowUpRight, Building2, Dumbbell, Users } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../animation/Reveal";

function Campus() {
  return (
    <section id="campus" className="bg-slate-50 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Campus Image */}
          <Reveal>
            <div className="group relative overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1400&q=80"
                alt="School campus"
                className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              {/* Campus badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/90 px-6 py-4 shadow-lg backdrop-blur-md"
              >
                <p className="text-2xl font-bold text-slate-900">22</p>
                <p className="text-sm text-slate-500">Acres of campus</p>
              </motion.div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={0.15}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                Campus Life
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                A campus designed
                <span className="block text-blue-600">
                  for discovery.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                From classrooms and sports facilities to spaces for
                creativity and collaboration, the campus provides students
                with an environment to learn, explore and grow.
              </p>

              {/* Campus features */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Dumbbell size={21} />
                  </div>

                  <p className="mt-4 text-lg font-bold text-slate-900">
                    Sports
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Opportunities to develop teamwork, discipline and
                    confidence.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Users size={21} />
                  </div>

                  <p className="mt-4 text-lg font-bold text-slate-900">
                    Community
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    A supportive environment for meaningful learning and
                    growth.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:col-span-2"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Building2 size={21} />
                  </div>

                  <p className="mt-4 text-lg font-bold text-slate-900">
                    Learning Spaces
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Spaces designed to support academics, creativity,
                    collaboration and exploration.
                  </p>
                </motion.div>
              </div>

              {/* CTA */}
              <a
                href="#admissions"
                className="group mt-8 inline-flex items-center gap-2 font-semibold text-blue-600"
              >
                Explore TIS

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Campus;