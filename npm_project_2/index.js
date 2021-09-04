// -------------------------- Assignment -----------------------

const inquirer = require("inquirer");

console.log("********************************");
console.log("Welcome to Rice at Lunch");
console.log("Please login to continue");
console.log("********************************");

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        message: "Enter your user name",
        name: "username"
    },
        {
        type: "password",
        message: "Enter a password",
        mask: "*",
        name: "password"
    }   
  ])
  .then((userDetails) => {
    // Use user feedback for... whatever!!
    // * logic check your username and password are correct
    // * do it here
    console.log("********************************");
    console.log("welcome back", userDetails.username);
    console.log("********************************");

    inquirer.prompt([
        {
            type: "checkbox",
            name: "deliveryPickup",
            message: "Order type : ",
            choices: [
                {
                    name: "Home Delivery",
                },
                {
                    name: 'Pick Up',
                    disabled: 'COVID Restrictions',
                }
            ],
        },
        {
            type: "input",
            name: "PINCode",
            message: "Please enter PIN",
            validate(value) {
                const pass = value.length === 6;
                if(pass) {
                    return true;
                }
                return "Please enter a valid PIN code !";
            }
        },
        {
            type: "input",
            name: "Address",
            message: "Please enter your full address"
        },
        {
            type: 'input',
            name: 'Phone',
            message: "What's your phone number",
            validate(value) {
                const pass = value.length === 10;
                    if(pass) {
                        return true;
                    }
                return "Please enter a valid phone number !";
            }
        },
    ])
    .then(({deliveryPickup, Phone, Address, PINCode}) => {
        console.log("********************************");
        console.log("username : ", userDetails.username);
        console.log('Phone : ', Phone);
        console.log('Address : ', Address);
        console.log('PINCode : ', PINCode);
        console.log("************************************************************************************************");
        console.log("********************************   Welcome to our Food Gallery  ********************************");
        console.log("************************************************************************************************");


        const choices = ["Sweet corn pulao", "south Indian style peanut rice", "Peas pulao", "Pineapple rice", "Coconut milk pulao", "Kashmiri pulao", "Lemon rice", "Kuska rice", "Cabbage rice", "Mushroom rice"];

        inquirer
          .prompt([
            {
              type: 'checkbox',
              name: 'Dishes',
              message: 'Select the dishes you want : ',
              choices,
            },
          ])
          .then(({Dishes}) => {

            console.log("************************************************************************************************");
            console.log("username : ", userDetails.username);
            console.log('Phone : ', Phone);
            console.log('Address : ', Address);
            console.log('PINCode : ', PINCode);
            console.log("************************************************************************************************");
            console.log("********************************   Order Summary ***********************************************");
            console.log("************************************************************************************************");



            let total = 0;
            choices.forEach((dish, n) => {
                for(let item of Dishes) {
                    if(item === dish) {
                        total+=100 + (10 * n);
                        console.log(`${item} :                     ₹ ${100 + (10 * n)}/-`);

                    }
                }
            })   
            // console.log(`${item} :                     ₹ ${100 + (10 * n)}/-`)
            console.log("                           __________________________________")
            console.log("Total :                                    ₹", total + "/-");
            console.log("GST 5 % :                                  ₹", total * 0.5 + "/-");
            let payable = total + (total * 0.5) // applying 5% GST
            console.log(`Ammount to pay :                           ₹ ${payable} /-`)
              
              
          });
    })
    // .then(({phone, qty, toppings}) => {
    //     console.log("Order details are :");
    //     console.log(phone, qty, toppings);
    //     console.log("username", userDetails.username);
    // })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });





// -------------------------- WE Session -----------------------

// const inquirer = require("inquirer");

// console.log("********************************");
// console.log("Welcome to Kool Pizza");
// console.log("Please login to continue");
// console.log("********************************");

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//     {
//         type: "input",
//         message: "Enter your user name",
//         name: "username"
//     },
//         {
//         type: "password",
//         message: "Enter a password",
//         mask: "*",
//         name: "password"
//     }   
//   ])
//   .then((userDetails) => {
//     // Use user feedback for... whatever!!
//     // * logic check your username and password are correct
//     // * do it here
//     console.log("welcome back", userDetails.username);

//     inquirer.prompt([
//         {
//             type: "confirm",
//             name: "forDelivery",
//             message: "Do you want the pizza to be delivered ?",
//             default: true,
//         },
//         {
//             type: "input",
//             name: "phone",
//             message: "what is your phone number ?",
//             validate(value) {
//                 const pass = value.length === 10;
//                 if(pass) {
//                     return true;
//                 }
//                 return "Please enter a valid phone number !";
//             }
//         },
//         {
//             type: "input",
//             name: "qty",
//             message: "How many pizzas do you need ?",
//             validate(value) {
//                 let valid = !isNaN(parseInt(value));
//                 return valid || "please enter a number";
//             },
//             filter(value) {
//                 return parseInt(value);
//             }
//         },
//         {
//             type: "list",
//             name: "toppings",
//             message: "Please select your pizza topping",
//             choices: [
//                 "Paneer",
//                 "Chicken",
//                 "Corn and Cheese"
//             ]
//         },
//         {
//             type: "list",
//             name: "size",
//             message: "Please select your size",
//             choices: [
//                 "L",
//                 "M",
//                 "S"
//             ]
//         }
//     ])
//     .then(({phone, qty, toppings}) => {
//         console.log("Order details are :");
//         console.log(phone, qty, toppings);
//         console.log("username", userDetails.username);
//     })
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });