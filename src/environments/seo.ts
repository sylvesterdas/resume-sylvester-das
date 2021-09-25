

const url = 'https://www.sylvesterdas.com';
const ogImagePath = url + "/assets/images/sylvester-das-og-image.png";
const title = "Sylvester Das - Software programmer, Website and Application developer";
const description = "My name is Sylvester Das, I have been working as a MEAN / MERN stack developer. I have a love of performance and object oriented programming, and I have lots of experience in the production of modern web and mobile applications with high performance. I loving creating awesome products and as per my clients’ need. I think user experience when I try to craft something for my clients. Making it awesome.";

const meta: any[] = [
  { name: 'author', content: 'Sylvester Das' },
  { name: 'description', content: description },
  { name: 'keywords', content: 'Software developer in mumbai, web application developer in mumbai, hire website developer in mumbai, Sylvester Das, mobile app developer in mumbai, hybrid app developer in mumbai, developer in mumbai, programmer in mumbai' },
  { name: 'google-site-verification', content: 'hQ0SYSOhJPTThGQDfYW9XvZIlJB6X2gs-K1nUny2PFA' },
  { name: 'p:domain_verify', content: '6a4ac6b3b4f9c9ef78bd2a2f0e90c42e' },
  { property: 'og:title', content: title },
  { property: 'og:url', content: url },
  { property: 'og:locale', content: 'en_us' },
  { property: 'og:type', content: 'website' },
  { property: 'og:site_name', content: title },
  { property: 'og:description', content: description },
  { property: 'og:image', content: ogImagePath },
  { property: 'og:image:type', content: 'image/png' },
  { property: 'og:image:width', content: '1200' },
  { property: 'og:image:height', content: '809' },
  { property: 'og:image:alt', content: 'Sylvester Das' },
]

const twitter = [
  { property: "twitter:card", content: "summary_large_image" },
  { property: "twitter:title", content: title },
  { property: "twitter:site", content: "@achillies_" },
  { property: "twitter:creator", content: "@achillies_" },
  { property: "twitter:image", content: ogImagePath },
  { property: "twitter:url", content: url },
  { property: "twitter:image:alt", content: 'Sylvester Das' },
]

export const seo = {
  meta,
  twitter
}
