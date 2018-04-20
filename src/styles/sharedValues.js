const radius = '0.5rem';
const transition = '0.3s';

const maxWidth = {
  large: '110rem',
  medium: '80rem',
  small: '60rem'
}

const baseBoxShadow = {
  resting: '0 18px 35px rgba(50,50,93,.1), 0 8px 15px rgba(0,0,0,.07)',
  active: '0 18px 35px rgba(50,50,93,.1), 0 8px 15px rgba(0,0,0,.07)'
}

const boxShadow = {
  restingEmoji: `${baseBoxShadow.resting}`,
  activeEmoji: `${baseBoxShadow.active}`,
  resting: `${baseBoxShadow.resting}, 0 0 0 0.1rem #f0f2f7`,
  active: `${baseBoxShadow.active}, 0 0 0 0.1rem #f0f2f7`
}

const buttonBoxShadow = {
  resting: '0 0.4rem 0.8rem -0.1rem rgba(0,32,128,.1)',
  active: '0 0.4rem 0.8rem -0.1rem rgba(0,32,128,.1), 0 0 2rem 0.1rem #f0f2f7'
}

const hoverStates = {
  resting: 'translateY(0)',
  active: 'translateY(-0.2rem)'
}

const colors = {
  bodyBackground: '#1338CE',
};

export { radius, transition, boxShadow, buttonBoxShadow, hoverStates, maxWidth, colors };