//alert("salam")



//task 1
function Num(n)
 {
    
    if (n % 21 === 0) {
      return "eded 21-ə bölünür";
    } else {
      return "eded 21-ə bölünmür";
    }
    
  }
  console.log(Num(45));





//task2
  function fact(n) {
   if (n===0 ||n===1) {
    return  1;
   } else{
    return n * fact(n - 1);
   }
    
  }
  console.log(fact(5));


//task2
function Sum(){
    let sum=0;
    let arr=Array.from(arguments);
     {
        for (let i = 0; i < arr.length; i++) {
            
            const element = arr[i];
            if (arr[i]%2===0)
            sum+=element**2
        }
        return sum
    }
    
}
console.log(Sum(2,4,5,3));



//task4
  function Login(email, password) {
    if (email==="lorem@code.edu.az"&& password==="12345") {
        return "Enter Success"
    } else {
        return "Wrong email or password"
    }
}
  console.log(Login("lorem@code.edu.az", "12345"));


