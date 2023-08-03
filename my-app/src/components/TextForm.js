import React ,{useState} from 'react'
import Proptypes from 'prop-types'

export default function TextForm(props) {
    const onhandleclick=()=>{
        let newtext=text.toUpperCase();
        settext(newtext)
        props.showalert("Convert to upper case","success")
    }
    const clear=()=>{
        let newtext="";
        settext(newtext)
        props.showalert("text cleared","success")
    }
    const onhandleclicklow=()=>{
        let newtext=text.toLowerCase();
        settext(newtext)
        props.showalert("Convert to lower case","success")
    }
    const onhandleup=(event)=>{
        settext(event.target.value)

    }
   
    const [text,settext]=useState("");
    
    
    
    
  return (
    <>
    
<div className="mb-3">
    <h1>{props.heading}</h1>
 
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={onhandleup} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}} rows="8" placeholder='enter text here'></textarea>
  
  
  <button className="btn btn-primary my-3" disabled={text.length===0} onClick={onhandleclick}>Convert to uppercase</button>
  <button className="btn btn-primary my-3 mx-2" disabled={text.length===0} onClick={onhandleclicklow}>Convert to lowercase</button>
  <button className="btn btn-primary my-3 mx-2" disabled={text.length===0} onClick={clear}>Clear Text</button>
  


  
</div>
<div className="container">
    <h1 className="my-3">
        Summary of your text
    </h1>
    <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} mins read</p>
    <h1>Preview</h1>
    <p>{text}</p>
</div>
    </>
  )
}
TextForm.protoTypes={
    heading:Proptypes.string.isRequired
}
TextForm.defaultProps={
    heading:"Enter heading"
}
