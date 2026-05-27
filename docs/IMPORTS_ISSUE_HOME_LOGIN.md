# Análisis: fallos de importación en Home.tsx y Login.tsx

**Propósito:** explicar por qué fallan las importaciones en las páginas `Home` y `Login` sin modificar el código.

**Archivos revisados**
- [src/components/pages/Home.tsx](src/components/pages/Home.tsx#L1-L40)
- [src/components/pages/Login.tsx](src/components/pages/Login.tsx#L1-L40)
- [src/components/atoms/ActionButton.tsx](src/components/atoms/ActionButton.tsx#L1-L40)
- [src/components/atoms/TextInput.tsx](src/components/atoms/TextInput.tsx#L1-L40)

---

**Observación principal**: las importaciones que fallan usan una ruta relativa incorrecta. Desde las páginas ubicadas en `src/components/pages/` se está intentando subir y volver a entrar en `components` (es decir, `../components/atoms/...`), lo que genera una ruta inválida (p. ej. `src/components/components/atoms/...`) y provoca el error de módulo no encontrado.

Ejemplos tomados del código:

- En `Home.tsx`:

```ts
import { ActionButton } from '../components/atoms/ActionButton';
```

- En `Login.tsx`:

```ts
import { TextInput } from '../components/atoms/TextInput';
import { ActionButton } from '../components/atoms/ActionButton';
```

Por la estructura del proyecto, los archivos reales están en `src/components/atoms/ActionButton.tsx` y `src/components/atoms/TextInput.tsx`. Desde `src/components/pages/` la ruta relativa correcta hacia la carpeta `atoms` es `../atoms/...` (subir a `src/components/` y luego bajar a `atoms`). Las rutas actuales intentan resolver `src/components/components/atoms/...`, que no existe.

---

**Otras posibles causas (no observadas como primarias aquí, pero a considerar)**
- Diferencias de mayúsculas/minúsculas en nombres de fichero: en sistemas Unix la ruta es sensible a mayúsculas. En Windows suele no fallar por esto, pero si el proyecto se despliega a Linux puede causar errores.
- Exportaciones por defecto vs. exportaciones nombradas: si un componente fuera `export default` pero se importara con llaves `{ ... }` (o viceversa), fallaría con un error de importación. En los archivos revisados, `ActionButton` y `TextInput` están exportados como `export const`, por lo que las importaciones nombradas son correctas.
- Configuración de `tsconfig.json` (`baseUrl`/`paths`): si el código espera resolver rutas absolutas tipo `src/...` se necesita configurar `baseUrl`/`paths` o usar alias de Vite. No es el caso en los fragmentos revisados.
- Extensiones faltantes: TypeScript/ESM suele resolver sin escribir `.tsx`, así que esto no es la causa aquí.

---

**Recomendaciones (no aplicadas al código):**
- Corregir las rutas relativas en las importaciones desde `pages` a `../atoms/ActionButton` y `../atoms/TextInput`.
- Verificar consistencia de nombres de archivo (mayúsculas/minúsculas) si se despliega a Linux.
- Si prefieres rutas absolutas, añadir `baseUrl`/`paths` en `tsconfig.json` y configurar los alias en Vite.
- Ejecutar el bundle/servidor de desarrollo (`npm run dev`) y revisar el mensaje de error completo en consola; suele indicar la ruta que no pudo resolverse.

---

Si quieres, puedo:
- Generar un PR con las correcciones de importación (no solicitado ahora).
- Ejecutar `npm run dev` y copiar aquí el error exacto para más diagnóstico.

---

Fecha: 2026-05-27
