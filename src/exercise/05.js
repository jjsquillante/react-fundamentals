// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react';
import '../box-styles.css';

const boxes = [
  {
    id: 1,
    size: 'small',
    color: 'lightblue',
    desc: 'small lightblue box',
  },
  {
    id: 2,
    size: 'medium',
    color: 'pink',
    desc: 'medium pink box',
  },
  {
    id: 3,
    size: 'large',
    color: 'orange',
    desc: 'large orange box',
  },
];

function Box({ color, desc, size }) {
  return (
    <div className={`box box--${size}`} style={{ backgroundColor: color }}>
      {desc}
    </div>
  );
}

function App() {
  return (
    <>
      {boxes.map(({ color, desc, id, size }) => (
        <Box key={id} size={size} desc={desc} color={color} />
      ))}
    </>
  );
}

export default App;
