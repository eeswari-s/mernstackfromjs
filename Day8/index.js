



//var global scope

var a=10;
{
    console.log(a);
    var b=20;
    console.log(b);

}
console.log(a);
console.log(b);

//let -block scope
let c=30;
  {
      let  d=40;;
    console.log(c);//block scope
     
  
  }

 console.log(d);

  //const

  let f=50;
  {
      let  e=40;;
    console.log(f);//block scope
     
  
  }

 console.log(e);


  //function scope

  function pooja()
  {
    let message = "Welcome to my home!";//functional scope
    console.log("hi pooja : ",message);
  }

  pooja();

    console.log("hi pooja : ",message);//errormessage is not defined