const Product = ({title, tutor}) => {
   return (
      <div className='product' >
         <h3>{title}</h3>
         <p>{tutor}</p>
      </div>
   )
}

export default Product