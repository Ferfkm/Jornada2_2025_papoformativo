function inserirNome(){
   let nomeUsuario = prompt("Qual o seu nome");
   let elemento = document.querySelector("#nome-usuario");
   console.log(elemento);
   elemento.textContent = nomeUsuario;
}

inserirNome();

let linguagens = ["javaScript", "python", "C"];
console.log(linguagens [0])
console.log(linguagens [1])
console.log(linguagens [2])

const item = document.querySelector("#listas");
item.textContent = linguagens[1];

// R8 - OBJETOS

let aluno1 = {
   aluno:"Fernanda",
   idade: 37,
   anoLetivo: "3ª serie",
   MateriasFavoritas: [Filosfia, Arte, História]
}

console.log(aluno1.nome);
console.log(aluno1.MateriasFavoritas[0])

const objeto = document.querySelector("#alunos");
objeto.textContent = aluno1.nome
objeto. textContent = aluno1.idade

let perguntas = [
   {
      pergunta: "Pergunta1"
   }
]