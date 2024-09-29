

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.808815ed.js","_app/immutable/chunks/scheduler.b06e23f4.js","_app/immutable/chunks/index.ced56889.js","_app/immutable/chunks/each.3bcb18cb.js"];
export const stylesheets = ["_app/immutable/assets/2.220eb55f.css"];
export const fonts = [];
