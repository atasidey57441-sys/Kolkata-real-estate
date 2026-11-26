# Ganga Crest Realty

Static front end, no build step.

```
index.html          page markup
css/base.css        tokens, reset, layout, forms, footer
css/components.css  motion, cards, dialog, property detail page
css/enhancements.css search, trending, floor plan, price table
js/config.js         business phone number (edit this)
js/data.js          property catalogue, colours, icons
js/app.js           helpers, filters, listing grid, contact form
js/ui.js            header effects, reveal animations, nav state
js/property.js      detail page, gallery, EMI, enquiry
js/enhancements.js  scene art, availability, trending, wishlist
assets/icons/       favicon
```

Run locally: `python3 -m http.server 8080` then open http://localhost:8080

Scripts are plain (non-module) files that share one scope, so keep the load order in index.html.
Put real photos in `assets/images/` and replace the `scene()` calls in `js/enhancements.js` with `<img>` tags.
