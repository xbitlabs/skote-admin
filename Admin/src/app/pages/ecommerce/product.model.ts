// tslint:disable-next-line: class-name
export class arrayModel {
    key: string;
    value: string;
}

// tslint:disable-next-line: class-name
export class productModel {
    id: number;
    category: string;
    name: string;
    ratings = 0;
    reviewCount = 0;
    discount: number;
    oriRate: number;
    disRate: number;
    feature: string[];
    specification?: arrayModel[];
    images: string[];
    colorVariant: arrayModel[];
    price?: number;
    manufacture_name?: string;
    manufacture_brand?: string;
}

// tslint:disable-next-line: class-name
export class filterObject {
    discountRates: number[];
    maxVal: number;
    minVal: number;
}

export const productList: productModel[] = [
    {
        id: 1,
        category: 'T-shirts',
        name: 'Half sleeve T-shirt',
        ratings: 0,
        reviewCount: 0,
        discount: 10,
        oriRate: 450,
        disRate: 405,
        feature: ['Fit Type: Regular Fit', 'highest quality fabric', 'Suitable for all weather condition', 'Excellent Washing and Light Fastness'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'red'
        }],
        images: ['assets/images/product/img-1.png', 'assets/images/product/img-1a.png', 'assets/images/product/img-1b.png'],
        colorVariant: [{
            key: 'red',
            value: 'assets/images/product/img-1.png'
        },
        {
            key: 'black',
            value: 'assets/images/product/img-1.png'
        }]
    },
    {
        id: 2,
        category: 'T-shirts',
        name: 'Black T-shirt',
        ratings: 0,
        reviewCount: 0,
        discount: 20,
        oriRate: 225,
        disRate: 175,
        feature: ['Fit Type: Regular Fit', 'highest quality fabric', 'Suitable for all weather condition', 'Excellent Washing and Light Fastness'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'Light Blue'
        }],
        images: ['assets/images/product/img-2.png', 'assets/images/product/img-2a.png', 'assets/images/product/img-2b.png'],
        colorVariant: [{
            key: 'red',
            value: 'assets/images/product/img-2.png'
        },
        {
            key: 'yellow',
            value: 'assets/images/product/img-2a.png'
        },
        {
            key: 'green',
            value: 'assets/images/product/img-2b.png'
        }
        ]
    },
    {
        id: 3,
        category: 'T-shirts',
        name: 'Printed T-shirt',
        ratings: 0,
        reviewCount: 0,
        discount: 14,
        oriRate: 177,
        disRate: 152,
        feature: ['Fit Type: Regular Fit', 'highest quality fabric', 'Suitable for all weather condition', 'Excellent Washing and Light Fastness'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'black'
        }],
        images: ['assets/images/product/img-3.png', 'assets/images/product/img-3a.png', 'assets/images/product/img-3b.png'],
        colorVariant: [{
            key: 'blue',
            value: 'assets/images/product/img-3a.png'
        },
        {
            key: 'yellow',
            value: 'assets/images/product/img-3.png'
        }]
    },
    {
        id: 4,
        category: 'T-shirts',
        name: 'Plain T-shirt',
        ratings: 4,
        reviewCount: 152,
        discount: 5,
        oriRate: 150,
        disRate: 145,
        feature: ['Fit Type: Regular Fit', 'highest quality fabric', 'Suitable for all weather condition', 'Excellent Washing and Light Fastness'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'blue'
        }],
        images: ['assets/images/product/img-4.png', 'assets/images/product/img-4a.png', 'assets/images/product/img-4b.png'],
        colorVariant: [{
            key: 'pink',
            value: 'assets/images/product/img-4.png'
        },
        {
            key: 'blue',
            value: 'assets/images/product/img-4b.png'
        }]
    },
    {
        id: 5,
        category: 'T-shirts',
        name: 'Half sleeve T-Shirt',
        ratings: 0,
        reviewCount: 0,
        discount: 14,
        oriRate: 177,
        disRate: 152,
        feature: ['Fit Type: Regular Fit', 'highest quality fabric', 'Suitable for all weather condition', 'Excellent Washing and Light Fastness'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'pink'
        }],
        images: ['assets/images/product/img-5.png', 'assets/images/product/img-5a.png', 'assets/images/product/img-5b.png'],
        colorVariant: [{
            key: 'pink',
            value: 'assets/images/product/img-5b.png'
        },
        {
            key: 'green',
            value: 'assets/images/product/img-5a.png'
        }]
    },
    {
        id: 6,
        category: 'T-shirts',
        name: 'Full Sleeve T-shirt',
        ratings: 0,
        reviewCount: 0,
        discount: 50,
        oriRate: 200,
        disRate: 100,
        feature: ['Fit Type: Regular Fit', 'highest quality fabric', 'Suitable for all weather condition', 'Excellent Washing and Light Fastness'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'green'
        }],
        images: ['assets/images/product/img-6.png', 'assets/images/product/img-6a.png', 'assets/images/product/img-6b.png'],
        colorVariant: [{
            key: 'black',
            value: 'assets/images/product/img-6.png'
        },
        {
            key: 'yellow',
            value: 'assets/images/product/img-6a.png'
        }]
    }
];
