import axios from "axios";


export async function sendEmailService(payload,action){
        const url = (action === 'newsLetter')
        ? 'http://localhost/newsLetter.php'
        : 'http://localhost/reservation.php';
    
    
    try {
        const response = await axios.post(url,payload , {
            headers: {
                "Content-Type" : "application/json"
            }
            
        })
        if (!response.data?.success) {
        throw new Error(response.data?.message || "Erreur serveur");
    }
    return response.data.success;
    } catch (error) {
        console.error("Axios error:", error);
        throw error;
    }
}