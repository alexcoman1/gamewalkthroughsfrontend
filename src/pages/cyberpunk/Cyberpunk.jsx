import Sidebar from "../../components/Sidebar"
import CommentSection from "../../components/CommentSection"
import TitleComponent from "../../components/TitleComponent"
import VideoPlayerComponent from "../../components/VideoPlayerComponent"
import WalkthroughTextComponent from "../../components/WalkthroughTextComponent"
import GameWalkthrough from "../../components/GameWalkthrough"
import cyberpunkData from "../../gameData/cyberpunk"



export default function Cyberpunk() {
  return <GameWalkthrough {...cyberpunkData} />
}

// export default function Cyberpunk() {
//   const cyberpunkchapters = [
//     {name: 'Prologue', link: '/cyberpunk'},
//     {name: 'Chapter 1', link:'/cyberpunk/chapter1'}
    
    
//   ]
//   const content = (
//   <>
  
//   </>
// )

//   return (
//     <div>
//     <div className="walkthrough-container">
//     <Sidebar items={cyberpunkchapters} />

//     <div className="walkthrough-container-body">
//       <TitleComponent title={"Cyberpunk 2077"} />
//       <VideoPlayerComponent videoSrc={""} videoTitle={"cyberpunk"} />
//       <WalkthroughTextComponent content={content} />
//       <CommentSection pageIdentifier="/cyberpunk" />
      
//     </div>

//     </div>
      
//     </div>
//   )
// } 