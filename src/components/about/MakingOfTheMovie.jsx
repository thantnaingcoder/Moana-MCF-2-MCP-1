'use client'
import Wave from "../../assets/about-images/makingVideo.png";

import { YouTubeEmbed } from '@next/third-parties/google'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// Sample video data - replace with your actual video IDs
const videos = [
  { id: 'video1', title: 'Behind the Scenes - Part 1', videoId: 'ogfYd705cRs' },
  { id: 'video2', title: 'Behind the Scenes - Part 2', videoId: 'ogfYd705cRs' },
  { id: 'video3', title: 'Behind the Scenes - Part 3', videoId: 'ogfYd705cRs' },
]

export default function MakingOfTheMovie() {
  const [currentVideo, setCurrentVideo] = useState(0)

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length)
  }

  const previousVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        MAKING OF THE MOVIE
      </h1>
      
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gray-900 rounded-xl overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-video w-full">
              <YouTubeEmbed
                videoid={videos[currentVideo].videoId}
                height={400}
                params="controls=1&rel=0"
              />
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 flex items-center justify-between gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={previousVideo}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <h2 className="text-xl font-semibold">
            {videos[currentVideo].title}
          </h2>

          <Button
            variant="outline"
            size="icon"
            onClick={nextVideo}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">
          {videos.map((video, index) => (
            <Card
              key={video.id}
              className={`cursor-pointer transition-all ${
                currentVideo === index ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setCurrentVideo(index)}
            >
              <CardContent className="p-0">
                <div className="aspect-video relative group">
                  <YouTubeEmbed
                    videoid={video.videoId}
                    height={150}
                    params="controls=0"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

