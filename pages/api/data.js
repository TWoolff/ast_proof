export const data = {
  "home": {
    "user_name": "Thomas",
    "intro": "<p>Velkommen til dit årlige servicetjek.</p><p>I servicetjekket opdaterer du os om dit liv her og nu og får anbefalinger, som passer til dig. Nogle ting ved vi på forhånd, andre skal du fortælle os. Du behøver kun at udfylde det, du selv ønsker.</p><p>Servicetjekket tager kun få minutter.</p>",
    "btn_text": "Start her",
    "btn_link": "/chapter/1",
    "footnote": "Vi gemmer dine svar undervejs - så du kan roligt holde pause og vende tilbage, når det passer dig. Alle beløb er vejledende. Har du opsparing, som vi ikke kender, kan det påvirke vores anbefalinger til dig. <br/>Se, hvordan servicetjekket passer ind i <a href='#'>GDPR</a>."
  },
  "chapters": [
    {
      "chapterId": 1,
      "title": "Hvordan hjælper vi dig bedst?",
      "intro": "<p>I PKA kan du klare din pension online, og du kan også altid tale med en rådgiver. Vælg, hvad du foretrækker.</p>",
      "image": "/kapitel1.png",
      "btn_text": "Næste",
      "btn_link": "1/page/1",
      "pages": [
        {
          "pageId": 1,
          "text": "<span>Jeg foretrækker at</span>",
          "tooltip": "",
          "is_snack": false,
          "btn_text": "Næste",
          "btn_link": "/chapter/2",
          "input": {
            "input_id": 1,
            "type": "select",
            "placeholder": "vælg",
            "options": [
              {
                "label": "klare det online - og ringe til en rådgiver, hvis jeg er i tvivl.",
                "value": "klare_det_selv_online",
                "btn_link": "/chapter/1/page/2"
              },
              {
                "label": "tale med en rådgiver, der hjælper mig.",
                "value": "sammen_med_en_raadgiver",
                "btn_link": "/chapter/1/page/3"
              }
            ]
          }
        },
        {
          "pageId": 2,
          "text": "<p><strong>Du kan klare det meste online</strong><br />Når du har gennemført dit årlige servicetjek, får du anbefalinger til, hvad der betaler sig for dig at gøre lige nu.</p><p>Det meste kan du klare online med vores selvbetjeninger &ndash; nemt og enkelt, når det passer dig.</p>",
          "tooltip": "",
          "is_snack": true,
          "btn_text": "Næste",
          "btn_link": "/chapter/2"
        },
        {
          "pageId": 3,
          "text": "<p><strong>Vi er klar til at hjælpe dig</strong><br />Når du har gennemført dit årlige servicetjek, får du anbefalinger til, hvad der betaler sig for dig at gøre lige nu. Anbefalingerne vil rådgiverne tale videre med dig om, når du ringer til os.</p>",
          "tooltip": "",
          "is_snack": true,
          "btn_text": "Næste",
          "btn_link": "/chapter/2"
        }
      ]
    },
    {
      "chapterId": 2,
      "title": "Sparer du nok op?",
      "intro": "<p>Din pension er med til at sikre, at du har en god økonomi - fra du stopper med at arbejde og resten af livet.</p><p>Se, hvad du kan forvente at få udbetalt sammenlignet med din løn i dag. Det giver dig et godt overblik over, om du sparer nok op.</p>",
      "image": "/kapitel2.png",
      "btn_text": "Næste",
      "btn_link": "2/page/1",
      "pages": [
        {
          "pageId": 1,
          "text": "<span>Min løn om måneden før skat er</span>",
          "tooltip": "",
          "is_snack": false,
          "btn_text": "Næste",
          "btn_link": "/chapter/2/page/2",
          "input": {
            "input_id": 1,
            "type": "text",
            "name": "loen",
            "placeholder": "beløb",
            "label": "kr."
          }
        },
        {
          "pageId": 2,
          "text": "<p><strong>Du vil få udbetalt omkring 24.744 kr. om måneden før skat, mens du er på pension. Det svarer til 77% af din løn.</strong></p><p>Du er godt på vej til at nå op på de mindst 70-80 %, som vi anbefaler. Det er vigtigt, hvis du skal have nok at leve af, når du går på pension.</p>",
          "tooltip": "<p>Vi har omregnet alle dine pensioner i PKA til et forventet månedligt gennemsnit før skat, fra din folkepensionsalder og resten af dit liv. Hvordan du får din pension udbetalt afhænger af, hvilke pensionsopsparinger du har - det kan være en kombination af engangsudbetalinger, pension, der udbetales over en årrække og pension, der udbetales resten af livet. Folkepensionen er med, men folkepensionens tillæg er ikke med. Beregningen er uden tal fra PensionsInfo. Har du opsparinger andre steder, kan det påvirke resultatet og vores anbefalinger til dig.</p>",
          "is_snack": true,
          "btn_text": "Næste",
          "btn_link": "/chapter/3"
        }
      ]
    },
    {
      "chapterId": 3,
      "title": "Dit arbejdsliv",
      "intro": "<p>Når din jobsituation ændrer sig, har det betydning for din pension og de forsikringer, der følger med. Se, hvordan dit arbejdsliv påvirker din pension.</p>",
      "image": "/kapitel3.png",
      "btn_text": "Næste",
      "btn_link": "3/page/1",
      "pages": [
        {
          "pageId": 1,
          "text": "<span>Jeg arbejder</span>",
          "tooltip": "",
          "is_snack": false,
          "btn_text": "Næste",
          "btn_link": "/chapter/3/page/2",
          "input": {
            "input_id": 1,
            "type": "select",
            "placeholder": "vælg",
            "label": "om ugen.",
            "options": [
              {
                "label": "25 timer eller mindre",
                "value": "25_eller_mindre",
                "btn_link": "/chapter/3/page/3"
              },
              {
                "label": "26-36 timer",
                "value": "26_til_36",
                "btn_link": "/chapter/3/page/3"
              },
              {
                "label": "37 timer eller mere",
                "value": "37_eller_mere",
                "btn_link": "/chapter/3/page/2"
              }
            ]
          }
        },
        {
          "pageId": 2,
          "text": "<p><strong>Et højt timeantal påvirker ikke altid din pension</strong></p><p>Når du arbejder på fuld tid, er det godt for din pension. Hvis du gerne vil arbejde flere timer, skal du være opmærksom på, at du primært opsparer til pension på din grundløn. Har du derfor skiftende vagter, hvor du arbejder aften eller nat og derfor får tillæg, kan det give dig en højere løn, men ikke nødvendigvis ekstra pension.</p>",
          "is_snack": true,
          "btn_text": "Næste",
          "btn_link": "/chapter/4"
        },
        {
          "pageId": 3,
          "text": "<p><strong>Nedsat tid kan betyde lavere pension</strong></p><p>Der kan være mange grunde til at ville arbejde på nedsat tid, fx i perioder med små børn.<br/><br/>Husk, at du ikke indbetaler det samme til pension, som hvis du var på fuld tid. Det har betydning for din opsparing og dine forsikringer.<br/><br/>Det kan du undgå ved at spare mere op.</p>",
          "is_snack": true,
          "btn_text": "Næste",
          "btn_link": "/chapter/4"
        }
      ]
    },
    {
      "chapterId": 4,
      "title": "Se, hvornår du kan gå på pension",
      "intro": "<p>Hvordan skal dit liv være, når du ikke længere arbejder? Det har betydning for, hvor meget du skal spare op nu.</p>",
      "image": "/kapitel4.png",
      "btn_text": "Næste",
      "btn_link": "4/page/1",
      "pages": [
        {
          "pageId": 1,
          "text": "<span>Min løn om måneden før skat er</span>",
          "tooltip": "",
          "is_snack": false,
          "btn_text": "Næste",
          "btn_link": "/chapter/4/page/2"
        },
        {
          "pageId": 2,
          "text": "<p><strong>Du vil få udbetalt omkring 24.744 kr. om måneden før skat, mens du er på pension. Det svarer til 77% af din løn.</strong></p><p>Du er godt på vej til at nå op på de mindst 70-80 %, som vi anbefaler. Det er vigtigt, hvis du skal have nok at leve af, når du går på pension.</p>",
          "tooltip": "<p>Vi har omregnet alle dine pensioner i PKA til et forventet månedligt gennemsnit før skat, fra din folkepensionsalder og resten af dit liv. Hvordan du får din pension udbetalt afhænger af, hvilke pensionsopsparinger du har - det kan være en kombination af engangsudbetalinger, pension, der udbetales over en årrække og pension, der udbetales resten af livet. Folkepensionen er med, men folkepensionens tillæg er ikke med. Beregningen er uden tal fra PensionsInfo. Har du opsparinger andre steder, kan det påvirke resultatet og vores anbefalinger til dig.</p>",
          "is_snack": true,
          "btn_text": "Næste",
          "btn_link": "/chapter/5"
        }
      ]
    },
    {
      "chapterId": 5,
      "title": "Få det bedste ud af din pension",
      "intro": "<p>Indbetaler du lidt ekstra hver måned i pension nu, kan det gøre en stor forskel i din hverdag, når du ikke længere arbejder. Se, hvad forskellige beløb kan blive til i din pensionsopsparing.</p>",
      "image": "/kapitel5.png",
      "btn_text": "Næste",
      "btn_link": "5/page/1",
      "pages": [
        {
          "pageId": 1,
          "text": "<span>Min løn om måneden før skat er</span>",
          "tooltip": "",
          "is_snack": false,
          "btn_text": "Næste",
          "btn_link": "/chapter/5/page/2"
        },
        {
          "pageId": 2,
          "text": "<p><strong>Du vil få udbetalt omkring 24.744 kr. om måneden før skat, mens du er på pension. Det svarer til 77% af din løn.</strong></p><p>Du er godt på vej til at nå op på de mindst 70-80 %, som vi anbefaler. Det er vigtigt, hvis du skal have nok at leve af, når du går på pension.</p>",
          "tooltip": "<p>Vi har omregnet alle dine pensioner i PKA til et forventet månedligt gennemsnit før skat, fra din folkepensionsalder og resten af dit liv. Hvordan du får din pension udbetalt afhænger af, hvilke pensionsopsparinger du har - det kan være en kombination af engangsudbetalinger, pension, der udbetales over en årrække og pension, der udbetales resten af livet. Folkepensionen er med, men folkepensionens tillæg er ikke med. Beregningen er uden tal fra PensionsInfo. Har du opsparinger andre steder, kan det påvirke resultatet og vores anbefalinger til dig.</p>",
          "is_snack": true,
          "btn_text": "Næste",
          "btn_link": "/chapter/6"
        }
      ]
    },
    {
      "chapterId": 6,
      "title": "Saml dine pensioner",
      "intro": "<p>Har du pensionsopsparinger andre steder, fx fra tidligere jobs eller i din bank? Så kan det tit betale sig at samle dem ét sted.</p>",
      "image": "/kapitel6.png",
      "btn_text": "Næste",
      "btn_link": "6/page/1",
      "pages": [
        {
          "pageId": 1,
          "text": "<span>Min løn om måneden før skat er</span>",
          "tooltip": "",
          "is_snack": false,
          "btn_text": "Næste",
          "btn_link": "/chapter/6/page/2"
        },
        {
          "pageId": 2,
          "text": "<p><strong>Du vil få udbetalt omkring 24.744 kr. om måneden før skat, mens du er på pension. Det svarer til 77% af din løn.</strong></p><p>Du er godt på vej til at nå op på de mindst 70-80 %, som vi anbefaler. Det er vigtigt, hvis du skal have nok at leve af, når du går på pension.</p>",
          "tooltip": "<p>Vi har omregnet alle dine pensioner i PKA til et forventet månedligt gennemsnit før skat, fra din folkepensionsalder og resten af dit liv. Hvordan du får din pension udbetalt afhænger af, hvilke pensionsopsparinger du har - det kan være en kombination af engangsudbetalinger, pension, der udbetales over en årrække og pension, der udbetales resten af livet. Folkepensionen er med, men folkepensionens tillæg er ikke med. Beregningen er uden tal fra PensionsInfo. Har du opsparinger andre steder, kan det påvirke resultatet og vores anbefalinger til dig.</p>",
          "is_snack": true,
          "btn_text": "Næste",
          "btn_link": "/chapter/7"
        }
      ]
    },
    {
      "chapterId": 7,
      "title": "Hvem skal have pengene efter dig?",
      "intro": "<p>Når du dør, får dine efterladte penge fra din pensionsordning. Du kan selv vælge, hvem der skal have pengene. Som udgangspunkt går pengene til dine nærmeste pårørende.<br/></p><p></p>Se, om du sikrer de rigtige.",
      "image": "/kapitel7.png",
      "btn_text": "Næste",
      "btn_link": "7/page/1",
      "pages": [
        {
          "pageId": 1,
          "text": "<span>Min løn om måneden før skat er</span>",
          "tooltip": "",
          "is_snack": false,
          "btn_text": "Næste",
          "btn_link": "/chapter/7/page/2"
        },
        {
          "pageId": 2,
          "text": "<p><strong>Du vil få udbetalt omkring 24.744 kr. om måneden før skat, mens du er på pension. Det svarer til 77% af din løn.</strong></p><p>Du er godt på vej til at nå op på de mindst 70-80 %, som vi anbefaler. Det er vigtigt, hvis du skal have nok at leve af, når du går på pension.</p>",
          "tooltip": "<p>Vi har omregnet alle dine pensioner i PKA til et forventet månedligt gennemsnit før skat, fra din folkepensionsalder og resten af dit liv. Hvordan du får din pension udbetalt afhænger af, hvilke pensionsopsparinger du har - det kan være en kombination af engangsudbetalinger, pension, der udbetales over en årrække og pension, der udbetales resten af livet. Folkepensionen er med, men folkepensionens tillæg er ikke med. Beregningen er uden tal fra PensionsInfo. Har du opsparinger andre steder, kan det påvirke resultatet og vores anbefalinger til dig.</p>",
          "is_snack": true,
          "btn_text": "Næste",
          "btn_link": "/chapter/8"
        }
      ]
    },
    {
      "chapterId": 8,
      "title": "Dine forsikringer",
      "intro": "<p>Med i din pensionsordning har du forsikringer, der sikrer dig og din familie økonomisk. Se, hvordan du er dækket.</p>",
      "image": "/kapitel8.png",
      "btn_text": "Næste",
      "btn_link": "8/page/1",
      "pages": [
        {
          "pageId": 1,
          "text": "<p><strong>Forsikringerne dækker dig og din familie</strong></p><p>Dine forsikringer er sat sammen efter din faggruppe og dit arbejdsliv. De følger med i din pensionsordning – du skal ikke gøre noget. Du og din familie er sikret ved sygdom og død.</p><p>Formålet er, at du – hvis livet ændrer sig – kan opretholde en rimelig indtægt og sikre dig og din familie.</p><p>På næste side kan du se, hvad du får udbetalt fra PKA bl.a. som supplement til de offentlige pensioner.</p>",
          "tooltip": "",
          "is_snack": false,
          "btn_text": "Næste",
          "btn_link": "/chapter/8/page/2"
        },
        {
          "pageId": 2,
          "text": "<p>Du kan søge om at få udbetalt:</p>",
          "tooltip": "<p>Alle beløb er vejledende og tager udgangspunkt i din nuværende situation. Hvis fx indbetalingen ændrer sig, ændres beløbenes størrelse også.</p>",
          "is_snack": true,
          "btn_text": "Se anbefalinger",
          "btn_link": "/resultatside"
        }
      ]
    }
  ]
}