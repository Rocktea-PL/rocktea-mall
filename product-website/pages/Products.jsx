import ProductFilter from "../src/components/Products/FilterCards";
import Hero from "../src/components/Products/Hero";
import AllProducts from "../src/components/Products/AllProducts";
import { useUserProductContext } from "../src/Hooks/UserProductContext";
import { useParams } from "react-router-dom";

export default function Products() {
  const { type } = useParams();
  const { products } = useUserProductContext();
  const FormattedType = type.replace(/-/g, " ");
  const FilterAllProducts =
    products?.length > 0 &&
    products.filter(
      (item) =>
        item?.subcategory?.name == FormattedType ||
        item?.producttype == FormattedType,
    );
  return (
    <main className="mt-[5rem] mx-auto max-w-[1250px] ">
      <Hero
        FormattedType={FormattedType}
        FilterAllProducts={FilterAllProducts}
      />
      <ProductFilter />
      <AllProducts FilterAllProducts={FilterAllProducts} />
    </main>
  );
}
