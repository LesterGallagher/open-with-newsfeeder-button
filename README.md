# Newsfeeder 

Newsfeeder button, link your rss or atom feed with newsfeeder.

## Install

```bash
npm i -D open-with-newsfeeder-btn
```

## Usage

With a script tag:

```html
https://unpkg.com/open-with-newsfeeder-btn/dist/open-with-newsfeeder-btn.min.js
```

With a bundler like webpack:

```javascript
const renderNewsfeederButton = require('open-with-newsfeeder-btn');
// or
import renderNewsfeederButton from 'open-with-newsfeeder-btn';
```

### Creating the button

```javascript
renderNewsfeederButton({ 
    container: document.body, 
    href: 'https://esstudio.site/feed.xml' 
});
```

You don't have to specify the href if you're website has an rss or atom link hint. For example:

```html
<link type="application/atom+xml" rel="alternate" href="https://esstudio.site/feed.xml" title="Echo Sierra Studio" />
```

[![Example of the "Open with Newsfeeder" button](https://imgur.com/DZxHWmv.png)](https://newsfeeder.esstudio.site/)

License: MIT


