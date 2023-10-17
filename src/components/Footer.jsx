import React from 'react'

function Footer() {
  return (
    <div className="container-fluid" style={{backgroundColor:'#6d787d',height: '100%'}}>
        <div style={{ display: 'flex', alignItems: 'center'}}>
        <img className='mx-4' src={require('../Images/Oyo_Rooms-White-Logo.wine_clipdrop-background-removal.png')} alt="OYO logo" width={100} height={80} />
            <p className="text-white fs-4 mx-4">World's leading chain of hotels and homes</p>
        </div>
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-2 my-1 border-top">
        <div>
              <p className="text-white fs-6">Download OYO app for exciting offers</p>
              <img  src={require('../Images/png-clipart-google-play-apple-app-store-android-lecture-schedule-text-label_clipdrop-background-removal.png')} alt="" width="180" height="auto" />
              <img src={require('../Images/google-play-badge.png')} alt="" width="180" height="auto" />
        </div>
        <div className="col mb- mx-6 d-flex flex-column" style={{ borderLeft: '1px solid white' }}>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About Us</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Teams/Careers</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Blogs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Support</a></li>
        </ul>
      </div>
      <div className="col mb-1 d-flex flex-column" style={{ borderRight: '1px solid white'}}>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Official OYO Blog</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Investor Relations</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">OYO Circle</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">OYO Frames</a></li>
      </ul>
    </div>
        <div className="col mb-1 d-flex flex-column">
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Terms and Conditions</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Guest Policies</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Privacy Policy</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Trust And Safety</a></li>
          </ul>
        </div>
        <div className="col mb-1 d-flex flex-column">
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Cyber Security</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Cyber Security Awareness</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Responsible Disclosure</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Advertise your Homes</a></li>
          </ul>
        </div>
    </footer>
  <footer className="row row-cols-1 row-cols-sm-1 row-cols-md-5 py-1 my-1 border-top">
    <div className="col mb-1" style={{borderBottom:'1px solid white'}}>
      <h5 className='text-white fw-bold fs-4'>OYO Hotels</h5><br/>
      <ul className="nav flex-column" >
        <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-white">Hotels near me</a></li>
        <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-white">Hotels in Manali</a></li>
        <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-white">Hotels in Nainital</a></li>
        <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-white">Hotels in Mount Abu</a></li>
        <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-white">Hotels in Agra</a></li>
        <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-white">Hotels in Haridwar</a></li>
        <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-white">Hotels in Gurgaon</a></li>
        <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-white">Hotels in Coimbatore</a></li>
        <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-white">OYO Hotel UK</a></li>
        <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-white">OYO Vacation Homes in Europe</a></li>
      </ul>
    </div>
    <div className="col mb-1" style={{borderBottom:'1px solid white'}}>
    <h5 className='text-white fw-bold fs-4' style={{visibility:'hidden'}}>OYO Hotels</h5><br/>
      <ul className="nav flex-column">
      <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-white">Hotels in Goa</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-white">Hotels in Udaipur</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-white">Hotels in Lonavala</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-white">Hotels in Kodaikanal</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-white">Hotels in Gangtok</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-white">Hotels in Kolkata</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-white">Hotels in Mandarmoni</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-white">Hotels in Kasauli</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-white">OYO Hotel USA</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-white">Homes in Scandinavia</a></li>
      </ul>
    </div>
    <div className="col mb-1" style={{borderBottom:'1px solid white'}}>
    <h5 className='text-white fw-bold fs-4' style={{visibility:'hidden'}}>OYO Hotels</h5><br/>
      <ul className="nav flex-column">
        <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotels in Puri</a></li>
        <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotels in Mussoorie</a></li>
        <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotels in Munnar</a></li>
        <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotels in Hyderbad</a></li>
        <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotels in Coorg</a></li>
        <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotels in Ahmedabad</a></li>
        <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotels in Daman</a></li>
        <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotels in Dehradun</a></li>
        <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">OYO Hotel Mexico</a></li>
        <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Homes in Southern Europes</a></li>
        
      </ul>
    </div>
    <div className="col mb-1" style={{borderBottom:'1px solid white'}}>
    <h5 className='text-white fw-bold fs-4' style={{visibility:'hidden'}}>OYO Hotels</h5><br/>
      <ul className="nav flex-column">
      <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotel in Jaipur</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotel in Delhi</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotel in Mysore</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotel in Chandigarh</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotel in Tirupathi</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotel in Rishikesh</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotel in Amritsar</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">All Cities Hotels</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotels in Japan</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Traum Vacation Apartments</a></li>
      </ul>
    </div>
    <div className="col mb-1" style={{borderBottom:'1px solid white'}}>
    <h5 className='text-white fw-bold fs-4' style={{visibility:'hidden'}}>OYO Hotels</h5><br/>
      <ul className="nav flex-column">
      <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotels in Shimla</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotels in Mumbai</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotels in Darjeeling</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotels in Shirdi</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotels in Dalhousie</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotels in Varanasi</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Hotels in Madhurai</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">Coupons</a></li>
      <li className="nav-item mb-2 fw-bold"><a href="#" class="nav-link p-0 text-white">OYO Hotels Indonesia</a></li>
      <li className="nav-item mb-2 fw-bold" ><a href="#" class="nav-link p-0 text-white">Traum Holiday Homes</a></li>
      </ul>
    </div>
        <div><br/>
            <img className='mx-1' src={require('../Images/facebook.png')} alt="" width="27" height="auto" />
            <img className='mx-2' src={require('../Images/instagram.png')} alt="" width="27" height="auto" />
            <img className='mx-2' src={require('../Images/twitter (1).png')} alt="" width="23" height="auto" />
            <img className='mx-2' src={require('../Images/play-button.png')} alt="" width="27" height="auto" />
            <img className='mx-2' src={require('../Images/pinterest.png')} alt="" width="27" height="auto" />
        </div>
            <p className='text-white fs-6 ms-auto my-4'>2013-2022 &copy; Oravel Stays Limited</p>
  </footer>
  </div>
  )
}

export default Footer

