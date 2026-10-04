
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../animation/Reveal";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Tula's gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped our child discover their strengths.",
      name: "Namita Agarwal",
      role: "Parent",
    },
    {
      quote:
        "We are happy and satisfied with the wonderful experience of our child at Tula's. The teachers are supportive and always available when needed.",
      name: "Pinky Sharma",
      role: "Parent",
    },
    {
      quote:
        "Our daughter is very much satisfied with the facilities offered at Tula's, including education, extra-curricular activities, recreation and hygiene.",
      name: "Gulabdas Gupta",
      role: "Parent",
    },
  ];

  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              From Our Parents
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              What parents
              <span className="block text-blue-600">
                say about TIS.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Hear how families experience academics, activities and
              overall student development at TIS.
            </p>
          </div>
        </Reveal>

        {/* Testimonials */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.12}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                {/* Quote icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white transition-transform duration-300 group-hover:scale-110">
                  <Quote size={21} />
                </div>

                {/* Stars */}
                <div className="mt-6 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      className="fill-current text-amber-400"
                    />
                  ))}
                </div>

                <p className="mt-6 text-lg leading-8 text-slate-700">
                  "{testimonial.quote}"
                </p>

                <div className="mt-7 border-t border-slate-200 pt-5">
                  <p className="font-bold text-slate-900">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {testimonial.role}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;