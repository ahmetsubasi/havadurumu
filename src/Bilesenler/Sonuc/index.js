function index({ hava }) {
    if (!hava?.result?.length) return;
    return (
        <>
            <div className="sonuc">
                <div className="sehir">{hava.city}</div>
                <div className="detay">
                    <div className="derece"> {Math.round(hava.result[0].degree)} °C </div>
                    <div className="statu">{hava.result[0].description}</div>
                </div>
            </div>
        </>
    )
}
export default index;