

export default function Card() {
  return (
    <div>
      <div>
        <div className="card mt-3 " style={{'width': '18rem','maxHeight':"360px"}}>
  <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400" className="card-img-top rounded-start" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <div className='container'>
        <select className='m-2 h-100  bg-success'>{Array.from(Array(6), (e, i)=>{
            return (
                <option key={i+1} value={i+1}>{i+1}</option>
            )
        })}</select>
        <select className='m-2 h-100  bg-success rounded'>
        <option value="half" >half</option>
        <option value="full" >full</option>
        </select>
        <div className='d-inline h-100 fs-5'>Total Price</div>
    </div>
  </div>
</div></div>
    </div>
  )
}
