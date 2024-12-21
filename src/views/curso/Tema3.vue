<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Innovación tecnológica y su papel en el desarrollo sustentable'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4 La innovación tecnológica es fundamental para alcanzar los objetivos de desarrollo sustentable, porque proporciona soluciones avanzadas que permiten enfrentar los desafíos ambientales y sociales, a nivel global. En un contexto donde el cambio climático, la escasez de recursos naturales y la degradación de los ecosistemas, amenazan la estabilidad de los sistemas naturales y económicos, la tecnología emerge como una herramienta clave para mitigar estos problemas y promover un crecimiento más responsable. La innovación tecnológica aplicada a la sostenibilidad abarca  desde el desarrollo de energías limpias hasta la optimización de procesos industriales, pasando por la gestión de residuos y el aprovechamiento de la digitalización para una toma de decisiones más precisa y eficiente.
    #t_3_1.titulo-segundo
      div.d-flex
        span.me-3 3.1  
        h2 Tecnologías para la sostenibilidad ambiental

    p.mb-4 Las tecnologías para la sostenibilidad ambiental, representan una serie de innovaciones diseñadas para minimizar el impacto negativo de las actividades humanas en el medio ambiente y maximizar el uso responsable de los recursos naturales.
    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        .bg-rojo.p-4.mb-4
          span Estas tecnologías surgen como respuesta a los desafíos ambientales, como el cambio climático, la degradación de los ecosistemas y la creciente demanda de recursos, en una población global, en aumento. El objetivo de estas tecnologías es el de transformar sectores productivos, como la energía, la agricultura y la industria, para que operen de manera más limpia y eficiente, reduciendo la emisión de contaminantes y optimizando la utilización de insumos.
        p.mb-4 Para conocer algunas de estas tecnologías, lo invitamos a escuchar el siguiente podcast.

        TarjetaAudio.color-primario.bg-white.mb-0(
          texto="Proceso de descarga de MySQL Server Community y MySQL Workbench"
          tiempo
          :audio="require('../../assets/componentes/audios/audio-ej.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )

    #t_3_2.titulo-segundo
      div.d-flex
        span.me-3 3.2  
        h2 Digitalización y soluciones inteligentes para la sostenibilidad     

    p.mb-4 La digitalización y las soluciones inteligentes están desempeñando un papel cada vez más relevante en la promoción de la sostenibilidad, dado que permiten una administración más precisa y eficiente de los recursos, una optimización de los procesos y una toma de decisiones basada en datos en tiempo real. El avance en tecnologías como la inteligencia artificial (IA), el Big Data, el Internet de las Cosas (IoT) y las plataformas digitales, ha transformado profundamente la gestión de procesos en sectores claves, como el energético, el agrícola, el urbano y el industrial, haciendo posible una mayor eficiencia y una reducción de desperdicios.
    p.mb-4  Conozcamos algunas de las soluciones inteligentes utilizadas para la sostenibilidad:

    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Inteligencia artificial - Big Data")
            p La inteligencia artificial y el Big Data, permiten recopilar, analizar y procesar, grandes volúmenes de datos para identificar patrones y tendencias que optimizan el uso de recursos y la sostenibilidad. En el ámbito de la agricultura, por ejemplo, la IA permite analizar datos climáticos, de suelo y de crecimiento de cultivos para ajustar las prácticas agrícolas en función de las condiciones actuales. Esta tecnología ayuda a los agricultores a reducir el uso de agua, fertilizantes y pesticidas, minimizando su impacto ambiental y maximizando la eficiencia de producción. Además, el Big Data también se utiliza en el sector energético para predecir y gestionar la demanda de electricidad, lo cual permite optimizar el uso de las redes eléctricas y evitar el desperdicio de energía.
          .div(titulo="Internet de las Cosas (iot)")
            p El Internet de las Cosas (IoT) ha revolucionado la sostenibilidad en ciudades e industrias mediante la interconexión de dispositivos y sistemas que monitorean el uso de recursos y las condiciones ambientales en tiempo real. En las ciudades inteligentes, por ejemplo, los sensores IoT permiten gestionar el tráfico, reducir el consumo de energía en edificios y optimizar la recolección de residuos, contribuyendo a un entorno urbano más eficiente y menos contaminante. En el ámbito industrial, el IoT permite monitorizar el funcionamiento de las máquinas y los procesos de producción, detectando problemas y ajustando parámetros para reducir el consumo energético y mejorar la eficiencia. Estas aplicaciones son fundamentales para reducir el impacto ambiental de las operaciones industriales y mejorar la sostenibilidad de las ciudades, al reducir las emisiones y el consumo de recursos.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
    .row.mb-5
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Inteligencia artificial - Big Data")
            p Las plataformas digitales y la gestión de datos, también juegan un papel clave en la sostenibilidad, puesto que permiten un monitoreo exhaustivo y transparente de los procesos y la trazabilidad en la cadena de suministro. A través de estas plataformas, las empresas pueden controlar sus procesos de producción y distribución, garantizando que se cumplan con los estándares de sostenibilidad y que se gestionen de manera ética. Las plataformas de trazabilidad y gestión de datos también facilitan el cumplimiento de normativas ambientales y la adopción de prácticas sostenibles, porque proporcionan a los consumidores información clara sobre el origen y la sostenibilidad de los productos que compran. De esta forma, las plataformas digitales no solo permiten a las empresas mejorar su desempeño ambiental, sino que también refuerzan la transparencia y la confianza de los consumidores en los productos sostenibles.
          .div(titulo="Ciudades inteligentes")
            p En el ámbito urbano, la digitalización ha permitido el desarrollo de ciudades inteligentes que integran tecnología para una administración óptima de los recursos y los servicios públicos. Las ciudades inteligentes aprovechan el análisis de datos en tiempo real para ajustar el tráfico, la gestión de la energía y el tratamiento de residuos, de acuerdo con las necesidades de los ciudadanos, promoviendo así un uso más racional de los recursos y mejorando la calidad de vida. Además, las ciudades inteligentes implementan sistemas de gestión ambiental que permiten monitorear y reducir las emisiones de carbono, gestionar el agua de manera sostenible y mejorar la eficiencia energética de los edificios, lo cual resulta esencial en la construcción de un futuro más sustentable.


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
