"use script";

//object
let cars = {
    city: "Lagos",
    country: "Nigeria",
};

//array
let fruits = ["Apple", "Orange", "Banana"];
fruits.push("Mango");
console.log(fruits);

//pop
fruits.pop()

//shift - removes the first element
fruits.shift()

//unshift add to the front
fruits.unshift("Dandadan")


//for
for (let i = 0, i < 5, i++){
    console.log(i);
}

//while
let noFruits = 1;
while (noFruits < 5){
    console.log(noFruits);
    noFruits++;
}

//switch
switch(dayOfTheWeek){
    case "Monday":
        console.log('Today is Monday');
        break;
    case "Tuesday":
        console.log('Today is Tuesday');
        break;
    case "Wednesday":
        console.log('Today is Wednesday');
        break;
    case "Thursday":
       console.log('Today is Thursday');
        break;
    case "Friday":
        console.log('Today is Friday');
        break;
    case "Saturday":
        console.log('Today is Saturday');
        break;
    case "Sunday":
        console.log('Today is Sunday');
        break;
    default:
        console.log('That is not a day in English.')
    
}



//do while and functions next class