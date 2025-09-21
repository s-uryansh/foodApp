import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import type { CartProduct } from "../types/cart";

export function useMenu() {
  const [menu, setMenu] = useState<Omit<CartProduct, "quantity">[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

useEffect(() => {
  const q = query(collection(db, "menu"), orderBy("name", "asc"));
  const unsub = onSnapshot(q, (snapshot) => {
    const items: any[] = [];
    snapshot.forEach((doc) => items.push({ id: doc.id, ...doc.data() }));
    setMenu(items);
    setLoading(false);
  }, (err) => {
    console.error("menu onSnapshot error:", err);
    setError(err);
    setLoading(false);
  });
  return () => unsub();
}, []);

  return { menu, loading, error };
}
