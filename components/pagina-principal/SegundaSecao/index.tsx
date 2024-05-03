import Image from "next/image";
import "./style.css";
import Button from "../Button";
export default function SegundaSecao() {
  return (
    <section className="segunda-secao">
      <div>
        <h2>Por que a BMW ?</h2>
        <p>
          A BMW é sinônimo de excelência automotiva, onde inovação, design e
          desempenho se unem para criar uma experiência de condução
          verdadeiramente excepcional. Cada veículo é uma expressão de
          engenharia de precisão e luxo, oferecendo uma combinação única de
          tecnologia avançada e elegância distinta. Descubra o prazer de dirigir
          um BMW, onde cada curva da estrada é uma oportunidade para
          experimentar o que há de melhor em mobilidade e estilo
        </p>
        <Button texto="Ver nossa história" link="/sobre"/>
      </div>
      <Image
        className="img-moto"
        src={"/teste.png"}
        alt="Carro da BMW branco com cores vermelha e azul ao lado de uma moto vermelha e preta"
        width={2000}
        height={2000}
      />
    </section>
  );
}
