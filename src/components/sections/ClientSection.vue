<script setup>
import logoGemo from '@/assets/img/clients/gemo.svg';
import logoRadioFrance from '@/assets/img/clients/radio_france.svg';
import logoRestosDuCoeur from '@/assets/img/clients/restos-du-coeur.svg';
import logoUPS from '@/assets/img/clients/ups.png';

const clients = [
	{ id: 1, name: 'Gemo', logo: logoGemo },
	{ id: 2, name: 'Radio France', logo: logoRadioFrance },
	{ id: 3, name: 'Restos Du Coeur', logo: logoRestosDuCoeur },
	{ id: 4, name: 'UPS', logo: logoUPS },
];
</script>

<template>
	<section class="py-24 bg-[#f8f8f8] relative overflow-hidden">
		<div class="container mx-auto px-6 lg:px-8 mb-16 text-center">
			<h2
				class="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-gray-900 leading-[1.2] mb-6 font-ranade"
			>
				Ils nous ont fait confiance
			</h2>

			<p
				class="text-lg text-gray-800 leading-[1.7] max-w-2xl mx-auto font-light font-ranade"
			>
				Des particuliers exigeants aux grands groupes immobiliers,
				découvrez les partenaires et clients qui s'appuient sur
				l'expertise France Reno au quotidien pour valoriser leurs
				espaces.
			</p>
		</div>

		<div class="relative w-full overflow-hidden flex py-12">
			<div
				class="absolute inset-y-0 left-0 w-16 md:w-32 z-10 pointer-events-none"
			></div>
			<div
				class="absolute inset-y-0 right-0 w-16 md:w-32 z-10 pointer-events-none"
			></div>

			<div class="flex animate-scroll w-max items-center">
				<div
					v-for="i in 4"
					:key="i"
					class="flex space-x-16 md:space-x-24 px-8 md:px-12 items-center"
				>
					<div
						v-for="client in clients"
						:key="`${client.id}-${i}`"
						class="flex items-center justify-center min-w-[120px]"
					>
						<div
							class="text-2xl md:text-3xl font-extrabol font-ranade transition-all duration-300 cursor-default"
						>
							<img
								:src="client.logo"
								:alt="`Logo ${client.name}`"
								class="h-10 md:h-14 w-auto object-contain transition-all duration-300 cursor-default"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.font-ranade {
	font-family: 'Ranade', sans-serif;
}

/* MODIFICATION ICI : 
  Comme on a 4 blocs identiques, un seul bloc représente 25% de la largeur totale.
  En décalant de -25%, le bloc 2 prend exactement la place du bloc 1 de manière invisible, 
  et il reste les blocs 3 et 4 pour remplir le reste de l'écran. 
  La boucle est parfaite.
*/
@keyframes scroll {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-25%);
	}
}

.animate-scroll {
	/* Vous pouvez ajuster le '20s' pour accélérer ou ralentir le défilement */
	animation: scroll 20s linear infinite;
}

/* Met l'animation en pause quand l'utilisateur survole la bande avec sa souris */
.group:hover .animate-scroll {
	animation-play-state: paused;
}
</style>

