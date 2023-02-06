
let count = 0
let nalunos = 0
let media = 0
let texto = ""
let maybe = 0
let conseguiu
let repNota = 0
let repFalta = 0
let ambos = 0
let menmedia = 10
let mediaturma = 10
let maiormedia = 0
while (nalunos < 2) {
    nalunos++
    let matricula = (prompt("Qual é a matricula do aluno?"))
    while (count < 3) {
        count++
        let prova = Number(prompt("Que nota o aluno conseguiu na avaliação " + count + "?"))
        media = (media + prova);
    }
    media = media / 3
    let frequencia = Number(prompt("Qual a frequencia do aluno?"))
    frequencia = (32 / 100) * frequencia
    if (media > 7 && frequencia > 8) {
        texto = texto + "O aluno de matricula " + matricula + " conseguiu alcançar as notas e a frequência desejadas." + "</br>" + "Nota: " + media + ", Frequência: " + frequencia + "%" + "</br>"
        conseguiu++
    } else {
        if (media < 7) {
            maybe = 1
        } if (frequencia < 8) {
            maybe = 2
        } if (frequencia < 8 && media < 7) {
            maybe = 3

        }
        if (maybe == 3) {
            texto = texto + "O aluno de matricula " + matricula + " não conseguiu alcançar as notas e a frequência desejadas." + "</br>" + "Nota: " + media + ", Frequência: " + frequencia + "%" + "</br>"
            ambos++
        } else {
            if (maybe == 2) {
                texto = texto + "O aluno de matricula " + matricula + " não conseguiu alcançar a frequência desejada." + "</br>" + "Nota: " + media + ", Frequência: " + frequencia + "%" + "</br>"
                repFalta++
            } else {
                if (maybe == 1) {
                    texto = texto + "O aluno de matricula " + matricula + " não conseguiu alcançar as notas desejadas." + "</br>" + "Nota: " + media + ", Frequência: " + frequencia + "%" + "</br>"
                    repNota++
                }
            }
           
        }
    }
   
    count = 0
    maybe = 0
}
count = 0
maybe = 0
if (media < menmedia) {
                menmedia = media
            }
            if (media > maiormedia) {
                maiormedia = media
            }
            mediaturma = mediaturma + media
            mediaturma = mediaturma / nalunos
texto = texto + "</br>" + "Alunos retidos por falta: " + repFalta + ". Alunos retidos por nota: " + repNota + ". Alunos retidos por ambas as coisas: " + ambos + ". Maior média:" + maiormedia + ". Menor média:" + menmedia + ". Média da sala: " + mediaturma
document.getElementById("texto").innerHTML = texto

