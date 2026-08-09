import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Our Pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-15">
          {/* Filters */}
          <div className="w-62.5">
            <Filters />
          </div>
          {/* List */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Pizzas"
                items={[
                  {
                    name: "Margherita",
                    price: "$12.99",
                    id: 1,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf530345746e98039478001d5108.webp",
                    items: [
                      {
                        price: 12.99,
                        size: 30,
                      },
                    ],
                  },
                  {
                    name: "Margherita",
                    price: "$12.99",
                    id: 2,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf530345746e98039478001d5108.webp",
                    items: [
                      {
                        price: 12.99,
                        size: 30,
                      },
                    ],
                  },
                  {
                    name: "Margherita",
                    price: "$12.99",
                    id: 3,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf530345746e98039478001d5108.webp",
                    items: [
                      {
                        price: 12.99,
                        size: 30,
                      },
                    ],
                  },
                  {
                    name: "Margherita",
                    price: "$12.99",
                    id: 4,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf530345746e98039478001d5108.webp",
                    items: [
                      {
                        price: 12.99,
                        size: 30,
                      },
                    ],
                  },
                  {
                    name: "Margherita",
                    price: "$12.99",
                    id: 5,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf530345746e98039478001d5108.webp",
                    items: [
                      {
                        price: 12.99,
                        size: 30,
                      },
                    ],
                  },
                ]}
                categoryId={1}
              />

              <ProductsGroupList
                title="Breackfast"
                items={[
                  {
                    name: "Margherita",
                    price: "$12.99",
                    id: 6,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf530345746e98039478001d5108.webp",
                    items: [
                      {
                        price: 12.99,
                        size: 30,
                      },
                    ],
                  },
                  {
                    name: "Margherita",
                    price: "$12.99",
                    id: 7,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf530345746e98039478001d5108.webp",
                    items: [
                      {
                        price: 12.99,
                        size: 30,
                      },
                    ],
                  },
                  {
                    name: "Margherita",
                    price: "$12.99",
                    id: 8,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf530345746e98039478001d5108.webp",
                    items: [
                      {
                        price: 12.99,
                        size: 30,
                      },
                    ],
                  },
                  {
                    name: "Margherita",
                    price: "$12.99",
                    id: 9,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf530345746e98039478001d5108.webp",
                    items: [
                      {
                        price: 12.99,
                        size: 30,
                      },
                    ],
                  },
                  {
                    name: "Margherita",
                    price: "$12.99",
                    id: 10,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf530345746e98039478001d5108.webp",
                    items: [
                      {
                        price: 12.99,
                        size: 30,
                      },
                    ],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
