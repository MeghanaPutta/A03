
var x=$("#values").click(function(){
    var ageEntered = new Date($('#birth_date').val());
    getAge(ageEntered)
});

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    // console.log("this year is "+ today.getFullYear() +" birth year is "+ birthDate.getFullYear())
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if((age<0)||(isNaN(age))||(
        birthDate.getMonth()>12||birthDate.getMonth()<1)||
    (birthDate.getMonth()>31||birthDate.getMonth()<1)){
        age="invalid"
    }
    if($("#age"))
    {
     $("#age").html("Your age is "+ age);
    }
    return age;
}

