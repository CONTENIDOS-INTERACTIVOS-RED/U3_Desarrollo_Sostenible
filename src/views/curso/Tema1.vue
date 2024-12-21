<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Políticas nacionales e internacionales de desarrollo sostenible'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4 
      .col-12.col-xl-10(data-aos="fade-right")
        span Las políticas de desarrollo sostenible, tanto a nivel nacional como internacional, constituyen un marco normativo y estratégico fundamental que busca equilibrar el crecimiento económico, la protección ambiental y el bienestar social. Estas políticas no solo abordan las particularidades y necesidades de cada país, sino que también se enfocan en desafíos globales que afectan a todas las naciones. Así, mediante acuerdos y normativas, se aspira a impulsar un desarrollo inclusivo y sostenible, que beneficie tanto a las generaciones presentes como futuras, y que esté alineado con un enfoque colaborativo a nivel mundial. 
      .col-2.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')

    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Políticas nacionales de desarrollo sostenible 

    p.mb-4 Cada país elabora sus políticas de desarrollo sostenible, en función de sus particularidades, tomando en cuenta aspectos como la geografía, los recursos naturales, la situación económica y el contexto sociocultural. 

    p.mb-4 Estas políticas suelen basarse en principios que guían su formulación e implementación:

    .row.position-relative.mb-5.py-4.bg-azul.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Precaución y prevención 
              p Uno de estos principios es la precaución y prevención que implica anticiparse a los posibles daños ambientales, incluso si estos no pueden preverse con certeza absoluta, adoptando medidas preventivas para proteger los ecosistemas. Este enfoque es fundamental en contextos donde el impacto ambiental es difícil o incluso irreversible, pues garantiza la protección del entorno natural frente a la explotación excesiva o mal gestionada de los recursos. (Ministerio de Ambiente y Desarrollo Sostenible de Colombia, 2021)
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Equidad intergeneracional
              p Otro principio crucial es el de equidad intergeneracional, que asegura que las decisiones tomadas hoy no limiten las posibilidades de vida de las generaciones futuras. Este principio busca que la generación actual utilice los recursos naturales de manera responsable, de modo que las generaciones venideras puedan disfrutar de un ambiente sano y de oportunidades de desarrollo similares a las de sus predecesores.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Políticas de desarrollo sostenible
              p Las políticas de desarrollo sostenible, son principios que se apoyan en el concepto de responsabilidad compartida entre el sector público, el sector privado y la ciudadanía. Este enfoque fomenta una colaboración activa entre gobiernos, empresas, comunidades y ciudadanos para implementar prácticas sostenibles
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Justicia social y participación ciudadana
              p Los principios de justicia social y participación ciudadana, también son esenciales, puesto que aseguran que todos los sectores sociales, especialmente los más vulnerables, tengan la oportunidad de participar en la toma de decisiones y se beneficien de los logros en sostenibilidad.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')


    p.mb-4 Para poner en práctica estas políticas, los gobiernos suelen estructurar un marco de implementación que incluye planes nacionales, legislación, regulaciones y programas específicos, a mediano y largo plazo. 
    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
      .col-12.col-xl-5(data-aos="fade-left")
        .bg-verde.p-4.mb-4
          span Uno de los documentos estratégicos más comunes es el Plan Nacional de Desarrollo (PND), en el que cada país define sus metas de sostenibilidad y las acciones necesarias para alcanzarlas dentro de un período determinado, generalmente de cuatro a seis años.  
        span Estos planes permiten a los gobiernos introducir regulaciones ambientales, como límites a las emisiones de gases contaminantes, restricciones sobre la explotación de recursos naturales y políticas de gestión de residuos. Además, muchos países incluyen incentivos financieros y fiscales, como exenciones de impuestos o subsidios, para fomentar la inversión en tecnologías limpias y la adopción de prácticas sostenibles en el sector privado. (Ministerio de Ambiente y Desarrollo Sostenible de Colombia, 2021)
    
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-rojo.p-4.mb-4
          span Un elemento fundamental de las políticas nacionales, es la adaptación de los Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas a cada contexto nacional. 
        span Estos objetivos globales, que abarcan una amplia gama de áreas como la salud, la educación, el agua y el cambio climático, son ajustados por cada país según sus necesidades y prioridades específicas. Así, los ODS se convierten en una herramienta flexible que permite a cada nación abordar sus problemáticas locales mientras contribuye a los compromisos globales.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')

    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2  
        h2 Políticas internacionales de desarrollo sostenible
    
    p.mb-4 A nivel internacional, las políticas de desarrollo sostenible, se han establecido mediante acuerdos y compromisos globales que buscan enfrentar desafíos, como el cambio climático, la pérdida de biodiversidad y la desigualdad social, los cuales afectan a todas las naciones. Estos acuerdos crean un marco para la colaboración entre países, estableciendo objetivos y metas comunes, que fomentan un trabajo conjunto y sostenido, para proteger el planeta y promover un desarrollo inclusivo. Conozcamos algunos de ellos:

    ImagenInfografica.color-secundario.mb-0
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')

      .tarjeta.bg-rojo.p-4(x="20%" y="20%" numero="+")
        .h5.mb-2 Acuerdo de París

        p  Uno de los acuerdos más destacados es el Acuerdo de París, adoptado en el 2015 durante la COP21. Este acuerdo establece una meta global para reducir las emisiones de gases de efecto invernadero, con el fin de mantener el aumento de la temperatura mundial por debajo de 2 °C y, de ser posible, limitarlo a 1.5 °C. En el marco de este acuerdo, cada país presenta sus Contribuciones Determinadas a Nivel Nacional (NDCs), donde establece sus metas de reducción de emisiones y las políticas específicas para alcanzarlas. Además de su enfoque en la reducción de emisiones, el Acuerdo de París fomenta la colaboración en términos de financiamiento y transferencia de tecnología, permitiendo que los países en desarrollo, adopten prácticas de bajo carbono y se adapten a los efectos del cambio climático. El Fondo Verde para el Clima es un ejemplo de cómo los países desarrollados apoyan financieramente a los países en desarrollo para ayudarles a cumplir con sus objetivos climáticos. (Unión Europea, 2020)
      .tarjeta.bg-rojo.p-4(x="20%" y="20%" numero="+")
        .h5.mb-2 Agenda 2030
 
        p Otro pilar de las políticas internacionales es la Agenda 2030 y sus 17 Objetivos de Desarrollo Sostenible (ODS), adoptada en el 2015 por la Asamblea General de las Naciones Unidas. Esta agenda, que abarca temas diversos como la erradicación de la pobreza, la protección de la biodiversidad y la lucha contra el cambio climático, promueve una visión integral de la sostenibilidad, donde los aspectos sociales, económicos y ambientales, se encuentran interrelacionados. Los países miembros de la ONU se han comprometido a cumplir con los ODS para el año 2030, lo cual requiere una colaboración activa entre gobiernos, el sector privado y la sociedad civil. (Unión Europea, 2020)
      .tarjeta.bg-rojo.p-4(x="20%" y="20%" numero="+")
        .h5.mb-2 Convenio sobre la Diversidad Biológica

        p El Convenio sobre la Diversidad Biológica (CDB), firmado en 1992, es otro acuerdo fundamental para la protección del medio ambiente a nivel global. Este convenio tiene como objetivo conservar la biodiversidad, promover su uso sostenible y asegurar una distribución justa y equitativa de los beneficios derivados de los recursos genéticos. Las metas de este convenio incluyen la creación de áreas protegidas, la restauración de ecosistemas y la reducción de la pérdida de hábitats naturales, promoviendo una gestión sostenible de los recursos.
      .tarjeta.bg-rojo.p-4(x="20%" y="20%" numero="+")
        .h5.mb-2 Protocolo de Montreal 
        p Otro acuerdo internacional significativo es el Protocolo de Montreal, firmado en 1987, cuyo propósito es el de eliminar gradualmente las sustancias que agotan la capa de ozono, como los clorofluorocarbonos (CFC). Este protocolo ha sido uno de los acuerdos más exitosos, debido a que ha permitido una colaboración global y un compromiso de la industria, la cual ha contribuido a la recuperación de la capa de ozono.

    .bg-amarillo.p-4.mb-5
      span Para asegurar la implementación de estos acuerdos, se han establecido mecanismos como las NDCs, los fondos internacionales de desarrollo sostenible, la transferencia de tecnología y los sistemas de monitoreo global. Estos mecanismos no solo permiten que los países formulen compromisos, sino que también proporcionan recursos y apoyo técnico para que estos compromisos se materialicen. Por ejemplo, el Fondo Verde para el Clima y el Fondo para el Medio Ambiente Mundial proporcionan financiamiento para proyectos de sostenibilidad en países en desarrollo, mientras que los sistemas de monitoreo globales, establecidos por la ONU y otras organizaciones, permiten medir el avance en el cumplimiento de los ODS y otros objetivos internacionales. (Unión Europea, 2020) 
    




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
