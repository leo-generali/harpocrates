const radius = '0.5rem';
const transition = '0.3s';

const boxShadow = {
  resting: '0 0.4rem 0.8rem -0.1rem rgba(0,32,128,.1), 0 0 0 0.1rem #f0f2f7',
  active: '0 0.4rem 0.8rem -0.1rem rgba(0,32,128,.1), 0 0 2rem 0.1rem #f0f2f7, 0 0 0 0.1rem #f0f2f7'
}

const hoverStates = {
  resting: 'translateY(0)',
  active: 'translateY(-0.2rem)'
}

export { radius, transition, boxShadow, hoverStates };