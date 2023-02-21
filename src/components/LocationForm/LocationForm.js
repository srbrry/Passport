import { useState } from "react";
import * as locationsAPI from "../../utilities/location-api";

export default function LocationForm({ onLocationAdded }) {
  const [location, setLocation] = useState({
    location: "",
    dateFrom: "",
    dateTo: "",
  });

  function handleChange(event) {
    setLocation({ ...location, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const addedLocation = await locationsAPI.addLocation(location);
    onLocationAdded(addedLocation);
    setLocation({ location: "", dateFrom: "", dateTo: "" });
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Location</label>
        <input name="location" type="text" onChange={handleChange} value={location.location} />
        <label>From:</label>
        <input name="dateFrom" type="date" onChange={handleChange} value={location.dateFrom} />
        <label>To:</label>
        <input name="dateTo" type="date" onChange={handleChange} value={location.dateTo} />
        <button type="submit">Add My Destination</button>
      </form>
    </div>
  );
}
