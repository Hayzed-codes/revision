function Car(make, year, model, color) {
    this.make = make;
    this.year = year;
    this.model = model;
    this.color = color
}

const car1 = new Car("BMW", 2022, "Ibagaza", "Green")
console.log(car1.model)


function task1(callback){
        setTimeout(() => {
            console.log("Task one is complete");
            callback();
        },5000);
}

function task2(callback){
        setTimeout(() => {
            console.log("Task two is complete");
            callback();
        },4000);
}

function task3(callback){
        setTimeout(() => {
            console.log("Task three is complete");
            callback();
        },3000);
}


task1().then(value => {console.log(value)})
       .then(value => {console.log(value)})
       .then(value => {console.log(value); console.log("All task completed")});


// // task1(() => {
// //     task2(() => {
// //         task3(() => {
// //             console.log("All task completed")
// //         })
// //     })
// // })

// // task1();
// // task2();
// // task3();

//     function cleanHouse (){
        
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
    
//                 const houseClean = true;
    
//                 if (houseClean){
//                     resolve("The house got tidied up by me")
//                 }else{
//                     reject("He didn't clean the house")
//                 }
//             },3000)
//         })
//     };
    
//     function washCar (){
//         return new Promise ((resolve, reject) => {
//             setTimeout(() => {
    
//                 const carWashed = true;
    
//                 if (carWashed){
//                     resolve("He has washed the car")
//                 }else{
//                     reject("He didn't wash the car")
//                 }
    
//             },1000)
            
//         })
//     };
    
//     function cookFood (){
//         return new Promise ((resolve, reject) => {
//             setTimeout(() => {
    
//                 const foodCooked = false;
    
//                 if (foodCooked){
//                     resolve("The food is ready and served")
//                 }else{
//                     reject("He didn't cook the food")
//                 }
    
//             },2000)
//         })
//     };

// // async function allChores (){

// //     try {
// //         const cleanHouseResult = await cleanHouse();
// //         console.log(cleanHouseResult);
    
// //         const washCarResult = await washCar();
// //         console.log(washCarResult);
    
// //         const cookFoodResult = await cookFood();
// //         console.log(cookFoodResult);
// //         console.log("All tasks completed")
// //     }
// //     catch(error){
// //         console.error(error)
// //     }
    
// // }

// // allChores();




// cleanHouse().then(value => {console.log(value); return washCar()})
//             .then(value => {console.log(value); return cookFood()})
//             .then(value => {console.log(value); console.log("All task completed")})
//             .catch(error => {console.error(error)});





// fetch("https://pokeapi.co/api/v2/pokemon/mewtwo")
//      .then(response => response.json())
//      .then(data => console.log(data))
//      .catch(error => (console.error(error)));

/******************************** Fetch Data For Pokemon ************************/


// fetchData();
async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw new Error ("Could not get the Response")
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite")

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        
    }
    catch(error){
        console.error(error)
    }

}
























