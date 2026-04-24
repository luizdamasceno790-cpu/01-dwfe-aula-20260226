const email = "luizdamasceno790@gmail.com";
const senha  = "1234";

function verificarCredencias(){
    cont emailInformado = document.getElementById("email").value;
    cont senhaInformado = document.getElementById("senha").value;

    if (emailInformado === email){
        alert("E-mail informado corretamente!");
        if (senhaInformada === senha){
            alert("Senha informada corretamente!");
        }
        else
            alert("Senha informada incorretamente!");
    }else 
        alert ("E-mail informado incorretamente!");
}