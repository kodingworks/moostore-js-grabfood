import Response from 'moostorejs/lib/messages/response'
import ResponseInterface from 'moostorejs/lib/messages/response_interface'
import Product from 'moostorejs/lib/entities/product'


export default class ResponseProducts
  extends Response
  implements ResponseInterface {
  getData() {
    const data = this.mapData(this.parseHTML(this.data))
    return data
  }

  mapData($) {
    const products = []

    const jsonData = JSON.parse($('#__NEXT_DATA__').get(0).children[0].data)

    const entityKey = Object.keys(
      jsonData.props.initialReduxState.pageRestaurantDetail.entities
    )[0]

    const productCategories =
      jsonData.props.initialReduxState.pageRestaurantDetail.entities[entityKey]
        .menu.categories

    productCategories.forEach((category) => {
      const product = {
        link: null,
        name: null,
        description: null,
        category: null,
        weight: null,
        condition: null,
        pictures: [],
        stock: null,
        price: {
          amount: 0,
          discount: 0,
        },
        rate: null,
      }
      ;(product['category'] = category.name),
        category.items.forEach((item) => {
          product['name'] = item.name
          product['pictures'] = [item.imgHref]
          product['description'] = item.description
        })

      products.push(new Product(product))
    })

    return products
  }
}
