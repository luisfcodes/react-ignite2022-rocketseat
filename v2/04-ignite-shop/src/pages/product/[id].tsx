import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          tenetur dignissimos accusamus quidem eveniet quisquam iusto autem
          eligendi! Quis qui maxime vitae, iure animi aut molestias mollitia rem
          doloribus id?
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
