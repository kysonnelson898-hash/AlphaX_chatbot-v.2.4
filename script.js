async function sendMessage(){

const input=document.getElementById(“message”);

const text=input.value;

if(!text) return;

const messages=document.getElementById(“messages”);

messages.innerHTML+=`<p><b>You:</b> ${text}</p>`;

input.value=“”;

const response=await fetch(“https://lil2spookey.app.n8n.cloud/webhook-test/0686124e-02f3-4df3-9bd3-f546747af636”,{

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
