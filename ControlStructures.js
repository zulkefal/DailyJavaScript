const checkNumber =(num)=>{
    if(num==0)
    {
        console.log(`${num} is Zero`);
    }
    else if(num>0)
    {
        console.log(`${num} is Positive`);
    }
    else{
        console.log(`${num} is Negative`);
    }
}

checkNumber(0);
checkNumber(10);
checkNumber(-10);

const eligbleforvote =(age)=>{
    if(age>=18)
    {
        console.log('Your are elgible for vote');
    }
    else{
        console.log('Your are not elgible for vote');
    }
}

eligbleforvote(18);
eligbleforvote(17);
eligbleforvote(20);

const checkLargest =(a,b,c)=>{
    if(a>b)
    {
        if(a>c)
        {
            console.log(`${a} is largest`);
        }
    }
    else if (b>c)
    {
        console.log(`${b} is largest`);
    }
    else{
        console.log(`${c} is largest`);
    }
}

checkLargest(10,20,30);
checkLargest(30,20,10);
checkLargest(10,30,20);

const weekDays =(day)=>{
    switch(day){
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        case 7:
            console.log('Sunday');
            break;
        default:
            console.log('Invalid day');
    }
}

weekDays(1);
weekDays(2);
weekDays(3);

const checkGrade =(marks)=>{
    switch(marks){
        case 10:
            console.log('Grade A');
            break;
        case 9:
            console.log('Grade B');
            break;
        case 8:
            console.log('Grade C');
            break;
        case 7:
            console.log('Grade D');
            break;
        case 6:
            console.log('Grade E');
            break;
        default:
            console.log('Grade F');
    }
}
checkGrade(10);
checkGrade(9);
checkGrade(8);

const checkEvenOdd =(num)=>{
    if(num%2==0)
    {
        console.log(`${num} is Even`);
    }
    else{
        console.log(`${num} is Odd`);
    }
}
checkEvenOdd(10);
checkEvenOdd(11);

const checkVowel =(char)=>{
    switch(char){
        case 'a':
            console.log('Vowel');
            break;
        case 'e':
            console.log('Vowel');
            break;
        case 'i':
            console.log('Vowel');
            break;
        case 'o':
            console.log('Vowel');
            break;
        case 'u':
            console.log('Vowel');
            break;
        default:
            console.log('Consonant');
    }
}
checkVowel('a');
checkVowel('b');

const checkLeapYear =(year)=>{
    if(year%4==0)
    {
        if(year%100==0)
        {
            if(year%400==0)
            {
                console.log('Leap Year');
            }
            else{
                console.log('Not a Leap Year');
            }
        }
        else{
            console.log('Leap Year');
        }
    }
    else{
        console.log('Not a Leap Year');
    }
}