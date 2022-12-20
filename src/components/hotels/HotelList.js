import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const HotelList = () => {
    const [Hotel, setHotel] = useState([]);
    const {hotelTypeId} = useParams()

    const localtravelUp= localStorage.getItem("travel_user");
    const travelUserObject = JSON.parse(localtravelUp);


    useEffect(
        () => {
         
            const fetchData = async () => {
                const response = await fetch(`http://localhost:8088/hotels?_expand=${hotelTypeId}`);
                const HotelsArray = await response.json();
                setHotel(HotelsArray);
            };
            fetchData();
        },
        //testFunc,
        [] // When this array is empty, you are observing initial component state
    );




    return (
        <>
            <h2>List of Hotels</h2>
            <article className="Hotel">
                {Hotel.map((Hotel) => {
                    return (
                        <section className="Hotel" key={Hotel.id}>
                            <header>{Hotel.name}</header>
                            <div style={{ margin: '100px' }}>
      <img src={Hotel.image} alt="Hotel Images" style={{ width: '400px', }}/>
    </div>
                            <header>{Hotel.image}</header>
                            <header>{Hotel.description}</header>
                            <header>{Hotel.location}</header>
                            <header>{Hotel.price}</header>
                            <header>{Hotel.hotelTypeId}</header>
                            <header>{Hotel.isPetFriendly}</header>

                        </section>
                    );
                })}
            </article>
        </>
    )

};
