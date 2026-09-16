export const site = {
  url: "https://stephanyodontopediatria.com.br",
  doctor: "Dra. Stephany Carvalho",
  shortName: "Dra. Stephany Carvalho Odontopediatria",
  role: "Odontopediatra",
  specialty: "Especialista em Odontopediatria",
  education:
    "Pós-graduação em Odontopediatria pelo IOA, Instituto Orofacial das Américas (Teresina - PI)",
  cro: "CRO/PI 05672",
  clinic: "Consultório Odontológico Dra. Carla Ohana",
  street: "Rua Olegário Batista, 200-2",
  district: "Aldeia",
  city: "São Raimundo Nonato",
  state: "PI",
  stateName: "Piauí",
  zip: "64770-000",
  region: "Serra da Capivara",
  geo: { lat: -9.020867, lng: -42.696207 },
  // Perfil da Empresa (Google Business Profile) verificado da Dra. Stephany no Google Maps.
  mapsUrl: "https://maps.app.goo.gl/75YuqyLQkBbGScQv7",
  // Identificador do local (CID) usado para embutir o mapa referenciando o Perfil da Empresa
  // verificado (nome, categoria e avaliações), em vez de um pino genérico do endereço.
  mapsFtid: "0x77a052d621aff87:0x9e3bed58a1e13adc",
  instagram: "dra.stephanycarvalhoo",
  instagramUrl: "https://instagram.com/dra.stephanycarvalhoo",
  phoneDisplay: "(89) 98125-4272",
  phoneRaw: "5589981254272",
};

export const fullAddress = `${site.street}, ${site.district}, ${site.city} - ${site.state}, CEP ${site.zip}`;

export const hours = [
  { label: "Segunda-feira", ranges: ["08h às 12h", "14h às 18h"] },
  { label: "Terça-feira", ranges: ["08h às 12h", "14h às 18h"] },
  { label: "Sábado", ranges: ["08h às 12h"] },
];

export const hoursSchema = [
  { days: ["Monday", "Tuesday"], opens: "08:00", closes: "12:00" },
  { days: ["Monday", "Tuesday"], opens: "14:00", closes: "18:00" },
  { days: ["Saturday"], opens: "08:00", closes: "12:00" },
];

export const serviceAreaPI = [
  "São Raimundo Nonato",
  "Coronel José Dias",
  "São Lourenço do Piauí",
  "Dirceu Arcoverde",
  "Várzea Branca",
  "Bonfim do Piauí",
  "Fartura do Piauí",
  "Anísio de Abreu",
  "Caracol",
  "Dom Inocêncio",
  "São Braz do Piauí",
  "Jurema",
  "Canto do Buriti",
  "São João do Piauí",
  "João Costa",
  "Campo Alegre do Fidalgo",
  "Lagoa do Barro do Piauí",
  "Guaribas",
  "Brejo do Piauí",
];

export const serviceAreaBA = ["Campo Alegre de Lourdes", "Remanso", "Sento Sé", "Casa Nova"];

export const waMessage =
  "Olá, Dra. Stephany! Vim pelo site e gostaria de mais informações para agendar uma consulta.";

export function wa(message: string = waMessage) {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;
}
