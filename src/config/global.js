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
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos del desarrollo sostenible',
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
        titulo: 'Conceptos fundamentales del desarrollo sostenible',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Definición y principios fundamentales de desarrollo sostenible',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Diferencias entre sostenibilidad y sustentabilidad     ',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Historia y evolución del desarrollo sostenible     ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Orígenes del concepto',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Evolución de la conciencia ambiental y el desarrollo sostenible en el ámbito global',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Objetivos de Desarrollo Sostenible (ODS)',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Relación entre desarrollo económico, equidad social y protección ambiental',
        desarrolloContenidos: true,
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
        'Brundtland, G. H. (1987). Our common future. Oxford University Press.',
      link: '',
    },
    {
      referencia: 'Carson, R. (1962). Silent spring. Houghton Mifflin.',
      link: '',
    },
    {
      referencia:
        'CEPAL, NU. (2019). La Agenda 2030 y los Objetivos de Desarrollo Sostenible: una oportunidad para América Latina y el Caribe. Objetivos, metas e indicadores mundiales.',
      link: '',
    },
    {
      referencia:
        'Club de Roma. (1972). Los límites del crecimiento: Informe al Club de Roma sobre el predicamento de la humanidad. Editorial Fundamentos.',
      link: '',
    },
    {
      referencia:
        'Naciones Unidas. (1992). Agenda 21: Programa de acción para el desarrollo sostenible. Conferencia de las Naciones Unidas sobre el Medio Ambiente y el Desarrollo.',
      link: '',
    },
    {
      referencia:
        'Naciones Unidas. (2015). Transformar nuestro mundo: la Agenda 2030 para el Desarrollo Sostenible. Naciones Unidas.',
      link: 'https://sustainabledevelopment.un.org',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. (2018). Informe global sobre trabajo decente.',
      link: 'https://www.ilo.org',
    },
    {
      referencia:
        'Parra-Lancourt, M. (2020). Economía circular: Una oportunidad para el desarrollo sostenible en América Latina y el Caribe. CEPAL.',
      link: '',
    },
    {
      referencia:
        'United Nations. (2020). The sustainable development goals report 2020. United Nations Department of Economic and Social Affairs.',
      link: 'https://unstats.un.org',
    },
    {
      referencia:
        'World Bank. (2021). Inclusive growth and sustainable development: A cross-country analysis. The World Bank.',
      link: 'https://www.worldbank.org',
    },
  ],
  glosario: [
    {
      termino: 'Biodiversidad',
      significado:
        'Variedad de vida en la Tierra, incluyendo ecosistemas, especies y genes, que es crucial para mantener el equilibrio ecológico y la sostenibilidad de los recursos naturales.',
    },
    {
      termino: 'Cambio Climático',
      significado:
        'Alteración significativa y duradera del clima de la Tierra, en gran parte causada por la actividad humana, como la quema de combustibles fósiles y la deforestación.',
    },
    {
      termino: 'Consumo Responsable',
      significado:
        'Práctica de elegir productos y servicios que tengan el menor impacto ambiental posible, considerando aspectos como la reducción de residuos, el uso de recursos sostenibles y el respeto a los derechos laborales.',
    },
    {
      termino: 'Desarrollo Económico',
      significado:
        'Proceso de mejora en la economía de un país o región que aumenta el nivel de vida de sus habitantes, generando empleo y riqueza de manera inclusiva y sostenible.',
    },
    {
      termino: 'Desigualdad',
      significado:
        'Diferencias significativas en el acceso a recursos, oportunidades y servicios entre diferentes grupos sociales, regiones o países, que afectan el desarrollo equitativo.',
    },
    {
      termino: 'Economía Circular',
      significado:
        'Sistema económico que busca reducir, reutilizar y reciclar materiales y productos, minimizando los desechos y la explotación de recursos naturales.',
    },
    {
      termino: 'Economía Verde',
      significado:
        'Modelo económico que promueve la reducción de riesgos ambientales y escasez ecológica, mejorando el bienestar humano y la equidad social.',
    },
    {
      termino: 'Eficiencia Energética',
      significado:
        'Uso racional y óptimo de la energía para minimizar el consumo sin sacrificar los resultados, reduciendo así el impacto ambiental y los costos.',
    },
    {
      termino: 'Energías Renovables',
      significado:
        'Fuentes de energía que se obtienen de recursos naturales que no se agotan, como el sol, el viento y el agua, y que son menos contaminantes.',
    },
    {
      termino: 'Equidad Social',
      significado:
        'Principio que garantiza igualdad de oportunidades y acceso justo a recursos y servicios para todos los miembros de la sociedad, sin discriminación.',
    },
    {
      termino: 'Protección Ambiental',
      significado:
        'Conjunto de acciones y políticas que buscan conservar los recursos naturales y minimizar el impacto negativo de las actividades humanas en el medio ambiente.',
    },
    {
      termino: 'Recursos Renovables',
      significado:
        'Recursos naturales que se regeneran de manera natural a un ritmo que permite su uso continuado, como la energía solar, eólica y el agua.',
    },
    {
      termino: 'Responsabilidad Social Empresarial (RSE)',
      significado:
        'Estrategia de gestión por la cual las empresas integran voluntariamente prácticas sostenibles y éticas en sus operaciones, considerando el impacto social y ambiental.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Capacidad de satisfacer las necesidades del presente sin comprometer la capacidad de las generaciones futuras para satisfacer sus propias necesidades, equilibrando lo económico, social y ambiental.',
    },
    {
      termino: 'Sustentabilidad',
      significado:
        'Uso eficiente y responsable de los recursos naturales, asegurando que estos puedan regenerarse y mantenerse a lo largo del tiempo sin agotarse.',
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
