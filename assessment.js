// Write a function that takes in a string and returns it when reversed
// let food = “eating”

let food="eating"

function word(food){
    for(let i=food.length; i>=0;i--){
        console.log(food[i])

    }
}
word(food)

// Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23




// function mergesort(num){
//     if (num.length<=1){
//         return num
//     }
//     let mid=Math.floor(num.length/2)
//     let left = num.slice(0,mid)
//     let right =num.slice(mid)
//     return merge(mergesort(left),mergesort(right))
// }
// function merge(left,right){
//     let result=[]
//     let i=0
//     let j=0
//     while(i<left.length&&j<right.length-1){
//         if(left[i]<right[i]){
//         result.push(left[i])
//         i++
//         }else{
//             result.push(right[j])
//             j++
//         }
//         result.concat(merge(left[i])).concat(merge(right[i]))

//         }


//     }
//     let num = [2,8,0,23,5,45,76]
//     mergesort(num)






// Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

for(let year=2000;year<=2023;year++)
if(year%4==0){
    console.log(year+"is a leap year")
}else{
    console.log(year+"is a not leap year")
}


// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
for(n=0; n<=100;n++){
    if(n%3==0 && n%5==0){
        console.log(n+" FizzBuzz")
    }else if(n%3==0){
        console.log(n+" Fizz")
    }
    else if(n%5==0){
        console.log(n+" Buzz")
    }

}

// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]
function numbers(numArray){
    let newArr=[]
    for (let i=0; i<numArray.length; i++){
        newArr.push(numArray[i]*4)

    }
    console.log(newArr)
}
let numArray=[12,87,45,75,23,64,73]
numbers(numArray)


// Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]

let nums =["10","24","45","56","67"]
function NumStrings(nums){
    let numberArr=[]
    for(let i=0; i<nums.length; i++){
        numberArr.push(Number(nums[i]))
        
    }
    console.log(numberArr)
}
NumStrings(nums)
