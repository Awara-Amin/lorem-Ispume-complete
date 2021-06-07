import React, { useState } from 'react';
import data from './data';




function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('hello world');
    // setText(data);  // this is whole

   // this bring back string even it looks like number but it is not
     console.log(count);
     console.log(typeof count);
    // to make it like number to that;
    let amount = parseInt (count);
    console.log(amount);
    console.log(typeof amount);


   if(count <= 0) {
     amount = 1
   }
   if(count > 8) {
     amount = 8
   }
   setText(data.slice(1,amount));
  }

  return (
    <section className= 'section-center'>
      <h3>lorem ipsum project setup</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs to show</label>
        <input type='number' name='amount' id='amount' value={count} onChange={(e)=>setCount(e.target.value)}></input>
        <button type='submit' className='btn'>gerenerate paragraphs</button>
      </form>

      <article className='lorem-text'>
        {text.map((item, index) => {
          //       key= {index} means paragraph for each item in the arrey
          return <p key={index}>{item}</p>
                        // this item is ==> each paragraph in the data.js we have
        })}


        {/* <p>Lorem 10, lorem ipsum project setup lorem ipsum project setup</p> */}
        {/* <p>Lorem 20, lorem ipsum project setup lorem ipsum project setup</p> */}
      </article>
    </section>



    )
}

export default App;
