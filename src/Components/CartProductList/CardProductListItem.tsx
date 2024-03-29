import { Products } from 'Utils/ProductsArrey'

type Props = {
    product: Products
    productCount: number
}
const CardProductListItem = ({ product, productCount }: Props) => {
    return (
        <div>
            {product.title} : {productCount}
        </div>
    )
}
export default CardProductListItem
