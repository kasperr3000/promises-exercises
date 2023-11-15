
/**
 * 
 * EXERCISE 1
 * 
 * @returns {Promise<3>}
 */
function makePromiseResolveWith3(){
  /* IMPLEMENTED*/
  return Promise.resolve(3)
}

/**
 * 
 * EXERCISE 2
 * 
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo(){
  /* IMPLEMENTED */
  return Promise.reject("Boo!")
}

/**
 * 
 * EXERCISE 3
 * 
 * @param {boolean} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */

function makePromiseWithConstructor(itShouldResolve){
  return new Promise((resolve, reject) => {
    /* IMPLEMENTED */
    /* If itShouldResolve is true, call resolve */
    if (itShouldResolve) {
      resolve()
    }
    /* If itShouldResolve is false, call reject */
    else {
      reject()
    }
  });
}

/**
 * 
 * EXERCISE 4
 *
 * @param {any} value 
 * @param {number} delayInMs 
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function makeDelayPromise(value, delayInMs){
  /* IMPLEMENTED */
  /* Return a promise that resolves with the value after delayInMs */
  return new Promise((resolve) => {
    setTimeout(() => {resolve(value)}, delayInMs)
    })
}

module.exports = {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makeDelayPromise,
};