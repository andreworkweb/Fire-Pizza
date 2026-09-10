import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";
import { Filters } from "@/components/shared/filters";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          category: true,
          ingredients: true,
          items: true
        }
      }
    }
  })

  return (
    <>
      <Container className="mt-10">
        <Title text="Our Pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar category={categories} />

      <Container className="mt-10 pb-14">
        <div className="flex gap-15">
          {/* Filters */}
          <div className="w-62.5">
            <Filters />
          </div>
          {/* List */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              
            {categories.map((category) => category.products.length > 0 && (
              <ProductsGroupList 
                key={category.id}
                title={category.name}
                categoryId={category.id} 
                items={category.products} />
            ))}

            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
