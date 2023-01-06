export default function eMaiorDeIdade(campo){
    const dataNascimento = new Date(campo.value)
    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity('O Usuario não e maior de Idade')
    }
}

function validaIdade(data){
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(),data.getUTCDate());
    return dataAtual >= dataMais18;
}