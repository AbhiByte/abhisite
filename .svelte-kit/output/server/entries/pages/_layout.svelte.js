import { c as create_ssr_component, e as escape, b as null_to_empty, d as each, f as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".social-icon.svelte-k5z0hy{transition:transform 0.3s ease, box-shadow 0.3s ease}.social-icon.svelte-k5z0hy:hover{transform:translateY(-5px);box-shadow:0 5px 15px rgba(0, 0, 0, 0.3)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="py-20 sm:py-32 bg-black border-t border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items-center" data-svelte-h="svelte-tfxj6b"><div class="flex flex-col gap-4 items-center justify-center"><div class="flex items-center gap-4"><a href="https://github.com/AbhiByte" target="_blank" rel="noopener noreferrer" class="social-icon bg-slate-700 hover:bg-slate-600 text-white rounded-full p-3 transition-all duration-300 w-12 h-12 flex items-center justify-center svelte-k5z0hy"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a> <a href="https://www.linkedin.com/in/abhinavramesh/" target="_blank" rel="noopener noreferrer" class="social-icon bg-slate-700 hover:bg-slate-600 text-white rounded-full p-3 transition-all duration-300 w-12 h-12 flex items-center justify-center svelte-k5z0hy"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a> <a href="https://devpost.com/sameerjuin" target="_blank" rel="noopener noreferrer" class="social-icon bg-slate-700 hover:bg-slate-600 text-white rounded-full p-3 transition-all duration-300 w-12 h-12 flex items-center justify-center svelte-k5z0hy"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></a> <a href="mailto:abhinavramesh03@gmail.com" class="social-icon bg-slate-700 hover:bg-slate-600 text-white rounded-full p-3 transition-all duration-300 w-12 h-12 flex items-center justify-center svelte-k5z0hy"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a></div></div> </footer>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "html,body{cursor:none !important}*{cursor:none !important}a.svelte-18dwuqo.svelte-18dwuqo,h1.svelte-18dwuqo.svelte-18dwuqo{transition:transform 0.2s ease-in-out}a.svelte-18dwuqo.svelte-18dwuqo:hover,h1.svelte-18dwuqo.svelte-18dwuqo:hover{transform:translateY(-2px)}header.svelte-18dwuqo.svelte-18dwuqo{transition:all 0.3s ease-in-out}header.py-8.svelte-18dwuqo.svelte-18dwuqo{font-size:1.5rem}header.py-4.svelte-18dwuqo.svelte-18dwuqo{font-size:1rem}.tab-button.svelte-18dwuqo.svelte-18dwuqo{display:inline-flex;align-items:center;justify-content:center;padding:0.5rem 1rem;background-color:transparent;color:white;font-size:1.25rem;border-radius:9999px;text-decoration:none;transition:all 0.3s ease;position:relative;overflow:hidden;box-shadow:0 4px 6px rgba(0, 0, 0, 0.1)}.tab-button.svelte-18dwuqo p.svelte-18dwuqo{margin:0;z-index:1}.tab-button.svelte-18dwuqo.svelte-18dwuqo::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:#4f46e5;opacity:0;transition:opacity 0.3s ease;z-index:0}.tab-button.svelte-18dwuqo.svelte-18dwuqo:hover::before{opacity:1}.tab-button.svelte-18dwuqo.svelte-18dwuqo:hover{color:white}@media(max-width: 768px){.tab-button.svelte-18dwuqo.svelte-18dwuqo{font-size:1rem;padding:0.25rem 0.75rem}header.py-8.svelte-18dwuqo.svelte-18dwuqo{font-size:1.25rem}header.py-4.svelte-18dwuqo.svelte-18dwuqo{font-size:0.9rem}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { y } = $$props;
  let { tabs = [
    { name: "Info", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" }
  ] } = $$props;
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0)
    $$bindings.tabs(tabs);
  $$result.css.add(css);
  return `<header class="${escape(
    null_to_empty("sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " + (y > 0 ? "py-4 bg-slate-950 border-violet-950 text-lg" : "py-8 bg-transparent border-transparent text-2xl")),
    true
  ) + " svelte-18dwuqo"}"><h1 class="font-medium cursor-pointer svelte-18dwuqo" data-svelte-h="svelte-osow2q"><b class="font-bold poppins">Abhinav Ramesh</b></h1> <div class="sm:flex items-center gap-6 hidden">${each(tabs, (tab, index) => {
    return `<a${add_attribute("href", tab.link, 0)} class="tab-button button-effect svelte-18dwuqo"><p class="svelte-18dwuqo">${escape(tab.name)}</p> </a>`;
  })}</div> </header>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y;
  let innerHeight = 0;
  return `<div class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"><div${add_attribute(
    "class",
    "fixed bottom-0 w-full duration-200 flex p-10 z-[10]  pointer-events-none opacity-0",
    0
  )}><button class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center" data-svelte-h="svelte-i4zgfz"><i class="fa-solid fa-arrow-up"></i></button></div> ${validate_component(Header, "Header").$$render($$result, { y, innerHeight }, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> `;
});
export {
  Layout as default
};
