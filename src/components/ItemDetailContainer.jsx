import React from 'react'
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [products, setProducts] =useState([]);
  console.log(products);

  useEffect(()=>{
    const db = getFirestore();
    const oneItem = doc(db, "Products",`${id}`);
    getDoc(oneItem).then((snapshot)=>{
      if (snapshot.exists()){
        const docs = snapshot.data();
        setProducts(docs);
      }
    })
  },[id])
  
  return (
    <>
    <ItemDetail products={products} id1={id}/>
    </>
  )
}

export default ItemDetailContainer

