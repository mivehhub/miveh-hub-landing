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
    name: "NAOS",
    type: "Visual direction",
    detail:
      "Dirección visual y estructura de contenido para elevar la presencia digital de una marca en crecimiento.",
  },
  {
    name: "Three29 Partners",
    type: "Corporate landing",
    detail:
      "Landing corporativa minimal para una firma boutique enfocada en desarrollo de negocios y tecnología.",
  },
  {
    name: "ENM Propiedades",
    type: "Digital presence",
    detail:
      "Presencia digital inicial para comunicar propiedades con claridad, confianza y criterio visual.",
  },
  {
    name: "Tico Stick",
    type: "Brand direction",
    detail:
      "Concepto visual, empaque y dirección de marca para un producto físico con enfoque lifestyle.",
  },
  {
    name: "Parfectionist",
    type: "Content concept",
    detail:
      "Concepto de contenido y comunidad alrededor del golf desde una narrativa auténtica y visual.",
  },
];

const workLayouts = [
  {
    card: "lg:col-span-12 lg:min-h-[29rem]",
    inner: "lg:grid-cols-[minmax(0,0.95fr)_minmax(26rem,0.85fr)] lg:items-end",
    title: "lg:text-[5.8rem]",
    description: "lg:self-end",
  },
  {
    card: "lg:col-span-7 lg:min-h-[25rem]",
    inner: "lg:min-h-[18rem]",
    title: "lg:text-[4.6rem]",
    description: "",
  },
  {
    card: "lg:col-span-5 lg:min-h-[25rem]",
    inner: "lg:min-h-[18rem]",
    title: "lg:text-[3.8rem]",
    description: "",
  },
  {
    card: "lg:col-span-5 lg:min-h-[25rem]",
    inner: "lg:min-h-[18rem]",
    title: "lg:text-[3.8rem]",
    description: "",
  },
  {
    card: "lg:col-span-7 lg:min-h-[25rem]",
    inner: "lg:min-h-[18rem]",
    title: "lg:text-[4.6rem]",
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
    <p className="mb-10 flex items-center gap-3 text-[0.72rem] font-medium uppercase leading-none tracking-wideish text-mist/95 sm:mb-12">
      <span className="h-px w-6 bg-lime/70" />
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
      ? "border-bone bg-bone text-ink hover:border-bone/80 hover:bg-transparent hover:text-bone"
      : "border-line bg-[#111114] text-bone/90 hover:border-bone/35 hover:bg-[#151518] hover:text-bone";

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
    <main className="min-h-screen overflow-hidden bg-ink text-bone">
      <header className="mx-auto flex w-full max-w-[88rem] items-center justify-between px-5 py-7 sm:px-8 lg:px-12 lg:py-9">
        <a
          href="#hero"
          aria-label="Miveh Hub home"
          className="flex items-center text-bone transition duration-300 hover:opacity-85"
        >
          <img
            src="/logo-light-nav.png"
            alt="Miveh Hub"
            className="h-[1.22rem] w-auto object-contain sm:h-[1.35rem]"
          />
        </a>
        <nav aria-label="Primary navigation" className="hidden gap-8 text-[0.82rem] font-medium tracking-[0.055em] text-mist/95 md:flex">
          {["Trabajo", "Servicios", "Proceso", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item === "Trabajo" ? "work" : item.toLowerCase()}`}
              className="transition duration-300 hover:text-bone/95"
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
        <div className="absolute right-5 top-20 hidden h-28 w-px bg-line/70 md:block" />
        <div className="absolute bottom-20 right-5 hidden gap-2 md:flex">
          <span className="h-1.5 w-1.5 bg-navy" />
          <span className="h-1.5 w-1.5 bg-lime" />
          <span className="h-1.5 w-1.5 bg-copper" />
        </div>

        <div className="max-w-6xl">
          <p className="mb-7 text-[0.72rem] font-medium uppercase tracking-wideish text-mist sm:mb-9 sm:text-xs">
            web + contenido + diseño
          </p>
          <h1 className="max-w-[11ch] font-serif text-[clamp(4.7rem,13vw,10.8rem)] font-medium leading-[0.86] tracking-normal text-balance">
            Miveh Hub
          </h1>
          <p className="mt-8 max-w-[35.5rem] text-pretty text-[1.2rem] font-normal leading-[1.68] text-mist/95 sm:mt-10 sm:text-[1.48rem] sm:leading-[1.58]">
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

        <div className="mt-20 grid border-y border-line/70 py-4 text-[0.72rem] font-medium uppercase leading-6 tracking-wideish text-mist sm:mt-20 sm:grid-cols-3 sm:py-5">
          <span>Digital studio</span>
          <span className="mt-3 sm:mt-0 sm:text-center">Editorial systems</span>
          <span className="mt-3 sm:mt-0 sm:text-right">Boutique delivery</span>
        </div>
      </section>

      <section id="work" className="mx-auto w-full max-w-[88rem] px-5 pb-32 pt-24 sm:px-8 lg:px-12 lg:pb-52 lg:pt-36">
        <SectionLabel>Selected Work</SectionLabel>
        <div className="mb-16 grid gap-9 sm:mb-20 lg:grid-cols-[1fr_27rem] lg:items-end">
          <h2 className="max-w-4xl font-serif text-[clamp(3.8rem,8vw,7.7rem)] leading-[0.9] text-balance">
            Selected Work
          </h2>
          <p className="max-w-[25rem] text-[1rem] font-normal leading-[1.85] text-mist/95 lg:pb-4">
            A focused selection of visual systems, landing pages and content directions shaped with clarity, restraint and commercial intent.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-6">
          {work.map((project, index) => {
            const layout = workLayouts[index];

            return (
            <article
              key={project.name}
              className={`group relative overflow-hidden border border-line/75 bg-[#101013] px-6 py-9 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-bone/25 hover:bg-[#121215] sm:px-8 sm:py-11 lg:px-11 lg:py-12 ${layout.card}`}
            >
              <div className={`flex h-full flex-col justify-between gap-16 ${layout.inner}`}>
                <div>
                  <p className="mb-16 text-[0.68rem] font-medium uppercase tracking-wideish text-bone/55 transition duration-300 group-hover:text-bone/75 sm:mb-20">
                    {project.type}
                  </p>
                  <h3 className={`max-w-[12ch] text-[clamp(2.35rem,6.5vw,4.85rem)] font-medium leading-[0.96] text-bone ${layout.title}`}>
                    {project.name}
                  </h3>
                </div>
                <div className={`max-w-xl ${layout.description}`}>
                  <p className="text-base font-normal leading-8 text-mist/95 transition duration-300 group-hover:text-bone">
                    {project.detail}
                  </p>
                  <p className="mt-8 inline-flex border-b border-bone/20 pb-1 text-[0.68rem] font-medium uppercase tracking-wideish text-bone/55 transition duration-300 group-hover:border-bone/40 group-hover:text-bone/80">
                    Explore
                  </p>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </section>

      <section id="servicios" className="mx-auto w-full max-w-[88rem] border-t border-line/60 px-5 pb-32 pt-24 sm:px-8 lg:px-12 lg:pb-52 lg:pt-32">
        <SectionLabel>Services</SectionLabel>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          <h2 className="max-w-xl font-serif text-[clamp(3rem,7vw,5.8rem)] leading-[0.96]">
            Sistemas claros para marcas con más criterio.
          </h2>
          <div className="grid border-y border-line/75">
            {services.map((service) => (
              <article
                key={service.title}
                className="group grid gap-5 border-b border-line/65 py-9 transition duration-300 last:border-b-0 hover:bg-[#111114] sm:grid-cols-[9rem_1fr] sm:gap-12 sm:px-5 lg:py-10"
              >
                <h3 className="text-lg font-medium text-bone">
                  {service.title}
                </h3>
                <p className="max-w-2xl text-base font-normal leading-8 text-mist/95 transition duration-300 group-hover:text-bone">
                  {service.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="mx-auto w-full max-w-[88rem] px-5 py-28 sm:px-8 lg:px-12 lg:py-44">
        <SectionLabel>Process</SectionLabel>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.45fr] lg:gap-24">
          <h2 className="max-w-xl font-serif text-[clamp(3rem,7vw,5.8rem)] leading-[0.96]">
            Menos ruido. Más intención.
          </h2>
          <div className="grid gap-px border-y border-line/80 bg-line/80 md:grid-cols-3 md:border">
            {process.map((step, index) => (
              <article
                key={step.title}
                className="bg-ink p-7 transition duration-300 hover:bg-[#111114] lg:p-8"
              >
                <span className="mb-12 block text-[0.72rem] font-medium uppercase tracking-wideish text-copper">
                  0{index + 1}
                </span>
                <h3 className="text-2xl font-medium">{step.title}</h3>
                <p className="mt-5 text-sm font-normal leading-7 text-mist/95">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto w-full max-w-[88rem] px-5 py-28 sm:px-8 lg:px-12 lg:py-44">
        <div className="border-y border-line/75 py-20 lg:py-28">
          <SectionLabel>Contact</SectionLabel>
          <div className="grid gap-6 text-center lg:grid-cols-12 lg:gap-7 lg:text-left">
            <div className="lg:col-start-4 lg:col-span-8">
              <h2 className="mx-auto max-w-5xl font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[0.98] lg:mx-0">
                ¿Tienes una marca que necesita verse más clara y profesional?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-xl font-normal leading-9 text-mist/95 lg:mx-0 lg:mt-6">
                Hablemos y definimos qué necesita primero.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:col-start-4 lg:col-span-8 lg:-mt-1 lg:justify-start">
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

      <footer className="mx-auto flex w-full max-w-[88rem] flex-col gap-4 px-5 pb-8 text-[0.68rem] font-medium uppercase tracking-wideish text-bone/70 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
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
