function foo(x) {
  if (x == null) {
    return 0; //This will not catch undefined
  } else {
    return x * 2;
  }
}
console.log(foo(null)); // 0
console.log(foo(undefined)); //NaN