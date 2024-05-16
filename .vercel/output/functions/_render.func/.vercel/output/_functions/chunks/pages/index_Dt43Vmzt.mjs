/* empty css                          */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro, i as renderComponent, j as renderHead, k as renderSlot } from '../astro_DYzw0DtZ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Image } from './generic_C8TK-Tib.mjs';

const fullName = "Javier Moreno";
const metadata = {
	title: "Javier Moreno - Frontend Developer",
	description: "Angular and Flutter developer with experience in web and mobile development.",
	keywords: [
		"Javier Moreno",
		"Spain",
		"Frontend Developer",
		"Mobile Developer",
		"TypeScript",
		"JavaScript",
		"Flutter",
		"Angular",
		"Dart"
	]
};
const email = "javimoreno.tec@gmail.com";
const location = "Huelva, Spain";
const description = [
	"Hola, soy Javier Moreno. Actualmente soy Front End & Mobile developer con experiencia desarrollando webs, aplicaciones webs y aplicaciones móviles.",
	"Especializado en Javascript con experiencia profesional en Angular y Vue. También tengo experiencia trabajando con Ionic y Flutter.",
	"Amante de la innovación y todo lo relacionado con la generación de nuevos conocimientos. Afronto los problemas con una sonrisa y lo resuelvo lo antes posible. Muy calculador sobre el tiempo y el trabajo que hago."
];
const links = {
	twitter: "https://twitter.com",
	linkedin: "https://www.linkedin.com/in/javier-moreno-valle-813a18135/",
	github: "https://github.com/Br0wnZ",
	mail: "mailto:javimoreno.tec@gmail.com",
	blog: "https://blog.example.com"
};
const skills = [
	"html",
	"css",
	"sass",
	"bootstrap",
	"tailwind",
	"javascript",
	"typescript",
	"dart",
	"flutter",
	"node",
	"git",
	"astro"
];
const projects = [
	{
		imageSrc: "https://res.cloudinary.com/dfulu02wk/image/upload/v1715753952/qr_kjojid.webp",
		altText: "QR Code Scanner",
		description: "QR Code Scanner",
		codeSrc: "",
		liveDemoURL: "https://play.google.com/store/apps/details?id=com.bubulkapp.qrscanner&pcampaignid=web_share",
		technologies: [
			"flutter",
			"dart"
		]
	},
	{
		imageSrc: "https://res.cloudinary.com/dfulu02wk/image/upload/v1715753801/notapp_v5keqr.webp",
		altText: "Mobile notes app",
		description: "Mobile notes app",
		codeSrc: "",
		liveDemoURL: "https://play.google.com/store/apps/details?id=com.bubulkapp.notapp&pcampaignid=web_share",
		technologies: [
			"flutter",
			"dart"
		]
	},
	{
		imageSrc: "https://res.cloudinary.com/dfulu02wk/image/upload/v1715753800/electricity-price_xqiw0n.webp",
		altText: "Electricity price",
		description: "Electricity price",
		codeSrc: "https://github.com/Br0wnZ/flutter-electricity-price",
		liveDemoURL: "https://play.google.com/store/apps/details?id=com.bubulkapp.electricity_price",
		technologies: [
			"flutter",
			"dart"
		]
	},
	{
		imageSrc: "https://res.cloudinary.com/dfulu02wk/image/upload/v1715753800/1min2win_p4lbey.webp",
		altText: "1 minute 2 win",
		description: "1 minute 2 win",
		codeSrc: "",
		liveDemoURL: "https://play.google.com/store/apps/details?id=com.bubulkapp.one_min_to_win&pcampaignid=web_share",
		technologies: [
			"flutter",
			"dart"
		]
	}
];

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="about" data-astro-cid-4khl2bf4> <div class="max-w-[1320px] mx-auto sm:px-4" data-astro-cid-4khl2bf4> <div class="flex flex-wrap" data-astro-cid-4khl2bf4> <div class="w-full md:w-full lg:w-1/2 pr-4 pl-4" data-astro-cid-4khl2bf4> <section id="about_section" class="my-5 lg:my-0" data-aos="fade-right" data-aos-mirror="true" data-aos-duration="1500" data-astro-cid-4khl2bf4> <h2 class="mb-12 font-paint text-xl text-center" data-astro-cid-4khl2bf4>ABOUT ME</h2> ${description.map((desc) => renderTemplate`<p class="mb-8" data-astro-cid-4khl2bf4>${desc}</p>`)} </section> </div> <div class="flex flex-wrap w-full lg:w-1/2 pr-4 pl-4" data-astro-cid-4khl2bf4> <section id="skills_section" class="flex flex-wrap w-full my-5 xl:mb-0" data-aos="fade-left" data-aos-duration="1000" data-astro-cid-4khl2bf4> <h2 class="font-paint italic text-center text-xl w-full" data-astro-cid-4khl2bf4>SKILLS</h2> <div class="flex flex-wrap items-center" data-astro-cid-4khl2bf4> ${skills.map((skill) => renderTemplate`<div class="w-1/3 xs:w-1/2 md:w-1/3 p-2" data-astro-cid-4khl2bf4> <picture data-astro-cid-4khl2bf4> <img class="pb-2 h-8 md:h-10 xl:h-12 hover:scale-110 transition duration-300 ease-in-out" loading="lazy"${addAttribute(`/img/stack-icons/${skill}.svg`, "src")}${addAttribute(skill.toUpperCase(), "alt")} data-astro-cid-4khl2bf4> </picture> <span class="font-medium italic" data-astro-cid-4khl2bf4>${skill.toUpperCase()}</span> </div>`)} </div> </section> </div> </div> </div> </div> `;
}, "C:/Users/jmoreno.valle/Documents/astro/astro-portfolio/src/components/about.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<div id="contact" class="mb-8" data-astro-cid-4jmlleyw> <section data-astro-cid-4jmlleyw> <div class="max-w-[1320px] mx-auto sm:px-4" data-astro-cid-4jmlleyw> <h2 class="font-paint text-center text-xl my-12" data-astro-cid-4jmlleyw>CONTACT ME</h2> <div class="flex flex-wrap" data-astro-cid-4jmlleyw> <div class="mb-4 md:hidden lg:block lg:mb-0 w-full lg:w-1/3 pr-4 pl-4 d-grid content-center" data-astro-cid-4jmlleyw> <span data-astro-cid-4jmlleyw>Ready to Innovate?</span> <p data-astro-cid-4jmlleyw>Let's Bring Your Vision to Life!</p> <div class="mt-5 more_info" data-astro-cid-4jmlleyw> <p data-astro-cid-4jmlleyw> <i class="bi bi-geo-alt text-accent me-2 fs-5" data-astro-cid-4jmlleyw></i> `, ' </p> <p data-astro-cid-4jmlleyw> <i class="bi bi-envelope-fill text-accent me-2 fs-5" data-astro-cid-4jmlleyw></i> ', ` </p> </div> </div> <div class="contact_form w-full lg:w-2/3 md:max-w-[70vw] md:mx-auto px-4 content-center" data-astro-cid-4jmlleyw> <form method="post" id="contact_form" name="portfolio_form" astro-data-reload novalidate data-astro-cid-4jmlleyw> <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" data-astro-cid-4jmlleyw>Your name</label> <div class="flex" data-astro-cid-4jmlleyw> <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" data-astro-cid-4jmlleyw> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4jmlleyw> <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" data-astro-cid-4jmlleyw></path> </svg> </span> <input type="text" id="name" name="name" class="form-control rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" data-astro-cid-4jmlleyw> </div> <label for="email" class="block mb-2 mt-6 text-sm font-medium text-gray-900 dark:text-white" data-astro-cid-4jmlleyw>Your Email</label> <div class="relative" data-astro-cid-4jmlleyw> <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none" data-astro-cid-4jmlleyw> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 16" data-astro-cid-4jmlleyw> <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" data-astro-cid-4jmlleyw></path> <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" data-astro-cid-4jmlleyw></path> </svg> </div> <input type="email" id="email" name="email" required class="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@mail.com" data-astro-cid-4jmlleyw> </div> <div class="mt-6" data-astro-cid-4jmlleyw> <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" data-astro-cid-4jmlleyw>Subject</label> <input type="text" name="subject" id="subject" class="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subject" required data-astro-cid-4jmlleyw> </div> <div class="mt-6" data-astro-cid-4jmlleyw> <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" data-astro-cid-4jmlleyw>Message</label> <input type="text" id="message" name="message" placeholder="Message" class="form-control block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-astro-cid-4jmlleyw> </div> <div class="w-full mt-3" data-astro-cid-4jmlleyw> <p id="thanks-message" class="thanks hidden" data-astro-cid-4jmlleyw>
Thank you. I will reply soon.
</p> </div> <div class="mt-8" data-astro-cid-4jmlleyw> <button class="flex flex-wrap items-center text-center select-none border font-normal disabled:cursor-not-allowed rounded py-3 px-4 text-xl w-full text-white hover:cursor-pointer justify-center gap-8" id="send-button" data-astro-cid-4jmlleyw> <svg class="w-4 h-4 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16" data-astro-cid-4jmlleyw> <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" data-astro-cid-4jmlleyw></path> <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" data-astro-cid-4jmlleyw></path> </svg>
Send
</button> </div> </form> <div id="loading-spinner" class="hidden justify-center" role="status" data-astro-cid-4jmlleyw> <div role="status" data-astro-cid-4jmlleyw> <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" data-astro-cid-4jmlleyw> <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" data-astro-cid-4jmlleyw></path> <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" data-astro-cid-4jmlleyw></path> </svg> <span class="sr-only" data-astro-cid-4jmlleyw>Loading...</span> </div> </div> </div> </div> </div> </section> </div>  <!-- <script type="module" src='../assets/js/contactForm.js'>
<\/script> --> `])), maybeRenderHead(), location, email);
}, "C:/Users/jmoreno.valle/Documents/astro/astro-portfolio/src/components/contact.astro", void 0);

