function dijeljenje(){
    var prvi = parseFloat(document.getElementById("prviBroj").value);
    var drugi = parseFloat(document.getElementById("drugiBroj").value);
    if(drugi == 0){
        alert("Ne moze!");
        document.getElementById("rezultat").value = "";
    }
    else{
        var rezultat = prvi / drugi;
        document.getElementById("rezultat").value = rezultat;
    } 
}