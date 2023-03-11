function writeCards(names, event) {
    const greetings = [];
    for (let x = 0; x < names.length; x++) {
        greetings.push(`Thank you, ${names[x]}, for the wonderful ${event} gift!`);
    }
    return greetings;
    }
    function countDown(intNumber) {
        for (let a = intNumber; a >= 0; a--) {
          console.log(a);
        }
      }
