const form = document.getElementById('form');

form.addEventListener('submit', function(event){

    event.preventDefault();

    const weight= Number(document.getElementById('weight').value);
    const height= Number(document.getElementById('height').value)  / 100;

    const bmi = (weight / ( height * height)).toFixed(2);

    const value = document.getElementById('value');
   
    let description ='';
console.log(weight, height, weight / ( height * height), (weight / ( (height) * height)).toFixed(2))
    document.getElementById('info').classList.remove('hidden');
 
    if (bmi < 18.5){
    description = "Cuidado! Você está abaixo do peso!"

     }else if (bmi >=18.5 && bmi <=25) {        
    description = "Voce está no peso ideal";

     }else if (bmi > 25 && bmi <=30) {        
        description = "Voce está sobrepeso";

    }else if (bmi > 30 && bmi <=35) {        
        description = "Cuidado ! Voce está com obesidade moderada";
    
    } else if (bmi > 35 && bmi <=40) {        
        description = "Cuidado !! Voce está obesidade severa!!!";

    }else{  (bmi > 40 && bmi <=70)        
        description = "ALERTA ALERTA Voce esta com obesidade severa RISCO DE VIDA !!!!";
    }


        value.textContent = bmi.replace('.','.');
  document.getElementById ( 'description').textContent = description;

});