import { app, PORT } from './app.ts'

app.listen(PORT, () => { console.log(`http://localhost:${PORT}/api/`) })
