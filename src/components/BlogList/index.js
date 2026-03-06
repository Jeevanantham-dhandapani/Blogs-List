import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import UserInfo from '../UserInfo'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogItemData: {}, isLoading: true}

  componentDidMount() {
    this.blogsApiUrl()
  }

  blogsApiUrl = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({blogItemData: updatedData, isLoading: false})
  }

  render() {
    const {blogItemData, isLoading} = this.state
    return (
      <div className="bg-container">
        <UserInfo />
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogItemData.map(items => (
            <BlogItem key={items.id} blogData={items} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
