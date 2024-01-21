import React,{useState} from 'react'
import img1 from '../images/gst-svg.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const HeroSection = ({onSearch}) => {
  const [gstNumber,setGstNumber] = useState('');

   const handleSearchClick = () => {
     onSearch(gstNumber);
   };

   const handleKeyPress = (e) => {
     if (e.key === "Enter") {
       handleSearchClick();
     }
   };

  return (
    <section className="hero">
      <div className="left">
        <h1>Search and Confirm GST Registration</h1>
        <p>Quickly Verify GST Numbers with Confidence</p>
        <div className="search">
          <input
            type="text"
            placeholder="Enter your GST Number"
            value={gstNumber}
            onChange={(e) => setGstNumber(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="search-icon"
            onClick={handleSearchClick}
          />
        </div>
      </div>
      <div className="right">
        <img src={img1} alt="images" />
      </div>
    </section>
  );
}

export default HeroSection