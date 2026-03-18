import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg
              className="mr-1 h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Hex ring */}
              <polygon
                points="50,6 88,28 88,72 50,94 12,72 12,28"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.35"
                className="stroke-cyan-600"
              />
              {/* Left chevron < */}
              <polyline
                points="56,28 30,50 56,72"
                stroke="currentColor"
                strokeWidth="5"
                className="stroke-cyan-600"
              />
              {/* Right chevron > */}
              <polyline
                points="44,28 70,50 44,72"
                stroke="currentColor"
                strokeWidth="5"
                className="stroke-cyan-600"
              />
              {/* Center dot */}
              <circle cx="50" cy="50" r="5" className="fill-cyan-600" />
              {/* Corner nodes */}
              <circle
                cx="50"
                cy="6"
                r="3.5"
                className="fill-cyan-600"
                opacity="0.6"
              />
              <circle
                cx="88"
                cy="28"
                r="3.5"
                className="fill-cyan-600"
                opacity="0.6"
              />
              <circle
                cx="88"
                cy="72"
                r="3.5"
                className="fill-cyan-600"
                opacity="0.6"
              />
              <circle
                cx="50"
                cy="94"
                r="3.5"
                className="fill-cyan-600"
                opacity="0.6"
              />
              <circle
                cx="12"
                cy="72"
                r="3.5"
                className="fill-cyan-600"
                opacity="0.6"
              />
              <circle
                cx="12"
                cy="28"
                r="3.5"
                className="fill-cyan-600"
                opacity="0.6"
              />
            </svg>
          }
          name="George's Portfolio"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Projects</NavMenuItem>
        <NavMenuItem href="/">Home</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
