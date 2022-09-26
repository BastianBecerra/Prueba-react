import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState} from "react";

const Temblores = () => {
const[info, setinfo] = useState([]);
const[bucarSismo, setBuscarSismo] = useState("")

const handleSumit = (e) => {
    e.preventDefault()
}

const infoSismos = async () => {
    const url = 'https://api.gael.cloud/general/public/sismos'
    const response = await fetch(url)
    const data = await response.json()
    setinfo(data)
}

useEffect(() => {
    infoSismos();
}, []);

const handleSearch = (e) => {
    setBuscarSismo(e.target.value)
    console.log(e.target.value)
}

return (
    <div className="row">
        <nav className="navbar bg-light col-12 col-md-4 p-3">
            <label htmlFor="">Magnitud del Sismo</label>
            <form onSubmit={handleSumit}>
                <input onChange={handleSearch} type="text" placeholder='Busqueda'/>
            </form>           
        </nav>
        <section className="col-12 col-md-8">
            <ul className="list-group">
                {info.filter((temblor) => {
                    return temblor.Magnitud.toLowerCase().includes(bucarSismo.toLocaleLowerCase())
                }).map((temblor) => {
                    return(
                <li key={temblor.id} className="list-group-item">
                    {temblor.Magnitud} - {temblor.Fecha} - {temblor.RefGeografica}
                </li>)
                })}
            </ul>
        </section>
    </div>
    )
}


export default Temblores