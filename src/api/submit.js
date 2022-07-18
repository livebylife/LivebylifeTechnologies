import fetch from "node-fetch"
import axios from 'axios'

export default async function handleSubmit(req, res){
    let body = req.body
    console.log("Contents in body variable")
    console.log(body)
    console.log("api submit hit, next up is sending to api.lbl....")
    if(req.method === 'POST'){
        console.log("Confirmed this is a post request now going to send data to api")
        
        fetch(process.env.GATSBY_API_TOKEN_ADDRESS, {method:"GET"}).then(res => {
            console.log("We got a response from the server, lets check for the token")
            console.log(res)
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
            (data) => {
                return (data)
            },(error) => {
               return(error)
            }
            )
        })
        
    }
    return null
}