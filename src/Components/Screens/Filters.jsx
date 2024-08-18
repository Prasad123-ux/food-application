import  {  useState } from 'react'
// // import Home from './Home'
import "../../Styles/card.css"

export default function Filters() {
  
  const [category, setCategory]= useState([])
  const [price , setPrice]= useState([])
  const [type, setType]= useState([])
  const [deliveryTime, setDeliveryTime]= useState([])


const clear=()=>{
  setCategory("")
  setPrice("")
  setType("")
  setDeliveryTime("") 
}

const onchange=(e)=>{
  
  if(e.target.name==='Category'){
    if(category.includes(e.target.value)===true){
      setCategory(category.filter((preValue)=>{preValue !== e.target.value}))
      
    }else{
      setCategory([...category, e.target.value])
    }

  }else if(e.target.name==='Price'){
    
    const priceValue= e.target.value
    console.log(priceValue)  
    if(price.includes(parseInt(priceValue))===true){
      console.log("price value found")
      setPrice(price.filter((preValue)=>{preValue !== priceValue})
    )
    } else{
    console.log("price value added")
    
    setPrice([...price, parseInt(priceValue)])
    }

  }
  else if(e.target.name==="Veg/NonVeg"){
    if(type.includes(e.target.value)===true){
      setType(type.filter((preValue)=>{preValue===e.target.value})
    )
    }else{  
    setType([...type, e.target.value])
    }

  }else{
    const minutes= e.target.value
    if(deliveryTime.includes(parseInt(minutes))===true){
      setDeliveryTime( deliveryTime.filter((preValue)=>{preValue===parseInt(minutes)})
    )
    }else{
      
    setDeliveryTime([...deliveryTime, parseInt(minutes)])
    }
  }
  

}
 console.log(deliveryTime)

// console.log(filterItem)



  // for (let i=0; i<filterItem.length; i++){
 
    
                       
  // if (filterItem.includes(inputItem)===true){
  //   filterItem.filter((item)=>{ item===inputItem})
  // }else{
  //   setFilterItem((prevValues)=>({...prevValues, [cat]:inputItem}))

  // }
// }




// console.log(filterItem)
// console.log(Object.values(values))s





// const onchange=(e)=>{
//   const value= e.target.value  
//   const cat= e.target.name
  
//   setValues((prevValues)=>{
//     const updatedValues={...prevValues} 
 

//      if(Object.values(updatedValues).includes(value)){
//     for (let key in updatedValues){
//       if(updatedValues[key]===value){

//         delete  updatedValues[key]
//         break;
//       }
//     }
   

//      }
//      else{
//       updatedValues[cat]===value;    


//      }
//      return updatedValues;
//   })
// }

  

  // const onchange=(e)=>{  
  //   const value= e.target.value
  //   const cat=e.target.name
  //   if(values.includes(value)){
  //     setValues(values.filter((v)=>v!==value))
  //   }else{
  //     setValues([value, ...values])
  //   }
    
  //   }
 
    const filteredData=[{  heading:"Category"  , content:['North Indian', 'South Indian', 'Punjabi', 'Gujarati', 'Marathi', 'Bengali', 'Rajasthani', 'Hyderabadi' ,'Kerala', 'Tandoori', 'Street Food', 'Vegetarian', 'Sweet/Dessert', 'Snacks', 'Breads', 'Biryani', 'Starter', 'Pizza'] },
 {heading:"Price", content: [50,100,200,300,400,500 ]  },{heading:"Veg/NonVeg", content:['Vegetarian', 'Non Vegetarian']}, {heading:"Delivery Time (in minutes)", content:[10,20,30,40,50]}]

  



  return (


    <div>
        {/* <Home/>s */}
 <button className=" mt-2 btn  filter btn-outline-primary text-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Choose By Filters
   {/* { values.length>0 ? values.length :""} */}
</button> 

<div className="offcanvas offcanvas-start"  id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h2 className="offcanvas-title text-success font-italic" id="offcanvasExampleLabel">Foodie</h2>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
     <h5 className='text-secondary '> Filter Food By your Mood !</h5> 
    </div>
    <button className='btn btn-primary  ' onClick={clear}>Clear All 
      {/* { values.length>0 ? values.length :""} */}
      </button>
    <hr></hr>

    
    <div className="accordion accordion-flush" id="accordionFlushExample">
        {
            filteredData.map((item, index)=>{
              const collapseID=`flush-collapse${index}`
              const headingID= `flush-heading${index}`
              

           
   return <div className="accordion-item" key={index}>
    <h2 className="accordion-header" key={headingID}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseID}`} aria-expanded="false" aria-controls={collapseID}>
        {item.heading}
      </button>
    </h2>
    <div id={collapseID} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
         {/* {item.content}</div> */}
    {  Array.isArray(item.content) ? ( (item.content).map((point, index)=>{ 
      return    <div className="form-check" key={index}>
      <input className="form-check-input" type="checkbox" name={item.heading}  value={point}    onChange={onchange} id="flexCheckDefault"/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {point}
      </label>
    </div>



     })):""}
     </div>

    </div>
  </div>
   })
}

<button className='btn btn-primary mt-5 ms-2'>  Submit  </button>

 
</div>









   
  </div>
</div>
      
    </div>
  )
}
