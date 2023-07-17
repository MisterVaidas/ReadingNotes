const people = [['pete', 32, 'librarian', null], ['Smith', 40, 'accountant', 'fishing:hiking:rock_climbing'], ['bill', null, 'artist', null]];

// Accesing first inner array
const firstPerson = people[0];
console.log(firstPerson);

// Accesing specific values within the first inner array
const firstName = people[0][0];
const firstAge = people[0][1];
const firstOccupation = people[0][2];
const firstHobby = people[0][3];
console.log(firstName, firstAge, firstOccupation, firstHobby);

// Accesing the second inner array
const secondPerson = people[0];
console.log(secondPerson);

// Accessing specific values within the second inner array
const secondName = people[1][0];
const secondAge = people[1][1];
const secondOccupation = people[1][2];
const secondHobbies = people[1][3].split(':');
console.log(secondName, secondAge, secondOccupation, secondHobbies);

// Accessing the third inner array
const thirdPerson = people[2];
console.log(thirdPerson);

// Accessing specific values within the third inner array
const thirdName = people[2][0];
const thirdAge = people[2][1];
const thirdOccupation = people[2][2];
const thirdHobbie = people[2][3];
console.log(thirdName, thirdAge, thirdOccupation, thirdHobbie);