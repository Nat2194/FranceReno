<script setup>
// Vous pouvez changer l'image ici
const heroImage =
	'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop';
</script>

<template>
	<section
		class="relative w-full flex items-center overflow-hidden py-14 lg:py-0 lg:h-[95vh]"
	>
		<div class="absolute inset-0 z-0">
			<img
				:src="heroImage"
				alt="Rénovation intérieur salon"
				class="w-full h-full object-cover object-center"
			/>
		</div>

		<div
			class="container mx-auto px-6 lg:px-8 max-w-[1300px] relative z-10 h-full flex flex-col justify-center"
		>
			<div
				class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full"
			>
				<div
					class="bg-white/80 backdrop-blur-sm rounded-[10px] p-6 sm:p-8 lg:p-[50px] flex flex-col gap-4 shadow-xl max-w-full lg:max-w-[560px] animate-fade-in-up"
				>
					<h1
						class="text-3xl sm:text-4xl lg:text-[4rem] font-bold text-black leading-[1.15] tracking-tight"
					>
						Rénovation d'excellence,<br />
						Élégance infinie.
					</h1>

					<h2
						class="text-lg sm:text-xl lg:text-[1.4rem] font-medium text-black"
					>
						Intervention rapide pour particuliers, professionnels et
						syndics
					</h2>

					<p
						class="text-base lg:text-base font-light text-gray-900 leading-[1.6] max-w-[480px]"
					>
						On vous accompagne pour tous vos besoins de rénovation
						intérieure, débarras complet, nettoyage professionnel et
						remise en état après sinistre. Un service fiable, rapide
						et disponible 7j/7.
					</p>

					<div class="flex flex-col sm:flex-row gap-3 pt-2 mt-2">
						<a
							href="/devis"
							class="inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-semibold text-white bg-gray-900 transition-all duration-200 hover:bg-black hover:-translate-y-0.5 shadow-md text-center"
						>
							Demander un devis
						</a>

						<a
							href="tel:+33148933946"
							class="inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-semibold text-black bg-transparent border-[1.5px] border-black transition-all duration-200 hover:bg-black hover:text-white hover:-translate-y-0.5 text-center"
						>
							📞 Appeler maintenant
						</a>
					</div>
				</div>

				<div class="hidden lg:block h-full w-full"></div>
			</div>
		</div>
	</section>
</template>

<style scoped>
/* Animation d'apparition douce */
@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.animate-fade-in-up {
	animation: fadeInUp 0.8s ease-out forwards;
}

/* Si vous n'avez pas importé la police Ranade globalement, 
   c'est ici qu'il faudrait le faire, ou utiliser une classe utilitaire 'font-sans' par défaut */
h1,
h2 {
	font-family: 'Ranade', sans-serif;
}
</style>
