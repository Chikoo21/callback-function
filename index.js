function list(abc) {
  console.log("here's my list");
  abc();
}

function fn() {
  console.log("Hello!");
}

list(fn);
