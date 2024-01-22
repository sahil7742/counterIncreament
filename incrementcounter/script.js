const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerHTML=0;
    const updateCounter=()=>{
        const targetCount = +counter.getAttribute('data-target');
        //the + is use here to convert string into number
        const startingCount = Number(counter.innerHTML);
        //the "Number" is use to convert string into number
        const increament = targetCount/100;
        if (startingCount<targetCount){
            counter.innerHTML=`${Math.round(startingCount+increament)}`;
            setTimeout(updateCounter, 10);
        }else{
            counter.innerHTML=targetCount;
        }

    }

    updateCounter();
    
});



// there are several ways to achive it:
// using the unary plus operator:

// var n =+str;

//The Number constructor:
//var n = Number(str);

//The parseFloat function:
//var n = parseFloat(str);
