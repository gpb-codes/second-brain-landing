---
title: "Async/Await en JavaScript"
tags: [javascript, async, snippets]
created: 2026-06-10
---

# Async/Await en JavaScript

Ejemplo basico de async/await:

```javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Uso
const user = await fetchUserData(123);
```

## Ventajas
- Codigo mas legible
- Manejo de errores con try/catch
- Facil de debuggear
