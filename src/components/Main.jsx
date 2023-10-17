import React from 'react'

function Main() {
  return (
    <>
    <div style={{border:'1px solid #d3174d',height:'20%',backgroundColor:'#d3174d',width:'100%'}}>
      <div>
        <p className='text-white fs-2 my-3' style={{textAlign:'center'}}>Over 157,000 hotels and homes across 35 countries</p>
        <div className='d-flex justify-content-center'>
        <input placeholder='Search by city,hotel,neighborhood' style={{padding:'10px',width:'30%'}} type='search'/>
        <input type="date" style={{width:'20%'}} />
        <input type="text"style={{width:'20%'}} value={'1 Room ,1 Guest'}/>
        <input className='text-white' type="Search" style={{backgroundColor:'#1ab64f',textAlign:'center'}} value={'Search'} />
        </div><br/>
        <div style={{display:'inline-flex',justifyContent:'center',display:'flex',gap:'30px'}}>
          <a className='text-white' style={{textDecoration:'none'}}>Continue your search</a>
          <p className='text-white ' style={{border:'1px solid white',borderRadius:'10px',padding:'5px'}}>Bangalore . 06 Oct - 07 Oct | Guests</p>
        </div>
      </div>
    </div><br/>
      <img src='https://assets.oyoroomscdn.com/cmsMedia/f0be8dc3-e384-40b3-89f9-a0a0109159ce.jpg' alt="banner for ads" width="100%" height="auto" className='p-3' />
      <img src='https://assets.oyoroomscdn.com/cmsMedia/ac15627f-c423-4383-a43b-1402ef8c3a73.png' alt="banner for ads" width="100%" height="auto" className='p-3'/>
    </>
  )
}

export default Main