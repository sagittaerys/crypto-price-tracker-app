import { useState, useEffect } from "react";

function CryptoTracker(){
          const [coin, setCoin] = useState('bitcoin');
          const [price, setPrice] = useState(null); 


          useEffect(function(){
            fetch (`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`)
            .then(function (response){
              return response.json();
            })
            .then(function (crypto){
              setPrice(crypto[coin].usd);
            })
            .catch(function (err){
              console.error("Error loading data:", err);
            })
          }, [coin])

      return(
      <div className="main-body">
        <p>sagittaerys_</p>

            <div className="main-heading">

            <h1>Crypto Tracker</h1>


      <select className="selector" value={coin} onChange={function (e) {
        setCoin(e.target.value);
      }}>
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="dogecoin">Dogecoin</option>
        <option value="the-open-network">TON</option>
        <option value="ripple">Ripple(XRP)</option>
      </select>
      <h2>
        {coin.toUpperCase()} Price:{" "}
        {price !== null ? "$" + price : "Loading..."}
      </h2>

            </div>

    </div>
    )
      
}

export default CryptoTracker;