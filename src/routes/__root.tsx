import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-numeric text-gold text-sm tracking-[0.3em]">ERROR 404</p>
        <h1 className="font-display mt-4 text-6xl text-foreground">Route not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for has moved or no longer exists.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm border border-border-strong bg-foreground px-6 py-3 text-sm font-medium uppercase tracking-wider text-background transition-colors hover:bg-gold hover:text-gold-foreground"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-foreground">
          Something went wrong
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Please try again or return to the homepage.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-sm bg-foreground px-5 py-2.5 text-sm font-medium uppercase tracking-wider text-background transition-colors hover:bg-gold hover:text-gold-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-sm border border-border-strong bg-transparent px-5 py-2.5 text-sm font-medium uppercase tracking-wider text-foreground transition-colors hover:bg-surface"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1e1e1e" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "author", content: "Sangya Traders & Company" },
      { name: "geo.region", content: "IN-UP" },
      { name: "geo.placename", content: "Lucknow" },
      { property: "og:site_name", content: "Sangya Traders & Company" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@SangyaTraders" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Organization", "ConstructionBusiness", "LocalBusiness"],
          name: "Sangya Traders & Company",
          url: "https://sangyatraders.com",
          logo: "https://sangyatraders.com/logo.png",
          foundingDate: "2007",
          description: "Premier Indian infrastructure & EPC construction company specializing in telecom OFC, piling, metro, civil, roads, water, and electrical infrastructure. Trusted by L&T, AFCONS, and NHAI.",
          areaServed: {
            "@type": "Country",
            "name": "India"
          },
          address: {
            "@type": "PostalAddress",
            "addressLocality": "Lucknow",
            "addressRegion": "Uttar Pradesh",
            "addressCountry": "IN"
          },
          contactPoint: {
            "@type": "ContactPoint",
            "telephone": "+91-00000-00000",
            "contactType": "customer service"
          },
          industry: "Infrastructure & Civil Engineering",
          priceRange: "$$$$"
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
