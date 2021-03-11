const _ = {
  clamp(num, lower, upper) {
    let lowerClampedValue = Math.max(num, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  inRange(num, start, end) {
    if(end == undefined) {
      end = start;
      start = 0;
    }
    if(start > end) {
      let temp = end;
      end = start;
      start = temp;
    }

    let isInRange = false;
    if(start <= num && num < end) {
      isInRange = true;
    } else {
      isInRange = false;
    }

    return isInRange;
  },

  words(string) {
    const words = string.split(' ');
    return words;
  },

  pad(string, length) {
    if(length <= string.length) {
      return string;
    }

    const startPaddingLength = Math.floor((length-string.length) / 2);
    const endPaddingLength = length - string.length - startPaddingLength;
    const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);

    return paddedString;
  },

  has(object, key) {
    const hasValue = object[key];

    if(hasValue != undefined) {
      return true;
    }

    return false;
  },

  invert(object) {
    let invertedObject = {};

    for(const key in object) {
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    }

    return invertedObject;
  },

  findKey(object, predicate) {
    for(key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);

      if(predicateReturnValue === true) {
        return key;
      }
    }
    return undefined;
  },

  drop(array, n=1) {
    let droppedArray = array.slice(n);
    return droppedArray;
  },

  dropWhile(array, predicate) {
    let dropNumber = array.findIndex((element, index) => {
      return !predicate(element, index, array);
    });
    let droppedArray = this.drop(array, dropNumber);

    return droppedArray;
  },

  chunk(array, size=1) {
    let arrayChunks = [];
    
    for(let i = 0; i < array.length; i+=size) {
      let arrayChunk = array.slice(i, i+size);
      arrayChunks.push(arrayChunk);
    }

    return arrayChunks;
  }

};

// Do not write or modify code below this line.
module.exports = _;
