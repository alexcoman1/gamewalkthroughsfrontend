import Sidebar from "../../components/Sidebar"
import CommentSection from "../../components/CommentSection"
import TitleComponent from "../../components/TitleComponent"
import VideoPlayerComponent from "../../components/VideoPlayerComponent"
import WalkthroughTextComponent from "../../components/WalkthroughTextComponent"

export default function Kotor() {
  const kotorchapters = [
    {name: 'Character Creation', link: '/kotor'},
    {name: 'Prologue', link:'/kotor/prologue'}
    
  ]
  const content = (
  <>
  <h2>Character Creation</h2>
  <br/>
  <p>First you will be asked to create your character. You can choose between three classes: Soldier, Scout and Scoundrel.</p> 
  <p>Each class has its own advantages and disadvantages.</p> 
  <br />
  <p>The SOLDIER is the best class for combat but has the least amount of skill points.</p> 
  <p>The SCOUT is a good all-around class, but is not the best at anything.</p>
  <p>The SCOUNDREL is the best class for skills, but is not the best at combat.</p>
  <br />
  
  
  <p>You will also be asked to choose your characters attributes. The attributes are Strength, Dexterity, Constitution, Intelligence, 
      Wisdom and Charisma.</p>
  
  <p>STRENGTH is the most important attribute for combat</p>
  <p>DEXTERITY is the most important attribute for ranged combat</p>
  <p>CONSTITUTION is the most important attribute for health</p>
  <p>INTELLIGENCE is the most important attribute for skills</p>
  <p>WISDOM is the most important attribute for force powers</p> 
  <p>CHARISMA is the most important attribute for dialogue</p>
  <br/>

  <p>The character we will use in this Walkthrough will be a Scout which we will turn into a Jedi Sentinel later in the story. </p>

  <img className="pic" src="" alt="Character Creation"></img>

  <p>Feats are special abilities that your character can use. You will be asked to choose one feat at the start of the game. 
      The feat we will choose is the FLURRY feat. This feat allows you to attack three times in one turn. </p>

  <p>Skills are used to perform certain actions in the game. You will be asked to choose two skills at the start of the game. 
      The skills we will choose are TREAT INJURY and SECURITY. </p>   

  <p>Treat Injury is used to heal yourself and your party members. </p>
  <p>Security is used to open locked doors and containers. </p>
  </>
)

  return (
    <div>
    <div className="walkthrough-container">
    <Sidebar items={kotorchapters} />

    <div className="walkthrough-container-body">
      <TitleComponent title={"Star Wars: Knights of the old Republic Walkthrough"} />
      <VideoPlayerComponent videoSrc={""} videoTitle={"starwars"} />
      <WalkthroughTextComponent content={content} />
      <CommentSection pageIdentifier="/kotor" />
      
    </div>

    </div>
      
    </div>
  )
}
