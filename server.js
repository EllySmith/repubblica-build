const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/fetch-page', async (req, res) => {
  try {
    const response = await axios.get('https://www.repubblica.it/');
    const $ = cheerio.load(response.data);
    const articles = [];
    $('article.entry').each((index, element) => {
      const body = $(element).find('.entry__title a').text().trim();

      const title = $(element).find('.entry__overtitle').text().trim().toUpperCase();

      const imageUrl = $(element).find('.entry__media picture source').first().attr('srcset') || '';
      const cleanImageUrl = imageUrl.replace(/(\?webp)$/, '');

      const id = Math.floor(Math.random() * (1 -  100000));
      let importance;
      if (index % 10 === 4) {
        importance = 'breaking';
      } else {
        importance = 'low';
      }

      if (title && body && cleanImageUrl) {
        articles.push({ title, body, imageUrl, id, importance });
      }
    });

    const pageState = {
      articles: articles,
    };

    res.json(pageState);
  } catch (error) {
    console.error('Error fetching page:', error);
    res.status(500).send('Error fetching page');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

