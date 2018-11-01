const apiGetAllVideo = 'https://www.googleapis.com/youtube/v3/search/?key=AIzaSyBJ3ntReiv0L19H2RoYW62LpRdIuyPhIpw&channelId=UCQzdMyuz0Lf4zo4uGcEujFw&part=snippet,id&order=date&maxResults=30';
// const apiGetAllVideo = 'https://api.github.com/repositories/19438/issues';
async function getVideoFromServer() {
    try {
        let response = await fetch(apiGetAllVideo);
        let responseJson = await response.json();
        return responseJson
    } catch (error) {
        console.error(`Error is: ${error}`)
    }
}

export { getVideoFromServer }