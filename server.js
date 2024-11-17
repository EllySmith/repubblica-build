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
      const link = $(element).find('.entry__title a').attr('href');

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
        articles.push({ title, body, imageUrl, id, importance, link });
      }
    });

    const menuItems = [];

    $('ul.hot-topics__list li a').each((index, element) => {
      const linkText = $(element).text().trim();
      const linkAddress = $(element).attr('href');

      if (linkText && linkAddress) {
        menuItems.push({ text: linkText, url: linkAddress });
      }
    });

    const pageState = {
      articles,
      menuItems,
    };

    res.json(pageState);
  } catch (error) {
    console.error('Error fetching page:', error);
    res.status(500).send('Error fetching page');
  }
});

app.get('/scrape', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const title = $('story__title').text();
    const date = $('time.story__date').attr('datetime') || $('time.story__date').text();
    const body = $('story__summary').text();

    res.json({
      title,
      date,
      body,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to scrape the website' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

