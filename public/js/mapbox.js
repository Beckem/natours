export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYmVja2VtIiwiYSI6ImNrc2swZ3R4ZTA0MWsydXNvYTNmZDU0NmMifQ.3NTNU3RJqEI9QEr7M3JWbA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/beckem/ckwchy6no210814mpidyqelxk',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    //Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    //Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
