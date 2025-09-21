import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import type { CartProduct } from "../types/cart";

export async function createOrder(userId: string | null, items: CartProduct[]) {
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const foodGst = +(subtotal * 0.05).toFixed(2);
  const totalAfterFoodGst = subtotal + foodGst;
  const deliveryGst = +(totalAfterFoodGst * 0.18).toFixed(2);
  const total = +(totalAfterFoodGst + deliveryGst).toFixed(2);

  const orderDoc = {
    userId,
    items: items.map((i) => ({
      id: i.id,
      name: i.name,
      price: i.price,
      quantity: i.quantity,
      subtotal: i.price * i.quantity,
    })),
    subtotal,
    foodGst,
    deliveryGst,
    total,
    status: "placed",
    createdAt: serverTimestamp(),
  };

  const ref = await addDoc(collection(db, "orders"), orderDoc);
  return { id: ref.id, ...orderDoc };
}
