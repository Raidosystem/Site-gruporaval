import { useEffect, useState } from "react";
import {
  Code,
  ShareNetwork,
  TShirt,
  Coffee,
  Tag,
  IdentificationCard,
  Signpost,
  Envelope,
  Phone,
  MapPin,
  MagnifyingGlass,
  FileText,
  Storefront,
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  Sparkle,
} from "@phosphor-icons/react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { Toaster } from "@/components/ui/sonner";

import videoCard from "@/assets/videos/videocard.mp4";
import videoPlayback from "@/assets/videos/videoplayback.mp4";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  mensagem: string;
}

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

const projects = [
  {
    title: "Busca CEP",
    href: "https://buscacep.gruporaval.com",
    icon: MagnifyingGlass,
    badge: "Utilitário",
    text: "Busca rápida de CEPs de Guaíra - SP com interface objetiva.",
  },
  {
    title: "Gerador de Currículos",
    href: "https://curriculo.gruporaval.com",
    icon: FileText,
    badge: "Produtividade",
    text: "Criação de currículos profissionais de forma gratuita e prática.",
  },
  {
    title: "Aqui Guaíra",
    href: "https://aquiguaira.gruporaval.com",
    icon: Storefront,
    badge: "Comércio Local",
    text: "Descoberta de lojas e serviços locais por região.",
  },
  {
    title: "MarketGuaíra",
    href: "https://marketgauira.gruporaval.com",
    icon: ShoppingCart,
    badge: "Marketplace",
    text: "Ecossistema digital para conectar negócios e consumidores.",
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
    oldPrice: "de R$ 1.669,00",
    installmentPrefix: "a partir de 3x de",
    installmentPrice: "R$ 333,30",
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
    oldPrice: "de R$ 5.999,00",
    installmentPrefix: "por 3x de",
    installmentPrice: "R$ 1.200,00",
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
    oldPrice: "de R$ 1.659,00",
    installmentPrefix: "a partir de 3x de",
    installmentPrice: "R$ 332,00",
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
];

function App() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    mensagem: "",
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.mensagem) {
      toast.error("Preencha nome, e-mail e mensagem para continuar.");
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (!emailOk) {
      toast.error("Digite um e-mail válido.");
      return;
    }

    toast.success("Mensagem enviada com sucesso. Retornaremos em breve.");
    setFormData({ nome: "", email: "", telefone: "", empresa: "", mensagem: "" });
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
                <Button className="group rounded-full px-7" size="lg" onClick={() => scrollToSection("contato")}>
                  Solicitar orçamento
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
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
                  Criação de <span className="text-gradient">Sites Profissionais</span> e{" "}
                  <span className="text-gradient">Lojas Virtuais</span>
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
                          <p className="plan-old">{card.oldPrice}</p>
                          <p className="plan-installment-label">{card.installmentPrefix}</p>
                          <p className="plan-installment-price">{card.installmentPrice}</p>
                          <Button className="mt-4 rounded-full px-6">
                            {card.cta}
                            <ArrowRight className="ml-2" size={16} />
                          </Button>
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

          <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 md:px-6 lg:grid-cols-4">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="service-card reveal h-full" data-reveal data-delay={String(index * 120)}>
                    <CardHeader>
                      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-violet-600 dark:text-violet-300">
                        <Icon size={24} />
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.text}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="secondary" className="rounded-full">
                        {project.badge}
                      </Badge>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
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

              <div className="mt-7 space-y-4">
                <div className="contact-row">
                  <Envelope size={20} />
                  <span>contato@gruporaval.com</span>
                </div>
                <div className="contact-row">
                  <Phone size={20} />
                  <span>(17) 99999-9999</span>
                </div>
                <div className="contact-row">
                  <MapPin size={20} />
                  <span>Guaíra, São Paulo - Brasil</span>
                </div>
              </div>
            </div>

            <Card className="glass-card reveal" data-reveal data-delay="120">
              <CardHeader>
                <CardTitle>Fale com a equipe</CardTitle>
                <CardDescription>Resposta rápida para demandas comerciais e técnicas.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome *</Label>
                      <Input id="nome" name="nome" value={formData.nome} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input id="telefone" name="telefone" value={formData.telefone} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="empresa">Empresa</Label>
                      <Input id="empresa" name="empresa" value={formData.empresa} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem *</Label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      rows={5}
                      value={formData.mensagem}
                      onChange={handleInputChange}
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-full">
                    Enviar mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 bg-background/90">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} Grupo RaVal. Todos os direitos reservados.</p>
          <Separator orientation="horizontal" className="md:hidden" />
          <p className="inline-flex items-center gap-2">
            <Tag size={16} />
            Software, design e comunicação visual de alto padrão.
          </p>
        </div>
      </footer>

      <Toaster richColors />
    </div>
  );
}

export default App;
