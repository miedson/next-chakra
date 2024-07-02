export type State = {
    acronym: string;
    name: string;
    latitude: number;
    longitude: number;
}
export const states: State[] = [
    { acronym: 'AC', name: 'Acre', latitude: -9.0238, longitude: -70.8113 },
    { acronym: 'AL', name: 'Alagoas', latitude: -9.5713, longitude: -36.7820 },
    { acronym: 'AP', name: 'Amapá', latitude: 0.9020, longitude: -52.0030 },
    { acronym: 'AM', name: 'Amazonas', latitude: -3.4168, longitude: -65.8561 },
    { acronym: 'BA', name: 'Bahia', latitude: -12.9704, longitude: -38.5124 },
    { acronym: 'CE', name: 'Ceará', latitude: -3.7172, longitude: -38.5434 },
    { acronym: 'DF', name: 'Distrito Federal', latitude: -15.8267, longitude: -47.9218 },
    { acronym: 'ES', name: 'Espírito Santo', latitude: -19.1834, longitude: -40.3089 },
    { acronym: 'GO', name: 'Goiás', latitude: -15.8270, longitude: -49.8362 },
    { acronym: 'MA', name: 'Maranhão', latitude: -2.5307, longitude: -44.3068 },
    { acronym: 'MT', name: 'Mato Grosso', latitude: -12.6819, longitude: -56.9211 },
    { acronym: 'MS', name: 'Mato Grosso do Sul', latitude: -20.7722, longitude: -54.7852 },
    { acronym: 'MG', name: 'Minas Gerais', latitude: -19.9286, longitude: -43.9384 },
    { acronym: 'PA', name: 'Pará', latitude: -1.4550, longitude: -48.5024 },
    { acronym: 'PB', name: 'Paraíba', latitude: -7.2394, longitude: -35.8808 },
    { acronym: 'PR', name: 'Paraná', latitude: -25.4284, longitude: -49.2733 },
    { acronym: 'PE', name: 'Pernambuco', latitude: -8.0476, longitude: -34.8770 },
    { acronym: 'PI', name: 'Piauí', latitude: -5.0920, longitude: -42.8038 },
    { acronym: 'RJ', name: 'Rio de Janeiro', latitude: -22.9068, longitude: -43.1729 },
    { acronym: 'RN', name: 'Rio Grande do Norte', latitude: -5.7945, longitude: -35.2110 },
    { acronym: 'RS', name: 'Rio Grande do Sul', latitude: -30.0346, longitude: -51.2177 },
    { acronym: 'RO', name: 'Rondônia', latitude: -8.7612, longitude: -63.9004 },
    { acronym: 'RR', name: 'Roraima', latitude: 2.8235, longitude: -60.6758 },
    { acronym: 'SC', name: 'Santa Catarina', latitude: -27.5954, longitude: -48.5480 },
    { acronym: 'SP', name: 'São Paulo', latitude: -23.5505, longitude: -46.6333 },
    { acronym: 'SE', name: 'Sergipe', latitude: -10.9472, longitude: -37.0731 },
    { acronym: 'TO', name: 'Tocantins', latitude: -10.2550, longitude: -48.3243 }
  ];