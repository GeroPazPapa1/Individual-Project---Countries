import React, { useEffect, useState } from "react";
import { allCountries, filter, getActivity, orderCountry } from "../../redux/action/action";
import { useDispatch, useSelector } from "react-redux";

import Cards from "../Cards/Cards";
import FilterByContinent from "../FilterByContinent/FilterByContinent";
import FilterByOrder from "../FilterByOrder/FilterByOrder";
import Paginacion from "../Paginacion/Paginacion";
import style from "./Home.module.css";

function HomePage() {
  const dispatch = useDispatch();
  const countryFilter = useSelector((state) => {
    if (state.filterByContinent === "All") {
      return state.Countries;
    } else {
      return state.filterByContinent;
    }
  });
  const activities = useSelector(state=>state.Activity)

  console.log(activities)

  
  const [filtered, setFiltered] = useState("All");
  const [activityFilter,setActivityFilter] = useState('All')
  const [orderBy, setOrderBy] = useState("AscName");

  useEffect(() => {
    dispatch(allCountries());
  }, [dispatch]);

  useEffect(()=>{
    dispatch(getActivity())
  },[dispatch])

  const onHandleFilter = (event) => {
    event.preventDefault();
    let selectCountry = event.target.value;
    setFiltered(selectCountry);
    setPages(1);
  };

  const onHandleActivity = (event) => {
    event.preventDefault();
    setActivityFilter(event.target.value);
  };
  

  const orderFilter = (event) => {
    event.preventDefault();
    const selectOrder = event.target.value;
    setOrderBy(selectOrder);
  };

  const handleFilter = () => {
    dispatch(filter(filtered,activityFilter));
  };

  const handleFilterOrder = () =>{
    dispatch(orderCountry(orderBy));
  }

  // -----------------PAGINADO----------------------

  const [pages, setPages] = useState(1);
  const [forPage, setForPage] = useState(10);

  const max = Math.ceil(countryFilter.length / forPage);

  return (
    <div className={style.container}>
        <div className={style.containerFilter}>
              <FilterByContinent
              onHandleActivity={onHandleActivity}
              onHandleFilter={onHandleFilter}
              activities={activities}
              handleFilter={handleFilter}
            />
            <FilterByOrder
              orderFilter={orderFilter}
              handleFilterOrder={handleFilterOrder}
            />
        </div>
        <div className={style.countriesContainer}>
        
            <div className={style.countries}>
            {countryFilter.length > 0 ? countryFilter
                .slice((pages - 1) * forPage, (pages - 1) * forPage + forPage)
                .map((count) => (
                <Cards
                    key={count.id}
                    id={count.id}
                    name={count.name}
                    continent={count.continent}
                    image={count.image}
                />
                )):<p className={style.ActivityAlert}>NO HAY ACTIVIDADES EN ESTE CONTINENTE</p>}
            </div>
      </div>
      <div className={style.Paginacion}>
        <Paginacion
          max={max}
          pages={pages}
          setPages={setPages}
          country={countryFilter}
        />
      </div>
        
    </div>
  );
}

export default HomePage;