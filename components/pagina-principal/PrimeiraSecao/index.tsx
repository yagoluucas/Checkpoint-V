import Image from "next/image";
import "./style.css";
import Button from "../Button";
export default function PrimeiraSecao() {
    return (
        <section className="secao-principal">
            <div className="info">
                <h1>BMW: Inovação e Desempenho</h1>
                <p>
                    Luxo, tecnologia e performance em cada modelo. Experimente o futuro da
                    condução agora
                </p>
                <Button link="/produtos" texto="Ver produtos"/>
            </div>
            <Image
                className="img-carro"
                src={"/carro-principal.png"}
                alt="Carro azul de lado com uma sombra em baixo"
                width={500}
                height={500}
            />
        </section>
    );
}
