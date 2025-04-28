# Directory structure
### Follow this general structure as the service grows

hello-api/
├─ src/
│  ├─ routes/
│  │   └─ ping.routes.js
│  ├─ controllers/
│  ├─ models/          # (if using an ORM)
│  └─ server.js        # entry file (instead of index.js)
├─ tests/              # jest / vitest specs
├─ .env
├─ .gitignore
└─ package.json
