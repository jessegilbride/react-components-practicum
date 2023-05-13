import ProfileCard from "./components/ProfileCard";
import './app.css'

function App () {
  console.clear()

  function importImages(requiredImages) {
    let images = {}
    requiredImages.keys().forEach((item) => {
      images[item.replace('./', '')] = requiredImages(item)
    })
    return images
  }

  const imagesCollection = importImages(require.context('./images', false, /\.jpg$/))
  // console.log(images)

  const imageSources = Object.values(imagesCollection)/* .map(src => src.replace()) */
  // console.log(imageSources)

  // attempt to dynamically create variables from imageSources to be able to iteratively add to the profileCardData for image sources
  /* function createVariablesFromImageSources(imageSources) {
    for (let i=0; i<imageSources.length; i++) {
      const variableName = 'let' + i
      const variableValue = imageSources[i]
      eval(variableName + ' = ' + JSON.stringify(variableValue) + ';')
      console.log(this)
    }
  }
  createVariablesFromImageSources() */

  const profileCardData = [
    {
      // logo: './images/alexa.jpg',
      logo: imageSources[0],
      name: 'Alexa',
      social: '@alexa99',
      desc: 'I\'ll help you buy stuff on Amazon'
    },
    {
      logo: imageSources[1],
      name: 'Cortana',
      social: '@cortana12',
      desc: 'Personal assistant by Microsoft'
    },
    {
      logo: imageSources[2],
      name: 'Google',
      social: '@daGooz',
      desc: 'You know were watching you'
    },
    {
      logo: imageSources[3],
      name: 'Siri',
      social: '@siri44',
      desc: 'I don\'t get a lot of updates anymore, lol'
    }
  ]

  const profileCards = profileCardData.map((card, index) => {
    return <ProfileCard logo={card.logo} name={card.name} social={card.social} desc={card.desc} key={index} />
  })

  return (
    <>
      <h1>Personal Digital Assistants</h1>
      <div className='cards-container'>
        {profileCards}
      </div>
    </>
  )
}

export default App;