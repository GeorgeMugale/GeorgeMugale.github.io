import { GradientText, Section } from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-800 p-8 text-center shadow-2xl sm:p-12">
      <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
        Let's <GradientText>Connect</GradientText>
      </h2>
      <p className="mb-8 max-w-2xl text-lg text-gray-300">
        Whether you have a question about my code, a project proposal, or an
        opportunity to discuss, I'd love to hear from you.
      </p>

      {/* The Contact Form */}
      <form
        action="https://formspree.io/f/mreyrjgv"
        method="POST"
        className="w-full max-w-md space-y-4 text-left"
      >
        <input
          type="hidden"
          name="_next"
          value="https://georgemugale.github.io/success/"
        />
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
            className="w-full rounded-md border border-gray-600 bg-gray-900 px-4 py-3 text-gray-200 transition-colors placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
            className="w-full rounded-md border border-gray-600 bg-gray-900 px-4 py-3 text-gray-200 transition-colors placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full resize-none rounded-md border border-gray-600 bg-gray-900 px-4 py-3 text-gray-200 transition-colors placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-cyan-500 px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-cyan-400"
        >
          Send Message
        </button>
      </form>
    </div>
  </Section>
);

export { CTA };
