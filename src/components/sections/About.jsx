
import Reveal from "../animation/Reveal";

function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-24 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Image */}
        <Reveal>
          <div className="group overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80"
              alt="School campus"
              className="h-[450px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </Reveal>

        {/* Content */}
        <Reveal delay={0.15}>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              About Tula's
            </p>

            <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Enlightening through
              <span className="block text-blue-600">
                education.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Tula's International School is a co-educational residential
              school in Dehradun, offering education for students from
              Grade IV to XII.
            </p>

            <p className="mt-4 leading-7 text-slate-500">
              Spread across a 22-acre campus, Tula's combines academic
              learning with sports, creativity, technology and experiences
              that encourage students to explore their potential.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8">
              <div>
                <p className="text-3xl font-bold text-slate-900">
                  22
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Acre Campus
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-slate-900">
                  IV–XII
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Grades
                </p>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default About;