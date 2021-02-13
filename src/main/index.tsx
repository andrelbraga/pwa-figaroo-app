import React from 'react'

import Img from '@/assets/media/manifest-icon-192.png'
import Imgs from '@/assets/media/manifest-icon-512.png'
const App = () => {
    return (
        <div className="d-flex">
           <img src={Img} />
            APP²
           <img src={Imgs} />
           {JSON.stringify(process.env.PUBLIC_URL)}
        </div>
    )
}
export default App