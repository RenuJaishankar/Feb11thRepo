let apple = {
    name:'apple',
    color:['red','green','yellow'],
    amount:3,
   // tasty:'yes',
   tasty:function(){
       console.log('this is tasty')
   }
    worms: {
        name:'jim',
        length:'1 inch'
    }
    }
let mytup = [3,'3',true]
    apple.worms.name = 'tim'
    //json syntax in javascript is completely lega1
    //notice the quotations
    let json={
        "firstprop":true,
        "secondprop":2,
        "thirdprop":"yellow"
    }
    console.log(json)
console.log(apple.worms) 