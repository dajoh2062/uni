
$(function (){
    const student={passord:"passord", studid:"s384075"}
    $.post("/lagreBruker",student)

})
function loggInn(){
    const student={studid:$("#brukernavn").val(), passord:$("#passord").val()};
    $.get(student,function (ok){
        if (ok){

            window.location.href="/student.html";
        }
        else {alert("Feil passord eller brukernavn")}
    })
}
