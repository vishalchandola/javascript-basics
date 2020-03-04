let a = 10,
  b = 20,
  c = 50;
const d = "Hi!",
  e = "John",
  f = "Doe";

console.group("Addition");
console.log(a + b); // 30
console.log(a + c); // 60
console.log(d + " " + e); // Hi! John
console.log(e + " " + f); // John Doe
console.groupEnd();

console.groupCollapsed("Multiplication");
console.log(b * c); // 1000
console.log(a * c); // 500
console.log(a * 1000); // 10000
console.groupEnd();

console.group("Incrementing");
console.log(a + 1); // 11
console.log(a++); // 10
console.log(a++); // 11
console.log(a++); // 12
console.groupEnd();

a++;
++a;
b--;
--b;
c += a;
e += f;
