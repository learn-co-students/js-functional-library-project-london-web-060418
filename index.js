fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {

      if ( typeof collection === 'object' ) {

        let array = [Object.keys(collection)]
        array = array[0]

        for (let i = 0; i < array.length; i++) {
          element = array[i]
          iteratee(collection[element])
        }
      }
      return collection
    },

    map: function(collection, iteratee) {

      if ( typeof collection === 'object' ) {

        let array = [Object.keys(collection)]
        array = array[0]

        newArr = []
        for (let i = 0; i < array.length; i++) {
          element = array[i]
          newArr.push(iteratee(collection[element]))
        }
      }
      return newArr
    },

    reduce: function(collection, iteratee, acc =0) {

      //Iteration
      // collection = [1, 2, 3, 4]
      result = acc
      for (let i = 0; i < collection.length; i++){
      result = iteratee(result, collection[i], collection)
      }
      return result
    },

    find: function(collection, predicate) {

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])===true){
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate) {
      let newArr = []

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])===true){
        newArr.push(collection[i])
        }
      }
      return newArr
    },


    size: function(collection) {
      let i = 0;

      if ( typeof collection === 'object' ) {
        let array = [Object.keys(collection)]
        array = array[0]
        // console.log(array);
        while (array[i] !== undefined) {
          i++
        }
      } return i
    },

    first: function(collection, n=0) {

      if (n === 0){
        return collection[0]
      } else {
        newArr=[]
        for (let i = 0; i < n ; i++) {
          newArr.push(collection[i])
        }
      return newArr
      }
    },

    last: function(collection, n=0) {

      if (n === 0){
        return collection[collection.length-1]
      } else {
        newArr=[]
        for (let i = 0; i < n ; i++) {
          x = collection.length - i
          newArr.unshift(collection[x-1])
        }
      }
      return newArr
    },

    compact: function(array) {

       newArr = []
       for (let i = 0; i < array.length; i++) {
         if (!!array[i] === true){
           newArr.push(array[i])
         }
       }
       return newArr
     },

     flatten: function(array, shallow) {

        let newArr = []

        for (let i=0; i < array.length; i++) {

          if (shallow == true){
            newArr  = newArr.concat(array[i])
          } else if (Array.isArray(array[i])){
            newArr  = newArr.concat(fi.flatten(array[i]));
          } else {
            newArr.push(array[i]);
          }
        }
        return newArr;
      },


       uniq: function(array, isSorted, callback) {
         let newArr = []
         let check = []
         for (let i = 0; i < array.length; i++){
           if (callback !== undefined) {
             if (!check.includes(callback(array[i]))){
               check.push(callback(array[i]))
               newArr.push(array[i])
             }
           } else {
             if (!newArr.includes(array[i])){
               newArr.push(array[i])
             }
           }
         }
         return newArr

         },

         keys: function(object) {
           let array = [Object.keys(object)]
           array = array[0]
           return array
         },

         values: function(object) {
           let array = [Object.values(object)]
           array = array[0]
           return array
         },

         functions: function(object) {
           const values = fi.values(object);
           let newArr = []
           for (var i = 0; i < values.length; i++) {
             if (typeof values[i] === "function")
              newArr.push(object[i])
           }
           return newArr
         },

         sortBy: function (data, callback) {
           if (typeof(callback) === "function") {

             let newArray = [];

             fi.each(data, function(element) {
               newArray.push([element, callback(element)]);
             });

             newArray.sort(function (a, b) {return a[1] - b[1]});

            let result = fi.map(newArray, function(element) {
              return element[0]
            })
            return result;

        } else if (typeof(callback) === "string") {
            let newArray = data.slice(0);

            let result = newArray.sort(function(a, b) {
              let x = a[callback].toLowerCase()
              let y = b[callback].toLowerCase()
              return x < y ? -1 : x > y ? 1 : 0;
            })
            return result;
        }
      },

  }
})()

fi.libraryMethod()
