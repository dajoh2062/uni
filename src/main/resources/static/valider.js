


let brukernavnstatus = "feil";
let passordstatus="feil";
let regstudidstatus="feil";
let  regnavnstatus="feil";
let regtelefonstatus="feil";
let regstudienavnstatus="feil";
$("#brukernavn").change(function validerbrukernavn(){
        const brukernavn=$("#brukernavn").val();
        const regexb = /^s[0-9]{6}$/;

    const ok = regexb.test(brukernavn)
        if(!ok){
            $("#feilbruker").text("Ugyldig navn");
            brukernavnstatus="feil";
            return false

        }
        else{
            $("#feilbruker").text("");
            brukernavnstatus="riktig";
        }   return true

    });
$("#passord").change(function validerpassord(){
    const passord=$("#passord").val();
    const regexp = /^[a-zA-Z\d]{5,20}$/;
    const ok = regexp.test(passord)
    if(!ok){
        $("#feilpassord").text("Ugyldig passord");
        passordstatus="feil";
        return false

    }
    else{
        $("#feilpassord").text("");
        passordstatus="riktig";
    }   return true
});



$("#regstudid").change(function validerregstudid(){
    const studid=$("#regstudid").val();
    const regexb = /^s[0-9]{6}$/;

    const ok = regexb.test(studid)
    if(!ok){
        $("#feilregstudid").text("Ugyldig studentid, skriv en s fulgte av 6 tall");
        regstudidstatus="feil";
        return false

    }
    else{
        $("#feilregstudid").text("");
        regstudidstatus="riktig";
    }   return true

});
$("#regnavn").change(function validerNavn(){
    const navn = $("#regnavn").val();
    const regexNavn = /^[a-zA-Z\s]*$/;

    const valid = regexNavn.test(navn);
    if(!valid){
        $("#feilregnavn").text("Ugyldig navn");
        regnavnstatus="feil";
        return false;
    }
    else{
        $("#feilregnavn").text("");
        regnavnstatus="riktig";
        return true;
    }
});
$("#regtelefon").change(function validerTelefon(){
    const telefon = $("#regtelefon").val();
    const regexTelefon = /^[0-9]{8}$/;

    const valid = regexTelefon.test(telefon);
    if(!valid){
        $("#feilregtelefon").text("Ugyldig telefonnummer");
        regtelefonstatus="feil";
        return false;
    }
    else{
        $("#feilregtelefon").text("");
        regtelefonstatus="riktig";
        return true;
    }
});
$("#regstudienavn").change(function validerStudienavn(){
    const studienavn = $("#regstudienavn").val();

    if(studienavn.length === 0){
        $("#feilregstudienavn").text("Studienavn må fylles ut");
        regstudienavnstatus="feil";
        return false;
    }
    else{
        $("#feilregstudienavn").text("");
        regstudienavnstatus="riktig";
        return true;
    }
});
$("#regpassord").change(function validerregPassord(){
    const passord = $("#regpassord").val();

    const regexp = /^[a-zA-Z\d]{5,20}$/;
    const ok = regexp.test(passord)
    if(!ok){
        $("#feilregpassord").text("Ugyldig passord");
        regpassordstatus="feil";
        return false

    }
    else{
        $("#feilregpassord").text("");
        regpassordstatus="riktig";
    }   return true
});



