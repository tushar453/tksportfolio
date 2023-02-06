import "./Form.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form method="post" action="sharmahimesh282@gmail.com" enctype="text/plain" >
        <label htmlFor="">Your Name</label>
        <input type="text" className="text"/>
        <label htmlFor="">Email</label>
      <input type="text" className="text"/>
      <label htmlFor="">Subject</label>
      <input type="text" className="text" />
      <label htmlFor="">Message</label>
      <textarea placeholder="Enter Your Message Here" id="" cols="30" rows="3" className="text"></textarea>
      <button className="btn">SUBMIT</button>
      </form>
    </div>
  )
}

export default Form