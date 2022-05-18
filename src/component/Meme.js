import React from "react";

const Meme = () => {
  let [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  let [allMemeImages, setAllMemeImages] = React.useState({})

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => setAllMemeImages(data))
      return () => {
        
      }
  }, [])

  const getMemeImage = () => {
    let randomElement = allMemeImages.data.memes.random();
    let randomMemeUrl = randomElement.url;
    setMeme(prevState => {
      return {
        ...prevState,
        randomImage: randomMemeUrl
      }
    })
  }

  const handleInput = (event) => {
    const {name, value} = event.target;
    setMeme(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  return (
    <main>
      <div className="form">
        <input 
          type="text" 
          className="form--input"
          name="topText"
          placeholder="Top text"
          value={meme.topText}
          onChange={handleInput}
        />
        <input 
          type="text" 
          className="form--input"
          name="bottomText"
          placeholder="Bottom text"
          value={meme.bottomText}
          onChange={handleInput}
        />
        <button
          className="form--button"
          onClick={getMemeImage}
        >Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme;