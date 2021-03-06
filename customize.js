/* Customization Guide available on:
  https://gatsby-blog-mdx.now.sh/2020/05/4-customize/
  ======================================== */
const config = {
  /* Site
  ========================================= */
  title: `aalphaca's devlog`,          // Displayed in header
  description: `Always Awake`,     // Site description
  maxWidth: "1024px",                  // Max width of website
  enableAbout: true,                  // Enables about page
  siteUrl: `https://blogik.netlify.app/`, // For sitemap & RSS feed
  useScrollIndicator: true,           // Use scroll indicator on top of screen in posts

  /* Profile
  ========================================= */
  author: `욕심많은 알파카`,                             // Name shows on profile
  profileDescription: "알파카의 Always Awake Devlog",   // Shows under author name
  profileImageName: `profile.jpeg`,                  // Place profile.jpg/.jpeg/.png in _assets folder
  location: "Seoul",                                      // Location under profileDescription. "" --> disabled
  footerLink: "https://github.com/SeongIkKim",                                    // Link to page when you click footer name

  /* Social Media Links
      accountName & emailAddress: leave blank ("") to disable
      showHeaderIcon: shows social media icon in header. When true, must have account name set
  ========================================= */
  socialMediaLinks: {
    email: { emailAddress: "kpic1638@gmail.com", showHeaderIcon: true },
    github: { accountName: "SeongIkKim", showHeaderIcon: true },
    facebook: { accountName: "KimSeongIk", showHeaderIcon: true },
    twitter: { accountName: "", showHeaderIcon: false },
    instagram: { accountName: "seongik_k", showHeaderIcon: true },
    linkedIn: { accountName: "", showHeaderIcon: false },   // Use URL after "linkedin.com/"
    medium: { accountName: "", showHeaderIcon: false },   // Use URL after "medium.com/@"
  },

  /* Social Media Share Buttons--available below every post
  ========================================= */
  shareButtons: { email: true, facebook: true, twitter: false, reddit: true, linkedIn: false },

  /* Comments
  ========================================= */
  comments: {
    facebook: { enabled: true, appId: "" },      // appId: optional, but used to moderate fb comments
    disqus: { enabled: true, shortName: "" },   // Check your shortName on https://disqus.com
    utterances: { enabled: false, repoUrl: "" }, // i.e. 'ellismin/gatsby-blog-mdx'
  },

  /* More Custom Settings
  ========================================= */
  defaultTheme: "light",                      // Options: dark / light -- applied to first visitors
  showTimeToRead: false,                      // Shows time to read for each post in main page
  breakCodeLines: true,                      // Breaks long code lines instead of having horizontal scroll
  faviconSrc: `_assets/icon-camel.png`,        // Favicon
  gaTrackingId: `G-E4NQV7DLZX`,                           // Your google analytics tracking id--i.e. UA-*****
  googleAdSenseId: ``,                        // Your google AdSense client id--i.e. ca-pub-****
}

module.exports = config
