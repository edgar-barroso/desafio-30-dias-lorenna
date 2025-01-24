"use client";
import Image from "next/image";
import { Belt } from "./components/belt";
import { Button } from "./components/button";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "motion/react";
import { AiOutlineCaretDown } from "react-icons/ai";

export default function Home() {
  return (
    <main className=" overflow-hidden">
      <section className="relative bg-[url('/fundo.png')] w-screen  bg-cover">
        <div className="flex flex-row px-[10vw] max-md:px-[5vw]max-md:flex-col max-md:items-center max-md:justify-center ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col  items-start justify-center gap-4 md:max-w-[50vw] "
          >
            <Image
              width={200}
              height={200}
              alt="imagem logotipo"
              src={"/logotipo.png"}
            />
            <h1 className="text-5xl font-extrabold max-md:text-4xl">
              Transforme Seu Corpo e Sua Vida em{" "}
              <span className="text-secondary">Apenas 30 Dias!</span>
            </h1>
            <h2 className="text-lg font-light max-md:text-sm">
              Um método prático, eficaz e comprovado para dizer adeus ás
              gordurinhas indesejadas
            </h2>

            <Button />
          </motion.div>

          <Image
            width={1000}
            height={1000}
            alt="imagem lorenna"
            className="absolute right-0 top-1/2 transform -translate-y-1/3 max-w-[50vw] max-md:hidden"
            src={"/lorenna-sem-fundo.png"}
          />
        </div>
        <div className="relative z-30 h-10">
          <Belt />
        </div>
      </section>
      <motion.section className="relative bg-[#ECE7E3] flex flex-col items-center gap-10 pt-20 z-20 ">
        <p className="text-gray-600 border-primary border-l-4 pl-2">Assista</p>
        <video
          className="w-[800px] rounded-2xl border-4 border-primary"
          controls
          preload="auto"
          playsInline
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <Button />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-row px-[10vw] max-md:px-[5vw] gap-10 my-10 max-md:hidden"
      >
        <Image
          src={"/lorenna-3.jpg"}
          alt={""}
          width={500}
          height={500}
          className="rounded-3xl w-auto h-[400px] max-md:hidden"
        />
        <div className="flex flex-col gap-8 max-md:items-center ">
          <p className="text-gray-600 border-primary border-l-4 pl-2">
            Sobre mim
          </p>
          <h3 className=" text-3xl max-md:text-center text-secondary">
            Quem sou eu?
          </h3>
          <p className="text-gray-700 text-wrap">
            Quem é nutricionista Lorenna Lizot? Sou nutri Lorenna Lizot
            especialista em resultados sem restrições para mulheres e mães.
            Transformo a vida de mulheres diariamente aumentando sua autoestima
            e recuperando seu corpo. Me especializo diariamente na nutrição
            humanizada, levando saúde mental e prazer da alimentação junto com a
            busca do sonhado resultado estético. Uma mulher inspirada, mãe de
            duas meninas e uma profissional dedicada. Descobrir minha verdadeira
            paixão: auxiliar mulheres insatisfeitas a encontrarem o amor próprio
            e a confiança em si mesmas. Redirecionei minha carreira e foquei em
            ajudar mães a recuperarem sua autoestima através da alimentação
            equilibrada e do abandono de maus hábitos. Hoje isso é possível
            devido uma grande experiência atendendo mulheres por mais de 10 anos
            com diversas queixas estéticas. Além de esteticista e pós graduada
            em nutrição estética juntei toda minha bagagem para te ajudar, vem
            comigo que te mostro como é possível ser mães e resgatar sua
            autoestima através da alimentação e de uma forma duradoura, sem
            sofrimento.
          </p>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col bg-[#ECE7E3] w-full items-center py-10 gap-10 text-secondary px-[10vw] max-md:px-[5vw]"
      >
        <p className="text-gray-600 border-primary border-l-4 pl-2">Método</p>
        <h3 className=" text-3xl max-md:text-center">
          Pra quem é esse método?
        </h3>
        <div className="flex flex-row gap-10 justify-between items-start ">
          <div className="flex flex-col gap-6 text-wrap">
            <div className="flex gap-4 items-center">
              <FaCheckCircle size={40} className="shrink-0" />
              <p className="text-gray-800 text-lg text-wrap">
                Quer emagrecer de forma saudável, sem dietas restritivas ou
                métodos extremos
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <FaCheckCircle size={40} className="shrink-0" />
              <p className="text-gray-800 text-lg text-wrap">
                Sente dificuldade em manter a motivação ao longo do processo
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <FaCheckCircle size={40} className="shrink-0" />
              <p className="text-gray-800 text-lg text-wrap">
                Não tem tempo para passar horas na academia ou cozinhar
                refeições complicadas
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <FaCheckCircle size={40} className="shrink-0" />
              <p className="text-gray-800 text-lg text-wrap">
                Já tentou de tudo, mas ainda não encontrou algo que realmente
                funcione
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <FaCheckCircle size={40} className="shrink-0" />
              <p className="text-gray-800 text-lg text-wrap">
                Quer transformar não apenas o corpo, mas também a mente
              </p>
            </div>
          </div>
          <Image
            src={"/lorenna.jpg"}
            alt={""}
            width={500}
            height={500}
            className="rounded-3xl h-[400px] w-auto max-md:hidden"
          />
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-row px-[10vw] max-md:px-[5vw] gap-10 my-10"
      >
        <Image
          src={"/lorenna-2.jpg"}
          alt={""}
          width={500}
          height={500}
          className="rounded-3xl w-auto h-[400px] max-md:hidden"
        />
        <div className="flex flex-col gap-8 max-md:items-center ">
          <p className="text-gray-600 border-primary border-l-4 pl-2">Método</p>
          <h3 className=" text-3xl max-md:text-center text-secondary">
            Por que o meu método é diferente?
          </h3>
          <p className="text-gray-700 text-wrap">
            O que torna o meu método único é a combinação perfeita entre
            simplicidade, acessibilidade e resultados reais. No Desafio de 30
            Dias de Emagrecimento, você não estará sozinho(a): terá meu
            acompanhamento diário pelo WhatsApp, com suporte personalizado,
            orientações ajustadas às suas necessidades e aquele incentivo
            constante que faz toda a diferença. Diferente das dietas
            tradicionais e programas genéricos, o foco aqui é na sua realidade.
          </p>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative h-[400px] max-md:h-[800px] md:bg-[#ECE7E3] md:my-80 max-md:flex max-md:flex-col max-md items-center"
      >
        <Image
          src={"/banner-2.png"}
          alt={""}
          width={500}
          height={500}
          className="md:absolute left-[10%] -top-1/2 rounded-3xl w-auto md:h-[400px] "
        />
        <Image
          src={"/banner-1.png"}
          alt={""}
          width={500}
          height={500}
          className="md:absolute right-[10%] top-1/2 rounded-3xl w-auto md:h-[400px] "
        />
      </motion.section>
      <div className="h-20 mb-10 flex flex-col items-center">
        <Button />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col bg-[#ECE7E3] w-full items-center py-10 gap-10 text-secondary px-[10vw] max-md:px-[5vw] md:max-h-[50vh] md:mb-[50vh]"
      >
        <p className="text-gray-600 border-primary border-l-4 pl-2">
          Depoimentos
        </p>
        <h3 className=" text-3xl max-md:text-center ">
          Comentários de quem ja transformou sua vida
        </h3>
        <div className="flex flex-row items-center justify-center">
          <Image
            src={"/depoimento-1.png"}
            alt={""}
            width={500}
            height={500}
            className=" "
          />
          <Image
            src={"/depoimento-2.png"}
            alt={""}
            width={500}
            height={500}
            className="max-md:hidden "
          />
          <Image
            src={"/depoimento-3.png"}
            alt={""}
            width={500}
            height={500}
            className="max-md:hidden "
          />
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col  w-full items-center py-10 gap-10 text-secondary px-[10vw] max-md:px-[5vw]"
      >
        <p className="text-gray-600 border-primary border-l-4 pl-2">Dúvidas</p>
        <h3 className=" text-3xl max-md:text-center ">Perguntas Frequentes</h3>
        <div className="flex flex-col gap-1 w-full ">
          {frequentlyAskedQuestions.map(({ question, answer }) => (
            <div key={question}>
              <div className="flex flex-row justify-between rounded-t-2xl  bg-secondary text-gray-100 px-6 py-4 items-center">
                <p className="text-xl max-md:text-sm gap-4 ">{question}</p>
                <AiOutlineCaretDown className="text-xl" size={30} />
              </div>
              <div className="flex flex-row justify-between rounded-b-2xl  bg-primary text-gray-100 px-6 py-4 items-center">
                <p className="text-xl max-md:text-sm gap-4 ">{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative flex flex-row max-md:flex-col max-md:gap-0 items-center justify-center  px-[10vw] max-md:px-[5vw] bg-[#ECE7E3]"
      >
        <div className="flex flex-col max-md:items-center">
          <Image
            width={200}
            height={200}
            alt="imagem logotipo"
            src={"/logotipo.png"}
          />
          <h1 className="text-4xl font-extrabold max-md:text-4xl text-gray-700">
            Não perca essa chance! Transforme sua vida em{" "}
            <span className="text-secondary">apenas 30 dias!</span>
          </h1>
          <h2 className="text-lg font-light max-md:text-sm">
            Um método prático, eficaz e comprovado para dizer adeus ás
            gordurinhas indesejadas
          </h2>
          <div className="max-md:hidden max-w-[250px]">
            <Button />
          </div>
        </div>
        <Image
          width={400}
          height={700}
          alt="imagem logotipo"
          className="max-md:-mt-20"
          src={"/lorenna-sem-fundo.png"}
        />
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 md:hidden">
          <Button />
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-row px-[10vw] max-md:px-[5vw] gap-10 my-10 md:hidden text-sm"
      >
        <Image
          src={"/lorenna-3.jpg"}
          alt={""}
          width={500}
          height={500}
          className="rounded-3xl w-auto h-[400px] max-md:hidden"
        />
        <div className="flex flex-col gap-8 max-md:items-center ">
          <p className="text-gray-600 border-primary border-l-4 pl-2">
            Sobre mim
          </p>
          <h3 className=" text-3xl max-md:text-center text-secondary">
            Quem sou eu?
          </h3>
          <p className="text-gray-700 text-wrap">
            Quem é nutricionista Lorenna Lizot? Sou nutri Lorenna Lizot
            especialista em resultados sem restrições para mulheres e mães.
            Transformo a vida de mulheres diariamente aumentando sua autoestima
            e recuperando seu corpo. Me especializo diariamente na nutrição
            humanizada, levando saúde mental e prazer da alimentação junto com a
            busca do sonhado resultado estético. Uma mulher inspirada, mãe de
            duas meninas e uma profissional dedicada. Descobrir minha verdadeira
            paixão: auxiliar mulheres insatisfeitas a encontrarem o amor próprio
            e a confiança em si mesmas. Redirecionei minha carreira e foquei em
            ajudar mães a recuperarem sua autoestima através da alimentação
            equilibrada e do abandono de maus hábitos. Hoje isso é possível
            devido uma grande experiência atendendo mulheres por mais de 10 anos
            com diversas queixas estéticas. Além de esteticista e pós graduada
            em nutrição estética juntei toda minha bagagem para te ajudar, vem
            comigo que te mostro como é possível ser mães e resgatar sua
            autoestima através da alimentação e de uma forma duradoura, sem
            sofrimento.
          </p>
        </div>
      </motion.section>
      <footer className="flex flex-col items-center text-secondary bg-[#56483c] py-2 text-sm">
        <Image
          width={120}
          height={80}
          alt="imagem logotipo"
          src={"/logotipo.png"}
        />
        <p className="font-bold">@Copyright | Desafio 30 dias</p>
        <p>todos os direitos reservados</p>
      </footer>
    </main>
  );
}

const frequentlyAskedQuestions = [
  {
    question: "O que acontece se eu tiver dúvidas durante o desafio?",
    answer:
      "Você terá suporte diário pelo WhatsApp. Estou aqui para responder suas dúvidas, ajustar o plano e te dar o incentivo necessário para seguir firme no seu objetivo.",
  },
  {
    question: "Eu preciso comprar alimentos caros ou difíceis de encontrar?",
    answer:
      "Não! O plano é pensado para ser acessível e flexível, com alimentos simples e fáceis de encontrar. Você poderá adaptar as sugestões ao que já consome no dia a dia, dentro do seu orçamento.",
  },
  {
    question: "Preciso fazer exercícios físicos para participar?",
    answer:
      "Os exercícios físicos são recomendados, mas não obrigatórios. O foco principal está em ajustes na alimentação e em hábitos saudáveis. Se puder se movimentar, mesmo que de forma leve, isso será um ótimo complemento para seus resultados!",
  },
  {
    question: "E se eu não conseguir seguir o plano perfeitamente?",
    answer:
      "Não tem problema! O desafio é sobre fazer o melhor dentro da sua realidade. Pequenos avanços diários já fazem diferença. O acompanhamento pelo WhatsApp será sua ferramenta para ajustar o plano, tirar dúvidas e manter o foco, mesmo que ocorram deslizes.",
  },
];
