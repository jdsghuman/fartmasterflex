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
    record: ['M256 152a104 104 0 1 0 104 104 104 104 0 0 0-104-104zm0 128a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm0-272C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 376a128 128 0 1 1 128-128 128 128 0 0 1-128 128z']
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