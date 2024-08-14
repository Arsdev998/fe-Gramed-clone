import ProductDetail from "@/components/productDetail/ProductDetail";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { BreadcrumbHeader } from "@/components/ui/breadCrumsHeader";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-start w-[1200px]">
        
        <ProductDetail id={id} />
      </div>
    </section>
  );
};

export default ProductDetailPage;
