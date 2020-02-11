let fruits = ['apple','pear','banana']
console.log(fruits)
console.table(fruits)

//thius will add to the tail of the arry
fruits.push('jackfruit')
//this will remove the tail of the array
fruits.pop()
fruits.shift() //taking of apple
fruits.unshift("jackfruit") //this wfill add to the head of the array
fruits[3] = 'grape'
fruits[3] = 'orange'
console.log(fruits.indexOf('banana'))
//returns the slice of ana array between the elements you specify
//console.log(fruits.slice(1,3))
//adds element between the 2 values you specify
//fruits.splice(1,3,'jackfruit')
//console.log(fruits)
//for(let i=0;i<fruits.length;i++){
  // console.log(fruits[i])
//}
//fruits.forEach(element =>console.log('I love to eat ${element}'))//i love to eat apple,   pear does not retiurn

const newFruits = fruits.map(element => element+" is really good")// does not mutate mean change its valude map 
                                                                   //does return array
console.log(newFruits)

//methods to allow youn to stringify and array
let shapes = ['square','triangle']
let a = shapes.toString()
let b = shapes.join('&')

console.log(b)
let numbers= [2,1,3]
console.log[numbers.sort()]
console.log(numbers.reverse())

