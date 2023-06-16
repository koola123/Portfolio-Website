function getColor() {
    let farben = document.getElementsByName("farbe");
    let htmlText = "Farben zur Auswahl: " + farben.length + "<br>Sie haben gewählt : ";
    if (farben[0].checked) {
        htmlText += "Rot";
    } else if (farben[1].checked) {
            htmlText += "Blau";
        } else {
            htmlText = "Keine";
        }
    document.querySelector(".output").innerHTML = htmlText;
    } 