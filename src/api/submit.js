import fetch from "node-fetch"

export default async function handleSubmit(req, res){
    const url = process.env.GATSBY_API_REACH_OUT_ADDRESS
    const headers = {
        "Content-Type": "application/json",
        "api-key": process.env.API_KEY
    }

    const data = req.body

    try {
        const result = await fetch(url, {
            method: "POST",
            headers: headers,
            body: data,
        })
        .then(res => {
            return res.json()
        })
        res.json(result)
    } catch (error) {
        res.status(500).send(error)
        
    }




    // let body = req.body
    // if(req.method === 'POST'){
    //     fetch(
    //             process.env.GATSBY_API_TOKEN_ADDRESS, 
    //             {
    //                 method:"GET"
    //             }
    //         ).then(res => {
    //             const csrfToken = res.data;
    //             fetch(process.env.GATSBY_API_REACH_OUT_ADDRESS,{
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': "application/json",
    //                 'X-CSRF-Token': csrfToken,
    //                 'api-key': process.env.API_KEY,
    //             },
    //             body
    //         })
    //         .then(
    //         (resp) => {
    //             res.send(resp)
    //         },(error) => {
    //            return(error)
    //         }
    //         ).catch((error) => {
    //             return(error)
    //         })
    //     })
        
    // }
    // return null
}