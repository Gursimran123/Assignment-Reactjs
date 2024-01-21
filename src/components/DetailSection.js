import { faCopy} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const DetailSection = ({ apiDataList, searchError }) => {
  if (searchError) {
    return <p className="center">{searchError}</p>;
  }

  if (!apiDataList || apiDataList.length === 0) {
    return (
      <p className="center">
        Please Enter a GST Number to search for the record!
      </p>
    );
  }
  return (
    <>
      {apiDataList.map((apiData, index) => (
        <section key={index} className="details">
          <div className="headings">
            <h4>Test Enterprises</h4>
            <p>{apiData.gstNumber}</p>
          </div>
          <ul className="detail-section">
            <li>Registered On: {apiData.registeredOn} </li>
            <li>GST Status: {apiData.gstStatus}</li>
            <li>Last Updated On: {apiData.lastUpdatedOn}</li>
          </ul>
          <div className="details-box">
            <h2>BUSINESS DETAILS</h2>
            <hr />
            <div className="row-1">
              <div className="column-1">
                <span>GSTIN</span>
                <p>{apiData.businessDetails.gstin}</p>
              </div>
              <div className="column-2">
                <span>Legal Name of Business</span>
                <p>{apiData.businessDetails.legalName}</p>
              </div>
              <div className="column-3">
                <span>GSTIN Status</span>
                <p>{apiData.businessDetails.gstinStatus}</p>
              </div>
            </div>
            <div className="row-1">
              <div className="column-1">
                <span>Constitution of Business</span>
                <p>{apiData.businessDetails.constitution}</p>
              </div>
              <div className="column-2">
                <span>TaxPayer Type</span>
                <p>{apiData.businessDetails.taxpayerType}</p>
              </div>
              <div className="column-3">
                <span>Date of Registration</span>
                <p>{apiData.businessDetails.dateOfRegistration}</p>
              </div>
            </div>
            <div className="row-1">
              <div className="column-1">
                <span>State Jurisdiction Details</span>
                <p>{apiData.businessDetails.stateJurisdiction}</p>
              </div>
              <div className="column-2">
                <span>State Jurisdiction Details</span>
                <p>{apiData.businessDetails.centerJurisdiction}</p>
              </div>
              <div className="column-3 none">
                <span>State Jurisdiction Details</span>
                <p>{apiData.businessDetails.stateJurisdiction}</p>
              </div>
            </div>
            <hr />
            <div className="button-container">
              <button className="btn">
                <FontAwesomeIcon icon={faCopy} /> Copy
              </button>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default DetailSection