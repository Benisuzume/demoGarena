
const apiGetAllPics = 'https://api.github.com/repositories/19438/issues';
async function getNewsFromServer() {
    try {
        let response = await fetch(apiGetAllPics);
        let responseJson = await response.json();
        return responseJson
    } catch (error) {
        console.error(`Error is: ${error}`)
    }
}

export { getNewsFromServer }