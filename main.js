class Exame {

    
    constructor(resposta,peso) {
        this.resposta = resposta;
        this.peso = peso;
        this.exams =[];
    }

    add(exame){
        this.exams.push(exame);
    };

    examesVazios(){
        if(this.exams.length === 0){return true}
    }

    getNotas(exams){
        if(this.examesVazios()){
            console.log(`Não há exames`)
        }
        else{
            const notas = [];

             for(let inic = 0 ; inic < this.exams.length; inic ++){  
                let nota = 0;       
                for(let i = 0; i < 5; i ++){
                    if(this.exams[inic][i] === this.resposta[i]){
                        nota += this.peso;
                    }
                }
                notas.push(nota);
            }
            return notas;
        }
    }

    avg(){
        if(this.examesVazios()){
            console.log(`Não há exames`)
        }
        else{
            const notas = this.getNotas(this.exams); 
            const media = (notas.reduce((ad,val) => ad + val,0)) / this.exams.length;
            return `A média total das notas é ${media}`;
            }     
        }  

    min(){
        if(this.examesVazios()){
            console.log(`Não há exames`)
        }
        else{
            const notas = this.getNotas(this.exams); 
            const menor = Math.min(...notas);
            return `A menor nota é ${menor}`;
            }    
    }

    max(){
        if(this.examesVazios()){
            console.log(`Não há exames`)
        }
        else{
            const notas = this.getNotas(this.exams); 
            const maior = Math.max(...notas)
            return `A maior nota é ${maior}`;
            }    
    }

    lt(numero){
        if(this.examesVazios()){
            console.log(`Não há exames`)
        }
        else{
            const notas = this.getNotas(this.exams); 
            return notas.filter((value)=> value < numero)
            }    
    }

    gt(numero){
        if(this.examesVazios()){
            console.log(`Não há exames`)
        }
        else{
            const notas = this.getNotas(this.exams); 
            return notas.filter((value)=> value > numero)
            }    
    }
  
}

const exame1 = new Exame("abacd",2);
exame1.add(["a","b","a","c","d"])
exame1.add(["d","b","a","a","d"])
exame1.add(["a","b","b","a","d"])
exame1.add(["c","b","a","a","d"])
exame1.add(["a","b","a","a","d"])
console.log(exame1.avg());
console.log(exame1.min());
console.log(exame1.max());
console.log(exame1.lt(9));
console.log(exame1.gt(7));