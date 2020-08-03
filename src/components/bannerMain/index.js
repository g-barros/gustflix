import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';

function getYoutubeId (youtubeURL) {
    return youtubeURL
        .replace(
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
            '$7',
        );
}

function BannerMain({
    videoTitle,
    videoDescription,
    url
}) {
    const youtubeID = getYoutubeId(url);
    const bgUrl = `https://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`;

    return (
        <BannerMainContainer backgroundImage={bgUrl}>
            <ContentAreaContainer>
                <ContentAreaContainer.Item>
                    <ContentAreaContainer.Title>
                        {videoTitle}
                    </ContentAreaContainer.Title>
                    <ContentAreaContainer.Description>
                        {videoDescription}
                    </ContentAreaContainer.Description>
                </ContentAreaContainer.Item>
                <ContentAreaContainer.Item>
                    <VideoIframeResponsive youtubeID={youtubeID} />
                    <WatchButton>
                        Assistir
                    </WatchButton>
                </ContentAreaContainer.Item>
            </ContentAreaContainer>
        </BannerMainContainer>
    );
}

export default BannerMain;