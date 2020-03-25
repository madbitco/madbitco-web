<template>
  <Layout>
    <section class="section-header pv3">
      <div class="ml-auto mr-auto mw8 ph3 ph4-ns ph5-m">
        <p class="f7 ttu tracked b mb3 mt0 light-titanium">
          <g-link to="/" class="link-back">← Back</g-link> / Work
        </p>
        <h1 class="f3 f2-m mv2 mt4-m normal">
          Case Study: tigerVPN
        </h1>
        <p class="measure-wide">
          Bringing a new SaaS product to mainstream in a competitive market
          vertical with informative design and exceptional user experience.
        </p>
      </div>
    </section>

    <section class="mv4-m">
      <div class="ml-auto mr-auto mw8 pb2 ph3 ph4-ns ph5-l flex flex-wrap">
        <div class="mv3 w-60-m pr3-m pr4-l">
          <h3 class="mv2 f5 ttu tracked lh-title">Overview</h3>
          <p>
            Choosing a fast, secure and reliable service is a challenge for
            people who do not necessarily understand the concept of
            <em>Virtual Private Networking</em>. tigerVPN aims to bridge the gap
            between a privacy geek and the average Joe.
          </p>
          <p>
            Through lighthearted and informative copywriting, as well as
            easy-to-follow design of a sign-up flow, we’ve helped
            <em>tigerVPN</em> not only achieve their dream of bringing the VPN
            to mainstream, but also become profitable from day one.
          </p>
          <p>
            In addition, just a few months after launch they’ve received
            financial and logistical support from <em>Voxility</em>, one of the
            biggest <em>Infrastructure-as-a-Service</em> providers in Europe.
          </p>
        </div>
        <div class="mv3 w-40-m pl3-m pl4-l content">
          <h3 class="mv2 f5 ttu tracked lh-title">Contributions</h3>
          <ul>
            <li>Audience Research</li>
            <li>Product Strategy</li>
            <li>Copywriting</li>
            <li>Experience Design</li>
            <li>User Interface Design</li>
            <li>Responsive Web Design</li>
          </ul>
          <p>
            <a href="https://www.tigervpn.com" class="link-arrow"
              >Visit website</a
            >
          </p>
        </div>
      </div>
    </section>

    <section class="mw8 center">
      <div class="mv2">
        <g-image src="~/images/work/tigervpn/tigervpn-case-1@2x.jpg" alt="" />
      </div>

      <div class="mv2">
        <g-image src="~/images/work/tigervpn/tigervpn-case-2@2x.jpg" alt="" />
      </div>

      <section class="mv3 mv4-m ph3 ph4-ns ph6-m pv4 pv5-m container bg-white">
        <blockquote class="ma0 mw6 ml-auto mr-auto">
          <p class="mb2 i f4">
            “These guys are pixel perfectionists. Working with MADBIT was a
            charm as they understood what we wanted to achieve and even
            suggested design and usability adjustments that we did not
            anticipate.”
          </p>
          <p class="b f6 mt2 mb0">
            &mdash;Sebastian Scherl, CEO of Tiger at Work
          </p>
        </blockquote>
      </section>

      <div class="mv2">
        <g-image src="~/images/work/tigervpn/tigervpn-case-3@2x.jpg" alt="" />
      </div>
    </section>

    <Contact />
  </Layout>
</template>

<script>
import Contact from "~/components/Contact";
export default {
  metaInfo: {
    title: "Case Study: tigerVPN",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Bringing a new SaaS product to mainstream in a competitive market vertical with informative design and exceptional user experience."
      }
    ]
  },
  components: {
    Contact
  }
};
</script>
