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
      termino: 'Análisis de contenido',
      significado:
        'Técnica utilizada para interpretar y codificar la información recopilada a través de entrevistas o documentos.',
    },
    {
      termino: 'Análisis estadístico',
      significado:
        'Proceso de aplicar técnicas para interpretar y presentar datos cuantitativos.',
    },
    {
      termino: 'Categorías emergentes',
      significado:
        'Temas o patrones que surgen de los datos cualitativos durante el análisis.',
    },
    {
      termino: 'Correlación',
      significado: 'Medida que describe la relación entre dos o más variables.',
    },
    {
      termino: 'Encuesta',
      significado:
        'Método sistemático para recolectar datos numéricos a través de cuestionarios estructurados.',
    },
    {
      termino: 'Entrevista',
      significado:
        'Técnica de recolección de datos que implica una conversación estructurada o semiestructurada entre el investigador y el participante.',
    },
    {
      termino: 'Escala de Likert',
      significado:
        'Método de medición que evalúa actitudes o percepciones en una escala de 1 a 5 o 1 a 7.',
    },
    {
      termino: 'Grupo focal',
      significado:
        'Método de recolección de datos donde se reúne un grupo reducido de personas para discutir sobre un tema específico, facilitado por un moderador.',
    },
    {
      termino: 'Integración de datos',
      significado:
        'Proceso de combinar hallazgos de diferentes métodos para obtener una comprensión global.',
    },
    {
      termino: 'Investigación mixta',
      significado:
        'Enfoque que combina métodos cualitativos y cuantitativos en un solo estudio.',
    },
    {
      termino: 'Observación participante',
      significado:
        'Estrategia en la que el investigador se involucra en el entorno o actividad que está estudiando para obtener información contextual.',
    },
    {
      termino: 'Teoría fundamentada',
      significado:
        'Enfoque para generar teoría a partir de datos sistemáticamente recogidos y analizados.',
    },
    {
      termino: 'Triangulación',
      significado:
        'Uso de múltiples métodos o fuentes de datos para aumentar la credibilidad y validez de los hallazgos.',
    },
    {
      termino: 'Validación',
      significado:
        'Proceso de confirmar que los hallazgos de la investigación reflejan con precisión las perspectivas de los participantes.',
    },
    {
      termino: 'Validez convergente',
      significado:
        'Grado en que diferentes métodos utilizados para medir un mismo concepto producen resultados consistentes.',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de contenido',
      significado:
        'Técnica utilizada para interpretar y codificar la información recopilada a través de entrevistas o documentos.',
    },
    {
      termino: 'Análisis estadístico',
      significado:
        'Proceso de aplicar técnicas para interpretar y presentar datos cuantitativos.',
    },
    {
      termino: 'Categorías emergentes',
      significado:
        'Temas o patrones que surgen de los datos cualitativos durante el análisis.',
    },
    {
      termino: 'Correlación',
      significado: 'Medida que describe la relación entre dos o más variables.',
    },
    {
      termino: 'Encuesta',
      significado:
        'Método sistemático para recolectar datos numéricos a través de cuestionarios estructurados.',
    },
    {
      termino: 'Entrevista',
      significado:
        'Técnica de recolección de datos que implica una conversación estructurada o semiestructurada entre el investigador y el participante.',
    },
    {
      termino: 'Escala de Likert',
      significado:
        'Método de medición que evalúa actitudes o percepciones en una escala de 1 a 5 o 1 a 7.',
    },
    {
      termino: 'Grupo focal',
      significado:
        'Método de recolección de datos donde se reúne un grupo reducido de personas para discutir sobre un tema específico, facilitado por un moderador.',
    },
    {
      termino: 'Integración de datos',
      significado:
        'Proceso de combinar hallazgos de diferentes métodos para obtener una comprensión global.',
    },
    {
      termino: 'Investigación mixta',
      significado:
        'Enfoque que combina métodos cualitativos y cuantitativos en un solo estudio.',
    },
    {
      termino: 'Observación participante',
      significado:
        'Estrategia en la que el investigador se involucra en el entorno o actividad que está estudiando para obtener información contextual.',
    },
    {
      termino: 'Teoría fundamentada',
      significado:
        'Enfoque para generar teoría a partir de datos sistemáticamente recogidos y analizados.',
    },
    {
      termino: 'Triangulación',
      significado:
        'Uso de múltiples métodos o fuentes de datos para aumentar la credibilidad y validez de los hallazgos.',
    },
    {
      termino: 'Validación',
      significado:
        'Proceso de confirmar que los hallazgos de la investigación reflejan con precisión las perspectivas de los participantes.',
    },
    {
      termino: 'Validez convergente',
      significado:
        'Grado en que diferentes métodos utilizados para medir un mismo concepto producen resultados consistentes.',
    },
    {
      termino: 'Variable',
      significado:
        'Cualquier característica, valor o atributo que puede cambiar o variar en un estudio.',
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
