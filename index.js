const init = () => {
    const myMap = new ymaps.Map(
      'map',
      {
        center: [55.7718, 37.6316],
        zoom: 16,
        controls: ['smallMapDefaultSet'],
      },
      {},
    );
    const myPlacemark = new ymaps.Placemark(
      [55.7724, 37.6252],
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: 'img/location.svg',
        iconImageSize: [70, 70],
        iconImageOffset: [-35, -70],
      },
    );
    myMap.geoObjects.add(myPlacemark);
  };
  ymaps.ready(init);