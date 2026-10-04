
import { BookOpen, Trophy, Globe, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../animation/Reveal";

function WhyChooseUs() {
  const features = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description:
        "A learning environment that encourages curiosity, knowledge and strong academic foundations.",
    },
    {
      icon: Trophy,
      title: "Beyond Academics",
      description:
        "Students develop through sports, creativity, activities and leadership opportunities.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description:
        "Students build the confidence and skills needed to engage with the wider world.",
    },
    {
      icon: Heart,
      title: "Holistic Development",
      description:
        "We focus on developing responsible, confident and well-rounded individuals.",
    },
  ];

  return (
    <section className="bg-slate-50 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Why Choose TIS
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              More than a school.
              <span className="block text-blue-600">
                A place to grow.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              At TIS, education extends beyond the classroom. Students are
              encouraged to discover their strengths, develop confidence and
              prepare for the future.
            </p>
          </div>
        </Reveal>

        {/* Feature cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal key={feature.title} delay={index * 0.12}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-2xl"
                >
                  {/* Decorative glow */}
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-[2]" />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.08 }}
                    transition={{ duration: 0.25 }}
                    className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white"
                  >
                    <Icon size={25} />
                  </motion.div>

                  <h3 className="relative mt-7 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="relative mt-3 leading-7 text-slate-500">
                    {feature.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;