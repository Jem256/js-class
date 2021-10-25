usersData = [];

//define an object
let userInfo = {
    firstName: 'Jemimah',
    lastName: 'Nagasha',
    profession: 'engineer',
    hobbies: ['movies', 'food', 'travel'],
    nationality: {
        city: 'Kampala',
        country: 'Uganda'
    }
}

// accessing data from an object
// dot notation
console.log(userInfo.firstName)
console.log(userInfo.hobbies[1])
console.log(userInfo.nationality.city)

console.log('==========================')

// subscripting
console.log(userInfo['lastName'])
console.log(userInfo['profession'])
console.log(userInfo['nationality']['country'])
console.log(userInfo['hobbies'][2])

console.log('===========================')

// adding data to an object and changing 
userInfo.languagesSpoken = ['runyankole', 'english']
userInfo['gender'] = 'Female'
console.log(userInfo)

console.log('============================')

let userInfo2 = Object.assign({}, userInfo)
userInfo2.firstName = 'Kenny'
userInfo2.lastName = 'Serubiri'
userInfo2.gender = 'Male'
console.log(userInfo.firstName, userInfo2.firstName)
console.log(userInfo.gender, userInfo2.gender)

// how to safely access data in an object
//let empty = {}
//if (Object.keys(empty).length())

let objKeys = Object.keys(userInfo)
if(objKeys.includes('firstName')){
    console.log(userInfo.firstName)
} else{
    console.log('Nothing to see here')
}