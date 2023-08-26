import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-lists">
      <img src={imageUrl} alt={appName} className="app-img" />
      <p className="name">{appName}</p>
    </li>
  )
}

export default AppItem
