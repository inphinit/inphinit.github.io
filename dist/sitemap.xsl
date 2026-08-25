<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">

<xsl:output method="html" encoding="UTF-8" indent="yes"/>

<xsl:template match="/">
  <html>
    <head>
      <title>Inphinit Sitemap</title>
      <style>
        *, ::after, ::before {
          box-sizing: border-box;
        }
        html, html * {
          scrollbar-color: #D9D9D9 #F2F2F2;
        }
        html {
          background: #f7f8fa;
          color: #1c2024;
        }
        body {
          background: inherit;
          color: inherit;
        }
        body *, body ::after, body ::before {
          border: 0 solid #C8C5C5;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          margin: 0;
          padding: 3rem;
        }
        h1 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        .box {
          border-width: thin;
          box-shadow: 0 .05rem .15rem #00000006,0 .05rem .1rem #0000000d;
          border-radius: .25rem;
        }
        table {
          border-collapse: collapse;
          min-width: 600px;
          width: 100%;
        }
        th {
          text-align: left;
          border-bottom-width: thin !important;
          white-space: nowrap;
          text-transform: uppercase;
          font-weight: bold;
        }
        th:last-child, td:last-child {
          width: 75px;
          text-align: center;
        }
        th, td {
          padding: .75rem;
          border-right-width: thin !important;
        }
        tr > :last-child {
          border-right-width: 0 !important;
        }
        tbody > tr > :last-child {
          font-size: 0.85rem;
          white-space: nowrap;
        }
        tbody > tr:hover {
          background: #42424a !important;
        }
        thead {
          font-size: .8rem;
        }
        tbody > tr:nth-child(2n) {
          background: #0000000d;
        }
        a {
          color: #0366d6;
          word-break: break-all;
        }
        a:hover {
          text-decoration: underline;
        }
        @media (prefers-color-scheme: dark) {
          html, html * {
            scrollbar-color: #606066 #19181E;
          }
          html {
            background: #1c1b22;
            color: #fff;
          }
          body *, body ::after, body ::before {
            border-color: #414856;
          }
          thead {
            background: #2a2a2f;
          }
          tbody > tr:nth-child(2n) {
            background:#fffFFF0D;
          }
          a {
            color: #ff7a7a;
          }
        }
      </style>
    </head>
    <body>
      <h1>Inphinit Sitemap (<xsl:value-of select="count(//sitemap:url)"/> URLs)</h1>
      <div class="box">
      <table>
        <thead>
        <tr>
          <th>URL</th>
          <th>Last Modified</th>
        </tr>
        </thead>
        <tbody>
        <xsl:for-each select="//sitemap:url">
          <tr>
            <td>
              <a href="{sitemap:loc}">
                <xsl:value-of select="sitemap:loc"/>
              </a>
            </td>
            <td>
              <xsl:value-of select="sitemap:lastmod"/>
            </td>
          </tr>
        </xsl:for-each>
        </tbody>
      </table>
      </div>
    </body>
  </html>
</xsl:template>

</xsl:stylesheet>