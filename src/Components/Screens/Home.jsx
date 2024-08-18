import { useEffect, useState } from "react";
import Card from "../Card";
import Footer from "../Option/Footer";




export default function Home() {
const [foodCat, setFoodCat]= useState([]) 
const [foodItems, setFoodItems]= useState([])
const [search, setSearch]= useState()


const [valueLength, setValueLength]= useState(0)
const [category, setCategory]= useState([])
  const [price , setPrice]= useState([])
  const [type, setType]= useState([])
  const [deliveryTime, setDeliveryTime]= useState([])

  const filteredData=[{  heading:"Category"  , content:['North Indian', 'South Indian', 'Punjabi', 'Gujarati', 'Marathi', 'Bengali', 'Rajasthani', 'Hyderabadi' ,'Kerala', 'Tandoori', 'Street Food', 'Vegetarian', 'Sweet/Dessert', 'Snacks', 'Breads', 'Biryani', 'Starter', 'Pizza'] },
  {heading:"Price", content: [50,100,200,300,400,500 ]  },{heading:"Veg/NonVeg", content:['Vegetarian', 'Non Vegetarian']}, {heading:"Delivery Time (in minutes)", content:[10,20,30,40,50]}]
 
   


  












const loadData= async()=>{

  await fetch('http://localhost:5000/api/getProductData', {
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    }
  })
  .then((response)=>{
    if(response.ok){
        return response.json()
    }else{
      return new Error(response.statusText)
    }

  }).then((data)=>{
          //  console.log(data.foodItemData[0])
          console.log(data.message)
          setFoodItems(data.message)
       
      
    

  }).catch((err)=>{
    console.log(err)

  })
  
}

const getCatData= async()=>{
 await fetch('http://localhost:5000/api/getCatData', {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },


  }).then((response)=>{
    if(response.ok){
      return response.json()  
    }else{
       throw new Error(response.statusText) 
    }

  }).then((data)=>{
    // console.log(data.catData)
    setFoodCat(data.catData)   

  }).catch((err)=>{
    console.log(err)

  })

    }
useEffect(()=>{
  loadData() 
  getCatData()
  if(checkTokenExpires()){
   removeToken()
  }
},[])

  
// }

const clear=()=>{
  setCategory("")
  setPrice("")
  setType("")
  setDeliveryTime("") 
  setValueLength(0)

}

const onchange=(e)=>{
  
  // setDisabledValue(false
  
  // console.log(category)
  const {name, value}= e.target

  
  

  if(name==='Category'){
    if(category.includes(value )){
      console.log("onclick find")

      console.log(category)
       console.log(value)
      const  item= category.find(preValue=>{preValue === value})
        // category.filter((preValue)=>{preValue !==   value}) 
        console.log(item)
        console.log(category)
        
        console.log("onclick deleted")


        
         


        
      

                                                      
//  console.log(category)
        

      //  setValueLength(valueLength-1) 
      
      
    }else{
      setCategory([...category, value])
        // setValueLength(valueLength+1)  
    }         
  
  }else if(name==='Price'){
    
    const priceValue= value
     
    if(price.includes(parseInt(priceValue))){
    // setValueLength(valueLength-1)
      setPrice(price.filter((preValue)=>{preValue !== value})
          
    )
    } else{
    //  setValueLength(valueLength+1)
    
    setPrice([...price, parseInt(priceValue)])
    }

  }
  else if(name==="Veg/NonVeg"){
    if(type.includes(e.target.value)){
      setValueLength(valueLength-1)
      setType(type.filter((preValue)=>{preValue !==value})
       
    )
    }else{  
    setType([...type, value])
    setValueLength(valueLength+1)
    }

  }else{
    const minutes= value
    if(deliveryTime.includes(parseInt(minutes))){
            setValueLength(valueLength-1)
      setDeliveryTime( deliveryTime.filter((preValue)=>{preValue !==parseInt(minutes)})

    )
    }else{
            setValueLength(valueLength+1)
    setDeliveryTime([...deliveryTime, parseInt(minutes)])
    }
  }
  

}
 



 useEffect(()=>{
  // valueLength
     console.log(category)
  //  console.log(price)
  //  console.log(deliveryTime)
  //  console.log(type)
  
   const lengthNumber= category.length+ type.length+ deliveryTime.length+price.length;
   setValueLength(lengthNumber)
   console.log(valueLength)
    //  valueLength ===0   ? setDisabledValue(false):setDisabledValue(true)


    // category.length===0  && type.length===0 && deliveryTime.length===0  && price.length===0     ? setDisabledValue(true):setDisabledValue(false)


}, [category,price, type, deliveryTime, valueLength])
  
console.log(valueLength)








  

   

    const checkTokenExpires=()=>{
      const expiresIn= localStorage.getItem('expiresIn')
      if(expiresIn){
        return Date.now > parseInt(expiresIn)
      }
    }
    
    
    const removeToken=()=>{
      localStorage.removeItem('token')
      localStorage.removeItem('expiresIn')
    }
    




