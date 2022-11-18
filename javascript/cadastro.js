function validarCadastro(){
    usuario = document.getElementById("usuario").value;
    senha = document.getElementById("senha").value;
    confirmarSenha = document.getElementById("confirmarSenha").value;

    if (usuario == ""){ //!user.value
        alert("Usuário em branco. Informe um usuário");
        document.getElementById("usuario").focus();        
    } else if (senha == ""){
        alert("Senha em branco. Informe um senha");
        document.getElementById("senha").focus();        
    } else if (confirmarSenha == ""){
        alert("Confirma senha em branco. Informe um senha");
        document.getElementById("confirmarSenha").focus();
    } else if (senha != confirmarSenha){
        alert("Senha e Confirma Senha diferentes. Tente novamente");
        document.getElementById("confirmarSenha").focus();
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
        alert("Esse usuário já existe. Tente outro!!!");
    } else {
        document.getElementsByTagName("form")[0].submit();
    }    
    
}