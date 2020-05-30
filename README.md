# NodeJS Viber Bot

This is a simple NodeJS based Viber bot that replies with the text message you send it.

## Prerequisites

To use this application, you need to have the following things:

1. An Active Viber Account

    Download the app here: https://www.viber.com/en/download/

2. An Active Viber Bot Account

    Create one here: https://developers.viber.com

3. The Ngrok application to allow tunneling for local development

    Download the application here: https://ngrok.com/download

## Usage

-   Clone the repository

```bash
git clone https://github.com/devaku/nodejs-viber-bot
cd nodejs-viber-bot
```

-   Then after that, install the node_modules using the provided script

```bash
npm run install-server
```

-   Once the installation is done, make sure to create a .env file, from the given sample.

-   To run the application locally, ngrok must be running in the background. Make sure the PORT you provide (from the .env file), is the same PORT you use when running ngrok.

```bash
ngrok http 8080
```

-   Once everything is set up just run the following script to get the application started

```bash
npm run debug
```

-   Open up your Viber bot application, and start a conversation to see it work :D

---

## Credits

-   This Node.js application was created by Alejo Kim Uy.
-   If you're interested in working with me, you can find my details on my LinkedIn.
    -   https://www.linkedin.com/in/alejo-kim-uy-612319108/
-   If you want to see my other coding projects, you can find them on my Github.
    -   https://github.com/devaku?tab=repositories
