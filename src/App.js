import React, {useState} from "react";
import "./index.css";
import Arkaplan from "./Bilesenler/Arkaplan";
import Arama from "./Bilesenler/Arama/AramaCubugu"
import Sonuc from "./Bilesenler/Sonuc"
function App() {
  const [havaDurumu, belirtHavaDurumu] = useState({});
  return (
    <section className="uygulama">
      <Arkaplan arkaplan={havaDurumu.result && havaDurumu.result[0].status}/>
      <div id="baslik">Hava Durumu</div>
      <Arama belirtHavaDurumu={belirtHavaDurumu}/>
      <Sonuc hava={havaDurumu}/>
    </section>
  );
}

export default App;
