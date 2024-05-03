import Image from "next/image";
import './style.css';

function SegundaSecao ()
{
    return (
        <section className="segunda-secao">
            <Image className="img-secao" src={'/nossa-missao.jpeg'} alt={'Carro da bmw em uma concessionária'} width={400} height={400}/>
            <div>
                <h2>Nossa missão</h2>
                <p>A BMW se destaca por produtos inovadores, qualidade e sustentabilidade, oferecendo veículos de alto desempenho, design e tecnologia que superam as expectativas dos clientes. Comprometida com a liderança em mobilidade sustentável, desenvolve soluções para minimizar o impacto ambiental, buscando proporcionar prazer ao dirigir enquanto promove responsabilidade social e ambiental</p>
            </div> 
        </section>
    )
}
export default SegundaSecao;