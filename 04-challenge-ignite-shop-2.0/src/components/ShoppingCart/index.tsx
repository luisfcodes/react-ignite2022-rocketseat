import { ShoppingCartContainer } from "./styles";

export function ShoppingCart() {
  return (
    <ShoppingCartContainer>
      <h1>Sacola de compras</h1>

      <div className="products">

      </div>

      <div className="summary">
        <div>
          <span>Quantidade</span>
          <span className="quantity">3 itens</span>
        </div>
        <div className="amountSummary">
          <span>Valor total</span>
          <span>R$ 270,00</span>
        </div>
      </div>

      <button className="buyButton">Finalizar compra</button>
    </ShoppingCartContainer>
  )
}