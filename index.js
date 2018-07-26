fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      let newCollection;
      if (Array.isArray(collection)){
         newCollection = collection.slice()
      }
      else{
         newCollection = Object.values(collection)
      }

      for (let i = 0; i < newCollection.length; i++) {

        iteratee(newCollection[i])
      };
      return collection;
    },

    map: function(collection, iteratee) {
      let newCollection;
      if (Array.isArray(collection)){
         newCollection = [];
         for (let el of collection) {
           newCollection.push(iteratee(el))
         }
         return newCollection
      }
      else{
         newCollection = []
         for (let el in collection){
           newCollection.push(iteratee(collection[el]))
         }
         return newCollection
      }
    },
    reduce: function(collection, iteratee, acc) {
      let current = acc;
      for(let el of collection) {
        current = iteratee(current, el)
      }
      return current
    },

    find: function(collection, predicate) {
      let match;
      for(let el of collection) {
        //console.log(el,predicate(el));
        if (predicate(el)){
          return el;
        }
      }
    },
    filter: function(collection, predicate) {
      newCollection = []
      for(let el of collection) {
        if (predicate(el)){
          newCollection.push(el);
        }
      }
      return newCollection;
    },
    size: function(collection, predicate) {
      if (Array.isArray(collection)){
         return collection.length
      }
      else{
         return Object.keys(collection).length
      }
    },
    first: function(array, n) {
      if (n){
        let newCollection = []
        for (var i = 0; i < n; i++) {
          newCollection.push(array[i])
        }
        return newCollection
      }
      else{
         return array[0]
      }
    },
    last: function(array, n) {
      if (n){
        let newCollection = array.slice(array.length-n)
        return newCollection
      }
      else{
        return array[array.length -1 ]
      }
    },
    compact: function(array) {
      let newCollection = []
      for (let el of array) {
        if (!!el){
          newCollection.push(el)
        }
      }
      return newCollection
    },
    sortBy: function(array, iteratee) {
      function compare(a, b) {
        return iteratee(a) - iteratee(b);
      }
      newCollection = array.slice()
      newCollection = newCollection.sort(compare)
      return newCollection
    },
    uniq: function(array, isSorted, iteratee) {
      let newCollection = [];

      if (isSorted){
        const fastUniq = (arr) => {
          for (var i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i + 1]){
              arr.slice(array[i + 1],1)
            }
          }
        }
        const includesUniq = (arr) => {

        }
        newCollection.length > 0 ? newCollection : newCollection = array.slice()
        if (iteratee){
          mapped = []
          for (let el of array) {
            if (!mapped.includes(el)){
                mapped.push(iteratee(el))
            }
          }
          mapped = fastUniq(mapped)
          return array.slice(mapped.length)
        }

        else{
          newCollection = fastUniq(newCollection)
          return newCollection
        }
      }
      else{
        if (iteratee){
          mapped = []
          for (let el of array) {
            if (!mapped.includes(el)){
                mapped.push(el)
            }
          }
          for (let el of array) {
            newCollection.push(iteratee(el))
          }
          let last = [];
          for (let el of newCollection) {
            if (!last.includes(el)){
                last.push(el)
            }
          }
          return mapped.slice(0, last.length)
        }

        if (newCollection.length === 0){
          for (let el of array) {
            if (!newCollection.includes(el)){
                newCollection.push(el)
            }
          }
          return newCollection
        }
      }
    },
    flatten: function(array, shallow) {
      newArr = []
      nested = true
      const lookForNest = (arr) => {
        if (!nested) {
          return newArr
        }
        for (el of arr) {
          if (Array.isArray(el)){
            return lookForNest(el)
          }
          else{
            newArr.push(el)
          }
        }
        return newArr
      }

      if(shallow){
        for (el of array) {
          if (Array.isArray(el)){
            for (x of el) {
              newArr.push(x)
            }
          }
          else{
            newArr.push(el)
          }
        }
        return newArr
      }
      else {
        lookForNest(array)
      }
    },

    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    },
    functions: function(object) {
      var newCollection = [];
        for(let item in object) {
          if(typeof object[item] === "function") {
            newCollection.push(item)
          }
        }
    return newCollection.sort();
  },
  jglFlatten: function(array, shallow) {
    let check = true
    return function grabNumber(array, newArray = []){
      for(let el of array) {
        if(Array.isArray(el)) {
          if(shallow && check) {
            check = false;
            grabNumber(el, newArray);
            check = true;
          } else if(shallow && !check) {
            newArray.push(el);
          } else {
            grabNumber(el, newArray);
          }
        } else {
          newArray.push(el);
        }
      }
      return newArray
    }(array)
  }
  }
})()
