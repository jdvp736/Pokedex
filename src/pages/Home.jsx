import { HeroPanel } from "../components/HeroPanel"
import { PokeList } from "../components/Pokedex/PokeList"

export const Home = ()=>{
    return (
        <>
            <HeroPanel photoId="340" />
            <section className="
                p-6 md:p-10 
                max-w-7xl mx-auto 
                bg-white/90 backdrop-blur-md 
                rounded-xl shadow-xl mt-6 
                border-4 border-blue-600
            ">
                <PokeList />
        </section>

        </>
    )
}
