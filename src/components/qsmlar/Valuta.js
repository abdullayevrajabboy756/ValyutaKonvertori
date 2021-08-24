import React,{useState} from 'react';

function Valuta(props) {
    const [many,setMany]=useState('USD');
    const [number,setNumber]=useState("***");
    function valutaC(e) {
        if (many==="USD") {
            setNumber(e.target.value*10630)
        }
        else if (many==="EUR") {
            setNumber(e.target.value*12000)
        }
        else if (many==="RUB") {
            setNumber(e.target.value*110)
        }
        else if (many==="GBP") {
            setNumber(e.target.value*13900)
        }
        else if (many==="CHF") {
            setNumber(e.target.value*11000)
        }
        else if (many==="JPY") {
            setNumber(e.target.value*80)
        }
        else if (many==="KZT") {
            setNumber(e.target.value*13)
        }
    }
    function Tanlash(e) {
        setMany(e.target.value);
    }
    return (
        <div className="">
            <h3 className="d-flex align-items-center justify-content-center">
                Valyuta konvertori
            </h3>
        <div className='d-flex'>
            <div className="col-md-3 offset-3">
                <select onChange={Tanlash} className="form-control "  name="select">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="RUB">RUB</option>
                    <option value="GBP">GBP</option>
                    <option value="CHF">CHF</option>
                    <option value="JPY">JPY</option>
                    <option value="KZT">KZT</option>
                </select>
                <input onChange={valutaC} type="number" placeholder="1"  className="form-control mt-3"/>
            </div>
            <div className="col-md-4 summa d-flex justify-content-between">
                <div className=""> {number}</div>
                <div className=""><b>UZS</b> </div>
            </div>
        </div>
        </div>
    );
}

export default Valuta;