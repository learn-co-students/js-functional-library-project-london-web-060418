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
        console.log(newCollection);
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
    // sortBy: function(array, iteratee) {
    //   let newCollection = []
    //   for (let el of array) {
    //     if (!!el){
    //       newCollection.push(el)
    //     }
    //   }
    //   return newCollection
    // },
    uniq: function(array, [isSorted], [iteratee]) {
      let newCollection = []
      for (let el of array) {
        if (el){
          newCollection.push(el)
        }
      }
      return newCollection
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
    }


  }
})()
// {name: "Allegra", location:"London"}
// const bla = fi.each({name: "Allegra", location:"London"}, (x) => {
//    x.toUpperCase()
//  });

// console.log(bla)
