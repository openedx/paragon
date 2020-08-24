import React, { useState } from 'react';
import TransitionReplace from './index';

export default function DemoTransitionReplace() {
  const contentOptions = [
    (
      <blockquote className="h2 m-0" key={0}>
        <p>You know the golden rule, don’t you boy? Those who have the gold make the rules.</p>
        <footer>— Crazy hunch-backed old guy in Aladdin</footer>
      </blockquote>
    ),
    (
      <blockquote className="m-0" key={1}>
        <p>People say nothing is impossible, but I do nothing every day.</p>
        <footer>— A. A. Milne</footer>
      </blockquote>
    ),
    (
      <blockquote className="h2 m-0" key={2}>
        <p>
          I won’t go into a big spiel about reincarnation, but the first time I was in the
          Gucci store in Chicago was the closest I’ve ever felt to home.
        </p>
        <footer>— Kanye</footer>
      </blockquote>
    ),
    (
      <blockquote className="m-0" key={3}>
        <p>The first time I see a jogger smiling, I’ll consider it.</p>
        <footer>— Joan Rivers</footer>
      </blockquote>
    ),
  ];

  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const changeContent = () => {
    setCurrentContentIndex((currentContentIndex + 1) % contentOptions.length);
  };

  return (
    <div>
      {/*  eslint-disable-next-line react/button-has-type */}
      <button className="btn btn-primary mb-2" onClick={changeContent}>Next Quote</button>
      <div
        style={{
          background: '#eee',
          padding: '1rem',
          maxWidth: '15rem',
        }}
      >
        <TransitionReplace>
          {contentOptions[currentContentIndex]}
        </TransitionReplace>
      </div>
    </div>
  );
}
