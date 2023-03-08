import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link href="https://cdn.staticaly.com/gh/hung1001/font-awesome-pro/4cac1a6/css/all.css" rel="stylesheet" type="text/css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" defer></script>
      </body>
    </Html>
  )
}
