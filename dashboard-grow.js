// dashboard-grow.js – Grow-Daten aus Supabase anzeigen

document.addEventListener("DOMContentLoaded", async () => { const { data: { session } } = await supabase.auth.getSession() if (!session) return window.location.href = "welcome.html"

const userId = session.user.id

const { data: pflanze, error } = await supabase .from("pflanzen") .select("sorte, startdatum, dauer") .eq("nutzer_id", userId) .order("startdatum", { ascending: false }) .limit(1) .single()

const growSorte = document.getElementById("grow-sorte") const growPhase = document.getElementById("grow-phase") const growTage = document.getElementById("grow-tage") const growProgress = document.getElementById("grow-progress")

if (!pflanze) { growSorte.textContent = "Keine aktive Pflanze" growPhase.textContent = "-" growTage.textContent = "-" growProgress.value = 0 return }

const heute = new Date() const start = new Date(pflanze.startdatum) const dauer = pflanze.dauer const vergangen = Math.floor((heute - start) / (1000 * 60 * 60 * 24)) const verbleibend = Math.max(0, dauer - vergangen) const fortschritt = Math.min(100, Math.floor((vergangen / dauer) * 100))

growSorte.textContent = Sorte: ${pflanze.sorte} growPhase.textContent = vergangen < 14 ? "Phase: Wachstum" : "Phase: Blüte" growTage.textContent = Ernte in: ${verbleibend} Tage growProgress.value = fortschritt })

