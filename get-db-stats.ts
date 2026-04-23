import { db } from "./src/server/db";
import { users, urls } from "./src/server/db/schema";
import { count, sql } from "drizzle-orm";

async function getStats() {
    const [userCount] = await db.select({ value: count() }).from(users);
    const [urlCount] = await db.select({ value: count() }).from(urls);
    const [clickCount] = await db.select({ value: sql<number>`sum(${urls.clicks})` }).from(urls);

    console.log(JSON.stringify({
        users: userCount.value,
        urls: urlCount.value,
        clicks: clickCount.value || 0
    }, null, 2));

    process.exit(0);
}

getStats().catch(err => {
    console.error(err);
    process.exit(1);
});
