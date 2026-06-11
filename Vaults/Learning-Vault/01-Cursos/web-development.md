# Web Development - Full Stack

## Frontend

### React Patterns
```jsx
// Custom Hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);
  
  return { data, loading };
}
```

### CSS Architecture
- **BEM:** block__element--modifier
- **CSS Modules:** Scoped styles
- **Tailwind:** Utility-first

## Backend

### Express.js Structure
```
src/
├── controllers/
├── services/
├── repositories/
├── middleware/
└── routes/
```

### Database Patterns
- **Repository Pattern:** Separar lógica de acceso a datos
- **Unit of Work:** Transacciones complejas
- **Migration Strategy:** Versionado de esquema

## DevOps

- CI/CD con GitHub Actions
- Docker para desarrollo
- Monitoring con Prometheus

---

*Tags: #webdev #fullstack #react #node*
