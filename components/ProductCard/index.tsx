import Image from "next/image";
import { ProductCardInterface } from "./interface";
import './style.css';


function ProductCard({ img, title, price, description }: ProductCardInterface) {
    return (
        <div className="product-card">
            <Image src={img} alt={title} width={350} height={200} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>R$:{price}</p>
        </div>
    )
}

export default ProductCard;