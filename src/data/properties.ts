export interface Property {
  id: string;
  title: string;
  location: string;
  neighborhood: string;
  price: number;
  loanAmount: number;
  propertyType: string;
  size: number;
  lotSize: number;
  bedrooms: number;
  bathrooms: number;
  garage: number;
  yearBuilt: number;
  features: string[];
  description: string;
  status: string;
  images: string[];
}

export const properties: Property[] = [
  {
    id: "casa-cartago-centro",
    title: "Casa en Cartago Centro",
    location: "Cartago, Costa Rica",
    neighborhood: "Barrio El Molino",
    price: 45_000_000,
    loanAmount: 25_000_000,
    propertyType: "Casa",
    size: 180,
    lotSize: 250,
    bedrooms: 3,
    bathrooms: 2,
    garage: 2,
    yearBuilt: 2015,
    features: ["Jardín amplio", "Cocina remodelada", "Piso de porcelanato", "Agua caliente"],
    description:
      "Casa familiar en excelente ubicación en el centro de Cartago. Propiedad completamente remodelada con acabados modernos gracias al financiamiento de ANACO. El propietario consolidó sus deudas y además financió la remodelación de cocina y baños.",
    status: "Financiado",
    images: [
      "/images/properties/casa-cartago-centro/exterior.png",
      "/images/properties/casa-cartago-centro/kitchen.png",
      "/images/properties/casa-cartago-centro/bedroom.png",
      "/images/properties/casa-cartago-centro/backyard.png",
    ],
  },
  {
    id: "apartamento-san-jose",
    title: "Apartamento en San José",
    location: "San José, Costa Rica",
    neighborhood: "Barrio Escalante",
    price: 38_000_000,
    loanAmount: 20_000_000,
    propertyType: "Apartamento",
    size: 95,
    lotSize: 0,
    bedrooms: 2,
    bathrooms: 1,
    garage: 1,
    yearBuilt: 2019,
    features: ["Vista panorámica", "Área social", "Gimnasio", "Seguridad 24/7"],
    description:
      "Apartamento moderno en una de las zonas de mayor plusvalía en San José. El propietario utilizó un préstamo de capital de inversión con ANACO para adquirir esta segunda propiedad como inversión de alquiler.",
    status: "Financiado",
    images: [
      "/images/properties/apartamento-san-jose/exterior_2.png",
      "/images/properties/apartamento-san-jose/livingroom.png",
      "/images/properties/apartamento-san-jose/bathroom.png",
      "/images/properties/apartamento-san-jose/balcony.png",
    ],
  },
  {
    id: "casa-heredia",
    title: "Casa en Heredia",
    location: "Heredia, Costa Rica",
    neighborhood: "San Pablo",
    price: 55_000_000,
    loanAmount: 25_000_000,
    propertyType: "Casa",
    size: 220,
    lotSize: 350,
    bedrooms: 4,
    bathrooms: 3,
    garage: 2,
    yearBuilt: 2010,
    features: ["Piscina", "Área de BBQ", "Jardín tropical", "Segunda planta ampliada"],
    description:
      "Amplia casa familiar con piscina y áreas sociales. Los propietarios utilizaron un préstamo de remodelación con ANACO para construir la segunda planta y agregar la piscina, aumentando el valor de la propiedad en un 25%.",
    status: "Financiado",
    images: [],
  },
  {
    id: "casa-alajuela",
    title: "Casa en Alajuela",
    location: "Alajuela, Costa Rica",
    neighborhood: "San Rafael",
    price: 32_000_000,
    loanAmount: 18_000_000,
    propertyType: "Casa",
    size: 140,
    lotSize: 200,
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    yearBuilt: 2018,
    features: ["Cocina americana", "Patio trasero", "Cielos altos", "Cerca de escuelas"],
    description:
      "Casa cómoda en zona residencial tranquila cerca de servicios y escuelas. La familia obtuvo un préstamo personal con ANACO para cubrir gastos médicos y aprovechó las condiciones flexibles para mantener cuotas cómodas.",
    status: "Financiado",
    images: [],
  },
];
