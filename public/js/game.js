function ageCalculate(y,m,d) {
    var bDate = document.getElementById('birth_date').value;

    var d = new Date(bDate);
    var d1 = bDate.toString();

    var y = parseInt(d1.substring(0, 4), 10);

    var m = parseInt(d1.substring(5, 7), 10);

    var d = parseInt(d1.substring(8, 10), 10);
    var now = new Date();

    var bday = new Date(y, m - 1, d);
    var diff = now.valueOf() - bday.valueOf();
    var newage = Math.floor(diff / 31536000000);

    document.getElementById("age").innerHTML = newage + " years ";
    
}