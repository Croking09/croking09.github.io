import styled from 'styled-components';

const ScrollIndicator = ({ className }) => {
  return (
    <StyledWrapper>
      <div className={"main__action " + className}>
        <div className="main__scroll">
          <div className="main__scroll-box">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z" fill="#fff" />
            </svg>
          </div>
          <span className="main__scroll-text">Scroll</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  a {
    text-decoration: none;
  }

  .main__scroll-text {
    color: #fff;
  }

  .main__action .main__scroll-box {
    animation: scroll-down 3s infinite;
  }

  @keyframes scroll-down {
    0%, 100% {
      transform: translateY(0rem);
      opacity: 1;
    }
    35% {
      transform: translateY(0rem);
      opacity: 1;
    }
    70% {
      transform: translateY(-1rem);
      opacity: 1;
    }
  }
`;

export default ScrollIndicator;
