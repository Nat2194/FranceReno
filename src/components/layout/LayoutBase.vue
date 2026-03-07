<template>
	<div class="flex flex-col relative">
		<HeaderBar />
		<div class="flex-grow w-full mt-24 bg-very-light-grey">
			<slot />
		</div>
		<FooterBar class="relative z-20 pointer-events-none" />
	</div>
</template>

<script setup>
import FooterBar from '@/components/layout/FooterBar.vue';
import HeaderBar from '@/components/layout/HeaderBar.vue';
</script>
