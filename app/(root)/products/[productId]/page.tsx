import Gallery from "@/components/Gallery";
import ProductInfo from "@/components/ProductInfo";
import { getProductDetails } from "@/lib/actions";

const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const producctDetails = await getProductDetails(params.productId);

  return (
    <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
        <Gallery productMedia={producctDetails.media}/>
        <ProductInfo productInfo={producctDetails} />
    </div>
  )
};

export default ProductDetails;
