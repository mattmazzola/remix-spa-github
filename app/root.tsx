import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"

import type { LinksFunction, MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
  return [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: "Remix SPA - GitHub Actions Deploy" },
    { name: "description", content: "Deploying a SPA configured Remix application using GitHub actions!" },
  ]
}

export const links: LinksFunction = () => {
  return [
    { rel: "icon", href: "favicon.ico" },
  ]
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <h1>Remix SPA Deployment</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/other">Other</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <h2>Links</h2>
          <ul>
            <li><a href="https://remix.run/docs/en/main/future/spa-mode" target="_blank" rel="noreferrer">Remix Docs: SPA Mode</a></li>
            <li><a href="https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages#deploying-github-pages-artifacts" target="_blank" rel="noreferrer">GitHub Docs: Pages Deployment</a></li>
            <li><a href="https://youtu.be/EO_-KwSslWQ" target="_blank" rel="noreferrer">Brooks Lybrand: Video Walkthrough</a></li>
            <li><a href="https://github.com/brookslybrand/remix-gh-pages" target="_blank" rel="noreferrer">Brooks Lybrand: Demo Repo</a></li>
          </ul>
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function HydrateFallback() {
  return <p>Loading...</p>
}
