import { drizzle } from "drizzle-orm/postgres-js";
import postgres from 'postgres';
import * as schema from './src/server/db/schema';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    console.error("DATABASE_URL is not set");
    process.exit(1);
}

const client = postgres(connectionString, {
    prepare: false,
    connect_timeout: 10
});

const db = drizzle(client, { schema });

async function main() {
    try {
        console.log("Connecting to:", connectionString.split('@')[1] || "local");
        console.log("Fetching users...");
        const allUsers = await db.select().from(schema.users);

        console.log(`Found ${allUsers.length} users:`);
        allUsers.forEach(user => {
            console.log(`- Name: ${user.name || 'N/A'}`);
            console.log(`  Email: ${user.email}`);
            console.log(`  Pass (Hashed): ${user.password}`);
            console.log(`  Role: ${user.role}`);
            console.log('-------------------');
        });
    } catch (error) {
        console.error("Database connection failed:", error);
    } finally {
        await client.end();
    }
}

main();
