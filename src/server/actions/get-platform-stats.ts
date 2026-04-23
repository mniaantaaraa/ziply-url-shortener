"use server";

import { db } from "@/server/db";
import { urls } from "@/server/db/schema";
import { sql } from "drizzle-orm";

export async function getPlatformStats() {
    try {
        const stats = await db
            .select({
                totalUrls: sql<number>`count(${urls.id})`,
                totalClicks: sql<number>`sum(${urls.clicks})`,
            })
            .from(urls);

        return {
            totalUrls: Number(stats[0]?.totalUrls || 0),
            totalClicks: Number(stats[0]?.totalClicks || 0),
        };
    } catch (error) {
        console.error("Error fetching platform stats:", error);
        return {
            totalUrls: 0,
            totalClicks: 0,
        };
    }
}
