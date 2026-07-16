async function sendMessage(){

const input=document.getElementById(“message”);

const text=input.value;

if(!text) return;

const messages=document.getElementById(“messages”);

messages.innerHTML+=`<p><b>You:</b> ${text}</p>`;

input.value=“”;

const response=await fetch(“https://alphaxautomation.app.n8n.cloud/webhook-test/9d6589b0-42ab-44f2-8cf0-933c34e7d237“,{

method:”POST”,

headers:{
“Content-Type”:”application/json”
},

body:JSON.stringify({
message:text
})

});

const data=await response.json();

messages.innerHTML+=`<p><b>AlphaX:</b> ${data.reply}</p>`;

messages.scrollTop=messages.scrollHeight;

}
