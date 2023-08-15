import Sidebar from "../../components/Sidebar"
import CommentSection from "../../components/CommentSection"
import TitleComponent from "../../components/TitleComponent"
import VideoPlayerComponent from "../../components/VideoPlayerComponent"
import WalkthroughTextComponent from "../../components/WalkthroughTextComponent"

export default function Prologue() {
  const kotorchapters = [
    {name: 'Character Creation', link: '/kotor'},
    {name: 'Prologue', link:'/kotor/prologue'}
    
  ]
  const content = (
  <>
    <h1>damn</h1>
  </>
)

  return (
    <div>
    <div className="walkthrough-container">
    <Sidebar items={kotorchapters} />

    <div className="walkthrough-container-body">
      <TitleComponent title={"Star Wars: Knights of the old Republic Walkthrough"} />
      <VideoPlayerComponent videoSrc={"https://www.youtube.com/embed/qlPJ6Av6S0c"} videoTitle={"starwars"} />
      <WalkthroughTextComponent content={content} />
      <CommentSection />
    </div>

    </div>
      
    </div>
  )
}
