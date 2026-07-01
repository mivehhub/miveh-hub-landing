import Image from "next/image";

const services = [
  {
    title: "Web",
    copy: "Landing pages y sitios simples con estructura clara, diseño limpio y enfoque comercial.",
  },
  {
    title: "Contenido",
    copy: "Piezas visuales, ideas y formatos para comunicar mejor en redes, propuestas o canales digitales.",
  },
  {
    title: "Diseño",
    copy: "Identidad visual básica, presentaciones, plantillas y materiales que hacen que la marca se vea más ordenada y profesional.",
  },
];

const work = [
  {
    name: "Three29 Partners",
    type: "Landing corporativa",
    detail:
      "Landing corporativa minimal para una firma boutique enfocada en desarrollo de negocios y tecnología.",
  },
  {
    name: "Parfectionist",
    type: "Concepto de contenido",
    detail:
      "Concepto de contenido y comunidad alrededor del golf desde una narrativa auténtica y visual.",
  },
];

const workLayouts = [
  {
    card: "lg:col-span-7 lg:min-h-[30rem]",
    inner: "lg:min-h-[22rem]",
    title: "lg:text-[4.5rem]",
    description: "",
  },
  {
    card: "lg:col-span-5 lg:min-h-[30rem]",
    inner: "lg:min-h-[22rem]",
    title: "lg:text-[3.8rem]",
    description: "",
  },
];

const process = [
  {
    title: "Claridad",
    copy: "Ordenamos la idea, el objetivo y lo que la marca necesita comunicar.",
  },
  {
    title: "Diseño",
    copy: "Creamos una dirección visual limpia, funcional y alineada al negocio.",
  },
  {
    title: "Ejecución",
    copy: "Entregamos piezas listas para usar: web, contenido, plantillas o material comercial.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-10 flex items-center gap-3 text-[0.72rem] font-medium uppercase leading-none tracking-wideish text-white/50 sm:mb-12">
      <span className="h-px w-6 bg-purple/75" />
      {children}
    </p>
  );
}

