import MoostoreJS from 'moostorejs';
import Grabfood from '..';
import * as fs from 'fs'
const cheerio = require('cheerio')

export default class Usage {
  main() {
    const moostore = new MoostoreJS
    const grabfood: Grabfood = new Grabfood(moostore)

    console.log('Fetch start')

    grabfood
      .shop()
      .getFromURL(
        'https://food.grab.com/id/en/restaurant/%F0%9F%8C%9Fkebab-turki-princess-kota-bambu-utara-delivery/6-C2EHV2WYJXVCEJ'
      ).then(result => {
        const data = result.getData()
        console.log(data)
      })
      .catch(err => {console.log('Usage', err)})

    /* const html = fs.readFileSync('log.html')
    const $ = cheerio.load(html)

    const shop = []

    shop['title'] = $($('#page-content h1').get(0)).text()

    shop['description'] = $($('#page-content h3').get(0)).text()

    const pictures = []
    pictures.push($('#page-content img').attr('src'))
    shop['pictures'] = pictures

    shop['rate'] = $('div[class*=ratingText]').text()

    console.log() */
  }
}

const usage = new Usage
usage.main()