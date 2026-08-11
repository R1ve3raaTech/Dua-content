import Header from "@/components/Header";
import HeroQuienesSomos from "@/components/sections/HeroQuienesSomos";
import PaquetesMarcas from "@/components/sections/PaquetesMarcas";
import PaquetesEventos from "@/components/sections/PaquetesEventos";
import Clientes from "@/components/sections/Clientes";
import Contacto from "@/components/sections/Contacto";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroQuienesSomos />
        <PaquetesMarcas />
        <PaquetesEventos />
        <Clientes />
        <Contacto />
      </main>
    </>
  );
}
