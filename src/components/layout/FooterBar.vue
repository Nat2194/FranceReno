<template>
	<footer
		class="w-full relative bg-gray-950 text-gray-300 pt-8 pb-8 z-50 mt-0"
	>
		<div
			class="absolute bottom-full left-0 w-full overflow-hidden leading-[0] -mb-[1px] pointer-events-none"
		>
			<svg
				class="waves w-full h-[50px] sm:h-[100px] block"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 24 150 28"
				preserveAspectRatio="none"
				shape-rendering="auto"
			>
				<defs>
					<path
						id="gentle-wave"
						d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
					/>
				</defs>
				<g class="parallax1">
					<use
						href="#gentle-wave"
						x="48"
						y="0"
						fill="rgba(3, 7, 18, 0.3)"
					/>
				</g>
				<g class="parallax2">
					<use
						href="#gentle-wave"
						x="48"
						y="3"
						fill="rgba(3, 7, 18, 0.5)"
					/>
				</g>
				<g class="parallax3">
					<use
						href="#gentle-wave"
						x="48"
						y="5"
						fill="rgba(3, 7, 18, 0.7)"
					/>
				</g>
				<g class="parallax4">
					<use href="#gentle-wave" x="48" y="7" fill="#030712" />
				</g>
			</svg>
		</div>

		<div class="container mx-auto px-6 lg:px-8 pt-4 pointer-events-auto">
			<div
				class="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left mb-12"
			>
				<div class="flex flex-col items-center md:items-start">
					<h2
						class="text-3xl font-bold text-white font-ranade tracking-wide mb-2"
					>
						France Reno
					</h2>
					<p class="text-gray-400 font-light text-sm max-w-xs">
						L'excellence en rénovation, nettoyage et débarras.
					</p>
				</div>

				<div class="flex flex-col items-center">
					<h3
						class="text-white font-semibold font-ranade mb-3 uppercase tracking-wider text-sm"
					>
						Nos Bureaux
					</h3>
					<p class="text-gray-400 font-light text-sm text-center">
						13 Rue de Lille<br />
						94700 Maisons-Alfort
					</p>
				</div>

				<div class="flex flex-col items-center md:items-end">
					<h3
						class="text-white font-semibold font-ranade mb-4 uppercase tracking-wider text-sm"
					>
						Suivez-nous
					</h3>

					<div class="flex flex-row flex-wrap justify-center gap-3">
						<a
							href="https://www.instagram.com/francereno"
							target="_blank"
							class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300 group"
						>
							<img
								src="@/assets/img/logos/instagram.svg"
								alt="Instagram"
								class="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all duration-300"
							/>
						</a>
						<a
							href="https://discord.gg/nAjQkcNG6V"
							target="_blank"
							class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300 group"
						>
							<img
								src="@/assets/img/logos/discord.svg"
								alt="Discord"
								class="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all duration-300"
							/>
						</a>
						<a
							href="https://www.linkedin.com/company/francereno"
							target="_blank"
							class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300 group"
						>
							<img
								src="@/assets/img/logos/linkedin.svg"
								alt="LinkedIn"
								class="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all duration-300"
							/>
						</a>
						<a
							href="https://www.tiktok.com/@francereno"
							target="_blank"
							class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300 group"
						>
							<img
								src="@/assets/img/logos/tiktok.svg"
								alt="TikTok"
								class="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all duration-300"
							/>
						</a>
						<a
							href="mailto:contact@france-reno-exemple.fr"
							class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300 group"
						>
							<img
								src="@/assets/img/logos/email.svg"
								alt="Email"
								class="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all duration-300"
							/>
						</a>
					</div>
				</div>
			</div>

			<div
				class="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs font-light text-gray-500 gap-4"
			>
				<p>
					© {{ new Date().getFullYear() }} France Reno. Tous droits
					réservés.
				</p>
				<div class="flex gap-4">
					<a href="#" class="hover:text-white transition-colors"
						>Mentions légales</a
					>
					<a href="#" class="hover:text-white transition-colors"
						>Politique de confidentialité</a
					>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped>
.font-ranade {
	font-family: 'Ranade', sans-serif;
}

/* Assure que la vague prend toute la largeur */
.waves {
	width: 100%;
}

/* Animation Move Forever : Fait défiler la vague horizontalement infiniment */
@keyframes move-forever {
	0% {
		transform: translate3d(-90px, 0, 0);
	}
	100% {
		transform: translate3d(85px, 0, 0);
	}
}

/* Application de l'animation sur chaque calque avec des durées différentes pour l'effet de profondeur */
.parallax1 > use {
	animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax2 > use {
	animation: move-forever 20s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax3 > use {
	animation: move-forever 15s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax4 > use {
	animation: move-forever 10s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
</style>
