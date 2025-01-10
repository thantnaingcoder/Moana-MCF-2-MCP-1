'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2,CirclePlus  } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

const tracks = [
  {
    id: 1,
    title: "How Far I'll Go",
    artist: "Lin-Manuel Miranda",
    duration: "2:43",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    description: "An empowering ballad about self-discovery and following your dreams.",
    year: 2016,
    genre: "Pop",
    cover: "https://i.ytimg.com/vi/cPAbx5kgCJo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBqwWc-sOq5SD_U6O-Vy1txfKQq6A"
  },
  {
    id: 2,
    title: "You're Welcome",
    artist: "Lin-Manuel Miranda",
    duration: "2:44",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    description: "A catchy, upbeat song showcasing the demigod Maui's accomplishments.",
    year: 2016,
    genre: "Pop",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBGGJrKtgiOk0olT-MmYoSVOXZs5634k09w&s"
  },
  {
    id: 3,
    title: "We Know the Way",
    artist: "Opetaia Fo'i and Lin-Manuel Miranda",
    duration: "2:45",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    description: "A powerful anthem celebrating Polynesian voyaging traditions.",
    year: 2016,
    genre: "World",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8j_Gsvuqcf68uhLD189qiiC-6Wl2OIfd2cg&s"
  },
  {
    id: 4,
    title: "I Am Moana (Song of the Ancestors)",
    artist: "Lin-Manuel Miranda and Opetaia Fo'i",
    duration: "3:04",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    description: "A moving song about identity and embracing one's heritage.",
    year: 2016,
    genre: "Ballad",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJy5G_uxt4xdVWsvgOEmo26HxpGLB4eUgQ6w&s"
  },
  {
    id: 5,
    title: "Where You Are",
    artist: "Lin-Manuel Miranda",
    duration: "3:33",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    description: "An ensemble number introducing the island of Motunui and its people.",
    year: 2016,
    genre: "Musical",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCV1PYHslYMDH5QNO0z7OO5KJzDWDyKJK7lw&s"
  }
]

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(tracks[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  
  const audioRef = useRef(null)

  

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(currentTrack.url)
    }

    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime)
    }

    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration)
    }

    const handleEnded = () => {
      handleNext()
    }

    audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
    audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata)
    audioRef.current.addEventListener('ended', handleEnded)

    return () => {
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate)
      audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audioRef.current.removeEventListener('ended', handleEnded)
    }
  }, [currentTrack])

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    audioRef.current.pause()
    audioRef.current = new Audio(currentTrack.url)
    audioRef.current.volume = volume
    if (isPlaying) {
      audioRef.current.play()
    }
  }, [currentTrack])

  useEffect(() => {
    audioRef.current.volume = volume
  }, [volume])

  const handleTrackClick = (track) => {
    setCurrentTrack(track)
    setIsPlaying(true)
    setShowDetails(currentTrack.id === track.id ? !showDetails : true)
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handlePrevious = () => {
    const currentIndex = tracks.findIndex(track => track.id === currentTrack.id)
    if (currentIndex > 0) {
      setCurrentTrack(tracks[currentIndex - 1])
    }
  }

  const handleNext = () => {
    const currentIndex = tracks.findIndex(track => track.id === currentTrack.id)
    if (currentIndex < tracks.length - 1) {
      setCurrentTrack(tracks[currentIndex + 1])
    }
  }

 
  return (
    <div className=" mx-auto p-6   ">
      <div className="flex gap-4 mb-6">
        <img
          src={currentTrack.cover}
          alt="Album Cover"
          className="w-32 h-32 rounded-lg object-cover"
        />
        <div className="flex flex-col justify-between py-2 flex-grow">
          <div>
            <h2 className="text-xl font-medium mb-1">
              {currentTrack.title}
            </h2>
            <p className="text-sm ">
              {currentTrack.artist}
            </p>
          </div>
          <div className=" flex  items-center justify-between ">
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className=""
                onClick={handlePrevious}
              >
                <SkipBack className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className=""
                onClick={handlePlayPause}
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5 text-blue-500" />
                ) : (
                  <Play className="h-5 w-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className=""
                onClick={handleNext}
              >
                <SkipForward className="h-5 w-5" />
              </Button>
              
            </div>
            <div className='flex items-center gap-4'>
            <CirclePlus className="h-5 w-5" />
             <p>Save on spotify</p>
            </div>


          </div>
        </div>
      </div>

      <div className="space-y-1">
        {tracks.map((track) => (
          <div key={track.id} className="space-y-2 bg-[#E5E5E5]">
            <div
              onClick={() => handleTrackClick(track)}
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer  ${
                currentTrack.id === track.id ? "bg-blue-300/20 text-blue-500" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-6 text-sm">{isPlaying && currentTrack.id === track.id ? <Pause className="h-5 w-5" /> : track.id }</span>
                <div>
                  <p className="font-medium">{track.title}</p>
                  <p className="text-sm ">{track.artist}</p>
                </div>
              </div>
              <span className="text-sm ">{track.duration}</span>
            </div>
         
          </div>
        ))}
      </div>
    </div>
  )
}


