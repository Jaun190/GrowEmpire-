// auth.js – Login-Logik

async function login() { const email = document.getElementById("email").value const password = document.getElementById("password").value

if (!email || !password) { alert("Bitte E-Mail und Passwort eingeben.") return }

const { error, data } = await supabase.auth.signInWithPassword({ email, password })

if (error) { alert("Login fehlgeschlagen: " + error.message) } else { window.location.href = "dashboard.html" } }

