import React from 'react'
const Icon = ({ dimensions, fill, identifier, onClick, styles, viewBox}) => {

  const buildPaths = () => {
    const identifiers = identifier.split(" ");
    const paths = [];
    identifiers.forEach(identifier => {
      paths.push(icons[identifier].map((path, index) => <path key={index} d={path} />));
    });
    return paths;
  }

  const icons = {
    play:
      ['M112,111V401c0,17.44,17,28.52,31,20.16l247.9-148.37c12.12-7.25,12.12-26.33,0-33.58L143,90.84C129,82.48,112,93.56,112,111Z'],
    record: ['M256 152a104 104 0 1 0 104 104 104 104 0 0 0-104-104zm0 128a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm0-272C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 376a128 128 0 1 1 128-128 128 128 0 0 1-128 128z'],
    info: ['M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z'],
    email: ['M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z']
  }

  const customDimensions = dimensions ? { height: `${dimensions.height}px`, width: `${dimensions.width}px` } : null;
  const customStyles = fill ? { ...customDimensions, fill: fill } : dimensions;
  
  return(
      <svg
        xmlns = "http://www.w3.org/2000/svg"
        viewBox = { viewBox ? viewBox : "0 0 1024 1024" }
        className = { styles }
        onClick = { onClick }
        fill = { fill }
        style = { customStyles }
      >
      { buildPaths() }
      </svg>
    )
}

export default Icon;