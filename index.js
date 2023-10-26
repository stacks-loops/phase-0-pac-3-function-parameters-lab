function introduction(name) {
    // Establish a function called introduction that uses a single parameter, name
   return `Hi, my name is ${name}.`
   // When introduction is called, this is what it will do
}
console.log(introduction(Aki));
// print introduction with Aki as the name

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguageOptional(Aki, Ember.js));
// 3
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`


console.log(introductionWithLanguageOptional(Aki));

}

// 4
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`


console.log(introductionWithLanguageOptional(Aki, React));

}

