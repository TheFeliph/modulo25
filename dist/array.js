"use strict";

var alunos = [{
  nome: "Felipe",
  materia: "Ingles",
  nota: 10
}, {
  nome: "Leticia",
  materia: "Ingles",
  nota: 5
}, {
  nome: "José",
  materia: "Ingles",
  nota: 6
}, {
  nome: "Ju",
  materia: "Ingles",
  nota: 4
}, {
  nome: "Juquinha",
  materia: "Ingles",
  nota: 8
}, {
  nome: "Pitoco",
  materia: "Ingles",
  nota: 9
}, {
  nome: "Severina",
  materia: "Ingles",
  nota: 3
}, {
  nome: "Laercio",
  materia: "Ingles",
  nota: 8
}];

//Aprovados
function filtrarNotasDeAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosNotasAltas = filtrarNotasDeAprovados(alunos);
console.log("Alunos Aprovados", alunosNotasAltas);

//Reprovados
function filtrarNotasDeReprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota < 6;
  });
}
var alunosNotasBaixa = filtrarNotasDeReprovados(alunos);
console.log("Alunos Reprovados", alunosNotasBaixa);