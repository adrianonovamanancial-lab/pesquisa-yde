import { supabase } from "../supabaseClient";
import { Edit2, Eye, CheckCircle } from "lucide-react";

interface Answers {
  nomeIgreja?: string;
  cidade?: string;
  nomePastor?: string;
  dataEntrevista?: string;
  porteIgreja?: string;
  transmiteOnline?: string;
  produzeConteudo?: string;
  desafioDigital?: string;
  outroDesafio?: string;
  responsavelMidia?: string;
  alcanceInternet?: string;
  musicaRelevancia?: string;
  musicaUtilizaria?: string;
  redesSociaisInteresse?: string;
  redesSociaisJaFaz?: string;
  cursosInteresse?: string;
  cursosReceita?: string;
  servicoPreferido?: string;
  agregaValor?: string;
  investimento?: string;
  maisInfo?: string;
  observacoes?: string;
}

interface ReviewScreenProps {
  answers: Answers;
  onEdit: (screenIndex: number) => void;
  onConfirm: () => void;
  onBack: () => void;
}

export default function ReviewScreen({
  answers,
  onEdit,
  onConfirm,
  onBack,
}: ReviewScreenProps) {

  const formatPorte = (porte?: string) => {
    if (porte === "ate-99") return "Até 99 membros";
    if (porte === "100-299") return "De 100 a 299 membros";
    if (porte === "300-mais") return "300 membros ou mais";
    return "-";
  };

  const formatTransmite = (value?: string) => {
    if (value === "sim") return "Sim regularmente";
    if (value === "as-vezes") return "Às vezes";
    if (value === "nao") return "Não transmite";
    return "-";
  };

  const formatProduz = (value?: string) => {
    if (value === "sim") return "Sim frequentemente";
    if (value === "as-vezes") return "Às vezes";
    if (value === "nao") return "Não produz";
    return "-";
  };

  const handleConfirm = async () => {
    try {

      const payload = {
        nome_igreja: answers.nomeIgreja ?? null,
        cidade: answers.cidade ?? null,
        nome_pastor: answers.nomePastor ?? null,
        data_entrevista: answers.dataEntrevista ?? null,
        faixa_membros: answers.porteIgreja ?? null,
        transmite_online: answers.transmiteOnline ?? null,
        produz_conteudo: answers.produzeConteudo ?? null,
        desafio_digital: answers.desafioDigital ?? null,
        outro_desafio: answers.outroDesafio ?? null,
        responsavel_midia: answers.responsavelMidia ?? null,
        alcance_internet: answers.alcanceInternet ?? null,
        musica_relevancia: answers.musicaRelevancia ?? null,
        musica_utilizaria: answers.musicaUtilizaria ?? null,
        redes_sociais_interesse: answers.redesSociaisInteresse ?? null,
        redes_sociais_ja_faz: answers.redesSociaisJaFaz ?? null,
        cursos_interesse: answers.cursosInteresse ?? null,
        cursos_receita: answers.cursosReceita ?? null,
        servico_preferido: answers.servicoPreferido ?? null,
        agrega_valor: answers.agregaValor ?? null,
        investimento: answers.investimento ?? null,
        mais_info: answers.maisInfo ?? null,
        observacoes: answers.observacoes ?? null,
      };

      const { data, error } = await supabase
        .from("pesquisa_yde_respostas")
        .insert([payload])
        .select();

      if (error) {
        console.error("Erro Supabase:", error);
        alert("Erro ao salvar: " + error.message);
        return;
      }

      console.log("Entrevista salva:", data);

      onConfirm();

    } catch (err: any) {
      console.error("Erro inesperado:", err);
      alert("Erro inesperado: " + err.message);
    }
  };

  return (
    <div className="min-h-screen px-8 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center gap-4 mb-6">
          <Eye size={48} style={{ color: "#B8963A" }} />
          <h2
            className="text-4xl lg:text-5xl"
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 700,
              color: "#162C46",
            }}
          >
            Revisão das respostas da entrevista
          </h2>
        </div>

        <p
          className="text-lg mb-12"
          style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#162C46",
            opacity: 0.7,
          }}
        >
          Confira abaixo as informações registradas durante a entrevista.
        </p>

        <div className="space-y-8">

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3
              className="text-2xl font-semibold mb-4"
              style={{
                fontFamily: "Playfair Display, serif",
                color: "#162C46",
              }}
            >
              Identificação da igreja
            </h3>

            <p><b>Igreja:</b> {answers.nomeIgreja || "-"}</p>
            <p><b>Cidade:</b> {answers.cidade || "-"}</p>
            <p><b>Pastor:</b> {answers.nomePastor || "-"}</p>
            <p><b>Data:</b> {answers.dataEntrevista || "-"}</p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3
              className="text-2xl font-semibold mb-4"
              style={{
                fontFamily: "Playfair Display, serif",
                color: "#162C46",
              }}
            >
              Perfil da igreja
            </h3>

            <p><b>Membros:</b> {formatPorte(answers.porteIgreja)}</p>
            <p><b>Transmite culto:</b> {formatTransmite(answers.transmiteOnline)}</p>
            <p><b>Produz conteúdo:</b> {formatProduz(answers.produzeConteudo)}</p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3
              className="text-2xl font-semibold mb-4"
              style={{
                fontFamily: "Playfair Display, serif",
                color: "#162C46",
              }}
            >
              Desafios digitais
            </h3>

            <p><b>Dificuldade:</b> {answers.desafioDigital || "-"}</p>
            <p><b>Responsável mídia:</b> {answers.responsavelMidia || "-"}</p>
            <p><b>Alcance internet:</b> {answers.alcanceInternet || "-"}</p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3
              className="text-2xl font-semibold mb-4"
              style={{
                fontFamily: "Playfair Display, serif",
                color: "#162C46",
              }}
            >
              Avaliação final
            </h3>

            <p><b>Serviço preferido:</b> {answers.servicoPreferido || "-"}</p>
            <p><b>Agrega valor:</b> {answers.agregaValor || "-"}</p>
            <p><b>Investimento:</b> {answers.investimento || "-"}</p>
            <p><b>Mais informações:</b> {answers.maisInfo || "-"}</p>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3
              className="text-2xl font-semibold mb-4"
              style={{
                fontFamily: "Playfair Display, serif",
                color: "#162C46",
              }}
            >
              Observações
            </h3>

            <p>{answers.observacoes || "Nenhuma observação registrada."}</p>
          </div>

        </div>

        <div className="flex gap-4 mt-12">

          <button
            onClick={onBack}
            className="flex-1 px-8 py-4 rounded-lg text-xl font-semibold border-2"
            style={{
              borderColor: "#162C46",
              color: "#162C46",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Voltar e editar respostas
          </button>

          <button
            onClick={handleConfirm}
            className="flex-1 px-8 py-4 rounded-lg text-xl font-semibold flex items-center justify-center gap-3"
            style={{
              backgroundColor: "#B8963A",
              color: "#FFFFFF",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            <CheckCircle size={24} />
            Confirmar e finalizar entrevista
          </button>

        </div>

      </div>
    </div>
  );
}
