import Navigation from "@/components/navigation";

export default function Regras() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <Navigation />
      <main className="mt-10">
        <h1 className="text-3xl font-bold text-center mb-10">Regras do Torneio de Sueca</h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="">
            <p className="text-base">
              Para que não haja dúvidas, aqui ficam as regras do torneio para que tudo corra de forma justa e organizada:
            </p>
          </div>

          <div className="glassmorphism-card p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Escolha dos Jogadores</h2>
            <p className="text-base">
              Cada núcleo deve escolher 2 dos seus 4 membros para jogar cada jogo. Não há limite de jogos que um jogador possa fazer ao longo do torneio. A equipa pode rodar os jogadores conforme necessário.
            </p>
          </div>

          <div className="glassmorphism-card p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Tipo de Jogo</h2>
            <p className="text-base">
              A escolha do tipo de jogo fica ao critério dos núcleos: podem optar por jogos de 4 ou 10 mocas, e esta decisão pode mudar de jornada para jornada.
            </p>
          </div>

          <div className="glassmorphism-card p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Marcação dos Jogos</h2>
            <p className="text-base">
              A marcação dos jogos deve ser feita entre os próprios núcleos dentro do período definido para cada jornada.
            </p>
          </div>

          <div className="glassmorphism-card p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Envio dos Resultados</h2>
            <p className="text-base">
              Após o jogo, devem enviar o resultado para mim ou para o Instagram do núcleo.
            </p>
          </div>

          <div className="glassmorphism-card p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Sistema de Pontos</h2>
            <p className="text-base">
              O torneio é em formato de liga: cada núcleo enfrenta todos os demais. Em cada jogo, o vencedor recebe 3 pontos. No final, o núcleo com mais pontos vence. Empates são resolvidos pelas mocas ganhas, depois pelas perdidas; se persistirem, um jogo extra decide o campeão.
            </p>
          </div>

          <div className="">
            <p className="text-base">Qualquer dúvida, estamos por aqui!</p>
          </div>
        </div>
      </main>
    </div>
  );
} 