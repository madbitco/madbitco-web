<template>
  <Layout>
    <section class="section-header pv3">
      <div class="ml-auto mr-auto mw8 ph3 ph4-ns ph5-m">
        <p class="f7 ttu tracked b mb3 mt0 light-titanium">
          <g-link to="/" class="link-back">← Back</g-link> / Work
        </p>
        <h1 class="f3 f2-m mv2 mt4-m normal">
          Case Study: World Food Programme
        </h1>
        <p class="measure-wide">
          Improving donor lead-generation through effective landing page design
          and exceptional performance.
        </p>
      </div>
    </section>

    <section class="mv4-m">
      <div class="ml-auto mr-auto mw8 pb2 ph3 ph4-ns ph5-l flex flex-wrap">
        <div class="mv3 w-60-m pr3-m pr4-l">
          <h3 class="mv2 f5 ttu tracked lh-title">Overview</h3>
          <p>
            World Food Programme is one of the biggest not-for-profit
            organisations in the world. They deal with hunger-related
            emergencies and a humanitarian aid on a daily basis, but there is
            only so much you can do on your own.
          </p>
          <p>
            To raise awareness of global emergencies, they asked us to design
            and code various templates, to help them quickly deploy new landing
            pages for specific emergencies and campaigns. Said templates had to
            be effective but also easy to use by their fundraising team. In
            addition, performance was key to making sure anyone could reach new
            landing pages whether on a fast WiFi-connected laptop as well as on
            a 3G-enabled smartphone.
          </p>
          <p></p>
          <p>
            In addition to landing pages, we’ve designed and developed a
            universal design system and a style guide for WFP, to aid with rapid
            design and development of new content pages without our direct
            involvement.
          </p>
          <p>
            Sadly, we can’t share any specific numbers, but suffice to say, most
            of our campaign templates have been in active use since 2014.
          </p>
        </div>
        <div class="mv3 w-40-m pl3-m pl4-l content">
          <h3 class="mv2 f5 ttu tracked lh-title">Contributions</h3>
          <ul class="mv2">
            <li>Audience Research</li>
            <li>Responsive Web Design</li>
            <li>Design Systems</li>
            <li>Interface Design</li>
            <li>Frontend Development</li>
            <li>Quality Assurance</li>
          </ul>
          <h3 class="mb2 f5 ttu tracked lh-title">Links</h3>
          <ul class="mv2">
            <li>
              <a href="https://www.wfp.org" class="link-arrow">Visit website</a>
            </li>
            <li>
              <a href="https://github.com/wfp/ui" class="link-arrow"
                >WFP UI Kit</a
              >
            </li>
            <li>
              <a href="https://www.wfp.org/uiguide" class="link-arrow"
                >WFP UI Guidelines</a
              >
            </li>
            <li>
              <a href="http://cdn.wfp.org/2016/syria/" class="link-arrow"
                >Syria Emergency (2016)</a
              >
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mw8 center">
      <div class="mv2">
        <g-image
          src="~/images/work/wfp/wfp-case-1@2x.jpg"
          alt="case study screenshot"
        />
      </div>

      <div class="mv2">
        <g-image
          src="~/images/work/wfp/wfp-case-2@2x.jpg"
          alt="case study screenshot"
        />
      </div>

      <div class="mv2">
        <g-image
          src="~/images/work/wfp/wfp-case-3@2x.jpg"
          alt="case study screenshot"
        />
      </div>
    </section>

    <Contact />
  </Layout>
</template>

<script>
import Contact from "~/components/Contact";
export default {
  metaInfo: {
    title: "Case Study: World Food Programme",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Improving donor lead-generation through effective landing page design and exceptional performance."
      }
    ]
  },
  components: {
    Contact
  }
};
</script>