const $$Astro$5 = createAstro();
const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Github;
  const { width = 50, height = 50, stroke = "#2c3e50" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(stroke, "fill")}${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 24 24"><path d="M8.18 15.008c.12 0 .211-.004.271-.012a.317.317 0 0 0 .18-.107c.06-.063.09-.154.09-.274l-.004-.557c-.003-.355-.004-.637-.004-.844l-.188.033a2.41 2.41 0 0 1-.455.028 3.498 3.498 0 0 1-.57-.057 1.276 1.276 0 0 1-.548-.246 1.04 1.04 0 0 1-.36-.503l-.082-.189a2.046 2.046 0 0 0-.258-.417.989.989 0 0 0-.357-.312l-.057-.04a.602.602 0 0 1-.106-.1.455.455 0 0 1-.074-.114c-.016-.038-.003-.07.04-.094a.533.533 0 0 1 .238-.037l.164.025c.11.021.245.087.406.196.16.11.293.251.397.426.126.224.277.395.455.512a.964.964 0 0 0 .536.176c.18 0 .336-.013.467-.04a1.63 1.63 0 0 0 .369-.124c.049-.365.182-.647.4-.843a5.61 5.61 0 0 1-.839-.148 3.346 3.346 0 0 1-.77-.32 2.204 2.204 0 0 1-.66-.548c-.174-.219-.317-.505-.43-.86a4.09 4.09 0 0 1-.167-1.229c0-.66.216-1.223.647-1.687-.202-.497-.183-1.054.057-1.671.159-.05.394-.013.705.11.311.123.54.228.684.316.145.087.26.16.348.22a5.814 5.814 0 0 1 1.573-.212c.54 0 1.065.07 1.573.213l.31-.197c.214-.13.465-.251.754-.36.29-.11.511-.14.664-.09.246.617.268 1.174.065 1.67.432.465.648 1.027.648 1.688 0 .464-.056.875-.168 1.233-.112.358-.257.644-.434.86a2.29 2.29 0 0 1-.664.545 3.342 3.342 0 0 1-.77.32 5.605 5.605 0 0 1-.84.147c.284.245.426.633.426 1.163v1.957c0 .093.014.168.041.226a.226.226 0 0 0 .131.119c.06.021.114.035.16.04.047.006.113.009.2.009h-1.966-2.227z"></path><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path></svg>`;
}, "C:/Users/jmoreno.valle/Documents/astro/astro-portfolio/src/assets/icons/github.astro", void 0);

