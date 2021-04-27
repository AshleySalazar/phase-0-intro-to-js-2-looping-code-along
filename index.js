function countDown(num){
    let i = num;
    while ( i >= 0 ){
        console.log (i--);
    }

}

function writeCards(names){
    let letters = []
    for ( let i = 0; i <names.length; i ++){
      letters.push (`Thank you, ${names[i]}, for the wonderful surprise gift!`);

    }
    return letters
}
