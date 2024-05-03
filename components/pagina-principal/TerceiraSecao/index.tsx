import CardLojas from "../CardLojas";
import "./style.css";
export default function TerceiraSecao() {
  return (
    <section className="terceira-secao">
      <h2>Revendedoras Oficiais</h2>
      <p>Descubra revendedoras BMW certificadas perto de você</p>
      <div>
        <CardLojas
          endereco="Avenida Paulista n°1100"
          nomeLoja="Fiap Motors"
          img="/frente-loja1.png"
        />
        <CardLojas
          endereco="Avenida Paulista n°1100"
          nomeLoja="Fiap Motors"
          img="/frente-loja1.png"
        />
        <CardLojas
          endereco="Avenida Paulista n°1100"
          nomeLoja="Fiap Motors"
          img="/frente-loja1.png"
        />
      </div>
    </section>
  );
}
