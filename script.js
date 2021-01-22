function dateProdus() {
    erori = "";

    if (document.produsForm.denumire.value == "") erori = erori + "* Denumire\n";
    if (document.produsForm.producator.value == "") erori = erori + "* Producator\n";

    if (!document.getElementById("alimente").checked && !document.getElementById("bauturi").checked && !document.getElementById("electrocasnice").checked && !document.getElementById("electronice").checked)
        (erori += "*Nu ati selectat categoria!\n");
    if (!document.getElementById("cutie").checked && !document.getElementById("punga").checked && !document.getElementById("sticla").checked && !document.getElementById("fara").checked)
        (erori += "*Nu ati selectat ambalajul!\n");

    p = document.produsForm.pret.value;
    pattern = /^\d+$/;
    rez = pattern.test(p);
    if (document.produsForm.producator.pret == "" || !rez || p <= 0) { erori = erori + "* Pret (trebuie sa fie un numar pozitiv)\n"; }
    if (!erori == "") {
        alert("Urmatoarele campuri nu pot lipsii:\n" + erori);
        return false;
    }
    else {
        alert('Formularul de adaugare este valid.');
    }
}
