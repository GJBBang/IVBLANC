import React, { useEffect, useState } from 'react';

function StyleLook({ selectedClothes }) {
  const [shirts, setShirts] = useState({});
  const [pants, setPants] = useState({});
  const [outer, setOuter] = useState({});
  const [shoes, setShoes] = useState({});
  const [bag, setBag] = useState({});
  const [hat, setHat] = useState({});
  const [others, setOthers] = useState({});

  useEffect(() => {
    // 값이 없다면 undefined가 뜬다.
    for (let i = 0; i < selectedClothes.length; ++i) {
      switch (selectedClothes[i].category) {
        case 1:
          setShirts(selectedClothes.find((clothes) => clothes.category === 1));
          break;
        case 2:
          setPants(selectedClothes.find((clothes) => clothes.category === 2));
          break;
        case 3:
          setOuter(selectedClothes.find((clothes) => clothes.category === 3));
          break;
        case 4:
          setShoes(selectedClothes.find((clothes) => clothes.category === 4));
          break;
        case 5:
          setBag(selectedClothes.find((clothes) => clothes.category === 5));
          break;
        case 6:
          setHat(selectedClothes.find((clothes) => clothes.category === 6));
          break;
        default:
          setOthers(selectedClothes.find((clothes) => clothes.category === 7));
      }
    }
    // setShirts(selectedClothes.find((clothes) => clothes.category === 1));
    // setPants(selectedClothes.find((clothes) => clothes.category === 2));
    // setOuter(selectedClothes.find((clothes) => clothes.category === 3));
    // setShoes(selectedClothes.find((clothes) => clothes.category === 4));
    // setBag(selectedClothes.find((clothes) => clothes.category === 5));
    // setHat(selectedClothes.find((clothes) => clothes.category === 6));
    // setOthers(selectedClothes.find((clothes) => clothes.category === 7));
  }, []);

  return (
    <div className='wrapper'>
      <div className='col'>
        {/* {selectedClothes.map((clothesData) => (
          <div className='look' key={clothesData.clothesId}>
            <img
              className='MyStyleClothesItemImg'
              src={require(`../../assets/${clothesData.url}`)}
              // src={clothesData.url}
              alt={clothesData.clothesId}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
              }}
            />
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default StyleLook;
