import { ref, mergeProps, useSSRContext } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';

//#region src/pages/insights/[slug].vue
var _sfc_main = {
	__name: "[slug]",
	__ssrInlineRender: true,
	setup(__props) {
		useRoute();
		useRouter();
		const post = ref(null);
		const loading = ref(true);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-24 pb-16 md:py-32 px-4 bg-white min-h-screen relative border-t border-gray-100" }, _attrs))}><div class="container mx-auto max-w-3xl pt-4">`);
			if (!post.value && !loading.value) _push(`<div class="text-center py-20"><h2 class="text-2xl font-bold text-slate-800 mb-4">Artikel Tidak Ditemukan</h2><button class="text-[#737474] underline">Kembali ke Daftar Artikel</button></div>`);
			else if (post.value) _push(`<article><div class="mb-8"><button class="text-slate-500 font-semibold text-sm hover:text-[#737474] transition mb-6 flex items-center"> ← Kembali ke Artikel </button><div class="flex items-center gap-4 mb-4"><span class="bg-gray-100 px-3 py-1 rounded text-xs font-bold text-[#737474]">${ssrInterpolate(post.value.category)}</span><span class="text-slate-400 text-sm font-medium">${ssrInterpolate(post.value.date)}</span></div><h1 class="text-3xl md:text-5xl font-black text-slate-800 leading-tight mb-8">${ssrInterpolate(post.value.title)}</h1></div><div class="w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-12 shadow-sm border border-gray-100 bg-gray-50"><img${ssrRenderAttr("src", post.value.image)}${ssrRenderAttr("alt", post.value.title)} class="w-full h-full object-cover"></div><div class="prose prose-lg prose-slate max-w-none mb-16 custom-prose">${post.value.content ?? ""}</div><div class="border-t border-gray-200 pt-8 mt-12 mb-8 flex justify-between items-center bg-gray-50 p-8 rounded-2xl"><div><h4 class="font-bold text-slate-800 md:text-lg mb-1">Butuh bantuan Sourcing?</h4><p class="text-slate-500 text-sm">Konsultasikan gratis dengan agen kami.</p></div><a href="/#contact" class="bg-[#737474] text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-700 transition">Hubungi Kami</a></div></article>`);
			else _push(`<!---->`);
			_push(`</div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/insights/[slug].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-DYEDYgWC.mjs.map
