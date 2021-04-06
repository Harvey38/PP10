let a=[2,5,9,1,11,87];
//positive elements
//less than 1000
function las(arr)
{
    let largest=-1;
    let smallest=1001;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>largest)
        {
            largest=arr[i];
        }
        if(arr[i]<smallest)
        {
            smallest=arr[i];
        }
    }
    console.log(smallest+"  "+largest);
    // return([smallest,largest])
}
las(a)
// console.log(rval)