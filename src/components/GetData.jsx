import React from 'react'
import datos from './data/data.json'

const GetData = () => {
    
    const getDatos = () => {
        return new Promise((resolve, reject) => {
            if (datos.lenght === 0) {
                reject(new Error("Arreglo Vacio"))
            }
            setTimeout(()=> {
                resolve(datos)
            },2000);
        });
    };

    async function fetchingData(){
        try {
            const datosFetched = await getDatos();
            console.log(datosFetched);
        } catch (err) {
            console.log(err);
        }
    }

    fetchingData();

  return (
    <div>
        <h3>Datos</h3>
        {datos.map((prod)=>{
            return (
                <div key={prod.id}>
                    <h2>Product: {prod.name}</h2>
                    <p>Description: {prod.description}</p>
                    <p>Stock: {prod.stock}</p>
                </div>
            )
        }
        )}
    </div>
  )
}

export default GetData