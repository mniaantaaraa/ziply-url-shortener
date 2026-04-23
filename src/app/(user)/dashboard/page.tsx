import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UrlShortenerForm } from "@/components/urls/url-shortener-form";
import { UserUrlsTable } from "@/components/urls/user-urls-table";
import { getUserUrls } from "@/server/actions/urls/get-user-urls";
import { auth } from "@/server/auth";
import { Metadata } from "next";
import Link from "next/link";
import { BarChart, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Dashboard | Ziply",
  description: "Dashboard page",
};

export default async function DashboardPage() {
  const session = await auth();

  // Get user's URLs
  const response = await getUserUrls(session?.user.id as string);
  const userUrls = response.success && response.data ? response.data : [];

  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">Dashboard</h1>

      <div className="grid gap-8">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Create New Short URL</CardTitle>
            <CardDescription>
              Enter a long URL to create a shortened link. You can also
              customize the short code.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <UrlShortenerForm />
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-dashed">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle>Your URLs</CardTitle>
              <CardDescription>
                Manage and track your shortened URLs.
              </CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild className="rounded-full gap-2 font-bold bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
              <Link href="/dashboard/stats">
                <BarChart className="size-4 text-primary" />
                <span className="hidden sm:inline">View Detailed Analytics</span>
                <span className="sm:hidden">Stats</span>
                <ChevronRight className="size-4 opacity-50" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <UserUrlsTable urls={userUrls} />
          </CardContent>
        </Card>

        {process.env.NODE_ENV === "development" &&
          session?.user.role === "admin" && (
            <div className="text-center mt-4">
              <Link
                href={"/admin"}
                className="text-sm text-muted-foreground hover:text-primary underline"
              >
                Admin Tools
              </Link>
            </div>
          )}
      </div>
    </>
  );
}
