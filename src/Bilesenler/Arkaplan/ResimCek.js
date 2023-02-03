function ResimCek({durum}) {
    switch (durum) {
        case "Rainy":
            return <img className="arkaplan-resim" src="../../Resimler/yagmurlu.jpg" alt="yagmurlu"></img>
        case "Foggy":
            return <img className="arkaplan-resim" src="../../Resimler/sisli.jpg" alt="sisli"></img>     
        case "Snow":
            return <img className="arkaplan-resim" src="../../Resimler/karli.jpg" alt="karli"></img> 
        case "Clear":
            return <img className="arkaplan-resim" src="../../Resimler/gunesli.png" alt="gunesli"></img> 
        case "Stormy":
            return <img className="arkaplan-resim" src="../../Resimler/firtinali.jpg" alt="firtinali"></img> 
        case "Clouds":
            return <img className="arkaplan-resim" src="../../Resimler/bulutlu.png" alt="bulutlu"></img> 
            default:
                return <img className="arkaplan-resim" src="../../Resimler/rainbow.jpg" alt="rainbow"></img>
    }
}   export default ResimCek;