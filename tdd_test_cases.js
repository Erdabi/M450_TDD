function formatCurrency(number) {
  numberAsCurrency = number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return numberAsCurrency;
}
function transformArrayToObject(arr) {
    const obj = Object.fromEntries(arr);
    return obj
}
function capitalizeFirstLetter(str) {
    const capitalFirstLetter = str.charAt().toUpperCase() + str.split("").splice(1).join("");
    return capitalFirstLetter
}

function convertToCamelCase(str) {
    let lowCaseString = str.toLowerCase();
    let seperate = lowCaseString.split(" ")
    return  seperate.reduce((emptyStr, currentStr) => emptyStr
        + (currentStr.charAt(0).toUpperCase() + currentStr.slice(1)));
}

console.log(convertToCamelCase("hello world"))


module.exports = {formatCurrency, transformArrayToObject, capitalizeFirstLetter};