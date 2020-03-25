<template>
  <Layout>
    <section class="section-header pv3">
      <div class="ml-auto mr-auto mw8 ph3 ph4-ns ph5-m">
        <p class="f7 ttu tracked b mb3 mt0 light-titanium">
          <g-link to="/" class="link-back">← Back</g-link> / Work
        </p>
        <h1 class="f3 f2-m mv2 mt4-m normal">
          Case Study: Printdesigns
        </h1>
        <p class="measure-wide">
          Achieving 200% YoY revenue growth for a thriving printer through
          iterative design.
        </p>
      </div>
    </section>

    <section class="mw8 center">
      <g-image
        src="~/images/work/printdesigns/printdesigns-splash@2x.jpg"
        alt="mobile checkout complete"
      />
    </section>

    <section class="mv4-m">
      <div class="ml-auto mr-auto mw8 ph3 ph4-ns ph5-l mv4-m flex flex-wrap">
        <div class="mt3 mv3-m w-40-m pr3-m pr4-l">
          <h2 class="mv1 lh-title normal">Overview</h2>
        </div>
        <div class="mv3-m w-60-m pl3-m pl4-l">
          <p>
            Printdesigns is a nationally recognised large format printer and a
            seller of exhibition displays. Since 2016 we are responsible for the
            continuous user experience improvements to their online store.
          </p>
        </div>
        <div class="mt3 mv3-m w-40-m pr3-m pr4-l">
          <h2 class="mv1 lh-title normal">Methodology</h2>
        </div>
        <div class="mv3-m w-60-m pl3-m pl4-l">
          <p>
            Through close collaboration, deep understanding of business and our
            iterative approach to design, we’ve been able to help them stay
            ahead of the competition.
          </p>
          <p>
            Last year, we streamlined their online checkout by mapping customer
            journeys. Now, it meets audience requirements for a secure, clear
            and informative process that goes out of the way, while an improved
            artwork uploading process ensures customers can enjoy smoother
            experience each time they place an order for a printed product.
          </p>
          <p>
            In addition, we helped customers satisfy their primary needs
            (download/print invoices, track order progress, contact customer
            service), by overhauling the entire customer account area, which now
            allows customers to manage their accounts from any device with a web
            browser and Internet connection.
          </p>
        </div>
        <div class="mt3 mv3-m w-40-m pr3-m pr4-l">
          <h2 class="mv1 lh-title normal">Project Scope</h2>
        </div>
        <div class="mv3-m w-60-m pl3-m pl4-l">
          <ul>
            <li>Redesign with a particular focus on customer retention.</li>
            <li>Better mobile experience via responsive web design.</li>
            <li>
              Improved checkout experience to facilitate higher conversion
              rates.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div
      class="ml-auto mr-auto mw8 ph3 ph4-ns ph5-l mv4-m flex-ns bt bb b--light-titanium"
    >
      <div class="mv3 mv4-l w-100 w-25-ns pr3-m">
        <h4 class="mv0 lh-title">Focus</h4>
        <p class="f6-m mv0">Customer Journeys, Interactions</p>
      </div>
      <div class="mv3 mv4-l w-100 w-25-ns pl3-m">
        <h4 class="mv0 lh-title">Platform</h4>
        <p class="f6-m mv0">Web, PHP, MySQL</p>
      </div>
      <div class="mv3 mv4-l w-100 w-25-ns pl3-m">
        <h4 class="mv0 lh-title">Deliverables</h4>
        <p class="f6-m mv0">Strategy, Concept, UX, UI</p>
      </div>
      <div
        class="mv3 mv4-l w-100 w-25-ns pl3-m tr-m flex justify-end-m items-center"
      >
        <a href="https://www.printdesigns.com" class="btn-ghost"
          >Visit website</a
        >
      </div>
    </div>

    <div class="ml-auto mr-auto mw8 ph3 ph4-ns ph5-l">
      <div class="flex-ns">
        <div class="mv3 mb0-ns w-100 w-25-ns pr3-m">
          <h2 class="mv0 lh-title normal">Outcomes</h2>
        </div>
        <div class="mv3 mb0-ns w-100 w-25-ns pr3-m tr-ns">
          <h4 class="mv0 normal lh-title">Engagement</h4>
          <p class="f1 mb3 lh-title">
            +<span class="b">55</span><small>%</small>
          </p>
        </div>
        <div class="mv3 mb0-ns w-100 w-25-ns pr3-m tr-ns">
          <h4 class="mv0 normal lh-title">Conversions</h4>
          <p class="f1 mb3 lh-title">
            +<span class="b">380</span><small>%</small>
          </p>
        </div>
        <div class="mv3 mb0-ns w-100 w-25-ns pr3-m tr-ns">
          <h4 class="mv0 normal lh-title">Revenue</h4>
          <p class="f1 mb3 lh-title">
            +<span class="b">210</span><small>%</small>
          </p>
        </div>
      </div>
    </div>

    <section class="mt4-m mw8 center">
      <div class="mv2">
        <g-image
          src="~/images/work/printdesigns/printdesigns-case-1@2x.png"
          alt=""
        />
      </div>

      <div class="mv2">
        <g-image
          src="~/images/work/printdesigns/printdesigns-case-3@2x.jpg"
          alt=""
        />
      </div>

      <div class="mv2">
        <g-image
          src="~/images/work/printdesigns/printdesigns-case-2@2x.png"
          alt=""
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
    title: "Case Study: Printdesigns",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Achieving 200% YoY revenue growth for a thriving printer through iterative design."
      }
    ]
  },
  components: {
    Contact
  }
};
</script>
