import Product from "./Product.jsx";


function ProductTab(){
    let styles = {
        display : "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        
    }
return (
<div style={styles}>
<Product title = "Apple pencil Gen 2" idx={0}/>
<Product  title = "Apple pencil Gen 2" idx={1}/>
<Product  title = "Apple pencil Gen 2" idx={2}/>
<Product  title = "Apple pencil Gen 2" idx={3}/>
</div>
);
}
export default ProductTab;