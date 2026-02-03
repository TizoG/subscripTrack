import { ArrowLeft, ArrowRight, ChartPie, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="w-full bg-gray-200 border-b border-gray-200">
        <nav className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4 sticky top-0">
          <div>
            <h1 className="text-2xl font-bold">Subscript-Track</h1>
          </div>
          <div className="flex gap-8">
            <Link href="caracteristicas" className="text-sm font-medium text-gray-600 hover:text-gray-900">Caracteristicas</Link>
            <Link href="como-funciona" className="text-sm font-medium text-gray-600 hover:text-gray-900">Como funciona</Link>
            <Link href="seguridad" className="text-sm font-medium text-gray-600 hover:text-gray-900">Seguridad</Link>
          </div>
          <div className="flex gap-4">
            <Link href="/iniciar-sesion" className="text-sm hover:cursor-pointer hover:bg-white/80 transition-colors px-4 py-2 rounded-lg text-gray-900 font-medium">Iniciar sesion</Link>
            <Link href="/registrarse" className="text-sm font-medium text-white bg-[#1b294bff] hover:cursor-pointer hover:bg-[#1b294bff]/80 transition-colors px-4 py-2 rounded-lg">Registrarse</Link>
          </div>
        </nav>
      </header>
      <main className="bg-[#1b294bff]">
        <section className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-2  border border-teal-600 rounded-full text-teal-600 justify-center w-fit px-4 py-2 mt-10 bg-teal-600/10" >
            <Zap size={16} />
            <span className="text-sm font-medium">Gestiona tus suscripciones de manera inteligente</span>
          </div>
          <div className="flex flex-col items-center mt-10 max-w-4xl">
            <h1 className="text-6xl font-semibold text-center text-white mb-6">Controla todas tus <span className="text-teal-600">suscripciones</span> en un solo lugar</h1>
            <p className="text-center  text-gray-400 text-xl font-medium mx-28 mb-10">Visualiza, organiza y anticipa tus gastos mensuales con una experiencia clara, confiable y orientada a datos. Nunca más te sorprendas con un cobro inesperado.</p>
            <div className="flex gap-4">
              <Link href="/registrarse" className="text-lg bg-teal-600 py-4 px-8 rounded-xl text-white font-medium hover:cursor-pointer hover:bg-teal-600/80 transition-colors flex items-center gap-2">
                Comenzar ahora
                <ArrowRight size={15} />
              </Link>
              <Link href="/como-funciona" className="border border-gray-100 rounded-xl text-white py-4 px-8 font-medium hover:cursor-pointer hover:bg-gray-100/10 transition-colors flex items-center gap-2">Ver cómo funciona</Link>
            </div>
            <div>
              <div>
                <Shield />
                <span>Datos encriptados</span>
              </div>
              <div>
                <ChartPie />
                <span>Análisis en tiempo real</span>
              </div>
              <div>
                <Zap />
                <span>Alertas inteligentes</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
