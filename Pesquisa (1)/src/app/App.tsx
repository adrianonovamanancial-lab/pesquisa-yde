import { useState, useCallback, memo } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  Music,
  Video,
  BookOpen,
  DollarSign,
  FileText,
} from 'lucide-react';
import Dashboard from './Dashboard';
import ReviewScreen from './ReviewScreen';
import FormInput from './components/FormInput';
import RadioOption from './components/RadioOption';

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

const Screen1 = memo(({ onNext }: { onNext: () => void }) => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-16 bg-white">
    <h1
      className="text-3xl sm:text-4xl lg:text-6xl mb-3 sm:mb-4 text-center max-w-4xl px-2"
      style={{
        fontFamily: 'Playfair Display, serif',
        fontWeight: 700,
        color: '#162C46',
      }}
    >
      Pesquisa de Inovação Digital para Igrejas
    </h1>

    <p
      className="text-xl sm:text-2xl mb-8 sm:mb-12 text-center"
      style={{
        fontFamily: 'Playfair Display, serif',
        fontWeight: 600,
        color: '#B8963A',
      }}
    >
      Projeto YDE
    </p>

    <p
      className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-center max-w-3xl leading-relaxed px-2"
      style={{
        fontFamily: 'Montserrat, sans-serif',
        color: '#162C46',
        opacity: 0.8,
      }}
    >
      Estamos realizando uma pesquisa com igrejas de diferentes portes para entender como tecnologia, conteúdo digital e novos formatos de comunicação podem apoiar o crescimento e o alcance das igrejas.
    </p>

    <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg mb-6 sm:mb-10 max-w-2xl w-full">
      <p
        className="text-base sm:text-lg mb-4 sm:mb-6 font-semibold"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          color: '#162C46',
        }}
      >
        O objetivo é avaliar novos serviços que podem ajudar igrejas a:
      </p>

      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <CheckCircle size={20} className="flex-shrink-0" style={{ color: '#B8963A' }} />
          <span
            className="text-sm sm:text-base lg:text-lg"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}
          >
            ampliar seu alcance online
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <CheckCircle size={20} className="flex-shrink-0" style={{ color: '#B8963A' }} />
          <span
            className="text-sm sm:text-base lg:text-lg"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}
          >
            melhorar sua comunicação digital
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <CheckCircle size={20} className="flex-shrink-0" style={{ color: '#B8963A' }} />
          <span
            className="text-sm sm:text-base lg:text-lg"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}
          >
            gerar novas fontes de sustentabilidade financeira
          </span>
        </div>
      </div>
    </div>

    <p
      className="text-sm sm:text-base mb-6 sm:mb-8 italic"
      style={{
        fontFamily: 'Montserrat, sans-serif',
        color: '#162C46',
        opacity: 0.6,
      }}
    >
      Formulário de registro de entrevista
    </p>

    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xl px-4">
      <button
        onClick={onNext}
        className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-xl font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 sm:gap-3"
        style={{
          backgroundColor: '#162C46',
          color: '#FFFFFF',
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        Iniciar entrevista
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>
    </div>
  </div>
));

