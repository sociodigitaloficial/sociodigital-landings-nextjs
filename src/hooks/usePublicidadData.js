import favicon from '@images/favicon.ico'
import logo from '@images/logo.png';
import presentationBackgroundMobile from '@images/presentation-mobile.jpg';
import presentationBackground from '@images/presentation.jpg';
import close from '@images/close.png';
import carouselA from '@images/ads.png';
import carouselB from '@images/money.png';
import carouselC from '@images/ethics.png';
import carouselD from '@images/time.png';
import carouselE from '@images/search.png';
import callToActionBackgroundMobile from '@images/call1-mobile.jpg';
import callToActionBackground from '@images/call1.jpg';
import video from '@videos/publicidad.mp4';
import poster from '@images/poster.png';
import callToAction2BackgroundMobile from '@images/call2-mobile.jpg';
import callToAction2Background from '@images/call2.jpg';
import carouselF from '@images/anuncio.png';
import carouselG from '@images/landing.png';
import carouselH from '@images/mail.png';
import carouselI from '@images/llamada.png';
import callForLossBackgroundMobile from '@images/call3-mobile.jpg';
import callForLossBackground from '@images/call3.jpg';

const usePublicidadData = () => {

  const color = {
    blanco: '#fff',
    dorado: '#dab800',
    doradoOscuro: '#8d7802',
    oscuro: '#232830',
    rojo: '#910000',
    negro: '#000',
    verde: '#52ff7e',
    verdeOscuro: '#00911f'
  }

  const button = {
    backgroundColor: color.dorado,
    backgroundColorHover: color.doradoOscuro,
    border: 'none',
    color: color.blanco,
    cursor: 'pointer',
    fontSize: '24px',
    fontWeight: 'bold',
    height: '65px',
    maxWidth: '250px',
    width: '100%'
  }

  const head = {

    title: 'Publicidad Digital | Socio Digital',
    description: 'Realiza una campaña de publicidad digital, ya sea en Google o Facebook, con el objetivo exclusivo de captar potenciales clientes. Somos expertos diseñando campañas para empresas, amplia experiencia y excelente precio, ¡Consulta!',
    font: `<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"/>`,
    faviconSrc: favicon.src

  }

  const header = {

    design: {
      layout: {
        background: [color.blanco, 'none', 'none'],
        overlay: 'none',
      },
      section: {
        padding: ['24px 0px', '24px 0px'],
      },
      container: {
        width: ['100%', '100%']
      },
      logo: {
        height: ['50px', '50px'],
        width: ['250px', '250px']
      }
    },

    section: {
      id: 'header',
      logoSrc: logo.src, 
    },

  };

  const presentation = {

    design: {
      layout: {
        background: [
          color.oscuro,
          presentationBackgroundMobile.src,
          presentationBackground.src,
        ],
        overlay: 'rgb(0,0,0,0.7)',
      },
      section: {
        padding: ['48px 12px',  '72px 18px'],
      },
      title: {
        color: color.blanco,
        margin: ['0px', '0px 0px 72px 0px'],
        fontSize: ['34px', '42px'],
      },
      container: {
        maxWidth: ['100%', '960px']
      },
      content: {
        background: [color.blanco, 'unset'],
        margin: ['48px', '0px'],
        padding: ['32px 12px', '0px 12px'],
        width: ['280px', '50%']
      },
      form: {
        background: color.blanco,
        maxWidth: '280px',
        padding: '28px 12px'
      }
    },

    section: {
      id: 'presentation',
      title: `Realiza <strong style="color: ${color.dorado}">PUBLICIDAD DIGITAL</strong> para tu <strong style="color: ${color.dorado}">PYME</strong>`,
    },

    content: [
      {
        id: 'element1',
        question: {
          text: 'Posibles resultados:',
          fontSize: ['26px', '34px'],
          fontWeight: 'bold',
          margin: '0px',
          color: [color.negro, color.blanco]
        } ,
        response: {
          text: '40 a 45 contactos/ventas',
          fontSize: ['30px', '34px'],
          fontWeight: 'normal',
          margin: '8px 0px 8px 0px',
          color: [color.verdeOscuro, color.verde]
        },
        message: {
          text: '(Depende de cada nicho de mercado y del tipo de servicio o producto que ofreces)',
          fontSize: ['12px','16px'],
          fontWeight: 'normal',
          margin: '0px',
          color: [color.negro, color.blanco]
        } 
      },
      {
        id: 'element2',
        question: {
          text: 'Valor de la inversión:',
          fontSize: ['26px', '34px'],
          fontWeight: 'bold',
          margin: '36px 0px 0px 0px',
          color: [color.negro, color.blanco]
        } ,
        response: {
          text: '$357.000',
          fontSize: ['30px', '34px'],
          fontWeight: 'normal',
          margin: '8px 0px 8px 0px',
          color: [color.verdeOscuro, color.verde]
        },
        message: {
          text: '(En 7 días elaboramos tu campaña y luego comienzan los 30 días de publicidad)',
          fontSize: ['12px','16px'],
          fontWeight: 'normal',
          margin: '0px 0px 36px 0px',
          color: [color.negro, color.blanco]
        } 
      },
      {
        id: 'element3',
        question: {
          text: 'Duración de la campaña:',
          fontSize: ['26px', '34px'],
          fontWeight: 'bold',
          margin: '0px',
          color: [color.negro, color.blanco]
        } ,
        response: {
          text: '30 días',
          fontSize: ['30px', '34px'],
          fontWeight: 'normal',
          margin: '8px 0px 8px 0px',
          color: [color.verdeOscuro, color.verde]
        },
        message: {
          text: '(Valor mensual total, incluye inversión en anuncios, ganancia de la agencia e IVA)',
          fontSize: ['12px','16px'],
          fontWeight: 'normal',
          margin: '0px',
          color: [color.negro, color.blanco]
        } 
      }
    ],

    form: {
      content: {
        id: 'form',
        title: '<b>¿Te interesa?</b>',
        callToAction: 'Deja tus datos y analiza junto a un experto una eventual campaña para tu PYME, la <b>asesoría es sin costo</b> y por Whatsapp.',
        landing: 'Publicidad digital',
        name: 'Indícanos tu nombre',
        phone: 'Indícanos tu número',
        email: 'Indícanos tu correo',
        message: '¿A qué se dedica tu PYME?',
        button: 'ME INTERESA',
        loandingTitle: "<b>Enviando ...</b>",
        loandingCallToAction: "Conectando al servidor ...",
        errorTitle: "<b>Error</b>",
        errorCallToAction: "Ha ocurrido un error cuando se estaba enviando el formulario, por favor vuelve a intentarlo.",
      },
      design: {
        title: {
          fontSize: ['26px', '30px'],
          margin: ['0px', '0px']
        },
        callToAction: {
          fontSize: ['16px', '14px'],
          margin: ['28px 0px', '28px 0px']
        },
        field: {
          fontSize: ['16px', '14px'],
          height: ['48px', '48px'],
          margin: ['0px 0px 8px 0px', '0px 0px 8px 0px'],
          maxWidth: ['248px', '248px'],
          padding: ['0px 0px 0px 8px', '0px 0px 0px 8px'],
          width: ['100%', '100%'],
        },
        message: {
          fontFamily: `'Roboto', sans-serif`,
          height: ['96px', '96px'],
          padding: '12px 0px 0px 8px'
        },
        button: {
          ...button,
          margin: '20px 0px 0px 0px',
        },
        loanding: {
          color: [color.oscuro, color.oscuro]
        },
        close: {
          imageSrc: close.src
        }
      }
    }

  };

  const carousel = {

    design: {
      background: [color.blanco, 'none', 'none'],
      overlay: 'none',
      sectionPadding: ['48px 12px', '100px 72px'],
      titleColor: color.negro,
      titleMargin: ['0px 0px 25px 0px', '0px 0px 75px 0px',],
      titleSize: ['30px', '34px'],
      arrowBackground: color.dorado,
      arrowColor: color.blanco,
      arrowSize: '30px',
      arrowHover: color.oscuro,
    },

    section: {
      id: 'carousel',
      title: `Específicamente <strong style="color: ${color.dorado}">ESTARÁS PAGANDO</strong> por:`,
      carouselClass: 'carousel1'
    },

    content: [
      {   
        id: "element1",
        image: carouselA.src,
        imageHeight: '150px',
        imageWidth: '150px',
        alt: 'socio-digital-anuncios',
        title: 'Anuncios',
        paragraph:'Publicamos anuncios de tu PYME en Google o a través de Redes Sociales, depende de cual consideremos que es la plataforma en donde más rápido obtendrás resultados. <b>Hacemos cuantos anuncios sean necesarios para vender.</b>',
        width: ['280px', '250px'] 
      },
      {
        id: "element2",
        image: carouselB.src,
        imageHeight: '150px',
        imageWidth: '150px',
        alt: 'socio-digital-rentabilidad',
        title: 'Rentabilidad',
        paragraph:'Nuestro enfoque está en publicar y vender, sin rodeos, queremos que obtengas resultados rápidos para que sigas haciendo publicidad con nosotros. <b>Nos dan igual los likes o comentarios, nuestra meta es que vendas y punto.</b>',
        width: ['280px', '250px'] 
      },
      {
        id: "element3",
        image: carouselC.src,
        imageHeight: '150px',
        imageWidth: '150px',
        alt: 'socio-digital-honestidad',
        title: 'Honestidad',
        paragraph:'Somos directos en nuestra asesoría, si tu producto o servicio no es competitivo, si tu nicho es muy costoso o no sabemos cómo hacer una campaña para ti, lo diremos. <b>Rechazamos muchos clientes simplemente porque no están listos para hacer publicidad.</b>',
        width: ['280px', '250px'] 
      },
      {
        id: "element4",
        image: carouselD.src,
        imageHeight: '150px',
        imageWidth: '150px',
        alt: 'socio-digital-libertad',
        title: 'Libertad',
        paragraph:'Nosotros creamos y gestionamos la campaña, tú solamente te encargarás de hacer los cierres o despachar los productos vendidos, es decir, ya no pierdes el tiempo optimizando campañas. <b>Deja la publicidad en nuestras manos y nosotros nos encargamos.</b>',
        width: ['280px', '250px'] 
      },
      {
        id: "element5",
        image: carouselE.src,
        imageHeight: '150px',
        imageWidth: '150px',
        alt: 'socio-digital-control',
        title: 'Control',
        paragraph:'Entregamos semanal y mensualmente informes cuantitativos y cualitativos de la campaña, sabrás cómo se utiliza el dinero que pagas y por qué la campaña va bien o mal. <b>Nos gustan los números y nos apoyamos en eso para obtener resultados.</b>',
        width: ['280px', '250px'] 
      }
    ]

  };

  const callToAction = {

    design: {
      background: [color.oscuro, callToActionBackgroundMobile.src, callToActionBackground.src],
      overlay: 'rgb(0,0,0,0.7)',
      sectionPadding: ['48px 12px', '100px 72px'],
      maxWidth:'960px',
      textColor: color.blanco,
      textMargin: ['0px 0px 50px 0px', '0px 50px 0px 50px'],
      textSize: ['30px', '34px'],
      button: {
        ...button
      }
    },

    content: {
      id: 'callToAction',
      text: `Si tu enfoque es vender digitalmente, <strong style="color: ${color.blanco}">SOMOS TU MEJOR OPCIÓN</strong>`,
      href: '#form',
      button: 'ME INTERESA'
    }

  };

  const videoDisclaimer = {

    design: {
      background: [color.blanco, 'none', 'none'],
      overlay: 'none',
      sectionPadding: ['48px 12px', '100px 72px'],
      maxWidth: '960px',
      titleColor: color.negro,
      titleMargin: ['0px 0px 50px 0px', '0px 0px 75px 0px'],
      titleSize: ['30px', '34px']
    },

    section: {
      id: 'videoDisclaimer',
      title: `Específicamente <strong style="color: ${color.dorado}">ESTARÁS PAGANDO</strong> por:`,
      videoSrc: video,
      posterSrc: poster.src,
    },

    content: [
      {   
        id: 'element1',
        text: `Siempre debes considerar antes de hacer publicidad digital:`,
        color: color.rojo,
        margin: '26px 0px',
        size: '26px',
        textAlign: 'center',
        weight: '500'
      },
      {   
        id: 'element2',
        text: `La publicidad digital funciona mediante pujas, por eso debes colocar más dinero que la competencia para mostrar tus anuncios, si no posees ese dinero <strong style="color: ${color.negro}">ni siquiera empezarás a competir</strong>.`,
        color: color.negro,
        margin: '16px 0px',
        size: '16px',
        textAlign: 'center',
        weight: 'normal'
      },
      {   
        id: 'element3',
        text: `La publicidad digital solo masificará tu propuesta comercial, pero si esta última es mala (precio, producto, plaza, etc.), <strong style="color: ${color.negro}">ni la mejor campaña del mundo logrará hacerte vender</strong>.`,
        color: color.negro,
        margin: '16px 0px',
        size: '16px',
        textAlign: 'center',
        weight: 'normal'
      },
      {   
        id: 'element4',
        text: `La publicidad digital <strong style="color: ${color.negro}">no funciona igual para todos</strong>, a veces cierra ventas online, a veces consigue interesados, a veces logra posicionarte, depende del rubro y de tu modelo de negocios.`,
        color: color.negro,
        margin: '16px 0px',
        size: '16px',
        textAlign: 'center',
        weight: 'normal'
      },
      {   
        id: 'element5',
        text: `Conversa con nosotros, te orientaremos, hemos hecho muchas campañas de publicidad digital, sabemos lo que tu PYME necesita mejorar o si ya está lista para competir.`,
        color: color.verdeOscuro,
        margin: '20px 0px',
        size: '20px',
        textAlign: 'center',
        weight: '500'
      }
    ]

  };

  const callToAction2 = {

    design: {
      background: [color.oscuro, callToAction2BackgroundMobile.src, callToAction2Background.src],
      overlay: 'rgb(0,0,0,0.7)',
      sectionPadding: ['48px 12px', '100px 72px'],
      maxWidth:'960px',
      textColor: color.blanco,
      textMargin: ['0px 0px 50px 0px', '0px 50px 0px 50px'],
      textSize: ['30px', '34px'],
      button: {
        ...button
      }
    },

    content: {
      id: 'callToAction2',
      text: `Publica tus anuncios y <strong style="color: ${color.blanco}">GENERA VENTAS</strong> o <strong style="color: ${color.blanco}">CAPTA CLIENTES</strong>`,
      href: '#form',
      button: 'ME INTERESA'
    }

  };

  const carousel2 = {

    design: {
      background: [color.blanco, 'none','none'],
      overlay: 'none',
      sectionPadding: ['48px 12px', '100px 72px'],
      titleColor: color.negro,
      titleMargin: ['0px 0px 25px 0px', '0px 0px 75px 0px'],
      titleSize: ['30px', '34px'],
      arrowBackground: color.dorado,
      arrowColor: color.blanco,
      arrowSize: '30px',
      arrowHover: color.oscuro,
    },

    section: {
      id: 'carousel2',
      title: `Así funciona nuestra <strong style="color: ${color.dorado}">PUBLICIDAD DIGITAL</strong>`,
      carouselClass: 'carousel2'
    },

    content: [
      {   
        id: "element1",
        image: carouselF.src,
        imageHeight: '165px',
        imageWidth: '250px',
        alt: 'socio-digital-anuncio-real',
        title: 'Paso 1',
        paragraph:'El nicho de mercado ve tus anuncios, ya sea por Google o Redes Sociales, <b>se interesa por el servicio o producto que ofreces</b> y les da clic a los anuncios.',
        width: ['280px', '300px'] 
      },
      {
        id: "element2",
        image: carouselG.src,
        imageHeight: '165px',
        imageWidth: '250px',
        alt: 'socio-digital-landing-real',
        title: 'Paso 2',
        paragraph:'Luego son dirigidos a un sitio web llamado <b>"página de captura"</b> (que nosotros creamos) o a <b>tu tienda online</b>, depende si ofreces servicios o productos.',
        width: ['280px', '300px']
      },
      {
        id: "element3",
        image: carouselH.src,
        imageHeight: '165px',
        imageWidth: '250px',
        alt: 'socio-digital-notificacion-real',
        title: 'Paso 3',
        paragraph:'Mediante técnicas de persuasión y ventas, convencemos a los interesados a que dejen sus datos para <b>ser contactados</b> o para que <b>compren un producto</b> respectivamente.',
        width: ['280px', '300px']
      },
      {
        id: "element4",
        image: carouselI.src,
        imageHeight: '165px',
        imageWidth: '250px',
        alt: 'socio-digital-llamada-real',
        title: 'Paso 4',
        paragraph:'Recibirás una <b>notificación automática</b> con los datos del interesado para que lo contactes y vendas tu servicio, o una notificación de producto vendido según sea el caso.',
        width: ['280px', '300px']
      }
    ]
  };

  const callForLoss = {

    design: {
      background: [color.oscuro, callForLossBackgroundMobile.src, callForLossBackground.src],
      overlay: 'rgb(0,0,0,0.7)',
      sectionPadding: ['48px 12px 100px', '100px 72px 200px'],
      maxWidth:'600px',
      title: {
        color: color.blanco,
        margin: ['0px 0px 50px 0px', '0px 0px 50px 0px'],
        fontSize: ['30px', '34px']
      },
      paragraph: {
        color: color.blanco,
        margin: ['0px 0px 75px 0px', '0px 0px 75px 0px'],
        fontSize: '16px',
      },
      button: {
        ...button
      }
    },

    content: {
      id: 'callForLoss',
      title: `No sigas <strong style="color: ${color.blanco}">PERDIENDO VENTAS</strong>, es hora de que inviertas en publicidad`,
      paragraph: 'Déjanos tus datos, te contactaremos y conversaremos sobre la manera en que la publicidad digital te ayudará a aumentar las ventas, no dejes pasar más tiempo ni te quedes con las dudas.',
      href: '#form',
      button: 'ME INTERESA'
    }
    
  };

  return {
    head,
    header,
    presentation,
    carousel,
    callToAction,
    videoDisclaimer,
    callToAction2,
    carousel2,
    callForLoss
  };

};

export default usePublicidadData;
