import ProductCard from "@/components/ProductCard";

export default function Produtos() {
    return (
        <main>
            <section className="flex flex-wrap bg-gray-200">
                <ProductCard
                    img="/bmw.png"
                    title="BMW 2021"
                    price={10000}
                    description="essa BMW eh linda" />
                <ProductCard
                    img="/bmw2.png"
                    title="BMW mais bonita ainda"
                    price={14255}
                    description="essa bmw possui 4 pneus" />

                <ProductCard
                    img="/bmw3.png"
                    title="BMW modelo novo 2030"
                    price={121315}
                    description="essa BMW também tem 4 pneus" />
                    <ProductCard
                    img="/bmw2.png"
                    title="BMW mais bonita ainda"
                    price={151515}
                    description="essa bmw possui 4 pneus" />

                <ProductCard
                    img="/bmw3.png"
                    title="BMW modelo novo 2030"
                    price={190002}
                    description="essa BMW também tem 4 pneus" />
                    <ProductCard
                    img="/bmw2.png"
                    title="BMW mais bonita ainda"
                    price={151515}
                    description="essa bmw possui 4 pneus" />

                <ProductCard
                    img="/bmw3.png"
                    title="BMW modelo novo 2030"
                    price={155445}
                    description="essa BMW também tem 4 pneus" />

            </section>
        </main>
    )
}