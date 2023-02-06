let tCandidatos = 0;
        let msg = ""
        let mIdade = 0;
        let totalIdade = 0;
        let continuar = "";
        do{
            let nome = prompt("Digite o nome do candidato");
            let idade = Number(prompt("Digite sua idade"));
            totalIdade += idade;
            let sexo = prompt("Digite seu sexo");
            let profissional = prompt("Possui experiência profissional? [s/n]");
            if(profissional == "s" && idade >= 18){
                msg += "############################################################" + "<br>";
                msg += "Nome do Funcionario: " + nome + "|| Idade: " + idade + "<br>";
            } 
            tCandidatos++;
            continuar = prompt("Deseja continuar? [s/n]")
        }while (continuar == "s")

        mIdade = (totalIdade / tCandidatos).toFixed(1);
        console.log(msg);
        
        document.getElementById("mIdade").innerHTML = mIdade;
        document.getElementById("tCandidatos").innerHTML = mIdade;
        document.getElementById("msg").innerHTML = msg;

