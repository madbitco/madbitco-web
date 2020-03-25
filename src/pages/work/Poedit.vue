<template>
  <Layout>
    <section class="section-header pv3">
      <div class="ml-auto mr-auto mw8 ph3 ph4-ns ph5-m">
        <p class="f7 ttu tracked b mb3 mt0 light-titanium">
          <g-link to="/" class="link-back">← Back</g-link> / Work
        </p>
        <h1 class="f3 f2-m mv2 mt4-m normal">Case Study: PoEdit</h1>
        <p class="measure-wide">
          Improving customer acquisition through meaningful product
          presentation.
        </p>
      </div>
    </section>

    <section class="mw8 center">
      <g-image src="~/images/work/poedit/poedit-case-1@2x.jpg" />
    </section>

    <section class="mv4-m">
      <div class="ml-auto mr-auto mw8 ph3 ph4-ns ph5-l mv4-m flex flex-wrap">
        <div class="mt3 mv3-m w-40-m pr3-m pr4-l">
          <h2 class="mv1 lh-title normal">Overview</h2>
        </div>
        <div class="mv3-m w-60-m pl3-m pl4-l">
          <p>
            PoEdit is a multi-platform desktop app for translating apps and
            websites, with <strong>over 60k of monthly active users</strong>. We
            were asked to update its marketing website to better articulate the
            core value proposition and as a result improve its baseline
            conversion rate.
          </p>
        </div>
        <div class="mt3 mv3-m w-40-m pr3-m pr4-l">
          <h2 class="mv1 lh-title normal">Methodology</h2>
        </div>
        <div class="mv3-m w-60-m pl3-m pl4-l">
          <p>
            Thanks to a diagnostic approach we uncovered how to better qualify
            leads and convert them into paying customers, by funneling prospects
            to a landing page made specifically for paid upgrades.
          </p>
          <p>
            The updated content and overall design did a much better job at
            selectivity, by focusing on two core audiences: professional
            translators and software developers.
          </p>
          <p>
            As maintainability was a key focus, we delivered a cohesive design
            system and style guide, to help the client continue producing
            accessible content in line with the new look and feel.
          </p>
        </div>
        <div class="mt3 mv3-m w-40-m pr3-m pr4-l">
          <h2 class="mv1 lh-title normal">Project Scope</h2>
        </div>
        <div class="mv3-m w-60-m pl3-m pl4-l">
          <ul>
            <li>Redesign with a particular focus on customer acquisition.</li>
            <li>
              Provide a better mobile experience via responsive web design.
            </li>
            <li>
              Optimise experience to facilitate download and purchase actions.
            </li>
            <li>Remove technical debt with a modern, maintainable codebase.</li>
          </ul>
        </div>
      </div>
    </section>

    <div
      class="ml-auto mr-auto mw8 ph3 ph4-ns ph5-l mv4-m flex-ns bt bb b--light-titanium"
    >
      <div class="mv3 mv4-l w-100 w-25-ns pr3-m">
        <h4 class="mv0 lh-title">Focus</h4>
        <p class="f6-m mv0">User Journeys, Copywriting</p>
      </div>
      <div class="mv3 mv4-l w-100 w-25-ns pl3-m">
        <h4 class="mv0 lh-title">Platform</h4>
        <p class="f6-m mv0">Web, NodeJS</p>
      </div>
      <div class="mv3 mv4-l w-100 w-25-ns pl3-m">
        <h4 class="mv0 lh-title">Deliverables</h4>
        <p class="f6-m mv0">Strategy, Concept, UX, UI</p>
      </div>
      <div
        class="mv3 mv4-l w-100 w-25-ns pl3-m tr-m flex justify-end-m items-center"
      >
        <a href="https://poedit.net" class="btn-ghost">Visit website</a>
      </div>
    </div>

    <section class="mv4-m mw8 center">
      <figure class="mv3 mh0 pa0">
        <g-image
          src="~/images/work/poedit/poedit-case-2@2x.jpg"
          alt="PoEdit customer benefits"
        />
        <figcaption>"Features" presented as customer benefits.</figcaption>
      </figure>

      <figure class="mv3 mh0 pa0">
        <g-image
          src="~/images/work/poedit/poedit-style-guide@2x.png"
          alt="PoEdit style guide"
        />
        <figcaption>Partial style guide for PoEdit</figcaption>
      </figure>

      <figure class="mv3 mh0 pa0">
        <g-image
          src="~/images/work/poedit/poedit-case-3@2x.jpg"
          alt="PoEdit mobile pages"
        />
        <figcaption>
          Responsive implementation focused on great readability on mobiles
        </figcaption>
      </figure>

      <figure class="mv3 mh0 pa0">
        <g-image
          src="~/images/work/poedit/poedit-case-4@2x.jpg"
          alt="PoEdit website hero illustration"
        />
        <figcaption>Homepage illustration for PoEdit by Adrian Lam</figcaption>
      </figure>
    </section>

    <Contact />
  </Layout>
</template>

<script>
import Contact from "~/components/Contact";
export default {
  metaInfo: {
    title: "Case Study: PoEdit",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Improving customer acquisition through meaningful product presentation."
      }
    ]
  },
  components: {
    Contact
  }
};
</script>
