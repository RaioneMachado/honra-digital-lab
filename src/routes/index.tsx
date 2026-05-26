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
            Estamos quase na metade do ano... E você jurou que <span className="text-blood">esse seria diferente</span>
          </h2>
          <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>Recorda do ânimo de janeiro? Das juras que fez a si próprio, à sua mulher, aos seus filhos, ao seu pai?</p>
            <p>Mas encare com sinceridade sua rotina de hoje... seu corpo... sua testosterona no chão... seu casamento esfriando... seus filhos crescendo sem te ver presente de verdade.</p>
            <p className="text-foreground">É praticamente a mesma vida sem brilho de seis meses atrás — só que com mais barriga, menos cabelo e menos vontade na cama.</p>
            <p className="text-foreground font-semibold border-l-4 border-blood pl-4">
              E o pior: você já está fantasiando o ano que vem como "o ano definitivo" — a mesma mentira covarde que
              você repete para si há quantos anos? Enquanto isso sua família te observa fracassar em silêncio.
            </p>
            <p>
              Enquanto isso, quem está à sua volta avança, vira referência, sustenta a casa de cabeça erguida. E você
              segue parado no mesmo ponto, terceirizando a responsabilidade da sua própria vida.
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
            Se em quase 6 meses você não conseguiu se transformar... por que acreditar que vai dar certo nos próximos 6?
          </h3>
          <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p className="text-foreground font-semibold">
              Sem nenhum sistema concreto. Sem nenhum método validado. Só com a mesma "vontade"
              que te traiu por 4 meses seguidos.
            </p>
            <p>No fim do ano, você vai estar:</p>
            <ul className="space-y-3 pl-1">
              <li className="flex gap-3"><span className="text-blood mt-1">›</span> Encarando no espelho o mesmo homem flácido, sem testosterona, sem brilho nos olhos?</li>
              <li className="flex gap-3"><span className="text-blood mt-1">›</span> Recebendo o mesmo salário, sem sustentar a sua família como prometeu, repetindo a mesma rotina sem sentido?</li>
              <li className="flex gap-3"><span className="text-blood mt-1">›</span> Vendo seu filho crescer com vergonha do pai que tem, e sua mulher perdendo o respeito por você dia após dia?</li>
              <li className="flex gap-3 text-foreground font-semibold"><span className="text-blood mt-1">›</span> Ou finalmente vai assumir a responsabilidade de ser o homem que sua família precisa que você seja?</li>
            </ul>
            <p className="text-foreground bg-blood/10 p-4 rounded-md border border-blood/30">
              Porque algo é certo: <strong>o ano vai acabar — com ou sem a sua virada.</strong>
            </p>
            <p className="text-foreground">
              A questão é se você vai virar a chave nos próximos 2 meses... ou continuar covarde, terceirizando culpa
              e empurrando para o ano que vem o que você devia ter resolvido como homem hoje.
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
              E é dessa forma que você joga fora semanas. Meses. Anos por completo — enquanto sua testosterona despenca,
              seu corpo apodrece e seu papel de homem dentro de casa vira piada.
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
              <p className="text-foreground"><strong>Estamos quase na metade do ano.</strong></p>
              <p className="text-muted-foreground mt-1">Mas o seu amansamento — e a vergonha que sua família sente em silêncio — pode terminar agora.</p>
            </div>

            <div className="mt-8 flex justify-center">
              <HonorButton>Quero romper essa cela!</HonorButton>
            </div>
          </div>
        </div>
      </section>

      {/* TESTOSTERONA / FAMÍLIA / RESPONSABILIDADE */}
      <section className="section-dark relative px-4 py-20 border-t border-border/50">
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-sm md:text-base uppercase tracking-[0.3em] text-blood mb-6 text-center">
            A verdade que ninguém vai ter coragem de te dizer:
          </p>
          <h2 className="text-center font-display text-3xl md:text-5xl uppercase tracking-tight leading-tight">
            Você não está cansado. Você está <span className="text-blood">castrado.</span>
          </h2>

          <div className="mt-10 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Sua testosterona está no chão. E não é "idade". É escolha. É o açúcar que você enfia goela abaixo,
              o álcool de toda sexta, a pornografia que te suga todo dia, o sono de 5 horas, o sedentarismo, o estresse
              crônico de uma vida que você nunca teve coragem de mudar.
            </p>
            <p className="text-foreground font-semibold">
              O resultado? Um homem biologicamente apagado.
            </p>
            <ul className="space-y-3 pl-1">
              <li className="flex gap-3"><span className="text-blood mt-1">›</span> Sem libido para olhar sua mulher como homem.</li>
              <li className="flex gap-3"><span className="text-blood mt-1">›</span> Sem energia para brincar com seu filho no fim do dia.</li>
              <li className="flex gap-3"><span className="text-blood mt-1">›</span> Sem agressividade saudável para ir atrás do que quer no trabalho.</li>
              <li className="flex gap-3"><span className="text-blood mt-1">›</span> Sem presença, sem voz, sem peso. Um homem que ninguém respeita — nem você mesmo.</li>
            </ul>

            <p className="text-foreground border-l-4 border-blood pl-4 font-semibold">
              E o pior é que você sabe. Você sente. Toda vez que se olha no espelho sem camisa. Toda vez que sua
              mulher desvia o olhar. Toda vez que seu pai te liga e você finge que está tudo bem.
            </p>

            <p>
              Você foi colocado nesse mundo para liderar uma casa. Para proteger. Para prover. Para ser o ponto de
              segurança da sua mulher e o exemplo do seu filho. E hoje você é o quê? Um moleque adulto, refém do
              celular, vivendo de promessas e desculpas.
            </p>

            <p className="text-foreground font-semibold">
              Sua família não precisa do seu choro. Precisa da sua coluna ereta.
            </p>

            <p>
              Assumir responsabilidade não é frase de motivação. É a única coisa que separa um homem de uma criança
              de barba. É acordar cedo mesmo doendo. É treinar mesmo sem vontade. É cortar o que te enfraquece
              mesmo gostando. É olhar para a sua família e dizer: <strong className="text-foreground">"A partir de
              hoje, o problema desta casa sou eu — e a solução também."</strong>
            </p>

            <p className="text-foreground bg-blood/10 p-4 rounded-md border border-blood/30">
              Se você não reerguer sua testosterona, sua disciplina e o seu papel de homem nos próximos 2 meses,
              outro homem vai ocupar o espaço que era pra ser seu. No trabalho. Na cabeça do seu filho. E, mais cedo
              ou mais tarde, na cama da sua mulher.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <HonorButton size="lg">Vou assumir minha casa</HonorButton>
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
          O Renascimento em 3 fases
        </h2>

        <div className="mt-16 mx-auto max-w-5xl space-y-20">
          {[
            {
              num: "1",
              title: "Demolição",
              img: phaseDemolition,
              icon: <Skull className="h-7 w-7" />,
              text: [
                "Nessa primeira etapa avassaladora, você vai mapear e arrasar de forma sistemática tudo que te mantém amarrado ao automático: vícios digitais que sugam sua energia vital, distrações que partem seu foco em pedaços, crenças limitantes que minam seu potencial e a obsessão doentia por aprovação alheia que te obriga a viver pelos outros.",
                "É impossível erguer uma construção sólida sobre alicerces apodrecidos. Antes de virar quem você deve ser, é preciso aniquilar por completo quem você não quer mais ser — e esta etapa é o tapa de realidade que separa homens de verdade dos sonhadores eternos, abrindo sua mente para criar de fato pela primeira vez em anos.",
              ],
            },
            {
              num: "2",
              title: "Reconstrução",
              img: phaseReconstruction,
              icon: <Shield className="h-7 w-7" />,
              text: [
                "Com o terreno mental totalmente limpo, você levanta um novo \"você\" desde a base: estabelece um código pessoal inquebrantável que opera como lei interior, cria rituais sagrados que convertem dor em disciplina automática e reprograma por completo sua autoimagem por meio de ações reais, e não de afirmações vazias.",
                "Enquanto os métodos tradicionais tentam encaixar bons hábitos em uma personalidade quebrada, aqui você refaz sua identidade pelas raízes — disciplina deixa de ser \"algo que você executa\" para virar \"aquilo que você é\", formando um sistema interno que te força a honrar a palavra dada e devolve seu respeito próprio sem qualquer dúvida.",
              ],
            },
            {
              num: "3",
              title: "Expansão",
              img: phaseExpansion,
              icon: <CrownIcon className="h-7 w-7" />,
              text: [
                "Com bases de aço fincadas, você amplia seu domínio sobre todas as esferas da vida: blinda sua energia contra vampiros emocionais e cenários que antes te derrubavam, converte sua mente em uma ferramenta de criação implacável que concretiza metas com precisão cirúrgica e assume controle total sobre a sua realidade externa por meio do domínio interno completo.",
                "Aqui você ultrapassa de vez a mentalidade de sobrevivência e entra em modo de conquista contínua — não responde mais aos problemas, mas os antevê e os transforma em combustível para um crescimento exponencial, virando um homem que desperta respeito naturalmente, conduz pelo exemplo e ergue um legado duradouro, enquanto a maior parte ainda briga contra si mesma.",
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
            Após os <span className="text-blood">2 meses de total foco</span>,<br />você já não será o mesmo.
          </h2>
          <p className="mt-4 text-center font-display text-xl md:text-3xl uppercase text-muted-foreground">
            E todos ao redor vão notar.
          </p>

          <ul className="mt-12 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            {[
              "Sua presença vai mudar. Você vai caminhar de outro jeito, falar de outro jeito e ninguém mais vai conseguir te ignorar.",
              "Sua mente vai notar o que antes passava batido. Oportunidades vão surgir porque você finalmente terá o olhar afiado para identificá-las.",
              "Seu ambiente e suas relações vão se transformar. Você vai eliminar o que te derruba e ficar somente com o que te fortalece.",
              "Você vai mandar no seu tempo e na sua energia. Procrastinar deixa de ser uma escolha — cada minuto vai ter um rumo.",
              "Você vai colocar ordem na vida toda. Com clareza, foco e movimento, cada área terá propósito.",
              "Sua autoconfiança vai se tornar inquebrável. Você vai dizer não sem culpa, encarar o que adiava e tomar decisões que antes pareciam fora de alcance.",
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
            O que está incluso:
          </h2>
          <p className="mt-3 text-center font-display text-lg md:text-xl uppercase tracking-widest text-blood">
            Acesso ao aplicativo
          </p>
          <p className="mt-1 text-center text-muted-foreground">contendo:</p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              { title: "Curso completo", desc: "Cada aula objetiva, sem rodeios, atacando exatamente o que você precisa transformar." },
              { title: "Sistema dos 2 meses de total foco", desc: "A receita prática, passo a passo, que pulveriza sua versão frágil e cria disciplina diária." },
              { title: "Materiais complementares", desc: "Apoio escrito para colocar tudo em prática." },
              { title: "Diversos bônus", desc: "Mergulhos em áreas específicas que turbinam sua evolução." },
              { title: "Atualizações futuras", desc: "Acesso às próximas grandes atualizações do conteúdo de Valhalla Foco." },
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
            Para blindar sua transformação <span className="text-blood">duradoura</span>
          </h2>
          <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed text-left">
            <p>
              Além de tudo o que já está em Valhalla Foco, resolvi incluir bônus exclusivos para
              reforçar ainda mais a sua jornada rumo a se tornar um homem de verdade.
            </p>
            <p className="text-foreground font-semibold">
              Não são "bônus para fazer volume".
            </p>
            <p>
              Eles foram pensados para acelerar a sua mudança, mirar nas falhas que todo
              homem possui e assegurar que você não apenas mude — mas <strong className="text-foreground">se mantenha mudado</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* OFERTA / PREÇO */}
      <section id="checkout" className="section-dark px-4 py-20 relative">
        <div className="absolute inset-0 bg-radial-blood opacity-50 pointer-events-none" />
        <div className="relative mx-auto max-w-2xl">
          <p className="text-center font-display text-sm md:text-base uppercase tracking-[0.3em] text-blood">
            O último material de desenvolvimento pessoal que vai entrar no seu carrinho!
          </p>
          <h2 className="mt-4 text-center font-display text-3xl md:text-5xl uppercase tracking-tight leading-tight">
            Encerre o ciclo de tentativas. <span className="text-blood">Comece o de resultados.</span>
          </h2>

          <div className="mt-12 bg-card rounded-2xl border-2 border-blood/40 p-8 md:p-10 shadow-blood">
            <ul className="space-y-4">
              {[
                "Acesso para sempre ao sistema completo",
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
                De <span className="line-through">R$ 297</span> por apenas:
              </p>
              <p className="mt-3 font-display text-5xl md:text-7xl text-blood text-shadow-blood leading-none">
                8x R$ 5,07
              </p>
              <p className="mt-3 text-muted-foreground">
                Ou <span className="text-foreground font-semibold">R$ 34,90</span> pagando no PIX
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
                  Se em 30 dias você concluir que não é pra você, devolvemos 100% do valor. Sem
                  cláusulas escondidas. Sem perguntas. Você entra tranquilo. E se sentir que não
                  combina — sai sem perder nada.
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
            Dúvidas mais comuns
          </h2>
          <p className="mt-3 text-center text-muted-foreground">
            Para tirar qualquer pergunta que ainda esteja passando pela sua cabeça.
          </p>

          {/* Sobre Valhalla Foco */}
          <div className="mt-12 bg-card rounded-xl border border-border p-6 md:p-8">
            <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight text-blood">
              O que é "Valhalla Foco"?
            </h3>
            <div className="mt-4 space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Valhalla Foco não é apenas uma marca. É um movimento — uma filosofia de vida criada
                para quem se nega a viver no automático.
              </p>
              <p>
                Enquanto o mundo tenta te encaixar como mais um da multidão, Valhalla Foco existe
                para reprogramar a sua mente, reforjar a sua disciplina e reacender o seu propósito.
              </p>
              <p>
                Aqui, não entregamos "motivação passageira". Entregamos o sistema que forma homens
                inquebráveis. Cada conteúdo foi montado com um único alvo: fazer você renascer —
                mentalmente, fisicamente e espiritualmente.
              </p>
              <p className="text-foreground">
                É o código que distingue os que apenas existem dos que controlam a própria vida. Se
                você chegou até aqui, provavelmente já faz parte disso. Só resta assumir a sua nova
                identidade.
              </p>
            </div>
          </div>

          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {[
              { q: "Já tentei tudo, por que dessa vez seria diferente?", a: "Porque aqui não se empilha hábitos — refaz-se identidade. É a diferença entre pintar uma parede apodrecida e levantar uma casa do zero." },
              { q: "É só mais um curso motivacional?", a: "Não. É anti-motivação. Funciona principalmente quando você não tem vontade alguma." },
              { q: "Serve para qualquer idade?", a: "Dos 16 aos 55 anos. Após os 55, o cérebro tem menos plasticidade para mudanças tão radicais." },
              { q: "E se eu não tiver disciplina para seguir?", a: "O sistema CRIA a disciplina. Foi feito justamente para quem ainda não tem." },
              { q: "Como saber que não é golpe?", a: "Mais de 10.000 alunos e anos de estrada no mercado." },
              { q: "O pagamento é seguro?", a: "100%. Processado por plataforma certificada e protegida com SSL." },
              { q: "E se o meu cartão não passar?", a: "A plataforma aceita qualquer cartão nacional ou internacional. Se falhar, tente outro ou opte pelo PIX." },
              { q: "Tem garantia?", a: "30 dias incondicional. Não funcionou? Devolvemos tudo, sem fazer pergunta." },
              { q: "Como funciona o reembolso?", a: "Você pede pela plataforma e o dinheiro retorna no mesmo dia." },
              { q: "Em quanto tempo recebo o acesso?", a: "Na hora, assim que o pagamento for confirmado." },
              { q: "Como faço para acessar o conteúdo?", a: "Login e senha são enviados por email e SMS. Pode usar em qualquer aparelho." },
              { q: "Qual a duração do conteúdo?", a: "4 horas em vídeo + 200 páginas de material escrito + ferramentas práticas." },
              { q: "Quando aparecem os primeiros resultados?", a: "Sinais iniciais: 7 dias. Mudança intensa: 30 dias. Transformação completa: 2 meses de total foco." },
              { q: "Por que está tão acessível?", a: "Porque o objetivo é alcançar milhões de homens, e não só os mais ricos." },
              { q: "O preço vai subir?", a: "Sim. Esta é a última turma com esse valor promocional." },
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
              Continua com perguntas?
            </p>
            <p className="mt-2 text-muted-foreground">
              Converse com o nosso time de suporte e elimine qualquer dúvida antes de garantir sua vaga.
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
            A decisão é sua.<br />
            <span className="text-blood text-shadow-blood">Mas ela vence hoje.</span>
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
