const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');


const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'daily', priority: 1.0 },
  { url: '/contact', changefreq: 'daily', priority: 1.0 },
  { url: '/products', changefreq: 'daily', priority: 1.0 },
  { url: '/services', changefreq: 'daily', priority: 1.0 },
  { url: '/faq', changefreq: 'daily', priority: 0.8 },
  { url: '/features', changefreq: 'daily', priority: 0.8 },
  { url: '/fees', changefreq: 'daily', priority: 0.8 },
  { url: '/affiliate-policy', changefreq: 'monthly', priority: 0.8 },
  { url: '/aml-policy', changefreq: 'monthly', priority: 0.8 },
  { url: '/cookie-policy', changefreq: 'monthly', priority: 0.8 },
  { url: '/payment-policy', changefreq: 'monthly', priority: 0.8 },
  { url: '/privacy-policy', changefreq: 'monthly', priority: 0.8 },
  { url: '/refund-policy', changefreq: 'monthly', priority: 0.8 },
  { url: '/terms-of-use', changefreq: 'monthly', priority: 0.8 },
  { url: '/affiliates', changefreq: 'monthly', priority: 0.8 },
  { url: '/developers', changefreq: 'monthly', priority: 0.8 },
  { url: '/investors', changefreq: 'monthly', priority: 0.8 },
  { url: '/partners', changefreq: 'monthly', priority: 0.8 },
  { url: '/how-it-works', changefreq: 'monthly', priority: 0.8 },
  { url: '/security', changefreq: 'monthly', priority: 0.8 },
  { url: '/business', changefreq: 'monthly', priority: 0.8 },
  { url: '/personal', changefreq: 'monthly', priority: 0.8 },
  { url: '/freelance', changefreq: 'monthly', priority: 0.8 },
  { url: '/organization', changefreq: 'monthly', priority: 0.8 },
  { url: '/digital-assets', changefreq: 'daily', priority: 1.0 },
  { url: '/escrow', changefreq: 'daily', priority: 1.0 },
  { url: '/pay-for-me', changefreq: 'daily', priority: 1.0 },
  { url: '/transfer', changefreq: 'daily', priority: 1.0 },
  { url: '/gift-card', changefreq: 'daily', priority: 1.0 },
];

const stream = new SitemapStream({ hostname: 'https://barter-funds.com' });

streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
  fs.writeFileSync('./public/sitemap.xml', data)
);
