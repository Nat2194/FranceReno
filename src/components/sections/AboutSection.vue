<script setup>
// Image placeholder correspondant à "chambre minimaliste"
const aboutImage =
	'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop';
</script>

<template>
	<section class="py-24 bg-[#f8f8f8] relative z-0">
		<div class="container mx-auto px-6 lg:px-8">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div class="flex flex-col items-start text-left">
					<span
						class="inline-block bg-gray-900 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6"
					>
						À propos de nous
					</span>

					<h2
						class="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-gray-900 leading-[1.2] mb-6 font-ranade"
					>
						Une expertise reconnue en rénovation &amp; débarras
					</h2>

					<p
						class="text-lg text-gray-800 leading-[1.7] mb-7 max-w-lg font-light font-ranade"
					>
						Depuis plus de 10 ans, France Reno accompagne
						particuliers, professionnels et syndics pour transformer
						et valoriser vos espaces. Nous allions savoir-faire
						technique et efficacité.
					</p>

					<ul class="space-y-3 mb-8">
						<li
							class="flex items-start gap-2 text-gray-700 text-[1.05rem] font-light"
						>
							<span class="mt-1">✔️</span> Intervention rapide en
							Île-de-France
						</li>
						<li
							class="flex items-start gap-2 text-gray-700 text-[1.05rem] font-light"
						>
							<span class="mt-1">✔️</span> Service complet : du
							débarras à la remise en état
						</li>
						<li
							class="flex items-start gap-2 text-gray-700 text-[1.05rem] font-light"
						>
							<span class="mt-1">✔️</span> Devis clair, gratuit et
							sans engagement
						</li>
					</ul>

					<a
						href="/devis"
						class="inline-block px-8 py-3.5 bg-gray-900 text-white font-semibold rounded-lg text-[1.05rem] transition-all duration-300 hover:bg-black hover:-translate-y-1 shadow-md"
					>
						Demander un devis
					</a>
				</div>

				<div
					class="order-first lg:order-last flex justify-center lg:justify-end"
				>
					<img
						:src="aboutImage"
						alt="Intérieur minimaliste rénové"
						class="w-full sm:w-[80%] lg:w-[85%] rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] object-cover"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
/* Si la police Ranade n'est pas configurée globalement dans tailwind.config.js, 
   on peut forcer l'application ici pour ce composant */
.font-ranade {
	font-family: 'Ranade', sans-serif;
}
</style>

