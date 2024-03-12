// submitted

function anagram(str1, str2) {
  let analysisDataStr1 = {};
  let analysisDataStr2 = {};

  if (str1.length != str2.length) return false;
  analysisDataStr1 = createAnalysisData(str1, analysisDataStr1);
  analysisDataStr2 = createAnalysisData(str2, analysisDataStr2);

  let comparission = compareTwoObjects(analysisDataStr1, analysisDataStr2);

  return comparission;
}

function createAnalysisData(str, obj) {
  for (let elem of str) {
    if (obj[elem]) {
      obj[elem] += 1;
    } else {
      obj[elem] = 1;
    }
  }
  return obj;
}

function compareTwoObjects(obj1, obj2) {
  let keys = Object.keys(obj1);

  for (let key of keys) {
    obj1[key];
    console.log(obj1[key], obj2[key], key);
    if (obj1[key] != obj2[key]) {
      return false;
    }
  }

  return true;
}

let str1 = "anagarm";

let str2 = "agranam";

console.log(anagram(str1, str2));
