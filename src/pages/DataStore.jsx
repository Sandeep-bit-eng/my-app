import React, { useEffect, useState } from "react";
import { app } from "../firebase";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import "./DataStore.css";

const db = getFirestore(app);

const DataStore = ({ userlogin, onClick }) => {
  const [cities, setCities] = useState([]);
  const [placesData, setPlacesData] = useState({}); // { cityId: [places...] }

  // Add city
  const writeData = async () => {
    try {
      const docRef = await addDoc(collection(db, "cities"), {
        name: "UP",
        pincode: 401203,
        lat: 5858,
        log: 4292,
      });
      console.log("Document written with ID: ", docRef.id);
      getData();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // Add subcollection (example hardcoded cityId)
  const UnderData = async () => {
    const underRef = await addDoc(
      collection(db, "cities/Av4lshteWzKDjHq4q2jl/places"),
      {
        date: Date.now(),
        descp: "This is under the city particular data.!",
        name: "Mira Road",
      }
    );
    console.log(underRef, "Subcollection data added");
    getPlaces("Av4lshteWzKDjHq4q2jl");
  };

  // Fetch all cities
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "cities"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setCities(data);

    // For each city, fetch its places
    data.forEach((city) => getPlaces(city.id));
  };

  // Fetch places for a city
  const getPlaces = async (cityId) => {
    const querySnapshot = await getDocs(
      collection(db, `cities/${cityId}/places`)
    );
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPlacesData((prev) => ({ ...prev, [cityId]: data }));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>
          Welcome, <span className="user-email">{userlogin.email}</span>
        </h1>
        <div className="buttons">
          <button className="btn logout" onClick={onClick}>
            Log Out
          </button>
          <button className="btn add-city" onClick={writeData}>
            Add City
          </button>
          <button className="btn add-sub" onClick={UnderData}>
            Add Sub Data
          </button>
        </div>
      </div>

      <h2 className="section-title">City Data from Firebase</h2>

      <div className="cards-grid">
        {cities.map((city) => (
          <div key={city.id} className="card">
            <div className="card-header">
              <h3>{city.name}</h3>
            </div>
            <table className="card-table">
              <tbody>
                <tr>
                  <td>Pincode</td>
                  <td>{city.pincode}</td>
                </tr>
                <tr>
                  <td>Latitude</td>
                  <td>{city.lat}</td>
                </tr>
                <tr>
                  <td>Longitude</td>
                  <td>{city.log}</td>
                </tr>
              </tbody>
            </table>

            {/* Nested Places Table */}
            {placesData[city.id] && placesData[city.id].length > 0 && (
              <>
                <h4 className="places-title">Places:</h4>
                <table className="card-table nested">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {placesData[city.id].map((place) => (
                      <tr key={place.id}>
                        <td>{place.name}</td>
                        <td>{place.descp}</td>
                        <td>{new Date(place.date).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
        ))}
      </div>

      {cities.length === 0 && <p className="no-data">No city data found 😕</p>}
    </div>
  );
};

export default DataStore;