function Button({
  children,
  href,
  external = false,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  external?: boolean;
  variant?: "primary" | "secondary";
}) {
  const styles =
    variant === "primary"
      ? "border-white bg-white text-ink hover:border-purple/70 hover:bg-transparent hover:text-white"
      : "border-white/[0.15] bg-transparent text-white hover:border-purple/60 hover:bg-deep hover:text-white";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex h-11 cursor-pointer items-center justify-center border px-7 text-[0.84rem] font-medium transition duration-300 ease-out active:translate-y-px sm:h-12 sm:px-8 ${styles}`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <header className="mx-auto flex w-full max-w-[88rem] items-center justify-between px-5 py-7 sm:px-8 lg:px-12 lg:py-9">
        <a href="#hero" className="font-sans text-xl font-light lowercase tracking-widest text-white transition duration-300 hover:opacity-85">miveh hub</a>
        <nav aria-label="Primary navigation" className="hidden gap-8 text-[0.82rem] font-medium tracking-[0.055em] text-white/50 md:flex">
          {["Servicios", "Proceso", "Proyectos", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item === "Proyectos" ? "work" : item.toLowerCase()}`}
              className="transition duration-300 hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section
        id="hero"
        className="relative mx-auto grid min-h-[calc(86vh-5.75rem)] w-full max-w-[88rem] content-center px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:min-h-[calc(88vh-6.5rem)] lg:px-12 lg:pt-24"
      >
        <div className="absolute right-5 top-20 hidden h-28 w-px bg-white/[0.1] md:block" />
        <div className="max-w-6xl">
          <p className="mb-7 text-[0.72rem] font-medium uppercase tracking-wideish text-white/50 sm:mb-9 sm:text-xs">
            web + contenido + diseño
          </p>
          <Image
            src="/logo-light-nav.png"
            alt="Miveh Hub"
            width={420}
            height={62}
            priority
            className="w-[374px] md:w-[605px] mb-6"
          />
          <p className="mt-8 max-w-[35.5rem] text-pretty text-[1.02rem] font-extralight leading-[1.68] text-white/50 sm:mt-10 sm:text-[1.26rem] sm:leading-[1.58]">
            Creamos presencia digital clara, visual y alineada para marcas que
            quieren verse más profesionales sin complicarse.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:mt-12 sm:flex-row">
            <Button href="#work">Ver proyectos</Button>
            <Button href="#contacto" variant="secondary">
              Hablemos
            </Button>
          </div>
        </div>

        <div className="mt-20 grid border-y border-white/[0.1] py-4 text-[0.72rem] font-medium uppercase leading-6 tracking-wideish text-white/50 sm:mt-20 sm:grid-cols-3 sm:py-5">
          <span>Digital studio</span>
          <span className="mt-3 sm:mt-0 sm:text-center">Editorial systems</span>
          <span className="mt-3 sm:mt-0 sm:text-right">Boutique delivery</span>
        </div>
      </section>

      <section id="servicios" className="mx-auto w-full max-w-[88rem] border-t border-white/[0.08] px-5 pb-32 pt-24 sm:px-8 lg:px-12 lg:pb-52 lg:pt-32">
        <SectionLabel>Servicios</SectionLabel>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          <h2 className="max-w-xl font-sans text-[clamp(2.6rem,5.5vw,4.75rem)] leading-[1]">
            Sistemas claros para marcas con más criterio.
          </h2>
          <div className="grid border-y border-white/[0.1]">
            {services.map((service) => (
              <article
                key={service.title}
                className="group grid gap-5 border-b border-white/[0.08] py-9 transition duration-300 last:border-b-0 hover:bg-deep sm:grid-cols-[9rem_1fr] sm:gap-12 sm:px-5 lg:py-10"
              >
                <h3 className="text-lg font-medium text-white">
                  {service.title}
                </h3>
                <p className="max-w-2xl text-base font-extralight leading-8 text-white/50 transition duration-300 group-hover:text-white">
                  {service.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="mx-auto w-full max-w-[88rem] px-5 py-28 sm:px-8 lg:px-12 lg:py-44">
        <SectionLabel>Proceso</SectionLabel>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.45fr] lg:gap-24">
          <h2 className="max-w-xl font-sans text-[clamp(2.6rem,5.5vw,4.75rem)] leading-[1]">
            Menos ruido. Más intención.
          </h2>
          <div className="grid gap-px border-y border-white/[0.1] bg-deep md:grid-cols-3 md:border md:border-white/[0.1]">
            {process.map((step, index) => (
              <article
                key={step.title}
                className="bg-ink p-7 transition duration-300 hover:bg-deep lg:p-8"
              >
                <span className="mb-12 block text-[0.72rem] font-medium uppercase tracking-wideish text-purple">
                  0{index + 1}
                </span>
                <h3 className="text-2xl font-medium">{step.title}</h3>
                <p className="mt-5 text-sm font-extralight leading-7 text-white/50">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto w-full max-w-[88rem] px-5 pb-32 pt-24 sm:px-8 lg:px-12 lg:pb-52 lg:pt-36">
        <SectionLabel>Proyectos</SectionLabel>
        <div className="mb-16 grid gap-9 sm:mb-20 lg:grid-cols-[1fr_27rem] lg:items-end">
          <h2 className="max-w-4xl font-sans text-[clamp(3.2rem,6.4vw,6.1rem)] leading-[0.94] text-balance">
            Proyectos
          </h2>
          <p className="max-w-[25rem] text-[1rem] font-extralight leading-[1.85] text-white/50 lg:pb-4">
            Una selección de sistemas visuales, landings y direcciones de contenido diseñados con claridad y criterio comercial.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-6">
          {work.map((project, index) => {
            const layout = workLayouts[index];

            return (
            <article
              key={project.name}
              className={`group relative overflow-hidden border border-white/[0.1] bg-ink px-6 py-9 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-purple/35 hover:bg-deep sm:px-8 sm:py-11 lg:px-11 lg:py-12 ${layout.card}`}
            >
              <div className={`flex h-full flex-col justify-between gap-16 ${layout.inner}`}>
                <div>
                  <p className="mb-16 text-[0.68rem] font-medium uppercase tracking-wideish text-white/50 transition duration-300 group-hover:text-white/70 sm:mb-20">
                    {project.type}
                  </p>
                  <h3 className={`max-w-[12ch] text-[clamp(2.2rem,5.8vw,4.3rem)] font-medium leading-[0.98] text-white ${layout.title}`}>
                    {project.name}
                  </h3>
                </div>
                <div className={`max-w-xl ${layout.description}`}>
                  <p className="text-base font-extralight leading-8 text-white/50 transition duration-300 group-hover:text-white">
                    {project.detail}
                  </p>
                  <p className="mt-8 inline-flex border-b border-purple/35 pb-1 text-[0.68rem] font-medium uppercase tracking-wideish text-white/50 transition duration-300 group-hover:border-purple/75 group-hover:text-white/70">
                    Explorar
                  </p>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </section>

      <section id="contacto" className="mx-auto w-full max-w-[88rem] px-5 py-28 sm:px-8 lg:px-12 lg:py-44">
        <div className="border-y border-white/[0.1] py-20 lg:py-28">
          <SectionLabel>Contacto</SectionLabel>
          <div className="grid gap-6 text-center lg:block">
            <div className="lg:mx-auto lg:max-w-5xl">
              <h2 className="mx-auto max-w-5xl font-sans text-[clamp(2.55rem,4.75vw,4.4rem)] leading-[1.02]">
                ¿Tienes una marca que necesita verse más clara y profesional?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-xl font-extralight leading-9 text-white/50 lg:mt-6">
                Hablemos y definimos qué necesita primero.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:mt-6 lg:justify-center">
              <Button
                href="https://wa.me/50660352525?text=Hola,%20vi%20Miveh%20Hub%20y%20me%20gustaría%20conversar%20sobre%20un%20proyecto."
                external
                variant="primary"
              >
                Escribir por WhatsApp
              </Button>
              <Button href="mailto:hello@mivehhub.com" variant="secondary">
                Enviar correo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-[88rem] flex-col gap-4 px-5 pb-8 text-[0.68rem] font-medium uppercase tracking-wideish text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <span className="flex items-center gap-2.5">
          <img
            src="/grape-icon.png"
            alt=""
            aria-hidden="true"
            className="h-4 w-4 opacity-75"
          />
          Miveh Hub
        </span>
        <span>web + contenido + diseño</span>
      </footer>
    </main>
  );
}
