<template>
  <div class="container">
    <section class="section-bottom section-top">
      <div>
        <p
          class="title is-2 has-text-centered has-text-primary is-uppercase has-text-weight-bold"
        >
          nossa equipe
        </p>
        <hr style="border: 1px solid #0075bb"/>
      </div>
      <figure class="image is-2by1">
        <iframe
          class="has-ratio"
          :src="selectedVideo"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </figure>
      <carousel
        :perPageCustom="[
          [0, 1],
          [769, 2],
          [1024, 3]
        ]"
        :navigationClickTargetSize="0"
        :navigationEnabled="true"
        :paginationEnabled="false"
      >
        <slide
          @slideclick="changeVideo(video.url)"
          v-for="(video, index) in videos"
          :key="index"
        >
          <figure class="image is-clickable" style="margin:2rem">
            <img :src="video.img" alt="" />
          </figure>
        </slide>
      </carousel>
    </section>
  </div>
</template>

