import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [Data, setData] = useState({}) //{}to avoid website crash on multiple looping
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency]);
    console.log(Data);
    return Data
}

export default useCurrencyInfo