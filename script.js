const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{
    counter.innerText="0"
    
    const upgradeCounting=()=>{
        const target= +counter.getAttribute('data-value')
        const increment= target/300;
        const data= +counter.innerText;
 
        
        if(data < target)
        {
            counter.innerText=`${Math.ceil(increment + data)}`
            setTimeout(upgradeCounting,1);
        }
        else{
            counter.innerText=target
        }
        
    }
    upgradeCounting();
})

