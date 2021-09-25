

const ogImagePath = "/assets/images/sylvester-das-og-image.png";
const title = "Sylvester Das - Software programmer, Website and Application developer";
const description = "My name is Sylvester Das, I have been working as a MEAN / MERN stack developer. I have a love of performance and object oriented programming, and I have lots of experience in the production of modern web and mobile applications with high performance. I loving creating awesome products and as per my clients’ need. I think user experience when I try to craft something for my clients. Making it awesome.";
const url = 'https://www.sylvesterdas.com';

const meta = [
  { name: 'author', content: 'Sylvester Das' },
  { name: 'description', content: description },
  { name: 'keywords', content: 'Software developer in mumbai, web application developer in mumbai, hire website developer in mumbai, Sylvester Das, mobile app developer in mumbai, hybrid app developer in mumbai, developer in mumbai, programmer in mumbai' },
  { name: 'og:title', content: title },
  { name: 'og:url', content: url },
  { name: 'og:locale', content: 'en_us' },
  { name: 'og:type', content: 'website' },
  { name: 'og:site_name', content: title },
  { name: 'og:description', content: description },
  { name: 'og:image', content: ogImagePath },
  { name: 'og:image:type', content: 'image/png' },
  { name: 'og:image:width', content: '1200' },
  { name: 'og:image:height', content: '809' },
  { name: 'og:image:alt', content: 'Sylvester Das' },
  { name: 'google-site-verification', content: 'hQ0SYSOhJPTThGQDfYW9XvZIlJB6X2gs-K1nUny2PFA' },
  { name: 'p:domain_verify', content: '6a4ac6b3b4f9c9ef78bd2a2f0e90c42e' },
]

const twitter = [
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: title },
  { name: "twitter:site", content: "@achillies_" },
  { name: "twitter:creator", content: "@achillies_" },
  { name: "twitter:image", content: ogImagePath },
  { name: "twitter:url", content: url },
  { name: "twitter:image:alt", content: 'Sylvester Das' },
]

export const seo = {
  meta,
  twitter
}
