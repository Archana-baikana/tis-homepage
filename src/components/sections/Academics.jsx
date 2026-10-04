
import { BookOpen, FlaskConical, Palette, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../animation/Reveal";

function Academics() {
  const programs = [
    {
      icon: BookOpen,
      title: "Academic Learning",
      description:
        "Build strong foundations through engaging classroom learning and a curiosity-driven approach.",
    },
    {
      icon: FlaskConical,
      title: "Science & Innovation",
      description:
        "Encourage students to explore, experiment and develop problem-solving skills.",
    },
    {
      icon: Palette,
      title: "Arts & Creativity",
      description:
        "Discover creativity through art, music, culture and expressive activities.",
    },
    {
      icon: Dumbbell,
      title: "Sports & Fitness",
      description:
        "Develop teamwork, discipline and confidence through sports and physical activities.",
    },
  ];

  return (
    <section id="academics" className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Academics & Beyond
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Learning that goes
              <span className="block text-blue-600">
                beyond the classroom.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We create opportunities for students to learn, explore and
              discover their potential across academics, creativity and
              physical development.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <Reveal key={program.title} delay={index * 0.12}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="group relative h-full overflow-hidden rounded-3xl bg-slate-950 p-7 text-white shadow-sm transition-shadow duration-300 hover:shadow-2xl"
                >
                  {/* Background glow */}
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-600/10 blur-2xl transition-all duration-500 group-hover:bg-blue-600/30" />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: -6, scale: 1.1 }}
                    transition={{ duration: 0.25 }}
                    className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-400 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white"
                  >
                    <Icon size={26} />
                  </motion.div>

                  <h3 className="relative mt-7 text-xl font-bold">
                    {program.title}
                  </h3>

                  <p className="relative mt-3 leading-7 text-white/60">
                    {program.description}
                  </p>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Academics;