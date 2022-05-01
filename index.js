const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => tutorials.map( (mySentence => mySentence.split(" ").map( (word) => {
  return word[0].toUpperCase() + word.substring(1)
  }).join(" ")));

console.log(titleCased())

// const titleCased = array => array.map( (mySentence => mySentence.split(" ").map( (word) => {
//   return word[0].toUpperCase() + word.substring(1)
//   }).join(" ")));

// titleCased(tutorials)

//console.log(titleCased(tutorials))


// const titleCased = array => array.map( function() {
//   const words = mySentence.split(" ")
//   const capFirstLetter = words.map((word) => word[0].toUpperCase() + word.substring(1)).join(" ");
// })

//console.log(titleCased(tutorials))

// const mySentence = tutorials[0]
// const capFirstLetter = mySentence.split(" ").map((word) => {
//   return word[0].toUpperCase() + word.substring(1)
//   }).join(" ");

// console.log(capFirstLetter)






////  ******MAPPING ARRAYS CODE ALONG******
/*
const oldAccounts = [
  { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
];

const mapV2 = (array, callback) => {
  const newArray = []
  for (const element of array) {
    newArray.push(callback(element))
  }
  return newArray
}


const newEngineers = mapV2(oldAccounts, function (account) {
  return Object.assign({}, account, { accessLevel: "admin" });
});

console.log(newEngineers)

const userIDS = mapV2(newEngineers, function (eng) {
  return eng.userID;
});

console.log(userIDS)


const equippedEngineers = newEngineers.map(eng => {
  return Object.assign({}, eng, { equipment: "Laptop" })
})

console.log(equippedEngineers)




const roi = [1000, 25000, 15000, 30000, 8995]
const initInvest = [10257.69]


const mapReturns = array => {
  const mathArray = []
  for (const element of array) {
    let returnFormula = Math.floor(((element-initInvest)/initInvest)* 100)
    mathArray.push(`Your ROI is ${returnFormula}%`)
  }
  return mathArray
}

console.log(mapReturns(roi))
*/