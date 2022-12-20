import { Outlet, Route, Routes } from "react-router-dom";
import { EditBooking } from "../hotels/EditBooking";
import { HotelList } from "../hotels/HotelList";
import { HotelResults } from "../hotels/HotelResults";
import { HotelSearch } from "../hotels/HotelSearch";
import { NavBar } from "../nav/NavBar";
import { SearchForm } from "../search/SearchForm";



export const ApplicationViews = () => {

  return (
    <Routes>

      <Route path="/" element={
        <>
          <h1>TravelUp</h1>
          <div>Book Here Stay There!!!</div>

          <Outlet />
        </>
      }></Route>

      <Route path="hotel" element={
        <>
          <HotelSearch />
          <HotelList />
        </>
      } />
      <Route path="search" element={<><SearchForm /><HotelResults />
        <Route path="search" element={<><EditBooking /><EditBooking />
        </>} />


      </Routes>
     </>

  )

}
