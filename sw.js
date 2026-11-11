/* Service Worker: macht die App offline nutzbar. Alte Caches werden beim Update gelöscht (keine Speicherreste). */
const CACHE = "abi-lernen-v22";
const CORE = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-180.png", "spiel.html"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE))); });
// Neue Version wartet, bis die Person in der App auf „Jetzt aktualisieren“ tippt
self.addEventListener("message", e => { if (e.data === "skip") self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request; if (r.method !== "GET") return; const u = new URL(r.url);
  if (u.origin === location.origin) { // eigene Dateien: erst Netz (immer aktuell), offline aus dem Cache
    e.respondWith(fetch(r).then(res => { if (res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); } return res; })
      .catch(() => caches.match(r).then(m => m || caches.match("index.html")))); return; }
  if (/(^|\.)cdnjs\.cloudflare\.com$|^fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)) { // Bibliotheken + Schriften: aus dem Cache
    e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => { if (res.ok || res.type === "opaque") { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); } return res; }))); }
});
