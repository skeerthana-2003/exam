//a)write a program to illustrate the promise,async/await in nodejs
//Promise Example

let promiseToCleanTheRoom = new Promise(function(resolve, reject) {

    // cleaning the room
    let isClean = false;
  
    if (isClean) {
      resolve('Clean');
    } else {
      reject('not Clean');
    }
  
  });
  
  promiseToCleanTheRoom.then(function(fromResolve) {
    console.log('the room is' + fromResolve);
  }).catch(function(fromReject){
    console.log('the room is' + fromReject);
  });
  
  
  //Async/Await Example
  
  async function cleanRoom() {
    let isClean = false;
  
    if(isClean) {
      return 'Clean';
    } else {
      throw new Error('not Clean');
    }
  }
  
  cleanRoom().then(function(result) {
    console.log('the room is' + result);
  }).catch(function(err){
    console.log('the room is' + err);
  });


