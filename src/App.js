import React from 'react'
import BackgroundVideo from './components/BackgroundVideo'
import Text from './components/Text'


import './styles/app.scss'
import './styles/video.scss'
import './styles/text.scss'




const App = () => {
  return (
    <div>
      <BackgroundVideo />
      <Text />
    </div>
  )
}

export default App