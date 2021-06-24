import imageComment from '../assets/img/default.jpg'

const TopComment = (props) => {
   return (
      <div className="comment-body d-flex px-1 py-2" style={{width: '100%'}}>
         <div className="mr-2 comment-img">
            <img style={{width: '50px'}} className="rounded-circle" src={imageComment} alt="Profil Comment" />
         </div>
         <div>
            <h5 className="h6">{props.name}</h5>
            <a className="text-dark underline-text" href="pages/post-04.html" style={{ fontSize: '14px' }}>{props.post}</a>
            <p style={{fontSize: '12px'}} className="font-weight-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae et minus at el...</p>
         </div>
      </div>
   )
}

export default TopComment