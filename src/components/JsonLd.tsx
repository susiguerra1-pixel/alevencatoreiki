import { SITE_URL, ADDRESS, WHATSAPP_NUMBER, INSTAGRAM_URL, GOOGLE_REVIEW_URL } from "@/lib/constants";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [

      /* ── 1. WEBSITE ── */
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Ale Vencato Reiki",
        description: "Sessões de Reiki Usui em Caxias do Sul com Ale Vencato.",
        inLanguage: "pt-BR",
        publisher: { "@id": `${SITE_URL}/#business` },
      },

      /* ── 2. WEBPAGE ── */
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "Reiki em Caxias do Sul | Ale Vencato Reiki — Terapia Energética",
        description:
          "Sessões de Reiki Usui em Caxias do Sul com Ale Vencato. Reduza ansiedade, melhore o sono e recupere sua energia. Agende pelo WhatsApp.",
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#business` },
        breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
      },

      /* ── 3. LOCAL BUSINESS ── */
      {
        "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
        "@id": `${SITE_URL}/#business`,
        name: "Ale Vencato Reiki",
        alternateName: "Alessandra Vencato Reiki",
        description:
          "Sessões de Reiki Usui em Caxias do Sul com Ale Vencato. Terapia complementar para reduzir ansiedade, melhorar o sono e recuperar o equilíbrio energético. Atendimento presencial, sem contraindicações.",
        url: SITE_URL,
        telephone: `+55${WHATSAPP_NUMBER}`,
        image: `${SITE_URL}/images/ale-hero.jpg`,
        priceRange: "$$",
        currenciesAccepted: "BRL",
        paymentAccepted: "Dinheiro, PIX, Cartão",
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
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "19:00",
          },
        ],
        sameAs: [INSTAGRAM_URL, GOOGLE_REVIEW_URL],
        hasMap: ADDRESS.mapsUrl,
        areaServed: {
          "@type": "City",
          name: "Caxias do Sul",
          "@id": "https://www.wikidata.org/wiki/Q192699",
        },
        knowsAbout: [
          "Reiki Usui",
          "Terapia Energética",
          "Harmonização Energética",
          "Práticas Integrativas e Complementares em Saúde",
          "Redução de Ansiedade",
          "Equilíbrio Emocional",
          "Insônia",
          "Burnout",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Sessões de Reiki",
          itemListElement: [
            { "@id": `${SITE_URL}/#service-individual` },
            { "@id": `${SITE_URL}/#service-processo` },
            { "@id": `${SITE_URL}/#service-jornada` },
          ],
        },
        founder: { "@id": `${SITE_URL}/#ale` },
        employee: { "@id": `${SITE_URL}/#ale` },
      },

      /* ── 4. PERSON (Ale) ── */
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#ale`,
        name: "Alessandra Vencato",
        givenName: "Alessandra",
        familyName: "Vencato",
        alternateName: "Ale Vencato",
        jobTitle: "Terapeuta de Reiki Usui",
        description:
          "Terapeuta de Reiki Usui certificada em Caxias do Sul. Formada nos três níveis do Reiki Usui, atua com foco em equilíbrio energético, redução de ansiedade e bem-estar emocional.",
        url: SITE_URL,
        image: `${SITE_URL}/images/ale-sobre.jpg`,
        sameAs: [INSTAGRAM_URL],
        worksFor: { "@id": `${SITE_URL}/#business` },
        knowsAbout: ["Reiki Usui", "Terapia Complementar", "Harmonização Energética", "PICS"],
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          name: "Reiki Usui — Níveis I, II e III (Mestre)",
          credentialCategory: "Certificação Profissional",
        },
      },

      /* ── 5. SERVIÇO — Sessão Individual ── */
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-individual`,
        name: "Sessão Individual de Reiki",
        alternateName: "Sessão Avulsa de Reiki",
        description:
          "Uma sessão completa de Reiki Usui para relaxar, desacelerar e permitir que corpo e mente entrem em estado de equilíbrio. Ideal para conhecer o Reiki ou para um momento de cuidado e pausa. Duração: 50 a 60 minutos.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "City", name: "Caxias do Sul" },
        serviceType: "Reiki Usui",
        termsOfService: "Atendimento presencial em Caxias do Sul, RS",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          areaServed: "Caxias do Sul, RS, Brasil",
        },
      },

      /* ── 6. SERVIÇO — Processo de Equilíbrio ── */
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-processo`,
        name: "Processo de Equilíbrio — Reiki Semanal ou Quinzenal",
        description:
          "Sessões de Reiki realizadas em sequência (semanais ou quinzenais) para aprofundar os benefícios da prática. Permite que o corpo e o campo energético integrem melhor os resultados ao longo do tempo.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "City", name: "Caxias do Sul" },
        serviceType: "Reiki Usui — Acompanhamento",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          areaServed: "Caxias do Sul, RS, Brasil",
        },
      },

      /* ── 7. SERVIÇO — Jornada de Reconexão ── */
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-jornada`,
        name: "Jornada de Reconexão — Acompanhamento Profundo de Reiki",
        description:
          "Acompanhamento profundo de Reiki planejado de acordo com o momento de cada pessoa. Cria um espaço seguro para liberar tensões, equilibrar a energia e fortalecer o bem-estar ao longo do tempo.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "City", name: "Caxias do Sul" },
        serviceType: "Reiki Usui — Acompanhamento Profundo",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          areaServed: "Caxias do Sul, RS, Brasil",
        },
      },

      /* ── 8. FAQ PAGE ── */
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Preciso ter alguma crença religiosa para fazer Reiki?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Não. O Reiki não é uma religião e não exige nenhuma crença específica. Pessoas de diferentes crenças — ou mesmo sem religião — podem receber Reiki e se beneficiar da experiência.",
            },
          },
          {
            "@type": "Question",
            name: "O atendimento de Reiki em Caxias do Sul é só presencial?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim. As sessões são realizadas exclusivamente de forma presencial em Caxias do Sul, em um ambiente preparado para proporcionar relaxamento, com presença e atenção dedicadas durante toda a experiência.",
            },
          },
          {
            "@type": "Question",
            name: "Vou sentir alguma coisa durante a sessão de Reiki?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Muitas pessoas sentem calor, formigamento, leveza ou um relaxamento profundo durante a sessão. Algumas até adormecem. Cada pessoa vivencia o Reiki de forma única, e todas as experiências são naturais.",
            },
          },
          {
            "@type": "Question",
            name: "Quantas sessões de Reiki preciso fazer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Muitas pessoas percebem mudanças já na primeira sessão. Para aprofundar os efeitos e promover um equilíbrio mais duradouro, algumas pessoas optam por um ciclo de sessões semanais, quinzenais ou mensais. A frequência ideal depende de cada pessoa e do momento que ela está vivendo.",
            },
          },
          {
            "@type": "Question",
            name: "O Reiki substitui meu tratamento médico ou psicológico?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Não. O Reiki não substitui tratamentos médicos ou psicológicos. É uma terapia complementar que pode ser recebida junto a outros cuidados com a saúde. O Reiki faz parte das Práticas Integrativas e Complementares em Saúde (PICS), reconhecidas pelo Ministério da Saúde.",
            },
          },
          {
            "@type": "Question",
            name: "Tenho medo de não conseguir relaxar durante a sessão.",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Esse é um dos receios mais comuns — e é completamente normal. O ambiente, a condução da sessão e a própria experiência do Reiki ajudam o corpo a desacelerar naturalmente, mesmo em pessoas com a mente mais agitada. Você não precisa fazer nada além de se permitir estar ali.",
            },
          },
          {
            "@type": "Question",
            name: "O Reiki é seguro? Nunca ouvi falar disso antes.",
            acceptedAnswer: {
              "@type": "Answer",
              text: "O Reiki é uma prática segura e não invasiva. A sessão é realizada por meio da imposição de mãos, com toques leves ou apenas próximos ao corpo, sempre respeitando o conforto de cada pessoa. Você permanece deitada, vestida e em um ambiente acolhedor durante toda a sessão.",
            },
          },
          {
            "@type": "Question",
            name: "Qual a diferença entre sessão avulsa e acompanhamento de Reiki?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A sessão avulsa é ideal para quem quer conhecer o Reiki ou receber um momento de cuidado e relaxamento. O acompanhamento acontece com sessões ao longo do tempo, permitindo aprofundar o processo e favorecer um equilíbrio mais consistente e duradouro.",
            },
          },
        ],
      },

      /* ── 9. BREADCRUMB ── */
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Reiki em Caxias do Sul",
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
