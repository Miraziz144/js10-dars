



let son1 = prompt("son kiriting")
let son2 = prompt("Ikkinchi son kiriting ")

function kattaSon(a,b){
    if(a > b){
        alert(a + "<" + b)
    }else if (b > a){
        alert(b + ">" + a)
    }else if (a == b){
        alert('bu ikkala son teng ')
    }
} 


kattaSon(son1, son2)