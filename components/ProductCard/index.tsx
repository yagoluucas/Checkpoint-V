import Image from "next/image";
import { ProductCardInterface } from "./interface";
import './style.css';


function ProductCard({ img, title, price, description }: ProductCardInterface) {
    return (
        <div className="product-card">
            <Image src={img} alt={title} width={200} height={150} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p className="preco">R$:{price}</p>
        </div>
    )
}

export default ProductCard;