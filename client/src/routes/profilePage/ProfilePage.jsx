import React, { useState } from 'react'
import './profilePage.css'
import Image from '../../components/image/Image'
import Gallery from '../../components/gallery/gallery';
import Collections from '../../components/collections/Collections';

const ProfilePage = () => {
  const [type, setType] = useState("saved");

  return (
    <div className='profilePage'>
      <Image 
        className="profileImg" 
        path="/general/noAvatar.png" 
        alt="profile"
        w={100}
        h={100}
      />
      <h1 className='profileName'>John Doe</h1>
      <span className='profileUsername'>@johndoe</span>
      <div className='followCounts'>10 followers - 20 following</div>
      <div className='profileInteractions'>
        <Image path="/general/share.svg" alt="share" />
        <div className='profileButtons'>
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path="/general/more.svg" alt="more" />
      </div>
      <div className='profileOptions'>
        <span
          className={type === "created" ? "active" : ""}
          onClick={() => setType("created")}
        >
          Created
        </span>

        <span 
          className={type === "saved" ? "active" : ""}
          onClick={() => setType("saved")}
        >
          Saved
        </span>
      </div>
      {type === "created"  ? <Gallery/> : <Collections/>}
    </div>
  )
}

export default ProfilePage