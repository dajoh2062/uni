
$("#brukernavn").change(function validerbrukernavn(){
        const brukernavn=$("#brukernavn").val();
        const regexb = /^s[0-9]{5}$/;

    const ok = regexb.test(brukernavn)
        if(!ok){
            $("#feilbruker").text("Ugyldig navn");
            return false

        }
        else{
            $("#feilbruker").text("");
        }   return true

    });
$("#passord").change(function validerpassord(){
    const passord=$("#passord").val();
    const regexp = /^[a-zA-Z\d]{5,20}$/;
    const ok = regexp.test(passord)
    if(!ok){
        $("#feilpassord").text("Ugyldig passord");
        return false

    }
    else{
        $("#feilpassord").text("");
    }   return true
});