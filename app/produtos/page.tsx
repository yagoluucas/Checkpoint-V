import ProductCard from "@/components/ProductCard";


export default function Produtos (){
    return (
        <div>
            <ProductCard
                img="/bmw.png"
                title="BMW muito bonita"
                price={10000000000000}
                description="essa BMW eh linda"/>
        </div>
    )
}