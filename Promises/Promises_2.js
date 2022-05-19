// const myPromise =
const promise1 = new Promise(function (myResolve, myReject) {
  myResolve(4); // when successful
  myReject(3); // when error
});
promise1.then(
  function (value) {
    console.log("Promise1-Fullfilled: ", value);
  },
  function (error) {
    console.log("Promise1-Rejected: ", error);
  }
);

// second sample
const promise2 = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myResolve("Promise resolved");
  }, 3000); // when successful
  myReject(3); // when error
});
promise2.then(
  function (value) {
    console.log("Promise2-Fullfilled: ", value);
  },
  function (error) {
    console.log("Promise2-Rejected: ", error);
  }
);
