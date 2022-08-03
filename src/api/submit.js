import fetch from "node-fetch"

export default async function handleSubmit(req, res){

    // if(req.method === 'POST') {
    //     let csrfToken = ''
    //     try {
    //         csrfToken = await fetch(
    //             process.env.GATSBY_API_TOKEN_ADDRESS,
    //             {
    //                 method: "GET"
    //             }
    //             )
    //             .then(response => {
    //                 res.send(response)
    //             }, (error) => {
    //                 return(error)
    //             })
    //         return csrfToken
    //     } catch (error) {
    //         res.status(500).send(error)
    //         console.log(error)
    //     }
            
    //     try{
    //         const result = await fetch(process.env.GATSBY_API_REACH_OUT_ADDRESS, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 'X-CSRF-Token': csrfToken,
    //                 "api-key": process.env.API_KEY
    //             },
    //             body: req.body,
    //         })
    //         .then(res => {
    //             return res.json()
    //         })
    //         res.json(result)
    //     } catch (error) {
    //         res.status(500).send(error)
    //         console.log(error)
    //     }
    // }
    // return null







    let body = req.body
    if(req.method === 'POST'){
        fetch(
                process.env.GATSBY_API_TOKEN_ADDRESS, 
                {
                    method:"GET"
                }
            ).then(res => {
                const csrfToken = res.data;
                fetch(process.env.GATSBY_API_REACH_OUT_ADDRESS,{
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                    'X-CSRF-Token': csrfToken,
                    'api-key': process.env.API_KEY,
                },
                body
            })
            .then(
            (resp) => {
                res.send(resp)
            },(error) => {
               return(error)
            }
            ).catch((error) => {
                return(error)
            })
        })
        
    }
    return null
}