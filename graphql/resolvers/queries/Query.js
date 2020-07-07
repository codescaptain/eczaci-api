const Query = {
    getDutyPharmacy: async (parent, args, {API_URI, API_CITY_URI, fetch, cheerio}) => {
        if (!args.town) {
            var datas = [];
            await fetch(API_CITY_URI.replace('{0}', args.city))
                .then(response => response.text())
                .then(body => {
                    const $ = cheerio.load(body);

                    $('figure').each(function (i, elem) {
                        datas[i] = {
                            city: args.city.charAt(0).toUpperCase() + args.city.slice(1),

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
            return datas;
        } else {
            var datas = [];
            await fetch(API_URI.replace('{0}', args.city).replace('{1}', args.town))
                .then(response => response.text())
                .then(body => {
                    const $ = cheerio.load(body);

                    $('figure').each(function (i, elem) {
                        datas[i] = {
                            city: args.city.charAt(0).toUpperCase() + args.city.slice(1),
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
            return datas;
        }
    }
}

module.exports = Query;