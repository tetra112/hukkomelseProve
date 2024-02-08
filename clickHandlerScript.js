// bytter data-status på clicket element til "open"
// setter også verdien på data-objekt som innerHTML

function clickHandler(a){
    let checkLocked = this.getAttribute('data-status')
    if(checkLocked == 'locked'){
        console.log("locked")
    }else{
        opdaterAntallTrykk();
        this.setAttribute('data-status', "open");
        this.innerHTML = this.getAttribute('data-objekt');
        var antallOpenEl = document.querySelectorAll('[data-status="open"]')

        if(antallOpenEl.length == 2){ // vis 2 elementer er åpne kjør følgende:
            sammenlignF(antallOpenEl)
        }else if(antallOpenEl.length > 2){
            for(i=0;i<antallOpenEl.length;i++){
                antallOpenEl[i].setAttribute('data-status',"hidden")
            } 
        }
    }
    checkVictory() 
}

// opdaterer antallForsok
function opdaterAntallTrykk(){
    antallTrykkVar++;
    antallForsokEl.innerHTML = antallTrykkVar;
}

// kjekker om 2 åpna tiles er samme objekt, og bytter status
function sammenlignF(array){   
            tempf1 = array[0].getAttribute('data-objekt');
            tempf2 = array[1].getAttribute('data-objekt');
    // vis objekt verdien er forskjellige: setter dem som hidden, uten tekst i midten        
            if(tempf1 != tempf2){
                setTimeout(()=>{
                    array[0].setAttribute('data-status',"hidden")
                    array[1].setAttribute('data-status',"hidden")
                },500)                                             // <- antall milisekunder tilen skal vises før den blir 'hidden' 
    // vis objekt verdien er lik: setter statusen dems som låst 
            }else if(tempf1 == tempf2){
                array[0].setAttribute('data-status',"locked")
                array[1].setAttribute('data-status',"locked")
            }
        }        

function checkVictory(){
    let lockedEl = document.querySelectorAll('[data-status="locked"]')
    if(lockedEl.length == 36){
        seierF()
    }
}