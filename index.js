const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);


// New function
const arrayOfNames = ["Charlie", "Samip", "Ali"];
const eventName = "birthday";

function writeCards (array, name) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`)
    }
    return newArray;
}

console.log(writeCards(arrayOfNames, eventName));

// While loop

function countDown (counter) {
    while (counter >= 0) {
        console.log(counter);
        counter--;
    }
}

countDown(10);



