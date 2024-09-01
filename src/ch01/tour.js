let x;

x = 0;
x
console.log(`${x}`);

x = 1;
console.log(`${x}`);
x = 0.01;
console.log(`${x}`);
x = "hello world";
console.log(`${x}`);
x = 'JavaScript';
console.log(`${x}`);
x = true;
console.log(`${x}`);
x = false;
console.log(`${x}`);
x = null;
console.log(`${x}`);
x = undefined;
console.log(`${x}`);

let book = {
    topic: "JavaScript",
    edition: 7
};

console.log(`${book.topic}`);
console.log(`${book["edition"]}`);
book.author = "Flanagan";
console.log(`${book.author}`); 
book.contents = {};
console.log(`${book.contents}`); 

console.log(`${book.contents?.ch01?.sect1}`);
