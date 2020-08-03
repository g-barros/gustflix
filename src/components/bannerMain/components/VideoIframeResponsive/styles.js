import styled from 'styled-components';

export const VideoContainer = styled.div`
    padding-top: 56.25%;
    position: relative;
    overflow: hidden;
    width: 100%;
    @media (max-width: 800px) {
        display: none;
    }
`;

export const ResponsiveIframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
`;