import { Dish } from '../types';

export const dishes: Dish[] = [
  {
    id: 1,
    name: "Pozole Guerrerense",
    shortDescription: "Caldo tradicional de maíz con carne de cerdo, servido con verduras frescas y chile.",
    ingredients: ["Maíz cacahuazintle", "Carne de cerdo", "Chile ancho", "Lechuga", "Rábano", "Cebolla", "Orégano"],
    history: "El pozole tiene raíces prehispánicas y era un platillo ceremonial para los pueblos indígenas. En Guerrero, especialmente en Chilpancingo y Taxco, se prepara con carne de cerdo y se sirve con una variedad de guarniciones frescas.",
    culturalRelevance: "Es un platillo emblemático que se sirve en celebraciones familiares, fiestas patronales y eventos comunitarios. Representa la unión y convivencia de las familias guerrerenses.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/posoles/Pozole-blanco.jpg",
    category: "sopas-caldos"
  },
  {
    id: 2,
    name: "Pescado a la Talla",
    shortDescription: "Pescado abierto a la mitad, untado con una pasta de chiles y asado a las brasas.",
    ingredients: ["Pescado huachinango", "Chile guajillo", "Ajo", "Achiote", "Limón", "Mayonesa"],
    history: "Este platillo nació en las playas de Guerrero, específicamente en Barra Vieja, Acapulco. Surgió como una forma de preparar el pescado fresco capturado por los pescadores locales.",
    culturalRelevance: "Representa la riqueza de la cocina costeña de Guerrero y es uno de los platillos más buscados por los turistas que visitan Acapulco y otras playas del estado.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/mariscos/pescado-talla.jpg",
    category: "mariscos"
  },
  {
    id: 3,
    name: "Camarones a la diabla",
    shortDescription: "Pescado abierto a la mitad, untado con una pasta de chiles y asado a las brasas.",
    ingredients: ["Pescado huachinango", "Chile guajillo", "Ajo", "Achiote", "Limón", "Mayonesa"],
    history: "Este platillo nació en las playas de Guerrero, específicamente en Barra Vieja, Acapulco. Surgió como una forma de preparar el pescado fresco capturado por los pescadores locales.",
    culturalRelevance: "Representa la riqueza de la cocina costeña de Guerrero y es uno de los platillos más buscados por los turistas que visitan Acapulco y otras playas del estado.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/mariscos/camarones-a-diabla.jpg",
    category: "mariscos"
  },
  {
    id: 4,
    name: "Relleno de Chilapa",
    shortDescription: "Guiso elaborado con carne de cerdo, res y pollo, mezclado con frutas y especias.",
    ingredients: ["Carne de cerdo", "Carne de res", "Pollo", "Frutas secas", "Pan", "Especias", "Chile ancho"],
    history: "Originario de la ciudad de Chilapa de Álvarez, este platillo surgió durante la época colonial como una fusión de técnicas culinarias españolas e indígenas.",
    culturalRelevance: "Se prepara principalmente durante festividades religiosas como Semana Santa y Navidad. Es un platillo que requiere tiempo y dedicación, por lo que su preparación suele ser un evento familiar.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/chilapa/gallina-rellena-chilapa.jpeg",
    category: "carnes"
  },
  {
    id: 5,
    name: "Aporreado",
    shortDescription: "Carne de res deshebrada y frita, mezclada con huevo y salsa de chile.",
    ingredients: ["Carne seca de res", "Huevos", "Chile costeño", "Jitomate", "Cebolla", "Ajo"],
    history: "Este platillo tiene sus orígenes en la región de Tierra Caliente. Surgió como una forma de conservar y aprovechar la carne en tiempos donde no había refrigeración.",
    culturalRelevance: "Es un desayuno tradicional en muchas comunidades rurales de Guerrero y representa la creatividad culinaria para aprovechar los recursos disponibles.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/antojitos/aporreado-de-cecina.jpg",
    category: "carnes"
  },
  {
    id: 6,
    name: "Tlacoyo Guerrerense",
    shortDescription: "Masa de maíz rellena de frijoles, habas o requesón, cocida en comal y servida con diversos acompañamientos.",
    ingredients: ["Masa de maíz", "Frijoles", "Habas", "Requesón", "Nopales", "Salsa", "Queso"],
    history: "Los tlacoyos son de origen prehispánico y han evolucionado a lo largo de los siglos. En Guerrero, especialmente en la región de La Montaña, tienen características particulares en su forma y relleno.",
    culturalRelevance: "Son parte fundamental de la alimentación cotidiana en muchas comunidades indígenas de Guerrero y representan la importancia del maíz en la cultura mexicana.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/antojitos/images.jpeg",
    category: "antojitos"
  },
  {
    id: 7,
    name: "Tiritas de Pescado",
    shortDescription: "Tiras finas de pescado crudo marinadas en limón y condimentadas con chile, cebolla y hierbas.",
    ingredients: ["Pescado blanco", "Limón", "Chile serrano", "Cebolla morada", "Cilantro", "Pepino", "Aguacate"],
    history: "Este platillo nació en Zihuatanejo, cuando los pescadores cortaban el pescado recién capturado en tiras finas y lo marinaban con limón para consumirlo durante sus jornadas de pesca.",
    culturalRelevance: "Es considerado el platillo emblemático de Zihuatanejo y ha ganado reconocimiento internacional como una variante única del ceviche.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/mariscos/aguachile-tilapia-camarones.jpg",
    category: "mariscos"
  },
  {
    id: 8,
    name: "Mole de Olla Guerrerense",
    shortDescription: "Guiso de carne de res con verduras y una salsa a base de chiles y especias.",
    ingredients: ["Carne de res", "Elote", "Calabaza", "Ejotes", "Chile guajillo", "Chile ancho", "Xoconostle"],
    history: "El mole de olla tiene variantes en todo México. La versión guerrerense se distingue por el uso de ingredientes locales y técnicas de cocción tradicionales.",
    culturalRelevance: "Es un platillo que se comparte en familia y representa la abundancia y generosidad de la tierra guerrerense.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/moles/maxresdefault.jpg",
    category: "carnes"
  },
  {
    id: 9,
    name: "Mezcal Guerrerense",
    shortDescription: "Bebida destilada del agave, con denominación de origen que incluye a Guerrero.",
    ingredients: ["Agave cupreata (papalote)", "Agave angustifolia (espadín)"],
    history: "La producción de mezcal en Guerrero tiene una larga tradición, especialmente en regiones como Chilpancingo, Mochitlán y Quechultenango, donde se utilizan métodos artesanales transmitidos por generaciones.",
    culturalRelevance: "El mezcal es más que una bebida; es parte de rituales, celebraciones y de la identidad cultural de Guerrero. En 2018, Guerrero obtuvo la denominación de origen para su mezcal, reconociendo su calidad y tradición.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/mezcal/mezcla.jpeg",
    category: "otros"
  },
  {
    id: 10,
    name: "Caldo de Res",
    shortDescription: "Caldo reconfortante con carne de res, verduras y especias aromáticas.",
    ingredients: ["Carne de res", "Zanahoria", "Papa", "Calabaza", "Elote", "Cilantro", "Cebolla"],
    history: "Este caldo tradicional ha sido parte de la dieta guerrerense por generaciones, especialmente en las zonas rurales donde se aprovechan los productos locales.",
    culturalRelevance: "Es considerado un alimento reconfortante y nutritivo, ideal para reuniones familiares y para recuperarse de enfermedades.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/caldos/caldo-de-res-rojo-receta.jpg",
    category: "sopas-caldos"
  },
  {
    id: 11,
    name: "Caldo de Mariscos",
    shortDescription: "Caldo reconfortante con carne de res, verduras y especias aromáticas.",
    ingredients: ["Carne de res", "Zanahoria", "Papa", "Calabaza", "Elote", "Cilantro", "Cebolla"],
    history: "Este caldo tradicional ha sido parte de la dieta guerrerense por generaciones, especialmente en las zonas rurales donde se aprovechan los productos locales.",
    culturalRelevance: "Es considerado un alimento reconfortante y nutritivo, ideal para reuniones familiares y para recuperarse de enfermedades.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/caldos/caldo-de-mariscos-receta-1.jpg",
    category: "sopas-caldos"
  },
  {
    id: 12,
    name: "Caldo de Pollo",
    shortDescription: "Caldo casero con pollo, verduras y hierbas aromáticas.",
    ingredients: ["Pollo", "Zanahoria", "Papa", "Calabaza", "Chayote", "Cilantro", "Arroz"],
    history: "El caldo de pollo es una receta transmitida de generación en generación en las familias guerrerenses, con variaciones según la región y los ingredientes disponibles.",
    culturalRelevance: "Es considerado un remedio casero para diversas dolencias y un platillo reconfortante que no puede faltar en la mesa familiar.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/guisados/caldo-pollo.jpeg",
    category: "sopas-caldos"
  },
  {
    id: 13,
    name: "Pozole de Frijol",
    shortDescription: "Variante del pozole tradicional que incorpora frijoles, maíz y condimentos locales.",
    ingredients: ["Maíz cacahuazintle", "Frijol", "Chile", "Cebolla", "Ajo", "Hierbas aromáticas"],
    history: "Esta variante del pozole surgió en las comunidades indígenas de la Montaña de Guerrero, donde se fusionaron dos ingredientes básicos: el maíz y el frijol.",
    culturalRelevance: "Representa la creatividad culinaria de las comunidades indígenas y su capacidad para crear platillos nutritivos con ingredientes locales.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/posoles/posole-elote.jpg",
    category: "sopas-caldos"
  },
  {
    id: 14,
    name: "El pozole Rojo",
    shortDescription: "Caldo de maíz tierno con carne de cerdo y chile rojo, típico de la región.",
    ingredients: ["Elotes tiernos", "Carne de cerdo", "Chile rojo", "Epazote", "Cebolla", "Ajo"],
    history: "El elopozole es una variante del pozole que utiliza elotes tiernos en lugar de maíz nixtamalizado. Esta versión roja es característica de algunas regiones de Guerrero.",
    culturalRelevance: "Es un platillo que celebra la temporada de elotes y muestra la versatilidad del maíz en la gastronomía guerrerense.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/posoles/Pozole-1.jpg",
    category: "sopas-caldos"
  },
  {
    id: 15,
    name: "Mole Guerrerense",
    shortDescription: "Salsa compleja a base de chiles, chocolate, especias y otros ingredientes, servida con carne.",
    ingredients: ["Chile mulato", "Chile ancho", "Chocolate", "Ajonjolí", "Almendras", "Especias", "Pollo o guajolote"],
    history: "El mole guerrerense tiene influencias de otras regiones de México pero con características propias, como el uso de ciertos chiles regionales y técnicas de preparación específicas.",
    culturalRelevance: "Es el platillo por excelencia para celebraciones importantes como bodas, bautizos y fiestas patronales. Su preparación suele ser un evento comunitario.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/moles/moes.jpg",
    category: "carnes"
  },
  {
    id: 16,
    name: "Birria de Chivo",
    shortDescription: "Guiso de carne de chivo marinada en adobo de chiles y cocida lentamente.",
    ingredients: ["Carne de chivo", "Chile guajillo", "Chile ancho", "Especias", "Cebolla", "Ajo", "Jitomate"],
    history: "Aunque originaria de Jalisco, la birria de chivo en Guerrero ha desarrollado características propias, adaptándose a los ingredientes y gustos locales.",
    culturalRelevance: "Es un platillo festivo que se sirve en celebraciones importantes y que ha ganado popularidad en todo el estado.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/barbacoa/barbacoa-1.jpg",
    category: "carnes"
  },
  {
    id: 17,
    name: "Birria de Res",
    shortDescription: "Variante de la birria tradicional elaborada con carne de res en lugar de chivo.",
    ingredients: ["Carne de res", "Chile guajillo", "Chile ancho", "Especias", "Cebolla", "Ajo", "Jitomate"],
    history: "Esta variante surgió como una alternativa más accesible a la birria de chivo, adaptándose a la disponibilidad de ingredientes en diferentes regiones de Guerrero.",
    culturalRelevance: "Ha ganado popularidad en zonas urbanas y es un platillo común en celebraciones familiares y restaurantes tradicionales.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/barbacoa/Birria-de-Res-108.jpg",
    category: "carnes"
  },
  {
    id: 18,
    name: "Picadas",
    shortDescription: "Tortillas gruesas con bordes pellizcados, cubiertas con salsa, queso y otros ingredientes.",
    ingredients: ["Masa de maíz", "Salsa roja o verde", "Queso", "Cebolla", "Cilantro"],
    history: "Las picadas son un antojito tradicional que ha sido parte de la gastronomía guerrerense por generaciones, con variaciones según la región.",
    culturalRelevance: "Son un alimento cotidiano que se puede encontrar en mercados y puestos callejeros, representando la importancia del maíz en la dieta diaria.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/antojitos/gorditas.jpg",
    category: "antojitos"
  },
  {
    id: 19,
    name: "Gorditas",
    shortDescription: "Tortillas gruesas rellenas de diversos ingredientes como frijoles, queso o carne.",
    ingredients: ["Masa de maíz", "Frijoles", "Queso", "Carne", "Salsa", "Crema"],
    history: "Las gorditas han sido parte de la gastronomía mexicana desde tiempos prehispánicos, con adaptaciones regionales en Guerrero que las hacen únicas.",
    culturalRelevance: "Son un alimento versátil que se consume tanto en el día a día como en festividades, mostrando la creatividad culinaria con ingredientes básicos.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/antojitos/gorfitas-pollo.jpeg",
    category: "antojitos"
  },
  {
    id: 20,
    name: "Tostadas",
    shortDescription: "Tortillas fritas o tostadas cubiertas con diversos ingredientes como frijoles, pollo, res o mariscos.",
    ingredients: ["Tortillas de maíz", "Frijoles", "Lechuga", "Queso", "Crema", "Salsa", "Proteína a elección"],
    history: "Las tostadas surgieron como una forma de aprovechar las tortillas que ya no estaban frescas, convirtiéndose en un platillo por derecho propio.",
    culturalRelevance: "Son un ejemplo de la economía culinaria mexicana, donde nada se desperdicia y todo se transforma en algo delicioso.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/antojitos/Tostadas-4.jpg",
    category: "antojitos"
  },
  {
    id: 21,
    name: "Tortas",
    shortDescription: "Sándwiches mexicanos elaborados con pan telera o bolillo y rellenos de diversos ingredientes.",
    ingredients: ["Pan bolillo o telera", "Frijoles", "Aguacate", "Queso", "Carnes", "Chiles", "Jitomate"],
    history: "Las tortas en Guerrero tienen características propias, con rellenos que reflejan los sabores e ingredientes locales.",
    culturalRelevance: "Son un alimento popular tanto en zonas urbanas como rurales, adaptándose a los gustos y recursos de cada región.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/tortas/torta-de-pierna.webp",
    category: "antojitos"
  },
  {
    id: 22,
    name: "Tacos Dorados",
    shortDescription: "Tacos rellenos de pollo, res o papa, enrollados y fritos hasta quedar crujientes.",
    ingredients: ["Tortillas de maíz", "Pollo deshebrado", "Papa", "Res", "Lechuga", "Queso", "Crema", "Salsa"],
    history: "Los tacos dorados son una preparación tradicional que ha evolucionado con el tiempo, manteniendo su esencia pero adaptándose a los gustos locales.",
    culturalRelevance: "Son populares en celebraciones y como comida callejera, representando la versatilidad del maíz y la creatividad culinaria mexicana.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/antojitos/tacos-dorados.jpeg",
    category: "antojitos"
  },
  {
    id: 23,
    name: "Mojarra Frita",
    shortDescription: "Pescado entero frito hasta quedar dorado y crujiente, servido con guarniciones frescas.",
    ingredients: ["Mojarra", "Ajo", "Limón", "Sal", "Pimienta", "Aceite", "Ensalada fresca"],
    history: "La mojarra frita es uno de los platillos más populares en las zonas costeras de Guerrero. Su preparación simple pero efectiva resalta el sabor natural del pescado fresco.",
    culturalRelevance: "Es un platillo emblemático de la cocina costera guerrerense, que representa la frescura y calidad de los productos del mar de la región.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/mariscos/mojarras.jpeg",
    category: "mariscos"
  },
  {
    id: 24,
    name: "Mojarra a la Diabla",
    shortDescription: "Mojarra preparada con una salsa picante de chiles y especias, asada a la perfección.",
    ingredients: ["Mojarra", "Chile de árbol", "Chile guajillo", "Ajo", "Cebolla", "Especias", "Limón"],
    history: "Esta preparación surgió como una variante picante de la mojarra tradicional, adaptándose al gusto guerrerense por los sabores intensos y picantes.",
    culturalRelevance: "Representa la fusión entre la cocina costera y la tradición guerrerense de preparar platillos picantes y sabrosos.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/mariscos/mojarras-a-la-diabla-foto-principal.jpg",
    category: "mariscos"
  },
  {
    id: 25,
    name: "Enchiladas Rojas",
    shortDescription: "Tortillas bañadas en salsa roja de chile guajillo, rellenas de pollo y guarniciones tradicionales.",
    ingredients: ["Tortillas de maíz", "Chile guajillo", "Pollo", "Queso", "Crema", "Cebolla", "Lechuga"],
    history: "Las enchiladas rojas son parte fundamental de la cocina tradicional mexicana, y en Guerrero han desarrollado un sabor particular gracias a la selección de chiles y técnicas locales.",
    culturalRelevance: "Son un platillo básico en la gastronomía guerrerense, presentes tanto en la mesa familiar como en celebraciones y festividades.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/antojitos/enchiladas-1.jpeg",
    category: "antojitos"
  },
  {
    id: 26,
    name: "Chilaquiles Verdes",
    shortDescription: "Totopos bañados en salsa verde de tomatillo y chile serrano, acompañados con pollo, crema y queso.",
    ingredients: ["Tortillas fritas", "Tomatillo", "Chile serrano", "Pollo", "Crema", "Queso", "Cebolla"],
    history: "Los chilaquiles son un platillo que aprovecha las tortillas del día anterior, transformándolas en un delicioso desayuno. La versión verde es particularmente popular en Guerrero.",
    culturalRelevance: "Es un desayuno tradicional que demuestra la capacidad de la cocina mexicana para transformar ingredientes simples en platillos extraordinarios.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/antojitos/chilaquiles.jpeg",
    category: "antojitos"
  },
  {
    id: 27,
    name: "Costillas en Chile Rojo",
    shortDescription: "Costillas de cerdo cocinadas en una rica salsa de chile rojo, con especias y hierbas aromáticas.",
    ingredients: ["Costillas de cerdo", "Chile guajillo", "Chile ancho", "Ajo", "Cebolla", "Especias", "Hierbas"],
    history: "Este guiso tradicional refleja la influencia de la cocina mestiza en Guerrero, combinando técnicas españolas con ingredientes y sabores locales.",
    culturalRelevance: "Es un platillo que se comparte en familia y representa la tradición de cocinar con chiles secos y carnes en la gastronomía guerrerense.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/guisados/maxresdefault.jpg",
    category: "carnes"
  },
  {
    id: 28,
    name: "Chiles Rellenos",
    shortDescription: "Chiles poblanos rellenos de queso, capeados y bañados en salsa de jitomate.",
    ingredients: ["Chile poblano", "Queso", "Huevo", "Jitomate", "Cebolla", "Ajo", "Especias"],
    history: "Los chiles rellenos son un ejemplo de la sofisticación de la cocina mexicana. En Guerrero, se preparan siguiendo recetas tradicionales transmitidas por generaciones.",
    culturalRelevance: "Este platillo demuestra la importancia del chile en la gastronomía mexicana, no solo como condimento sino como ingrediente principal.",
    image: "https://pub-11848c8031d8435a85ecbcb18f90d75a.r2.dev/antojitos/chiles-rellenos.jpeg",
    category: "antojitos"
  }
];