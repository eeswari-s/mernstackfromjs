//function

function outer()
{
    let count =0;

    function inner()
    {
        count ++;
        console.log("count value: ",count)
    }
    return inner;
}
//  using closure
const counter = outer();

counter();
counter();
counter();
counter();
counter();

const counter2 = outer();
counter2();
counter2();
counter2();
counter2();
counter2();
