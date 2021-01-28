import React from "react";
import Heading from "../layout/Heading";
import HotelList from "./HotelList";

export function HotelsPage() {
	return (
		<>
		<Heading title="Hotels"/>
		<HotelList></HotelList>
		</>
	);
}

export default HotelsPage;