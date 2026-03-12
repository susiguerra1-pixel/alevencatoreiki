import { SITE_URL, ADDRESS, WHATSAPP_NUMBER, INSTAGRAM_URL } from "@/lib/constants";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
        "@id": `${SITE_URL}/#business`,
        name: "Ale Vencato Reiki",
        description:
          "Sessões de Reiki Usui em Caxias do Sul. Reduza ansiedade, melhore o sono e recupere sua energia com atendimento personalizado.",
        url: SITE_URL,
        telephone: `+55${WHATSAPP_NUMBER}`,
        image: `${SITE_URL}/images/ale-hero.jpg`,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: `${ADDRESS.street}, ${ADDRESS.complement}`,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.state,
          postalCode: ADDRESS.cep,
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -29.1634,
          longitude: -51.1789,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "08:00",
            closes: "19:00",
          },
        ],
        sameAs: [INSTAGRAM_URL],
        hasMap: ADDRESS.mapsUrl,
        serviceArea: {
          "@type": "City",
          name: "Caxias do Sul",
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#ale`,
        name: "Alessandra Vencato",
        jobTitle: "Terapeuta de Reiki Usui",
        url: SITE_URL,
        sameAs: [INSTAGRAM_URL],
        worksFor: { "@id": `${SITE_URL}/#business` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Preciso ter alguma crença religiosa para fazer Reiki?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Não. O Reiki não é religião e não exige nenhuma crença. Funciona independentemente do que você acredita, assim como a gravidade.",
            },
          },
          {
            "@type": "Question",
            name: "O atendimento é só presencial?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim. O atendimento da Ale é exclusivamente presencial em Caxias do Sul, garantindo uma experiência completa com ambiente preparado e presença total durante toda a sessão.",
            },
          },
          {
            "@type": "Question",
            name: "Vou sentir alguma coisa durante a sessão?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A maioria das pessoas sente calor, formigamento, leveza ou um relaxamento profundo. Algumas adormecem. Cada experiência é única e válida.",
            },
          },
          {
            "@type": "Question",
            name: "Quantas sessões preciso fazer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Muitas pessoas sentem diferença já na primeira sessão. Para resultados duradouros, recomendamos um ciclo de sessões mensais, mas a escolha é sempre sua.",
            },
          },
          {
            "@type": "Question",
            name: "O Reiki substitui meu tratamento médico ou psicológico?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Não. O Reiki é uma terapia complementar, reconhecida pelo Ministério da Saúde, que potencializa outros tratamentos. Não substitui tratamento médico convencional.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
