import React, { useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';

function App() {
  const [data,setdata] = useState(Array.from({length:35}))
  const [scrollData,setScrolldata] = useState(true)
  const moreData =()=>{
    setTimeout(()=>{
      setdata(data.concat(Array.from({length:35})))
    },500);
  }
  return (
    <div className="App">
      <div className='head'>Infinite Scroll</div>
      <InfiniteScroll dataLength={data.length} next={moreData} hasMore={scrollData}>
        {data.map((val,index)=>{
          return <div key={index} className="item"><span>Item {index+1}</span></div>
        })}
      </InfiniteScroll>
    </div>
  );
}

export default App;
