import fetch from "node-fetch"
import axios from "axios"



export default async function handleSubmit(req, res){


    let csrfToken = await axios.get(
        'https://api.livebylife.com/session/token'
        )
        .then((response) => {
            
            return response.data
         }
        )
        .catch((error) => {
            // Lets log the error but return null to move on.
            console.log("Error from API session token GET")
            console.log(error)
            return null
         }
        )

    if (csrfToken != null){
        axios({
            method: 'post',
            url:'https://api.livebylife.com/webform_rest/submit?_format=json',
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken,
                "api-key": process.env.API_KEY
            },
            data: req.body
        })
        .then((response) => {
            
            res.status(200).send(response)
        })
        .catch((error) => {
            
            res.status(500).send(error)
        })

        return null
    }
    return null


// ~~~ Labled as trying


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






//~~~~~~~~~ Below works on localhost
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