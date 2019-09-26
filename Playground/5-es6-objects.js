const name = 'nate'

const userAge = 13

const user = {
  name,
  userAge,
  location: 'DC'
}

console.log(user);

// 

const product = {
  label: 'red notebook',
  price: 3,
  stock: 231,
  salePrice: undefined
}
const {label:productlabel, stock} = product
console.log(productlabel);
console.log(stock);
