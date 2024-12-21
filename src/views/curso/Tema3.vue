<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Objetivos de Desarrollo Sostenible (ODS)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-10.mx-auto
        .bg-rojo.p-4
          span Los Objetivos de Desarrollo Sostenible (ODS), son un conjunto de 17 metas adoptadas en el 2015 por los Estados miembros de las Naciones Unidas, como parte de la Agenda 2030, con el fin de encaminar al mundo hacia un futuro más justo, equitativo y sostenible.
    
    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        p.mb-4 Estos objetivos representan un esfuerzo global sin precedentes, para hacer frente a los grandes desafíos que enfrenta la humanidad, como la pobreza, la desigualdad, el cambio climático y la degradación ambiental. A diferencia de los Objetivos de Desarrollo del Milenio (ODM), que se centraban en los países en desarrollo y abordaban un conjunto limitado de indicadores, los ODS adoptan una perspectiva universal y holística, integrando plenamente los aspectos ambientales, sociales y económicos del desarrollo. (United Nations, 2015) 

        span La Agenda 2030, compuesta por 169 metas específicas, invita a gobiernos, organizaciones, empresas y ciudadanos a trabajar de manera conjunta y coordinada para abordar los problemas de manera interconectada. Los ODS trascienden los objetivos de reducción de la pobreza y mejora de la salud y la educación; también promueven la transición hacia energías limpias, un trabajo digno y un crecimiento económico sostenible. El enfoque en la igualdad de género, la acción climática y la protección de los ecosistemas marítimos y terrestres refleja una conciencia profunda sobre la interconexión y complejidad de los retos globales. (United Nations, 2020)
      .col-5.d-none.d-lg-block(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-5.d-none.d-lg-block(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        p.mb-4 El desarrollo sostenible busca equilibrar el crecimiento económico, la justicia social y la protección del medio ambiente, reconociendo que estos pilares son inseparables para un futuro próspero. Las políticas económicas deben ser sensibles a sus impactos sociales y ambientales, promoviendo una inclusión efectiva y una participación activa de la comunidad. Los avances en tecnologías limpias y la adopción de la economía circular demuestran que es posible progresar sin comprometer al planeta. Un ejemplo inspirador es Costa Rica, un país que ha logrado combinar el crecimiento económico con una protección ambiental efectiva. (CEPAL, 2019)
        span Alcanzar los ODS requiere una colaboración internacional sólida y el compromiso de todos los sectores para lograr cambios profundos y duraderos. Esta colaboración no solo busca mejorar la calidad de vida hoy, sino que también asegurar un entorno donde las futuras generaciones puedan prosperar en un mundo más justo, sostenible y lleno de oportunidades. 

    .row.bg-amarillo.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Objetivos de Desarrollo Sostenible
          p.mb-5 En el marco de la Agenda 2030, los Objetivos de Desarrollo Sostenible (ODS) representan una hoja de ruta integral para abordar los retos más urgentes de la humanidad y promover un futuro equilibrado, justo y sostenible. Estos 17 objetivos interrelacionados abordan temas fundamentales como la erradicación de la pobreza, la protección ambiental, la igualdad de género y el acceso universal a la educación y la salud, subrayando que el progreso en un área contribuye al avance en otras. En el PDF ODS, exploraremos cada uno de estos objetivos, destacando sus enfoques principales y su relevancia en el contexto global, ofreciendo una visión integral que invita a la acción conjunta para lograr un impacto significativo y duradero.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_ODS.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> ODS
             
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
    
    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.text-small
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=2n0TUKoIxOs") Ayuntamiento de Vitoria-Gasteiz / Gasteizko Udala. (2018, 11 octubre). Objetivos de Desarrollo Sostenible (ODS) [Vídeo]. YouTube.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=LYLzqBezwl8") Universidad Continental - Modalidad a Distancia. (2021, 15 agosto). Objetivos de Desarrollo Sostenible. sostenibilidad / Sustentabilidad [Vídeo]. YouTube. 
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/250194") Sotillo Lorenzo, J. Á. (2017). El ecosistema de la cooperación: la agenda 2030 para el desarrollo sostenible: (1 ed.). Los libros de la Catarata.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/")  Gamez, M. J. (2022, 24 mayo). Objetivos y metas de desarrollo sostenible - Desarrollo Sostenible.
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Texto que describa la imagen')



</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
