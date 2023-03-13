import { Card, Button } from '@mui/material'
import './Second_task_listItem.scss'
type Props = {
    id: number
    title: string
    description: string
    type: string
    copacity: string
    price: number
    images: string
    currenscyNumber: number
    currenscyText: string
    addCardToCart: (price: number) => void
}
const Second_task_listItem = ({
    id,
    title,
    description,
    type,
    copacity,
    price,
    images,
    addCardToCart,
    currenscyNumber,
    currenscyText,
}: Props) => {
    const newPrice = price * currenscyNumber

    return (
        <Card className="card_task_2">
            <h2>{title}</h2>
            <p>{description}</p>
            <h4>
                {newPrice} {currenscyText}
            </h4>
            <Button variant="outlined" onClick={() => addCardToCart(price)}>
                Add to cart
            </Button>
        </Card>
    )
}
export default Second_task_listItem
