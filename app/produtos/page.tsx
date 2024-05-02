import ProductCard from "@/components/ProductCard";

export default function Produtos() {
    return (
        <main>
            <section className="flex flex-wrap">
                <ProductCard
                    img="/bmw.png"
                    title="BMW muito bonita"
                    price={10000000000000}
                    description="essa BMW eh linda" />
                <ProductCard
                    img="/bmw2.png"
                    title="BMW mais bonita ainda"
                    price={151515}
                    description="essa bmw possui 4 pneus" />

                <ProductCard
                    img="/bmw3.png"
                    title="BMW modelo novo 2030"
                    price={151515}
                    description="essa BMW também tem 4 pneus" />
                    <ProductCard
                    img="/bmw2.png"
                    title="BMW mais bonita ainda"
                    price={151515}
                    description="essa bmw possui 4 pneus" />

                <ProductCard
                    img="/bmw3.png"
                    title="BMW modelo novo 2030"
                    price={151515}
                    description="essa BMW também tem 4 pneus" />
                    <ProductCard
                    img="/bmw2.png"
                    title="BMW mais bonita ainda"
                    price={151515}
                    description="essa bmw possui 4 pneus" />

                <ProductCard
                    img="/bmw3.png"
                    title="BMW modelo novo 2030"
                    price={151515}
                    description="essa BMW também tem 4 pneus" />

            </section>
        </main>
    )
}