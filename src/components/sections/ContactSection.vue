<script setup>
// Placeholders pour les données
const contactInfo = {
	address: '123 Avenue de la Rénovation, 75000 Paris',
	phone: '+33 1 23 45 67 89',
	email: 'contact@france-reno-exemple.fr',
	// Lien Google Maps (exemple vers la Tour Eiffel pour le placeholder)
	mapsLink: 'https://www.google.com/maps/search/?api=1&query=Paris+France',
};
</script>

<template>
	<section class="py-24 bg-gray-900 z-0 text-white relative overflow-hidden">
		<div
			class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
		></div>
		<div
			class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"
		></div>

		<div class="container mx-auto px-6 lg:px-8 relative z-10">
			<div class="text-center max-w-2xl mx-auto mb-16">
				<span
					class="inline-block bg-white/10 text-white px-5 py-2.5 rounded-full text-xl font-bold font-ranade tracking-wide mb-6 border border-white/10 backdrop-blur-md"
				>
					Contactez-nous
				</span>

				<h2
					class="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-[1.2] mb-6 font-ranade"
				>
					Parlons de votre projet
				</h2>

				<p
					class="text-lg text-gray-400 leading-[1.7] font-light font-ranade"
				>
					Une question ? Un besoin urgent ? Notre équipe est à votre
					disposition pour échanger sur vos besoins de rénovation ou
					de débarras.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div
					class="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 text-center flex flex-col items-center"
				>
					<div
						class="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</div>
					<h3 class="text-xl font-bold mb-3 font-ranade">
						Notre Bureau
					</h3>
					<p class="text-gray-400 mb-6 flex-grow">
						{{ contactInfo.address }}
					</p>
					<a
						:href="contactInfo.mapsLink"
						target="_blank"
						class="w-full py-3 px-4 rounded-lg border border-gray-600 bg-gray-700 hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-medium font-ranade"
					>
						Voir sur la carte
					</a>
				</div>

				<div
					class="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 text-center flex flex-col items-center"
				>
					<div
						class="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mb-6 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
					</div>
					<h3 class="text-xl font-bold mb-3 font-ranade">
						Téléphone
					</h3>
					<p class="text-gray-400 mb-6 flex-grow">
						Disponible 7j/7 de 8h à 20h
					</p>
					<a
						:href="'tel:' + contactInfo.phone"
						class="w-full py-3 px-4 rounded-lg bg-gray-700 text-white hover:bg-gray-200 transition-all duration-300 font-bold font-ranade"
					>
						{{ contactInfo.phone }}
					</a>
				</div>

				<div
					class="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 text-center flex flex-col items-center"
				>
					<div
						class="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<h3 class="text-xl font-bold mb-3 font-ranade">Email</h3>
					<p class="text-gray-400 mb-6 flex-grow">
						Réponse sous 24h garantie
					</p>
					<a
						:href="'mailto:' + contactInfo.email"
						class="w-full py-3 px-4 rounded-lg border border-gray-600 bg-gray-700 hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-medium font-ranade"
					>
						Envoyer un email
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
/* Fallback police */
.font-ranade {
	font-family: 'Ranade', sans-serif;
}
</style>

