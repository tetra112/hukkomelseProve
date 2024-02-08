// funkjon som shufftler input arrayen 
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }    
    linkDivVerdi()
}


// lager en Array med dupliserte tall fra 1-18 + caller på shuffleArray funksjonen
function genVerdier(){
    tempArray=[];
    for(i=0;i<18;i++){
        pushTemp = i+1;
        tempArray.push(pushTemp);
        tempArray.push(pushTemp);
    }
    shuffleArray(tempArray)
}


// gir verdien til <div> elementene
function linkDivVerdi(){
    for(i=0;i<36;i++){
        var baseTileArr = document.querySelectorAll('[data-klasse="baseTile"]')
        baseTileArr[i].setAttribute("data-objekt",tempArray[i])
        baseTileArr[i].innerHTML=tempArray[i];
    }
}
