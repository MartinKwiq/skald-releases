# Skald en Mac y iPhone — cómo instalarlo

Todo es gratis. No hace falta pagar la membresía de Apple ni publicar nada en la App Store.

---

## Mac (Intel)

### Qué necesitás
- Una Mac Intel con **macOS 11 (Big Sur) o más nuevo**.
- Nada más: no hace falta instalar Xcode, Node ni usar la Terminal.

### Instalar
1. Descargá **`Skald-<versión>-mac-intel.dmg`** desde la página de versiones:
   la página de descargas (https://github.com/MartinKwiq/skald-releases)
2. Abrí el `.dmg` y **arrastrá Skald a la carpeta Aplicaciones**.
3. Abrí Skald desde Aplicaciones (o Launchpad).

### La primera vez: "no se puede abrir porque es de un desarrollador no identificado"
Es normal: la app está firmada por vos ("ad hoc"), no por un certificado pago de Apple.

1. En el cartel tocá **Aceptar** (no la mandes a la papelera).
2. Abrí **Ajustes del Sistema → Privacidad y seguridad**.
3. Bajá hasta **Seguridad**: vas a ver *"Se bloqueó el uso de Skald…"*. Tocá **Abrir de todos modos**.
4. Poné tu contraseña de la Mac y tocá **Abrir**.

Listo: desde ahí esa versión abre normalmente, como cualquier app. No vence nunca.
No hace falta (ni conviene) desactivar Gatekeeper ni ninguna protección de macOS.

> En macOS Big Sur, Monterey o Ventura también sirve: clic derecho sobre Skald → **Abrir** → **Abrir**.

### Actualizar
- Skald te avisa con un cartel cuando hay una versión nueva (también en **Ajustes → Actualizaciones**).
- Tocá **Descargar**, abrí el archivo y arrastrá Skald a Aplicaciones **reemplazando** la anterior. Tus playlists no se pierden.
- Cada versión nueva es una app distinta para macOS: **la primera vez vas a tener que repetir "Abrir de todos modos"**.
- En Mac no se puede actualizar sola: eso necesita la firma "Developer ID" de Apple, que es paga.

### Qué funciona en Mac
Todo lo de Windows: búsqueda, playlists, importar Spotify/YouTube, IA, ecualizador, video hasta 4K,
letra y karaoke, radios, descargas sin internet y sincronización con tus otros dispositivos.

---

## iPhone (con SideStore)

### Por qué SideStore
Apple solo deja instalar apps propias gratis con un permiso que **vence a los 7 días**. Eso no se puede evitar
sin pagar. SideStore **renueva ese permiso desde el mismo iPhone**, por Wi-Fi, sin conectarlo a la compu cada semana.

Importante:
- **No es una instalación permanente.** Si pasan 7 días sin que SideStore renueve, Skald deja de abrir hasta que lo renueves.
- La cuenta gratuita permite **3 apps a la vez** (SideStore ocupa una) y **10 apps distintas por semana**.
- Para renovar o instalar hacen falta **Wi-Fi** (los datos móviles no sirven) y la app **LocalDevVPN** encendida.

### Qué necesitás
- iPhone con **iOS 15 o más nuevo** y con código de bloqueo.
- Tu **Apple ID** (sirve la cuenta gratuita; conviene una cuenta aparte, no es obligatorio).
- Una computadora **solo la primera vez**: tu PC con Windows o tu Mac.

### Paso 1 — Preparar el iPhone
1. Instalá **LocalDevVPN** desde la App Store.
2. Abrila, conectala y tocá **Permitir** cuando pida agregar la configuración VPN.

### Paso 2 — Instalar SideStore (una sola vez, con cable)
Seguí la guía oficial, que se actualiza seguido: https://docs.sidestore.io/docs/installation/prerequisites

Resumen para Windows:
1. Instalá **iTunes** (Microsoft Store o apple.com) o la app **Dispositivos de Apple**.
2. Descargá e instalá **iloader** (el `.msi`) desde la guía de SideStore.
3. Conectá el iPhone por cable, tocá **Confiar** en el iPhone y seguí iloader: inicia sesión con tu Apple ID, instala SideStore y su archivo de emparejamiento.
4. En el iPhone: **Ajustes → General → VPN y gestión de dispositivos** → tocá tu Apple ID → **Confiar**.
5. Si tu iPhone tiene iOS 16 o más: **Ajustes → Privacidad y seguridad → Modo de desarrollador** → activalo y reiniciá.

En Mac es igual pero con el `.dmg` de iloader (no hace falta iTunes).

### Paso 3 — Instalar Skald
1. En el iPhone abrí Safari y descargá **`Skald-<versión>.ipa`** de
   la página de descargas (https://github.com/MartinKwiq/skald-releases)
2. Con **LocalDevVPN conectada** y en Wi-Fi, abrí **SideStore → My Apps → +** y elegí el `.ipa` (está en Descargas).
3. SideStore lo firma con tu Apple ID y lo instala. Abrí Skald.

### Renovar cada semana (automático)
- SideStore intenta renovar solo en segundo plano. Para que funcione: **Wi-Fi + LocalDevVPN conectada**.
- Para asegurarte: una vez por semana abrí **SideStore → My Apps → Refresh All** (con la VPN encendida).
- En **My Apps** ves cuántos días le quedan a cada app.
- Si se venció: conectá la VPN y tocá Refresh All. Si ni así funciona, repetí el paso 2 con la computadora.

### Actualizar Skald en el iPhone
Skald te avisa cuando hay versión nueva. Descargá el `.ipa` nuevo y en SideStore → My Apps tocá Skald → instalalo encima (no se borran tus playlists).

### Qué funciona en iPhone
- ✅ Búsqueda (con "ver más"), playlists, importar Spotify y YouTube, favoritos.
- ✅ Música **sin publicidad**, **con la pantalla bloqueada** y en segundo plano, con controles en la pantalla bloqueada y auriculares.
- ✅ Video (hasta 1080p), letra y karaoke.
- ✅ IA (Descubrir, Mezcla), radios online, sincronización con la PC y el celular, descargas para escuchar sin internet.
- ⚠️ **Ecualizador:** en esta primera versión no cambia el sonido en iPhone (se guarda y se aplica en tus otros dispositivos).
- ❌ **CarPlay:** Apple solo lo habilita a cuentas pagas aprobadas.
- ❌ Video en 4K: el iPhone no reproduce el formato de YouTube que se usa en 4K dentro de la app; llega hasta 1080p.
