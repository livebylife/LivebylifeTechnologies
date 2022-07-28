import fetch from "node-fetch"

export default async function handleSubmit(req, res){
    let body = req.body
    console.log("api loaded")
    if(req.method === 'POST'){
        fetch(process.env.GATSBY_API_TOKEN_ADDRESS, {method:"GET"}).then(res => {
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
                console.log("fetch post successful")
                return (data)
            },(error) => {
               return(error)
            }
            )
        })
        console.log("Fetch done")
    }
    return null
}