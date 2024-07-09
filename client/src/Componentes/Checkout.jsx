import React, { useState, useEffect, useRef } from "react";

function Checkout() {
  const [paid, setPaid] = useState(false);
  const [loaded, setLoaded] = useState(false);
  
  let paypalRef = useRef();

  const product = {
    price: 16.70,
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

  return (
    <div>
      {paid ? (
        <div>
          <h1>Parabéns você comprou o produto</h1>
        </div>
      ) : (
        <div>
          <h1>{product.description} por R${product.price}</h1>
          <div ref={paypalRef}></div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