const $$Astro$4 = createAstro();
const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Linkedin;
  const { width = 44, height = 44, stroke = "#444f5a" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 24 24" stroke-width="1.5"${addAttribute(stroke, "stroke")} fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path> <path d="M8 11l0 5"></path> <path d="M8 8l0 .01"></path> <path d="M12 16l0 -5"></path> <path d="M16 16v-3a2 2 0 0 0 -4 0"></path> </svg>`;
}, "C:/Users/jmoreno.valle/Documents/astro/astro-portfolio/src/assets/icons/linkedin.astro", void 0);

const $$Astro$3 = createAstro();
const $$Twitter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Twitter;
  const { width = 44, height = 44, stroke = "#2c3e50" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 24 24" stroke-width="1.5"${addAttribute(stroke, "stroke")} fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path> <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path> </svg>`;
}, "C:/Users/jmoreno.valle/Documents/astro/astro-portfolio/src/assets/icons/twitter.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer id="footer"> <div class="max-w-[1320px] mx-auto px-10"> <div class="flex flex-wrap justify-between"> <div class="flex flex-wrap">
Made with ❤️, By&nbsp<a href="http://javimoreno.epizy.com/" target="_blank" class="primary-link">Javier Moreno</a>, Open sourced on&nbsp
<a class="mt-1" href="https://github.com/zougari47/portfolio-template" target="_blank" aria-label="github code source">${renderComponent($$result, "Github", $$Github, { "height": "24", "stroke": "#0d6efd" })}</a> </div> <div class="flex flex-wrap mb-2"> <a${addAttribute(links.twitter, "href")} target="_blank" aria-label="twitter"> ${renderComponent($$result, "Twitter", $$Twitter, { "height": "24", "stroke": "#0d6efd" })} </a> <a${addAttribute(links.github, "href")} target="_blank" aria-label="github"> ${renderComponent($$result, "Github", $$Github, { "height": "24", "stroke": "#0d6efd" })} </a> <a${addAttribute(links.linkedin, "href")} target="_blank" aria-label="linkedin"> ${renderComponent($$result, "Linkedin", $$Linkedin, { "height": "24", "stroke": "#0d6efd" })} </a> </div> </div> </div> </footer>`;
}, "C:/Users/jmoreno.valle/Documents/astro/astro-portfolio/src/components/footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Mail;
  const { width = 44, height = 44, stroke = "#444f5a" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 24 24" stroke-width="1.5"${addAttribute(stroke, "stroke")} fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" stroke-width="0" fill="#444f5a"></path> <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" stroke-width="0" fill="#444f5a"></path> </svg>`;
}, "C:/Users/jmoreno.valle/Documents/astro/astro-portfolio/src/assets/icons/mail.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="hero" data-astro-cid-zi4ldr3x> <div class="mx-auto sm:px-4" data-astro-cid-zi4ldr3x> <div class="flex flex-wrap" data-astro-cid-zi4ldr3x> <div class="w-full lg:w-1/2 pr-4 pl-4 lg:mt-0 content-center" data-astro-cid-zi4ldr3x> <section class="flex animate-fadeIn flex-col text-center text-lg-star gap-4" data-astro-cid-zi4ldr3x> <p class="text-lg" data-astro-cid-zi4ldr3x>Hello! 👋 My name is</p> <h1 class="font-paint text-6xl md:text-5xl leading-4 italic" data-astro-cid-zi4ldr3x> ${fullName} </h1> ${renderComponent($$result, "custom-typewriter", "custom-typewriter", { "data-astro-cid-zi4ldr3x": true })} <span id="typewriter" class="text-lg text-[#0564bd]" data-astro-cid-zi4ldr3x></span> <div class="social-links w-2/3 min-w-52 justify-between mx-auto lg:mx-0 self-center" data-astro-cid-zi4ldr3x> <div class="flex flex-wrap" data-astro-cid-zi4ldr3x> <div class="w-1/4 hover:scale-110" data-astro-cid-zi4ldr3x> <a class="no-underline" href="mailto:javimoreno.tec@gmail.com" target="_blank" aria-label="mail" data-astro-cid-zi4ldr3x> ${renderComponent($$result, "MailIcon", $$Mail, { "data-astro-cid-zi4ldr3x": true })} </a> </div> <div class="w-1/4 hover:scale-110" data-astro-cid-zi4ldr3x> <a${addAttribute(links.github, "href")} target="_blank" aria-label="github" data-astro-cid-zi4ldr3x> ${renderComponent($$result, "GithubIcon", $$Github, { "data-astro-cid-zi4ldr3x": true })} </a> </div> <div class="w-1/4 hover:scale-110" data-astro-cid-zi4ldr3x> <a${addAttribute(links.linkedin, "href")} target="_blank" aria-label="linkedin" data-astro-cid-zi4ldr3x> ${renderComponent($$result, "LinkedinIcon", $$Linkedin, { "data-astro-cid-zi4ldr3x": true })} </a> </div> <div class="w-1/4 hover:scale-110" data-astro-cid-zi4ldr3x> <a${addAttribute(links.twitter, "href")} target="_blank" aria-label="twitter" data-astro-cid-zi4ldr3x> ${renderComponent($$result, "TwitterIcon", $$Twitter, { "data-astro-cid-zi4ldr3x": true })} </a> </div> </div> </div> </section> </div> <div class="mx-auto mt-8" data-astro-cid-zi4ldr3x> <div class="relative w-80 overflow-hidden animate-fadeInRight h-full" data-astro-cid-zi4ldr3x> <div class="aspect-square" data-astro-cid-zi4ldr3x></div> <div class="absolute rounded-full inset-0" data-astro-cid-zi4ldr3x> <picture data-astro-cid-zi4ldr3x> <!-- <Image
                class="object-cover aspect-square rounded-full hover:animate-pulse"
                width={300}
                height={300}
                src="https://res.cloudinary.com/dfulu02wk/image/upload/v1715853984/cv_photo-_1__pmztgq.webp"
                loading="lazy"
                alt="Javier Moreno"
              /> --> <img class="object-cover aspect-square rounded-full hover:animate-pulse" src="https://res.cloudinary.com/dfulu02wk/image/upload/v1715853984/cv_photo-_1__pmztgq.webp" loading="lazy" alt="Javier Moreno" data-astro-cid-zi4ldr3x> </picture> </div> </div> </div> </div> </div> </div>  `;
}, "C:/Users/jmoreno.valle/Documents/astro/astro-portfolio/src/components/hero.astro", void 0);

const $$Astro$1 = createAstro();
const $$Eye = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Eye;
  const { width = 50, height = 50, stroke = "#2c3e50" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(stroke, "fill")}${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"></path></svg>`;
}, "C:/Users/jmoreno.valle/Documents/astro/astro-portfolio/src/assets/icons/eye.astro", void 0);

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="portfolio" class="my-12" data-astro-cid-duvzgiwt> <div class="mx-auto" data-astro-cid-duvzgiwt> <h2 class="mb-8 font-paint text-xl text-center" data-astro-cid-duvzgiwt>PROJECTS</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8" data-astro-cid-duvzgiwt> ${projects.map((project) => renderTemplate`<div data-astro-cid-duvzgiwt> <div class="project hover:animate-pop relative rounded overflow-hidden shadow-md" data-astro-cid-duvzgiwt> ${renderComponent($$result, "Image", $$Image, { "class": "aspect-square object-cover block h-auto", "src": project.imageSrc, "alt": project.altText, "width": 700, "height": 700, "loading": "lazy", "data-astro-cid-duvzgiwt": true })} <div class="details w-full content-center h-full text-white absolute top-0 left-0 z-10 transition-all duration-300 ease-in-out" data-astro-cid-duvzgiwt> <div class="absolute top-44 w-[100%]" data-astro-cid-duvzgiwt> <p class="text-center px-4 text-xl" data-astro-cid-duvzgiwt>${project.description}</p> <div class="links_project w-[20%] mx-auto text-2xl flex justify-center items-center" data-astro-cid-duvzgiwt> ${project.codeSrc && renderTemplate`<a class="no-underline"${addAttribute(project.codeSrc, "href")} target="_blank" rel="noopener noreferrer" title="source code" aria-label="source code" data-astro-cid-duvzgiwt> ${renderComponent($$result, "GithubIcon", $$Github, { "stroke": "white", "data-astro-cid-duvzgiwt": true })} </a>`} ${project.liveDemoURL && renderTemplate`<a class="no-underline"${addAttribute(project.liveDemoURL, "href")} target="_blank" rel="noopener noreferrer" title="See" aria-label="live demo" data-astro-cid-duvzgiwt> ${renderComponent($$result, "EyeIcon", $$Eye, { "stroke": "white", "data-astro-cid-duvzgiwt": true })} </a>`} </div> </div> <div class="technology min-w-[50%] absolute bottom-2 left-0 right-0 mx-auto backdrop-blur-md" data-astro-cid-duvzgiwt> <div class="flex flex-wrap justify-center gap-8" data-astro-cid-duvzgiwt> ${project.technologies.map((tech) => renderTemplate`<div class="flex flex-col justify-center text-white" data-astro-cid-duvzgiwt> <img class="max-w-8 block text-white"${addAttribute(`/img/stack-icons/${tech}.svg`, "src")}${addAttribute(tech, "alt")}${addAttribute(tech.charAt(0).toUpperCase() + tech.slice(1), "title")} data-astro-cid-duvzgiwt> </div>`)} </div> </div> </div> </div> </div>`)} </div> <p class="text-center mt-8" data-astro-cid-duvzgiwt> <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2" data-astro-cid-duvzgiwt> <svg class="w-4 h-4 me-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-duvzgiwt> <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" data-astro-cid-duvzgiwt></path> </svg> <a${addAttribute(links.github, "href")} target="_blank" data-astro-cid-duvzgiwt> See more </a> </button> </p> </div> </section> `;
}, "C:/Users/jmoreno.valle/Documents/astro/astro-portfolio/src/components/portfolio.astro", void 0);

const $$Spacer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="inline-flex items-center justify-center w-full "> <hr class="w-5/6 h-1 my-8 bg-gray-400 border-0 rounded dark:bg-gray-700"> <div class="absolute px-4 -translate-x-1/2 bg-[#DEE4E7] left-1/2 dark:bg-gray-900/10"> <span class="w-4 h-4 text-gray-700 dark:hidden">${"< />"}</span> </div> </div>`;
}, "C:/Users/jmoreno.valle/Documents/astro/astro-portfolio/src/components/spacer.astro", void 0);

