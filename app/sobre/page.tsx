import SegundaSecao from "@/components/pagina-sobre/SegundaSecao"
import PrimeiraSecao from "@/components/pagina-sobre/PrimeiraSecao"
import '@/style/sobre.css'
export default function Sobre() {
    return (
        <main className="pagina-sobre">
            <PrimeiraSecao/>
            <SegundaSecao/>
        </main>
    )
}