<template>
  <main :class="mainClass">
    <header class="header" id="header">
      <div class="header-wrapper">
        <div class="header-container">
          <g-link to="/" class="logo">
            <span class="logo--glyph">
              <LogoSVG />
            </span>
            <span class="logo--text">MADBIT Co.</span>
          </g-link>
          <nav class="nav-wrapper">
            <div class="menu">
              <div class="main-nav">
                <ul class="menu--wrap">
                  <li class="menu--item">
                    <g-link
                      to="/about/"
                      class="menu--link"
                      active-class="active"
                      >About</g-link
                    >
                  </li>
                  <li class="menu--item">
                    <a href="mailto:hello@madbit.co" class="menu--link"
                      >Contact</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>

    <slot />

    <footer class="bg-white bt b--light-gray bw2">
      <div
        class="ml-auto mr-auto mw8 ph3 ph4-ns ph5-m flex-m justify-between items-center"
      >
        <div class="w-100 w-50-m mv3-m flex items-center pt3 pt0-m">
          <div class="pt1">
            <LogoBottomSVG />
          </div>
          <div>
            <p class="mv2 f7 lh-title measure-tight">
              <strong>MADBIT Co</strong> is a design consultancy helping product
              people solve the right user problems.
            </p>
          </div>
        </div>
        <div
          class="w-100 w-20-m tc tr-m mt3 pt2 pb1 pv0-m mv3-m bt bw1 bw0-m b--near-white"
        >
          <div class="lh-solid flex items-center justify-around">
            <a
              href="https://twitter.com/madbitco"
              class="link-sm twitter"
              title="MADBIT Co. on Twitter"
            >
              <TwitterSVG class="db" />
            </a>
            <a
              href="https://github.com/madbitco"
              class="link-sm github"
              title="MADBIT Co. on GitHub"
            >
              <GithubSVG />
            </a>
            <a
              href="https://www.linkedin.com/company/madbitco"
              class="link-sm linkedin"
              title="MADBIT Co. on LinkedIn"
              ><LinkedinSVG />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

<script>
import LogoSVG from "~/icons/madbit-logo.svg";
import LogoBottomSVG from "~/icons/madbit-logo-bottom.svg";
import TwitterSVG from "~/icons/twitter.svg";
import GithubSVG from "~/icons/github.svg";
import LinkedinSVG from "~/icons/linkedin.svg";

export default {
  components: {
    LogoSVG,
    LogoBottomSVG,
    TwitterSVG,
    GithubSVG,
    LinkedinSVG
  },
  props: {
    mainClass: {
      type: String,
      required: false,
      default: null
    }
  }
};
</script>
