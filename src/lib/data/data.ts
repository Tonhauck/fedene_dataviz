export const data = {
    part_des_reseaux_de_chaleur: {
        chaleur_totale_consommation_finale_totale: "Chaleur totale : 628 TWh",
        chaleur_totale_consommation_finale_en_R_R: "Chaleur totale : 144 TWh",
        taux_en_R_R_Moyen: "13,9%",
        taux_en_r_r_reseau_de_chaleur: "Taux En R&R moyen : >66%",
        taux_en_r_r_chaleur_totale: "Taux En R&R moyen : 23%",
        taux_en_r_r_energie_totale: "Taux En R&R moyen : 13,9%",
        position_valeur_energie_totale: [
            { foo: 3, r: 1532, color: "#ED6E6E", energie_total_consommation_finale_totale: "Energie totale : 1532 TWh" },
            { foo: 1.5, r: 213, color: "#0B7958", energie_total_consommation_finale_totale: "Energie totale : 213 TWh" },
        ],
        position_valeur_chaleur_totale: [
            { foo: 3, r: 628, color: "#ED8C6E", chaleur_totale_consommation_finale_totale: "Chaleur totale : 628 TWh" },
            { foo: 1.5, r: 144, color: "#30A884", chaleur_totale_consommation_finale_totale: "Chaleur totale : 144 TWh" },
        ],
        position_valeur_reseau_de_chaleur: [
            { foo: 3, r: 27, color: "#F8A5A5", reseau_de_chaleur_consommation_finale_totale: "Réseau de chaleur : 27 TWh" },
            { foo: 1.5, r: 19, color: "#58D0AC", reseau_de_chaleur_consommation_finale_totale: "Réseau de chaleur : 19 TWh" },
        ],
    },
    taux_en_R_R: [
        { chiffre: 37.6, label: 'Total taux d’EnR&R en 2012' },
        { chiffre: 66.5, label: 'Total taux d’EnR&R en 2022' },
        { chiffre: 75, label: 'Total taux d’EnR&R en 2030' },
    ],
    data_mix: [
        { label: 'Gaz naturel', color:'#FABF64', count: '9673.4' },
        { label: 'Chaleur fatale - UVE', color:'#E57C33', count: '9564.1' },
        { label: 'Biomasse', color:'#39AA4A', count: '8114' },
        { label: 'Géothermie', color:'#EC6D6B', count: '1732.7' },
        { label: 'Chaleur fatale - industrielle', color:'#e0a37b', count: '349' },
        { label: 'Autres EnR&R', color:'#77BD80', count: '865.5' },
        { label: 'Charbon', color:'#808080', count: '599.7' },
        { label: 'GOB', color:'#85ad8b', count: '556.2' },
        { label: 'Fiouls', color:'#DFDFDF', count: '211.1' },
        { label: 'Autres énergies fossiles', color:'#404040', count: '209.5' }
    ],
    empreinte_Carbone: [
        { foo: 200, bar: 2012, label: '200 gCO₂/kWh en 2012' },
        { foo: 112, bar: 2022, label: '112 gCO₂/kWh en 2022' },
        { foo: 79, bar: 2030, label: '79 gCO₂/kWh en 2030' },
    ],
    secteur_de_livraison: [
        {
            label: 'Résidentiel',
            bar: '52.9%',
            icon: 'residentiel.svg',
        },
        { label: 'Tertiaire', bar: '35%', icon: 'tertiaire.svg' },
        {
            label: 'Agriculture',
            bar: '5.7%',
            icon: 'agriculture.svg',
        },
        { label: 'Industrie', bar: '6.4%', icon: 'industrie.svg' },
    ],
    repartition_villes: [{ label: "2000 réseaux petites villes", value: 2000 }, { label: "150 réseaux grandes villes", value: 150 }],
    map_annee2022 :[
  {
   "Région": "Auvergne-Rhône-Alpes",
    "Nombre réseaux": 214,
    "Dont % classés": 0.65,
    "Chaleur livrée GWh": 4008,
    "Taux EnR&R": 0.73,
    "Contenu CO₂ ACV g/kWh": 89,
    "Longueur totale": 1168,
    "Nombre bâtiments raccordés": 8020,
    "Chaleur fatale - UVE": 1573.1,
    "Chaleur fatale - industrielle": 43.4,
    "Géothermie": 0,
    "Biomasse": 2057.9,
    "GOB": 21.7,
    "Autres EnR&R": 3.3,
    "Gaz naturel": 1129.9,
    "Fiouls": 33.1,
    "Charbon": 103.7,
    "Autres énergies fossiles": 5.3,
    "1ère EnR&R": 622.88,
    "2e EnR&R": 387.47,
    "3e EnR&R": 7.81,
    "Nombre réseaux froid": 3,
    "Froid livrée MWh": 48754,
    "Contenu CO₂ ACV froid g/kWh": "17,6",
    "Longueur totale froid": "19,23",
    "Nombre bâtiments raccordés froid": 105
  },
  {
    "Région": "Bourgogne-Franche Comté",
    "Nombre réseaux": 80,
    "Dont % classés": 0.85,
    "Chaleur livrée GWh": 1138,
    "Taux EnR&R": 0.70,
    "Contenu CO₂ ACV g/kWh": 94,
    "Longueur totale": 461,
    "Nombre bâtiments raccordés": 3030,
    "Chaleur fatale - UVE": 371.7,
    "Chaleur fatale - industrielle": 8.3,
    "Géothermie": 0,
    "Biomasse": 689.4,
    "GOB": 9.5,
    "Autres EnR&R": 0,
    "Gaz naturel": 408.5,
    "Fiouls": 7.4,
    "Charbon": 0,
    "Autres énergies fossiles": 0/2,
    "1ère EnR&R": 622.88,
    "2e EnR&R": 387.47,
    "3e EnR&R": 7.81,
    "Nombre réseaux froid": 0,
    "Froid livrée MWh": 0,
    "Contenu CO₂ ACV froid g/kWh": 0,
    "Longueur totale froid": 0,
    "Nombre bâtiments raccordés froid": 0
  },
  {
    "Région": "Bretagne",
    "Nombre réseaux": 48,
    "Dont % classés": 0.7,
    "Chaleur livrée GWh": 790,
    "Taux EnR&R": 0.64,
    "Contenu CO₂ ACV g/kWh": 108,
    "Longueur totale": 224,
    "Nombre bâtiments raccordés": 1316,
    "Chaleur fatale - UVE": 323.4,
    "Chaleur fatale - industrielle": 7.3,
    "Géothermie": 0,
    "Biomasse": 307.6,
    "GOB": 0,
    "Autres EnR&R": 6.2,
    "Gaz naturel": 340.8,
    "Fiouls": 0.4,
    "Charbon": 0,
    "Autres énergies fossiles": 0.4,
    "1ère EnR&R": 387.47,
    "2e EnR&R": 622.88,
    "3e EnR&R": 7.81,
    "Nombre réseaux froid": 0,
    "Froid livrée MWh": 0,
    "Contenu CO₂ ACV froid g/kWh": 0,
    "Longueur totale froid": 0,
    "Nombre bâtiments raccordés froid": 0
  },
  {
    "Région": "Centre-Val de Loire",
    "Nombre réseaux": 38,
    "Dont % classés": 0.55,
    "Chaleur livrée GWh": 785,
    "Taux EnR&R": 0.78,
    "Contenu CO₂ ACV g/kWh": 79,
    "Longueur totale": 235,
    "Nombre bâtiments raccordés": 1435,
    "Chaleur fatale - UVE": 126.1,
    "Chaleur fatale - industrielle": 0,
    "Géothermie": 0,
    "Biomasse": 725.1,
    "GOB": 23.1,
    "Autres EnR&R": 0,
    "Gaz naturel": 218.3,
    "Fiouls": 1.2,
    "Charbon": 0,
    "Autres énergies fossiles": 2.3,
    "1ère EnR&R": 622.88,
    "2e EnR&R": 387.47,
    "3e EnR&R": 7.81,
    "Nombre réseaux froid": 0,
    "Froid livrée MWh": 0,
    "Contenu CO₂ ACV froid g/kWh": 0,
    "Longueur totale froid": 0,
    "Nombre bâtiments raccordés froid": 0
  },
  {
    "Région": "Grand Est",
    "Nombre réseaux": 135,
    "Dont % classés": 0.63,
    "Chaleur livrée GWh": 2830,
    "Taux EnR&R": 0.7,
    "Contenu CO₂ ACV g/kWh": 99,
    "Longueur totale": 923,
    "Nombre bâtiments raccordés": 5749,
    "Chaleur fatale - UVE": 732.5,
    "Chaleur fatale - industrielle": 115.9,
    "Géothermie": 172.9,
    "Biomasse": 1441,
    "GOB": 105.6,
    "Autres EnR&R": 16.6,
    "Gaz naturel": 975.2,
    "Fiouls": 13.4,
    "Charbon": 0,
    "Autres énergies fossiles": 4.67,
    "1ère EnR&R": 622.88,
    "2e EnR&R": 387.47,
    "3e EnR&R": 0,
    "Nombre réseaux froid": 1,
    "Froid livrée MWh": 6610,
    "Contenu CO₂ ACV froid g/kWh": "16,9",
    "Longueur totale froid": 2,
    "Nombre bâtiments raccordés froid": 21
  },
  {
    "Région": "Hauts-de-France",
    "Nombre réseaux": 58,
    "Dont % classés": 0.60,
    "Chaleur livrée GWh": 1575,
    "Taux EnR&R": 0.65,
    "Contenu CO₂ ACV g/kWh": 111,
    "Longueur totale": 573,
    "Nombre bâtiments raccordés": 3203,
    "Chaleur fatale - UVE": 488.7,
    "Chaleur fatale - industrielle": 71.3,
    "Géothermie": 0,
    "Biomasse": 645.4,
    "GOB": 35.9,
    "Autres EnR&R": 77.9,
    "Gaz naturel": 687.2,
    "Fiouls": 0.8,
    "Charbon": 0,
    "Autres énergies fossiles": 18.8,
    "1ère EnR&R": 387.47,
    "2e EnR&R": 622.88,
    "3e EnR&R": 7.81,
    "Nombre réseaux froid": 1,
    "Froid livrée MWh": 987,
    "Contenu CO₂ ACV froid g/kWh": "102,8",
    "Longueur totale froid": "0,2",
    "Nombre bâtiments raccordés froid": 3
  },
  {
    "Région": "Île-de-France",
    "Nombre réseaux": 136,
    "Dont % classés": 0.55,
    "Chaleur livrée GWh": 10618,
    "Taux EnR&R": 0.58,
    "Contenu CO₂ ACV g/kWh": 144,
    "Longueur totale": 2285,
    "Nombre bâtiments raccordés": 16461,
    "Chaleur fatale - UVE": 3520.5,
    "Chaleur fatale - industrielle": 10.2,
    "Géothermie": 1572,
    "Biomasse": 1537.7,
    "GOB": 565.7,
    "Autres EnR&R": 80.3,
    "Gaz naturel": 5063.8,
    "Fiouls": 9.3,
    "Charbon": 161.3,
    "Autres énergies fossiles": 146.2,
    "1ère EnR&R": 622.88,
    "2e EnR&R": 387.47,
    "3e EnR&R": 7.81,
    "Nombre réseaux froid": 14,
    "Froid livrée MWh": 752625,
    "Contenu CO₂ ACV froid g/kWh": "19,9",
    "Longueur totale froid": "207,33",
    "Nombre bâtiments raccordés froid": 1272
  },
  {
    "Région": "Normandie",
    "Nombre réseaux": 56,
    "Dont % classés": 0.77,
    "Chaleur livrée GWh": 1473,
    "Taux EnR&R": 0.77,
    "Contenu CO₂ ACV g/kWh": 80,
    "Longueur totale": 404,
    "Nombre bâtiments raccordés": 2432,
    "Chaleur fatale - UVE": 594.8,
    "Chaleur fatale - industrielle": 0,
    "Géothermie": 0,
    "Biomasse": 650.2,
    "GOB": 24.2,
    "Autres EnR&R": 421,
    "Gaz naturel":425.9,
    "Fiouls": 1.8,
    "Charbon": 0,
    "Autres énergies fossiles": 2,
    "1ère EnR&R": 387.47,
    "2e EnR&R": 622.88,
    "3e EnR&R": 7.81,
    "Nombre réseaux froid": 1,
    "Froid livrée MWh": 64,
    "Contenu CO₂ ACV froid g/kWh": 389,
    "Longueur totale froid": "0,98",
    "Nombre bâtiments raccordés froid": 3
  },
  {
    "Région": "Nouvelle-Aquitaine",
    "Nombre réseaux": 91,
    "Dont % classés": 0.57,
    "Chaleur livrée GWh": 1003,
    "Taux EnR&R": 0.80,
    "Contenu CO₂ ACV g/kWh": 73,
    "Longueur totale": 429,
    "Nombre bâtiments raccordés": 2882,
    "Chaleur fatale - UVE": 496.1,
    "Chaleur fatale - industrielle": 2,
    "Géothermie": 15.9,
    "Biomasse": 439.5,
    "GOB": 36.8,
    "Autres EnR&R": 0.8,
    "Gaz naturel": 232.1,
    "Fiouls": 6.8,
    "Charbon": 4.6,
    "Autres énergies fossiles": 21.2,
    "1ère EnR&R": 622.88,
    "2e EnR&R": 387.47,
    "3e EnR&R": 7.81,
    "Nombre réseaux froid": 3,
    "Froid livrée MWh": 19903,
    "Contenu CO₂ ACV froid g/kWh": "27,5",
    "Longueur totale froid": "5,5",
    "Nombre bâtiments raccordés froid": 39
  },
  {
    "Région": "Occitanie",
    "Nombre réseaux": 66,
    "Dont % classés": 0.76,
    "Chaleur livrée GWh": 779,
    "Taux EnR&R": 0.82,
    "Contenu CO₂ ACV g/kWh": 76,
    "Longueur totale": 311,
    "Nombre bâtiments raccordés": 2996,
    "Chaleur fatale - UVE": 423.1,
    "Chaleur fatale - industrielle": 20.2,
    "Géothermie": 1,
    "Biomasse": 331.9,
    "GOB": 15,
    "Autres EnR&R": 3.5,
    "Gaz naturel": 199.7,
    "Fiouls": 7,
    "Charbon": 0,
    "Autres énergies fossiles": 5.7,
    "1ère EnR&R": 622.88,
    "2e EnR&R": 387.47,
    "3e EnR&R": 7.81,
    "Nombre réseaux froid": 14,
    "Froid livrée MWh": 73984,
    "Contenu CO₂ ACV froid g/kWh": "41,8",
    "Longueur totale froid": "21,8",
    "Nombre bâtiments raccordés froid": 136
  },
  {
    "Région": "Pays de la Loire",
    "Nombre réseaux": 36,
    "Dont % classés": 0.56,
    "Chaleur livrée GWh": 979,
    "Taux EnR&R": 0.76,
    "Contenu CO₂ ACV g/kWh": 75,
    "Longueur totale": 354,
    "Nombre bâtiments raccordés": 1742,
    "Chaleur fatale - UVE": 532.2,
    "Chaleur fatale - industrielle": 54.8,
    "Géothermie": 0,
    "Biomasse": 342,
    "GOB": 0,
    "Autres EnR&R": 0,
    "Gaz naturel": 287.7,
    "Fiouls": 0.5,
    "Charbon": 0,
    "Autres énergies fossiles": 0,
    "1ère EnR&R": 622.88,
    "2e EnR&R": 387.47,
    "3e EnR&R": 7.81,
    "Nombre réseaux froid": 0,
    "Froid livrée MWh": 0,
    "Contenu CO₂ ACV froid g/kWh": 0,
    "Longueur totale froid": 0,
    "Nombre bâtiments raccordés froid": 0
  },
  {
    "Région": "Provence-Alpes-Côte d'Azur",
    "Nombre réseaux": 42,
    "Dont % classés": 0.43,
    "Chaleur livrée GWh": 450,
    "Taux EnR&R": 0.64,
    "Contenu CO₂ ACV g/kWh": 117,
    "Longueur totale": 149,
    "Nombre bâtiments raccordés": 799,
    "Chaleur fatale - UVE": 179.2,
    "Chaleur fatale - industrielle": 0,
    "Géothermie": 0,
    "Biomasse": 153.2,
    "GOB": 17.8,
    "Autres EnR&R": 0,
    "Gaz naturel": 188,
    "Fiouls": 2.9,
    "Charbon": 0,
    "Autres énergies fossiles": 9.8,
    "1ère EnR&R": 622.88,
    "2e EnR&R": 387.47,
    "3e EnR&R": 7.81,
    "Nombre réseaux froid": 6,
    "Froid livrée MWh": 17636,
    "Contenu CO₂ ACV froid g/kWh": "23,3",
    "Longueur totale froid": "12,8",
    "Nombre bâtiments raccordés froid": 58
  }
]
     
}

