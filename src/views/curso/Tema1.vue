<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Conceptos fundamentales del desarrollo sostenible'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 El concepto de desarrollo sostenible se centra en la armonización de tres componentes esenciales: 
    .row.mb-4.justify-content-center
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-5.svg', style="width: 80px")
          p.px-1.mb-0.d-flex.text-bold.align-items-center Crecimiento económico
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up")
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-6.svg', style="width: 80px")
          p.px-1.mb-0.d-flex.text-bold.align-items-center Inclusión social
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-left")
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-7.svg', style="width: 80px")
          p.px-1.mb-0.d-flex.text-bold.align-items-center Protección del medio ambiente 

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 Surgió como respuesta a las preocupaciones sobre el progreso económico y, aunque ha proporcionado múltiples beneficios, también ha ocasionado significativos problemas sociales y medioambientales.
        .bg-rojo.p-4
          span La idea principal que subyace en el desarrollo sostenible es que las generaciones presentes deben satisfacer sus necesidades sin poner en riesgo la capacidad de las generaciones futuras, para atender sus propias necesidades. Este principio busca un equilibrio a largo plazo, promoviendo un modelo de desarrollo que pueda mantenerse, sin agotar los recursos del planeta ni provocar daños irreparables a los ecosistemas. 
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src="@/assets/curso/unidad/img-8.png", alt="Texto que describa la imagen")

    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Definición y principios fundamentales de desarrollo sostenible 

    p.mb-4 “El término desarrollo sostenible se refiere a la capacidad de satisfacer las necesidades del presente, sin comprometer la capacidad de las futuras generaciones, para satisfacer sus propias necesidades. Este concepto nace de la necesidad de encontrar un equilibrio entre el crecimiento económico, la justicia social y la protección del medio ambiente. Dado que el mundo enfrenta retos globales como el cambio climático, la pérdida de biodiversidad y la creciente desigualdad económica, el desarrollo sostenible proporciona un marco integral que permite abordar estos problemas, de manera coordinada y coherente”. (CEPAL, 2019) 
    p.mb-4 Para entender más profundamente el desarrollo sostenible, es importante reconocer que se fundamenta en tres pilares esenciales: 

    .row.mb-4.justify-content-center
     .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-right")
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-9.svg', style="width: 80px")
          p.px-1.mb-0.d-flex.text-bold.align-items-center Pilar ambiental
     .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-up")
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-10.svg', style="width: 80px")
          p.px-1.mb-0.d-flex.text-bold.align-items-center Pilar social
     .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-left")
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-11.svg', style="width: 80px")
          p.px-1.mb-0.d-flex.text-bold.align-items-center Pilar económico

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src="@/assets/curso/unidad/img-12.png", alt="Texto que describa la imagen")
      .col-12.col-xl-7(data-aos="fade-left")
        p.mb-4 Estos tres componentes representan las áreas claves que deben ser consideradas y equilibradas para permitir un crecimiento continuo y sustentable, evitando daños que sean irreversibles para nuestro planeta y sus recursos.
        .bg-rojo.p-4
          span Una de las definiciones más ampliamente aceptadas indica que “el desarrollo sostenible implica la gestión y conservación de los recursos naturales, así como la orientación de los cambios tecnológicos e institucionales, para asegurar el bienestar humano, tanto en el presente como en el futuro” (United Nations, 2020). 
    
    p.mb-4 El desarrollo sostenible se basa en una serie de principios fundamentales que guían su implementación y promoción en distintos contextos:
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')

      .tarjeta.bg-rojo.p-4(x="20%" y="73.4%" numero="+")
        .h5.mb-2 Responsabilidad global y local
        p La sostenibilidad es un esfuerzo colectivo que requiere acciones a nivel global y local. Mientras que los acuerdos internacionales pueden establecer normas y objetivos generales, las comunidades locales tienen la responsabilidad de adaptar estas directrices, a sus contextos específicos. De esta manera, el desarrollo sostenible se convierte en una tarea compartida que necesita la colaboración de todos los sectores de la sociedad, incluidos gobiernos, empresas, organizaciones no gubernamentales y ciudadanos. La cooperación entre diferentes niveles de gobierno y comunidades, es vital para alcanzar objetivos globales de sostenibilidad.
      .tarjeta.bg-rojo.p-4(x="20%" y="35.4%" numero="+")
        .h5.mb-2 Participación y transparencia
        p Es esencial que las decisiones relacionadas con el desarrollo sostenible, se tomen de forma inclusiva y participativa. Esto implica que todos los actores involucrados, desde las comunidades locales hasta las empresas y los gobiernos, deben tener voz en el proceso de toma de decisiones. Además, la transparencia en la gestión de recursos y la implementación de políticas sostenibles, es clave para garantizar la rendición de cuentas y la confianza de la sociedad. La participación activa y el acceso a la información, fortalecen la gobernanza y permiten que las decisiones sean más efectivas y justas.
      .tarjeta.bg-rojo.p-4(x="80%" y="35.4%" numero="+")
        .h5.mb-2 Equidad intergeneracional
        p Este principio destaca la responsabilidad de la generación actual de no agotar los recursos que futuras generaciones necesitarán. La idea es la de mantener un equilibrio que permita la continuidad de la vida y el bienestar de la humanidad, sin comprometer las posibilidades de desarrollo de quienes vivirán en el futuro. En este sentido, se promueve una utilización prudente de los recursos naturales que permita su renovación.
      .tarjeta.bg-rojo.p-4(x="80%" y="73.4%" numero="+")
        .h5.mb-2 Enfoque holístico e integrado
        p El desarrollo sostenible no se centra en un único aspecto, sino que aborda, de manera conjunta, problemas económicos, sociales y ambientales. Esto significa que el desarrollo económico debe ir de la mano con la equidad social y la protección del medio ambiente. Un ejemplo claro de este principio se observa cuando las políticas que fomentan la creación de empleo, también consideran el impacto ambiental de las industrias que se van a desarrollar, así como las condiciones laborales de los trabajadores. Esta visión integral asegura que el desarrollo no ocurra a expensas de otros factores cruciales para el bienestar.

    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2  
        h2 Diferencias entre sostenibilidad y sustentabilidad
    
    p.mb-4  Los términos sostenibilidad y sustentabilidad son utilizados, frecuentemente, como sinónimos en discursos relacionados con el medio ambiente, el desarrollo económico y la equidad social. Sin embargo, aunque ambos conceptos comparten similitudes y están estrechamente relacionados, tienen matices que los diferencian y que son importantes para entender su aplicación en diferentes contextos. 
    p.mb-4 A continuación, se profundiza en las definiciones de cada uno, sus orígenes y las diferencias claves que los separan.
    p.mb-4 Comencemos con la sostenibilidad:

    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="¿Qué es?")
            p La sostenibilidad se refiere a la capacidad de mantener o prolongar un proceso, actividad o estado en el tiempo, sin agotar los recursos o causar un daño irreversible al medio ambiente. El concepto surge de la necesidad de asegurar que las actividades humanas, especialmente aquellas relacionadas con el desarrollo económico, no comprometan la capacidad de las generaciones futuras, para satisfacer sus propias necesidades.
          .div(titulo="Pilares fundamentales")
            p La sostenibilidad está basada en tres pilares fundamentales: el económico, el social y el ambiental, que deben coexistir y apoyarse mutuamente para lograr un equilibrio a largo plazo.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
    
    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="¿Qué implica?")
            p En la práctica, la sostenibilidad implica diseñar sistemas y procesos que sean regenerativos y resilientes. Por ejemplo, en el contexto empresarial, las prácticas sostenibles pueden incluir la adopción de energías renovables, la gestión eficiente de recursos hídricos, el uso de materiales reciclables y la reducción de emisiones de carbono. Además, la sostenibilidad también aborda aspectos sociales, como la promoción de la igualdad, el bienestar de las comunidades y el respeto por los derechos humanos.
          .div(titulo="Ejemplo")
            p Un ejemplo que permite comprender el término sostenibilidad, consiste en una empresa de producción textil que adopta un modelo de sostenibilidad podría transformar todo su ciclo de vida del producto para minimizar el impacto ambiental. Esto incluiría el uso de materiales reciclables y biodegradables, la reducción del uso de agua y energía en la producción, la eliminación de residuos tóxicos, el diseño de productos que sean fáciles de reciclar al final de su vida útil, y la implementación de programas de responsabilidad social que aseguren condiciones laborales justas para todos los trabajadores. Aquí, la sostenibilidad implica la transformación integral de las prácticas, para lograr un equilibrio entre lo económico, lo social y lo ambiental.

    p.mb-4 Y finalicemos con la sustentabilidad:

    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="¿Qué es?")
            p La sustentabilidad, aunque similar a la sostenibilidad, pone un énfasis particular en la capacidad de los sistemas para sostenerse a sí mismos a lo largo del tiempo, utilizando, de manera eficiente y responsable, los recursos disponibles sin agotarlos. La palabra “sustentable” proviene del latín “sustentare”, que significa sostener, soportar o mantener. Este término se asocia frecuentemente, con la gestión de recursos naturales y la capacidad de los ecosistemas para autorregenerarse , asegurando que los recursos que se extraen puedan ser reemplazados o regenerados naturalmente.
          .div(titulo="¿En qué se centra?")
            p A diferencia de la sostenibilidad, que aborda un enfoque más amplio e integrado, la sustentabilidad se centra más en la gestión responsable y eficiente de los recursos. En el contexto de la sustentabilidad, se prioriza el uso prudente de los recursos naturales para garantizar que no se agoten a un ritmo más rápido del que la naturaleza puede regenerarlos. Por ejemplo, en el ámbito agrícola, la agricultura sustentable implica prácticas que conservan la fertilidad del suelo, usan agua de manera eficiente y reducen la dependencia de insumos químicos que pueden dañar el medio ambiente.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')

    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Aplicación")
            p La sustentabilidad también se aplica a otros aspectos de la vida diaria, como el consumo responsable de energía, agua y alimentos, y la promoción de hábitos que reduzcan la generación de residuos. Este concepto tiene un enfoque más operativo y pragmático, centrado en la autogestión y el mantenimiento de la capacidad productiva de los ecosistemas, y suele ser utilizado en áreas como la agricultura, la silvicultura, la pesca y la gestión de recursos naturales.
          .div(titulo="Ejemplo")
            p Un ejemplo que permite comprender el término sustentabilidad consiste en un agricultor que adopta prácticas de agricultura sustentable, puede utilizar técnicas como la rotación de cultivos, el compostaje de residuos orgánicos y el uso de sistemas de riego eficientes para conservar el agua. La sustentabilidad, en este contexto, se refiere a mantener la fertilidad del suelo y la capacidad del sistema agrícola, para producir alimentos de manera indefinida, sin agotar los recursos ni depender de insumos químicos que dañen el medio ambiente. Aquí, el énfasis está en la autogestión del sistema y en mantener la capacidad productiva de manera eficiente.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=_Rr6GmIiohA") CoSustenta UV. (2023, 7 enero). ¿Sustentable o sostenible? [Vídeo]. YouTube.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=mRdKQGwAhak") Jorge Antonio Asprón Ramírez. (2023, 7 octubre). Desarrollo Sustentable - Escenarios de la sustentabilidad [Vídeo].Youtube.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/124252") Innovación y Cualificación, S. L. (2019). Gestión ambiental y desarrollo sostenible: ( ed.). IC Editorial. 
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/164535") Correa Restrepo, F. (2017). Desarrollo sostenible: revisión histórica desde la economía: ( ed.). Ediciones Unaula.  
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/123060") Jiménez Herrero, L. M. (2018). Desarrollo sostenible: transición hacia la coevolución global: ( ed.). Difusora Larousse - Ediciones Pirámide. 
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Texto que describa la imagen')



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
