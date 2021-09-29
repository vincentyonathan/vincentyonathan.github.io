let innerTexts = document.querySelectorAll('.text_wraper .innerText');
if(innerTexts)
{
    innerTexts.forEach(innerText=>{
        let firstText = innerText.firstElementChild.cloneNode('true');
        innerText.appendChild(firstText);

        let i= 0,
            speed= 2000,
            distance= 108;

        setInterval(() => {
            let step = innerText.childElementCount;
            innerText.style.transform  = `translateY(-${distance * i}px)`;
            innerText.style.transition = "0.7s ease-in-out";
            console.log(i, step);
            
            if(i==step)
            {
                innerText.style.transition = "0s";
                innerText.style.transform = `translateY(10px)`;
            }

            if(i<step) 
            {
                i = i+1
            }  
            else
            {
                i = 1;
            }
        }, speed);
    });
}