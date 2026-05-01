import React from 'react';

const StoryNode = ({ node, onChoice }) => {
  if (!node) return <div>Loading story...</div>;

  return (
    <div className="story-card">
      {node.image && (
        <div className="image-container">
          <img src={node.image} alt="Story Scene" className="scene-img" />
        </div>
      )}
      <div className="content-container">
        <p className="story-text">{node.text}</p>
        <div className="choice-container">
          {node.choices.map((choice, index) => (
            <button 
              key={index} 
              className="choice-btn" 
              onClick={() => onChoice(choice.nextNode)}
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryNode;