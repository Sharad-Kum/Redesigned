# sharad-kum.github.io

Static site. Pages: index, mywork, gtm / solution / delivery / ai, onepager, overview (audio), blogs (index),
Connecting the Dots editions, Signal Sheet editions, and the LinkedIn_Post_* articles.

- Styles: `style-v2.css` (light and dark follow the visitor's device setting). Subpage carousel: `subpage.js`. Blog index data: `blog-data.js`.
- Before every push run `python3 update_asset_versions.py` so every page asks for the latest CSS/JS.
- New Signal Sheet edition: add `signalsheet_images/signalsheet_edN.webp`, a `SignalSheet_EN.html` page, one line in `blog-data.js`, and update the first/last page arrows so the editions loop.
