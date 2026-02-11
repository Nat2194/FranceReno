<template>
  <main class="pt-32 pb-20 bg-white">
    <div class="container mx-auto px-6">
      <div
        class="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-10"
      >
        <div>
          <h2
            class="text-sm uppercase tracking-[0.3em] text-eri-blue font-bold mb-4 italic"
          >
            // Nos Réalisations
          </h2>
          <h1 class="text-4xl md:text-6xl font-black text-eri-dark uppercase">
            Projets <span class="text-gray-300 font-light">phares</span>
          </h1>
        </div>
        <p class="text-gray-500 max-w-xs text-right hidden md:block">
          Une sélection de chantiers complexes menés avec précision.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        <div
          v-for="i in 6"
          :key="i"
          class="group relative aspect-[4/5] overflow-hidden border border-gray-100"
        >
          <img
            :src="`https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800&sig=${i}`"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-eri-dark/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"
          ></div>

          <div
            class="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
          >
            <p
              class="text-eri-blue font-bold text-sm mb-2 uppercase tracking-widest"
            >
              Exemple de chantier
            </p>
            <h3 class="text-white text-2xl font-bold uppercase">
              Exemple de chantier
            </h3>
            <div
              class="h-1 w-0 group-hover:w-full bg-eri-blue mt-4 transition-all duration-500"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
