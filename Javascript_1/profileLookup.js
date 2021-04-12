function lookUpProfile(name, prop){
    for(let i=0;i<contacts.length;i++)
    {
        let obj = contacts[i];
        if(obj.firstName==name)
        {
            if(obj[prop]!=undefined)
            {
                return obj[prop];
            }
            else
            {
                return 'No such property';
            }
        }
    }
    return 'No such contact';
}