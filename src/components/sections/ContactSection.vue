<script setup>
// Placeholders pour les données
const contactInfo = {
	address: '13 Rue de Lille, 94700 Maisons-Alfort',
	phone: '+33 6 15 19 00 91',
	email: 'contact@france-reno.com',
	mapsLink:
		'https://www.google.com/maps/place/13+Rue+de+Lille,+94700+Maisons-Alfort',
};
</script>

<template>
	<section
		class="py-24 bg-gray-200 z-0 text-gray-900 relative overflow-hidden"
	>
		<div
			class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply"
		></div>
		<div
			class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-gray-300/30 rounded-full blur-3xl pointer-events-none mix-blend-multiply"
		></div>

		<div class="container mx-auto px-6 lg:px-8 relative z-10">
			<div class="text-center max-w-2xl mx-auto mb-16">
				<span
					class="inline-block bg-white text-[#D4AF37] px-5 py-2.5 rounded-full text-sm font-bold font-ranade tracking-widest uppercase mb-6 border border-[#D4AF37]/20 shadow-sm"
				>
					Contactez-nous
				</span>

				<h2
					class="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-[1.2] mb-6 font-ranade text-gray-900"
				>
					Parlons de votre projet
				</h2>

				<p
					class="text-lg text-gray-600 leading-[1.7] font-light font-ranade"
				>
					Une question ? Un besoin urgent ? Notre équipe est à votre
					disposition pour échanger sur vos besoins de rénovation ou
					de débarras.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div
					class="group bg-white rounded-2xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(212,175,55,0.15)] hover:-translate-y-2 transition-all duration-500 text-center flex flex-col items-center border border-gray-100"
				>
					<div
						class="w-16 h-16 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center mb-6 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-7 w-7"
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

					<h3
						class="text-xl font-bold mb-3 font-ranade text-gray-900"
					>
						Notre Bureau
					</h3>
					<p class="text-gray-500 mb-8 flex-grow font-light">
						{{ contactInfo.address }}
					</p>

					<a
						:href="contactInfo.mapsLink"
						target="_blank"
						class="w-full py-4 px-6 rounded-xl bg-gray-900 text-white font-bold hover:bg-[#D4AF37] hover:text-white transition-all duration-300 font-ranade shadow-lg hover:shadow-orange-200"
					>
						Voir sur la carte
					</a>
				</div>

				<div
					class="group bg-white rounded-2xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(212,175,55,0.15)] hover:-translate-y-2 transition-all duration-500 text-center flex flex-col items-center border border-gray-100 relative"
				>
					<div
						class="w-16 h-16 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center mb-6 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-7 w-7"
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

					<h3
						class="text-xl font-bold mb-3 font-ranade text-gray-900"
					>
						Téléphone
					</h3>
					<p class="text-gray-500 mb-8 flex-grow font-light">
						Disponible 7j/7 de 8h à 20h
					</p>

					<a
						:href="'tel:' + contactInfo.phone"
						class="w-full py-4 px-6 rounded-xl bg-gray-900 text-white font-bold hover:bg-[#D4AF37] hover:text-white transition-all duration-300 font-ranade shadow-lg hover:shadow-orange-200"
					>
						{{ contactInfo.phone }}
					</a>
				</div>

				<div
					class="group bg-white rounded-2xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(212,175,55,0.15)] hover:-translate-y-2 transition-all duration-500 text-center flex flex-col items-center border border-gray-100"
				>
					<div
						class="w-16 h-16 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center mb-6 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-7 w-7"
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

					<h3
						class="text-xl font-bold mb-3 font-ranade text-gray-900"
					>
						Email
					</h3>
					<p class="text-gray-500 mb-8 flex-grow font-light">
						Réponse sous 24h garantie
					</p>

					<a
						:href="'mailto:' + contactInfo.email"
						class="w-full py-4 px-6 rounded-xl bg-gray-900 text-white font-bold hover:bg-[#D4AF37] hover:text-white transition-all duration-300 font-ranade shadow-lg hover:shadow-orange-200"
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
