
// const button = document.getElementById("button");
// button.addEventListener('click', () => {
//     const input = document.getElementById('input-item');
//     const inputValue = input.value;
//     if(isNaN(inputValue)){
//         console.log(typeof inputValue,'not a number',inputValue);
//     }
//     else{
//         console.log(typeof inputValue,inputValue);
//     }

//     input.value = '';
// })
// 1. টেমপ্লেট স্ট্রিং 

const str1 = 'programing';
const str2 = 'hero';
// console.log('hello ' + str1 +' '+ str2);old way

// console.log(`Hello, ${str1} ${str2}`); 

// const smallNum = [1, 2, 3];
// const bigNum = [4, 5, 6];
// const num = [...smallNum, ...bigNum];


const player = {
    name: 'mamun',
    age: 30,
    location: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

// const myfunc = ({name,age,...rest}) =>{
//     const {city,country} = rest.location;
//     console.log(name,age,city,country);
// };

// myfunc(player);

// let playerWithTeam = {
//     ...player,
//     team:['kkr','shr']
// }
// console.log(player);
// console.log(playerWithTeam);

// let animal = {
//     name: "dog",
//     color: "brown",
//     age: 7,
//   };

//   const fun = ({name,color}) =>{
//     console.log(name,color);
//   }
//   fun(animal)

const dreamGirl = [
    {
        dream1: {
            name: "babu",
            height: "5.4",
            family: [{ father: "rock", mother: "shila", sister: "chinki" }],
            age: undefined,
            contactInfo: [
                {
                    facebook: {
                        link: "https://www.facebook.com/",
                        followers: "12545",
                        status: "single",
                        friendsList: [
                            { name: "rofik" },
                            { name: "jobbar" },
                            { name: "salam" },
                            { name: "borkot" },
                            undefined,
                        ],
                    },
                },
                { instagram: "https://www.instagram.com/" },
                { twitter: "https://twitter.com/" },
                { github: "https://github.com/" },
                { phone: ["01254823212", "02152457"] },
            ],
        },
    },
];
const family = dreamGirl[0].dream1.family[0];
for (member in family) {
    const familuyMember = `${member}:${family[member]}`
    console.log(familuyMember);
}
// const keyValue = Object.values(family);
// const keyValue = Object.keys(family);
// const keyValue = Object.entries(family);
// keyValue.map(val => console.log(val))
// console.log(familyMember);
// const friendList = dreamGirl[0].dream1.contactInfo[0].facebook.friendsList;
// console.log(friendList);
// friendList.forEach(friend => {
//     let name = friend ? `${friendList.indexOf(friend)}: ${friend.name}` : `${friendList.indexOf(friend)}: undefind`;
//     console.log(name);
// })

// friendList.map((friend,index)=>{
//     const name =`${index} ${friend?.name}`;
//     console.log(name);
// })
// const name = friendList.map((friend,index)=>friend?.name);
// console.log(name);
// const products = [
//     { id: 1, name: "apple", price: 500, color: "golden" },
//     { id: 2, name: "xiaomi", price: 124, color: "black" },
//     { id: 3, name: "samsung", price: 200, color: "black" },
//     { id: 4, name: "samsung2", price: 200, color: "black" },
//     { id: 5, name: "lenovo", price: 300, color: "pink" },
//     { id: 6, name: "xiaomi", price: 100, color: "pink" },
//     { id: 7, name: "lenovo", price: 300, color: "pink" },
// ];

// const result = products.filter(product => product.id != 1 && product.color === 'black').map(product => product.name);

// console.log(result);

// const arr = ["Rimom","Rahul","Mou","Reshmi"];
// const [a,...b] = arr;
// console.log(b);