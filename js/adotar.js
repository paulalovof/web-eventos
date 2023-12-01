let formulario = document.querySelector('form');

const validarDados = (nome, telefone, email, renda, opcao, intencao) => {
  let control = true;

  if(nome.value.trim() == ""){
    nome.style.backgroundColor = "red";
    control = false;
  }

  if(telefone.value.trim() == ""){
    telefone.style.backgroundColor = "red";
    control = false;
  }

  if(email.value.trim() == ""){
    email.style.backgroundColor = "red";
    control = false;
  }

  if(renda == null){
    let erro = document.getElementById('#erro-renda');
    erro.classList.add('msgm-erro--active');
  }

  return control;
}

formulario.addEventListener("submit", (event) => {

  let nome = document.querySelector('#nome');
  let telefone = document.querySelector('#telefone');
  let email = document.querySelector('#email');
  let renda = document.querySelector('input[name="renda"]:checked');
  let residencia = document.querySelector('#residencia');
  let opcao = residencia.options[residencia.selectedIndex];
  let intencao = document.querySelector('#intencao');

  if(validarDados(nome, telefone, email, renda, opcao, intencao)){
    let adotante = {
      nome: nome.value.trim(),
      telefone: telefone.value.trim(),
      email: email.value.trim(),
      renda: renda.value,
      residencia: opcao.value,
      intencao: intencao.value.trim(),
      idAnimal: sessionStorage.getItem("idAnimal"),
    };

    let adotanteJson = JSON.stringify(adotante);
    console.log(adotanteJson);

    let adotante2 = JSON.parse(adotanteJson);
    console.log(adotante2);

    
  }else{
    event.preventDefault();
  }

});