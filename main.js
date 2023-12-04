
//Variavies de escopo global - que vãos er usadas em todo código

const form = document.getElementById('form-atividade')
let linhas = '';
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Comemorando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste" />'
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima:"));

//Ação tomada assim que o botão dentro do form for apertado
form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    calculaMedia();
    atualizaMedia();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');   

    //if para não permitir atividades iguais
    if (atividades.includes(inputNomeAtividade.value)){

        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida `) 
    } else{
        
        //Aqui será concatenado dentro da váriavel linha vários valores diferentes
    
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td> ${inputNomeAtividade.value}</td>`
        linha += `<td> ${inputNotaAtividade.value}</td>`
        linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += '</tr>'
        linhas += linha 
    }


    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody');
    //Aqui adicionamos o valor de linhas no HTML
    corpoTabela.innerHTML = linhas;
}

function calculaMedia (){
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++){

        somaDasNotas += notas[i]
    }

    const media = somaDasNotas / notas.length;

    return media;
}

function atualizaMedia(){

    const mediaFinal = calculaMedia();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}