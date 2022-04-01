// Asagidaki funksiyanin izahini komment olaraq qeyd edin.
let firstWord = 'code'
let secondWord = 'your'
let thirdWord = 'future'
function getNumber() {
	return Math.random() * 10;
}
// fucntion yaradiriq daha sonra Math array-den random object goturur ve 10-na vurub return edirik 
// Asagidaki funksiyanin izahini komment olaraq qeyd edin.
function s(w1, w2) {
	return w1.concat(w2);
}
// funcion yaradiriq 2 parametr goturur ve daha sonra onlari concat edir ve return edir
function concatenate(firstWord, secondWord, thirdWord) {
	// Yuxarıdakı funksiyada daxil etdiyiniz 3 sözü birləşdirmək üçün funksiyanın davamını yazın.
    return firstWord.concat(secondWord,thirdWord)
}
console.log(concatenate);
// Nəticə
// concatenate("code", "your", "future") === "code your future"