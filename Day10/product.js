//===========================================
//poduct details
//============================================
const products = [
  { id: 1, name: "Laptop", price: 55000, category: "Electronics", description: "i5 Processor, 16GB RAM", rating: 4.5 },
  { id: 2, name: "Phone", price: 25000, category: "Electronics", description: "OLED Display, 5000mAh Battery", rating: 4.2 },
  { id: 3, name: "Headphones", price: 2000, category: "Accessories", description: "Noise Cancellation", rating: 4.0 },
  { id: 4, name: "Keyboard", price: 900, category: "Accessories", description: "RGB Backlight", rating: 3.8 },
  { id: 5, name: "Smartwatch", price: 3500, category: "Wearable", description: "Heart Rate Monitor", rating: 4.1 },

  // 🔥 Added New 5 Products (Total 10)
  { id: 6, name: "LED TV", price: 40000, category: "Electronics", description: "4K UHD Smart TV", rating: 4.4 },
  { id: 7, name: "Shoes", price: 1200, category: "Fashion", description: "Running Shoes", rating: 4.0 },
  { id: 8, name: "Backpack", price: 800, category: "Fashion", description: "Waterproof Bag", rating: 4.1 },
  { id: 9, name: "Tablet", price: 15000, category: "Electronics", description: "10-inch HD Display", rating: 4.3 },
  { id: 10, name: "Power Bank", price: 1200, category: "Accessories", description: "20000mAh Fast Charging", rating: 4.2 }
];

//===================================
//10& discount function
//===================================
function getDiscountedProducts()
{
    return products.map(item=>{
        return{
            ...item,
            oldPrice:item.price,
            discountPrice:Math.round(item.price *0.9)//10%
        };
    });
}



//=================================
//show products with discounted price
//=================================
function showProductDetails()
{
    const updated = getDiscountedProducts();
    console.log("Products with Discounted Prices:");
    updated.forEach((p)=>{
        console.log(`
            ID:${p.id}
            Name:${p.name}
            Category:${p.category}
            Description:${p.description}
            Old Price:₹${p.oldPrice}
            Discounted Price:₹${p.discountPrice}
            Rating:${p.rating}  
             
            `);
                console.log("✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅")    
    });

}
showProductDetails();

//================================
//category filter
//====================================
function filterBycategory(categoryName)
{
    console.log(" category filter: ",categoryName);

    const filtered = getDiscountedProducts().filter(p=>
        p.category.toLocaleLowerCase() === categoryName.toLocaleLowerCase()
    );

    if(filtered.length === 0)
    {
        console.log("product not found");
        return;
    }
    filtered.forEach(p=>{
        console.log(`${p.name} ✅ Rs.${p.discountPrice} ✅ ⭐${p.rating}`);
    });
}
filterBycategory("Electronics");

//================================
//cart
//=================================

let cart = [];

function addToCart(id)
{
    const updatedProducts = getDiscountedProducts();
    let product = updatedProducts.find(p => p.id === id);

    if(!product)
    {
        console.log("Product not found!");
        return;
    }
    
    let existing = cart.find(item => item.id === id);

    if(existing)
    {
        existing.qty++;
        console.log(`increased quantity of ${existing.name} to ${existing.qty}`);
    }
    else
    {
        cart.push({...product, qty: 1});
        console.log(`added ${product.name} to cart`);
    }
}

addToCart(2);
addToCart(1);
addToCart(5);
addToCart(2);
addToCart(3);
addToCart(10);


//remove
function removeFromCart(id)
{
    let index = cart.findIndex(item => item.id === id);

    if(index !== -1)
    {
        console.log(`removed ${cart[index].name} from cart`);
        cart.splice(index,1);
    }
    else{
        console.log("item not found in cart");
    }
}

removeFromCart(5);


function showCart()
{
    if(cart.legth === 0)
    {
        console.log("cart is empty");
    }

    console.log("your cart");
    let total=0;

    cart.forEach(item =>{
        console.log(`-${item.name}| rs.${item.discountPrice}| qty:${item.qty}`);
        total += item.discountPrice * item.qty;
    }
    );
    console.log("Total amount: ₹",total);
}

showCart();

//search

function searchproduct(keyword)
{
    console.log("search here: ",keyword);

    let result = products.filter(p=> 
        p.name.toLocaleLowerCase().includes (keyword.toLocaleLowerCase()) 
    );

    if(result.length === 0)
    {
        console.log("no products found");
        return;
    }

    result.forEach(p =>{
        console.log(`${p.name} ✅ Rs.${p.price} ✅ ⭐${p.rating}`);
    });
}

searchproduct("phone");
searchproduct("match");