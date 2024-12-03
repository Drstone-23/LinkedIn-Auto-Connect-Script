# LinkedIn Auto-Connect Script

Este repositorio contiene un script automatizado que permite enviar solicitudes de conexión en LinkedIn de manera continua mientras se realiza un desplazamiento automático por la página.

⚠ **Nota importante:** Automatizar acciones en LinkedIn puede violar sus términos y condiciones de uso. Este script se proporciona con fines educativos. Usa bajo tu propia responsabilidad.

---

## 🚀 ¿Cómo funciona?

El script ejecuta los siguientes pasos:  
1. Busca todos los botones visibles en la página de LinkedIn.  
2. Filtra los botones que contienen las palabras **"Conectar"** o **"Connect"** y que no estén deshabilitados.  
3. Envía solicitudes de conexión a los perfiles visibles.  
4. Desplaza la página automáticamente para cargar más perfiles.  
5. Repite el proceso hasta que no haya más botones visibles.

El script simula comportamiento humano al agregar un retraso aleatorio entre acciones para minimizar el riesgo de detección.

---

## 🛠️ Cómo usar el script

Sigue estos pasos para ejecutar el script desde la consola del navegador en LinkedIn:

1. Abre [LinkedIn](https://www.linkedin.com/) e inicia sesión.
2. Navega a la sección "**Mi red**" (o cualquier página donde aparezcan personas a las que puedas conectar).
3. Abre las herramientas de desarrollo de tu navegador:
   - En **Chrome** o **Edge**: Haz clic derecho en la página y selecciona "Inspeccionar".
   - Luego ve a la pestaña **Consola**.
4. Copia todo el contenido del archivo `script.js` de este repositorio.
5. Pega el contenido en la consola del navegador.
6. Presiona **Enter** para ejecutar el script.

---

## 📋 Detalles técnicos

- **Retrasos**:
  - Tiempo entre acciones: 2 a 4 segundos (aleatorio para cada solicitud).
  - Tiempo de desplazamiento automático: 1.5 segundos.
- **Compatibilidad**:
  - Funciona en navegadores basados en Chromium (Chrome, Edge, Brave).
  - Debe ejecutarse en páginas donde los botones de "Conectar" o "Connect" sean visibles.

---

## ⚠ Advertencias y buenas prácticas

1. **Riesgo de bloqueo**: LinkedIn podría detectar la automatización si realizas demasiadas solicitudes en poco tiempo. Usa el script con moderación.
2. **Proporciónalo con fines educativos**: Este script no debe usarse con fines comerciales o malintencionados.
3. **Lee los términos de LinkedIn**: Familiarízate con las políticas de uso de LinkedIn antes de usar el script.
4. **Simula comportamiento humano**: Usa retrasos razonables y evita abusar del script.

---

## 📝 Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## 💡 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar este script, no dudes en abrir un issue o enviar un pull request.

---

🎉 ¡Gracias por visitar este repositorio!
