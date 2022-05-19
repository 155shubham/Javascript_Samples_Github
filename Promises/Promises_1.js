function NormalCallBacksDemo() {
  // alert("NormalCallBacksDemo");
  console.log("NormalCallBacksDemo");
}

//Defining Promise
const myPromise = new Promise((resolve, reject) => {
  let condition = false;
  if (condition === true) {
    resolve("Prmoise is resolved successfully.");
  } else {
    reject("Promise is rejected");
  }
});

// Using Promise
function PromisesDemo() {
  // alert("PromisesDemo");
  myPromise
    .then((message) => console.log(message))
    .catch((message) => console.log(message));
}
