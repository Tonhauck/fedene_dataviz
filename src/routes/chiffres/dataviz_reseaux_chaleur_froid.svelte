<script>
  import { onMount } from 'svelte';

  export let currentStep2;

  let start = 1; // Valeur initiale pour le calcul de la hauteur
  let heightPercentage = 0;
  let imgHeight = 0; // Hauteur de l'image
  let imgWidth = 0; // Largeur de l'image
  let imgTopOffset = 0; // Position de l'image par rapport au haut de la page
  let margins = { top: 0, bottom: 0, left: 0, right: 0 };

  const updateMargins = () => {
    const img = document.querySelector('#reseau');
    if (img) {
      const rect = img.getBoundingClientRect();
      margins.top = rect.height * 0.1;
      margins.bottom = rect.bottom * 0.1;
      margins.left = rect.left;
      margins.right = window.innerWidth - rect.right;
      imgWidth = img.clientWidth || 0; // Récupération de la largeur de l'image
    }
  };

  // Fonction pour ajuster la hauteur de la div en fonction du scroll
  const updateHeightPercentage = () => {
    const scrollPos = window.scrollY;
    if (scrollPos >= imgTopOffset && imgHeight > 0) {
      const relativeScroll = scrollPos - imgTopOffset;
      heightPercentage = Math.min(100, (relativeScroll / imgHeight) * 100);
    } else if (scrollPos < imgTopOffset) {
      heightPercentage = 0; // Réinitialiser la hauteur quand on revient au-dessus de l'image
    }
  };

  // Fonction pour mettre à jour la hauteur de l'image et sa position
  const setImageDimensions = () => {
    const img = document.querySelector('#reseau');
    if (img) {
      imgHeight = img.clientHeight;
      imgTopOffset = img.getBoundingClientRect().top + window.scrollY;
    }
  };

  onMount(() => {
    const img = document.querySelector('#reseau');

    const initialize = () => {
      setImageDimensions();
      updateMargins();
      updateHeightPercentage();
    };

    if (img) {
      img.addEventListener('load', initialize);

      if (img.complete) {
        initialize();
      }
    }

    window.addEventListener('resize', setImageDimensions);
    window.addEventListener('resize', updateMargins);
    window.addEventListener('scroll', updateHeightPercentage);

    return () => {
      if (img) {
        img.removeEventListener('load', initialize);
      }
      window.removeEventListener('resize', setImageDimensions);
      window.removeEventListener('resize', updateMargins);
      window.removeEventListener('scroll', updateHeightPercentage);
    };
  });
</script>

<div
  id="dataviz_reseaux_chaleur_froid"
  style="display: flex; justify-content: center; align-items: center; position: relative; width: 100%; height: auto;"
>
  <!-- Image SVG responsive -->
  <img
    src="reseau_froid.svg"
    alt="Réseau froid"
    id="reseau"
    style="max-width: 100%; height: auto; object-fit: contain;"
  />

  <!-- Div rouge responsive -->
  <div
    style="background-color: #ED776E; position: absolute; top: {margins.top}px; left: {margins.left}px; width: {imgWidth /
      2}px; z-index: -3; height: {heightPercentage + start}%;"
  ></div>

  <!-- Div bleue responsive -->
  <div
    style="background-color: #249DE1; position: absolute; top: {margins.top}px; right: {margins.right}px; width: {imgWidth /
      2}px; z-index: -3; height: {heightPercentage + start}%;"
  ></div>
</div>

<style>
  /* Style pour le conteneur et l'image SVG */
  #dataviz_reseaux_chaleur_froid {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  #reseau {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }

  /* Styles pour les divs colorées */
  .div-rouge,
  .div-bleue {
    position: absolute;
    z-index: -3;
  }

  /* Responsive pour les petits écrans */
  @media (max-width: 768px) {
    #dataviz_reseaux_chaleur_froid {
      width: 90%; /* Réduire la largeur à 90% */
      margin: 0 auto; /* Centrer le conteneur */
    }

    #reseau {
      max-width: 90%; /* Réduire la largeur de l'image */
      height: auto;
    }
  }
</style>
