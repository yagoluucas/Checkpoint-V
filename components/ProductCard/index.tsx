import Image from "next/image";
import { ProductCardInterface } from "./interface";


function ProductCard({ img, title, price, description }: ProductCardInterface) {
    return (
        <div className="product-card">
            <Image src={img} alt={title} width={150} height={150} />
            <h2>{title}</h2>
            <p>{description}</p>
            <span>{price}</span> </div>
    )}

export default ProductCard;