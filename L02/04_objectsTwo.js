const tinderUser = new Object();
// const tinderUser = {}; // alternate way to create an object.
tinderUser.id = "ldjkf83ksljfd";
tinderUser.name = "Programmer X";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "regularuser@hotmail.com",
    fullname: {
        userfullname: {
            firstname: "Programmer",
            lastname: "X"
        }
    }
};
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.firstname.lastname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}    // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign(obj1, obj2)  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// // same above thing (line 30) but with optional parameter.
// const obj3 = Object.assign({}, obj1, obj2)   // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "hot@gmail.com"
    },
    {
        id: 1,
        email: "hot@gmail.com"
    },
    {
        id: 1,
        email: "hot@gmail.com"
    },
]

users[1].email;
// console.log(tinderUser);
 
// console.log(Object.keys(tinderUser));    // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));   // [ 'ldjkf83ksljfd', 'Programmer X', false ]
//console.log(Object.entries(tinderUser));  /*                     [
                                                                        [ 'id', 'ldjkf83ksljfd' ],
                                                                        [ 'name', 'Programmer X' ],
                                                                        [ 'isLoggedIn', false ]
 //                                                                ] 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
                                                               

                                                                 










