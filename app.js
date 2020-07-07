const express = require('express');
const fetch = require('node-fetch');
const cheerio = require('cheerio');

const API_URI = 'https://www.haberturk.com/nobetci-eczaneler/{0}/{1}';
const API_CITY_URI = 'https://www.haberturk.com/nobetci-eczaneler/{0}';

const app = express();

app.get('/get/:city', async (req, res) => {
    var city = req.params.city;

    var datas = [];
    await fetch(API_CITY_URI.replace('{0}', city))
        .then(response => response.text())
        .then(body => {
            const $ = cheerio.load(body);

            $('figure').each(function (i, elem) {
                datas[i] = {
                    city: city.charAt(0).toUpperCase() + city.slice(1),
                    town: $(this)
                        .find('div[class=title] h3 a span')
                        .text()
                        .match(/(.*) \(([^)]+)\)/)[2],
                    name: $(this)
                        .find('div[class=title] h3 a span')
                        .text()
                        .match(/(.*) \(([^)]+)\)/)[1],
                    address: $(this)
                        .find('figcaption p')
                        .first()
                        .text()
                        .split('Adres: ')[1],
                    phone: $(this)
                        .find('figcaption p')
                        .last()
                        .text()
                        .split('Telefon: ')[1],
                }
            })
        })
    res.send(datas)
})

app.get('/get/:city/:town', async (req, res) => {
    var city = req.params.city;
    var town = req.params.town;

    var datas = [];
    await fetch(API_URI.replace('{0}', city).replace('{1}', town))
        .then(response => response.text())
        .then(body => {
            const $ = cheerio.load(body);

            $('figure').each(function (i, elem) {
                datas[i] = {
                    city: city.charAt(0).toUpperCase() + city.slice(1),

                    town: $(this)
                        .find('div[class=title] h3 a span')
                        .text()
                        .match(/(.*) \(([^)]+)\)/)[2],
                    name: $(this)
                        .find('div[class=title] h3 a span')
                        .text()
                        .match(/(.*) \(([^)]+)\)/)[1],
                    address: $(this)
                        .find('figcaption p')
                        .first()
                        .text()
                        .split('Adres: ')[1],
                    phone: $(this)
                        .find('figcaption p')
                        .last()
                        .text()
                        .split('Telefon: ')[1],
                }
            })
        })
    res.send(datas)
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('sunucu ayakta efenim')
})