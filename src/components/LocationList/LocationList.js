import { useState, useEffect } from "react";
import LocationListCard from "./LocationListCard";
import LocationForm from "../LocationForm/LocationForm";
import * as locationsAPI from "../../utilities/location-api";
import './LocationList.css'

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [showForm, setShowForm] = useState(false); // add a state variable to track whether to show the form

  useEffect(function () {
    async function getLocations() {
      const locations = await locationsAPI.getLocation();
      setLocations(locations);
    }
    getLocations();
  }, []);


  async function handleLocationAdded(addedLocation) {
    setLocations([...locations, addedLocation]);
  }

  return (
    <>
    <div className="main-page-passport-container">
      <div className="passport-left passport-page">
        <h2>My Destinations</h2>
        <button id ="add-location-button-2" onClick={() => setShowForm(true)}>Add Location</button>
        {showForm && <LocationForm onLocationAdded={handleLocationAdded} />}
      </div>
      <div className="passport-right passport-page">
        {locations.map((location, index) => (
        <LocationListCard location={location} index={index} key={index} />
        ))}
      </div>    
    </div>
    </>
  );
}
