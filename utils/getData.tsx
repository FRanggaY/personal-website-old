// get data from api
export async function getData(url: string, useExternal: boolean, externalUrl?: string){
    // url : what api endpoint example : projects
    // useExternal : is url get from external and value depend on true or false
    // externalUrl : if use external true then need externalUrl

    let apiUrl: string | null | undefined;
    if (useExternal) {
        apiUrl = externalUrl;
    } else {
        apiUrl = process.env.API_BASE_URL;
    }

    const res = await fetch(`${apiUrl}/api/${url}`);
    return res.json()
}

