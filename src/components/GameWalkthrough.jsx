import React, { useState } from 'react';
import Sidebar from "./Sidebar"
import CommentSection from "./CommentSection"
import TitleComponent from "./TitleComponent";
import VideoPlayerComponent from "./VideoPlayerComponent"
import WalkthroughTextComponent from './WalkthroughTextComponent';


export default function GameWalkthrough({ gameTitle, chapters, videoSrc }) {
  const [currentChapter, setCurrentChapter] = useState(chapters[0].name);

  return (
    <div className="walkthrough-container">
      <Sidebar items={chapters} onChapterClick={setCurrentChapter} />
      <div className="walkthrough-container-body">
        <TitleComponent title={gameTitle} />
        <VideoPlayerComponent videoSrc={videoSrc} videoTitle={gameTitle} />
        {chapters.find(chapter => chapter.name === currentChapter).content}
        <CommentSection pageIdentifier={`/${gameTitle}/${currentChapter}`} />
      </div>
    </div>
  );
}