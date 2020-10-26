# Docline-frontend
The frontend framework used for this web client is Quasar, a Vue.js component library similar as Vuetify.
See [Quasar page for more info](https://quasar.dev/quasar-cli/installation).

## Lest's clone the project repo and install the dependencies
```bash
git clone git@github.com:ecuation/docline-spa.git docline-spa.development
cd docline-spa.development
npm install
```

## Copy the .env.example file name as .env
```bash
cp .env.example ./.env
```

###  Paste the API Oauth credentials environment variable in the .env file and set the correct API_URL base url
### You can view the credentials directly in your MySQL table named oauth_clients, please copy the generated client credentials with the id: 2
```bash
API_URL=http://yourapidomain.development/v1/api
API_CLIENT_ID=2
API_CLIENT_SECRET=PnsKKdsUsyQAVpAuvEEDrBAeXIWZmmPwZ2whrLaN
```

### Start the app in development mode
```bash
npm run dev
```

### Once everything has been set up, the next necessary step is to login in your web app by using the following credentials
```bash
email: test-user@docline.development
password: secret123
```
Once you have been logged in you will be redirected automatically to the employees page.
