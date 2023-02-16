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




  //task3
  function fact(n) {
   if (n===0 ||n===1) {
    return  1;
   } else{
    return n * fact(n - 1);
   }
    
  }
  console.log(fact(5));






  //task4
  function Login(email, password) {
    if (email==="lorem@code.edu.az"&& password==="12345") {
        return "success"
    } else {
        return "email ve ya parol sefdir"
    }
}
  console.log(Login("lorem@code.edu.az", "12345"));


