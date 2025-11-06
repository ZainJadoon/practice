

const {add,subtract,multiply,divide}=require("./calculator")


test("Multiplication result test",()=>{

  expect(multiply(2,3)).toBe(6)

})

test("Addition result test",()=>{

  expect(add(2,3)).toBe(5)

})

test("Divide result test",()=>{

  expect(divide(6,3)).toBe(2)

})
test("subtract result test",()=>{

  expect(subtract(2,3)).toBe(1)

})