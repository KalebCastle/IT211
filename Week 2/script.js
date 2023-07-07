//HW2 Pig Latin, Kaleb Castle (I did use ChatGPT to help we understand some concepts so not all code is my orginal ideas but it was all typed by me), worked on from 7/5/2023 - 7/7/2023
// Function to translate text to Pig Latin
function translateToPigLatin() {
  var inputText = document.getElementById("inputText").value; // Get input text from textarea

  // Check if input text is empty or contains only single-letter words
  if (inputText.trim() === '' || /^[a-z]\b/i.test(inputText)) {
    document.getElementById("errorMessage").textContent = "Please enter valid text to translate.";
    document.getElementById("outputText").textContent = ""; // Clear any previously translated text
    return;
  }

  document.getElementById("errorMessage").textContent = ""; // Clear error message

  var words = inputText.split(" "); // Split input into individual words
  var translatedText = ""; // Variable to store translated text

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var pigLatinWord = "";

    if (/^[aeiou]/i.test(word)) {
      pigLatinWord = word + "way"; // If word starts with a vowel, add "way" at the end
    } else {
      var match = word.match(/^([^aeiou]+)(.*)$/i);
      if (match) {
        pigLatinWord = match[2] + match[1] + "ay"; // If word starts with a consonant, move consonants to the end and add "ay"
      } else {
        pigLatinWord = word; // If word doesn't match any pattern, keep it as it is
      }
    }

    translatedText += pigLatinWord + " "; // Append translated word to the translated text
  }

  document.getElementById("outputText").textContent = translatedText.trim(); // Display translated text
}

// Add event listener to translate button
document.getElementById("translateBtn").addEventListener("click", translateToPigLatin);