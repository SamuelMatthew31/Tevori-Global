import { u as useHead$1, c as companyInfo } from '../virtual/entry.mjs';
import { computed, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

//#region src/pages/products/index.vue
var _sfc_main = {
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		useHead$1({
			title: "Catalog Products - PT Tevori Global Indonesia",
			meta: [{
				name: "description",
				content: "Explore our verified export catalog: Indonesian Teak Furniture, Authentic Balinese Handcrafted Arts, and Decorative Items."
			}]
		});
		const productModules = /* #__PURE__ */ Object.assign({});
		const products = computed(() => {
			return Object.keys(productModules).map((filePath) => {
				const fileContent = productModules[filePath];
				const data = fileContent.default || fileContent;
				const primaryImage = data.images && data.images.length > 0 ? data.images[0] : "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80";
				return {
					...data,
					id: data.slug || filePath.split("/").pop().replace(".json", ""),
					primaryImage,
					title: data.title || "Untitled Product",
					category: data.category || "Furniture",
					material: data.material || "Standard Quality",
					cbmEstimation: data.cbmEstimation || 0,
					moq: data.moq || 1,
					is_featured: data.is_featured || false
				};
			});
		});
		const selectedCategory = ref("All");
		const searchQuery = ref("");
		const categories = [
			"All",
			"Furniture",
			"Art",
			"Decor"
		];
		const filteredProducts = computed(() => {
			return products.value.filter((p) => {
				const matchesCategory = selectedCategory.value === "All" || p.category?.toLowerCase() === selectedCategory.value.toLowerCase();
				const matchesSearch = !searchQuery.value.trim() || p.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) || p.material?.toLowerCase().includes(searchQuery.value.toLowerCase());
				return matchesCategory && matchesSearch;
			});
		});
		const createQuoteLink = (product) => {
			const phone = (companyInfo.phone || "085746358310").replace(/\s+/g, "").replace(/^0/, "62");
			const message = [
				`Hello PT Tevori Global,`,
				`I am interested in requesting a B2B quotation for:`,
				`- Product: *${product.title}*`,
				`- Category: ${product.category}`,
				`- Material: ${product.material || "Standard Export Spec"}`,
				`- Estimated CBM: ${product.cbmEstimation || "N/A"} m³`,
				`- Stated MOQ: ${product.moq || 1} units`,
				``,
				`Please advise current pricing, production lead time, and freight options.`
			].join("\n");
			return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12 px-4 max-w-7xl mx-auto min-h-screen" }, _attrs))}><div class="text-center max-w-3xl mx-auto mb-10"><div class="inline-block px-4 py-1 rounded-full bg-slate-200 text-[#737474] font-semibold text-xs tracking-wider uppercase mb-3"> Katalog Produk </div><h1 class="text-3xl md:text-5xl font-black text-slate-800 tracking-tight mb-4"> Produk Ekspor Berkualitas </h1><p class="text-slate-600 text-sm md:text-base leading-relaxed"> Jelajahi inventaris produk furnitur kayu jati, karya seni kerajinan tangan Bali, dan dekorasi mewah siap dikirim. </p></div><div class="flex flex-col md:flex-row items-center justify-between gap-4 mb-10"><div class="flex flex-wrap gap-2 justify-center"><!--[-->`);
			ssrRenderList(categories, (cat) => {
				_push(`<button class="${ssrRenderClass([selectedCategory.value === cat ? "bg-[#737474] text-white shadow-md" : "bg-white text-slate-600 hover:bg-gray-100 border border-gray-200", "px-5 py-2 rounded-xl text-xs md:text-sm font-bold transition-all shadow-sm cursor-pointer"])}">${ssrInterpolate(cat)}</button>`);
			});
			_push(`<!--]--></div><div class="w-full md:w-72"><div class="relative"><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Cari nama produk, material..." class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 pl-10 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#737474] shadow-sm"><span class="absolute left-3 top-2.5 text-slate-400 text-sm">🔍</span></div></div></div>`);
			if (filteredProducts.value.length > 0) {
				_push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
				ssrRenderList(filteredProducts.value, (product) => {
					_push(`<div class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"><div class="relative h-64 bg-slate-100 overflow-hidden">`);
					if (product.primaryImage) _push(`<img${ssrRenderAttr("src", product.primaryImage)}${ssrRenderAttr("alt", product.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">`);
					else _push(`<div class="w-full h-full flex flex-col items-center justify-center text-gray-400"><span class="text-4xl mb-2">📸</span><span class="text-xs font-medium">Gambar Tidak Tersedia</span></div>`);
					_push(`<div class="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">${ssrInterpolate(product.category)}</div>`);
					if (product.is_featured) _push(`<div class="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase"> Featured </div>`);
					else _push(`<!---->`);
					_push(`</div><div class="p-6 flex flex-col grow justify-between"><div><h3 class="text-lg font-bold text-slate-800 group-hover:text-[#737474] transition mb-2 line-clamp-2 leading-snug">${ssrInterpolate(product.title)}</h3><p class="text-xs text-slate-500 font-medium mb-4 flex items-center gap-1.5 opacity-80"><span>🪵</span> ${ssrInterpolate(String(product.material || "Indonesian Craftsmanship").substring(0, 32))}${ssrInterpolate(String(product.material || "").length > 32 ? "..." : "")}</p><div class="grid grid-cols-2 gap-2 mb-6 bg-gray-50 p-3 rounded-xl border border-gray-100 text-xs"><div><span class="text-slate-400 block text-[10px] uppercase font-bold mb-0.5">Est. CBM Volume</span><span class="font-bold text-slate-700">${ssrInterpolate(product.cbmEstimation ? `${product.cbmEstimation} m³` : "Custom")}</span></div><div><span class="text-slate-400 block text-[10px] uppercase font-bold mb-0.5">Min. Order (MOQ)</span><span class="font-bold text-slate-700">${ssrInterpolate(product.moq ? `${product.moq} pcs` : "Negotiable")}</span></div></div></div><a${ssrRenderAttr("href", createQuoteLink(product))} target="_blank" rel="noopener noreferrer" class="w-full bg-[#737474] hover:bg-slate-700 text-white font-bold text-xs md:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"><span>💬</span> Request Quotation Via WA </a></div></div>`);
				});
				_push(`<!--]--></div>`);
			} else _push(`<div class="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-300"><div class="text-5xl mb-4">📦</div><h3 class="text-xl font-bold text-slate-800 mb-2">Katalog Kosong</h3><p class="text-slate-500 text-sm max-w-md mx-auto">Anda belum mengunggah produk dari CMS Panel. Silahkan login ke panel Admin untuk menambah produk secara dinamis.</p></div>`);
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=products-Cl6plmU1.mjs.map
