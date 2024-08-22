
const findPrime = () => {
    for(let i=3;i<100;i++)
    {
        if(i%2!==0)
        {   let prime= true;
            for(let j=2;j<i;j++)
                {
                    
                    if(i%j==0)
                    {
                        prime= false;
                    }

                }
            if(prime)
            {
                console.log(i);
            }
        }
       
    }

}

findPrime();