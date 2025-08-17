/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ghformacion.com', // tu dominio en producción
  generateRobotsTxt: true,           // genera robots.txt automáticamente
  sitemapSize: 5000,                  // útil si la web crece mucho
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [
    '/private/*',   // ejemplo si quieres excluir rutas
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://ghformacion.com/sitemap.xml',
    ],
  },
};
