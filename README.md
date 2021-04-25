# MoostoreJS - Grab

This library is extension of MoostoreJS

## TOC

- [Requirement](#requirement)
- [Installation](#installation)
- [Usage](#usage)

## Requirement

- moostorejs: ^1.0.0

## Installation

## Usage

> Some data may be cant be fetched,
> this library is just fetch any data that existed on visited page, and it depend on site itself

### Init

firstly, import the base required library
```ts
import MoostoreJS from 'moostorejs'
import Grabfood from 'moostorejs-grabfood'
```

then we can init the object on a constant
```ts
const moostore = new MoostoreJS()

const grabfood = new Grabfood(moostore)
```

### Get Shop Detail From URL

Here is the sample how to get shop detail from an url

> Use full shop url like below

```ts
const shopURL = 'https://food.grab.com/id/en/restaurant/%F0%9F%8C%9Fkebab-turki-princess-kota-bambu-utara-delivery/6-C2EHV2WYJXVCEJ'

grabfood
  .shop()
  .getFromURL(shopURL)
  .then((response) => {
    const data = response.getData()
    console.log('Response : ', data)
  })
  .catch((err) => {
    // handle error in here
  })
```

### Get Product Lists From Shop URL

Here is the sample how to get product lists from shop url

> Use full shop url like below

```ts
const shopURL = 'https://food.grab.com/id/en/restaurant/%F0%9F%8C%9Fkebab-turki-princess-kota-bambu-utara-delivery/6-C2EHV2WYJXVCEJ'

grabfood
  .shop()
  .getProducts(shopURL)
  .then((response) => {
    const data = response.getData()
    console.log('Response : ', data)
  })
  .catch((err) => {
    // handle error in here
  })
```