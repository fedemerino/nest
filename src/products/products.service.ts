import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  products: Array<Product>;
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Nike Air Max 90',
        description:
          'The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle outsole, stitched overlays and classic, color-accented TPU plates. Retro colors celebrate the first generation while Max Air cushioning adds comfort to your journey.',
        price: 120,
        image:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7a1f1b1e-1b7a-4b1e-8b1a-0b6b6b6b6b6b/air-max-90-shoe-2XvXJG.jpg',
      },
    ];
  }
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll(limit=5,name) {
    return {
      status: 'success',
      products: this.products,
      limit: limit,
      name:name
    };
  }

  findOne(id: number) {
    return {
      status: 'success',
      product: this.products.find((product) => product.id === id),
    };
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
