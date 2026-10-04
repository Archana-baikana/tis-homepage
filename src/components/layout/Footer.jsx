
function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
             <img
                src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png"
                alt="Tula's International School logo"
                className="h-16 w-16 object-contain"
                />

            <p className="mt-4 max-w-md leading-7 text-white/60">
              Tula's International School — the modern Gurukul,
              empowering students through education, character,
              creativity and holistic development.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold">
              Explore
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-white/60">
              <a
                href="#about"
                className="transition-colors hover:text-white"
              >
                About
              </a>

              <a
                href="#academics"
                className="transition-colors hover:text-white"
              >
                Academics
              </a>

              <a
                href="#campus"
                className="transition-colors hover:text-white"
              >
                Campus
              </a>

              <a
                href="#admissions"
                className="transition-colors hover:text-white"
              >
                Admissions
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm leading-6 text-white/60">
              <p>
                Dhoolkot, P.O. – Selaqui,
                <br />
                Chakrata Road, Dehradun-248011
                <br />
                Uttarakhand, India
              </p>

              <a
                href="tel:+919837983791"
                className="block transition-colors hover:text-white"
              >
                +91-9837983791
              </a>

              <a
                href="mailto:info@tis.edu.in"
                className="block transition-colors hover:text-white"
              >
                info@tis.edu.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 Tula's International School. All rights reserved.
            </p>

            <a
              href="https://tis.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Official Website
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;