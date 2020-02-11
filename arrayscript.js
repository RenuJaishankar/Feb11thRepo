let list = ['apples', 'milk', 'bread', 'cereal']
list.push('pears')
list[1] = "oat milk"
let cart = []

cart = list.map(element => element)
console.log(cart) ['apples','oatmilk','bread','cereal','pears' ]
list=[]
// let i = list.length - 1
// console.log(i)

// while (list.length >= 1) {

//     let el = list[i]
//     //pop items from our grocery list
//     list.pop()
//     //push items to cart
//     cart[i] = el

//     i--
// }

console.log(list)
console.log(cart)
