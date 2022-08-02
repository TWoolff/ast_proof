export const chapters = [
  {
    "chapterId": 0,
    "title": "",
    "intro": "<p>Hej Thomas</p><p>Velkommen til dit årlige servicetjek.</p><p>I servicetjekket opdaterer du os om dit liv her og nu og får anbefalinger, som passer til dig. Nogle ting ved vi på forhånd, andre skal du fortælle os. Du behøver kun at udfylde det, du selv ønsker.</p><p>Servicetjekket tager kun få minutter.</p>",
    "btn_text": "Start her",
    "btn_link": "/chapter/1",
    "footnote": "Vi gemmer dine svar undervejs - så du kan roligt holde pause og vende tilbage, når det passer dig. Alle beløb er vejledende. Har du opsparing, som vi ikke kender, kan det påvirke vores anbefalinger til dig. Se, hvordan servicetjekket passer ind i GDPR.",
    "result_btn_text": "Se anbefalinger",
    "result_btn_link": "/resultat/"
  },
  {
    "chapterId": 1,
    "title": "Hvordan hjælper vi dig bedst?",
    "intro": "I PKA kan du klare din pension online, og du kan også altid tale med en rådgiver. Vælg, hvad du foretrækker.",
    "image": "/kapitel1.png",
    "btn_text": "Næste",
    "btn_link": "1/page/1",

    "pages": [
      {
        "pageId": 1,
        "text": "Jeg foretrækker at",
        "select": {
          "select_id": 1,
          "placeholder": "vælg",
          "value": "",
          "type": "dropdown",
          "options": [
            {
              "label": "klare det online - og ringe til en rådgiver, hvis jeg er i tvivl.",
              "value": "klare_det_selv_online",
              "link": "1/page/2"
            },
            {
              "label": "tale med en rådgiver, der hjælper mig.",
              "value": "sammen_med_en_raadgiver",
              "link": "1/page/3"
            }
          ]
        },
        "tooltip": "",
        "is_snack": false,
        "btn_text": "Næste",
        "btn_link": "1/page/2"
      },
      {
        "pageId": 2,
        "text": "<p><strong>Du kan klare det meste online</strong><br />Når du har gennemført dit årlige servicetjek, får du anbefalinger til, hvad der betaler sig for dig at gøre lige nu.</p><p>Det meste kan du klare online med vores selvbetjeninger &ndash; nemt og enkelt, når det passer dig.</p>",
        "tooltip": "",
        "is_snack": true,
        "btn_text": "Næste",
        "btn_link": "chapter/2/"
      },
      {
        "pageId": 3,
        "text": "<p><strong>Vi er klar til at hjælpe dig</strong><br />Når du har gennemført dit årlige servicetjek, får du anbefalinger til, hvad der betaler sig for dig at gøre lige nu.</p><p>Anbefalingerne vil rådgiverne tale videre med dig om, når du ringer til os.</p>",
        "tooltip": "",
        "is_snack": true,
        "btn_text": "Næste",
        "btn_link": "chapter/2/"
      }
    ]
  },
  {
    "chapterId": 2,
    "title": "Sparer du nok op??",
    "intro": "Din pension er med til at sikre, at du har en god økonomi - fra du stopper med at arbejde og resten af livet. Se, hvad du kan forvente at få udbetalt sammenlignet med din løn i dag. Det giver dig et godt overblik over, om du sparer nok op.",
    "image": "/kapitel2.png",
    "btn_text": "Næste",
    "btn_link": "2/page/1",

    "pages": []
  }
]