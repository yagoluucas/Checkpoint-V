import SobreCard from "@/components/Sobre"

export default function Sobre() {
    return (
        <main>
            <section>
                <SobreCard img="/nossa-historia-bmw.jpg" title="Nossa história" descricao="A história da BMW é marcada por inovação e sucesso desde sua fundação em 1916
             como fabricante de motores de avião. Ao longo dos anos, a empresa diversificou para 
             produzir automóveis e motocicletas de alto desempenho e luxo. Apesar dos desafios da
              Segunda Guerra Mundial e da reconstrução subsequente, a BMW emergiu como uma marca de 
              renome mundial, conhecida por sua engenharia de precisão e design distintivo. Hoje, a 
              BMW continua a liderar a indústria automotiva, impulsionando a inovação e a sustentabilidade 
              enquanto oferece experiências de condução excepcionais."/>
            </section>

            <section>
                <SobreCard img="/nossa-missao.jpeg" title="Nossa missão" descricao="A missão da BMW é criar experiências de condução excepcionais, 
                através de produtos inovadores, qualidade e sustentabilidade. Priorizando a superação das expectativas dos clientes, a marca oferece
                 veículos de alto desempenho, design e tecnologia. Comprometida com a liderança em mobilidade sustentável, a BMW desenvolve soluções
                  que minimizam o impacto ambiental. Em síntese, a BMW busca proporcionar prazer ao dirigir, ao mesmo tempo em que promove responsabilidade
                   social e ambiental." />
            </section>
            
            <img src="/ultima.jpg"/>
        </main>
    )
}