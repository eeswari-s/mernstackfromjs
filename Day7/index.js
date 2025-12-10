






for(let i=1; i <= 10; i++)
{
    console.log("numbers",i);
}


var a=5;
while(a <=10)
{
    console.log("numbers",a);
    a++;
}



 let b =2
do{
    console.log("numbers",b);
b++;

}
while (b<=10);

//explore
//for..of ,for...in


//foreach

const products = [
    {id:1,name:"laptop",price:50000,inStock:true},
    {id:2,name:"headphone",price:1500,inStock:true},
    {id:3,name:"keyboard",price:800,inStock:false},
    {id:4,name:"mouse",price:500,inStock:true}
];

function showProducts() {
    products.forEach(item =>{
        console.log("------------------");
        console.log("product ID: ",item.id);
        console.log("product Name: ",item.name);
        console.log("product Price: ",item.price);

        if(item.inStock)
        {
            console.log("status: Available");
        }
        else{
            console.log("out of stock");
        }
     
    });
}
showProducts();