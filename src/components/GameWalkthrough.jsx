import React, { useState, useEffect } from 'react';
import Sidebar from "./Sidebar"
import CommentSection from "./CommentSection"
import TitleComponent from "./TitleComponent";
import VideoPlayerComponent from "./VideoPlayerComponent"
import WalkthroughTextComponent from './WalkthroughTextComponent';


export default function GameWalkthrough({ gameTitle, chapters, videoSrc }) {
  
  const [currentChapter, setCurrentChapter] = useState(chapters[0].name);
  const currentChapterContent = chapters.find(chapter => chapter.name === currentChapter).content




  return (
    <div className="walkthrough-container">
      <Sidebar items={chapters} onChapterClick={setCurrentChapter} />
      <div className="walkthrough-container-body">
        <TitleComponent title={`${gameTitle} - ${currentChapter}`} />
        <VideoPlayerComponent videoSrc={videoSrc} videoTitle={gameTitle} />
        <WalkthroughTextComponent content={currentChapterContent} />
        <CommentSection pageIdentifier={`/${gameTitle}/${currentChapter}`} />
      </div>
    </div>
  );
}