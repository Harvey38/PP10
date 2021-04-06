let decimal =26;
function dtb(decimal)
{
    let binary=0;
    let pv=1;
    while(decimal>0)
    {
        console.log(decimal);
        let rem = decimal%2;
        binary= binary+ rem*pv;
        pv=pv*10;
        decimal= Math.floor(decimal/2);
    }
    return binary;
}
let ans=dtb(decimal);
console.log(ans);