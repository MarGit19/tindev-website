import { ReactNode } from "react";
import Image from "next/image";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Container, Section, Divider, QuietLink, PrimaryButton } from "@/components/ui";

type MetaItem = { label: string; value: string };

type GalleryItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export default function CaseStudyLayout({
  title,
  subtitle,
  meta,
  overview,
  goals,
  role,
  stack,
  timeline,
  challenges,
  solution,
  results,
  gallery,
  cta,
}: {
  title: string;
  subtitle?: string;
  meta?: MetaItem[];
  overview: ReactNode;
  goals?: string[];
  role?: string[];
  stack?: string[];
  timeline?: string;
  challenges?: string[];
  solution?: ReactNode;
  results?: string[];
  gallery?: GalleryItem[];
  cta?: { primaryHref: string; primaryLabel: string; secondaryHref?: string; secondaryLabel?: string };
}) {
  return (
    <>
      <Nav />

      <Section pad="pt-28 pb-16">
        <Container className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-light">{title}</h1>
          {subtitle && <p className="mt-3 text-graphite text-lg">{subtitle}</p>}

          {meta?.length ? (
            <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
              {meta.map((m, i) => (
                <div key={i}>
                  <div className="text-graphite">{m.label}</div>
                  <div className="text-ink">{m.value}</div>
                </div>
              ))}
            </div>
          ) : null}
        </Container>
      </Section>
      <Divider />

      <Section>
        <Container className="max-w-3xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-light">Overview</h2>
          <div className="text-ink/90">{overview}</div>

          <div className="grid md:grid-cols-3 gap-8 pt-4">
            {goals?.length ? <Block title="Goals"><ul className="space-y-2 text-sm">{goals.map((g,i)=><li key={i}>• {g}</li>)}</ul></Block> : null}
            {role?.length ? <Block title="Role"><ul className="space-y-2 text-sm">{role.map((r,i)=><li key={i}>• {r}</li>)}</ul></Block> : null}
            {(stack?.length || timeline) ? (
              <Block title="Tech & Timeline">
                {stack && <ul className="space-y-1 text-sm mb-3">{stack.map((s,i)=><li key={i}>• {s}</li>)}</ul>}
                {timeline && <div className="text-sm text-graphite">Timeline: {timeline}</div>}
              </Block>
            ) : null}
          </div>
        </Container>
      </Section>

      {(challenges?.length || solution) && (
        <Section>
          <Container className="grid md:grid-cols-2 gap-12 max-w-5xl">
            {challenges?.length ? (
              <div>
                <h3 className="text-xl md:text-2xl font-light">Challenges</h3>
                <ul className="mt-4 space-y-2 text-sm">{challenges.map((c,i)=><li key={i}>• {c}</li>)}</ul>
              </div>
            ) : null}
            {solution ? (
              <div>
                <h3 className="text-xl md:text-2xl font-light">Solution</h3>
                <div className="mt-4 text-ink/90">{solution}</div>
              </div>
            ) : null}
          </Container>
        </Section>
      )}

      {results?.length ? (
        <Section>
          <Container className="max-w-3xl">
            <h3 className="text-xl md:text-2xl font-light">Results</h3>
            <ul className="mt-4 space-y-2 text-sm">{results.map((r,i)=><li key={i}>• {r}</li>)}</ul>
          </Container>
        </Section>
      ) : null}

      {gallery?.length ? (
        <Section>
          <Container className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {gallery.map((g, i) => (
              <figure key={i} className="border border-zinc-200 rounded-md p-2">
                <div className={g.className ?? ""}>
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={g.width}
                    height={g.height}
                    className="rounded-sm w-full h-auto"
                    priority={g.priority}
                    sizes={g.sizes ?? "(max-width: 768px) 100vw, 50vw"}
                  />
                </div>
                {g.caption && <figcaption className="text-xs text-graphite mt-2">{g.caption}</figcaption>}
              </figure>
            ))}
          </Container>
        </Section>
      ) : null}

      {cta && (
        <Section pad="py-28">
          <Container className="text-center max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-light">Build something meaningful.</h3>
            <p className="mt-4 text-graphite">Tell us your goals—we’ll suggest a focused path forward.</p>
            <div className="mt-8 flex items-center justify-center gap-4">
              {cta.primaryHref && <PrimaryButton href={cta.primaryHref}>{cta.primaryLabel}</PrimaryButton>}
              {cta.secondaryHref && <QuietLink href={cta.secondaryHref}>{cta.secondaryLabel}</QuietLink>}
            </div>
          </Container>
        </Section>
      )}

      <Footer />
    </>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <div className="text-graphite text-sm mb-1">{title}</div>
      {children}
    </div>
  );
}
