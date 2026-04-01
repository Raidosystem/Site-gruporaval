import { useEffect } from "react";
import {
  Code,
  ShareNetwork,
  TShirt,
  Coffee,
  Tag,
  IdentificationCard,
  Signpost,
  Envelope,
  MapPin,
  MagnifyingGlass,
  FileText,
  Storefront,
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  Sparkle,
  InstagramLogo,
  WhatsappLogo,
  Desktop,
  Scales,
  Bank,
  Clock,
  Wrench,
  Globe,
} from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";

import videoCard from "@/assets/videos/videocard.mp4";
import videoPlayback from "@/assets/videos/videoplayback.mp4";


const navItems = [
  { id: "inicio", label: "Início" },
  { id: "software", label: "Software" },
  { id: "parceria", label: "Parceria" },
  { id: "personalizacao", label: "Produtos" },
  { id: "sinalizacao", label: "Sinalização" },
  { id: "projetos", label: "Projetos" },
];

const softwareCards = [
  {
    icon: Code,
    title: "Sistemas Web",
    tone: "from-cyan-500/20 to-blue-500/20",
    items: [
      "ERPs e CRMs sob medida",
      "Plataformas SaaS",
      "E-commerce escalável",
      "Dashboards em tempo real",
      "Integrações com APIs",
    ],
  },
  {
    icon: ShareNetwork,
    title: "Apps Mobile",
    tone: "from-emerald-500/20 to-teal-500/20",
    items: ["iOS e Android", "UX rápida e intuitiva", "Offline-first", "Push notifications"],
  },
  {
    icon: Sparkle,
    title: "Automação Inteligente",
    tone: "from-orange-500/20 to-pink-500/20",
    items: ["Fluxos automáticos", "Bots e RPA", "Relatórios automatizados", "Monitoramento contínuo"],
  },
];

const systemProjects = [
  {
    title: "Busca CEP",
    href: "https://buscacep.aquiguaira.com.br",
    icon: MagnifyingGlass,
    badge: "Utilitário",
    text: "Busca rápida de CEPs de Guaíra - SP com interface objetiva.",
  },
  {
    title: "Gerador de Currículos",
    href: "https://criarcurriculo.aquiguaira.com.br/",
    icon: FileText,
    badge: "Produtividade",
    text: "Criação de currículos profissionais de forma gratuita e prática.",
  },
  {
    title: "Aqui Guaíra",
    href: "https://aquiguaira.com.br",
    icon: Storefront,
    badge: "Comércio Local",
    text: "Descoberta de lojas e serviços locais por região.",
  },
  {
    title: "MarketGuaíra",
    href: "https://aquiguaira.com.br/marketplace",
    icon: ShoppingCart,
    badge: "Marketplace",
    text: "Ecossistema digital para conectar negócios e consumidores.",
  },
  {
    title: "PDV com Integração ML",
    href: "https://www.gestao365pro.com.br/",
    icon: Desktop,
    badge: "Gestão / ERP",
    text: "Sistema completo de PDV integrado ao Mercado Livre.",
  },
  {
    title: "Sistema para Advogados",
    href: "https://advpro.gruporaval.com.br/",
    icon: Scales,
    badge: "Jurídico",
    text: "Plataforma completa para gestão de escritórios de advocacia.",
  },
  {
    title: "Ponto Fácil",
    href: "https://pontofacil.gruporaval.com.br",
    icon: Clock,
    badge: "Gestão de RH",
    text: "Sistema digital para controle de ponto inteligente e prático.",
  },
  {
    title: "OS Premium",
    href: "https://ospremium.gruporaval.com.br/",
    icon: Wrench,
    badge: "Serviços",
    text: "Gerenciamento completo de ordens de serviço e atendimentos.",
  },
];

