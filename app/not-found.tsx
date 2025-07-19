'use client'

import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
      <Image
        src="/images/logo.svg"
        width={64}
        height={64}
        alt={`${APP_NAME} logo`}
        priority
      />

      <div className="mt-6 w-full max-w-md p-6 rounded-xl shadow-lg bg-card text-center">
        <h1 className="text-4xl font-bold mb-3 text-foreground">404 — Not Found</h1>
        <p className="text-muted-foreground mb-6">
          Sorry, we couldn&apos;t find the page you were looking for.
        </p>

        <Button
          style={{ backgroundColor: "#0171E0" }}
          variant="outline"
          className="text-white w-full"
          onClick={() => (window.location.href = "/")}
        >
          ⬅ Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;