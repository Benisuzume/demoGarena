
const apiGetAllPics = 'https://api.github.com/repositories/19438/issues';
// const apiGetAllPics = 'http://192.168.1.56:81/test/bang1.php';
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