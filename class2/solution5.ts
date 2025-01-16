const greet = (person: string | null) => {
  if (person && person.length > 0) {
    console.log(`Hello ${person}`)
  } else {
    console.log('No name provided')
  }
}

console.log(greet('peace'))
