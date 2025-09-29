/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  if (Array.isArray(caze)) {
    let outcome = input;
    caze.forEach((type) => {
      switch (type) {
        case "camel":
          const arrayInputCamel = outcome.split(" ");
          const arrayCamel = arrayInputCamel.map((element) => {
            if (arrayInputCamel.indexOf(element) === 0) {
              return element;
            }
            return `${element[0].toUpperCase()}${element.slice(1)}`;
          });
          const camelCase = arrayCamel.join("");
          console.log("eee", camelCase);
          outcome = camelCase;
          break;
        case "pascal":
          const arrayInputPascal = outcome.split(" ");
          const arrayPascal = arrayInputPascal.map((element) => {
            return `${element[0].toUpperCase()}${element.slice(1)}`;
          });
          const pascalCase = arrayPascal.join("");
          outcome = pascalCase;
          break;
        case "snake":
          const arrayInputSnake = outcome.split(" ");
          const snakeCase = arrayInputSnake.join("_");
          outcome = snakeCase;
          break;
        case "kebab":
          const arrayInputKebab = outcome.split(" ");
          const kebabCase = arrayInputKebab.join("-");
          outcome = kebabCase;
          break;
        case "title":
          const arrayInputTitle = outcome.split(" ");
          const arrayTitle = arrayInputTitle.map((element) => {
            return `${element[0].toUpperCase()}${element.slice(1)}`;
          });
          const titleCase = arrayTitle.join(" ");
          outcome = titleCase;
          break;
        case "vowel":
          const arrayInputVowel = outcome.split(" ");
          const arrayVowel = arrayInputVowel.map((element) => {
            let result = "";
            for (let i = 0; i < element.length; i++) {
              if (
                element[i] === "a" ||
                element[i] === "i" ||
                element[i] === "u" ||
                element[i] === "e" ||
                element[i] === "o"
              ) {
                result = `${result}${element[i].toUpperCase()}`;
              } else {
                result = `${result}${element[i].toLowerCase()}`;
              }
            }
            return result;
          });
          const vowelCase = arrayVowel.join(" ");
          outcome = vowelCase;
          break;
        case "consonant":
          const arrayInputConsonant = outcome.split(" ");
          const arrayConsonant = arrayInputConsonant.map((element) => {
            let result = "";
            for (let i = 0; i < element.length; i++) {
              if (
                element[i] === "a" ||
                element[i] === "i" ||
                element[i] === "u" ||
                element[i] === "e" ||
                element[i] === "o"
              ) {
                result = `${result}${element[i].toLowerCase()}`;
              } else {
                result = `${result}${element[i].toUpperCase()}`;
              }
            }
            return result;
          });
          const consonantCase = arrayConsonant.join(" ");
          outcome = consonantCase;
          break;
        case "upper":
          const arrayInputUpper = outcome.split(" ");
          const arrayUpper = arrayInputUpper.map((element) => {
            return element.toUpperCase();
          });
          const upperCase = arrayUpper.join(" ");
          outcome = upperCase;
          break;
        case "lower":
          const arrayInputLower = outcome.split(" ");
          const arrayLower = arrayInputLower.map((element) => {
            return element.toLowerCase();
          });
          const lowerCase = arrayLower.join(" ");
          outcome = lowerCase;
          break;
      }
    });
    return outcome;
  } else {
    switch (caze) {
      case "camel":
        const arrayInputCamel = input.split(" ");
        const arrayCamel = arrayInputCamel.map((element) => {
          if (arrayInputCamel.indexOf(element) === 0) {
            return element;
          }
          return `${element[0].toUpperCase()}${element.slice(1)}`;
        });
        const camelCase = arrayCamel.join("");
        return camelCase;
      case "pascal":
        const arrayInputPascal = input.split(" ");
        const arrayPascal = arrayInputPascal.map((element) => {
          return `${element[0].toUpperCase()}${element.slice(1)}`;
        });
        const pascalCase = arrayPascal.join("");
        return pascalCase;
      case "snake":
        const arrayInputSnake = input.split(" ");
        const arraySnake = arrayInputSnake.map((element) => {
          return element.toLowerCase();
        });
        const snakeCase = arraySnake.join("_");
        return snakeCase;
      case "kebab":
        const arrayInputKebab = input.split(" ");
        const arrayKebab = arrayInputKebab.map((element) => {
          return element.toLowerCase();
        });
        const kebabCase = arrayKebab.join("-");
        return kebabCase;
      case "title":
        const arrayInputTitle = input.split(" ");
        const arrayTitle = arrayInputTitle.map((element) => {
          return `${element[0].toUpperCase()}${element.slice(1)}`;
        });
        const titleCase = arrayTitle.join(" ");
        return titleCase;
      case "vowel":
        const arrayInputVowel = input.split(" ");
        const arrayVowel = arrayInputVowel.map((element) => {
          let result = "";
          for (let i = 0; i < element.length; i++) {
            if (
              element[i] === "a" ||
              element[i] === "i" ||
              element[i] === "u" ||
              element[i] === "e" ||
              element[i] === "o"
            ) {
              result = `${result}${element[i].toUpperCase()}`;
            } else {
              result = `${result}${element[i].toLowerCase()}`;
            }
          }
          return result;
        });
        const vowelCase = arrayVowel.join(" ");
        return vowelCase;
      case "consonant":
        const arrayInputConsonant = input.split(" ");
        const arrayConsonant = arrayInputConsonant.map((element) => {
          let result = "";
          for (let i = 0; i < element.length; i++) {
            if (
              element[i] === "a" ||
              element[i] === "i" ||
              element[i] === "u" ||
              element[i] === "e" ||
              element[i] === "o"
            ) {
              result = `${result}${element[i].toLowerCase()}`;
            } else {
              result = `${result}${element[i].toUpperCase()}`;
            }
          }
          return result;
        });
        const consonantCase = arrayConsonant.join(" ");
        return consonantCase;
      case "upper":
        const arrayInputUpper = input.split(" ");
        const arrayUpper = arrayInputUpper.map((element) => {
          return element.toUpperCase();
        });
        const upperCase = arrayUpper.join(" ");
        return upperCase;
      case "lower":
        const arrayInputLower = input.split(" ");
        const arrayLower = arrayInputLower.map((element) => {
          return element.toLowerCase();
        });
        const lowerCase = arrayLower.join(" ");
        return lowerCase;
    }
  }
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
