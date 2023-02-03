function getInfo(e) {
    e.preventDefault();
    for (i = 0; i < e.target.length; i++) {
      if (e.target[i].name == "gender" || e.target[i].name == "programming") {
        if (e.target[i].checked) {
          document.write(e.target[i].value + "</br>");
          console.log(e.target[i].value);
        }
      } else {
          document.write(e.target[i].value +"</br>")
        console.log(e.target[i].value);
      }
    }
  }