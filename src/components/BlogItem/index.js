import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, topic, author} = blogData
  return (
    <Link to={`/blogs/${id}`}>
      <div className="bg-container">
        <div className="list-container">
          <img src={imageUrl} alt={`image${id}`} className="main-img" />
          <div className="content-container">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="avatar-container">
              <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
