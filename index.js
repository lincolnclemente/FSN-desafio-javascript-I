// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


// implementação
function adicionarAluno(nome){

    let notas = []
    let cursos = []
    let faltas = 0
    alunosDaEscola.push({nome:nome, notas:notas, cursos:cursos, faltas:faltas})
    console.log("Aluno cadastrado com sucesso!")
}

function listarAlunos(){

    alunosDaEscola.forEach((aluno)=>{
        console.log(aluno.nome)
    })

}

function buscarAluno(nome){

    for (aluno of alunosDaEscola){
        if(aluno["nome"]==nome){
            console.log("Aluno encontrado")
            return aluno
        }
    }
        console.log("Aluno não encontrado")
        return null
}

function matricularAluno(aluno, curso){

    hoje = new Date()

    let alunoAtual = buscarAluno(aluno)
    if(alunoAtual==null){
        return null
    }
    else{
        alunoAtual["cursos"].push({nomeDoCurso:curso, dataMatricula:hoje})
        console.log("Aluno matriculado com sucesso.")
    }
}

function aplicarFalta(aluno){

    if(aluno["cursos"].length==0){
        console.log("Aluno não matriculado")
        return null
    }
    else{
        aluno["faltas"]+=1
        console.log("Falta incrementada com sucesso.")
    }
}

function aplicarNota(aluno, nota){

    if(aluno["cursos"].length==0){
        console.log("Aluno não matriculado")
        return null
    }
    else{
        aluno["notas"].push(nota)
        console.log("Nota adicionada com sucesso.")
}
}

function aprovarAluno(aluno){

    if(aluno["cursos"].length==0){
        console.log("Aluno não matriculado")
        return null
    }
    else{
        let somaNotas = 0
        for(nota of aluno["notas"]){
            somaNotas+=nota
        }
        let media = somaNotas/aluno["notas"].length

        if(media>=7 && aluno["faltas"]<=3){
            console.log("Aluno Aprovado")
        }
        else{
            console.log("Aluno reprovado")
        }
    }
}