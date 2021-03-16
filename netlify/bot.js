exports.handler = async (event, context, callback) => {
  const pass = (body) => {callback(null, {statusCode: 200, body: JSON.stringify(body)})}

  try {
    let response = await fetch("https://api.telegram.org/bot1607403148:AAFthbfSCgz3ZQ1swBKxbQ3Vqf3Y4KnCIN4/getUpdates", 
  {
   method: event.httpMethod,
   headers: {
     /* "Authorization": `Bearer ${process.env.AIRTABLE_API}`, */
     "Content-Type": "application/json"
  },
   body: event.body
  })
   let data = await response.json()
   await pass(data)
 } catch(err) {
     let error = {
       statusCode: err.statusCode || 500,
       body: JSON.stringify({error: err.message})
 }
  await pass(error)
 }
}