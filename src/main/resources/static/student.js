$(function () {
    hentStudent();
    hentValgteFag();
});


function hentValgteFag(){
    const studid='s383075';
    $.get('/hentValgtefag?studid='+studid,function (fag) {
        let ut = '<table class="table table-striped">' +
            '<tr>' +
            '<td><b>Fagkode</b></td>' +
            '<td><b>Navn</b></td>' +
            '<td><b>Lærer</b></td>' +
            '<td><b>Eksamensdato</b></td>' +
            '</tr>';


        for(let fagInfo of fag) {
            ut += '<tr>' +
                '<td>' + fagInfo.id + '</td>' +
                '<td>' + fagInfo.navn + '</td>' +
                '<td>' + fagInfo.ansvar + '</td>' +
                '<td>' + fagInfo.eksamensdato + '</td>' +
                '</tr>';
        }

        ut += '</table>';
        $("#dinefag").html(ut);
    })
}
function hentValgteFag(){
    const studid='s383075';
    $.get('/hentValgtefag?studid='+studid,function (fag) {
        let ut = '<table class="table table-striped">' +
            '<tr>' +
            '<td><b>Fagkode</b></td>' +
            '<td><b>Navn</b></td>' +
            '<td><b>Lærer</b></td>' +
            '<td><b>Eksamensdato</b></td>' +
            '</tr>';


        for(let fagInfo of fag) {
            ut += '<tr>' +
                '<td>' + fagInfo.id + '</td>' +
                '<td>' + fagInfo.navn + '</td>' +
                '<td>' + fagInfo.ansvar + '</td>' +
                '<td>' + fagInfo.eksamensdato + '</td>' +
                '</tr>';
        }

        ut += '</table>';
        $("#dinefag").html(ut);
    })
}


function hentStudent() {
    const studid = "s383075";
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

    } else if (iredigering === false) {
        ut = "<tr><td><b>Studentid: </b></td></tr>" +
            "<tr><td id='visStudid'></td></tr>" +
            "<tr><td><label for='redigerNavn'>Navn: </label></td></tr>" +
            "<tr><td><input type='text' id='redigerNavn'></td></tr>" +
            "<tr><td><label for='redigerTelefon'>Telefon: </label></td></tr>" +
            "<tr><td><input type='text' id='redigerTelefon'></td></tr>" +
            "<tr><td><label for='redigerStudie'>Studie: </label></td></tr>" +
            "<tr><td><input type='text' id='redigerStudie'></td></tr>";
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

