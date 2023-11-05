const result=document.querySelectorAll('.counter');

const speed=200;

result.forEach(counter=>
    {
        const updatecount=()=>
        {
        const target=+counter.getAttribute('data-target');
        const a_1=+counter.innertext;
        const inc=target/speed;
        if(a_1 < target)
        {
            counter.innertext=a_1+inc;
            setTimeout(updatecount,100)
        }
        else{
        counter.innertext=target;    
        }
    }
updatecount();

})