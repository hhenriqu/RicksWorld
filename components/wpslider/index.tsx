import { useState } from 'react'
import styled from 'styled-components'

const WpSliderWrapper = styled.section`
  position: relative;
  width: 100vw;

  div {
  }

  @media (min-width: 950px) {
    margin-top: 20px;
  }
`

const ButtonL = styled.button`
  position: absolute;
  top: 8%;
  left: 15%;
  background-color: #fff;
  color: orange;
  padding: 2px 2px;
  border-radius: 5px;
  font-size: 1rem;

  &:after {
    content: 'ANTERIOR';
    margin: 5px;
    margin-top: -10px;

    font-weight: 700;
    font-size: 14px;
  }

  @media (min-width: 950px) {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 400px;
    background-color: #fff;
    color: orange;
    padding: 20px 20px;
    border-radius: 5px;
    font-size: 1rem;

    &:after {
      content: '< ANTERIOR';
      margin: 5px;
      margin-top: -10px;

      font-weight: 700;
      font-size: 40px;
    }
  }
`
const ButtonR = styled.button`
  position: absolute;
  top: 8%;
  left: 85%;
  background-color: #fff;
  color: orange;
  padding: 2px 2px;
  border-radius: 5px;
  font-size: 1rem;

  &:after {
    content: 'PRÓXIMA';
    margin: 5px;
    margin-top: -10px;

    font-weight: 700;
    font-size: 14px;
  }

  @media (min-width: 950px) {
    position: absolute;
  top: 0;
  right: 0%;
  max-width: 500px;
  background-color: #fff;
  color: orange;
  padding: 20px 20px;
  border-radius: 5px;
  font-size: 1rem;

    &:after {
      content: 'PRÓXIMA >';
      margin: 5px;
      margin-top: -10px;

      font-weight: 700;
      font-size: 40px;
    }
`

const DownloadButton = styled.button`
  position: absolute;
  top: 70%;
  right: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  height: 50px;
  border: 1px solid white;
  border-radius: 5px;
  background-color: orange;

  padding: 10px;

  p {
    font-weight: 700;
    font-size: 28px;
  }

  img {
    width: 25px;
  }

  @media (min-width: 950px) {
    position: absolute;
    top: 83%;
    right: 0%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 460px;
    height: 100px;
    border: 1px solid white;
    border-radius: 5px;
    background-color: orange;

    padding: 10px;

    p {
      font-weight: 700;
      font-size: 56px;
    }

    img {
      width: 50px;
    }
  }
`

function WpSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    '/wallpapers/wallpaper_1.png',
    '/wallpapers/wallpaper_2.png',
    '/wallpapers/wallpaper_3.png'
  ]

  const Image = styled.img`
    display: ${props => (props.index === currentIndex ? 'block' : 'none')};

    width: 100vw;
    height: 200px;
    object-fit: cover;

    @media (min-width: 950px) {
      height: 600px;
    }
  `

  const handleButtonNext = () => {
    if (currentIndex === 2) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }
  const handleButtonPrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(2)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  function downloadWallpaper(url) {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'wallpaper.png')
        document.body.appendChild(link)
        link.click()
        link.parentNode.removeChild(link)
        console.log(currentIndex)
      })
  }

  return (
    <WpSliderWrapper>
      <div>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`wallpaper_${index}`}
            index={index}
          />
        ))}

        <ButtonL onClick={handleButtonPrevious}></ButtonL>
        <ButtonR onClick={handleButtonNext}></ButtonR>

        <DownloadButton
          onClick={() =>
            downloadWallpaper(`/wallpapers/wallpaper_${currentIndex + 1}.png`)
          }
        >
          <p>DOWNLOAD</p>
          <img src="icon_download_wp.png" alt="download" />
        </DownloadButton>
      </div>
    </WpSliderWrapper>
  )
}

export default WpSlider
