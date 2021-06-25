function countWords(str)
{
    let count = 1;

    for (let i = 0; i < str.length - 1; i++) 
    {
        if (str[i]>= 'A' && str[i]<= 'Z')
        {
            count++;
        }
    }
 
    return count;
}
 
    let str ="helloTeamGoodEvening";
 
    console.log( countWords(str));
