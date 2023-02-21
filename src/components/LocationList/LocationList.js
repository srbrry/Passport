import { useState, useEffect } from "react";
import LocationListCard from "./LocationListCard";
import LocationForm from "../LocationForm/LocationForm";
import * as locationsAPI from "../../utilities/location-api";

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
      <button onClick={() => setShowForm(true)}>Add Location</button>
      {showForm && <LocationForm onLocationAdded={handleLocationAdded} />}
      {locations.map((location, index) => (
        <LocationListCard location={location} index={index} key={index} />
      ))}
    </>
  );
}
