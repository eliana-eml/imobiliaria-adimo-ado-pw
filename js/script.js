function openNav() {
    document.getElementById("nav-mobile-lista").style.width = "270px";
}

function closeNav() {
    document.getElementById("nav-mobile-lista").style.width = "0";
}

function alertReserva() {
    alert("Imóvel adicionado à carteira de imóveis!");
}

function alertLoginSucesso() {

    let usuario = document.getElementById("usuario-email").value;
    let senha = document.getElementById("usuario-senha").value;

    if (usuario != "" && senha != "") {
        alert("Login efetuado com sucesso! Seja bem-vindo(a)!");
        window.location.href = "../index.html";

    } else {
        alert("Preencha os campos de usuário e senha!");
    }

}