const $$ThemeSwitcher = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-light-primary dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5"> <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg> </button> `;
}, "C:/Users/jmoreno.valle/Documents/astro/astro-portfolio/src/components/theme-switcher.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script>\n  window.addEventListener("scroll", function () {\n    const header = document.getElementById("custom-nav")\n    if (window.scrollY > 75) {\n      header.classList.add("opacity-0")\n      header.classList.remove("opacity-100")\n    } else {\n      header.classList.add("opacity-100")\n      header.classList.remove("opacity-0")\n    }\n  })\n<\/script> ', '<nav id="custom-nav" class="fixed top-0 w-full z-50 border-gray-200 dark:bg-gray-900 transition-opacity duration-500"> <div class="max-w-screen-xl flex flex-wrap items-center px-8 justify-between mx-auto dark:bg-gray-900"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> ', ' </a> <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> ', ' <div class="hidden w-full md:block  dark:bg-gray-900 md:w-auto" id="navbar-default"> <ul class="font-medium flex flex-col px-4 md:p-0 mt-4 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#DEE4E7] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 dark:text-white"> <li> <a href="#hero" class="block font-raleway py-2 px-3 text-gray-900 rounded no-underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</a> </li> <li> <a href="#about" class="block font-raleway py-2 px-3 text-gray-900 rounded no-underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a> </li> <li> <a href="#portfolio" class="block font-raleway py-2 px-3 text-gray-900 rounded no-underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a> </li> <li> <a href="#contact" class="block font-raleway py-2 px-3 text-gray-900 rounded no-underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a> </li> </ul> </div> </div> </nav>'])), maybeRenderHead(), renderComponent($$result, "Image", $$Image, { "src": "/img/logo-2.png", "width": 200, "height": 75, "alt": "logo", "loading": "eager" }), renderComponent($$result, "ThemeSwitcher", $$ThemeSwitcher, {}));
}, "C:/Users/jmoreno.valle/Documents/astro/astro-portfolio/src/components/navbar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="bg-light-primary dark:bg-gradient-to-b from-gray-900 to-gray-800 text-black dark:text-white md:text-base xl:text-lg scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-400 select-none"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><link rel="caninical" href="http://localhost:4321/"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="keywords"${addAttribute(metadata.keywords.join(", "), "content")}><meta name="description"${addAttribute(metadata.description, "content")}><meta name="author" content="Javier Moreno"><meta property="og:title"${addAttribute(metadata.title, "content")}><meta property="og:type" content="website"><meta property="og:url" content=""><meta property="og:image" content="https://usa.bootcampcdn.com/wp-content/uploads/sites/106/2020/03/Web-Development-San-Francisco-1.jpeg"><meta property="og:description"${addAttribute(metadata.description, "content")}><title>${title}</title>${renderHead()}</head> ${renderComponent($$result, "Navbar", $$Navbar, {})} <body class="text-text-primary dark:bg-gradient-to-b from-gray-900 to-gray-800"> <div id="root" class="bg-[#DEE4E7] pt-32 mx-16 relative font-raleway max-w-full overflow-x-hidden dark:bg-gradient-to-b from-gray-900 to-gray-800"> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "C:/Users/jmoreno.valle/Documents/astro/astro-portfolio/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Javier Moreno" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Spacer", $$Spacer, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Spacer", $$Spacer, {})} ${renderComponent($$result2, "Portfolio", $$Portfolio, {})} ${renderComponent($$result2, "Spacer", $$Spacer, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/jmoreno.valle/Documents/astro/astro-portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/jmoreno.valle/Documents/astro/astro-portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
