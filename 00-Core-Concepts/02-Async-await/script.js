    
    
    {

   const exPro = new Promise ((res,rej) => {
        let age = 19
        if (age > 18) res({
            status : "allowed",
            age : age })

        else rej("not allowed")
    })

    exPro.then((data) => {
        console.log(data);
        return data
    }).then((data) => {
        console.log(`you had ${data.age - 18} years in adulthood`);
    }).catch((err) => console.log(err))


    }




    {

// converting promises to the async await 




    }
    
 