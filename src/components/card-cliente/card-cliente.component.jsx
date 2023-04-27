import { Card } from 'semantic-ui-react'

const CardCliente = ({cliente}) =>{
    const {name, surname, age, birthdate} = cliente
return <Card color="yellow" header= {`${name} ${surname}`.toUpperCase() } extra={`Edad: ${age} Fecha Nac: ${birthdate}`}/>
}   

export default CardCliente