const websiteProjects = [
  {
    title: "Anita Enxovais",
    href: "https://anitaenxovais.gruporaval.com.br/",
    badge: "E-commerce",
    text: "Loja virtual de cama, mesa e banho.",
  },
  {
    title: "Grupo RaVal",
    href: "https://www.gruporaval.com.br/",
    badge: "Institucional",
    text: "Agência com portfólio e serviços.",
  },
  {
    title: "Assistência All Import",
    href: "https://www.assistenciaallimport.com.br/",
    badge: "Empresarial",
    text: "Assistência técnica especializada.",
  },
  {
    title: "Camilo Garcia",
    href: "https://camilo.gruporaval.com.br/",
    badge: "Profissional",
    text: "Clínica de psicologia e agendamentos.",
  },
  {
    title: "Denir Ferreira",
    href: "https://denirferreira.gruporaval.com.br/",
    badge: "Profissional",
    text: "Marca pessoal e serviços.",
  },
  {
    title: "Mariângela Barrachi",
    href: "https://mariangelabarrachi.gruporaval.com.br/",
    badge: "Profissional",
    text: "Apresentação de serviços e contato.",
  },
  {
    title: "TecCell Premium",
    href: "https://www.teccellpremium.com.br/",
    badge: "Empresarial",
    text: "Loja e assistência de smartphones.",
  },
  {
    title: "CT Mateus Pavanello",
    href: "https://www.ctmateuspavanello.com.br/",
    badge: "Esportes / Saúde",
    text: "Centro de treinamento com planos.",
  },
  {
    title: "Loja Maçônica Acácia Guairense",
    href: "https://maconaria.gruporaval.com.br",
    badge: "Institucional",
    text: "Portal de comunicação da Loja.",
  },
];

const productCards = [
  {
    icon: TShirt,
    title: "Vestuário",
    bullets: ["Camisetas e polos", "Uniformes profissionais", "Bonés e aventais"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&auto=format&fit=crop",
    ],
  },
  {
    icon: Coffee,
    title: "Brindes",
    bullets: ["Canecas e squeezes", "Chaveiros e kits", "Ações promocionais"],
    images: [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622290449557-d7e7a1c66b89?w=900&auto=format&fit=crop",
    ],
  },
  {
    icon: IdentificationCard,
    title: "Acrílicos Premium",
    bullets: ["Placas QR Code", "Cartões NFC", "Acabamento premium"],
    images: [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=900&auto=format&fit=crop",
    ],
  },
];

const partnershipCards = [
  {
    title: "Site Profissional",
    oldPrice: "",
    installmentPrefix: "a partir de",
    installmentPrice: "R$ 49,90 / mês",
    cta: "Quero preço baixo",
    benefits: [
      "Entrega em 3 dias úteis",
      "Criação de conteúdo",
      "Site seguro (SSL e HTTPS)",
      "SEO Completo",
      "20 Contas de E-mail Profissional GRÁTIS",
      "Integração com Redes Sociais e Whatsapp",
      "Suporte WhatsApp, E-mail e Telefone ilimitado",
    ],
  },
  {
    title: "Site Personalizado",
    oldPrice: "",
    installmentPrefix: "a partir de",
    installmentPrice: "R$ 69,90 / mês (com painel)",
    cta: "Quero preço baixo",
    benefits: [
      "Layout exclusivo sob medida",
      "Provas de layout ilimitadas",
      "Garantia de Satisfação",
      "Site seguro (SSL e HTTPS)",
      "SEO completo",
      "Integração com Redes Sociais e Whatsapp",
      "Suporte WhatsApp, E-mail e Telefone ilimitado",
    ],
  },
  {
    title: "Loja Virtual",
    oldPrice: "",
    installmentPrefix: "a partir de",
    installmentPrice: "R$ 120,00 / mês",
    cta: "Quero preço baixo",
    benefits: [
      "Entrega em 3 dias úteis",
      "Loja virtual responsiva",
      "Vários layouts para você escolher",
      "2 a 20 Contas de E-mail Profissional GRÁTIS",
      "Suporte WhatsApp, E-mail e Telefone ilimitado",
      "Certificado SSL de segurança",
      "Formas de pagamento integradas",
      "Controle de estoque automatizado",
      "Alta performance e segurança",
    ],
  },
  {
    title: "Sistemas Inteligentes",
    oldPrice: "",
    installmentPrefix: "a combinar",
    installmentPrice: "Projeto sob Medida",
    cta: "Consultar projeto",
    benefits: [
      "ERP Empresarial e PDV Completos",
      "Sistemas para Advocacia e Clínicas",
      "Gestão de Estoque e OS Premium",
      "Aplicativos de Ponto e RH",
      "Dashboards Analíticos Avançados",
      "Automação e Bots no WhatsApp",
      "Tecnologia Nuvem Escalável",
      "Alta Performance e Arquitetura Limpa",
    ],
  },
  {
    title: "Aplicativos Mobile",
    oldPrice: "",
    installmentPrefix: "a combinar",
    installmentPrice: "Projeto sob Medida",
    cta: "Consultar app",
    benefits: [
      "Lançamento em Android e iOS",
      "Notificações Push ilimitadas",
      "Funcionalidades nativas (câmera, GPS)",
      "Recursos Offline e Sincronização",
      "Painel administrativo Web integrado",
      "Login Social (Google, Apple, Facebook)",
      "Design focado na Experiência do Usuário (UX)",
      "Publicação e aprovação nas Lojas",
    ],
  },
];

