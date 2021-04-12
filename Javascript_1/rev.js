function inp(num)
{
    for(let i=0;i<num.length;i++)
    {
        console.log(parseInt(num[i])+2);
    }
}
let input=process.argv.slice(2);
inp(input);
// console.log(process.argv);
// console.log(input);