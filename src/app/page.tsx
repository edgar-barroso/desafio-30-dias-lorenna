"use client";
import Image from "next/image";
import { Belt } from "./components/belt";
import { Button } from "./components/button";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "motion/react";

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
      <motion.section className="relative flex flex-col items-center gap-10 py-20 bg-background z-20">
        <p className="text-gray-600 border-primary border-l-4 pl-2">Assista</p>
        <video className="w-[800px]" controls preload="auto">
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <Button />
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
      <section className="h-screen flex flex-col items-center">
        <Button />
      </section>
    </main>
  );
}
