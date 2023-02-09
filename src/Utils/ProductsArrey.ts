type Products = {
    id: number
    title: string
    description: string
    type: string
    copacity: string
    price: number
    images: string
}

const productsArrey: Products[] = [
    {
        id: 1,
        title: 'iPhone 14 pro Max',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '256 gb',
        price: 1400,
        images: '/images/iphone13.jpg',
    },
    {
        id: 2,
        title: 'iPhone 14 pro',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '128 gb',
        price: 1299,
        images: '/images/iphone13-pink.jpg',
    },
    {
        id: 3,
        title: 'iPhone 14',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '64 gb',
        price: 1150,
        images: '/images/iphone12.jpg',
    },
    {
        id: 4,
        title: 'iPhone 13 pro Max',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '512 gb',
        price: 1200,
        images: '/images/iphone12-pro.jpg',
    },
    {
        id: 5,
        title: 'iPhone 13 pro',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '256 gb',
        price: 1200,
        images: '/images/iphone11.jpg',
    },
    {
        id: 6,
        title: 'iPhone 13',
        description: 'bebebebeb',
        type: 'phone',
        copacity: '128 gb',
        price: 1200,
        images: '/images/iphone11-y.jpg',
    },
]

export default productsArrey