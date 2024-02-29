// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachImg, isTabClicked, reallyClicked} = props

  const {thumbnailAltText, thumbnailUrl, id} = eachImg

  const isButtonClicked = () => {
    isTabClicked(id)
  }

  const addStyling = reallyClicked ? '' : 'addpoacity'
  return (
    <li className="listItem">
      <button className="btnEl" type="button" onClick={isButtonClicked}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`altImgsmall ${addStyling}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
