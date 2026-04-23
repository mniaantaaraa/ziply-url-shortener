import { drizzle } from "drizzle-orm/postgres-js";
import postgres from 'postgres';
import * as schema from './src/server/db/schema';
import * as dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    console.error("DATABASE_URL is not set");
    process.exit(1);
}

const client = postgres(connectionString, {
    prepare: false
});

const db = drizzle(client, { schema });

async function main() {
    try {
        console.log("Removing all users from database...");
        // Deleting from users will cascade to accounts and sessions due to schema definitions
        const result = await db.delete(schema.users);
        console.log("All users have been removed successfully.");
    } catch (error) {
        console.error("Failed to remove users:", error);
    } finally {
        await client.end();
    }
}

main();
