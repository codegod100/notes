const newPerson = (name, age) => {
  const obj = function () {
    return [name, age];
  }
  obj.greet = () => { return `Hello, I'm ${name}` }
  obj.change = (newName) => { name = newName }
  return obj
}


const person = newPerson('John', 30);
person.change('Mike');
console.log(person.greet()) // Hello, I'm Mike

const person2 = newPerson('Rain', 25);
person2.change('Deer');
console.log(person2.greet()) // Hello, I'm Deer
