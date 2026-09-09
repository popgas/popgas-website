// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://popgas.com.br',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/cases'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
    ],
  },
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/planos': 0.95,
      '/recursos': 0.9,
      '/recursos/essencial': 0.85,
      '/recursos/gestao': 0.85,
      '/recursos/fiscal': 0.85,
      '/recursos/tech-ia': 0.85,
      '/recursos/revendas-de-gas': 0.85,
      '/contato': 0.7,
      '/sobre-nos': 0.6,
      '/blog': 0.6,
      '/faq': 0.6,
    };
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] ?? 0.5,
      lastmod: new Date().toISOString(),
    };
  },
};
