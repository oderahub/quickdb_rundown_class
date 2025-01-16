const checkAge = (age: number) => {
  const votingAge: number = 18

  if (age >= votingAge) {
    console.log('Eligible to vote')
  } else {
    console.log('Not eligible to vote')
  }
}
const age = 5
console.log(checkAge(age))

//4

const nameOfDay = (number: number): void => {
  switch (number) {
    case 1:
      console.log('Sunday')
      break
    case 2:
      console.log('Monday')
      break
    case 3:
      console.log('Tuesday')
      break
    case 4:
      console.log('Wednesday')
      break
    case 5:
      console.log('Thursday')
      break
    case 6:
      console.log('Friday')
      break
    case 7:
      console.log('Saturday')
      break
    default:
      console.log('Invalid')
  }
}

const day = 2
console.log(nameOfDay(day))
