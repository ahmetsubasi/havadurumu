import React, { useState } from "react";

function AramaCubugu({ belirtHavaDurumu }) {
    const [araParametre, belirtAraParametre] = useState("");

    const api = {
        base: `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${araParametre}`,
        key: "apikey 3pZ1kToINZGcJqpOJcRo8d:5gMbk3tZQFOz0t17wZj19l",
    }

    const ara = (e) => {
        if (e.key === "Enter") {

            fetch(api.base, {
                method: 'GET', // GET, POST, PATCH, DELETE
                headers: {
                    "Authorization": api.key,
                    "Content-Type": "application/json"
                }
            })
            .then((veri) => veri.json())
            .then((sonuc) => {
                belirtAraParametre("")
                belirtHavaDurumu(sonuc)
            })
        }
    }
    return (
        <div className="arama">
            <input
                className="arama-input"
                type="text"
                placeholder="Şehir.."
                onChange={(e) => belirtAraParametre(e.target.value)}
                value={araParametre}
                onKeyDown={ara}
                >
            </input>
        </div>
    )
}

export default AramaCubugu;