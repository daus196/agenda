
const form = document.getElementById('formulario')
const nome = []
const telefone = []

let linhas =''

form.addEventListener('submit',(evt)=>{
    evt.preventDefault()

    adicionarLinha()
    atualizarTabela()

})

function adicionarLinha(){
    const nomeContato =document.getElementById('nomeContato')
    const telefoneContato =document.getElementById('telefoneContato')


    if(nome.includes(nomeContato.value)){
        alert('O Contato ja foi incluido')
    }else{
    nome.push(nomeContato.value)
    telefone.push (parseInt(nomeContato.value))

    let linha = '<tr>'
    linha += `<td>${nomeContato.value}</td>`
    linha += `<td>${telefoneContato.value}</td>`
    linha += `</tr>`

    linhas += linha 
    }
    
    nomeContato.value = ''
    telefoneContato.value=''


}

function atualizarTabela(){
    const tabela = document.querySelector('tbody')
    tabela.innerHTML=linhas
}