import './App.css';
import { useState } from 'react';
import DetailSection from './components/DetailSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

 const apiDataRecords = [
      {
        gstNumber: '29GGGGG1314R9Z6',
        registeredOn: 'January 1, 2022',
        gstStatus: 'Active',
        lastUpdatedOn: 'January 5, 2022',
        businessDetails: {
          gstin: '9348943634',
          legalName: 'Zomato Foods Private Limited',
          gstinStatus: 'Active',
          constitution: 'Private Limited Company',
          taxpayerType: 'Regular',
          dateOfRegistration: 'November 20, 2020',
          stateJurisdiction: 'Ward 100',
          centerJurisdiction: 'NA',
        },
      },
      {
        gstNumber: '123AAAARF124TC23',
        registeredOn: 'July 1, 2021',
        gstStatus: 'Active',
        lastUpdatedOn: 'January 23, 2023',
        businessDetails: {
          gstin: '7863971233',
          legalName: 'Uber Privated Limited',
          gstinStatus: 'Active',
          constitution: 'Private Limited Company',
          taxpayerType: 'Regular',
          dateOfRegistration: 'August 10, 2018',
          stateJurisdiction: 'Ward 87',
          centerJurisdiction: 'NA',
        },
      },
      {
        gstNumber: '234SSERR543AWE23',
        registeredOn: 'August 12, 2019',
        gstStatus: 'Inactive',
        lastUpdatedOn: 'July 15, 2023',
        businessDetails: {
          gstin: '9873562515',
          legalName: 'NPCL Limited',
          gstinStatus: 'Inactive',
          constitution: 'Government Company',
          taxpayerType: 'Regular',
          dateOfRegistration: 'September 20, 2017',
          stateJurisdiction: 'Ward 97',
          centerJurisdiction: 'YES',
        },
      },
      {
        gstNumber: '967AQE65RRE345D1',
        registeredOn: 'December 12, 2018',
        gstStatus: 'Active',
        lastUpdatedOn: 'January 25, 2023',
        businessDetails: {
          gstin: '8936271617',
          legalName: 'Swiggy Private Limited',
          gstinStatus: 'Active',
          constitution: 'Private Limited Company',
          taxpayerType: 'Regular',
          dateOfRegistration: 'November 20, 2020',
          stateJurisdiction: 'Ward 100',
          centerJurisdiction: 'NA',
        },
      },
      {
        gstNumber: '12ASD45TTU65RT2',
        registeredOn: 'April 12, 2022',
        gstStatus: 'Active',
        lastUpdatedOn: 'April 15, 2023',
        businessDetails: {
          gstin: '8363528299',
          legalName: 'Reliance Private Limited',
          gstinStatus: 'Inactive',
          constitution: 'Private Limited Company',
          taxpayerType: 'Regular',
          dateOfRegistration: 'May 10, 2021',
          stateJurisdiction: 'Ward 67',
          centerJurisdiction: 'NA',
        },
      },
    ]

function App() {
  const [apiDataList, setApiDataList] = useState([]);
  const [searchError, setSearchError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (gstNumber) => {
    if (!gstNumber) {
      setSearchError("Please enter the GST number to be found.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const matchRecords = apiDataRecords.filter(
        (record) => record.gstNumber === gstNumber
      );

      if (matchRecords.length > 0) {
        setApiDataList(matchRecords);
        setSearchError(null);
      } else {
        setApiDataList([]);
        setSearchError("No data found for the provided GST number.");
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container">
      <Navbar />
      <HeroSection onSearch={handleSearch} />
      {loading ? (
        <p className="center">Loading...</p>
      ) : (
        <DetailSection apiDataList={apiDataList} searchError={searchError} />
      )}
    </div>
  );
}

export default App;
