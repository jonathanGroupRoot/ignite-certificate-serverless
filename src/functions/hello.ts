export const handle = async(event) => {
    return {
        statusCode: 201,
       body: JSON.stringify({
            message: "Hello Word",
        }),
        headers: {
            "Context-Type": "aplication/json"
        }
    }
}