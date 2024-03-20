let textbox = document.getElementById("textarea");
      textbox.addEventListener("input", function () {
        var text = this.value;
        // console.log(text);
        let char = text.length;
        // console.log(char);
        document.getElementById("char").innerHTML = char;
        // to remove extra space
        text = text.trim();
        let words = text.split(" ");
        // console.log(words);
        document.getElementById("word").innerHTML = words.length;
      });