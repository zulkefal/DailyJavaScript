
const findPrime = () => {
    for(let i=3;i<10;i++)
    {
        if(i%2!==0)
        {
            for(let j=2;j<=i;j++)
                {
                    if(j%i==0)
                    {
                        console.log(i)
                    }
                }
        }
       
    }

}

findPrime();