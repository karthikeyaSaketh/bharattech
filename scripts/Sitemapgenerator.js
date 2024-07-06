const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { pipeline } = require('stream');
const path = require('path');
const { promisify } = require('util');

const asyncPipeline = promisify(pipeline);

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://www.bharatteckleague.com' });
  const writeStream = createWriteStream(path.resolve(__dirname, '../public/sitemap.xml'));

  // List of URLs
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/bharattech', changefreq: 'daily', priority: 1.0 },
    { url: '/bharattech/AboutBTL', changefreq: 'monthly', priority: 0.8 },
    { url: '/bharattech/Events', changefreq: 'monthly', priority: 0.8 },
    { url: '/bharattech/Events/3dprinting', changefreq: 'monthly', priority: 0.8 },
    { url: '/bharattech/Events/roboticsjunior', changefreq: 'monthly', priority: 0.8 },
    { url: '/bharattech/Events/dronejunior', changefreq: 'monthly', priority: 0.8 },
    { url: '/bharattech/Events/renewableEnergy', changefreq: 'monthly', priority: 0.8 },
    { url: '/bharattech/Events/AISenior', changefreq: 'monthly', priority: 0.8 },
    { url: '/bharattech/Events/roboticsSenior', changefreq: 'monthly', priority: 0.8 },
    { url: '/bharattech/Events/droneSenior', changefreq: 'monthly', priority: 0.8 },
    { url: '/bharattech/Events/iot', changefreq: 'monthly', priority: 0.8 },
    { url: '/bharattech/Gallery', changefreq: 'monthly', priority: 0.8 },
    { url: '/bharattech/Registration', changefreq: 'monthly', priority: 0.8 },
    { url: '/bharattech/ContactUs', changefreq: 'monthly', priority: 0.8 },
    { url: '/bharattech/Registration/Juniors', changefreq: 'monthly', priority: 0.8 },
    { url: '/bharattech/Registration/Seniors', changefreq: 'monthly', priority: 0.8 },
    { url: '/bharattech/Registration/Juniors/Confirmation', changefreq: 'monthly', priority: 0.8 },
    { url: '/bharattech/Registration/Seniors/Confirmation', changefreq: 'monthly', priority: 0.8 },
  ];

  // Add each link to the sitemap stream
  links.forEach(link => sitemap.write(link));

  // End the sitemap stream
  sitemap.end();

  // Use pipeline to handle the stream
  try {
    await asyncPipeline(
      sitemap,
      writeStream
    );
    console.log('Sitemap written successfully');
  } catch (err) {
    console.error('Error generating sitemap:', err);
  }
}

generateSitemap().catch(err => {
  console.error('Error in script:', err);
});
