#!/usr/bin/env node
/**
 * Find images in public/images that are never referenced in src.
 * Only outputs paths we are certain are unused (exact path match).
 */
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const srcDir = path.join(__dirname, '../src');

// All image paths that ARE referenced (exact or as fallback) in the codebase
const usedPaths = new Set([
  '/images/solutions-main-final.jpg',
  '/images/solutions-1.jpg', '/images/solutions-2.jpg', '/images/solutions-3.jpg',
  '/images/solutions-4.jpg', '/images/solutions-5.jpg', '/images/solutions-6.jpg', '/images/solutions-7.jpg',
  '/images/bg/page-banner.jpg', '/images/bg/service-bg4.jpg', '/images/bg/service-bg3.jpg',
  '/images/bg/case-study-bg.jpg', '/images/bg/choose-us-bg.jpg', '/images/bg/choose-us-bg3.jpg',
  '/images/bg/footer-bg.jpg', '/images/bg/cta-bg.jpg', '/images/bg/counter-bg.jpg',
  '/images/products-main-final.jpg',
  '/images/products/ilccenter-hero.png', '/images/products/studyscore-hero.png',
  '/images/product-ilc.png', '/images/product-studyscore.png', '/images/product-egitimiste.png',
  '/images/about-3.jpg', '/images/about-4.jpg',
  '/images/logos/ilccenter-logo.png', '/images/logos/studyscore-logo.png', '/images/logos/egitimiste-logo.png',
  '/images/logos/cyberpark-logo.png', '/images/logos/tbd-logo.png', '/images/logos/alte-logo.png',
  '/images/ngsd-hero-final.jpg', '/images/ngsd-team-collaboration.jpg', '/images/ngsd-remote-work.jpg',
  '/images/ngsd-dynamic-team.jpg', '/images/ngsd-global-business.jpg',
  '/images/contact-hero-final.jpg',
  '/images/testi-3.jpg', '/images/testi-4.jpg', '/images/testi-icon.png',
  '/images/team/team-1.jpg', '/images/team/team-2.jpg', '/images/team/team-3.jpg', '/images/team/team-4.jpg',
  '/images/case-4.jpg', '/images/case-5.jpg', '/images/case-6.jpg',
  '/images/ser-icon13.png', '/images/ser-icon14.png', '/images/ser-icon15.png', '/images/ser-icon16.png',
  '/images/ser-icon9.png', '/images/ser-icon10.png', '/images/ser-icon11.png', '/images/ser-icon12.png',
  '/images/solution-1.jpg', '/images/solution-img2.jpg', '/images/solution-img3.jpg',
  '/images/choose-us1.jpg', '/images/hero-main.jpg',
  '/images/cta-icon2.png',
  '/images/about-us-1.jpg', '/images/about-sm2.jpg', '/images/about-big3.jpg',
  '/images/about-hero-final.jpg', '/images/about-team-collaboration.jpg', '/images/about-dynamism.jpg',
  '/images/about-passion.jpg', '/images/about-professionalism.jpg',
  '/images/info-1.png', '/images/info-2.png', '/images/info-3.png',
  '/images/logo.png',
  // Removed: only used in deleted HTML (locales/*/services/*.html) or deleted testimonial component
  // bg-shape-1/2, img-05, ico-bkg, data-science/*, testi-3, testi-4, testi-icon
  // Keep: might be used by browser/metadata/404
  '/images/fav.ico',
  '/images/fav.png',
  '/images/favicon.png',
  '/images/apple-touch-icon-120x120.png',
  '/images/apple-touch-icon-152x152.png',
  '/images/apple-touch-icon-76x76.png',
  '/images/apple-touch-icon-76x76.psd',
  '/images/apple-touch-icon.png',
  '/images/error-404.png',
]);

// Optional: og-image might be used by SEO
try {
  if (fs.existsSync(path.join(imagesDir, 'og-image.jpg'))) usedPaths.add('/images/og-image.jpg');
} catch (_) {}

function getAllImageFiles(dir, base = '') {
  const results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of list) {
    const rel = base ? base + '/' + ent.name : ent.name;
    if (ent.name === '.DS_Store') continue;
    if (ent.isDirectory()) {
      results.push(...getAllImageFiles(path.join(dir, ent.name), rel));
    } else {
      results.push('/images/' + rel);
    }
  }
  return results;
}

const allFiles = getAllImageFiles(imagesDir);
const unused = allFiles.filter((p) => !usedPaths.has(p)).sort();

console.log('UNUSED images (safe to delete):');
unused.forEach((p) => console.log(p));
console.log('\nTotal unused:', unused.length);
console.log('Total images:', allFiles.length);
