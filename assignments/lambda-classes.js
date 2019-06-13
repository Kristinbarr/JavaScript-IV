// CODE here for your Lambda Classes

class People {
  constructor(attr) {
    this.name = attr.name
    this.location = attr.location
    this.age = attr.age
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}

class Instructor extends People {
  constructor(attr) {
    super(attr)
    this.favLanguage = attr.favLanguage
    this.specialty = attr.specialty
    this.catchPhrase = attr.catchPhrase
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`
  }
  grade(student, subject) {
    return `${student.name} receives a perfect sore on ${subject}`
  }
}

class Student extends People {
  constructor(attr) {
    super(attr)
    this.previousBackground = attr.previousBackground
    this.className = attr.className
    this.favSubject = attr.favSubject
  }
  listsSubject() {
    return this.favSubject.map(subject => subject)
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`
  }
}

class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr)
    this.gradClassName = attr.gradClassName
    this.favInstructor = attr.favInstructor
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @${channel} standby times!`
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}

const becka = new Instructor({
  name: 'Becka',
  location: 'Houston',
  age: 28,
  favLanguage: 'Go',
  specialty: 'Front-End',
  catchPhrase: '...Flawless...'
})

const adrian = new Instructor({
  name: 'Adrian',
  location: 'Brooklyn',
  age: 99,
  favLanguage: 'Python',
  specialty: 'Back-End',
  catchPhrase: "Life is better in Pajamas"
})

const blondy = new Student({
  name: 'Blondy',
  location: 'Los Angeles',
  age: 19,
  // favLanguage: 'JavaScript',
  // specialty: 'Fullstack',
  // catchPhrase: "I can't do this but I'm doing it anyway!",
  previousBackground: "hand model",
  className: "WEB21",
  favSubject: ['CSS', 'HTML','JavaScript', 'React']
})

const ellis = new Student({
  name: 'Ellis',
  location: 'Denver',
  age: 59,
  // favLanguage: 'Ruby',
  // specialty: 'Back-End',
  // catchPhrase: 'Turn down for what',
  previousBackground: 'taxodermist',
  className: 'WEB19',
  favSubject: ['Ruby', 'SQL', 'APIs']
})

const joy = new ProjectManager({
  name: 'Joy',
  location: 'Miami',
  age: 73,
  favLanguage: 'JavaScript',
  specialty: 'Front-End',
  catchPhrase: "I'm doing whatever I want now",
  gradClassName: 'WEB6',
  favInstructor: 'Josh'
})

const terrance = new ProjectManager({
  name: 'Terrance',
  location: 'Chicago',
  age: 47,
  favLanguage: 'Node.js',
  specialty: 'Back-End',
  catchPhrase: "OMG Becky, look at her back-end",
  gradClassName: 'CS1',
  favInstructor: 'Dan'
})

console.log(terrance.catchPhrase)
console.log(becka.catchPhrase)
console.log(adrian.specialty)
console.log(ellis.PRAssignment('JavaScript'))
console.log(blondy.listsSubject())
console.log(becka.demo("LESS"))
console.log(becka.grade(blondy, 'CSS'))
