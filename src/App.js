import React, { useState } from 'react';
import './App.css';
import { allStories } from './data/storyData';

function App() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [currentNode, setCurrentNode] = useState('start');

  const handleChoice = (nextNode) => {
    setCurrentNode(nextNode);
  };

  const resetStory = () => {
    setSelectedStory(null);
    setCurrentNode('start');
  };

  if (!selectedStory) {
    return (
      <div className="app-wrapper">
        <header className="app-header">
          <h1 className="terminal-text">Neural Story Engine</h1>
        </header>
        <div className="story-picker">
          {Object.entries(allStories).map(([key, story]) => (
            <div key={key} className="story-option">
              <img src={story.thumbnail} className="story-thumbnail" alt={story.title} />
              <div className="option-content">
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <button className="init-btn" onClick={() => setSelectedStory(key)}>
                  Initialize Protocol
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const story = allStories[selectedStory];
  const node = story.nodes[currentNode];

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1 className="terminal-text">{story.title}</h1>
      </header>
      <main className="main-content">
        <div className="story-card">
          {node.image && <img src={node.image} className="scene-img" alt="Scene" />}
          <div className="story-text">{node.text}</div>
          <div className="choice-container">
            {node.choices.map((choice, i) => (
              <button 
                key={i} 
                className="choice-btn" 
                onClick={() => handleChoice(choice.nextNode)}
              >
                {choice.text}
              </button>
            ))}
          </div>
        </div>
      </main>
      <footer className="app-footer">
        <div className="action-group">
          <button className="back-menu-btn" onClick={resetStory}>Main Menu</button>
          <button className="reset-timeline-btn" onClick={() => setCurrentNode('start')}>Reset Timeline</button>
        </div>
      </footer>
    </div>
  );
}

export default App;