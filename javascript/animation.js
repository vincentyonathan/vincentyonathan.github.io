let innerTexts = document.querySelectorAll('.text_wraper .innerText');
if(innerTexts)
{
    innerTexts.forEach(innerText=>{
        /* make clone of first child start*/
        let firstText = innerText.firstElementChild.cloneNode('true');
        innerText.appendChild(firstText);
        /* make clone of first child end*/

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

            // now change the value of i
            i = (i<step) ? (i+1) : 1;
        }, speed);
    });
}