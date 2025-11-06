

const add=(a,b)=>{

  return a+b

}

const multiply=(a,b)=>{

  return a*b

}

const divide=(a,b)=>{

  if(b!==0)
  {
    return a/b
  }
  else 
    return "cant divide by zero"

}

const subtract=(a,b)=>{

  return b-a

}

module.exports={add,divide,subtract,multiply}