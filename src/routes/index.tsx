import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Check, Shield, Lock, Zap, Skull, Crown as CrownIcon, Flame } from "lucide-react";
import { HonorButton } from "@/components/sections/HonorButton";
import { SectionDivider } from "@/components/sections/SectionDivider";
import heroImg from "@/assets/hero-transformation.jpg";
import domesticatedImg from "@/assets/domesticated.jpg";
import demonsImg from "@/assets/demons.jpg";
import phaseDemolition from "@/assets/phase-demolition.jpg";
import phaseReconstruction from "@/assets/phase-reconstruction.jpg";
import phaseExpansion from "@/assets/phase-expansion.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* TOP BAR */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="font-display text-lg md:text-xl tracking-widest text-foreground">
              VALHALLA <span className="text-blood">FOCO</span>
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-2 text-xs text-muted-foreground font-display uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-blood animate-pulse" />
            +10.000 membros
          </span>
        </div>
      </header>

      {/* HERO */}
      <section className="relative px-4 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="absolute inset-0 bg-radial-blood opacity-60 pointer-events-none" />
        <div className="relative mx-auto max-w-5xl text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.05] uppercase tracking-tight">
            <span className="text-blood text-shadow-blood">2 meses de total foco</span> para refazer
            <br className="hidden md:block" /> por inteiro sua disciplina,
            <br className="hidden md:block" /> concentração e missão
          </h1>
          <p className="mt-5 font-display text-lg md:text-2xl uppercase tracking-wider text-muted-foreground">
            Ainda que você já tenha tentado de tudo e fracassado
          </p>

          <div className="mt-10 mx-auto max-w-4xl rounded-xl overflow-hidden shadow-brutal ring-1 ring-border">
            <img
              src={heroImg}
              alt="Transformação masculina: do fundo do poço à conquista"
              width={1920}
              height={1080}
              className="w-full h-auto block"
            />
            <div className="grid grid-cols-2 bg-card">
              <div className="p-4 md:p-6 text-center border-r border-border">
                <p className="font-display text-3xl md:text-5xl uppercase text-muted-foreground/60">Dia 1</p>
              </div>
              <div className="p-4 md:p-6 text-center">
                <p className="font-display text-3xl md:text-5xl uppercase text-blood text-shadow-blood">Após 2 meses</p>
              </div>
            </div>
          </div>

          <p className="mt-8 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            De homem desorientado vivendo no automático a líder que conquista respeito —
            o protocolo exato aplicado por mais de <span className="text-foreground font-semibold">10.000 homens</span>{" "}
            para romper de vez com o ciclo da vida medíocre.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <HonorButton size="lg">Quero renascer</HonorButton>
            <p className="font-display text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground">
              + 10.000 membros
            </p>
          </div>

          <div className="mt-16 flex justify-center">
            <ArrowDown className="h-8 w-8 text-blood animate-bounce" />
          </div>
        </div>
      </section>

      {/* PROBLEMA: 25% do ano */}
      <section className="section-light relative px-4 py-20 border-t border-border/50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-2xl md:text-4xl uppercase tracking-tight leading-tight">
            Já se foi 25% do ano... E você jurou que <span className="text-blood">2026 seria outro</span>
          </h2>
          <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>Recorda do ânimo de janeiro? Das juras que fez a si próprio na passagem do ano?</p>
            <p>Mas encare com sinceridade sua rotina de hoje... suas relações... seus costumes...</p>
            <p className="text-foreground">É praticamente a mesma vida sem brilho de um ano atrás.</p>
            <p className="text-foreground font-semibold border-l-4 border-blood pl-4">
              E o pior: você já está fantasiando 2027 como "o ano definitivo" — a mesma mentira que
              repete para si mesmo há quantas temporadas?
            </p>
            <p>
              Enquanto isso, quem está à sua volta avança. E você segue parado no mesmo ponto,
              jogando fora mais um ano do seu potencial.
            </p>
          </div>
        </div>
      </section>

      {/* PERGUNTA QUE EVITA */}
      <section className="section-dark relative px-4 py-20 border-y border-border/50">
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-sm md:text-base uppercase tracking-[0.3em] text-blood mb-6">
            A questão que você foge de encarar:
          </p>
          <h3 className="font-display text-2xl md:text-3xl leading-tight text-foreground">
            Se em 365 dias você não conseguiu se transformar... por que acreditar que vai dar certo no ano que vem?
          </h3>
          <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p className="text-foreground font-semibold">
              Sem nenhum sistema concreto. Sem nenhum método validado. Só com a mesma "vontade"
              que te traiu por 4 meses seguidos.
            </p>
            <p>Em 1 ano, você vai estar:</p>
            <ul className="space-y-3 pl-1">
              <li className="flex gap-3"><span className="text-blood mt-1">›</span> Encarando no espelho o mesmo homem insatisfeito de agora?</li>
              <li className="flex gap-3"><span className="text-blood mt-1">›</span> Recebendo o mesmo salário, repetindo a mesma rotina sem sentido?</li>
              <li className="flex gap-3 text-foreground font-semibold"><span className="text-blood mt-1">›</span> Ou finalmente se tornará o homem que sempre soube ser capaz de ser?</li>
            </ul>
            <p className="text-foreground bg-blood/10 p-4 rounded-md border border-blood/30">
              Porque algo é certo: <strong>2026 vai terminar — com ou sem a sua virada.</strong>
            </p>
            <p className="text-foreground">
              A questão é se você vai começar 2027 sendo a mesma pessoa... ou alguém
              totalmente refeito.
            </p>
          </div>
        </div>
      </section>

      {/* DOMESTICADO */}
      <section className="section-light relative px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl md:text-5xl uppercase tracking-tight leading-tight">
            Você imagina que está vivendo... mas está só <span className="text-blood">sobrevivendo</span>
          </h2>
          <div className="mt-10 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <p>
              Desperta. Café. Engarrafamento. Expediente. Almoço vendo YouTube. Mais expediente.
              Retorna em casa esgotado. Sofá. Celular. Netflix. Cama tarde. E recomeça.
            </p>
            <p>
              Sábado e domingo? Mais celular. Mais Netflix. Quem sabe um bar. Domingo de aflição
              pensando na segunda.
            </p>
            <p className="text-foreground font-semibold">
              E é dessa forma que você joga fora semanas. Meses. Anos por completo.
            </p>
          </div>

          <div className="mt-12 text-center">
            <p className="inline-block font-display text-2xl md:text-4xl uppercase tracking-tight bg-blood/15 px-6 py-3 border-l-4 border-r-4 border-blood">
              Felicitações. Você foi <span className="text-blood">amansado</span>.
            </p>
          </div>

          <div className="mt-12 rounded-xl overflow-hidden shadow-brutal ring-1 ring-border">
            <img src={domesticatedImg} alt="Homem amansado pelo sistema" width={1536} height={864} loading="lazy" className="w-full h-auto block" />
          </div>

          <div className="mt-10 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <p>Não foi preciso algemas nem correntes para te aprisionar.</p>
            <p>
              Foi suficiente manter sua cabeça ocupada o bastante para que você jamais notasse que
              existe igual a um hamster girando a rodinha — em movimento sem cessar, mas sempre
              no mesmo ponto.
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-2xl bg-card rounded-xl p-6 md:p-10 border border-border shadow-brutal">
            <p className="text-foreground/90 mb-4">Enquanto a sua vida segue no automático...</p>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Seus anos mais valiosos vão escapando entre os dedos",
                "Seu potencial estraga sem nunca ser usado",
                "Sua energia vital é drenada por distrações",
                "Sua existência vira mais um número da mediocridade",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Skull className="h-5 w-5 text-blood mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 font-display text-sm uppercase tracking-[0.2em] text-blood">
              A pergunta que ninguém tem coragem de fazer:
            </p>
            <div className="mt-3 space-y-3 text-muted-foreground">
              <p>Se você permanecer nessa engrenagem por mais 5 anos... em que homem vai se transformar?</p>
              <p>Um morto-vivo de escritório, com 40 anos, fora de forma, sem disposição, sem missão, riscando os dias até a aposentadoria?</p>
              <p className="text-foreground">Ou vai romper essas correntes invisíveis e refazer uma vida que faça sentido viver?</p>
            </div>

            <div className="mt-6 p-4 border border-blood/30 rounded-md bg-blood/5">
              <p className="text-foreground"><strong>2026 já se aproxima do meio.</strong></p>
              <p className="text-muted-foreground mt-1">Mas o seu amansamento pode terminar agora.</p>
            </div>

            <div className="mt-8 flex justify-center">
              <HonorButton>Quero romper essa cela!</HonorButton>
            </div>
          </div>
        </div>
      </section>

      {/* SAÍDA - PREÇO BRUTAL */}
      <section className="section-dark relative px-4 py-20 border-t border-border/50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl md:text-5xl uppercase tracking-tight leading-tight">
            Existe uma saída. Mas ela tem um <span className="text-blood">custo cruel.</span>
          </h2>

          <div className="mt-10 text-center text-lg md:text-xl text-muted-foreground space-y-2">
            <p>Não é uma questão de grana.</p>
            <p>Tampouco de sorte.</p>
            <p>Muito menos de "nascer especial".</p>
          </div>

          <div className="mt-10 text-center">
            <p className="inline-block font-display text-xl md:text-3xl uppercase tracking-tight bg-blood/15 px-6 py-3 text-foreground">
              É sobre ter coragem de <span className="text-blood">abrir mão.</span>
            </p>
          </div>

          <ul className="mt-10 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            {[
              { strong: "Abrir mão dos vícios", rest: "que te dão alívio por meia hora... e te aniquilam por três décadas." },
              { strong: "Abrir mão das pessoas que sempre te empurram de volta ao passado", rest: "e te prendem a uma vida sem brilho que você já não suporta mais." },
              { strong: "Abrir mão dos hábitos, comportamentos e ambientes antigos", rest: "que te jogam de volta no fundo do poço toda vez que você tenta escalar." },
              { strong: "Abrir mão da versão acomodada de você mesmo", rest: "— aquela com desculpas no bolso, que \"começa segunda-feira\", que sempre arruma um pretexto para não agir." },
            ].map((it, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-blood text-xl leading-none">›</span>
                <p><strong className="text-foreground">{it.strong}</strong> {it.rest}</p>
              </li>
            ))}
          </ul>

          <div className="mt-14 rounded-xl overflow-hidden shadow-brutal ring-1 ring-border">
            <img src={demonsImg} alt="Homem rodeado pelos próprios demônios" width={1536} height={864} loading="lazy" className="w-full h-auto block" />
          </div>

          <div className="mt-12 max-w-2xl mx-auto text-center">
            <p className="text-base md:text-lg text-muted-foreground mb-6">
              Você está mesmo pronto para enterrar a sua versão de hoje para que uma versão
              maior possa surgir?
            </p>
            <HonorButton size="lg">Sim! Estou pronto!</HonorButton>
          </div>
        </div>
      </section>

      {/* CAUTION + LEIA COM ATENÇÃO */}
      <section className="relative">
        <div className="caution-stripe h-6 md:h-8" />
        <div className="px-4 py-20 bg-background">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground">
              Antes de seguir adiante,
            </p>
            <h2 className="mt-2 font-display text-3xl md:text-5xl uppercase tracking-tight leading-tight">
              Leia com calma e <span className="text-blood">defina seu destino</span>
            </h2>

            <div className="mt-12 mx-auto max-w-2xl bg-warning text-warning-foreground rounded-xl p-6 md:p-10 shadow-brutal text-left">
              <div className="space-y-5 text-base md:text-lg leading-relaxed">
                <p>
                  É um terreno de guerra para homens que deixaram de se enganar e abraçaram
                  uma verdade dura: ninguém te salva, só você mesmo.
                </p>
                <p>
                  Esse método não é para quem procura alívio passageiro. É para quem quer{" "}
                  <strong>controle definitivo</strong>.
                </p>
                <p>
                  Para homens que decidiram assumir o peso total da responsabilidade pelas suas
                  vidas — e ainda imploram por mais vigor para sustentar.
                </p>
                <p className="font-semibold italic border-l-4 border-warning-foreground/40 pl-4">
                  "Senhor, não me alivie desse fardo... mas redobre minha coragem e minha força para
                  sustentá-lo com honra."
                </p>
                <p>Se essa prece ecoa na sua alma... você é um dos nossos.</p>
                <p>
                  Agora, se você prefere se acalmar com justificativas, culpar o destino e seguir
                  como vítima das próprias decisões...
                </p>
                <p className="text-center font-display text-xl md:text-2xl uppercase tracking-tight pt-4 text-[oklch(0.45_0.22_25)]">
                  Feche esta página já<br />e não retorne nunca mais!
                </p>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <ArrowDown className="h-8 w-8 text-blood animate-bounce" />
            </div>

            <div className="mt-16 max-w-2xl mx-auto text-left space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p className="text-foreground">Continua aí?</p>
              <p>
                Então você sacou que é o momento de parar de fingir que vai mudar "qualquer dia" e
                iniciar a reconstrução da sua vida agora mesmo.
              </p>
              <p className="text-foreground font-semibold">
                Seja bem-vindo ao último sistema que você vai precisar conhecer.
              </p>
            </div>
          </div>
        </div>
        <div className="caution-stripe h-6 md:h-8" />
      </section>

      {/* +10.000 HOMENS */}
      <section className="section-light px-4 py-20 border-b border-border/50">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tight leading-tight">
            Mais de <span className="text-blood">10.000 homens</span> já romperam o ciclo da mediocridade
          </h2>
          <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed text-left">
            <p>
              Uns destruíram vícios que os dominavam há décadas. Outros forjaram a disciplina
              que nunca haviam tido. Muitos enfim acharam propósito verdadeiro após anos
              perdidos vivendo no automático.
            </p>
            <p className="text-foreground">
              Mas todos compartilham um traço: deixaram de tolerar viver aquém do próprio potencial.
            </p>
            <p>
              O que separa você deles não é talento, QI ou sorte.
            </p>
            <p className="font-display text-xl md:text-3xl uppercase text-blood text-center py-2">
              É decisão.
            </p>
            <p>
              Você pode seguir sendo mais um cara inteligente que desperdiça o próprio dom... ou
              pode virar a referência que os outros vão querer copiar.
            </p>
            <p className="text-foreground font-semibold">A escolha é toda sua. Mas o prazo vence hoje.</p>
          </div>
        </div>
      </section>

      {/* RENASCIMENTO 3 ETAPAS */}
      <section className="section-dark px-4 py-20">
        <SectionDivider />
        <h2 className="text-center font-display text-3xl md:text-5xl uppercase tracking-tight text-blood text-shadow-blood">
          O Renascimento em 3 etapas
        </h2>

        <div className="mt-16 mx-auto max-w-5xl space-y-20">
          {[
            {
              num: "1",
              title: "Demolição",
              img: phaseDemolition,
              icon: <Skull className="h-7 w-7" />,
              text: [
                "Nesta primeira fase devastadora, você vai identificar e destruir sistematicamente tudo que te mantém preso ao piloto automático: vícios digitais que drenam sua energia vital, distrações que fragmentam seu foco, crenças limitantes que sabotam seu potencial e a necessidade doentia de aprovação externa que te faz viver para os outros.",
                "É impossível construir uma casa sólida sobre fundações podres. Antes de se tornar quem você deve ser, você precisa eliminar completamente quem você não quer mais ser — e essa fase é o choque de realidade brutal que separa homens sérios de eternos sonhadores, liberando sua mente para criação real pela primeira vez em anos.",
              ],
            },
            {
              num: "2",
              title: "Reconstrução",
              img: phaseReconstruction,
              icon: <Shield className="h-7 w-7" />,
              text: [
                "Com o terreno mental completamente limpo, você constrói um novo \"você\" desde os alicerces: cria um código de conduta pessoal inviolável que funciona como lei interna, desenvolve rituais sagrados que transformam dor em disciplina automática e reprograma completamente sua autoimagem interna através de ações concretas, não afirmações vazias.",
                "Enquanto métodos tradicionais tentam adicionar hábitos bons a uma personalidade defeituosa, aqui você reconstrói sua identidade fundamental — disciplina deixa de ser \"algo que você faz\" e vira \"quem você é\", criando um sistema interno que te obriga a cumprir sua palavra e recupera seu respeito próprio de forma inquestionável.",
              ],
            },
            {
              num: "3",
              title: "Expansão",
              img: phaseExpansion,
              icon: <CrownIcon className="h-7 w-7" />,
              text: [
                "Com fundações de aço estabelecidas, você expande seu domínio sobre todas as áreas da vida: blinda sua energia contra vampiros emocionais e situações que antes te derrubavam, transforma sua mente em ferramenta de criação imparável que materializa objetivos com precisão cirúrgica e assume controle absoluto sobre sua realidade externa através do domínio interno completo.",
                "Aqui você transcende definitivamente a mentalidade de sobrevivência e entra em modo de conquista permanente — não reage mais aos problemas, mas os antecipa e os usa como combustível para crescimento exponencial, tornando-se um homem que naturalmente inspira respeito, lidera pelo exemplo e constrói um legado duradouro enquanto a maioria ainda luta contra si mesma.",
              ],
            },
          ].map((phase) => (
            <article key={phase.num} className="group">
              <div className="rounded-xl overflow-hidden shadow-brutal ring-1 ring-border mb-6">
                <img src={phase.img} alt={`Fase ${phase.num}: ${phase.title}`} width={1536} height={600} loading="lazy" className="w-full h-[180px] md:h-[280px] object-cover block" />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-display text-6xl md:text-8xl text-blood text-shadow-blood leading-none">
                  {phase.num}
                </span>
                <div className="flex items-center gap-3 text-foreground">
                  <span className="text-blood">{phase.icon}</span>
                  <h3 className="font-display text-2xl md:text-4xl uppercase tracking-tight">
                    {phase.title}
                  </h3>
                </div>
              </div>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                {phase.text.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8 h-px bg-gradient-to-r from-transparent via-blood/40 to-transparent" />
            </article>
          ))}
        </div>
      </section>

      {/* RESULTADO */}
      <section className="section-light px-4 py-20 border-y border-border/50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl md:text-5xl uppercase tracking-tight leading-tight">
            Ao final dos <span className="text-blood">2 meses de total foco</span>,<br />você não será mais o mesmo.
          </h2>
          <p className="mt-4 text-center font-display text-xl md:text-3xl uppercase text-muted-foreground">
            E o mundo vai perceber.
          </p>

          <ul className="mt-12 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            {[
              "Sua postura vai mudar. Você vai andar diferente, falar diferente e ninguém mais vai conseguir te ignorar.",
              "Sua mente vai enxergar o que antes era invisível. Oportunidades vão aparecer porque você finalmente terá olhos treinados para reconhecê-las.",
              "Seu ambiente e seus relacionamentos vão mudar. Você vai cortar o que te puxa para baixo e se cercar apenas do que te fortalece.",
              "Você vai dominar seu tempo e energia. Procrastinação deixa de ser opção — cada minuto terá direção.",
              "Você vai organizar sua vida inteira. Com clareza, foco e ação, todas as áreas vão ter propósito.",
              "Sua confiança vai se tornar inabalável. Você vai dizer não sem culpa, enfrentar o que evitava e tomar decisões que antes pareciam impossíveis.",
            ].map((it, i) => (
              <li key={i} className="flex gap-4 bg-card p-5 rounded-md border border-border">
                <Flame className="h-6 w-6 text-blood flex-shrink-0 mt-0.5" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* O QUE VOCÊ VAI RECEBER */}
      <section className="section-dark px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl md:text-5xl uppercase tracking-tight">
            O que você vai receber:
          </h2>
          <p className="mt-3 text-center font-display text-lg md:text-xl uppercase tracking-widest text-blood">
            Acesso ao aplicativo
          </p>
          <p className="mt-1 text-center text-muted-foreground">incluindo:</p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              { title: "Curso completo", desc: "Cada aula direta, sem enrolação, indo no ponto do que você precisa mudar." },
              { title: "Sistema dos 2 meses de total foco", desc: "A fórmula prática, passo a passo, que destrói sua versão fraca e forja disciplina diária." },
              { title: "Materiais complementares", desc: "Suporte escrito para aplicar na prática." },
              { title: "Diversos bônus", desc: "Aprofundando áreas específicas que aceleram sua evolução." },
              { title: "Atualizações futuras", desc: "Acesso às grandes atualizações do conteúdo de Valhalla Foco." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-6 hover:border-blood/50 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blood/15 border border-blood/40 flex items-center justify-center group-hover:bg-blood/30 transition-colors">
                    <Check className="h-5 w-5 text-blood" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl uppercase tracking-wide text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="section-light px-4 py-20 border-y border-border/50">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-blood">Bônus exclusivos</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl uppercase tracking-tight leading-tight">
            Para garantir sua transformação <span className="text-blood">permanente</span>
          </h2>
          <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed text-left">
            <p>
              Além de todo o conteúdo de Valhalla Foco, decidi adicionar bônus exclusivos para
              garantir mais ainda que você se torne um homem de verdade.
            </p>
            <p className="text-foreground font-semibold">
              Não são "bônus para encher linguiça".
            </p>
            <p>
              Eles foram criados para acelerar sua transformação, atacar pontos fracos que todo
              homem tem e garantir que você não só mude — mas <strong className="text-foreground">permaneça mudado</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* OFERTA / PREÇO */}
      <section id="checkout" className="section-dark px-4 py-20 relative">
        <div className="absolute inset-0 bg-radial-blood opacity-50 pointer-events-none" />
        <div className="relative mx-auto max-w-2xl">
          <p className="text-center font-display text-sm md:text-base uppercase tracking-[0.3em] text-blood">
            O último material de desenvolvimento pessoal que você vai comprar!
          </p>
          <h2 className="mt-4 text-center font-display text-3xl md:text-5xl uppercase tracking-tight leading-tight">
            Encerre o ciclo de tentativas. <span className="text-blood">Comece o de resultados.</span>
          </h2>

          <div className="mt-12 bg-card rounded-2xl border-2 border-blood/40 p-8 md:p-10 shadow-blood">
            <ul className="space-y-4">
              {[
                "Acesso vitalício ao sistema completo",
                "Sistema dos 2 meses de total foco",
                "Curso completo em vídeo",
                "4 Bônus exclusivos",
                "Atualizações futuras",
              ].map((it) => (
                <li key={it} className="flex items-center gap-3 text-foreground">
                  <Check className="h-5 w-5 text-blood flex-shrink-0" />
                  <span className="text-base md:text-lg">{it}</span>
                </li>
              ))}
            </ul>

            <div className="my-8 h-px bg-border" />

            <div className="text-center">
              <p className="text-muted-foreground">
                De <span className="line-through">R$ 297</span> por:
              </p>
              <p className="mt-3 font-display text-5xl md:text-7xl text-blood text-shadow-blood leading-none">
                6x R$ 5,66
              </p>
              <p className="mt-3 text-muted-foreground">
                Ou <span className="text-foreground font-semibold">R$ 29,90</span> à vista no PIX
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <HonorButton size="lg" href="https://pay.kirvano.com/c7e7e999-5822-4650-a0ef-65f51a8f11b0">Quero renascer agora</HonorButton>
            </div>

            <p className="mt-6 text-center font-display text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground">
              + 10.000 membros
            </p>
          </div>

          {/* GARANTIA */}
          <div className="mt-10 mx-auto max-w-xl bg-card border border-border rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blood/10 border border-blood/40 flex items-center justify-center">
                <Lock className="h-7 w-7 text-blood" />
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight text-foreground">
                  Garantia de 30 dias
                </h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                  Se em 30 dias você sentir que não é pra você, te devolvemos 100% do valor. Sem
                  letra miúda. Sem questionamento. Você entra com confiança. E se não sentir que é
                  pra você — sai sem prejuízo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light px-4 py-20 border-t border-border/50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl md:text-5xl uppercase tracking-tight">
            Perguntas frequentes
          </h2>
          <p className="mt-3 text-center text-muted-foreground">
            Para eliminar toda e qualquer dúvida que ainda resta na sua cabeça.
          </p>

          {/* Sobre Valhalla Foco */}
          <div className="mt-12 bg-card rounded-xl border border-border p-6 md:p-8">
            <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight text-blood">
              O que é "Valhalla Foco"?
            </h3>
            <div className="mt-4 space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Valhalla Foco não é uma marca. É um movimento — uma filosofia de vida criada para
                quem se recusa a viver no piloto automático.
              </p>
              <p>
                Enquanto o mundo tenta te transformar em mais um, Valhalla Foco existe pra
                reprogramar tua mente, reforjar tua disciplina e reativar teu propósito.
              </p>
              <p>
                Aqui, não vendemos "motivação passageira". Vendemos o sistema que cria homens
                inquebráveis. Cada conteúdo foi construído com um único objetivo: fazer você
                renascer — mentalmente, fisicamente e espiritualmente.
              </p>
              <p className="text-foreground">
                É o código que separa os que apenas existem dos que dominam a própria vida. Se você
                chegou até aqui, provavelmente já faz parte disso. Só falta assumir a sua nova
                identidade.
              </p>
            </div>
          </div>

          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {[
              { q: "Já tentei tudo, por que isso seria diferente?", a: "Porque não adiciona hábitos — reconstrói identidade. Diferença entre pintar uma parede podre e construir uma casa nova." },
              { q: "É mais um curso de motivação?", a: "Não. É anti-motivação. Funciona especialmente quando você não tem vontade nenhuma." },
              { q: "Funciona para qualquer idade?", a: "16 a 55 anos. Depois dos 55, o cérebro tem menos plasticidade para mudanças radicais." },
              { q: "E se eu não tiver disciplina para seguir?", a: "O sistema CRIA disciplina. É feito para quem não tem." },
              { q: "Como sei que não é golpe?", a: "Mais de 10.000 alunos e anos de mercado." },
              { q: "O pagamento é seguro?", a: "100%. Processado por plataforma certificada com SSL." },
              { q: "E se meu cartão não passar?", a: "Sistema aceita qualquer cartão nacional/internacional. Se falhar, tente outro ou PIX." },
              { q: "Tem garantia?", a: "30 dias incondicional. Não funcionou? Devolvemos tudo, sem perguntas." },
              { q: "Como funciona o reembolso?", a: "Solicita na plataforma, dinheiro volta no mesmo dia." },
              { q: "Quando recebo o acesso?", a: "Imediatamente após aprovação do pagamento." },
              { q: "Como acesso o conteúdo?", a: "Login e senha enviados por email + SMS. Acesso por qualquer dispositivo." },
              { q: "Quanto tempo de conteúdo?", a: "4 horas de vídeo + 200 páginas de material escrito + ferramentas práticas." },
              { q: "Em quanto tempo vejo resultados?", a: "Primeiros sinais: 7 dias. Mudança radical: 30 dias. Transformação completa: 2 meses de total foco." },
              { q: "Por que tão barato?", a: "Porque queremos alcançar milhões de homens, não apenas ricos." },
              { q: "Vai aumentar o preço?", a: "Sim. Esta é a última turma com este valor promocional." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-5 md:px-6">
                <AccordionTrigger className="text-left font-display uppercase tracking-tight text-base md:text-lg text-foreground hover:text-blood hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center bg-card rounded-xl border border-border p-6 md:p-8">
            <Zap className="h-8 w-8 text-blood mx-auto" />
            <p className="mt-4 font-display text-xl md:text-2xl uppercase tracking-tight text-foreground">
              Ainda possui dúvidas?
            </p>
            <p className="mt-2 text-muted-foreground">
              Fale com o nosso time de suporte e tire todas as suas dúvidas antes de garantir sua vaga.
            </p>
            <div className="mt-6 flex justify-center">
              <HonorButton href="#checkout">Tire suas dúvidas</HonorButton>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 py-24 relative overflow-hidden border-t border-border/50">
        <div className="absolute inset-0 bg-radial-blood opacity-70 pointer-events-none" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-6xl uppercase tracking-tight leading-tight">
            A escolha é sua.<br />
            <span className="text-blood text-shadow-blood">Mas ela expira hoje.</span>
          </h2>
          <div className="mt-10 flex justify-center">
            <HonorButton size="lg">Quero renascer</HonorButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-4 py-10 border-t border-border bg-background">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-display text-sm md:text-base tracking-widest text-muted-foreground">
              VALHALLA <span className="text-blood">FOCO</span>™
            </span>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Valhalla Foco. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
