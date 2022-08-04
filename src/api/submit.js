import fetch from "node-fetch"
import axios from "axios"



export default async function handleSubmit(req, res){
    console.log(res.body.phone)
    if (req.body.funk !== ""){
        console.log("The phone input is hidden for a reason. Please leave it blank")
        res.status(500)
    }
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
}