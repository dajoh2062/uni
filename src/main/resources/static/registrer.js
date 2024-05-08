$("#registrerstudent").click(function () {
    if(regstudienavnstatus==="riktig"&&regtelefonstatus==="riktig"&&regnavnstatus==="riktig"&&regpassordstatus==="riktig"&&regstudidstatus==="riktig"){
        const student = {studid:$("#regstudid").val(), navn:$("#regnavn").val(),telefon:$("#regtelefon").val(), studienavn:$("#regstudienavn").val()}
        const bruker = {passord:$("#regpassord").val(),studid:$("#regstudid").val()}

        $.post("/lagrestudent", student)
        $.post("/lagreBruker", bruker)

        window.location.href="/"
    }
    else {
        alert("En eller flere felter er feil")
    }
})