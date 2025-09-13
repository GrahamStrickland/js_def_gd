const π = 3.14;
const sí = true;

let café = 1; // Define a variable using a Unicode character
caf\u00e9     // => 1; access the variable using an escape sequence
caf\u{E9}     // => 1; another form of the same escape sequence

console.log("\u{1F600}");  // Prints a smiley face emoji

const café = 1;  // This constant is named "caf\u{e9}"
const café = 2;  // This constant is different: "cafe\u{301}"
café  // => 1: this constant has one value
café  // => 2: this indistinguishable constant has a different value
