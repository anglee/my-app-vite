import styled from 'styled-components';

const Logo = styled.img<{ shadowColor: string; isSpinning?: boolean }>`
  font-size: 16px;
  padding: 1.5em;
  height: 6em;
  box-sizing: content-box;
  will-change: filter;
  &:hover {
    filter: drop-shadow(0 0 2em ${(prop) => prop.shadowColor});
  }
  ${(prop) =>
    prop.isSpinning
      ? `
  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: logo-spin infinite 20s linear;
  }`
      : ``}
`;

export default Logo;
