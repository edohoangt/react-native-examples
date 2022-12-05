import { useEffect, useState } from "react";
import PlaceLists from "../components/places/PlacesList";

import { useIsFocused } from "@react-navigation/native";
import fetchPlaces from "../util/database";

function AllPlaces({ route }) {
  const isFocused = useIsFocused();
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }

    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused]);

  return <PlaceLists places={loadedPlaces} />;
}

export default AllPlaces;
