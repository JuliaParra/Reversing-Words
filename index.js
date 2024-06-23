function reversingwords(string) {
    const words = string.trim().split(' ');
    const reversedWords = words.reverse();
    const reversedString = reversedWords.join(' ')
    

    return reversedString;
}



console.log(reversingwords("Hello World")); 
console.log(reversingwords("Hi There."));   
console.log(reversingwords("  Me encanta JavaScript  ")); 
