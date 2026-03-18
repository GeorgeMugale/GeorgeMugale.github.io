import {
  GradientText,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  // The main wrapper with a dark background and min-height to take up most of the screen
  <div className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-gray-900">
    {/* === BACKGROUND IMAGE SECTION (Right Side) === */}
    <div className="absolute right-0 top-0 z-0 h-full w-full md:w-3/4 lg:w-[60%]">
      {/* 1. Fades the left side of the image into the background */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent"></div>

      {/* 2. Fades the bottom edge of the image so it doesn't cut off sharply */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

      {/* 3. The Image: object-cover handles vertical images perfectly by filling the space */}
      <img
        className="h-full w-full object-cover object-[center_25%] opacity-50 grayscale transition-opacity duration-700 hover:opacity-70 hover:grayscale-0"
        src="/assets/images/avatar.png"
        alt="George Mugale"
        loading="eager"
      />
    </div>

    {/* === FOREGROUND TEXT SECTION (Left Side) === */}
    <Section>
      <div className="relative z-20 w-full py-20 md:w-2/3 lg:w-[55%]">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
          Hello World! <br /> I'm <GradientText>George</GradientText>
        </h1>

        <p className="mb-10 text-lg font-light leading-relaxed text-gray-300 md:text-xl">
          Full-Stack Software Developer with a BSc in Computer Science
          (Distinction). I specialize in building scalable web applications and
          authoring{' '}
          <a
            className="text-cyan-400 transition-colors hover:text-cyan-300 hover:underline"
            href="https://github.com/GeorgeMugale"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-source developer tools
          </a>
          . From designing robust, secure backend architectures to deploying
          cloud-native infrastructure, I am passionate about crafting
          high-performance solutions that solve complex{' '}
          <a
            className="text-cyan-400 transition-colors hover:text-cyan-300 hover:underline"
            href="/posts"
          >
            system design
          </a>{' '}
          challenges.
        </p>

        {/* Social Buttons */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/george-mugale-2175892b2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="LinkedIn icon"
            />
          </a>
          <a
            href="https://github.com/GeorgeMugale"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="GitHub icon"
            />
          </a>
          <a
            href="mailto:georgeapril202020@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroSocial src="/assets/images/gmail-icon.png" alt="Email icon" />
          </a>
          <a
            href="/assets/docs/George-CV.pdf"
            download="George_Mugale_CV.pdf"
            className="flex items-center gap-2 rounded-lg bg-cyan-500 px-7 py-3 font-bold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-[0_10px_20px_rgba(34,211,238,0.3)]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </Section>
  </div>
);

export { Hero };
