console.log("JavaScript подключен");
const idInstance = document.getElementById("idInstance");
const apiToken = document.getElementById("apiToken");
const response = document.getElementById("response");
const phoneNumber = document.getElementById("phoneNumber");
const message = document.getElementById("message");
const fileUrl = document.getElementById("fileUrl");
const filePhoneNumber = document.getElementById("filePhoneNumber");

async function getSettings() {
    const url = `https://api.green-api.com/waInstance${idInstance.value}/getSettings/${apiToken.value}`;

    const result = await fetch(url);
    const data = await result.json();

    response.value = JSON.stringify(data, null, 2);
}

document.getElementById("getSettingsBtn").addEventListener("click", getSettings);

async function sendMessage() {
    const url = `https://api.green-api.com/waInstance${idInstance.value}/sendMessage/${apiToken.value}`;

    const body = {
        chatId: `${phoneNumber.value}@c.us`,
        message: message.value
    };

    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    const data = await result.json();

    response.value = JSON.stringify(data, null, 2);
}

document.getElementById("sendMessageBtn").addEventListener("click", sendMessage);

async function sendFileByUrl() {
    const url = `https://api.green-api.com/waInstance${idInstance.value}/sendFileByUrl/${apiToken.value}`;

    const body = {
        chatId: `${filePhoneNumber.value}@c.us`,
        urlFile: fileUrl.value,
        fileName: fileUrl.value.split("/").pop()
    };

    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    const data = await result.json();

    response.value = JSON.stringify(data, null, 2);
}

document.getElementById("sendFileBtn").addEventListener("click", sendFileByUrl);

async function getStateInstance() {
    const url = `https://api.green-api.com/waInstance${idInstance.value}/getStateInstance/${apiToken.value}`;

    const result = await fetch(url);
    const data = await result.json();

    response.value = JSON.stringify(data, null, 2);
}

document.getElementById("getStateInstanceBtn").addEventListener("click", getStateInstance);
