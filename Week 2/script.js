function translateToPigLatin() {
    var inputText = document.getElementById("inputText").value;
    var words = inputText.split(" ");
    var translatedText = "";
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var pigLatinWord = "";
  
      if (/^[aeiou]/i.test(word)) {
        pigLatinWord = word + "way";
      } else {
        var match = word.match(/^([^aeiou]+)(.*)$/i);
        if (match) {
          pigLatinWord = match[2] + match[1] + "ay";
        } else {
          pigLatinWord = word;
        }
      }
  
      translatedText += pigLatinWord + " ";
    }
  
    document.getElementById("outputText").innerHTML = translatedText.trim();
  }
  
  document.getElementById("translateBtn").addEventListener("click", translateToPigLatin);