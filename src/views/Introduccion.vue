<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-verde.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-1.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 La tercera unidad de este curso, titulada “Políticas y estrategias para el desarrollo sostenible,” aborda la aplicación práctica de los conceptos de sostenibilidad a través de políticas y estrategias que promuevan un equilibrio duradero entre el crecimiento económico, el bienestar social y la protección ambiental. En un mundo donde los desafíos globales son cada vez más complejos, es esencial comprender cómo las políticas nacionales e internacionales, junto con las estrategias empresariales y las innovaciones tecnológicas, pueden contribuir a un desarrollo sostenible y equitativo. Esta unidad es fundamental, dado que ofrece a los estudiantes las herramientas para evaluar políticas y estrategias de sostenibilidad en diversos contextos, y para analizar casos de éxito y fracaso que brindan lecciones valiosas sobre la implementación efectiva de prácticas sostenibles.

    .row.mb-4
      .col-12.col-xl-5(data-aos="fade-right")
        span Al finalizar esta unidad, el estudiante será capaz de evaluar políticas y estrategias de desarrollo sostenible, tanto a nivel local como global, aplicando principios fundamentales para analizar ejemplos reales. Este conocimiento le permitirá desarrollar una visión crítica sobre la sostenibilidad, que podrá aplicar en distintos ámbitos profesionales, desde la creación de políticas públicas, hasta la gestión de proyectos sostenibles en el sector privado. La relevancia de este contenido radica en su impacto directo sobre la práctica profesional, ofreciendo una perspectiva integral de cómo las decisiones estratégicas pueden influir en el desarrollo sostenible y en la creación de valor a largo plazo.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')
      .col-12.col-xl-5(data-aos="fade-left")
        p.mb-4 Esta unidad está organizada en cuatro temas principales: 
        ol.lista-ol--cuadro
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 Se abordarán las políticas de desarrollo sostenible, tanto en el ámbito nacional como internacional, para entender los marcos regulatorios y sus implicaciones
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 Se explorarán las estrategias empresariales que permiten a las organizaciones operar de manera sostenible y competitiva
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 Se examinará el papel de la innovación tecnológica, destacando cómo esta puede impulsar el desarrollo sustentable
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 4
            p.mb-0 Se analizarán casos de éxito y fracaso en la implementación de políticas sostenibles, permitiendo una comprensión más profunda de los factores que influyen en su eficacia.

    .row.mb-5
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-azul-claro.p-4.mb-4
          span Las actividades de la unidad incluirán análisis de casos, discusiones en foros y evaluaciones prácticas, que fomentarán la aplicación reflexiva de los conceptos. 
        span Es esencial que el estudiante participe de manera activa y comprometida con esta unidad, aprovechando las actividades y recursos propuestos para fortalecer su comprensión de las políticas y estrategias de sostenibilidad. Reflexionar sobre los contenidos de las unidades anteriores, permitirá establecer un contexto sólido y facilitará la comprensión de cómo las estrategias de sostenibilidad pueden llevarse a la práctica, de manera efectiva. Con esta unidad, el estudiante estará preparado para aplicar una visión integral del desarrollo sostenible en su futura práctica profesional, contribuyendo a un cambio positivo en su entorno y en la sociedad en general.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')



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
