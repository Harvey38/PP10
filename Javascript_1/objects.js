// let obj={};
// console.log(obj);

// let obj ={
//     name:'Tushar',
//     lastName:'Gupta',
//     age:35
// }
// console.log(obj);


let tony={
    name:"Tony",
    lastName:'Stark',
    friends:['Steve','Bruce','Peter'],
    age:45,
    isAvenger:true,
    abc:undefined,
    address:{
        state:"New York",
        city:'Long Island',
    },
    saysHi:function fn()
    {
        console.log('Iron Man says Hello');
        // return "Part of Journey Is the End"
    },
}
// console.log(tony)
//2 ways to access values
//1
// console.log(tony.name)
// console.log(tony.friends[1]);
// console.log(tony.age);
// console.log(tony.isAvenger);
// console.log(tony.address.city);
// console.log(tony.saysHi());
// console.log(tony.anything);
//2
// console.log(tony['name']);
// console.log(tony['friends']);
// console.log(tony['age']);
// console.log(tony['isAvenger']);
// console.log(tony['address']['city']);
// console.log(tony['saysHi']());
let karr = Object.keys(tony);
console.log(karr);
for(let k in tony)
{
    console.log(k);
    console.log(tony[k]);
}
// for(let i=0;i<karr.length;i++)
// {
//     // let key = karr[i];
//     // console.log(key);
//     console.log(tony[karr[i]]);
// }