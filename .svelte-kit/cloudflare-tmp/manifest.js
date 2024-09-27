export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/particles.json","favicon.png","images/2EI4Project1Website.png","images/2EI4Project4(2)Website.png","images/2EI4Project4.png","images/2EI4Project5.png","images/2Ei4Project5Website.png","images/ArduinoNanoPCB.png","images/NomaWebsite.png","images/NorthStarTest-Photoroom (1).png","images/SquareWaveGenPCB.png","images/aspectusThumbnail.png","images/desktop.ini","images/profile.png","images/profileSm.jpg","images/scanComparison.png","images/visuAIThumbnail.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".ini":"text/plain",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.63034bc0.js","app":"_app/immutable/entry/app.6382ce51.js","imports":["_app/immutable/entry/start.63034bc0.js","_app/immutable/chunks/scheduler.b06e23f4.js","_app/immutable/chunks/singletons.9b67c235.js","_app/immutable/entry/app.6382ce51.js","_app/immutable/chunks/scheduler.b06e23f4.js","_app/immutable/chunks/index.ced56889.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

export const prerendered = new Set([]);
