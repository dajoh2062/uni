
$(function (){

    const student={passord:"passord", studid:"s384075"}
    $.post("/lagreBruker",student)

})

function loggInn(){
    if (brukernavnstatus==="riktig"&&passordstatus==="riktig"){
        const Bruker={studid:$("#brukernavn").val(), passord:$("#passord").val()};
        $.get("/loggInn",Bruker,function (ok){
            if (ok){

                window.location.href="/student.html";
            }
            else {alert("Feil passord eller brukernavn")}
        })

    }
    else{
        alert("Feil format på passord eller brukernavn!")
    }




}
