const api="http://localhost:3006/users",form=document.getElementById("form"),msg=document.getElementById("message");
form.addEventListener("submit",async e=>{e.preventDefault();const name=document.getElementById("name").value.trim(),email=document.getElementById("email").value.trim().toLowerCase(),password=document.getElementById("password").value;
if(!name||!/^\\S+@\\S+\\.\\S+$/.test(email)||password.length<8){msg.textContent="Enter valid details; password must be at least 8 characters.";msg.className="error";return;}
msg.textContent="Checking email...";try{const check=await axios.get(api,{params:{email}});if(check.data.length){msg.textContent="Email already registered.";msg.className="error";return;}
await axios.post(api,{name,email,password});msg.textContent="Registration successful!";msg.className="success";form.reset();}catch(err){msg.textContent="Registration failed. Ensure JSON Server is running.";msg.className="error";}});
