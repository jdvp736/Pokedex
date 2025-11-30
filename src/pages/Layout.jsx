import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Outlet } from "react-router";

export const Layout = ()=>{
   return (
      <section className="flex flex-col min-h-screen w-full bg-gradient-to-br from-slate-100 to-slate-200">
         <Header title="Pokedex 2025" />
         
         <main className="flex-1 px-4 py-6 md:px-8">
            <Outlet />
         </main>

         <Footer />
      </section>
   );
}
