import { ButtonLink } from "@/shared/components/ui/button-link";
import { Container } from "@/shared/components/layout/container";

export function HeroSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl space-y-6">
          <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
            Dental Secondary
          </p>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Build a clean and scalable dental website foundation.
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            Your app is now structured for growth with clear feature boundaries, reusable UI components, and a lean
            App Router setup.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/#services">Explore Services</ButtonLink>
            <ButtonLink href="/#contact" variant="secondary">
              Book Consultation
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

