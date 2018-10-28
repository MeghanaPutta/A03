function ageCalculate() {
    var bDate = document.getElementById('birth_date').value;

    var d = new Date(bDate);
    var mDate = bDate.toString();

    var y = parseInt(mdate.substring(0, 4), 10);

    var m = parseInt(mdate.substring(5, 7), 10);

    var d = parseInt(mdate.substring(8, 10), 10);
    var now = new Date();

    var bday = new Date(y, m - 1, d);
    var differenceInMilisecond = now.valueOf() - bday.valueOf();
    var newage = Math.floor(differenceInMilisecond / 31536000000);

    document.getElementById("age").innerHTML = newage + " years ";
    if ((today.getMonth() == bday.getMonth()) && (now.getDate() == bday.getDate())) {
        alert("Happiest Birthday...!!!");
    }
    
}