# docline-frontend (docline-frontend)

frontend

## Clone the project repo and install the dependencies
```bash
git clone git@github.com:ecuation/docline-spa.git docline-spa.development
cd docline-spa.development
npm install
```

## Copy the .env.example file name as .env
```bash
cp .env.example ./.env
```

###  Paste the API Oauth credentials in the .env file and set the correct API base URL
### Important
```bash
API_URL=http://yourapidomain.development/v1/api
API_CLIENT_ID=2
API_CLIENT_SECRET=PnsKKdsUsyQAVpAuvEEDrBAeXIWZmmPwZ2whrLaN
```


### Start the app in development mode
```bash
npm run dev
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
