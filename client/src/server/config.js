import PocketBase from "pocketbase";

export const baseUrl = "http://127.0.0.1:8090";

export const client = new PocketBase(baseUrl);

// export const record = await client.collection('users').getOne('RECORD_ID');
