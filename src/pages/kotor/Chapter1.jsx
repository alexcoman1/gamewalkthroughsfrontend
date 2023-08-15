import Sidebar from "../../components/Sidebar"
import CommentSection from "../../components/CommentSection"
import TitleComponent from "../../components/TitleComponent"
import VideoPlayerComponent from "../../components/VideoPlayerComponent"
import WalkthroughTextComponent from "../../components/WalkthroughTextComponent"

export default function Chapter1() {
  const kotorchapters = [
    {name: 'Prologue', link: '/kotor'},
    {name: 'Chapter 1', link:'/kotor/chapter1'}
    
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
      <TitleComponent title="Chapter 1" />
      <VideoPlayerComponent videoSrc={""} videoTitle="starwars" />
      <WalkthroughTextComponent content={content} />
      <CommentSection pageIdentifier="/kotor/chapter1" />
    </div>

    </div>
      
    </div>
  )
}
