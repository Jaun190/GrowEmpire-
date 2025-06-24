// auth.js – Login mit Supabase

async function login() {
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  if (!email || !password) {
    alert("Bitte E-Mail und Passwort eingeben.")
    return
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  })

  if (error) {
    alert("Fehler beim Login: " + error.message)
  } else {
    // Weiterleitung ins Dashboard bei Erfolg
    window.location.href = "dashboard.html"
  }
}
