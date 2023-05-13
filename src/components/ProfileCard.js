import './profileCard.css'

function ProfileCard(props) {
  const {logo, name, social, desc} = props
  return (
    <div className='card'>
      <div className="card-top">
        <img src={logo} alt='' />
      </div>
      <div className="card-bottom">
        <h2>{name}</h2>
        <span>{social}</span>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default ProfileCard