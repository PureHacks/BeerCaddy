'use strict';

module.exports = {
    db: "mongodb://torvpc-devweb.tor.nurun.com/beercaddy-test",
    port: 3001,
    app: {
        name: "Beer Caddy - Test"
    },
    google: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/google/callback"
    }
}