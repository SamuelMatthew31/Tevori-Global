import { d as companyInfo, N as NuxtLink } from '../virtual/entry.mjs';
import { i as insightsList, _ as _sfc_main$a } from './InsightCard-BUMpZv4l.mjs';
import { watch, nextTick, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import 'nostics';
import 'nostics/formatters/ansi';
import '../_/nitro.mjs';
import 'lru-cache';
import 'fnv1a-64';
import 'object-identity';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import 'node:url';
import 'sitemapd/parse';
import '../routes/renderer.mjs';
import '../_/server.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@vue/shared';
import 'unhead/utils';

//#region src/sections/home/HeroSection.vue
var _sfc_main$9 = {
	__name: "HeroSection",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "home",
				class: "bg-gray-50 py-16 md:py-24 px-4 text-center min-h-[60vh] flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-gray-100 to-gray-200"
			}, _attrs))}><div class="max-w-4xl mx-auto w-full pt-8 md:pt-0"><div class="inline-block px-4 py-1.5 rounded-full bg-slate-200/50 text-[#737474] font-semibold text-xs md:text-sm mb-6 border border-slate-300"> Professional Exporter &amp; Buyer&#39;s Agent </div><h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-6 md:mb-8 leading-tight tracking-tight px-2">${ssrInterpolate(unref(companyInfo).tagline)}</h1><p class="text-base sm:text-lg md:text-xl text-slate-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4"> Connecting international buyers with trusted Indonesian manufacturers for <strong class="text-slate-800">furniture</strong>, <strong class="text-slate-800">commodities</strong>, and <strong class="text-slate-800">authentic crafts</strong>. </p><div class="flex flex-col sm:flex-row justify-center gap-4 px-4"><a href="#contact" class="bg-[#737474] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-slate-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5 w-full sm:w-auto">Let&#39;s Talk Business</a>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/products",
				class: "bg-white border-2 border-[#737474] text-[#737474] px-8 py-3.5 rounded-lg font-bold hover:bg-gray-50 transition-all w-full sm:w-auto"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Explore Products`);
					else return [createTextVNode("Explore Products")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></section>`);
		};
	}
};
var _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sections/home/HeroSection.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
//#endregion
//#region src/sections/home/AboutSection.vue
var _sfc_main$8 = {
	__name: "AboutSection",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "about",
				class: "scroll-mt-20 py-16 md:py-24 px-4 bg-white relative"
			}, _attrs))}><div class="container mx-auto max-w-6xl"><div class="text-center mb-12 md:mb-16 max-w-3xl mx-auto px-2"><h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Tentang <span class="text-[#737474]">Kami</span></h2><div class="w-16 h-1 bg-[#737474] mx-auto mb-6"></div><p class="text-slate-600 text-base md:text-lg leading-relaxed">${ssrInterpolate(unref(companyInfo).description)}</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12"><div class="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"><div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#737474] text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">🎯</div><h3 class="text-xl md:text-2xl font-bold text-slate-800 mb-4">Visi Kami</h3><p class="text-slate-600 leading-relaxed text-base md:text-lg italic">&quot;${ssrInterpolate(unref(companyInfo).vision)}&quot;</p></div><div class="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300"><div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#737474] text-2xl mb-6 shadow-sm">🚀</div><h3 class="text-xl md:text-2xl font-bold text-slate-800 mb-4">Misi Utama</h3><ul class="space-y-4"><!--[-->`);
			ssrRenderList(unref(companyInfo).mission.slice(0, 4), (m, i) => {
				_push(`<li class="flex items-start"><span class="text-[#737474] mr-3 mt-0.5 font-bold">✓</span><span class="text-slate-600 text-sm md:text-base">${ssrInterpolate(m)}</span></li>`);
			});
			_push(`<!--]--></ul></div></div><div class="mt-16 md:mt-24 px-2"><div class="text-center mb-8 md:mb-12"><h3 class="text-xl md:text-2xl font-bold text-slate-800">Kenapa Memilih Kami?</h3></div><div class="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto"><!--[-->`);
			ssrRenderList(unref(companyInfo).advantages, (adv, i) => {
				_push(`<div class="bg-white border border-slate-200 text-slate-700 px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm text-xs md:text-sm font-semibold hover:border-[#737474] hover:text-[#737474] transition-colors text-center">${ssrInterpolate(adv)}</div>`);
			});
			_push(`<!--]--></div></div></div></section>`);
		};
	}
};
var _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sections/home/AboutSection.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
//#endregion
//#region src/data/services.js
var servicesInfo = [
	{
		id: 1,
		title: "Sourcing Furniture",
		description: "High-quality, reliable export furniture procurement from trusted Indonesian craftsmen.",
		icon: "SofaIcon"
	},
	{
		id: 2,
		title: "Komoditi Alam",
		description: "Exporting premium natural commodities directly from the source.",
		icon: "LeafIcon"
	},
	{
		id: 3,
		title: "Kerajinan Seni",
		description: "Authentic arts and crafts sourced from verified local artisans.",
		icon: "PalmtreeIcon"
	}
];
//#endregion
//#region src/components/cards/ServiceCard.vue
var _sfc_main$7 = {
	__name: "CardsServiceCard",
	__ssrInlineRender: true,
	props: { service: {
		type: Object,
		required: true
	} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-slate-800 p-8 md:p-10 rounded-2xl border border-slate-700 hover:border-slate-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col" }, _attrs))}><div class="bg-slate-700 text-white w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-6 text-xl md:text-2xl font-bold shadow-inner"> 0${ssrInterpolate(__props.service.id)}</div><h3 class="text-lg md:text-xl font-bold text-white mb-4">${ssrInterpolate(__props.service.title)}</h3><p class="text-slate-400 text-sm md:text-base leading-relaxed flex-grow">${ssrInterpolate(__props.service.description)}</p></div>`);
		};
	}
};
var _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/ServiceCard.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
//#endregion
//#region src/sections/home/ServicesSection.vue
var _sfc_main$6 = {
	__name: "ServicesSection",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "services",
				class: "scroll-mt-20 py-16 md:py-24 px-4 bg-slate-900 border-t border-slate-800"
			}, _attrs))}><div class="container mx-auto max-w-6xl"><div class="text-center mb-12 md:mb-16"><h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Layanan &amp; <span class="text-[#737474]">Fokus Utama</span></h2><div class="w-16 h-1 bg-[#737474] mx-auto mb-6"></div><p class="text-slate-400 mt-4 text-base md:text-lg px-4">Kami memfasilitasi pengadaan (sourcing) untuk 3 pilar komoditi utama export Indonesia.</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0"><!--[-->`);
			ssrRenderList(unref(servicesInfo), (service) => {
				_push(ssrRenderComponent(_sfc_main$7, {
					key: service.id,
					service
				}, null, _parent));
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sections/home/ServicesSection.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
//#endregion
//#region src/sections/home/HowWeWorkSection.vue
var _sfc_main$5 = {
	__name: "HowWeWorkSection",
	__ssrInlineRender: true,
	setup(__props) {
		const steps = [
			{
				id: 1,
				title: "Konsultasi & Requirement",
				desc: "Diskusikan detail spesifikasi produk, target harga jual, dan volume (MOQ) yang perusahaan Anda butuhkan.",
				icon: "🤝"
			},
			{
				id: 2,
				title: "Sourcing & Verifikasi",
				desc: "Kami mencari supplier manufaktur terpercaya di Indonesia, menegosiasikan harga terbaik, dan meninjau sampel.",
				icon: "🔍"
			},
			{
				id: 3,
				title: "Kontrol Kualitas (QC)",
				desc: "Melakukan inspeksi dan pemantauan ketat pra-pengiriman untuk memastikan produk memenuhi standar regulasi internasional.",
				icon: "✅"
			},
			{
				id: 4,
				title: "Ekspor & Logistik",
				desc: "Penanganan komprehensif dokumen Bea Cukai (Custom Clearance) dan logistik kargo hingga ke negara tujuan.",
				icon: "🚢"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "how-we-work",
				class: "scroll-mt-20 py-16 md:py-24 px-4 bg-white border-t border-gray-100"
			}, _attrs))}><div class="container mx-auto max-w-6xl"><div class="text-center mb-12 md:mb-16"><h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Bagaimana <span class="text-[#737474]">Cara Kerja Kami?</span></h2><div class="w-16 h-1 bg-[#737474] mx-auto mb-6"></div><p class="text-slate-600 mt-4 text-base md:text-lg max-w-2xl mx-auto px-4">Kami menyederhanakan proses kompleks perdagangan internasional agar Anda bisa fokus pada pertumbuhan bisnis.</p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 px-2 md:px-0"><!--[-->`);
			ssrRenderList(steps, (step, index) => {
				_push(`<div class="relative bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 hover:border-[#737474]/30 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group">`);
				if (index !== steps.length - 1) _push(`<div class="hidden lg:block absolute -right-4 top-1/4 transform -translate-y-1/2 text-gray-300 z-10 text-2xl group-hover:text-[#737474] transition-colors"> ➔ </div>`);
				else _push(`<!---->`);
				_push(`<div class="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-3xl mb-6 relative z-10 border border-gray-100 group-hover:scale-110 transition-transform">${ssrInterpolate(step.icon)}</div><div class="inline-block bg-slate-200 text-slate-600 font-bold text-xs px-3 py-1 rounded-full mb-4">LANGKAH ${ssrInterpolate(step.id)}</div><h3 class="text-lg font-bold text-slate-800 mb-3">${ssrInterpolate(step.title)}</h3><p class="text-slate-500 text-sm leading-relaxed">${ssrInterpolate(step.desc)}</p></div>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sections/home/HowWeWorkSection.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
//#endregion
//#region src/data/testimonials.js
var testimonialsInfo = [
	{
		id: 1,
		name: "John Doe",
		position: "Procurement Manager",
		company: "Global Retail Corp, USA",
		content: "PT Tevori Global provided exceptional service in sourcing premium furniture for our retail line. Their transparency and QC standards are top-notch.",
		rating: 5
	},
	{
		id: 2,
		name: "Sarah Cheng",
		position: "CEO",
		company: "EcoLiving Singapore",
		content: "Sourcing natural commodities in bulk can be tricky, but Tevori made it seamless. Highly recommend them as a reliable buyer agent taking care of export operations.",
		rating: 5
	},
	{
		id: 3,
		name: "Markus Müller",
		position: "Import Director",
		company: "Artsy Home Germany",
		content: "The authentic crafts we procured through Tevori were exactly what we needed. Accurate communication, correct pricing, and on-time delivery.",
		rating: 5
	}
];
//#endregion
//#region src/components/cards/TestimonialCard.vue
var _sfc_main$4 = {
	__name: "CardsTestimonialCard",
	__ssrInlineRender: true,
	props: { testi: {
		type: Object,
		required: true
	} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow h-full group" }, _attrs))}><div><div class="flex text-amber-400 mb-4 text-sm group-hover:scale-105 transition-transform origin-left w-fit"><!--[-->`);
			ssrRenderList(__props.testi.rating, (n) => {
				_push(`<span>★</span>`);
			});
			_push(`<!--]--></div><p class="text-slate-600 italic text-sm md:text-base leading-relaxed mb-6">&quot;${ssrInterpolate(__props.testi.content)}&quot;</p></div><div class="border-t border-gray-100 pt-4 mt-auto"><h4 class="font-bold text-slate-800 group-hover:text-[#737474] transition-colors">${ssrInterpolate(__props.testi.name)}</h4><p class="text-xs text-slate-500 mt-1">${ssrInterpolate(__props.testi.position)} — <span class="font-semibold text-[#737474]">${ssrInterpolate(__props.testi.company)}</span></p></div></div>`);
		};
	}
};
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/TestimonialCard.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
//#endregion
//#region src/sections/home/TestimonialsSection.vue
var _sfc_main$3 = {
	__name: "TestimonialsSection",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "testimonials",
				class: "scroll-mt-20 py-16 md:py-24 px-4 bg-gray-50 border-t border-gray-100"
			}, _attrs))}><div class="container mx-auto max-w-6xl"><div class="text-center mb-12 md:mb-16"><h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Kepercayaan <span class="text-[#737474]">Klien Kami</span></h2><div class="w-16 h-1 bg-[#737474] mx-auto mb-6"></div><p class="text-slate-600 mt-4 text-base md:text-lg max-w-2xl mx-auto px-4">Apa kata mitra internasional mengenai kerja sama pengadaan komoditas dari Indonesia bersama Tevori Global.</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0"><!--[-->`);
			ssrRenderList(unref(testimonialsInfo), (testi) => {
				_push(ssrRenderComponent(_sfc_main$4, {
					key: testi.id,
					testi
				}, null, _parent));
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
};
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sections/home/TestimonialsSection.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
//#endregion
//#region src/sections/home/InsightsSection.vue
var _sfc_main$2 = {
	__name: "InsightsSection",
	__ssrInlineRender: true,
	setup(__props) {
		const recentPosts = insightsList.slice(0, 3);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "insights",
				class: "scroll-mt-16 py-16 md:py-24 px-4 bg-white border-t border-gray-100"
			}, _attrs))}><div class="container mx-auto max-w-6xl"><div class="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16"><div class="text-center md:text-left mb-6 md:mb-0"><h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Berita &amp; <span class="text-[#737474]">Artikel Terbaru</span></h2><div class="w-16 h-1 bg-[#737474] mx-auto md:mx-0 mb-4"></div><p class="text-slate-600 mt-2 text-base md:text-lg max-w-xl">Update terkini seputar industri komoditi, furnitur, seni, serta regulasi ekspor Indonesia.</p></div>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/insights",
				class: "hidden md:inline-block border-2 border-[#737474] text-[#737474] px-6 py-2.5 rounded-lg font-bold hover:bg-[#737474] hover:text-white transition-all shadow-sm"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Lihat Semua Artikel `);
					else return [createTextVNode(" Lihat Semua Artikel ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0"><!--[-->`);
			ssrRenderList(unref(recentPosts), (post) => {
				_push(ssrRenderComponent(_sfc_main$a, {
					key: post.id,
					post
				}, null, _parent));
			});
			_push(`<!--]--></div><div class="mt-10 text-center md:hidden">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/insights",
				class: "inline-block border-2 border-[#737474] text-[#737474] px-6 py-3 rounded-lg font-bold w-full sm:w-auto hover:bg-[#737474] hover:text-white transition-colors"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Lihat Semua Artikel `);
					else return [createTextVNode(" Lihat Semua Artikel ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></section>`);
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sections/home/InsightsSection.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region src/sections/home/ContactSection.vue
var _sfc_main$1 = {
	__name: "ContactSection",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "contact",
				class: "scroll-mt-20 py-16 md:py-24 px-4 bg-gray-50"
			}, _attrs))}><div class="container mx-auto max-w-5xl"><div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row mx-2 md:mx-0"><div class="w-full md:w-1/2 p-8 md:p-12 bg-white"><h2 class="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Mari Berkolaborasi.</h2><p class="text-slate-500 text-sm md:text-base mb-8">Hubungi kami untuk discuss detail requirement pengadaan produk dari Indonesia ke seluruh destinasi.</p><div class="space-y-4 md:space-y-6"><div class="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100"><div class="text-xl md:text-2xl mr-4 mt-0.5">📍</div><div><p class="text-xs md:text-sm font-bold text-slate-800">Alamat</p><p class="text-slate-600 text-xs md:text-sm mt-1">${ssrInterpolate(unref(companyInfo).address)}</p></div></div><div class="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100"><div class="text-xl md:text-2xl mr-4 mt-0.5">📞</div><div><p class="text-xs md:text-sm font-bold text-slate-800">Telepon / WhatsApp</p><p class="text-slate-600 text-xs md:text-sm mt-1">${ssrInterpolate(unref(companyInfo).phone)}</p><p class="text-xs text-slate-500 mt-1">PIC: Vigor (Managing Director)</p></div></div><div class="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100"><div class="text-xl md:text-2xl mr-4 mt-0.5">✉️</div><div><p class="text-xs md:text-sm font-bold text-slate-800">Email</p><p class="text-slate-600 text-xs md:text-sm mt-1">${ssrInterpolate(unref(companyInfo).email)}</p></div></div></div></div><div class="w-full md:w-1/2 p-8 md:p-12 bg-[#737474] text-white flex flex-col justify-center items-center text-center"><div class="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center text-3xl md:text-4xl mb-6">💬</div><h3 class="text-2xl md:text-3xl font-bold mb-4">Request Quotation</h3><p class="mb-8 text-white/80 text-sm md:text-lg leading-relaxed px-2 md:px-4">Dapatkan penawaran terbaik (B2B/B2C). Konsultasikan free MOQ dan metode export yang tepat via percakapan langsung.</p><a${ssrRenderAttr("href", "https://wa.me/62" + unref(companyInfo).phone.replace(/\s/g, "").replace(/^0/, ""))} target="_blank" class="bg-white text-[#737474] px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold hover:scale-105 transition-transform w-full shadow-lg text-base md:text-lg">Hubungi via WhatsApp</a></div></div></div></section>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sections/home/ContactSection.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region src/pages/index.vue
var _sfc_main = {
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		const scrollToHash = (hash) => {
			if (!hash) return;
			nextTick(() => {
				setTimeout(() => {
					const el = (void 0).querySelector(hash);
					if (el) el.scrollIntoView({ behavior: "smooth" });
				}, 150);
			});
		};
		watch(() => route.hash, (newHash) => {
			if (newHash) scrollToHash(newHash);
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}>`);
			_push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=pages-BMFi_ACj.mjs.map