// const filtercheckItem=foodItems.filter(data=>{data.product_category===values.Category || data.product_price===values.Price || data.product_deliveryTime===values.DeliveryTime || data.product_type===values.Type})
// {console.log(filtercheckItem)}


// console.log(values.length)
// console.log(foodItems[0].product_category)
const handleOnSubmit=()=>{


  // setValueLength(true)
}


console.log(valueLength)  
 
  




  return (
    <div>
      


<div>
   <div id="carouselExampleCaptions" className="carousel slide"  style={{height:"100px !important"}}>
   <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner "  id="carousel ">
    <div className='carousel-caption' style={{'zIndex':"5"}}>
    <div  className="d-flex justify-content-center">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      {/* <button className="btn btn-outline-success text-white bg-info" onClick={handleSearchSubmit} type="submit">Search</button> */}
    </div>
    </div>
    <div className="carousel-item active">
    

      <img src="https://source.unsplash.com/random/?burger" className="d-block  w-100 " alt="..." style={{height:"500px", width:"100%"}} />
      <img></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>   
      </div>
    </div>
    <div className="carousel-item " >
      <h6 className="position-absolute text-info" > lets make your store global </h6>
      <img src="https://source.unsplash.com/random/?icecream" className="d-block w-100  " alt="..."  style={{height:"500px", width:"100%"}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item"  >
      <img src="https://source.unsplash.com/random/?pizza" className="d-block w-100 h-0"  alt="..." style={{height:"500px", width:"100%"}}/>
     
      <div className="carousel-caption d-none d-md-block">
        <h6 className="fs-5">Third slide label</h6>
        <h6>Some representative placeholder content for the third slide.</h6>
      </div>
    </div>
    
  </div>
  
</div>
    </div>






      <div className="  container-fluid">
      { foodCat&&  foodCat.length>0
      ?(
           foodCat.map((item)=>{
          return ( 
          
            <div key={item._id} className=" row ">
            
            <div className="fs-3 m-3" >{item.CategoryName}
          </div>
          <hr/>  

                      
                  

          {
    
       valueLength===true  ? foodItems.filter((data)=>{ data.product_category===category || data.product_price=== price || data.product_type===type || data.product_deliveryTime===deliveryTime })
       .map((filteredElement)=>{
        <div key={filteredElement._id} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 mt-5 mb-5">
        <Card 
          name={filteredElement.product_name} 
          description={filteredElement.product_description} 
          price={filteredElement.product_price} 
          address={filteredElement.shop_address} 
          rating={filteredElement.product_rating} 
          deliveryTime={filteredElement.product_deliveryTime} 
          discount={filteredElement.product_discount} 
          type={filteredElement.product_type} 
          id={filteredElement._id} 
          img={filteredElement.product_images.image4}   
      
        />    
      </div>
      }):(

            
  foodItems && foodItems.length > 0 && foodItems !== null ? (

    search && search.length > 0   ? (
      foodItems
        .filter(data => data.product_name.toLowerCase().includes(search.toLowerCase()))
        .map(filteredElement => (
          <div key={filteredElement._id} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 mt-5 mb-5">
            <Card 
              name={filteredElement.product_name} 
              description={filteredElement.product_description} 
              price={filteredElement.product_price} 
              address={filteredElement.shop_address} 
              rating={filteredElement.product_rating} 
              deliveryTime={filteredElement.product_deliveryTime} 
              discount={filteredElement.product_discount} 
              type={filteredElement.product_type}        
              id={filteredElement._id}     
              img={filteredElement.product_images.image4} 
            />
          </div>  
        ))
    ) : (
      foodItems
        .filter(data => data.product_category === item.CategoryName)
        .map(filteredElement => (
          <div key={filteredElement._id} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 mt-5 mb-5">
            <Card 
              name={filteredElement.product_name} 
              description={filteredElement.product_description} 
              price={filteredElement.product_price} 
              address={filteredElement.shop_address} 
              rating={filteredElement.product_rating} 
              deliveryTime={filteredElement.product_deliveryTime}   
              discount={filteredElement.product_discount} 
              type={filteredElement.product_type} 
              id={filteredElement._id} 
              img={filteredElement.product_images.image4}    
            />

          </div>    
        ))
    )
  ) : null)
}


    
  
 

        {
       
           }




          </div>
                  


              
        ) })):"no data"   

      }
      <div>
        {/* <Home/>s */}
 <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Choose By Filters 
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
    <button className='btn btn-primary  ' onClick={clear}>Clear All </button>
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
      <input className="form-check-input" type="checkbox" name={item.heading} value={point}   onChange={onchange} id="flexCheckDefault"/>
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
{
     valueLength===0?

<button  className='btn btn-primary mt-5 ms-2'  onClick={handleOnSubmit}  disabled>  Submit  </button> // abled
:
<button  className='btn btn-primary mt-5 ms-2'  onClick={handleOnSubmit}  >  Submit  </button>  //disabled
 

}  
</div>









   
  </div>
</div>
      
    </div>









      
      
      </div>
      {/* <ScrollTop/> */}
      <Footer/> 
      
    </div>
  )
}
