

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2d867076.js","_app/immutable/chunks/scheduler.b06e23f4.js","_app/immutable/chunks/index.ced56889.js","_app/immutable/chunks/singletons.e188c5a4.js"];
export const stylesheets = [];
export const fonts = [];
