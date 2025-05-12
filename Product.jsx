import "./Product.css";
import Price from "./Price.jsx";

function Product({title,idx}){
    let oldPrices = ["10,000", "8,989", "8,999", "7,999"];
    let newPrices = ["9,999", "8,000", "7,999", "6,999"];
    let des = ["800 Dpi Flexible", "Durable , Wireless", "Faster and Quicker", "256 gb Ram and Processor"];
return (
<div className="Product">
  <h2>{title}</h2>
  <p> {des[idx]} </p>
  <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
</div>
);
}
export default Product;