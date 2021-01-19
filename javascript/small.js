let n = [3, 2, 6, 4, 5];
let small = n[0];

for (let i = 0; i < n.length; i++) {
    if (small > n[i]) {
        small = n[i];
    }
}
console.log(small);

