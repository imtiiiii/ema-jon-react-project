import { useEffect, useState } from "react"
import { retriveCart } from "../utilities/localStorage"

const useCart = products => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (products.length) {
            const saveData = retriveCart();
            let previousItems = [];
            for (const key in saveData) {
                const search = products.find(product => product.key === key)
                if (search) {
                    const quantity = saveData[key];
                    search.quantity = quantity;
                    previousItems.push(search);
                }
                const temparr = [...previousItems];
                setCart(temparr);
            }
        }
    }, [products])
    console.log("cart->", cart);
    return [cart, setCart];
}

export default useCart;