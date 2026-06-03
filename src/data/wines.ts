import { WineLine } from '@/types/wine'

export const wineLines: WineLine[] = [
  {
    id: 'central',
    name: 'Línea Central',
    subLines: [
      {
        id: 'pasionado',
        name: 'Pasionado',
        wines: [
          {
            id: 'pasionado-malbec',
            name: 'Pasionado Malbec',
            varietals: ['Malbec'],
            description: 'Malbec pasional, concentrado, con fruta madura y especias. Gran personalidad.',
            image: '/pasionado-malbec-102x320.png',
          },
          {
            id: 'pasionado-cf',
            name: 'Pasionado Cabernet Franc',
            varietals: ['Cabernet Franc'],
            description: '96 puntos Tim Atkin. Fruital, vibrante, con gran potencial de guarda.',
            image: '/Pasionado-Cabernet-Franc-1-102x320.png',
            score: 96,
            scoreSource: 'Tim Atkin',
          },
          {
            id: 'pasionado-cuatro-cepas',
            name: 'Pasionado Cuatro Cepas',
            varietals: ['Malbec', 'Cabernet Sauvignon', 'Merlot', 'Cabernet Franc'],
            description: 'Cuatro cepas, una pasión. Blend complejo con la firmeza de los Andes.',
            image: '/pasionado-cuatro-cepas-102x320.png',
          },
        ],
      },
      {
        id: 'altitud',
        name: 'Altitud',
        wines: [
          {
            id: 'altitud-malbec',
            name: 'Altitud Malbec',
            varietals: ['Malbec'],
            description: 'Malbec de alta montaña. Fresco, con notas florales y mineralidad característica.',
            image: '/andeluna-Altitud-malbec-100x320.png',
          },
          {
            id: 'altitud-merlot',
            name: 'Altitud Merlot',
            varietals: ['Merlot'],
            description: 'Merlot elegante de altura. Notas de ciruela, chocolate y sedosidad.',
            image: '/andeluna-altitud-merlot-99x320.png',
          },
          {
            id: 'altitud-cs',
            name: 'Altitud Cabernet Sauvignon',
            varietals: ['Cabernet Sauvignon'],
            description: 'Cabernet Sauvignon potente. Estructura firme, fruta negra, taninos maduros.',
            image: '/andeluna-altitud-cab-sauv-99x320.png',
          },
          {
            id: 'altitud-pinot',
            name: 'Altitud Pinot Noir',
            varietals: ['Pinot Noir'],
            description: 'Pinot Noir de montaña. Delicado, aromático, con notas de frambuesa y flores.',
            image: '/andeluna-altitud-pinot-100x320-1-100x320.png',
          },
          {
            id: 'altitud-chard',
            name: 'Altitud Chardonnay',
            varietals: ['Chardonnay'],
            description: 'Chardonnay fresco y mineral. Cítricos, notas tropicales, final vibrante.',
            image: '/andeluna-altitud-chardonnay-100x320.png',
          },
          {
            id: 'altitud-organic-malbec',
            name: 'Altitud Organic Malbec',
            varietals: ['Malbec'],
            description: 'Malbec orgánico de alta montaña. Fresco, floral, con la pureza de la viticultura sustentable.',
            image: '/andeluna-Altitud-malbec-100x320.png',
          },
          {
            id: 'altitud-organic-cs',
            name: 'Altitud Organic Cabernet Sauvignon',
            varietals: ['Cabernet Sauvignon'],
            description: 'Cabernet Sauvignon orgánico. Estructura, fruta negra, certificación orgánica.',
            image: '/altitud-organic-cs-100x320.png',
          },
        ],
      },
      {
        id: '1300',
        name: '1300',
        wines: [
          {
            id: '1300-malbec',
            name: '1300 Malbec',
            varietals: ['Malbec'],
            description: 'Decanter Oro. Fruta concentrada, taninos sedosos, final persistente.',
            image: '/1300-Malbec-99x320.png',
            award: 'Decanter Oro',
          },
          {
            id: '1300-malbec-magnum',
            name: '1300 Malbec Magnum',
            varietals: ['Malbec'],
            description: 'La expresión del 1300 Malbec en formato magnum. Ideal para compartir.',
            image: '/andeluna-1300-magnum-119x340.png',
          },
          {
            id: '1300-malbec-375',
            name: '1300 Malbec x 375cc',
            varietals: ['Malbec'],
            description: 'Formato personal del 1300 Malbec. Perfecto para una cena íntima.',
            image: '/andeluna-1300-malbec-375-91x280.png',
          },
          {
            id: '1300-cs',
            name: '1300 Cabernet Sauvignon',
            varietals: ['Cabernet Sauvignon'],
            description: 'Cabernet Sauvignon clásico. Estructura, fruta negra, longevidad.',
            image: '/1300-Cabernet-Sauvignon-99x320.png',
          },
          {
            id: '1300-merlot',
            name: '1300 Merlot',
            varietals: ['Merlot'],
            description: 'Merlot redondo y sedoso. Ciruela, chocolate, suavidad con carácter.',
            image: '/andeluna-1300-merlot-1-99x320.png',
          },
          {
            id: '1300-cf',
            name: '1300 Cabernet Franc',
            varietals: ['Cabernet Franc'],
            description: 'Cabernet Franc aromático y elegante. Especias, hojas, taninos finos.',
            image: '/1300-Cabernet-franc-99x320.png',
          },
          {
            id: '1300-sb',
            name: '1300 Sauvignon Blanc',
            varietals: ['Sauvignon Blanc'],
            description: 'Sauvignon Blanc fresco y aromático. Cítricos, herbáceo, gran vivacidad.',
            image: '/andeluna-1300-sauv-blanc-1-99x320.png',
          },
          {
            id: '1300-chard',
            name: '1300 Chardonnay',
            varietals: ['Chardonnay'],
            description: 'Chardonnay de alta expresión. Fruta madura, notas de barrica, cremosidad.',
            image: '/andeluna-1300-chardonnay-100x320.png',
          },
          {
            id: '1300-torrontes',
            name: '1300 Torrontés',
            varietals: ['Torrontés'],
            description: 'Torrontés floral y exótico. Rosas, lychee, mineral. Firma del Valle de Uco.',
            image: '/1300-Torrontes-100x320.png',
          },
          {
            id: '1300-torrontes-dulce',
            name: '1300 Torrontés Dulce Natural',
            varietals: ['Torrontés'],
            description: 'Dulce natural con equilibrio perfecto. Frutas tropicales, miel, final fresco.',
            image: '/1300-Torrontes-dulce-1-100x320.png',
          },
        ],
      },
      {
        id: 'raices',
        name: 'Raíces',
        wines: [
          {
            id: 'raices-malbec',
            name: 'Raíces Malbec',
            varietals: ['Malbec'],
            description: 'Malbec de raíces profundas. Tradicional, honesto, con identidad de terroir.',
            image: '/andeluna-raices-malbec-93x320.png',
          },
          {
            id: 'raices-cs',
            name: 'Raíces Cabernet Sauvignon',
            varietals: ['Cabernet Sauvignon'],
            description: 'Cabernet Sauvignon terroir. Raíces profundas, expresión auténtica del lugar.',
            image: '/andeluna-raices-cab-sauv-1-93x320.png',
          },
          {
            id: 'raices-chard',
            name: 'Raíces Chardonnay',
            varietals: ['Chardonnay'],
            description: 'Chardonnay de raíz. Mineral, tenso, con la frescura de la montaña.',
            image: '/andeluna-raices-chardonnay-1-93x320.png',
          },
        ],
      },
      {
        id: 'emblema',
        name: 'Emblema',
        wines: [
          {
            id: 'emblema',
            name: 'Emblema',
            varietals: ['Malbec', 'Cabernet Sauvignon', 'Merlot'],
            description: 'Blend emblemático de la bodega. Complejo, elegante, con gran estructura y fruta fina.',
            image: '/ANDELUNA-EMBLEMA.png',
          },
        ],
      },
      {
        id: 'francs',
        name: 'Francs',
        wines: [
          {
            id: 'francs',
            name: 'Francs',
            varietals: ['Cabernet Franc'],
            description: 'Expresión pura del Cabernet Franc de Gualtallary. Notas especiadas, mineral, taninos finos.',
            image: '/ANDELUNA-FRANC-de-la-parcela-683x1024.png',
          },
        ],
      },
    ],
  },
  {
    id: 'especial',
    name: 'Edición Especial',
    subLines: [
      {
        id: 'especial-vinos',
        name: 'Vinos',
        wines: [
          {
            id: 'blanc-de-franc',
            name: 'Blanc de Franc',
            varietals: ['Cabernet Franc'],
            description: 'Blanco de Cabernet Franc. Mineral, cítrico, elegante. Edición limitada.',
            image: '/ANDELUNA-BLANC-DE-FRANC-1-398x1024.png',
          },
          {
            id: 'torrontes',
            name: 'Torrontés',
            varietals: ['Torrontés'],
            description: 'Torrontés puro y expresivo. Floral, exótico, con la firma varietal de Argentina.',
            image: '/ANDELUNA-TORRONTES-147x400.png',
          },
          {
            id: 'rose',
            name: 'Rosé',
            varietals: ['Malbec', 'Cabernet Franc'],
            description: 'Rosado de autor. Fresco, aromático, perfecto para todo el año.',
            image: '/ANDELUNA-ROSE-1-398x1024.png',
          },
          {
            id: 'extra-brut',
            name: 'Extra Brut',
            varietals: ['Chardonnay', 'Pinot Noir'],
            description: 'Espumante natural. Burbuja fina, notas tostadas, gran frescura.',
            image: '/Andeluna-extra-brut-147x400.png',
          },
          {
            id: 'ensamble-otonal',
            name: 'Ensamble Otoñal',
            varietals: ['Malbec', 'Cabernet Sauvignon', 'Merlot'],
            description: 'Blend otoñal. Fruta madura, especias, calidez del otoño mendocino.',
            image: '/ANDELUNA-ENSABLE-OTONAL.png',
          },
          {
            id: 'blanc-de-malbec',
            name: 'Blanc de Malbec',
            varietals: ['Malbec'],
            description: 'Blanco de Malbec. Exclusividad: uva tinta vinificada en blanco. Fresco, único.',
            image: '/blanc-de-malbec.png',
          },
          {
            id: 'wine-not',
            name: 'Wine Not?',
            varietals: ['Malbec'],
            description: 'Etiqueta irreverente. Malbec joven, frutado, divertido. Para disfrutar sin formalidades.',
            image: '/wine-not.png',
          },
          {
            id: 'semillon',
            name: 'Semillón',
            varietals: ['Semillón'],
            description: 'Semillón elegante. Notas de cítricos, hierbas, mineralidad. Frescura extrema.',
            image: '/ANDELUNA-SEMILLON-147x400.png',
          },
        ],
      },
    ],
  },
]

// Helper para obtener todos los vinos en flat
export const allWines = wineLines.flatMap((line) =>
  line.subLines.flatMap((sub) => sub.wines)
)

// Datos legacy para compatibilidad con Home page
export const wines = allWines
