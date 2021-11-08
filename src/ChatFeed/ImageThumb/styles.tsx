import { Properties } from 'csstype';

export const styles = {
  loadingContainer: {
    cursor: 'pointer',
    textAlign: 'right',
    display: 'inline-block',
    objectFit: 'cover',
    borderRadius: '0.3em',
    marginRight: '2px',
    marginBottom: '4px',
    height: '30vw',
    width: '30vw',
    maxHeight: '200px',
    maxWidth: '200px',
    minHeight: '100px',
    minWidth: '100px',
    backgroundColor: '#d9d9d9',
  } as Properties,
  thumbnail: {
    fontFamily: 'Avenir',
    cursor: 'pointer',
    textAlign: 'right',
    display: 'inline',
    objectFit: 'cover',
    borderRadius: '0.3em',
    padding: '2px',
    color: 'white',
    // Size
    height: '30vw',
    width: '30vw',
    maxHeight: '200px',
    maxWidth: '200px',
    minHeight: '100px',
    minWidth: '100px',
  } as Properties,
};
