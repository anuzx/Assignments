// Problem Description – callbackify(fn)
//
// You are required to write a function named callbackify that takes a function
// which returns a Promise.
// The function should return a new function that accepts a callback as its
// last argument.
// When the Promise resolves, the callback should be called with `(null, data)`.
// When the Promise rejects, the callback should be called with the error.


function callbackify(fn) {
    //making a wrapper func becuz we can't change original fn
    return function (...args) //array of arguments 
    {
        const callback = args.pop()//removes the last element from an array which is callback

        //spread operator
        fn(...args).then((data) => {
            callback(null,data)
        }).catch((error) => {
            callback(error)
        })
    }
}

//in this ques we need to convert fn into a callback style fn
//promise style (current): fn(a, b).then(result => {}).catch(err => {});
//callback style : fn(a, b, (err, result) => {});


module.exports = callbackify;
