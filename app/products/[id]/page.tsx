import { notFound } from "next/navigation";
import ProductDetailClient from "@/components/ProductDetailClient";
import { products } from "@/lib/products";

function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params?.id);
  if (!product) return notFound();
  return <ProductDetailClient product={product} />;
}
