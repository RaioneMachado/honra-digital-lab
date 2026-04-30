import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Valhalla Foco — 63 Dias Para Reconstruir Sua Disciplina" },
      { name: "description", content: "O método exato usado por mais de 10.000 homens para quebrar o ciclo da mediocridade e reconstruir disciplina, foco e propósito em 63 dias." },
      { name: "author", content: "Valhalla Foco" },
      { property: "og:title", content: "Valhalla Foco — 63 Dias Para Reconstruir Sua Disciplina" },
      { property: "og:description", content: "O método exato usado por mais de 10.000 homens para quebrar o ciclo da mediocridade e reconstruir disciplina, foco e propósito em 63 dias." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Valhalla Foco — 63 Dias Para Reconstruir Sua Disciplina" },
      { name: "twitter:description", content: "O método exato usado por mais de 10.000 homens para quebrar o ciclo da mediocridade e reconstruir disciplina, foco e propósito em 63 dias." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1ec49b54-ee38-4b7f-b87b-c8ef8807ef75/id-preview-2dcd0157--2c2976ec-25de-490d-854d-0b4f37b4b45f.lovable.app-1777290529124.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1ec49b54-ee38-4b7f-b87b-c8ef8807ef75/id-preview-2dcd0157--2c2976ec-25de-490d-854d-0b4f37b4b45f.lovable.app-1777290529124.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800;900&family=Oswald:wght@400;500;600;700&display=swap" },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
  return <Outlet />;
}
