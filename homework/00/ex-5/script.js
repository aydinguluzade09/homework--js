/**
Magic 8 Ball istifadə edərək gələcəyə göz atalım!
aşağıdakı linkdən oyun haqqında daha ətraflı tanış ola bilırsiz
https://en.wikipedia.org/wiki/Magic_8-Ball 
Gələcəyə baxmaq üçün bir neçə addım var:
* Bir sual ver
* Topu silkələyin
* Cavab alın
* Müsbət və ya mənfi olduğuna qərar verin
Sual hər şey ola bilər, amma cavablar sabitdir,
və müxtəlif müsbət və ya mənfilik səviyyələrinə malikdir.
Aşağıda hazır cavablar yazılmışdır.
## Çox müsbət cavablar
It is certain.
It is decidedly so.
Without a doubt.
Yes - definitely.
You may rely on it.
## Müsbət cavablar
As I see it, yes.
Most likely.
Outlook good.
Yes.
Signs point to yes.
## Mənfi cavablar
Reply hazy, try again.
Ask again later.
Better not tell you now.
Cannot predict now.
Concentrate and ask again.
## Çox mənfi cavablar
Don't count on it.
My reply is no.
My sources say no.
Outlook not so good.
Very doubtful.
*/

// console log-a "The ball has shaken!"
// ve cavabi return etməlidir
function shakeBall() {
    return answer.random()
}

// shakeBall funksiyasinan cavab mənimsədilməlidir
let answer = [
    veryPositive = [
        'It is certain.',
        'It is decidedly so.',
        'Without a doubt.',
        'Yes - definitely.',
        'You may rely on it.',
    ],
    positive = [
        'As I see it, yes.',
        'Most likely.',
        'Outlook good.',
        'Yes.',
        'Signs point to yes..',
    ],
    negative = [
        'Reply hazy, try again.',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.',
    ],
    veryNegative = [
        'Dont count on it.',
        'My reply is no.',
        'My sources say no.',
        'Outlook not so good.',
        'Very doubtful.'
    ],
];

// Cavablari yoxlayanda biz anserver variable ni aşağıdakılar ilə yoxlamalıyıq
// - very positive
// - positive
// - negative
// - very negative
function checkAnswer() {
    if(answer===veryPositive){
        console.log(veryPositive);
    }else if(answer === positive){
        console.log(positive);
    }else if(answer===negative){
        console.log(negative);
    }else{
        console.log(veryNegative);
    }
}