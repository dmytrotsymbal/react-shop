import Second_task_listItem from './Second_task_listItem'
import productsArrey from 'Utils/ProductsArrey'
import './Second_task_list.scss'
type Props = {
    addCardToCart: (price: number) => void
    currenscyNumber: number
    currenscyText: string
}

type Products = {
    id: number
    title: string
    description: string
    type: string
    copacity: string
    price: number
    images: string
    category?: string
}

const Sekond_task_list = ({
    addCardToCart,
    currenscyNumber,
    currenscyText,
}: Props) => {
    return (
        <div className="task_2_content">
            {productsArrey
                .filter((product) => product.category === 'task2')
                .map(
                    ({
                        id,
                        title,
                        description,
                        type,
                        copacity,
                        price,
                        images,
                    }: Products) => (
                        <div className="child" key={id}>
                            <Second_task_listItem
                                id={id}
                                title={title}
                                description={description}
                                type={type}
                                copacity={copacity}
                                price={price}
                                images={images}
                                addCardToCart={addCardToCart}
                                currenscyNumber={currenscyNumber}
                                currenscyText={currenscyText}
                            />
                        </div>
                    )
                )}
        </div>
    )
}
export default Sekond_task_list
