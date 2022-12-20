import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchForm = () => {
   // TODO: Provide initial state for destination
   const [destination, updateDestination] = useState({
      userId: 0,
      hotelId: 0,
      checkinDate: "",
      checkoutDate: "",
      numberOfTravelers: 0,
   });

   const [SelectedDestination, setSelectedDestination] = useState("")
   const [HotelResults, setHotelResults] = useState([])
   // how we define user
   const navigate = useNavigate();
   const localTravelUser = localStorage.getItem("travel_user");
   const capstoneTravelObject = JSON.parse(localTravelUser);

   useEffect(() => {
      const fetchData = async () => {
         const response = await fetch(
            `http://localhost:8088/hotels?location=${SelectedDestination} `
         );
         const data = await response.json();
         console.log(data);
         setHotelResults(data)
      };
      fetchData();
   }, [SelectedDestination]);
   //    console.log("useEffect", SelectedDestination)
   // }, [SelectedDestination]


   // const updateSelectedDestination = (event) => {
   //    setSelectedDestination(event.target.value)
   // }

   const handleSaveButtonClick = (event) => {
      event.preventDefault();

      const searchToSendToAPI = {
         userId: capstoneTravelObject.id,
         hotelId: destination.hotelId,
         checkinDate: destination.checkinDate,
         checkoutDate: destination.checkoutDate,
         numberOfTravelers: destination.numberOfTravelers

      };




      return fetch(`http://localhost:8088/bookings`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(searchToSendToAPI),
      })
         .then((response) => response.json())
         .then(() => {
            navigate("/search");
         });
      //  const responseJson = await response.json();
      //  return responseJson;
   };

   // const 













   //PUT mean replace or edit
   /* ------------------------------ */
   /* .then */
   // return fetch(`http://localhost:8088/employees/${destination.id}`, {
   //     method: "PUT",
   //     headers: {
   //         "Content-Type": "application/json",
   //     },
   //     body: JSON.stringify(destination),
   // })
   //     .then((response) => response.json())
   //     .then(() => {});
   /* ------------------------------ */
   //this will post to JSON file



   //input info
   return (

      <div>

         <form className="datePicker">
            <h2 className="date">Travel Where?  Travel When? Are You By Yourself Or With A Friend?  Information needed below please fill in:</h2>
            <select value={SelectedDestination} onChange={(Event) => {
               setSelectedDestination(Event.target.value)
            }}>
               <option value="Miami Beach, FL">Miami Beach, FL</option>
               <option value="Los Angeles, CA">Los Angeles, CA</option>
               <option value="West Hollywood, CA">West Hollywood, CA</option>
               <option value="Las Vegas, NV">Las Vegas, NV</option>
               <option value="New York, NY">New York, NY</option>
               <option value="Nashville, TN">Nashville, TN</option>
            </select>
            <fieldset>
               <div className="form-group">
                  <label htmlFor="Date">Check-in Date:</label>
                  <input
                     required
                     autoFocus
                     type="date"
                     className="form-control"
                     value={destination.checkinDate}
                     onChange={(evt) => {
                        // TODO: Update specialty property
                        const copy = { ...destination };
                        copy.checkinDate = evt.target.value;
                        updateDestination(copy);
                     }}
                  />
               </div>

            </fieldset>
            <fieldset>
               <div className="datePicker">
                  <label htmlFor="date">Check-out Date:</label>
                  <input
                     type="date"
                     className="form-control"
                     value={destination.checkoutDate}
                     onChange={(evt) => {
                        // TODO: Update rate property
                        const copy = { ...destination };
                        copy.checkoutDate = evt.target.value;
                        //copy.rate = parseFloat(evt.target.value,2);
                        updateDestination(copy);
                     }}
                  />
               </div>
            </fieldset>
            <fieldset>
               <div className="Travelers">
                  <label htmlFor="date">Number Of Travelers:</label>
                  <input
                     type="number"
                     className="form-control"
                     value={destination.numberOfTravelers}
                     onChange={(evt) => {
                        // TODO: Update rate property
                        const copy = { ...destination };
                        copy.numberOfTravelers = evt.target.value;
                        updateDestination(copy);
                     }}
                  />
               </div>
            </fieldset>
            <button
               onClick={(clickEvent) => handleSaveButtonClick(clickEvent)} className="btn btn-primary">Save destination </button>
         </form>
         <div><h2>List of Hotels</h2>
            <article className="Hotel">
               {HotelResults.map(Hotel => (
                  <section className="Hotel" key={Hotel.id}>
                     <header>{Hotel.name}</header>
                     <div style={{ margin: '100px' }}>
                        <img src={Hotel.image} alt="Hotel Images" style={{ width: '400px', }} />
                     </div>
                     <header>{Hotel.image}</header>
                     <header>{Hotel.description}</header>
                     <header>{Hotel.location}</header>
                     <header>{Hotel.price}</header>
                     <header>{Hotel.id}</header>
                     <header>{Hotel.hotelTypeId}</header>
                     <header>{Hotel.isPetFriendly}</header>
                     <button
                        onClick={(clickEvent) => {
                           updateDestination.hotelId(Hotel.id)

                           handleSaveButtonClick(clickEvent)
                        }
                        }
                        className="btn btn-primary">Save destination </button>

                  </section>

               ))}
            </article></div>
      </div>

   );
};

/*const [destination, updateDestination,] = useState({
   "userId": 0,
   "hotelId": 0,
   "checkinDate": "",
   "checkoutDate": "",
   "numberOfTravelers": 0



   //localhost:8088/bookings?_expand=user&id=${capstoneTravelObject.id}











  /* import { useState } from "react";

  export const SearchForm = () => {
  
  const [travelForm,  setTravelForm] = useState("Nashville);
  
    const handleChange = (event) => {
      setTravelForm(event.target.value)
    }
  
    return (
     
    )
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root')); */



