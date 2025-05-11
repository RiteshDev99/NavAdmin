import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("681f999a00222916bfd9");

export const account = new Account(client);