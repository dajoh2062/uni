function loggInn(){
    const url="/loggInn?studid="+$("#brukernavn").val()+"&&passord="+$("#passord").val();
    $.get(url,function (ok){
        if (ok){

            window.location.href="/student.html";
        }
        else {alert("Feil passord eller brukernavn")}
    })
}