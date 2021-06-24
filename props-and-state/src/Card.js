const Card = (props) => {
   return (
      <div className="card">
         <h3>{ props.nama }</h3>
         <h5>{ props.pekerjaan }</h5>
      </div>
   )
}

export default Card