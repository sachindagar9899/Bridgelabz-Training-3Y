const base="http://localhost:3004";async function loadDashboard(){const ids=["usersCount","ordersCount","productsCount"],paths=["/users","/orders","/products"];
try{const responses=await Promise.all(paths.map(p=>fetch(base+p)));if(responses.some(r=>!r.ok))throw Error("API failed");const records=await Promise.all(responses.map(r=>r.json()));records.forEach((arr,i)=>{const el=document.getElementById(ids[i]);el.textContent=arr.length;el.classList.remove("skeleton");});}
catch(e){document.getElementById("warning").hidden=false;ids.forEach(id=>{const el=document.getElementById(id);if(el.textContent==="Loading..."){el.textContent="Unavailable";el.classList.remove("skeleton");}});}}
loadDashboard();
