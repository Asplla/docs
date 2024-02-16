<template><div><div class="index-content">
  <div class="index-video-container">
		<video src="/src/video/banner_bg.mp4" muted="muted" autoplay="autoplay" playsinline="" loop="loop" class="heroVideo"></video>
	</div>
  <div class="index-video-wrapper">
			<div class="index-video-wrapper-roll">
				<div class="swiper-wrapper">
					<div class="swiper-slide">为站长提供动力</div>
				</div>
		</div>
		<div class="index-video-wrapper-slogn">提升城市幸福生活指数</div>
	</div>
</div></div></template>



<style>
.index-content {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
}

.index-content .index-video-container {
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

.index-content .index-video-container:after {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(19, 20, 28, 0);
    background-image: -webkit-linear-gradient(top, rgba(19, 20, 28, 0), rgba(19, 20, 28, .8));
    background-image: -o-linear-gradient(top, rgba(19, 20, 28, 0) 0, rgba(19, 20, 28, .8) 100%);
    background: -ms-linear-gradient(top, rgba(19, 20, 28, 0) 0, rgba(19, 20, 28, .8) 100%);
    background: linear-gradient(180deg, rgba(19, 20, 28, 0) 0, rgba(19, 20, 28, .8));
    content: "";
}

.index-content .index-video-container video,
.index-content .index-video-container img {
    width: 100vw;
    min-width: 100vw;
    max-width: 100vw;
    height: 100vh;
    min-height: 100vh;
    object-fit: cover;
}

.index-content .index-video-wrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    font-family: AvenirNext-DemiBold, Arial, Helvetica, sans-serif;
    width: 100%;
    padding: 0 4rem 6.25rem;
    color: rgba(255, 255, 255, 1);
}

@media (max-width: 1024px) {
    .index-content .index-video-wrapper {
        padding: 0 1.5rem 3.125rem;
    }
}

.index-content .index-video-wrapper .index-video-wrapper-roll {
    font-size: 2.25rem;
    height: 2.75rem;
    margin-bottom: 0.625rem;
    overflow: hidden;
}

@media (max-width: 1024px) {
    .index-content .index-video-wrapper .index-video-wrapper-roll {
        font-size: 1.2rem;
        height: 1.5rem;
        margin-bottom: 0.3125rem;
        overflow: hidden;
    }
}

.index-content .index-video-wrapper .index-video-wrapper-roll .swiper-slide {
    height: 2.75rem;
    line-height: 2.75rem;
}

@media (max-width: 1024px) {
    .index-content .index-video-wrapper .index-video-wrapper-roll .swiper-slide {
        height: 24px;
        line-height: 24px;
    }
}

.index-content .index-video-wrapper .index-video-wrapper-slogn {
    font-size: 3.3125rem;
    font-weight: 700;
    line-height: 4rem;
}

@media (max-width: 1024px) {
    .index-content .index-video-wrapper .index-video-wrapper-slogn {
        font-size: 1.5rem;
        line-height: 1.875rem;
    }
}
</style>