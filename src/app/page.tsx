import Image from 'next/image'

import four from '@/assets/four.svg'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center sm:flex-row">
      {/* ESQUERDA */}
      <div className="flex flex-1 flex-col items-center justify-center gap-14 text-center sm:items-start sm:pl-40 sm:text-left">
        {/* Textos */}
        <div className="flex max-w-[380px] flex-col gap-6">
          <h1 className="text-4xl font-bold sm:text-[2.5rem]">
            Ops, esta página não foi encontrada
          </h1>
          <p className="text-lg sm:text-[1.25rem]">
            Parece que você se perdeu... Tente voltar para a página anterior ou
            acessar a home.
          </p>
        </div>
        {/* Botões */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/sergio-roberto-sanchez-filho/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="rounded-full bg-blue px-6 py-3 text-sm uppercase text-gray2 transition-all duration-200 hover:bg-blue-light">
              voltar
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/sergio-roberto-sanchez-filho/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="rounded-full bg-blue px-6 py-3 text-sm uppercase text-gray2 transition-all duration-200 hover:bg-blue-light">
              ir para a home
            </button>
          </a>
        </div>
      </div>

      {/* DIREITA */}
      <div className="flex-1">
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <Image src={four} alt="four" />
          <div className="relative">
            <iframe
              className="h-56 w-56"
              src="https://lottie.host/?file=ab7a5c4d-d0de-4877-be5e-8cffedab2bf1/f7kJBYBWYz.json"
            ></iframe>
            {/* Brilho atrás do planeta */}
            <iframe
              className="absolute inset-0 -z-10 h-56 w-56 scale-150 opacity-100"
              style={{ filter: 'blur(100px)' }}
              src="https://lottie.host/?file=ab7a5c4d-d0de-4877-be5e-8cffedab2bf1/f7kJBYBWYz.json"
            ></iframe>
          </div>
          <Image src={four} alt="four" />
        </div>
      </div>
    </div>
  )
}
