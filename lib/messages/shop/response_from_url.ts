import Response from 'moostorejs/lib/messages/response'
import ResponseInterface from 'moostorejs/lib/messages/response_interface'
import Shop from 'moostorejs/lib/entities/shop'

export default class ResponseFromURL
  extends Response
  implements ResponseInterface {
  getData() {
    const data = this.mapData(this.parseHTML(this.data))
    return data
  }

  mapData($) {
    const shop = {
      id: null,
      link: null,
      name: null,
      description: null,
      address: null,
      pictures: [],
      rate: null,
    }

    shop['title'] = $($('#page-content h1').get(0)).text()

    shop['description'] = $($('#page-content h3').get(0)).text()

    const pictures = []
    pictures.push($('#page-content img').attr('src'))
    shop['pictures'] = pictures

    shop['rate'] = $('div[class*=ratingText]').text()

    return new Shop(shop)
  }
}
