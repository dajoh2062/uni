$(function () {
    hentStudent();
    hentValgteFag();
    hentAndreFag();
});
const studid='s383075';
function fjernFag(id,studid){
    let Fjernetfag= {id:id, studid:studid};
    $.get("/fjernFag", Fjernetfag, function (){
        window.location.href="/student.html";
    });
}
function leggtilFag(id, studid){
    let addetfag ={id:id, studid:studid};
    $.post("/leggtilFag", addetfag, function(){
        window.location.href="/student.html";
    })
}

function hentValgteFag(){

    $.get('/hentValgtefag?studid='+studid,function (fag) {
        let ut = '<table class="table table-striped">' +
            '<tr>' +
            '<td><b>Fagkode</b></td>' +
            '<td><b>Navn</b></td>' +
            '<td><b>Lærer</b></td>' +
            '<td><b>Eksamensdato</b></td>' +'<td></td>'+
            '</tr>';


        for(let fagInfo of fag) {
            ut += '<tr>' +
                '<td>' + fagInfo.id + '</td>' +
                '<td>' + fagInfo.navn + '</td>' +
                '<td>' + fagInfo.ansvar + '</td>' +
                '<td>' + fagInfo.eksamensdato + '</td>' +
                '<td><button onclick="fjernFag(\'' + fagInfo.id + '\',\'' + studid + '\')" class="btn btn-danger" id="fjernfag">Fjern</button></td>'+
                '</tr>';
        }

        ut += '</table>';
        $("#dinefag").html(ut);
    })
}
function hentAndreFag(){

    $.get('/hentAndrefag?studid='+studid,function (fag) {
        let ut = '<table class="table table-striped">' +
            '<tr>' +
            '<td><b>Fagkode</b></td>' +
            '<td><b>Navn</b></td>' +
            '<td><b>Lærer</b></td>' +
            '<td><b>Eksamensdato</b></td>'+'<td></td>'+

            '</tr>';


        for(let fagInfo of fag) {
            ut += '<tr>' +
                '<td>' + fagInfo.id + '</td>' +
                '<td>' + fagInfo.navn + '</td>' +
                '<td>' + fagInfo.ansvar + '</td>' +
                '<td>' + fagInfo.eksamensdato + '</td>' +
                '<td><button onclick="leggtilFag(\'' + fagInfo.id + '\',\'' + studid + '\')" class="btn btn-primary" id="addfag">Legg til</button></td>'+
                '</tr>';
        }

        ut += '</table>';
        $("#andrefag").html(ut);
    })
}


function hentStudent() {

    const url = "/hentEnStudent?studid=" + studid;
    $.get(url, function (student) {
        $("#visStudid").text(student.studid);
        $("#visNavn").text(student.navn);
        $("#visTelefon").text(student.telefon);
        $("#visStudie").text(student.studienavn);
    })
}
let iredigering = false;
$("#rediger").click(function (){
    if (iredigering===true) {
        if (validerStudienavn($("#redigerStudie").val())&&validerTelefon($("#redigerTelefon").val())&&validerNavn($("#redigerNavn").val())){
            const Student ={
                studid:$("#visStudid").text(),
                navn:$("#redigerNavn").val(),
                telefon:$("#redigerTelefon").val(),
                studienavn:$("#redigerStudie").val()
            }
            $.post("/endreStudent",Student,function (){
                hentStudent()
            })

            ut = "<tr><td><b>Studentid: </b></td></tr>\n" +
                "                <tr><td id=\"visStudid\"></td></tr>\n" +
                "                <tr><td><b>Navn: </b></td></tr>\n" +
                "                <tr><td id=\"visNavn\"></td></tr>\n" +
                "                <tr><td><b>Telefon: </b></td></tr>\n" +
                "                <tr><td id =\"visTelefon\"></td></tr>\n" +
                "                <tr><td><b>Studie: </b></td></tr>\n" +
                "                <tr><td id = \"visStudie\"></td></tr>";
            $("#studentinfo").html(ut);
            $("#rediger").text("Rediger");



            iredigering = false;
        }
        else {
            alert("Feil i input")
        }


    } else if (iredigering === false) {
        ut = "<tr><td><b>Studentid: </b></td></tr>" +
            "<tr><td id='visStudid'></td></tr>" +
            "<tr><td><label for='redigerNavn'>Navn: </label></td></tr>" +
            "<tr><td><input onchange='validerNavn(this.value)' type='text' id='redigerNavn'></td><td><span class=\"text-danger\" id='feilNavn'></span></td></tr>" +
            "<tr><td><label for='redigerTelefon'>Telefon: </label></td></tr>" +
            "<tr><td><input onchange='validerTelefon(this.value)' type='text' id='redigerTelefon'></td><td><span class=\"text-danger\" id='feilTelefon'></span></td></tr>" +
            "<tr><td><label for='redigerStudie'>Studie: </label></td></tr>" +
            "<tr><td><input onchange='validerStudienavn(this.value)' type='text' id='redigerStudie'></td><td><span class=\"text-danger\" id='feilStudienavn'></span></td></tr>";
        const studid = "s383075";
        const url = "/hentEnStudent?studid=" + studid;
        $.get(url, function(student) {
            $("#visStudid").text(student.studid);
            $("#redigerNavn").val(student.navn);
            $("#redigerTelefon").val(student.telefon);
            $("#redigerStudie").val(student.studienavn);
        })
        $("#studentinfo").html(ut);
        $("#rediger").text("Lagre");
        iredigering=true;
    }
});

function validerNavn(navn){

    const regex = /^[a-zA-Z]+(?: [a-zA-Z]+)?$/;
    const ok = regex.test(navn)
    if(!ok){
        $("#feilNavn").text("Ugyldig Navn");
        return false

    }
    else{
        $("#feilNavn").text("");
    }   return true
}
function validerTelefon(telefon){

    const regex = /^\d{8}$/;
    const ok = regex.test(telefon)
    if(!ok){
        $("#feilTelefon").text("Ugyldig telefonnummer");
        return false

    }
    else{
        $("#feilTelefon").text("");
    }   return true
}
function validerStudienavn(studienavn){

    const regex = /^[a-zA-Z]+(?: [a-zA-Z]+)?$/;
    const ok = regex.test(studienavn)
    if(!ok){
        $("#feilStudienavn").text("Ugyldig studienavn");
        return false

    }
    else{
        $("#feilStudienavn").text("");
    }   return true
}