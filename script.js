const user = +prompt('');
const computer = Math.floor(Math.random() * 3);
console.log(computer);


if (user == 0 && computer == 0) {
    console.log('draw');
} else if (user == 0 && computer == 1) {
    console.log('user win');
} else if (user == 0 && computer == 2) {
    console.log('computer win');
} else if (user == 1 && computer == 0) {
    console.log('computer win');
} else if (user == 1 && computer == 1) {
    console.log('draw');
} else if (user == 1 && computer == 2) {
    console.log('user win');
} else if (user == 2 && computer == 0) {
    console.log('user win');
} else if (user == 2 && computer == 1) {
    console.log('computer win');
} else if (user == 2 && computer == 2) {
    console.log('draw');
}