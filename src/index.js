import validateColor from 'validate-color';

const clp = ({type, prefix, message, background, color}) => {
  // Only do any of this if 'console.log' is supported
  if (typeof parent.window.console === 'object') {
    const clpTypes = [
      {
        name: 'info',
        background: '#abdcfb',
        color: 'black',
      },
      {
        name: 'ok',
        background: 'purple',
        color: 'white',
      },
      {
        name: 'error',
        background: 'red',
        color: 'white',
      },
      {
        name: 'warning',
        background: 'darkorange',
        color: 'white',
      },
      {
        name: 'attention',
        background: '#ffdc00',
        color: 'black',
      },
      {
        name: 'success',
        background: '#bada55',
        color: 'black',
      },
      {
        name: 'default',
        background: 'white',
        color: 'black',
      },
    ];
    let theStyle = '';
    if (type) {
      for (let t in clpTypes) {
        const {
          name = '',
          background = '',
          color = '',
        } = clpTypes[t];
        if (type.toLowerCase() === name) {
          theStyle = `background: ${background}; color: ${color}`;
        }
      }
    }
    if (theStyle === '') {
      // if 'theStyle' is still an empty string at this point, check for parameters
      let theBackground = background && validateColor(background) ? background.toLowerCase() : '';
      let theColor = color && validateColor(color) ? color.toLowerCase() : '';
      theStyle = `background: ${theBackground ? theBackground : 'white'}; color: ${theColor ? theColor : 'black'}`;
    }
    const thePrefix = prefix ? `[${prefix}] ` : type ? `[${type}] ` : '';
    parent.window.console.log(`${thePrefix}%c ${message} `, theStyle);
  }
};

export default clp;
