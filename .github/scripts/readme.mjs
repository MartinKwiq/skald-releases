// Regenerates README.md (the download page) from the published releases.
// Runs automatically every time a release is published (see .github/workflows/readme.yml).
import { writeFileSync } from 'fs'

const REPO = process.env.GITHUB_REPOSITORY || 'MartinKwiq/skald-releases'
const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'skald-readme' }
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`

const res = await fetch(`https://api.github.com/repos/${REPO}/releases?per_page=30`, { headers })
if (!res.ok) throw new Error(`GitHub API ${res.status}`)
const releases = (await res.json()).filter((r) => !r.draft && !r.prerelease)

const PLATFORMS = [
  { key: 'pc', icon: '🪟', name: 'Windows (PC)', match: (n) => n.endsWith('.exe'), how: 'Abrí el instalador y seguí los pasos. Después se actualiza sola.' },
  { key: 'android', icon: '🤖', name: 'Android (celular y TV)', match: (n) => n.endsWith('.apk'), how: 'Abrilo desde el celular y permití instalar apps de esta fuente. Después te avisa cuando hay versión nueva.' },
  { key: 'mac', icon: '🍎', name: 'Mac (Intel)', match: (n) => n.endsWith('.dmg'), how: 'Arrastrá Skald a Aplicaciones. La primera vez: Ajustes del Sistema → Privacidad y seguridad → Abrir de todos modos.' },
  { key: 'ios', icon: '📱', name: 'iPhone (con SideStore)', match: (n) => n.endsWith('.ipa'), how: 'Instalalo con SideStore (ver la guía). Hace falta iOS 15 o más nuevo.' }
]

const mb = (b) => `${(b / 1048576).toFixed(b < 10485760 ? 1 : 0)} MB`
const day = (iso) => new Date(iso).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Argentina/Buenos_Aires' })

const latestRelease = releases[0]
const lines = []
lines.push('# Skald — descargas', '')
lines.push('Reproductor de música personal: tus playlists de Spotify y YouTube, sin publicidad, con IA, letras, radios y sincronización entre dispositivos.', '')
if (latestRelease) lines.push(`**Última versión: ${latestRelease.tag_name.replace(/^v/, '')}** — ${day(latestRelease.published_at)} · [ver novedades](${latestRelease.html_url})`, '')

lines.push('## ⬇️ Descargar la última versión', '')
lines.push('| Dispositivo | Descarga | Cómo se instala |', '|---|---|---|')
for (const p of PLATFORMS) {
  const r = releases.find((x) => x.assets.some((a) => p.match(a.name)))
  const a = r?.assets.find((x) => p.match(x.name))
  lines.push(a ? `| ${p.icon} **${p.name}** | [**${a.name}**](${a.browser_download_url}) (${mb(a.size)}) | ${p.how} |` : `| ${p.icon} **${p.name}** | Próximamente | |`)
}
lines.push('')
lines.push('📖 **Guía paso a paso para Mac y iPhone:** [INSTALAR-MAC-Y-IPHONE.md](INSTALAR-MAC-Y-IPHONE.md)', '')

lines.push('## 🗂️ Últimas dos versiones de cada dispositivo', '')
for (const p of PLATFORMS) {
  const withFile = releases.filter((x) => x.assets.some((a) => p.match(a.name))).slice(0, 2)
  if (!withFile.length) continue
  lines.push(`### ${p.icon} ${p.name}`, '', '| Versión | Fecha | Descarga |', '|---|---|---|')
  for (const r of withFile) {
    const a = r.assets.find((x) => p.match(x.name))
    lines.push(`| [${r.tag_name.replace(/^v/, '')}](${r.html_url})${r.id === latestRelease?.id ? ' (última)' : ''} | ${day(r.published_at)} | [${a.name}](${a.browser_download_url}) (${mb(a.size)}) |`)
  }
  lines.push('')
}

lines.push('## 📜 Todas las versiones', '', `[Ver el historial completo de versiones](https://github.com/${REPO}/releases)`, '')
lines.push('---', '', '<sub>Esta página se actualiza sola cada vez que se publica una versión nueva.</sub>', '')
writeFileSync('README.md', lines.join('\n'))
console.log(lines.join('\n'))
