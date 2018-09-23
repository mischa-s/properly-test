module.exports = async function(item) {
  const { location } = item;
  if (!location) return;

  const lat = location[0];
  const lng = location[1];

  return fetch(
    `http://api.geonames.org/findNearbyPlaceNameJSON?formatted=true&lat=${lat}&lng=${lng}&username=properlyTest&style=full`
  )
    .then(res => res.json())
    .then(data => {
      if (!data.geonames[0]) item.city = "loading...";
      item.city = data.geonames[0].name;
      return item;
    });
};
