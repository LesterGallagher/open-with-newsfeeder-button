import generateButton from './index.html'
import css from './index.css';
import svguri from './svguri';

console.log(generateButton, css);

const generate = ({ container, href }) => {
    if (typeof container === 'string') container = document.querySelector(container);
    const target = '_blank';
    const btn = container.appendChild(generateButton({ svguri }));
    const link = document.querySelector('link[type="application/rss+xml"],link[type="application/atom+xml"]');
    const url = link && link.getAttribute('href');
    href = href || url;
    if (!href) console.warn('No feed url specified and no rss or atom link (link[type="application/rss+xml"],link[type="application/atom+xml"]) found on the page.')
    btn.href = href && 'https://newsfeeder.esstudio.site/?feed=' + encodeURIComponent(href) || 'https://newsfeeder.esstudio.site';
};

if (typeof window !== 'undefined') {
    window.renderNewsfeederButton = generate;
}

module.exports = generate;
