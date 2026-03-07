<template>
	<div
		class="relative w-full h-[90vh] lg:h-screen overflow-hidden -mt-24 bg-gray-950"
	>
		<transition-group
			name="fade"
			tag="div"
			class="absolute inset-0 w-full h-full"
		>
			<img
				v-for="(img, index) in imgList"
				:key="img"
				v-show="currentImg === index"
				:src="img"
				class="absolute inset-0 w-full h-full object-cover brightness-[0.45] transition-transform duration-[10000ms] ease-linear hover:scale-105"
				alt="France Reno Réalisation"
			/>
		</transition-group>

		<div
			class="absolute inset-0 flex flex-col items-center justify-center px-6 lg:px-8 text-center z-10 mt-16"
		>
			<h1
				class="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight mb-6 font-ranade drop-shadow-2xl animate-fade-in-up"
			>
				Nous transformons <br class="hidden sm:block" />
				<span class="text-[#D4AF37]">vos espaces de vie</span>
			</h1>

			<p
				class="text-lg sm:text-xl md:text-2xl text-gray-200 font-light max-w-3xl mb-12 drop-shadow-lg leading-relaxed animate-fade-in-up animation-delay-200 font-ranade"
			>
				Depuis plus de 10 ans, France Reno vous accompagne de la
				conception à la réalisation pour façonner un habitat durable,
				élégant et à votre image.
			</p>

			<a
				href="#about-debarenov"
				class="inline-block px-8 py-4 border border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full text-lg transition-all duration-500 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1 animate-fade-in-up animation-delay-400 font-ranade"
			>
				Découvrir le groupe
			</a>
		</div>

		<div
			class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
		></div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ChevronScroll from '@/components/ChevronScroll.vue';

const props = defineProps({
	imgList: {
		type: Array,
		required: true,
	},
});

const currentImg = ref(0);
let intervalId = null;

onMounted(() => {
	// Bonne pratique : utiliser onMounted pour initialiser l'intervalle
	// et l'enregistrer dans une variable pour pouvoir le nettoyer
	intervalId = setInterval(() => {
		currentImg.value = (currentImg.value + 1) % props.imgList.length;
	}, 8000); // Réduit à 8 secondes (au lieu de 10) pour plus de dynamisme
});

onUnmounted(() => {
	// Nettoyage de l'intervalle quand on quitte la page
	if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
/* Fallback pour la police */
.font-ranade {
	font-family: 'Ranade', sans-serif;
}

/* ========================================= */
/* ANIMATION DE TRANSITION DU SLIDER (FADE)  */
/* ========================================= */
.fade-enter-active,
.fade-leave-active {
	transition: opacity 1.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

/* ========================================= */
/* ANIMATIONS D'APPARITION DU TEXTE          */
/* ========================================= */
@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(40px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.animate-fade-in-up {
	animation: fadeInUp 1.2s ease-out forwards;
	opacity: 0; /* Garde l'élément caché avant le début de l'animation */
}

.animation-delay-200 {
	animation-delay: 0.2s;
}

.animation-delay-400 {
	animation-delay: 0.4s;
}
</style>
