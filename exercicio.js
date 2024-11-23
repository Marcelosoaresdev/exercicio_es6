const alunos = [
    { nome: "Marcelo", nota: 7.5 },
    { nome: "Julio", nota: 5.0 },
    { nome: "Ana", nota: 8.0},
    { nome: "Maria", nota: 4.5},
    { nome: "Luiza", nota: 6.0 },
    { nome: "Gabriela", nota: 2.4}
];

function filtrarAprovados(listaDeAlunos) {
    return listaDeAlunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = filtrarAprovados(alunos)

console.log (aprovados);