function App() {

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const delay = entry.target.getAttribute("data-delay") ?? "0";
          window.setTimeout(() => {
            entry.target.classList.add("revealed");
          }, Number(delay));
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -90px 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".tech-card"));
    const cleanups: Array<() => void> = [];

    cards.forEach((card) => {
      const onMove = (event: PointerEvent) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const dx = (x / rect.width - 0.5) * 2;
        const dy = (y / rect.height - 0.5) * 2;

        card.style.setProperty("--rx", `${(-dy * 8).toFixed(2)}deg`);
        card.style.setProperty("--ry", `${(dx * 10).toFixed(2)}deg`);
        card.style.setProperty("--gx", `${x.toFixed(1)}px`);
        card.style.setProperty("--gy", `${y.toFixed(1)}px`);
      };

      const onLeave = () => {
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
        card.style.setProperty("--gx", "50%");
        card.style.setProperty("--gy", "50%");
      };

      card.addEventListener("pointermove", onMove);
      card.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        card.removeEventListener("pointermove", onMove);
        card.removeEventListener("pointerleave", onLeave);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed left-0 top-0 z-50 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-500 via-emerald-500 to-orange-500 motion-safe:animate-progress" />

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
          <button onClick={() => scrollToSection("inicio")} className="brand-mark text-left">
            Grupo RaVal
            <span>Tecnologia, design e produção visual.</span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-pill"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => scrollToSection("contato")} className="ml-3 rounded-full px-6">
              Contato
            </Button>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <Button variant="secondary" size="sm" onClick={() => scrollToSection("contato")}>
              Contato
            </Button>
            <ThemeToggle />
          </div>

          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-shell">
          <div className="floating-orb orb-a" />
          <div className="floating-orb orb-b" />
          <div className="floating-orb orb-c" />

          <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
            <div className="reveal" data-reveal data-delay="80">
              <Badge className="mb-5 rounded-full border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-cyan-700 dark:text-cyan-200">
                Soluções completas para negócios
              </Badge>
              <h1 className="text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Site profissional com
                <span className="text-gradient"> tecnologia de ponta</span>
              </h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
                Desenvolvemos software, design e personalização com uma experiência digital refinada,
                rápida e pensada para gerar resultado real para sua empresa.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://wa.me/5517999783012?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%21" target="_blank" rel="noopener noreferrer">
                  <Button className="group rounded-full px-7" size="lg">
                    Solicitar orçamento
                    <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </a>
                <Button variant="outline" className="rounded-full px-7" size="lg" onClick={() => scrollToSection("projetos")}>
                  Ver projetos
                </Button>
              </div>

              <div className="mt-9 flex flex-wrap gap-2">
                {["UI premium", "Motion elegante", "Alta performance", "SEO-ready"].map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="reveal grid gap-4 md:grid-cols-2" data-reveal data-delay="200">
              <Card className="glass-card overflow-hidden">
                <video
                  src={videoCard}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-44 w-full object-cover"
                />
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground">Design e branding</p>
                  <h3 className="mt-1 text-lg font-semibold">Identidade forte</h3>
                </CardContent>
              </Card>

              <Card className="glass-card md:translate-y-8 overflow-hidden">
                <video
                  src={videoPlayback}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-44 w-full object-cover"
                />
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground">Produto digital</p>
                  <h3 className="mt-1 text-lg font-semibold">Experiência fluida</h3>
                </CardContent>
              </Card>

              <Card className="glass-card shine-card md:col-span-2">
                <CardContent className="grid gap-4 p-6 md:grid-cols-3">
                  <div>
                    <p className="text-3xl font-bold">+120</p>
                    <p className="text-sm text-muted-foreground">Projetos entregues</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">98%</p>
                    <p className="text-sm text-muted-foreground">Clientes recorrentes</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">24h</p>
                    <p className="text-sm text-muted-foreground">Tempo médio de resposta</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="software" className="section-shell software-stage">
          <div className="software-grid-bg" />
          <div className="section-head reveal" data-reveal>
            <Badge className="section-badge">Software</Badge>
            <h2>Desenvolvimento moderno para escalar seu negócio</h2>
            <p>
              Soluções robustas, seguras e preparadas para crescimento, com arquitetura atual e foco em performance.
            </p>
          </div>

          <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 md:px-6 lg:grid-cols-3 software-cards-wrap">
            {softwareCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card key={card.title} className="service-card tech-card reveal" data-reveal data-delay={String(index * 160)}>
                  <CardHeader>
                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${card.tone}`}>
                      <Icon size={24} />
                    </div>
                    <CardTitle>{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle size={16} className="mt-0.5 text-emerald-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="parceria" className="section-shell section-muted">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
            <div className="plans-story">
              <div className="plans-story-head">
                <Badge className="section-badge">Parceria Estratégica</Badge>
                <h2>
                  Criação de <span className="text-gradient">Sites</span>,{" "}
                  <span className="text-gradient">Lojas</span>,{" "}
                  <span className="text-gradient">Sistemas</span> e{" "}
                  <span className="text-gradient">Apps</span>
                </h2>
                <p>Role para ver cada plano entrar com transição suave.</p>
              </div>

              <div className="plans-scroll">
                {partnershipCards.map((card) => (
                  <div key={card.title} className="plan-step">
                    <Card className="plan-card">
                      <CardContent className="p-5 md:p-6">
                        <h3 className="plan-name">{card.title}</h3>

                        <div className="plan-offer">
                          {card.oldPrice && <p className="plan-old">{card.oldPrice}</p>}
                          <p className="plan-installment-label">{card.installmentPrefix}</p>
                          <p className="plan-installment-price">{card.installmentPrice}</p>
                          <a href="https://wa.me/5517999783012?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%21" target="_blank" rel="noopener noreferrer" className="block mt-4">
                            <Button className="w-full rounded-full px-6">
                              {card.cta}
                              <ArrowRight className="ml-2" size={16} />
                            </Button>
                          </a>
                        </div>

                        <h4 className="plan-benefits-title">Benefícios</h4>
                        <div className="space-y-2">
                          {card.benefits.map((benefit) => (
                            <div key={benefit} className="plan-benefit-row">
                              <CheckCircle size={16} className="text-emerald-500" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="personalizacao" className="section-shell">
          <div className="section-head reveal" data-reveal>
            <Badge className="section-badge">Personalização</Badge>
            <h2>Produtos personalizados com acabamento premium</h2>
            <p>Produção visual com qualidade de impressão, materiais duráveis e identidade da sua marca.</p>
          </div>

          <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 md:px-6 lg:grid-cols-3">
            {productCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="service-card reveal overflow-hidden" data-reveal data-delay={String(index * 140)}>
                  <CardHeader>
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-300">
                      <Icon size={24} />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="mb-4 space-y-2">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="text-sm text-muted-foreground">
                          • {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="carousel-box">
                      <div className="carousel-track">
                        {[...item.images, ...item.images].map((img, imgIndex) => (
                          <img key={`${item.title}-${imgIndex}`} src={img} alt={item.title} loading="lazy" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="sinalizacao" className="section-shell section-muted">
          <div className="section-head reveal" data-reveal>
            <Badge className="section-badge">Sinalização</Badge>
            <h2>Comunicação visual clara, elegante e funcional</h2>
            <p>Projetos internos e externos com materiais resistentes e leitura imediata.</p>
          </div>

          <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 md:px-6 lg:grid-cols-2">
            {["Sinalização Interna", "Sinalização Externa"].map((title, index) => (
              <Card key={title} className="service-card reveal" data-reveal data-delay={String(index * 180)}>
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-300">
                    <Signpost size={24} />
                  </div>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Placas direcionais e informativas</li>
                    <li>• Identificação de setores e ambientes</li>
                    <li>• Soluções com QR Code e NFC</li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="projetos" className="section-shell">
          <div className="section-head reveal" data-reveal>
            <Badge className="section-badge">Projetos</Badge>
            <h2>Plataformas já publicadas e em operação</h2>
            <p>Produtos reais que geram impacto local e digital para a comunidade e empresas.</p>
          </div>

          {/* Sistemas */}
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
            <div className="reveal mb-6 flex items-center gap-3" data-reveal>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-500">
                <Code size={18} />
              </div>
              <h3 className="text-lg font-semibold">Sistemas & Plataformas</h3>
              <Badge variant="secondary" className="rounded-full text-xs">{systemProjects.length}</Badge>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {systemProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer" className="group block">
                    <Card className="service-card reveal h-full transition-all duration-300 group-hover:border-cyan-500/30 group-hover:shadow-lg group-hover:shadow-cyan-500/5" data-reveal data-delay={String(index * 80)}>
                      <CardHeader className="pb-3">
                        <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 text-cyan-600 dark:text-cyan-300 transition-transform duration-300 group-hover:scale-110">
                          <Icon size={22} />
                        </div>
                        <CardTitle className="text-base">{project.title}</CardTitle>
                        <CardDescription className="text-xs leading-relaxed">{project.text}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Badge variant="secondary" className="rounded-full text-[11px]">
                          {project.badge}
                        </Badge>
                      </CardContent>
                    </Card>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Separator */}
          <div className="mx-auto my-10 w-full max-w-7xl px-4 md:px-6">
            <Separator />
          </div>

          {/* Sites */}
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
            <div className="reveal mb-6 flex items-center gap-3" data-reveal>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-500">
                <Globe size={18} />
              </div>
              <h3 className="text-lg font-semibold">Sites & Portfólio</h3>
              <Badge variant="secondary" className="rounded-full text-xs">{websiteProjects.length}</Badge>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {websiteProjects.map((project, index) => (
                <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="reveal flex items-center gap-4 rounded-2xl border border-border/60 bg-card/60 p-4 transition-all duration-300 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/5 group-hover:shadow-lg group-hover:shadow-emerald-500/5" data-reveal data-delay={String(index * 60)}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 transition-transform duration-300 group-hover:scale-110">
                      <Globe size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-foreground">{project.title}</p>
                      <p className="truncate text-xs text-muted-foreground">{project.text}</p>
                    </div>
                    <Badge variant="secondary" className="shrink-0 rounded-full text-[11px]">
                      {project.badge}
                    </Badge>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section-shell section-muted">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="reveal" data-reveal>
              <Badge className="section-badge">Contato</Badge>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">Vamos construir algo forte para sua marca</h2>
              <p className="mt-4 text-muted-foreground">
                Envie os detalhes do seu projeto e retornamos com o melhor caminho técnico e visual.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <a href="mailto:ravalsistemas@gmail.com" className="group flex items-center gap-4 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4 transition-all hover:bg-blue-500/10 hover:border-blue-500/30">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-500">
                    <Envelope size={24} weight="fill" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground group-hover:text-blue-500/80 transition-colors">E-mail</p>
                    <p className="text-base font-semibold text-foreground md:text-lg">ravalsistemas@gmail.com</p>
                  </div>
                </a>

                <a href="https://wa.me/5517999783012" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 transition-all hover:bg-emerald-500/10 hover:border-emerald-500/30">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-500">
                    <WhatsappLogo size={24} weight="fill" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground group-hover:text-emerald-500/80 transition-colors">WhatsApp</p>
                    <p className="text-base font-semibold text-foreground md:text-lg">(17) 99978-3012</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-500">
                    <MapPin size={24} weight="fill" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Endereço</p>
                    <p className="text-base font-semibold text-foreground md:text-lg">Avenida 15, 382 - Centro, Guaíra, SP</p>
                  </div>
                </div>

                <a href="https://www.instagram.com/grupo_raval" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-pink-500/20 bg-pink-500/5 p-4 transition-all hover:bg-pink-500/10 hover:border-pink-500/30">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-500/20 text-pink-500">
                    <InstagramLogo size={24} weight="fill" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground group-hover:text-pink-500/80 transition-colors">Instagram</p>
                    <p className="text-base font-semibold text-foreground md:text-lg">Grupo RaVal (@grupo_raval)</p>
                  </div>
                </a>
              </div>
            </div>

            <Card className="glass-card reveal overflow-hidden" data-reveal data-delay="120">
              <CardHeader className="bg-background/50 backdrop-blur-sm border-b border-border/50">
                <CardTitle>Nossa localização</CardTitle>
                <CardDescription>Venha tomar um café com a nossa equipe.</CardDescription>
              </CardHeader>
              <CardContent className="p-0 bg-muted/20">
                <iframe
                  src="https://www.google.com/maps?q=Avenida+15,+382+-+Centro,+Gua%C3%ADra+-+SP,+14790-000&output=embed"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Grupo RaVal em Guaíra, SP"
                />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 bg-background/90">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} Todos os direitos reservados. Criado por <strong className="font-medium text-foreground">Grupo RaVaL</strong>.</p>
          <Separator orientation="horizontal" className="md:hidden" />
          <p className="inline-flex items-center gap-2">
            <Tag size={16} />
            Software, design e comunicação visual de alto padrão.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
