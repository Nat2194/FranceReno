<template>
	<div
		class="fixed w-full bg-white z-999 transition-all duration-300 ease-in-out"
		:class="{
			'shadow-md': !isSticky,
			'shadow-2xl': isSticky,
			'h-12': !isSticky,
			'h-18': isSticky,
		}"
	>
		<div class="xl:hidden px-4 py-2 bg-white flex flex-row justify-between">
			<router-link to="/">
				<img
					src="@/assets/img/logos/logo.png"
					class="object-contain lg:h-30 md:h-20 h-10"
				/>
			</router-link>
			<DropDownHeader />
		</div>
		<div
			class="hidden xl:flex xl:flex-row justify-between pl-32 pr-8 bg-white transition-all duration-300 ease-in-out shadow-[0_5px_20px_rgba(0,0,0,0.05)] border-b border-[rgb(223,223,223)]"
			:class="{ 'p-2': !isSticky }"
		>
			<router-link
				to="/"
				class="flex items-center gap-2 py-2 !text-black logo"
			>
				<img
					src="@/assets/img/logos/logo.png"
					class="object-contain h-20"
				/>
			</router-link>

			<ul class="flex flex-row items-center justify-center">
				<li
					:class="{
						'header-text': !isSticky,
						'header-text-sticky': isSticky,
					}"
				>
					<a
						href="https://drive.google.com/drive/u/1/folders/1ZNng0vXwUQXp3xqbnCKuTW_xXq8B-2Xi"
						>Médias</a
					>
				</li>
				<li
					:class="{
						'header-text': !isSticky,
						'header-text-sticky': isSticky,
					}"
				>
					<router-link to="/schedule">
						<a>Matchs</a>
					</router-link>
				</li>
				<li
					:class="{
						'header-text': !isSticky,
						'header-text-sticky': isSticky,
					}"
				>
					<router-link to="/rankings">
						<a>Classement</a>
					</router-link>
				</li>
				<li
					:class="{
						'header-text': !isSticky,
						'header-text-sticky': isSticky,
					}"
				>
					<router-link to="/planning">
						<a>Planning</a>
					</router-link>
				</li>
				<li
					:class="{
						'header-text': !isSticky,
						'header-text-sticky': isSticky,
					}"
				>
					<router-link to="/players">
						<a>Joueurs</a>
					</router-link>
				</li>
				<li
					:class="{
						'header-text': !isSticky,
						'header-text-sticky': isSticky,
					}"
				>
					<a href="https://forms.gle/qytvKtgq35xuB5g58"
						>Inscription</a
					>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import DropDownHeader from '@/components/DropDownHeader.vue';

export default {
	components: { DropDownHeader },
	data() {
		return {
			isSticky: false,
			mobileMenuOpen: false,
		};
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
	},
	beforeUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll() {
			if (window.scrollY > 0) {
				this.isSticky = true;
			} else {
				this.isSticky = false;
			}
		},
		toggleMobileMenu() {
			this.mobileMenuOpen = !this.mobileMenuOpen;
		},
	},
};
</script>

<style scoped lang="scss"></style>
