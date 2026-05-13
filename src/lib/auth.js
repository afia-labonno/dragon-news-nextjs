import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db('dragon-news-db');

export const auth = betterAuth({

    emailAndPassword: {
        enabled: true,
    },
     
    socialProviders : {
        google : {
            clientId : process.env.GOOGLE_CLIENT_ID,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET,
        },

          github : {
            clientId : process.env.GITHUB_CLIENT_ID,
            clientSecret : process.env.GITHUB_CLIENT_SECRET,
        },
    },

    database: mongodbAdapter(db, {

        client,
    }),

});