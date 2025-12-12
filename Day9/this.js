


//----------------------------
//function definition
//------------------------

function greet(city,age)
{
    console.log(`hi this is ${this.name}, from ${city}, age ${age}`);
}
//-----------------------
//object "this "
//----------------------

const user ={
    name:"doe"
};

//------------------------
//call()
//----------------------
console.log("call()-output");
greet.call(user,"chrnnai",35);

//=============================
//apply()
//=============================
console.log("apply()output");
greet.apply(user,["chennai",22]);

//=============================
//bind
//===============================
console.log("bind()-output");
const newgreet =greet.bind(user,"chennai",36);
newgreet();
