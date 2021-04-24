import Configuration from 'moostorejs/configuration'
import Request from 'moostorejs/lib/messages/request'
import RequestInterface from 'moostorejs/lib/messages/request_interface'
import Parameter from 'moostorejs/lib/parameter'
import ResponseProducts from './response_products'

export default class RequestProducts extends Request implements RequestInterface {
  parameters: Parameter

  interceptRequests: Array<String> = ['font', 'stylesheet', 'media', 'image', 'script']

  constructor(configuration: Configuration, parameters: Parameter) {
    super(configuration)
    this.parameters = parameters
  }

  getURL(): string {
    if (this.parameters.has('q')) {
      return this.parameters.get('q')
    }

    return ''
  }

  getData(): object {
    return {}
  }

  async postRequestCallback(page) {
    // await page.waitForSelector('img[class*="realImage"]')
    // await page.waitForNavigation()
    return true
  }

  async execute() {
    const html = await this.getPage()
    const response = new ResponseProducts()
    response.setData(html)

    return response
  }
}
