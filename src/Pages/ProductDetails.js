import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  console.log(params.productId);

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetails;
