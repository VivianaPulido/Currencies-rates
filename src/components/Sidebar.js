import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default function Sidebar() {
    const [currencies, setCurrencies] = useState([])
    useEffect(() => {
        const getCurrencies = async () => {
            const res       = await axios.get("https://api.exchangeratesapi.io/latest")
            const data      = await res.data.rates
            const arrData   = Object.keys(data)
            setCurrencies(arrData)
        }
        getCurrencies()
    }, [])
    return (
        <>
        {/* <div>
            <ul>
            {
                currencies.map((e,i) => {
                    return(
                        <li>
                            <Link key={i} to={`/${e}`}>
                                {e}
                            </Link>
                        </li>
                    )
                })
            }
            </ul>
        </div> */}

        
 

      
            <div class="bg-white shadow-xl rounded-lg w-28">
                <ul class="divide-y divide-gray-300">
                {
                currencies.map((e,i) => {
                    return(
                        <li class="p-4 hover:bg-gray-50 cursor-pointer">
                            <Link key={i} to={`/${e}`}>
                                {e}
                            </Link>
                        </li>
                    )
                })
            }
                </ul>
            </div>
       
 


     </>   
    )
}

