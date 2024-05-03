import Image from "next/image";
import "./style.css";

function PrimeiraSecao ()
{
    return (
        <section className="primeira-secao">
            <Image className="img-secao" src={'/nossa-historia-bmw.jpg'} alt={'carro da bmw dos anos 2000 na cor laranja em uma rodovia'} width={400} height={400}/>
            <div>
                <h1>Nossa história</h1>
                <p>Desde sua fundação em 1916 como fabricante de motores de avião, a BMW é marcada pela inovação e sucesso. Expandiu-se para produzir automóveis e motocicletas de alto desempenho e luxo, superando desafios como a Segunda Guerra Mundial. Hoje, é uma marca de renome global, líder na indústria automotiva, conhecida por sua engenharia precisa e design único, focada em inovação, sustentabilidade e experiências de condução excepcionais.</p>
            </div> 
        </section>
    )
}
export default PrimeiraSecao;