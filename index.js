const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

const PORT = 7000;
const url = "https://kun.uz/";

axios(url).then((response) => {
  const html = response.data;
  const $ = cheerio.load(html);
  const article = [];

  $(".small-news", html).each(function () {
    const text = $(this).find(".small-news__title").text();
    const data = $(this).find(".news-meta").text();
    const img = $(this).find("img").attr("src");

    article.push({
      text,
      img,
      data,
    });
  });
  console.log(article);
});

app.listen(PORT, () => console.log("server ishladi"));
