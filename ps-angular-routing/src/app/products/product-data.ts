import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {

  createDb(): { products: Product[]} {
    const products: Product[] = [
      {
        id: 1,
        productName: 'Leaf Rake',
        productCode: 'GDN-0011',
        releaseDate: 'March 19, 2018',
        description: 'Leaf rake with 48-inch wooden handle',
        price: 19.95,
        starRating: 3.2,
        imageUrl: 'assets/images/leaf_rake.png',
        category: 'Garden',
        tags: ['rake', 'leaf', 'yard', 'home']
      },
      {
        id: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2018',
        description: '15 gallon capacity rolling garden cart',
        price: 32.99,
        starRating: 4.2,
        imageUrl: 'assets/images/garden_cart.png',
        category: 'Garden'
      },
      {
        id: 5,
        productName: 'Hammer',
        productCode: 'TBX-0048',
        releaseDate: 'May 21, 2018',
        description: 'Curved claw steel hammer',
        price: 8.9,
        starRating: 4.8,
        imageUrl: 'assets/images/hammer.png',
        category: 'Toolbox',
        tags: ['tools', 'hammer', 'construction']
      },
      {
        id: 8,
        productName: 'Saw',
        productCode: 'TBX-0022',
        releaseDate: 'May 15, 2018',
        description: '15-inch steel blade hand saw',
        price: 11.55,
        starRating: 3.7,
        imageUrl: 'assets/images/saw.png',
        category: 'Toolbox'
      },
      {
        id: 10,
        productName: 'Video Game Controller',
        productCode: 'GMG-0042',
        releaseDate: 'October 15, 2018',
        description: 'Standard two-button video game controller',
        price: 35.95,
        starRating: 4.6,
        imageUrl: 'assets/images/xbox-controller.png',
        category: 'Gaming'
      },

      {
        id: 11,
        productName: 'Coredless Hand Drill',
        productCode: 'HJD-9756-Q',
        releaseDate: 'April 26, 2016',
        description: 'Standard .....',
        price: 45.99,
        starRating: 1.25,
        imageUrl: 'assets/images/cordless-hand-drill.png',
        category: 'Toolbox'
      },
      {
        id: 12,
        productName: 'Chainsaw',
        productCode: 'XGR-8988-Z',
        releaseDate: 'February 18, 2019',
        description: 'Standard .....',
        price: 75.99,
        starRating: 1.25,
        imageUrl: 'assets/images/chainsaw.png',
        category: 'Toolbox'
      },
      {
        id: 13,
        productName: 'Paint Roller',
        productCode: 'HZY-7527-F',
        releaseDate: 'April 26, 2016',
        description: 'Standard .....',
        price: 7.99,
        starRating: 1.25,
        imageUrl: 'assets/images/paint-roller.png',
        category: 'Toolbox'
      },
      {
        id: 14,
        productName: 'Paint Bursh',
        productCode: 'JZK-4724-K',
        releaseDate: 'February 18, 2019',
        description: 'Standard .....',
        price: 1.99,
        starRating: 1.25,
        imageUrl: 'assets/images/paint-brush.png',
        category: 'Toolbox'
      },
      {
        id: 15,
        productName: 'Chop Saw',
        productCode: 'PAS-3393-W',
        releaseDate: 'April 26, 2016',
        description: 'Standard .....',
        price: 109.99,
        starRating: 1.25,
        imageUrl: 'assets/images/chop-saw.png',
        category: 'Toolbox'
      },
      {
        id: 16,
        productName: 'Jack Hammer',
        productCode: 'RYQ-4465-U',
        releaseDate: 'February 18, 2019',
        description: 'Standard .....',
        price: 225.25,
        starRating: 1.25,
        imageUrl: 'assets/images/jack-hammer.png',
        category: 'Toolbox'
      },
      {
        id: 17,
        productName: 'Jigsaw',
        productCode: 'XMD-4376-B',
        releaseDate: 'April 26, 2016',
        description: 'Standard .....',
        price: 39.99,
        starRating: 1.25,
        imageUrl: 'assets/images/jigsaw.png',
        category: 'Toolbox'
      },
      {
        id: 18,
        productName: 'Axe',
        productCode: 'PTZ-4484-L',
        releaseDate: 'February 18, 2019',
        description: 'Standard .....',
        price: 27.99,
        starRating: 1.25,
        imageUrl: 'assets/images/axe.png',
        category: 'Toolbox'
      },
      {
        id: 19,
        productName: 'Ladder',
        productCode: 'FEY-5846-R',
        releaseDate: 'April 26, 2016',
        description: 'Standard .....',
        price: 69.99,
        starRating: 1.25,
        imageUrl: 'assets/images/ladder.png',
        category: 'Toolbox'
      },
      {
        id: 20,
        productName: 'Caulk Gun',
        productCode: 'ECD-2578-E',
        releaseDate: 'February 18, 2019',
        description: 'Standard .....',
        price: 11.99,
        starRating: 1.25,
        imageUrl: 'assets/images/caulk-gun.png',
        category: 'Toolbox'
      },
      {
        id: 21,
        productName: 'Table Saw',
        productCode: 'QJH-2338-D',
        releaseDate: 'April 26, 2016',
        description: 'Standard .....',
        price: 178.99,
        starRating: 1.25,
        imageUrl: 'assets/images/table-saw.png',
        category: 'Toolbox'
      },
      {
        id: 22,
        productName: 'Box Cutters',
        productCode: 'FNZ-5955-E',
        releaseDate: 'February 18, 2019',
        description: 'Standard .....',
        price: 4.99,
        starRating: 1.25,
        imageUrl: 'assets/images/box-cutters.png',
        category: 'Toolbox'
      },
      {
        id: 23,
        productName: 'Scissors',
        productCode: 'RLK-6265-V',
        releaseDate: 'April 26, 2016',
        description: 'Standard .....',
        price: 4.99,
        starRating: 1.25,
        imageUrl: 'assets/images/scissors.png',
        category: 'Toolbox'
      },
      {
        id: 24,
        productName: 'Screwdrivers',
        productCode: 'GXQ-9262-F',
        releaseDate: 'February 18, 2019',
        description: 'Standard .....',
        price: 8.99,
        starRating: 1.25,
        imageUrl: 'assets/images/screwdrivers.png',
        category: 'Toolbox'
      },
      {
        id: 25,
        productName: 'Clamp',
        productCode: 'ZUP-8553-M',
        releaseDate: 'April 26, 2016',
        description: 'Standard .....',
        price: 12.99,
        starRating: 1.25,
        imageUrl: 'assets/images/clamp.png',
        category: 'Toolbox'
      },
      {
        id: 26,
        productName: 'Safety Cone',
        productCode: 'YWS-9765-G',
        releaseDate: 'February 18, 2019',
        description: 'Standard .....',
        price: 18.99,
        starRating: 1.25,
        imageUrl: 'assets/images/safety-cone.png',
        category: 'Safety'
      },
      {
        id: 27,
        productName: 'Toolbox',
        productCode: 'ENX-3866-S',
        releaseDate: 'April 26, 2016',
        description: 'Standard .....',
        price: 36.99,
        starRating: 1.25,
        imageUrl: 'assets/images/toolbox.png',
        category: 'Toolbox'
      },
      {
        id: 28,
        productName: 'Wheelbarrow',
        productCode: 'FFT-9538-G',
        releaseDate: 'February 18, 2019',
        description: 'Standard .....',
        price: 49.99,
        starRating: 1.25,
        imageUrl: 'assets/images/wheelbarrow.png',
        category: 'Garden'
      },
      {
        id: 29,
        productName: 'Screws',
        productCode: 'CDK-9692-T',
        releaseDate: 'April 26, 2016',
        description: 'Standard .....',
        price: 6.95,
        starRating: 1.25,
        imageUrl: 'assets/images/screws.png',
        category: 'Toolbox'
      },
      {
        id: 30,
        productName: 'Shovel',
        productCode: 'BKT-5528-F',
        releaseDate: 'February 18, 2019',
        description: 'Standard .....',
        price: 14.95,
        starRating: 1.25,
        imageUrl: 'assets/images/shovel.png',
        category: 'Toolbox'
      },
      {
        id: 31,
        productName: 'Battery',
        productCode: 'ECN-8849-P',
        releaseDate: 'April 26, 2016',
        description: 'Standard .....',
        price: 14.99,
        starRating: 1.25,
        imageUrl: 'assets/images/battery.png',
        category: 'Toolbox'
      },
      {
        id: 32,
        productName: 'Hard Hat',
        productCode: 'NZR-4264-K',
        releaseDate: 'February 18, 2019',
        description: 'Standard .....',
        price: 31.99,
        starRating: 1.25,
        imageUrl: 'assets/images/hard-hat.png',
        category: 'Safety'
      },
      {
        id: 33,
        productName: 'Safety Vest',
        productCode: 'VAC-9263-M',
        releaseDate: 'April 26, 2016',
        description: 'Standard .....',
        price: 9.99,
        starRating: 1.25,
        imageUrl: 'assets/images/safety-vest.png',
        category: 'Safety'
      },
      {
        id: 34,
        productName: 'Hammer Drill',
        productCode: 'DUF-9384-A',
        releaseDate: 'February 18, 2019',
        description: 'Standard .....',
        price: 64.99,
        starRating: 1.25,
        imageUrl: 'assets/images/hammer-drill.png',
        category: 'Toolbox'
      },
      {
        id: 35,
        productName: 'Anvil',
        productCode: 'ZSF-3692-Z',
        releaseDate: 'April 26, 2016',
        description: 'Standard .....',
        price: 89.99,
        starRating: 1.25,
        imageUrl: 'assets/images/anvil.png',
        category: 'Toolbox'
      }
    ];
    return { products };
  }
}
