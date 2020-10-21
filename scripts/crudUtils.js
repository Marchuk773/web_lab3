const SERVERURL = 'http://127.0.0.1:8090/tools';

export async function addTool(item) {
    let response = await fetch(SERVERURL, {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });
};

export async function getTools() {
    let response = await fetch(SERVERURL);
    let items = await response.json();
    return items;
};