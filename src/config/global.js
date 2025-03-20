export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '3',
    tituloUnidad: 'Políticas y estrategias para el desarrollo sostenible',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Políticas nacionales e internacionales de desarrollo sostenible',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Políticas nacionales de desarrollo sostenible',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Políticas internacionales de desarrollo sostenible',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estrategias empresariales para la sostenibilidad     ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Modelos de producción y consumo sostenibles',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Uso de energías renovables y eficiencia energética',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Compromiso ético y responsabilidad social',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Innovación tecnológica y su papel en el desarrollo sustentable ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tecnologías para la sostenibilidad ambiental',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Digitalización y soluciones inteligentes para la sostenibilidad',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Análisis de casos de éxito y fracaso en la implementación de políticas sostenibles',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Casos de éxito en políticas sostenibles',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Casos de fracaso en políticas sostenibles',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Agencia Internacional de Energía (AIE). (2020). World Energy Outlook 2020. AIE.',
      link: 'https://www.iea.org/reports/world-energy-outlook-2020',
    },
    {
      referencia:
        'Comisión Europea. (2020). Un Pacto Verde Europeo. Comisión Europea.',
      link: 'https://ec.europa.eu/commission/presscorner/detail/es/ip_19_6691',
    },
    {
      referencia:
        "Danish Energy Agency. (2019). Energy statistics 2019: Key figures for Denmark's green transition. Danish Energy Agency.",
      link:
        'https://ens.dk/en/our-services/statistics-data-key-figures-and-energy-maps/annual-energy-statistics',
    },
    {
      referencia:
        'Ghisellini, P., Cialani, C., & Ulgiati, S. (2016). A review on circular economy: The expected transition to a balanced interplay of environmental and economic systems. Journal of Cleaner Production, 114, 11-32.',
      link: 'https://doi.org/10.1016/j.jclepro.2015.09.007',
    },
    {
      referencia:
        'Naciones Unidas. (2019). Informe de Objetivos de Desarrollo Sostenible 2019. Naciones Unidas.',
      link: 'https://unstats.un.org/sdgs/report/2019/',
    },
    {
      referencia:
        'ONU Medio Ambiente. (2019). Informe sobre el estado del medio ambiente global. Programa de las Naciones Unidas para el Medio Ambiente.',
      link: 'https://www.unep.org/resources/global-environment-outlook-6',
    },
    {
      referencia:
        'Patagonia. (2022). Reportes de sostenibilidad y prácticas empresariales responsables. Patagonia Inc.',
      link: 'https://www.patagonia.com/sustainability',
    },
    {
      referencia:
        'United Nations Framework Convention on Climate Change (UNFCCC). (2015). Acuerdo de París. UNFCCC.',
      link:
        'https://unfccc.int/es/process-and-meetings/the-paris-agreement/the-paris-agreement',
    },
    {
      referencia:
        'World Business Council for Sustainable Development (WBCSD). (2010). Vision 2050: The new agenda for business. WBCSD.',
      link:
        'https://www.wbcsd.org/Programs/People/Society/Resources/Vision-2050',
    },
    {
      referencia:
        'World Economic Forum. (2021). The Global Risks Report 2021. WEF.',
      link: 'https://www.weforum.org/reports/the-global-risks-report-2021',
    },
  ],
  glosario: [
    {
      termino: 'Acción Climática',
      significado:
        'Medidas implementadas para mitigar o adaptarse a los efectos del cambio climático, buscando reducir las emisiones de gases de efecto invernadero.',
    },
    {
      termino: 'Ahorro Energético',
      significado:
        'Reducción del consumo de energía mediante el uso eficiente de recursos y tecnologías que optimizan la utilización de energía.',
    },
    {
      termino: 'Capital Natural',
      significado:
        'Recursos y servicios proporcionados por los ecosistemas, que incluyen agua, suelo, biodiversidad y aire, fundamentales para la vida humana.',
    },
    {
      termino: 'Comercio Justo',
      significado:
        'Movimiento y práctica que promueve condiciones laborales y comerciales equitativas, asegurando precios justos para los productores en países en desarrollo.',
    },
    {
      termino: 'Conservación',
      significado:
        'Protección y gestión de los recursos naturales para prevenir su agotamiento y asegurar su disponibilidad a largo plazo.',
    },
    {
      termino: 'Contaminación',
      significado:
        'Introducción de sustancias dañinas en el medio ambiente que afectan la calidad del aire, agua o suelo, perjudicando la salud y los ecosistemas.',
    },
    {
      termino: 'Empoderamiento Comunitario',
      significado:
        'Proceso mediante el cual las comunidades adquieren habilidades y recursos para mejorar su bienestar y tomar decisiones informadas.',
    },
    {
      termino: 'Equilibrio Ecológico',
      significado:
        'Estado de armonía entre los organismos vivos y su entorno, que permite la estabilidad y continuidad de los ecosistemas.',
    },
    {
      termino: 'Innovación Sostenible',
      significado:
        'Desarrollo de tecnologías y procesos que promueven la eficiencia y el uso responsable de los recursos naturales.',
    },
    {
      termino: 'Manejo de Residuos',
      significado:
        'Conjunto de actividades destinadas a la recolección, tratamiento y disposición de desechos para reducir su impacto ambiental.',
    },
    {
      termino: 'Neutralidad de Carbono',
      significado:
        'Estado en el cual las emisiones de dióxido de carbono de una entidad son equilibradas mediante la reducción y compensación.',
    },
    {
      termino: 'Reducción de Residuos',
      significado:
        'Estrategias para minimizar la generación de desechos en procesos de producción y consumo, promoviendo prácticas más sostenibles.',
    },
    {
      termino: 'Sistemas Ecosistémicos',
      significado:
        'Conjunto de comunidades biológicas que interactúan con su entorno físico, creando un equilibrio funcional y autorregulado.',
    },
    {
      termino: 'Transición Energética',
      significado:
        'Cambio gradual de un sistema basado en combustibles fósiles a uno sustentado por fuentes de energía renovable y limpia.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
