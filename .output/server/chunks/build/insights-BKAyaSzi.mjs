import { i as insightsList, _ as _sfc_main$1 } from './InsightCard-BUMpZv4l.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import '../virtual/entry.mjs';
import 'nostics';
import 'nostics/formatters/ansi';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue-router';
import 'unhead/utils';

//#region src/pages/insights/index.vue
var _sfc_main = {
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		const posts = ref(insightsList);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-24 pb-16 md:py-32 px-4 bg-gray-50 min-h-screen" }, _attrs))}><div class="container mx-auto max-w-6xl"><div class="text-center mb-10 md:mb-16 mt-8"><div class="inline-block px-4 py-1.5 rounded-full bg-slate-200 text-[#737474] font-bold text-xs md:text-sm mb-6"> Edukasi &amp; Publikasi </div><h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mb-6">Insight <span class="text-[#737474]">Industri</span></h1><div class="w-16 h-1 bg-[#737474] mx-auto mb-6"></div><p class="text-slate-600 text-base md:text-lg max-w-2xl mx-auto px-2"> Ikuti tren pasar, regulasi pengiriman kargo, serta standard kualitas komoditas dari Indonesia. </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"><!--[-->`);
			ssrRenderList(posts.value, (post) => {
				_push(ssrRenderComponent(_sfc_main$1, {
					key: post.id,
					post
				}, null, _parent));
			});
			_push(`<!--]--></div></div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/insights/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=insights-BKAyaSzi.mjs.map
