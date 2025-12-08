export async function get(url: string){
    const headers = new Headers();
    try {
        headers.append("content-type", "application/json");
        headers.append("Accept", "application/json"); //look into this header
        const resp = await fetch(url, {
            method: "GET",
            headers
        });
        return await resp.json();
    }
    catch(error){
        alert((error as Error).message);    
        throw error
    }
}