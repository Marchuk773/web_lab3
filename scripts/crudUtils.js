const SERVERURL = 'http://127.0.0.1:8090/tools';

export function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
};

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

export async function editTool(id, item) {
    let response = await fetch(SERVERURL + `/${id}`, {
        method: 'PUT',
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

export async function deleteTool(id) {
    let response = await fetch(SERVERURL + `/${id}`, {
        method: 'DELETE'
    });
};

export const checkParams = (header, description, price) => {
    let pattern = new RegExp("//s*")
    if (pattern.test(header) || pattern.test(description) == '' || pattern.test(price) == '') {
        return false;
    } else {
        return true;
    }
};