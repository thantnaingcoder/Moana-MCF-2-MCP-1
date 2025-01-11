import PageLayout from "../PageLayout";
import MusicPlayer from "./music-player/music-player";

const OstSong = () => {
  return (
    <PageLayout>
      <div className=" my-10">
        <div className="px-5 md:px-0">
        <h1 className=" text-3xl md:text-5xl font-heading text-gradient mb-5 ">
          OST HiLIGHTS
        </h1>
        <p>Listen to Moana (Music from the Motion Picture) soundtrack on Spotify and Apple Music</p>
        </div>


       
       <MusicPlayer  />
      </div>
    </PageLayout>
  );
};

export default OstSong;



// export const songs = [
//     {
//       id: 1,
//       title: "How Far I'll Go",
//       artist: 'Lin-Manuel Miranda',
//       duration: '2:43',
//       audioUrl: 'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
//       coverUrl: '/placeholder.svg?height=400&width=400'
//     },
//     {
//       id: 2,
//       title: "You're Welcome",
//       artist: 'Lin-Manuel Miranda',
//       duration: '2:44',
//       audioUrl: 'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
//       coverUrl: '/placeholder.svg?height=400&width=400'
//     },
//     {
//       id: 3,
//       title: 'We Know the Way',
//       artist: "Opetaia Foa'i and Lin-Manuel Miranda",
//       duration: '3:12',
//       audioUrl: 'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
//       coverUrl: '/placeholder.svg?height=400&width=400'
//     },
//     {
//       id: 4,
//       title: 'Where You Are',
//       artist: 'Lin-Manuel Miranda',
//       duration: '3:05',
//       audioUrl: 'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
//       coverUrl: '/placeholder.svg?height=400&width=400'
//     }
//   ]
  
