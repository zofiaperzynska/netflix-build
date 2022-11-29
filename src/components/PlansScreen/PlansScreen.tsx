import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";
import {
  StyledProfileScreen,
  StyledPlan,
  StyledScreenInfo,
} from "./PlansScreen.styled";

interface Product {
  active: boolean;
  description: string;
  images: string[];
  metadata: any;
  name: string;
  role: string;
  tax_code: string;
}

const PlansScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsCollectionReference = collection(db, "products");
      const productsSnapshot = await getDocs(productsCollectionReference);

      const products: Product[] = [];
      productsSnapshot.forEach((product) => {
        const productData = product.data() as Product;
        if (productData.active) {
          products.push(productData);
        }
      });
      setProducts(products);
    };

    fetchData();
    // .where("active", "==", true).get().then(QuerySnapshot => {
    //     const products = {};
    //     QuerySnapshot.forEach(async productDoc => {
    //     products[productDoc.id] = productDoc.data();
    //     })
  }, []);

  console.log(products);

  return (
    <StyledProfileScreen>
      {products.map((product) => {
        return (
          <StyledPlan key={product.name}>
            <StyledScreenInfo>
              <h5>{product.name}</h5>
              <h6>{product.description}</h6>
            </StyledScreenInfo>
            <button>Subscribe</button>
          </StyledPlan>
        );
      })}
    </StyledProfileScreen>
  );
};

export default PlansScreen;
