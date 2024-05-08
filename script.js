// const user = {}; //empty object
// const user1 = {
//   fistName: 'Pawan',
//   lastName: 'Tiwari',
//   Age: 21,
//   education: 'Graduation',
//   City: 'Bhojpur',
// };


const user1 = {}  //different address
const user2 = {} // different address

const username = '' // non-primitive type
const username1 = ''//non primitive type.

const myName = "Pawan"
const assign = {

}
assign.firstname = 'Pawan'

// access value usign clg from objects
const accessValue = {
    names : 'Pawan',
    title : 'Tiwari',
    Pawan : 'Developer',
    // ham khuch nsesting bhi kar skte hai object mein
    address:{
        village: "Bariswan",
        post: "Shahpur",
        city: "Bhojpur",
        state:"Bihar",
        pincode : 802165,
        moreDetails:{
            family: 10,
            this: 'that',
            more:{
                you:'Adarsh'
                
            }
        }

    }
}
delete accessValue.name;

// console.log(accessValue.name); // first way
// console.log(accessValue["title"]); // powerful way
// console.log([myName]);
// console.log(accessValue.Age = 21);

// console.log(accessValue['is-student'] = true);

// console.log(accessValue.address.village);
// console.log(accessValue.address.state);
// console.log(accessValue.address.moreDetails.more = 'Arzoo');


let username12 = 'Pawan';

// Object.seal(accessValue); // ye help krta hai object mein kisi bhi vlu ko  delete aur add se rokta hai iska syntax ye hai.
Object.freeze(accessValue) // poweful than seal iska use ham krte jab hame delete aur add hone se rokta hai 



