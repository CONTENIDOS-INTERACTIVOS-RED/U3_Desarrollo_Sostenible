<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    p.mb-4 El desarrollo sostenible se ha convertido en un concepto clave para abordar los desafíos globales contemporáneos, como el cambio climático, la desigualdad social y la degradación ambiental. Esta primera unidad, “Fundamentos del desarrollo sostenible”, tiene como propósito proporcionar una comprensión básica, pero profunda, de los conceptos esenciales que definen la sostenibilidad y la sustentabilidad, así como su evolución a lo largo del tiempo. Es crucial para el curso en general, dado que establece la base sobre la cual se explorarán las diferentes dimensiones y estrategias que permiten alcanzar un desarrollo equilibrado y equitativo, en el contexto actual.
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 La estructura de esta unidad está diseñada para guiar al estudiante desde lo general hasta lo específico. Se comienza con una definición de desarrollo sostenible y sustentable, seguido de una revisión de su historia y evolución. Posteriormente, se estudian los Objetivos de Desarrollo Sostenible (ODS), y se analiza la relación entre el desarrollo económico, la equidad social y el cuidado ambiental. Las actividades incluyen lecturas, análisis de casos y debates que permiten aplicar los conceptos aprendidos en contextos prácticos.
        span La relevancia de este tema radica en su conexión directa con problemáticas reales que afectan, tanto a las comunidades locales como a la sociedad global.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src="@/assets/curso/unidad/img-1.png", alt="Texto que describa la imagen")
    
    .row.mb-4
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.d-flex.flex-column
        .d-flex.align-items-start.bg-verde.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-3.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Los Objetivos de Desarrollo Sostenible (ODS), establecidos por la ONU, ofrecen una hoja de ruta que orienta a gobiernos, empresas y ciudadanos, hacia un futuro más justo y próspero. Comprender estos conceptos es esencial para quienes desean desempeñarse en roles que requieran una visión integral del desarrollo, desde el ámbito empresarial hasta el sector público y las organizaciones no gubernamentales. 
        span Es importante que el estudiante asuma un papel activo en su proceso de aprendizaje, participando en los debates y actividades propuestos, y que se prepare revisando materiales básicos sobre conceptos de economía, medio ambiente y sociedad. Su compromiso será clave para comprender la complejidad del desarrollo sostenible y cómo puede integrarse, de manera efectiva, en diferentes áreas profesionales. 
    
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-rojo.p-4.mb-4
          span Al finalizar esta unidad, el estudiante será capaz de identificar los conceptos claves del desarrollo sostenible y sustentable, y explicar su relevancia en el contexto de los desafíos globales actuales. Esta competencia le permitirá reconocer la importancia de adoptar prácticas sostenibles en diversos sectores, y su impacto en la vida cotidiana y profesional.
        span Al comprender estos fundamentos, estará mejor preparado para enfrentar las siguientes unidades del curso, que explorarán las dimensiones específicas del desarrollo sostenible y las estrategias para su implementación.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src="@/assets/curso/unidad/img-4.png", alt="Texto que describa la imagen")


</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