const Screen2 = memo(
  ({
    answers,
    updateAnswer,
    onNext,
    onBack,
  }: {
    answers: Answers;
    updateAnswer: (key: keyof Answers, value: string) => void;
    onNext: () => void;
    onBack: () => void;
  }) => (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-16 bg-gray-50">
      <h2
        className="text-2xl sm:text-3xl lg:text-5xl mb-8 sm:mb-12 text-center px-2"
        style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          color: '#162C46',
        }}
      >
        Identificação da Igreja
      </h2>

      <div className="max-w-3xl w-full">
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border border-gray-200 space-y-5 sm:space-y-6">
          <FormInput
            label="Nome da igreja"
            value={answers.nomeIgreja || ''}
            onChange={(value) => updateAnswer('nomeIgreja', value)}
            placeholder="Digite o nome da igreja"
          />

          <FormInput
            label="Cidade"
            value={answers.cidade || ''}
            onChange={(value) => updateAnswer('cidade', value)}
            placeholder="Digite a cidade"
          />

          <FormInput
            label="Nome do pastor"
            value={answers.nomePastor || ''}
            onChange={(value) => updateAnswer('nomePastor', value)}
            placeholder="Digite o nome do pastor"
          />

          <FormInput
            label="Data da entrevista"
            value={answers.dataEntrevista || ''}
            onChange={(value) => updateAnswer('dataEntrevista', value)}
            type="date"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-3 mt-8 sm:mt-12 w-full max-w-xl">
        <button
          onClick={onBack}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-xl font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 sm:gap-3 border-2"
          style={{
            backgroundColor: 'transparent',
            borderColor: '#162C46',
            color: '#162C46',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          Voltar
        </button>

        <button
          onClick={onNext}
          className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-xl font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 sm:gap-3"
          style={{
            backgroundColor: '#162C46',
            color: '#FFFFFF',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Continuar
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  )
);

const Screen3 = memo(
  ({
    answers,
    updateAnswer,
    onNext,
    onBack,
  }: {
    answers: Answers;
    updateAnswer: (key: keyof Answers, value: string) => void;
    onNext: () => void;
    onBack: () => void;
  }) => (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-16 bg-white">
      <h2
        className="text-2xl sm:text-3xl lg:text-5xl mb-8 sm:mb-12 text-center px-2"
        style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          color: '#162C46',
        }}
      >
        Sobre a igreja
      </h2>

      <div className="max-w-3xl w-full space-y-6 sm:space-y-10">
        <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg border border-gray-200">
          <label
            className="block text-lg sm:text-xl mb-4 sm:mb-6 font-semibold"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
            }}
          >
            Quantos membros aproximadamente participam da igreja?
          </label>
          <p
            className="text-sm mb-4 sm:mb-6"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
              opacity: 0.7,
            }}
          >
            Estimativa aproximada.
          </p>

          <div className="space-y-2 sm:space-y-3">
            {[
              { value: 'ate-99', label: 'Até 99 membros' },
              { value: '100-299', label: 'De 100 a 299 membros' },
              { value: '300-mais', label: '300 membros ou mais' },
            ].map((option) => (
              <RadioOption
                key={option.value}
                name="porte"
                value={option.value}
                label={option.label}
                checked={answers.porteIgreja === option.value}
                onChange={(value) => updateAnswer('porteIgreja', value)}
              />
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg border border-gray-200">
          <label
            className="block text-lg sm:text-xl mb-4 sm:mb-6 font-semibold"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
            }}
          >
            A igreja atualmente transmite cultos online?
          </label>

          <div className="space-y-2 sm:space-y-3">
            {[
              { value: 'sim', label: 'Sim regularmente' },
              { value: 'as-vezes', label: 'Às vezes' },
              { value: 'nao', label: 'Não transmite' },
            ].map((option) => (
              <RadioOption
                key={option.value}
                name="transmite"
                value={option.value}
                label={option.label}
                checked={answers.transmiteOnline === option.value}
                onChange={(value) => updateAnswer('transmiteOnline', value)}
              />
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg border border-gray-200">
          <label
            className="block text-lg sm:text-xl mb-4 sm:mb-6 font-semibold"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
            }}
          >
            A igreja já produz conteúdos para redes sociais?
          </label>

          <div className="space-y-2 sm:space-y-3">
            {[
              { value: 'sim', label: 'Sim frequentemente' },
              { value: 'as-vezes', label: 'Às vezes' },
              { value: 'nao', label: 'Não produz' },
            ].map((option) => (
              <RadioOption
                key={option.value}
                name="produz"
                value={option.value}
                label={option.label}
                checked={answers.produzeConteudo === option.value}
                onChange={(value) => updateAnswer('produzeConteudo', value)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-3 mt-8 sm:mt-12 w-full max-w-xl">
        <button
          onClick={onBack}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-xl font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 sm:gap-3 border-2"
          style={{
            backgroundColor: 'transparent',
            borderColor: '#162C46',
            color: '#162C46',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          Voltar
        </button>

        <button
          onClick={onNext}
          className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-xl font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 sm:gap-3"
          style={{
            backgroundColor: '#162C46',
            color: '#FFFFFF',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Continuar
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  )
);

const Screen4 = memo(
  ({
    answers,
    updateAnswer,
    onNext,
    onBack,
  }: {
    answers: Answers;
    updateAnswer: (key: keyof Answers, value: string) => void;
    onNext: () => void;
    onBack: () => void;
  }) => (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-16 bg-gray-50">
      <h2
        className="text-2xl sm:text-3xl lg:text-5xl mb-8 sm:mb-12 text-center px-2"
        style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          color: '#162C46',
        }}
      >
        Desafios digitais da igreja
      </h2>

      <div className="max-w-3xl w-full space-y-6 sm:space-y-10">
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <label
            className="block text-lg sm:text-xl mb-4 sm:mb-6 font-semibold"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
            }}
          >
            Qual é a maior dificuldade da igreja em relação à comunicação digital ou redes sociais?
          </label>

          <div className="space-y-2 sm:space-y-3">
            {[
              'Não temos equipe para cuidar disso',
              'Falta conhecimento técnico',
              'Falta tempo para produzir conteúdo',
              'Não sabemos que tipo de conteúdo fazer',
              'Não vemos muito resultado nas redes',
              'A igreja não trabalha muito com redes sociais',
              'Outro',
            ].map((option) => (
              <RadioOption
                key={option}
                name="desafioDigital"
                value={option}
                label={option}
                checked={answers.desafioDigital === option}
                onChange={(value) => updateAnswer('desafioDigital', value)}
              />
            ))}
          </div>

          {answers.desafioDigital === 'Outro' && (
            <div className="mt-4">
              <FormInput
                label=""
                value={answers.outroDesafio || ''}
                onChange={(value) => updateAnswer('outroDesafio', value)}
                placeholder="Especifique o desafio"
              />
            </div>
          )}
        </div>

        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <label
            className="block text-lg sm:text-xl mb-4 sm:mb-6 font-semibold"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
            }}
          >
            Hoje existe alguém responsável por mídia, redes sociais ou comunicação na igreja?
          </label>

          <div className="space-y-2 sm:space-y-3">
            {[
              'Sim, temos uma equipe de mídia',
              'Sim, uma pessoa voluntária cuida disso',
              'O pastor ou liderança faz isso',
              'Não temos ninguém responsável',
            ].map((option) => (
              <RadioOption
                key={option}
                name="responsavelMidia"
                value={option}
                label={option}
                checked={answers.responsavelMidia === option}
                onChange={(value) => updateAnswer('responsavelMidia', value)}
              />
            ))}
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <label
            className="block text-lg sm:text-xl mb-4 sm:mb-6 font-semibold"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
            }}
          >
            A igreja gostaria de alcançar mais pessoas pela internet?
          </label>

          <div className="space-y-2 sm:space-y-3">
            {[
              'Sim, é uma prioridade',
              'Sim, mas ainda não sabemos como',
              'Não é prioridade hoje',
            ].map((option) => (
              <RadioOption
                key={option}
                name="alcanceInternet"
                value={option}
                label={option}
                checked={answers.alcanceInternet === option}
                onChange={(value) => updateAnswer('alcanceInternet', value)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-3 mt-8 sm:mt-12 w-full max-w-xl">
        <button
          onClick={onBack}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-xl font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 sm:gap-3 border-2"
          style={{
            backgroundColor: 'transparent',
            borderColor: '#162C46',
            color: '#162C46',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          Voltar
        </button>

        <button
          onClick={onNext}
          className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-xl font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 sm:gap-3"
          style={{
            backgroundColor: '#162C46',
            color: '#FFFFFF',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Continuar
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  )
);

const Screen5 = memo(
  ({
    answers,
    updateAnswer,
    onNext,
    onBack,
  }: {
    answers: Answers;
    updateAnswer: (key: keyof Answers, value: string) => void;
    onNext: () => void;
    onBack: () => void;
  }) => (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-16 bg-white">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <Music size={36} className="sm:w-12 sm:h-12 flex-shrink-0" style={{ color: '#B8963A' }} />
        <h2
          className="text-xl sm:text-2xl lg:text-5xl text-center"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            color: '#162C46',
          }}
        >
          Serviço 1 — Música personalizada para igrejas
        </h2>
      </div>

      <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg mb-6 sm:mb-10 max-w-3xl w-full">
        <p
          className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            color: '#162C46',
            opacity: 0.9,
          }}
        >
          Criamos músicas personalizadas para igrejas, com identidade própria, que podem ser usadas em:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {['abertura de cultos', 'ministrações', 'eventos', 'identidade musical da igreja'].map((item) => (
            <div key={item} className="flex items-center gap-2 sm:gap-3">
              <CheckCircle size={18} className="sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#B8963A' }} />
              <span
                className="text-xs sm:text-sm lg:text-base"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg mb-6 sm:mb-10 w-full max-w-3xl overflow-hidden shadow-lg" style={{ aspectRatio: '16/9' }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/HPqy-EwGfVs"
          title="Vídeo demonstrativo - Música personalizada"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

      <div className="max-w-3xl w-full space-y-6 sm:space-y-8">
        <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg">
          <label
            className="block text-lg sm:text-xl mb-4 sm:mb-6 font-semibold"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
            }}
          >
            Você acredita que músicas personalizadas poderiam fortalecer a identidade da igreja?
          </label>

          <div className="space-y-2 sm:space-y-3">
            {['Muito relevante', 'Interessante', 'Talvez', 'Pouco relevante', 'Não faria sentido'].map((option) => (
              <RadioOption
                key={option}
                name="musicaRelevancia"
                value={option}
                label={option}
                checked={answers.musicaRelevancia === option}
                onChange={(value) => updateAnswer('musicaRelevancia', value)}
              />
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg">
          <label
            className="block text-lg sm:text-xl mb-4 sm:mb-6 font-semibold"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
            }}
          >
            A igreja utilizaria algo assim?
          </label>

          <div className="space-y-2 sm:space-y-3">
            {['Sim', 'Talvez', 'Não'].map((option) => (
              <RadioOption
                key={option}
                name="musicaUtilizaria"
                value={option}
                label={option}
                checked={answers.musicaUtilizaria === option}
                onChange={(value) => updateAnswer('musicaUtilizaria', value)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-3 mt-8 sm:mt-12 w-full max-w-xl">
        <button
          onClick={onBack}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-xl font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 sm:gap-3 border-2"
          style={{
            backgroundColor: 'transparent',
            borderColor: '#162C46',
            color: '#162C46',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          Voltar
        </button>

        <button
          onClick={onNext}
          className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-xl font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 sm:gap-3"
          style={{
            backgroundColor: '#162C46',
            color: '#FFFFFF',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Continuar
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  )
);

const Screen6 = memo(
  ({
    answers,
    updateAnswer,
    onNext,
    onBack,
  }: {
    answers: Answers;
    updateAnswer: (key: keyof Answers, value: string) => void;
    onNext: () => void;
    onBack: () => void;
  }) => (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-16 bg-gray-50">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <Video size={36} className="sm:w-12 sm:h-12 flex-shrink-0" style={{ color: '#B8963A' }} />
        <h2
          className="text-xl sm:text-2xl lg:text-5xl text-center"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            color: '#162C46',
          }}
        >
          Serviço 2 — Edição de vídeos do culto para redes sociais
        </h2>
      </div>

      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg mb-6 sm:mb-10 max-w-3xl w-full">
        <p
          className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            color: '#162C46',
            opacity: 0.9,
          }}
        >
          Transformamos momentos do culto em conteúdos curtos (Shorts / Reels) para ajudar a igreja a alcançar mais pessoas nas redes sociais.
        </p>

        <p
          className="text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 font-semibold"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            color: '#162C46',
          }}
        >
          Isso inclui:
        </p>

        <div className="space-y-2 sm:space-y-3">
          {[
            'cortes de mensagens',
            'momentos marcantes',
            'conteúdo vertical para redes sociais',
            'vídeos prontos para Instagram, TikTok e YouTube',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 sm:gap-3">
              <CheckCircle size={18} className="sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#B8963A' }} />
              <span
                className="text-xs sm:text-sm lg:text-base"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="rounded-lg mb-6 sm:mb-10 w-full max-w-sm sm:max-w-md overflow-hidden shadow-lg mx-auto"
        style={{ aspectRatio: '9/16', maxHeight: '500px' }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/qowzBiqy-qw"
          title="Vídeo demonstrativo - Shorts para redes sociais"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

      <div className="max-w-3xl w-full space-y-6 sm:space-y-8">
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <label
            className="block text-lg sm:text-xl mb-4 sm:mb-6 font-semibold"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
            }}
          >
            A igreja teria interesse em transformar cultos em conteúdos curtos para redes sociais?
          </label>

          <div className="space-y-2 sm:space-y-3">
            {['Muito interesse', 'Talvez', 'Pouco interesse', 'Nenhum interesse'].map((option) => (
              <RadioOption
                key={option}
                name="redesSociaisInteresse"
                value={option}
                label={option}
                checked={answers.redesSociaisInteresse === option}
                onChange={(value) => updateAnswer('redesSociaisInteresse', value)}
              />
            ))}
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <label
            className="block text-lg sm:text-xl mb-4 sm:mb-6 font-semibold"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
            }}
          >
            Hoje alguém da igreja já faz esse tipo de edição?
          </label>

          <div className="space-y-2 sm:space-y-3">
            {['Sim', 'Não'].map((option) => (
              <RadioOption
                key={option}
                name="redesSociaisJaFaz"
                value={option}
                label={option}
                checked={answers.redesSociaisJaFaz === option}
                onChange={(value) => updateAnswer('redesSociaisJaFaz', value)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-3 mt-8 sm:mt-12 w-full max-w-xl">
        <button
          onClick={onBack}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-xl font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 sm:gap-3 border-2"
          style={{
            backgroundColor: 'transparent',
            borderColor: '#162C46',
            color: '#162C46',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          Voltar
        </button>

        <button
          onClick={onNext}
          className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-xl font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 sm:gap-3"
          style={{
            backgroundColor: '#162C46',
            color: '#FFFFFF',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Continuar
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  )
);

const Screen7 = memo(
  ({
    answers,
    updateAnswer,
    onNext,
    onBack,
  }: {
    answers: Answers;
    updateAnswer: (key: keyof Answers, value: string) => void;
    onNext: () => void;
    onBack: () => void;
  }) => (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-16 bg-white">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <BookOpen size={36} className="sm:w-12 sm:h-12 flex-shrink-0" style={{ color: '#B8963A' }} />
        <h2
          className="text-xl sm:text-2xl lg:text-5xl text-center"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            color: '#162C46',
          }}
        >
          Serviço 3 — Conteúdo exclusivo e cursos online
        </h2>
      </div>

      <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg mb-6 sm:mb-10 max-w-3xl w-full">
        <p
          className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            color: '#162C46',
            opacity: 0.9,
          }}
        >
          A proposta inclui criar conteúdos exclusivos ensinados pelo pastor, disponibilizados através da área de membros do YouTube.
        </p>

        <p
          className="text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 font-semibold"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            color: '#162C46',
          }}
        >
          Isso permite que a igreja:
        </p>

        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          {[
            'ofereça conteúdo aprofundado',
            'crie uma comunidade digital',
            'gere receita recorrente',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 sm:gap-3">
              <CheckCircle size={18} className="sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#B8963A' }} />
              <span
                className="text-xs sm:text-sm lg:text-base"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg border-2" style={{ borderColor: '#B8963A' }}>
          <div className="flex items-start gap-2 sm:gap-3">
            <DollarSign size={20} className="sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" style={{ color: '#B8963A' }} />
            <p
              className="text-xs sm:text-sm lg:text-base font-semibold"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                color: '#162C46',
              }}
            >
              50% da receita de adsense e gerada pelos cursos é direcionada ao Pastor.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg mb-6 sm:mb-10 w-full max-w-3xl overflow-hidden shadow-lg" style={{ aspectRatio: '16/9' }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Isc5JHCs1EY"
          title="Vídeo demonstrativo - Conteúdo exclusivo e cursos online"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

      <div className="max-w-3xl w-full space-y-6 sm:space-y-8">
        <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg">
          <label
            className="block text-lg sm:text-xl mb-4 sm:mb-6 font-semibold"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
            }}
          >
            A igreja teria interesse em oferecer conteúdos exclusivos para membros online?
          </label>

          <div className="space-y-2 sm:space-y-3">
            {['Sim', 'Talvez', 'Não'].map((option) => (
              <RadioOption
                key={option}
                name="cursosInteresse"
                value={option}
                label={option}
                checked={answers.cursosInteresse === option}
                onChange={(value) => updateAnswer('cursosInteresse', value)}
              />
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg">
          <label
            className="block text-lg sm:text-xl mb-4 sm:mb-6 font-semibold"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
            }}
          >
            Você acredita que isso poderia gerar receita recorrente para a igreja?
          </label>

          <div className="space-y-2 sm:space-y-3">
            {['Sim', 'Talvez', 'Não'].map((option) => (
              <RadioOption
                key={option}
                name="cursosReceita"
                value={option}
                label={option}
                checked={answers.cursosReceita === option}
                onChange={(value) => updateAnswer('cursosReceita', value)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-3 mt-8 sm:mt-12 w-full max-w-xl">
        <button
          onClick={onBack}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-xl font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 sm:gap-3 border-2"
          style={{
            backgroundColor: 'transparent',
            borderColor: '#162C46',
            color: '#162C46',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          Voltar
        </button>

        <button
          onClick={onNext}
          className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-xl font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 sm:gap-3"
          style={{
            backgroundColor: '#162C46',
            color: '#FFFFFF',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Continuar
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  )
);

const Screen8 = memo(
  ({
    answers,
    updateAnswer,
    onNext,
    onBack,
  }: {
    answers: Answers;
    updateAnswer: (key: keyof Answers, value: string) => void;
    onNext: () => void;
    onBack: () => void;
  }) => (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-16 bg-gray-50">
      <h2
        className="text-2xl sm:text-3xl lg:text-5xl mb-8 sm:mb-12 text-center px-2"
        style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          color: '#162C46',
        }}
      >
        Avaliação final
      </h2>

      <div className="max-w-3xl w-full space-y-6 sm:space-y-8">
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <label
            className="block text-lg sm:text-xl mb-4 sm:mb-6 font-semibold"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
            }}
          >
            Qual desses serviços mais chamou a atenção?
          </label>

          <div className="space-y-2 sm:space-y-3">
            {['Música personalizada', 'Conteúdos curtos do culto', 'Cursos para membros'].map((option) => (
              <RadioOption
                key={option}
                name="servicoPreferido"
                value={option}
                label={option}
                checked={answers.servicoPreferido === option}
                onChange={(value) => updateAnswer('servicoPreferido', value)}
              />
            ))}
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <label
            className="block text-lg sm:text-xl mb-4 sm:mb-6 font-semibold"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
            }}
          >
            O Projeto YDE poderia agregar valor à igreja?
          </label>

          <div className="space-y-2 sm:space-y-3">
            {['Muito', 'Talvez', 'Pouco', 'Não'].map((option) => (
              <RadioOption
                key={option}
                name="agregaValor"
                value={option}
                label={option}
                checked={answers.agregaValor === option}
                onChange={(value) => updateAnswer('agregaValor', value)}
              />
            ))}
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <label
            className="block text-lg sm:text-xl mb-4 sm:mb-6 font-semibold"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
            }}
          >
            Se a igreja contratasse um serviço como esse, qual faixa de investimento mensal faria mais sentido?
          </label>

          <div className="space-y-2 sm:space-y-3">
            {['Até R$ 300', 'Até R$ 1.000', 'Até R$ 2.000', 'Até R$ 3.000', 'Acima de R$ 3.000'].map(
              (option) => (
                <RadioOption
                  key={option}
                  name="investimento"
                  value={option}
                  label={option}
                  checked={answers.investimento === option}
                  onChange={(value) => updateAnswer('investimento', value)}
                />
              )
            )}
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <label
            className="block text-lg sm:text-xl mb-4 sm:mb-6 font-semibold"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
            }}
          >
            Gostaria de receber mais informações sobre o projeto no futuro?
          </label>

          <div className="space-y-2 sm:space-y-3">
            {['Sim', 'Talvez', 'Não'].map((option) => (
              <RadioOption
                key={option}
                name="maisInfo"
                value={option}
                label={option}
                checked={answers.maisInfo === option}
                onChange={(value) => updateAnswer('maisInfo', value)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-3 mt-8 sm:mt-12 w-full max-w-xl">
        <button
          onClick={onBack}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-xl font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 sm:gap-3 border-2"
          style={{
            backgroundColor: 'transparent',
            borderColor: '#162C46',
            color: '#162C46',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          Voltar
        </button>

        <button
          onClick={onNext}
          className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-xl font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 sm:gap-3"
          style={{
            backgroundColor: '#162C46',
            color: '#FFFFFF',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Continuar
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  )
);

const Screen9 = memo(
  ({
    answers,
    updateAnswer,
    onNext,
    onBack,
  }: {
    answers: Answers;
    updateAnswer: (key: keyof Answers, value: string) => void;
    onNext: () => void;
    onBack: () => void;
  }) => (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-16 bg-white">
      <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
        <FileText size={36} className="sm:w-12 sm:h-12 flex-shrink-0" style={{ color: '#B8963A' }} />
        <h2
          className="text-2xl sm:text-3xl lg:text-5xl text-center"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            color: '#162C46',
          }}
        >
          Observações do entrevistador
        </h2>
      </div>

      <div className="max-w-3xl w-full">
        <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg border border-gray-200">
          <label
            className="block text-lg sm:text-xl mb-4 sm:mb-6 font-semibold"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
            }}
          >
            Registre comentários adicionais da conversa
          </label>

          <textarea
            value={answers.observacoes || ''}
            onChange={(e) => updateAnswer('observacoes', e.target.value)}
            rows={8}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 transition-all text-base sm:text-lg focus:outline-none resize-none"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              borderColor: '#B8963A',
              color: '#162C46',
            }}
            placeholder="Digite aqui observações importantes, comentários do pastor, reações aos serviços, contexto adicional da igreja, etc."
          />
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-3 mt-8 sm:mt-12 w-full max-w-xl">
        <button
          onClick={onBack}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-xl font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 sm:gap-3 border-2"
          style={{
            backgroundColor: 'transparent',
            borderColor: '#162C46',
            color: '#162C46',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          Voltar
        </button>

        <button
          onClick={onNext}
          className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-xl font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 sm:gap-3"
          style={{
            backgroundColor: '#162C46',
            color: '#FFFFFF',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Revisar respostas
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  )
);

const Screen10 = memo(
  ({
    answers,
    onEdit,
    onConfirm,
    onBack,
  }: {
    answers: Answers;
    onEdit: (screenIndex: number) => void;
    onConfirm: () => void;
    onBack: () => void;
  }) => (
    <ReviewScreen
      answers={answers}
      onEdit={onEdit}
      onConfirm={onConfirm}
      onBack={onBack}
    />
  )
);

const Screen11 = memo(({ onNewSurvey }: { onNewSurvey: () => void }) => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-16 bg-white">
    <CheckCircle size={60} className="sm:w-20 sm:h-20 mb-6 sm:mb-8" style={{ color: '#B8963A' }} />

    <h2
      className="text-3xl sm:text-4xl lg:text-6xl mb-6 sm:mb-8 text-center max-w-3xl px-2"
      style={{
        fontFamily: 'Playfair Display, serif',
        fontWeight: 700,
        color: '#162C46',
      }}
    >
      Entrevista finalizada
    </h2>

    <p
      className="text-lg sm:text-xl lg:text-2xl text-center max-w-2xl leading-relaxed mb-8 sm:mb-12 px-2"
      style={{
        fontFamily: 'Montserrat, sans-serif',
        color: '#162C46',
        opacity: 0.8,
      }}
    >
      Os dados foram registrados com sucesso. Esta entrevista contribui para desenvolver soluções que podem fortalecer o alcance e a comunicação das igrejas.
    </p>

    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xl">
      <button
        onClick={onNewSurvey}
        className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-xl font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 sm:gap-3 border-2"
        style={{
          backgroundColor: 'transparent',
          borderColor: '#B8963A',
          color: '#162C46',
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        Nova Entrevista
      </button>
    </div>

    <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gray-50 rounded-lg max-w-2xl w-full">
      <p
        className="text-lg sm:text-xl text-center"
        style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 600,
          color: '#B8963A',
        }}
      >
        Projeto YDE
      </p>
      <p
        className="text-sm sm:text-base text-center mt-2"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          color: '#162C46',
          opacity: 0.7,
        }}
      >
        Por todo o mundo
      </p>
    </div>
  </div>
));

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showDashboard, setShowDashboard] = useState(false);

  const updateAnswer = useCallback((key: keyof Answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }, []);

  const nextScreen = useCallback(() => {
    if (currentScreen < 10) {
      setCurrentScreen(currentScreen + 1);
    }
  }, [currentScreen]);

  const prevScreen = useCallback(() => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  }, [currentScreen]);

  const resetSurvey = useCallback(() => {
    setAnswers({});
    setCurrentScreen(0);
    setShowDashboard(false);
  }, []);

  const saveSurvey = useCallback(() => {
    const surveys = JSON.parse(localStorage.getItem('ydeSurveys') || '[]');
    surveys.push(answers);
    localStorage.setItem('ydeSurveys', JSON.stringify(surveys));
  }, [answers]);

  const handleConfirmSurvey = useCallback(() => {
    saveSurvey();
    setCurrentScreen(10);
  }, [saveSurvey]);

  if (showDashboard) {
    return <Dashboard onBack={() => setShowDashboard(false)} />;
  }

  return (
    <div className="w-full">
      {currentScreen === 0 && <Screen1 onNext={nextScreen} />}

      {currentScreen === 1 && (
        <Screen2 answers={answers} updateAnswer={updateAnswer} onNext={nextScreen} onBack={() => setCurrentScreen(0)} />
      )}

      {currentScreen === 2 && (
        <Screen3 answers={answers} updateAnswer={updateAnswer} onNext={nextScreen} onBack={prevScreen} />
      )}

      {currentScreen === 3 && (
        <Screen4 answers={answers} updateAnswer={updateAnswer} onNext={nextScreen} onBack={prevScreen} />
      )}

      {currentScreen === 4 && (
        <Screen5 answers={answers} updateAnswer={updateAnswer} onNext={nextScreen} onBack={prevScreen} />
      )}

      {currentScreen === 5 && (
        <Screen6 answers={answers} updateAnswer={updateAnswer} onNext={nextScreen} onBack={prevScreen} />
      )}

      {currentScreen === 6 && (
        <Screen7 answers={answers} updateAnswer={updateAnswer} onNext={nextScreen} onBack={prevScreen} />
      )}

      {currentScreen === 7 && (
        <Screen8 answers={answers} updateAnswer={updateAnswer} onNext={nextScreen} onBack={prevScreen} />
      )}

      {currentScreen === 8 && (
        <Screen9 answers={answers} updateAnswer={updateAnswer} onNext={nextScreen} onBack={prevScreen} />
      )}

      {currentScreen === 9 && (
        <Screen10
          answers={answers}
          onEdit={setCurrentScreen}
          onConfirm={handleConfirmSurvey}
          onBack={prevScreen}
        />
      )}

      {currentScreen === 10 && <Screen11 onNewSurvey={resetSurvey} />}

      {currentScreen < 10 && (
        <div className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-50 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
            <div
              key={index}
              className="transition-all rounded-full"
              style={{
                width: currentScreen === index ? '24px' : '8px',
                height: '8px',
                backgroundColor: currentScreen === index ? '#B8963A' : 'rgba(184, 150, 58, 0.3)',
              }}
            />
          ))}
        </div>
      )}

      {currentScreen < 10 && (
        <div
          className="fixed top-4 sm:top-8 right-4 sm:right-8 text-base sm:text-lg z-50 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            color: '#162C46',
          }}
        >
          {currentScreen + 1} / 10
        </div>
      )}
    </div>
  );
}
