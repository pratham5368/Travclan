import { Button, Highlight } from "../button";
import { Hero, HeroSubtitle, HeroTitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HomePageHero = () => (
  <Hero>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0"
      href="/"
      variant="secondary"
      size="small"
    >
      <span>Travclan - Built for scale your travel agency</span>{" "}
      <Highlight>→</Highlight>
    </Button>
    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      TravClan is a better way
      <br className="hidden md:block" /> to travel 
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
    Book B2B Flights, Hotels, & Packages. Create Travel Website
      <br className="hidden md:block" /> Effortlessly book and sell travel services, streamline operations, and boost profits
      roadmaps.
    </HeroSubtitle>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      href="/"
      variant="primary"
      size="large"
    >
      <span>Get Started</span>
      <Highlight>
        <ChevronIcon />
      </Highlight>
    </Button>
    <HeroImage />
  </Hero>
);
