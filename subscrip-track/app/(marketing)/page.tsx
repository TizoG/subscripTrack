import { ArrowLeft, ArrowRight, Bell, Calendar, CardSim, ChartArea, ChartLine, ChartPie, CheckCircle2, DollarSign, Eye, EyeIcon, Github, IdCardIcon, Layers, LayoutDashboardIcon, Link2, Lock, LockIcon, Plus, Server, Shield, TrendingUp, Twitter, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="w-full bg-gray-200 border-b border-gray-200 fixed z-50 backdrop-blur-md top-0 left-0">
        <nav className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4 sticky top-0">
          <div>
            <h1 className="text-2xl font-bold">Subscript-Track</h1>
          </div>
          <div className="flex gap-8">
            <Link href="#caracteristicas" className="text-sm font-medium text-gray-600 hover:text-gray-900">Caracteristicas</Link>
            <Link href="#como-funciona" className="text-sm font-medium text-gray-600 hover:text-gray-900">Como funciona</Link>
            <Link href="#seguridad" className="text-sm font-medium text-gray-600 hover:text-gray-900">Seguridad</Link>
          </div>
          <div className="flex gap-4">
            <Link href="/iniciar-sesion" className="text-sm hover:cursor-pointer hover:bg-white/80 transition-colors px-4 py-2 rounded-lg text-gray-900 font-medium hover:border hover:border-teal-600 hover:text-teal-600 border border-transparent">Iniciar sesion</Link>
            <Link href="/registrarse" className="text-sm font-medium text-white bg-[#1b294bff] hover:cursor-pointer hover:bg-[#1b294bff]/80 transition-colors px-4 py-2 rounded-lg ">Registrarse</Link>
          </div>
        </nav>
      </header>
      <main className="bg-[#1b294bff] pt-30">
        <section className="max-w-7xl mx-auto flex flex-col items-center relative h-screen">
          <div className="flex items-center gap-2  border border-teal-600 rounded-full text-teal-600 justify-center w-fit px-4 py-2 mt-10 bg-teal-600/10" >
            <Zap size={16} />
            <span className="text-sm font-medium">Gestiona tus suscripciones de manera inteligente</span>
          </div>
          <div className="flex flex-col items-center mt-10 max-w-4xl">
            <h1 className="text-6xl font-semibold text-center text-white mb-6">Controla todas tus <span className="text-teal-600">suscripciones</span> en un solo lugar</h1>
            <p className="text-center  text-gray-400 text-xl font-medium mx-28 mb-10">Visualiza, organiza y anticipa tus gastos mensuales con una experiencia clara, confiable y orientada a datos. Nunca más te sorprendas con un cobro inesperado.</p>
            <div className="flex gap-4">
              <Link href="/registrarse" className="text-lg bg-teal-600 py-4 px-8 rounded-xl text-white font-medium hover:cursor-pointer hover:bg-teal-600/80 transition-colors flex items-center gap-2 hover:shadow-xl hover:shadow-teal-600/20">
                Comenzar ahora
                <ArrowRight size={15} />
              </Link>
              <Link href="/como-funciona" className="border border-gray-100 rounded-xl text-white py-4 px-8 font-medium hover:cursor-pointer hover:bg-gray-100/10 transition-colors flex items-center gap-2">Ver cómo funciona</Link>
            </div>
            <div className="flex mt-10 gap-10">
              <div className="flex items-center gap-2">
                <Shield className="text-gray-400" size={16} />
                <span className="text-gray-400">Datos encriptados</span>
              </div>
              <div className="flex items-center gap-2 z-10">
                <ChartPie className="text-gray-400" size={16} />
                <span className="text-gray-400">Análisis en tiempo real</span>
              </div>
              <div className="flex items-center gap-2 z-10">
                <Zap className="text-gray-400" size={16} />
                <span className="text-gray-400">Alertas inteligentes</span>
              </div>
            </div>
          </div>
          <div className="absolute top-1/4 left-0 md:left-40 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-0 md:right-40 w-80 h-80 bg-sky-600/20 rounded-full blur-3xl pointer-events-none" />
        </section>
        <section className="w-full  bg-white py-24" id="caracteristicas">
          <div className="flex flex-col items-center max-w-7xl mx-auto">
            <div className="w-3xl mx-64 my-16">
              <h2 className="text-2xl font-bold text-[hsl(215 16% 47%)] md:text-4xl text-center mb-4">Todo lo que necesitas para <span className="text-teal-600">controlar tus suscripciones</span></h2>
              <p className="text-center text-gray-400 text-xl font-medium mx-28 mb-10">Herramientas diseñadas para darte visibilidad completa sobre tus suscripciones y ayudarte a tomar mejores decisiones financieras.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 mb-24">
              <div className="group relative p-6 bg-rgb(15 23 42) border border-gray-400/20 rounded-2xl hover:border-teal-500/30 transition-all duration-300 shadow-lg">

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-teal-200/20 flex items-center justify-center border border-white/5 mb-6 text-teal-400 group-hover:scale-110 transition-transform">
                    <ChartPie size={24} className="text-teal-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(215 16% 47%)] mb-4">Visualización clara</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Gráficos intuitivos que muestran tus gastos por categoría y tendencias mensuales.</p>
                </div>
              </div>
              <div className="group relative p-6 bg-rgb(15 23 42) border border-gray-400/20 rounded-2xl hover:border-teal-500/30 transition-all duration-300 shadow-lg">

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-teal-200/20 flex items-center justify-center border border-white/5 mb-6 text-teal-400 group-hover:scale-110 transition-transform">
                    <Bell size={24} className="text-teal-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(215 16% 47%)] mb-4">Alertas inteligentes</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Recibe notificaciones antes de cada renovación para evitar cargos inesperados.</p>
                </div>
              </div>
              <div className="group relative p-6 bg-rgb(15 23 42) border border-gray-400/20 rounded-2xl hover:border-teal-500/30 transition-all duration-300 shadow-lg">

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-teal-200/20 flex items-center justify-center border border-white/5 mb-6 text-teal-400 group-hover:scale-110 transition-transform">
                    <DollarSign size={24} className="text-teal-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(215 16% 47%)] mb-4">Multi-moneda</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Gestiona suscripciones en diferentes monedas con conversión automática.</p>
                </div>
              </div>
              <div className="group relative p-6 bg-rgb(15 23 42) border border-gray-400/20 rounded-2xl hover:border-teal-500/30 transition-all duration-300 shadow-lg">

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-teal-200/20 flex items-center justify-center border border-white/5 mb-6 text-teal-400 group-hover:scale-110 transition-transform">
                    <Calendar size={24} className="text-teal-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(215 16% 47%)] mb-4">Calendario de pagos</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Vista calendario para anticipar y planificar tus gastos del mes.</p>
                </div>

              </div>
              <div className="group relative p-6 bg-rgb(15 23 42) border border-gray-400/20 rounded-2xl hover:border-teal-500/30 transition-all duration-300 shadow-lg">

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-teal-200/20 flex items-center justify-center border border-white/5 mb-6 text-teal-400 group-hover:scale-110 transition-transform">
                    <ChartLine size={24} className="text-teal-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(215 16% 47%)] mb-4">Análisis de gastos</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Informes detallados sobre el historial y evolución de tus suscripciones.</p>
                </div>

              </div>
              <div className="group relative p-6 bg-rgb(15 23 42) border border-gray-400/20 rounded-2xl hover:border-teal-500/30 transition-all duration-300 shadow-lg">

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-teal-200/20 flex items-center justify-center border border-white/5 mb-6 text-teal-400 group-hover:scale-110 transition-transform">
                    <Layers size={24} className="text-teal-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(215 16% 47%)] mb-4">Categorización</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Organiza tus suscripciones por categorías personalizables.</p>
                </div>

              </div>
              <div className="group relative p-6 bg-rgb(15 23 42) border border-gray-400/20 rounded-2xl hover:border-teal-500/30 transition-all duration-300 shadow-lg">

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-teal-200/20 flex items-center justify-center border border-white/5 mb-6 text-teal-400 group-hover:scale-110 transition-transform">
                    <TrendingUp size={24} className="text-teal-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(215 16% 47%)] mb-4">Tendencias</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Identifica patrones de gasto y optimiza tu presupuesto mensual.</p>
                </div>

              </div>
              <div className="group relative p-6 bg-rgb(15 23 42) border border-gray-400/20 rounded-2xl hover:border-teal-500/30 transition-all duration-300 shadow-lg">

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-teal-200/20 flex items-center justify-center border border-white/5 mb-6 text-teal-400 group-hover:scale-110 transition-transform">
                    <Shield size={24} className="text-teal-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(215 16% 47%)] mb-4">100% Seguro</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Tus datos están encriptados y protegidos con los más altos estándares.</p>
                </div>

              </div>
            </div>
          </div>
        </section>
        <section className="w-full  bg-white py-24" id="como-funciona">
          <div className="flex flex-col items-center max-w-7xl mx-auto">
            <div className="w-3xl mx-64 my-16">
              <h2 className="text-2xl font-bold text-[hsl(215 16% 47%)] md:text-4xl text-center mb-4">¿Cómo funciona?</h2>
              <p className="text-center text-gray-400 text-xl font-medium mx-28 mb-10">En cuatro simples pasos, tendrás control total sobre tus suscripciones.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="group relative p-6 bg-rgb(15 23 42) border border-gray-400/20 rounded-2xl hover:border-teal-500/30 transition-all duration-300 shadow-lg">
                <span className="absolute -top-4 -right-4 text-6xl font-black text-gray-400/20 select-none z-0 group-hover:text-teal-500/10 transition-colors">01</span>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 mb-6 text-teal-400 group-hover:scale-110 transition-transform">
                    <Plus size={24} className="text-teal-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(215 16% 47%)] mb-4">Agrega tus suscripciones</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Añade todas tus suscripciones activas con un formulario simple y guiado.</p>
                </div>
              </div>
              <div className="group relative p-6 bg-rgb(15 23 42) border border-gray-400/20 rounded-2xl hover:border-teal-500/30 transition-all duration-300 shadow-lg">
                <span className="absolute -top-4 -right-4 text-6xl font-black text-gray-400/20 select-none z-0 group-hover:text-teal-500/10 transition-colors">02</span>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 mb-6 text-teal-400 group-hover:scale-110 transition-transform">
                    <LayoutDashboardIcon size={24} className="text-teal-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(215 16% 47%)] mb-4">Visualiza tu gasto</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Accede a un dashboard con vista clara de todos tus gastos recurrentes.</p>
                </div>
              </div>
              <div className="group relative p-6 bg-rgb(15 23 42) border border-gray-400/20 rounded-2xl hover:border-teal-500/30 transition-all duration-300 shadow-lg">
                <span className="absolute -top-4 -right-4 text-6xl font-black text-gray-400/20 select-none z-0 group-hover:text-teal-500/10 transition-colors">03</span>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 mb-6 text-teal-400 group-hover:scale-110 transition-transform">
                    <Bell size={24} className="text-teal-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(215 16% 47%)] mb-4">Configura alertas</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Recibe recordatorios antes de cada renovación por email o notificación.</p>
                </div>
              </div>
              <div className="group relative p-6 bg-rgb(15 23 42) border border-gray-400/20 rounded-2xl hover:border-teal-500/30 transition-all duration-300 shadow-lg">
                <span className="absolute -top-4 -right-4 text-6xl font-black text-gray-400/20 select-none z-0 group-hover:text-teal-500/10 transition-colors">04</span>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 mb-6 text-teal-400 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={24} className="text-teal-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(215 16% 47%)] mb-4">Toma el control</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Decide qué mantener, cancelar u optimizar con información clara.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full  bg-white py-24 " id="seguridad">
          <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16 items-center">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 border border-teal-500 rounded-full px-4 py-2 w-fit bg-teal-200/20 my-6">
                  <Shield className="text-teal-600" size={20} />
                  <span className="text-sm font-medium text-teal-600">Seguridad garantizada</span>
                </div>

                <div className="mb-6 flex flex-col gap-4">
                  <h2 className="text-2xl font-semibold">Tu información esta <span className="text-teal-600 font-bold">100% protegida</span></h2>
                  <p className="text-slate-400">La seguridad de tus datos financieros es nuestra prioridad número uno. Utilizamos las mejores prácticas de la industria para mantener tu información segura.</p>
                </div>
              </div>
              <div className="flex gap-6 items-center mt-6">
                <div className="p-4 bg-teal-200/20 rounded-xl">
                  <Lock size={24} className="text-teal-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-md font-semibold">Encriptación AES-256</h4>
                  <p className="text-slate-400 text-sm">Todos tus datos están protegidos con encriptación de grado militar.</p>
                </div>
              </div>
              <div className="flex gap-6 items-center mt-6">
                <div className="p-4 bg-teal-200/20 rounded-xl">
                  <Eye size={24} className="text-teal-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-md font-semibold">Privacidad primero</h4>
                  <p className="text-slate-400 text-sm">Nunca vendemos ni compartimos tus datos con terceros.</p>
                </div>
              </div>
              <div className="flex gap-6 items-center mt-6">
                <div className="p-4 bg-teal-200/20 rounded-xl">
                  <Server size={24} className="text-teal-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-md font-semibold">Servidores seguros</h4>
                  <p>Infraestructura en la nube con certificación ISO 27001.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-3xl bg-teal-200/20 border border-teal-100 flex items-center justify-center animate-pulse shadow-[0_0_60px_rgba(20,184,166,0.6)] animate-pulse-glow " >
                    <Shield size={94} className="text-teal-500" />
                  </div>
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 rounded-xl bg-white border border-gray-200 shadow-lg flex items-center justify-center">
                      <LockIcon size={24} className="text-teal-500" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: "25s", animationDirection: "reverse" }}>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="w-16 h-16 rounded-xl bg-white border border-gray-200 shadow-lg flex items-center justify-center">
                      <Eye size={24} className="text-teal-500" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: "25s", animationDirection: "reverse" }}>
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">

                    <div className="w-16 h-16 rounded-xl bg-white border border-gray-200 shadow-lg flex items-center justify-center">
                      <Server size={24} className="text-amber-500" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-8 rounded-full border border-gray-200/50" />
                <div className="absolute inset-16 rounded-full border border-gray-200/30" />
                <div className="absolute inset-24 rounded-full border border-gray-200/20" />


              </div>
            </div>
          </div>


        </section>
        <section className="flex flex-col gap-6 justify-center py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-semibold text-white text-center mb-6">Empieza a controlar tus suscripciones <span className="text-teal-600">hoy mismo</span></h2>
            <p className="text-slate-400 text-center text-xl">Únete a miles de usuarios que ya han tomado el control de sus gastos recurrentes.</p>
            <div className="flex  gap-6 mt-6">
              <div className="flex gap-2 items-center">
                <CheckCircle2 size={24} className="text-teal-500" />
                <span className="text-white text-md">Sin tarjeta de crédito requerida</span>
              </div>
              <div className="flex gap-2 items-center">
                <CheckCircle2 size={24} className="text-teal-500" />
                <span className="text-white text-md">Prueba gratuita de 14 días</span>
              </div>
              <div className="flex gap-2 items-center">
                <CheckCircle2 size={24} className="text-teal-500" />
                <span className="text-white text-md">Cancela cuando quieras</span>
              </div>
              <div className="flex gap-2 items-center">
                <CheckCircle2 size={24} className="text-teal-500" />
                <span className="text-white text-md">Soporte 24/7</span>
              </div>
            </div>
            <Link href="/auth/login" className="flex gap-2 items-center justify-center bg-teal-600 text-white px-8 py-4 rounded-xl w-fit mx-auto mt-6 hover:bg-teal-700 transition-colors cursor-pointer  hover:shadow-xl hover:shadow-teal-600/20 hoover:shadow-blur-md">
              Crear cuenta gratis
              <ArrowRight size={24} className="text-white" />
            </Link>

          </div>
        </section>
        <section className="w-full  bg-white py-24 ">
          <footer className="max-w-7xl mx-auto grid grid-cols-2 gap-16 items-center border-b border-gray-200 pb-14">
            <div className="flex flex-col gap-6 px-34">
              <Link href={"/"} className="text-2xl font-semibold text-black">
                Subscrip-Track
              </Link>
              <p className="text-slate-400 text-sm">La forma más inteligente de gestionar tus suscripciones y gastos recurrentes.</p>
              <div className="flex gap-6">
                <Link href="#" className="p-2 rounded-lg transitions-colors bg-gray-200">
                  <Twitter className="text-gray-500 hover:text-gray-900 transition-colors " size={16} />
                </Link>
                <Link href="#" className="p-2 rounded-lg transitions-colors bg-gray-200">
                  <Github className="text-gray-500 hover:text-gray-900 transition-colors " size={16} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-16">
              <div className="flex flex-col gap-6">
                <h2 className=" font-semibold text-black text-md">Producto</h2>
                <Link href="#" className="text-slate-400 hover:text-gray-900 transition-colors text-sm">Características</Link>
                <Link href="#" className="text-slate-400 hover:text-gray-900 transition-colors text-sm">Precios</Link>
                <Link href="#" className="text-slate-400 hover:text-gray-900 transition-colors text-sm">Seguridad</Link>
                <Link href="#" className="text-slate-400 hover:text-gray-900 transition-colors text-sm">Roadmap</Link>
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="text-lg font-semibold text-black">Empresa</h2>
                <Link href="#" className="text-slate-400 hover:text-gray-900 transition-colors text-sm">Sobre nosotros</Link>
                <Link href="#" className="text-slate-400 hover:text-gray-900 transition-colors text-sm">Blog</Link>
                <Link href="#" className="text-slate-400 hover:text-gray-900 transition-colors text-sm">Contacto</Link>
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="text-lg font-semibold text-black">Legal</h2>
                <Link href="#" className="text-slate-400 hover:text-gray-900 transition-colors text-sm">Términos de servicio</Link>
                <Link href="#" className="text-slate-400 hover:text-gray-900 transition-colors text-sm">Política de privacidad</Link>
                <Link href="#" className="text-slate-400 hover:text-gray-900 transition-colors text-sm">Cookies</Link>
              </div>
            </div>
          </footer>
          <div className="max-w-7xl mx-auto">
            <p className="text-slate-400 text-end text-sm pt-8">Hecho con ❤️ para tu tranquilidad financiera</p>
          </div>
        </section>
      </main>
    </>
  );
}
