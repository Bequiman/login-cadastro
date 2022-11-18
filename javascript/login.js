function validarLogin(){
    usuario = document.getElementById("usuario").value;
    senha = document.getElementById("senha").value;
    if (usuario == ""){ //!user.value
        alert("Usuário em branco");
        document.getElementById("usuario").focus();        
    } else if (senha == ""){
        alert("Senha em branco");
        document.getElementById("senha").focus();        
    } else {        
        readJSON(usuario, senha); // nome.value
    }
}

function readJSON(usuario, senha) { 
    file = "json/users.json";    
    fetch(file)
        .then(response => response.json())
        .then(content => checkUser(content, usuario, senha))
        .catch(err => console.log("erro na leitura do JSON"));
}

function checkUser(content, usuario, senha){
    var achou = false;    
    for(i=0; i<content.usuarios.length; i++){
        if ((content.usuarios[i].usuario == usuario) && (content.usuarios[i].senha == senha)) {
            achou = true;
            break;            
        }
    } 
    if(achou){
        alert("Usuário existente!");
    } else {
        alert("Usuário inexistente");
        document.getElementById("senha").focus();
        document.getElementById("usuario").focus();
    }    
    
}