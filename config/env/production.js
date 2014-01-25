'use strict';

module.exports = {
    db: "mongodb://torvpc-devweb.tor.nurun.com/beercaddy",
    app: {
        name: "Beer Caddy - Cheers!"
    },
    google: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/google/callback"
    }
}