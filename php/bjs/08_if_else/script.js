
let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
if(isNaN(minValue)){ minValue  = 0;}
if(isNaN(maxValue)){maxValue = minValue +1000}
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

let answerNumber  = Math.floor((minValue + maxValue) / 2);
//alert(answerNumber);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
let dva = 0;


orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`  + numberToWord(answerNumber); 

/*document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
    
})*/

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            //alert(phraseRandom);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?` + numberToWord(answerNumber); 
        }
    }
})
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 2);
            //alert(phraseRandom);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }? ` + numberToWord(answerNumber);
           // alert(numberToWord(answerNumber));
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        let rd = Math.round(Math.random() *3);
        switch (rd){
            case 0:
                document.body.style.backgroundImage='url(images/калейдоскоп.webp)';
                break;
            case 1:
                document.body.style.backgroundImage='url(images/minjon.webp)';
                break;
            case 2:
                document.body.style.backgroundImage='url(images/калейдоскоп.webp)';
                break;
            case 3:
                document.body.style.backgroundImage='url(images/триповый.webp)';  
        }
       // document.body.style.backgroundColor='lightgreen';
       // document.body.style.backgroundImage = 'url(images/калейдоскоп.webp)';
        let rnd = Math.round(Math.random() *3);
        switch (rnd){
            case 0:
                answerField.innerText = 'Ну вот: угадал!\n\u{1F60E}'
            break;
            case 1:
                answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
            break;
            case 2:
                answerField.innerText = `Угадал, как всегда!\n\u{1F60E}`
            break; 
            case 3:
                answerField.innerText = `Всё получилось!\n\u{1F60E}`
            break;
        }

        //answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})

function numberToWord(chislo){
 let units =['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять',
'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
let dazens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
let thousands = ['тысяч', 'одна тысяча', 'две тысячи', 'три тысячи', 'четыре тысячи', 'пять тысяч', 'шесть тысяч', 'семь тысяч', 'восемь тысяч',
'девять тысяч', 'десять тысяч', 'одинадцать тысяч', 'двенадцать тысяч', 'тринадцать тысяч', 'четырнадцать тысяч',
'пятнадцать тысяч', 'шестадцать тысяч', 'семнадцать тысяч', 'восемнадцать тысяч', 'девятнадцать тысяч'];

//let chl = ['', '', '', '', '', '', ''];
if(answerNumber < 0) {chislo = chislo * (-1)};
let chl = chislo.toString().split('');
//alert(chl);

switch(chl.length){
    case 1:
        chislo = units[answerNumber];
    break;
    case 2:
        if (chislo < 20){
          chislo = units[chislo];
        } 
        else{
           chislo =  dazens[parseInt(chl[0])] + ' ' +  units[chislo % 10]
          // alert('Exit' + '' + chislo);
        }
    break;
    case 3:
        dva = parseInt(chl[1] + chl[2]);
        if (dva < 20){
            chislo = units[dva];
          } 
          else{
             chislo =  dazens[parseInt(chl[1])] + ' ' +  units[dva % 10]
            // alert('Exit' + '' + chislo);
          }
          chislo = hundreds[chl[0]] + ' ' + chislo;
     break;
    case 4:
        dva =  parseInt(chl[2] + chl[3]);
        if (dva < 20){
            chislo = units[dva];
          } 
          else{
             chislo =  dazens[parseInt(chl[2])] + ' ' +  units[dva % 10]
            // alert('Exit' + '' + chislo);
          }
          chislo = thousands[chl[0]] + ' ' + hundreds[chl[1]] + ' ' + chislo;
          
    break;
    case 5:
        dva =  parseInt(chl[3] + chl[4]);
        if (dva < 20){
            chislo = units[dva];
          } 
          else{
             chislo =  dazens[parseInt(chl[3])] + ' ' +  units[dva % 10]
            // alert('Exit' + '' + chislo);
          }
          chislo = hundreds[chl[2]] + ' ' + chislo;
         // alert(chislo.toString());
          dva = parseInt(chl[0] + chl[1]);
          if (dva < 20){
            chislo = thousands[dva] + ' ' + chislo;
          } 
          else{
             chislo = dazens[parseInt(chl[0])] + ' ' +  thousands[dva % 10] + " " + chislo;
            // alert('Exit' + '' + chislo);
          }
        break;
        }
        if(answerNumber < 0){ chislo = 'минус' + " "+ chislo;} 
return chislo;
}
document.getElementById('Retry').addEventListener('click', function () {
    document.body.style.backgroundColor='white';
   // document.body.style.backgroundImage='/images/калейдоскоп.webp';
})
