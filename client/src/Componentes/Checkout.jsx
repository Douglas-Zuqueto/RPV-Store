import React, { useState, useEffect, useRef, useContext } from "react";
import AppContext from "../context/AppContext";
import Alert from '@mui/material/Alert';


function Checkout() {
  const [paid, setPaid] = useState(false);
  const [loaded, setLoaded] = useState(false);
  
  let paypalRef = useRef();

  const product = {
    price: 1.00,
    description: 'Produto teste'
  }

  useEffect(() => {
    const script = document.createElement('script');
    const id = 'AW_QUXlBCYfnXfO5CbDHYhZ1niqfYSZ9XEzw7hvGrq0QJlb5vXAbe6IZWYGVniYqrVup3-mlU9vgkMOt';
    script.src = `https://www.paypal.com/sdk/js?currency=BRL&client-id=${id}`;
    script.addEventListener('load', () => setLoaded(true));
    document.body.appendChild(script);

    return () => {
      script.removeEventListener('load', () => setLoaded(true));
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (loaded) {
      function loadButtonsAndLogicAboutPayment() {
        setTimeout(() => {
          window.paypal
            .Buttons({
              createOrder: (data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      description: product.description,
                      amount: {
                        currency_code: 'BRL',
                        value: product.price
                      }
                    }
                  ]
                })
              }, 
              onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                setPaid(true);
                console.log(order);
              },
            })
            .render(paypalRef.current);
        }, 200); // Adicionando um pequeno atraso para garantir que o script do PayPal seja carregado
      }
      loadButtonsAndLogicAboutPayment();
    }
  }, [loaded, product.description, product.price]);

  // eslint-disable-next-line no-unused-vars
  const {cartItems} = useContext(AppContext);

  return (
    <div>
      {paid ? (
        <div style={{ marginTop: 10 }}>
        <Alert severity="success">Compra Finalizada com sucesso!</Alert>
      </div>
      ) : (
        <div>
          
          <h1>{product.description} por R${product.price}</h1>
          <div ref={paypalRef}> oiii</div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
