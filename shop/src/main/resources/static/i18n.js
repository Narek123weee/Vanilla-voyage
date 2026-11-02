// ═══════════════════════════════════════════════
//  Vanilla Voyage — Translation system
//  Default language: Armenian (hy)
//  Supported: hy · ru · en
// ═══════════════════════════════════════════════

const TRANSLATIONS = {

  // ── ARMENIAN (default) ──────────────────────
  hy: {
    // Nav
    nav_collection:   "Տեսականի",
    nav_our_story:    "Մեր պատմությունը",
    nav_contact:      "Կապ",
    nav_buy:          "Գնել հիմա",

    // Hero
    hero_eyebrow:     "Շքեղ բույրերի տուն",
    hero_h1:          "Բույր ամեն մի <em>voyage</em>-ի համար",
    hero_p:           "Բույրեր՝ աշխարհի լավագույն հումքից։ Յուրաքանչյուր շիշ՝ ճամփորդություն դեպի անծանոթ զգացողություն։",
    hero_btn_explore: "Տեսականին",
    hero_btn_story:   "Մեր պատմությունը",

    // Scents section
    scents_eyebrow:   "Տեսականին",
    scents_h2:        "Հեղինակային բույրեր",
    scents_p:         "Յուրաքանչյուր բույր սկսվում է մեկ բաղադրիչից՝ վանիլից, և դառնում է անմոռանալի զգացողություն։",
    scents_more_p:    "Բացահայտեք բոլոր 12 բույրերը",
    scents_more_btn:  "Ավելին →",

    // Badges
    badge_new:        "Նորություն",
    badge_best:       "Բեստսելլեր",
    badge_limit:      "Սահմանափակ թողարկում",
    badge_super:      "Գերսահմանափակ",

    // Product names & notes
    p1_name:  "Կեսգիշերվա Ռոմ",
    p1_notes: "Դառը շոկոլադ · Հնեցված ռոմ · Ծխախոտի տերև",
    p1_desc:  "Հարուստ և խորը բույր նրանց համար, ովքեր գնահատում են էլեգանտությունն ու գաղտնիքը։",

    p2_name:  "Արևելյան Հեքիաթ",
    p2_notes: "Վանիլ · Հիլ · Սանդալ",
    p2_desc:  "Ճամփորդություն դեպի արևելյան հեքիաթային շուկաներ և շքեղ պալատներ։",

    p3_name:  "Լուսնի Շող",
    p3_notes: "Սպիտակ վանիլ · Հասմիկ · Անանուխ",
    p3_desc:  "Լուսնյակ գիշերը, երբ օդը լցված է թարմությամբ և ծաղկային նուրբ շնչով։",

    p4_name:  "Ամբեր Անապատ",
    p4_notes: "Ամբեր · Ուդ · Վանիլ",
    p4_desc:  "Խորը, ծխեղ բույր՝ ինչպես անապատի ջերմ ավազն ու հին փայտի հոտը։",

    p5_name:  "Վարդ ու Մուշկ",
    p5_notes: "Վարդ · Մուշկ · Չերպիչ",
    p5_desc:  "Նուրբ, ծաղկային բուրմունք՝ ինչպես առավոտյան վարդն, որ ցողով ծածկված է։",

    p6_name:  "Վուգեն",
    p6_notes: "Ձեթ · Մանկական յուղ · Ժամանակ",
    p6_desc:  "Մաքուր, ջերմ, անկեղծ բույր՝ ինչպես հիշողություն, որ հնարավոր չէ մոռանալ։",

    p7_name:  "Կեսգիշեր",
    p7_notes: "Ամբրոքսան · Անանուխ ",
    p7_desc:  "Մաքուր, պարզ՝ ինչպես լճակը գիշերը լուսնի տակ։",

    p8_name:  "Տրոպիկական Ամառ",
    p8_notes: "Ալկոհոլ · Մրգեր · Կիտրոն",
    p8_desc:  "Արևադարձային մրգերի թարմ ու արևային բույր, որը հիշեցնում է անհոգ ամառային օրեր ու ծովափի ջերմ քամի։",

    p9_name:  "Sunveil",
    p9_notes: "Արքայախնձոր · Հասմիկ · Մուշկ",
    p9_desc:  "Թեթև, քաղցր ու պայծառ բույր՝ լի ամառային ջերմությամբ և արևի նուրբ շնչով։",

    p10_name:  "Luma Tropic",
    p10_notes: "Պապայա · Թուրինջ · Սանդալ",
    p10_desc:  "Կենսուրախ և նուրբ բույր՝ ստեղծված ամառային թեթև տրամադրությունն ու արևոտ պահերը ընդգծելու համար։",

    p11_name:  "Azure Palm",
    p11_notes: "Լայմ · Ծովի աղ · Ծաղիկներ",
    p11_desc:  "Թարմ ու էկզոտիկ նոտաների համադրություն, որը փոխանցում է ծովի ազատությունն ու արևադարձային հանգստությունը։",

    btn_add:  "Ավելացնել",

    // Stats
    stat1_label: "Հեղինակային բույրեր",
    stat2_label: "Առաքման երկրներ",
    stat3_label: "Գոհ հաճախորդներ",
    stat4_label: "Հիմնված Հայաստանում",

    // About
    about_eyebrow: "Մեր պատմությունը",
    about_h2:      "Ստեղծված մեկի կողմից՝ սիրված բոլորի",
    about_p1:      "Vanilla Voyage բրենդի հիմքում ընկած է հիմնադրի անձնական տեսլականը։ Սա մի նախագիծ է, որ ստեղծվել է մեկ մարդու կողմից՝ զրոյից, սեփական ձեռքերով և անմնացորդ սիրով։",
    about_p2:      "Այսօր մեր յուրաքանչյուր սրվակը պահպանում է հենց այդ սկզբնական անկեղծությունն ու անհատական մոտեցումը։",
    about_btn:     "Ավելին",

    // Newsletter
    newsletter_eyebrow: "Ծանոթացեք նորություններին առաջինը",
    newsletter_h2:      "Միացեք ճամփորդությանը",
    newsletter_p:       "Եղեք առաջինը, ով կբացահայտի մեր նոր բույրերը, բացառիկ առաջարկները և յուրաքանչյուր օծանելիքի ստեղծման պատմությունը։",
    newsletter_placeholder: "Ձեր էլ. հասցեն",
    newsletter_btn:     "Բաժանորդագրվել",
    newsletter_alert:   "Շնորհակալություն։ Դուք հաջողությամբ բաժանորդագրվեցիք։",

    // Footer
    footer_tagline:   "Բարձրակարգ օծանելիքի տուն՝ ներշնչված ամենատարածված բաղադրիչով։",
    footer_col1:      "Հավաքածու",
    footer_link1_1:   "Հեղինակային բույրեր",
    footer_link1_2:   "Սահմանափակ թողարկում",
    footer_link1_3:   "Նվերային սեթեր",
    footer_link1_4:   "Օրինակներ",
    footer_col2:      "Ընկերություն",
    footer_link2_1:   "Մեր պատմությունը",
    footer_link2_2:   "Հումք",
    footer_col3:      "Աջակցություն",
    footer_link3_1:   "ՀՏՀ",
    footer_link3_2:   "Առաքում",
    footer_link3_3:   "Վերադարձ",
    footer_link3_4:   "Կապ",
    footer_copy:      "© 2026 Vanilla Voyage. Բոլոր իրավունքները պաշտպանված են։",

    // Login page
    login_left_h2:    "Ձեր բույրը,<br>ձեր <em>պատմությունը</em>",
    login_left_p:     "Ստեղծեք հաշվառում, որպեսզի գնեք ձեր սիրած բույրերը, հետևեք ձեր պատվերներին և դարձեք առաջինը, ով կստանա նորությունները։",
    login_tab1:       "Մուտք",
    login_tab2:       "Ստեղծել հաշիվ",
    login_eyebrow1:   "Բարի գալուստ",
    login_h3_1:       "Մուտք գործել ձեր հաշիվ",
    login_google:     "Մուտք գործել Google-ով",
    login_or:         "կամ շարունակեք էլ. հասցեով",
    login_email:      "Էլ. հասցե",
    login_password:   "Գաղտնաբառ",
    login_forgot:     "Մոռացե՞լ եք գաղտնաբառը",
    login_btn:        "Մուտք",
    login_no_acc:     "Չունե՞ք հաշիվ",
    login_create:     "Ստեղծեք",
    reg_eyebrow:      "Միացեք մեզ",
    reg_h3:           "Ստեղծեք ձեր հաշիվը",
    reg_or:           "կամ ստեղծեք հաշիվ էլ. հասցեով",
    reg_firstname:    "Անուն",
    reg_lastname:     "Ազգանուն",
    reg_btn:          "Ստեղծել հաշիվ",
    reg_terms:        "Ստեղծելով հաշիվ՝ դուք ընդունում եք մեր",
    reg_terms_link1:  "Ծառայությունների պայմանները",
    reg_and:          "և",
    reg_terms_link2:  "Գաղտնիության քաղաքականությունը",
    reg_have_acc:     "Արդեն ունե՞ք հաշիվ",
    reg_login:        "Մուտք գործել",

    // Our Story
    story_eyebrow:    "2026-ից ի վեր",
    story_h1:         "Մեր <em>պատմությունը</em>",
    story_hero_p:     "Vanilla Voyage-ը ծնվել է Հայաստանում՝ մի հիմնադրի երազից, ով ցանկանում էր համատեղել Արևելքի հնությունն ու ժամանակակից շքեղությունը մեկ շշի մեջ։",
    story_s1_eyebrow: "Ծնունդ",
    story_s1_h2:      "Ամեն ինչ սկսվեց <em>վանիլի մի կաթիլից</em>",
    story_s1_p1:      "2026 թ. գարնանն Երևանի մի փոքր արհեստանոցում մեր հիմնադիրը ստեղծեց իր առաջին բույրը՝ մուգ ռոմ, դառը շոկոլադ և ծխախոտի տերև։ Ոչ ոք չէր հավատում, որ այդ փոքրիկ փորձն ի վերջո կդառնա բրենդ։",
    story_s1_p2:      "Բայց բույրն ուներ մի բան հատուկ. Հայաստանի կիրճերի ջերմությունն ու Հին Արևելքի ոգին՝ միաժամանակ։ Հենց այդ օրն էր, որ Vanilla Voyage-ը ծնվեց։",
    story_s2_eyebrow: "Փիլիսոփայություն",
    story_s2_h2:      "Մեկ բաղադրիչ, <em>անհամար պատմություններ</em>",
    story_s2_p1:      "Մեր ամբողջ հավաքածուն կառուցված է վանիլի շուրջ, բայց ոչ այն ձևով, որ դուք կակնկալեք։ Վանիլը մեզ համար ոչ թե բաղադրիչ է, այլ հիմք՝ կենդանի, ճկուն, անսպառ։",
    story_s2_p2:      "Յուրաքանչյուր բույր պատմում է մի ճամփորդության մասին. կեսգիշեր Բաքուի հին փողոցներում, արևածագ Հայկական լեռներում, կամ Ստամբուլի Գրան Բազարի կռեհով։",
    story_quote:      "«Ամեն բույր, որ ես ստեղծում եմ, սկսվում է մի հարցով. ո՞ր ճամփորդությունն է ուղորդում այս հոտը»։",
    story_quote_cite: "— Vanilla Voyage-ի հիմնադիր",
    story_tl_eyebrow: "Ժամանակագրություն",
    story_tl_h2:      "Մեր ճանապարհը",
    story_tl_p:       "Ամեն օրով ավելի մոտ ենք գնում մեր երազանքին",
    story_y1_h3:      "Հիմնադրման տարի",
    story_y1_p:       "Երևանում ստեղծվեց առաջին բույրը՝ «Կեսգիշերվա Ռոմ»։ Հիմնադիրն ինքն ատեղ ձեռքերով ստեղծեց բույրը՝ դառը շոկոլադ, հնեցված ռոմ, ծխախոտի տերև։",
    story_y2_h3:      "Առաջին ցուցահանդեսն ու վաճառքը",
    story_y2_p:       "Մեկ փոքր ներկայացման ժամանակ Yerevan Food & Lifestyle-ում, ամբողջ պաշարը ժամերի ընթացքում վաճառվեց։",
    story_y3_h3:      "Առաջին հավաքածուն",
    story_y3_p:       "Հայկական պարֆյումերիայի շուկայում արդեն 12 բույր ունենք, որոնց մեջ կան ծխեղ, ծաղկային ու անպայծառ բաղադրիչներ։",
    story_y4_h3:      "Ապագայի ուղղությամբ",
    story_y4_p:       "Մեզ հետ են 8000+ հաճախորդ 67 երկրներից։ Մեր արհեստանոցը շարունակում է. մասնագետները ստեղծում են նոր բույրեր։",
    story_val_eyebrow:"Մեր արժեքները",
    story_val_h2:     "Ինչն է մեզ կողմ գնահատելի",
    val1_h3:   "Բամակարգ հումք",
    val1_p:    "Միայն բարձրորակ հումքն է արժանի մեր բույրերի համար։ Վանիլը բերվում է Մադագասկարից, սանդալը՝ Հնդկաստանից։",
    val2_h3:   "Ձեռագործ",
    val2_p:    "Ամեն մի սրվակ պատրաստվում է ձեռքով կերպով։ Արդյունաբերական արտադրությանը մաս չենք կազմում։",
    val3_h3:   "Ամբողջական ինքնատիպություն",
    val3_p:    "Մեզ համար պարֆյումերիան իսկական արվեստ է։ Ամեն բույր արտահայտում է մի տեսություն, մի հույզ։",
    story_cta_eyebrow:"Միացեք մեզ",
    story_cta_h2:     "Բացահայտեք բույրերը",
    story_cta_p:      "Ծանոթացեք մեր հավաքածուին և գտեք մեր բույրերի մեջ ձեր ճամփորդությունը։",
    story_cta_btn1:   "Տեսականին",
    story_cta_btn2:   "Բաժանորդագրվել",

    // Collection page
    coll_eyebrow: "Տեսականին",
    coll_h2:      "Հեղինակային բույրեր",
    coll_p:       "Բացահայտեք յուրահատուկ բույրերը մեր հետ",

    // Cart drawer
    cart_title:        "Զամբյուղ",
    cart_empty:        "Ձեր զամբյուղը դատարկ է",
    cart_empty_sub:    "Ավելացրեք ձեր սիրած բույրերը զամբյուղում",
    cart_continue:     "Շարունակել գնումները",
    cart_total_label:  "Ընդհանուր.",
    cart_checkout_btn: "Անցնել վճարմանը",
    cart_remove:       "Հեռացնել",
    cart_added_toast:  "Ավելացված է զամբյուղում",

    // Checkout modal
    checkout_title:        "Անվտանգ վճարում",
    checkout_subtitle:     "Մուտքագրեք ձեր քարտի տվյալները՝ պատվերը հաստատելու համար",
    checkout_name_label:   "Քարտապանի անունը",
    checkout_name_ph:      "Ա. Անունազգանուն",
    checkout_card_label:   "Քարտի համար",
    checkout_expiry_label: "Վավերության ժամկետ",
    checkout_cvv_label:    "CVV",
    checkout_total_label:  "Վճարման գումարը",
    checkout_pay_btn:      "Վճարել",
    checkout_processing:   "Մշակվում է…",
    checkout_back:         "← Վերադառնալ զամբյուղին",
    checkout_close:        "Փակել",
    checkout_success_title:"Շնորհակալություն ձեր պատվերի համար",
    checkout_success_msg:  "Ձեր վճարումը հաջողությամբ ընդունվել է։ Ձեր բույրերը շուտով ճանապարհորդության կմեկնեն դեպի Ձեզ։",
    checkout_error_card:   "Ստուգեք քարտի համարը (16 թիվ)",
    checkout_error_expiry: "Ստուգեք ժամկետը (ՈՒ/ՏԵ)",
    checkout_error_cvv:    "Ստուգեք CVV կոդը (3 թիվ)",
    checkout_error_name:   "Մուտքագրեք քարտապանի անունը",

    // Checkout step labels
    checkout_step_personal:    "Առաքում",
    checkout_step_payment:     "Վճարում",
    checkout_personal_title:   "Առաքման տեղեկություններ",
    checkout_fullname_label:   "Անուն Ազգանուն",
    checkout_phone_label:      "Հեռախոսի համար",
    checkout_address_label:    "Փողոցի հասցե",
    checkout_city_label:       "Քաղաք",
    checkout_postal_label:     "Փոստային ինդեքս",
    checkout_next_btn:         "Անցնել վճարմանը →",
    checkout_back_to_info:     "← Վերադառնալ տեղեկություններին",
    checkout_track_order:      "Հետևել պատվերին",
    checkout_error_fullname:   "Մուտքագրեք ձեր անունը",
    checkout_error_phone:      "Մուտքագրեք վավեր հեռախոսահամար",
    checkout_error_address:    "Մուտքագրեք ձեր հասցեն",
    checkout_error_city:       "Մուտքագրեք ձեր քաղաքը",
    checkout_error_postal:     "Մուտքագրեք փոստային ինդեքս",
  },

  // ── RUSSIAN ─────────────────────────────────
  ru: {
    nav_collection:   "Коллекция",
    nav_our_story:    "Наша история",
    nav_contact:      "Контакт",
    nav_buy:          "Купить сейчас",

    hero_eyebrow:     "Дом роскошных ароматов",
    hero_h1:          "Аромат для каждого <em>voyage</em>",
    hero_p:           "Ароматы из лучшего сырья мира. Каждый флакон — путешествие в неизведанное.",
    hero_btn_explore: "Коллекция",
    hero_btn_story:   "Наша история",

    scents_eyebrow:   "Коллекция",
    scents_h2:        "Авторские ароматы",
    scents_p:         "Каждый аромат начинается с одного ингредиента — ванили — и превращается в незабываемое ощущение.",
    scents_more_p:    "Откройте все 12 ароматов",
    scents_more_btn:  "Подробнее →",

    badge_new:        "Новинка",
    badge_best:       "Бестселлер",
    badge_limit:      "Лимитированный выпуск",
    badge_super:      "Суперлимитированный",

    p1_name:  "Полночный Ром",
    p1_notes: "Тёмный шоколад · Выдержанный ром · Табачный лист",
    p1_desc:  "Насыщенный и глубокий аромат для тех, кто ценит элегантность и таинственность.",

    p2_name:  "Восточная Сказка",
    p2_notes: "Ваниль · Кардамон · Сандал",
    p2_desc:  "Путешествие в сказочные восточные базары и роскошные дворцы.",

    p3_name:  "Лунный Луч",
    p3_notes: "Белая ваниль · Жасмин · Мята",
    p3_desc:  "Лунная ночь, когда воздух наполнен свежестью и нежным цветочным дыханием.",

    p4_name:  "Янтарная Пустыня",
    p4_notes: "Янтарь · Уд · Ваниль",
    p4_desc:  "Глубокий, дымный аромат — как тёплый песок пустыни и запах старого дерева.",

    p5_name:  "Роза и Мускус",
    p5_notes: "Роза · Мускус · Кедр",
    p5_desc:  "Нежный цветочный аромат — как утренняя роза, покрытая росой.",

    p6_name:  "Вуген",
    p6_notes: "Масло · Детское масло · Время",
    p6_desc:  "Чистый, тёплый, искренний аромат — как воспоминание, которое невозможно забыть.",

    // Russian

    p7_name:  "Полночь",
    p7_notes: "Амброксан · Мята",
    p7_desc:  "Чистый и спокойный, словно озеро ночью под светом луны.",

    p8_name:  "Тропическое Лето",
    p8_notes: "Алкоголь · Фрукты · Лимон",
    p8_desc:  "Свежий и солнечный аромат тропических фруктов, напоминающий беззаботные летние дни и тёплый морской бриз.",

    p9_name:  "Sunveil",
    p9_notes: "Ананас · Жасмин · Мускус",
    p9_desc:  "Лёгкий, сладкий и сияющий аромат, наполненный летним теплом и мягким дыханием солнца.",

    p10_name:  "Luma Tropic",
    p10_notes: "Папайя · Грейпфрут · Сандал",
    p10_desc:  "Живой и нежный аромат, созданный, чтобы подчеркнуть лёгкое летнее настроение и солнечные моменты.",

    p11_name:  "Azure Palm",
    p11_notes: "Лайм · Морская соль · Цветы",
    p11_desc:  "Сочетание свежих и экзотических нот, передающее свободу моря и тропическое спокойствие.",
    btn_add:  "Добавить",

    stat1_label: "Авторских ароматов",
    stat2_label: "Стран доставки",
    stat3_label: "Довольных клиентов",
    stat4_label: "Основано в Армении",

    about_eyebrow: "Наша история",
    about_h2:      "Создано одним — любимо всеми",
    about_p1:      "В основе бренда Vanilla Voyage лежит личное видение основателя. Это проект, созданный одним человеком с нуля, собственными руками и безграничной любовью.",
    about_p2:      "Сегодня каждый наш флакон сохраняет ту самую первоначальную искренность и индивидуальный подход.",
    about_btn:     "Подробнее",

    newsletter_eyebrow: "Узнавайте новости первыми",
    newsletter_h2:      "Присоединяйтесь к путешествию",
    newsletter_p:       "Будьте первыми, кто откроет наши новые ароматы, эксклюзивные предложения и историю создания каждого парфюма.",
    newsletter_placeholder: "Ваш e-mail",
    newsletter_btn:     "Подписаться",
    newsletter_alert:   "Спасибо! Вы успешно подписались.",

    footer_tagline:  "Дом изысканных ароматов, вдохновлённый самым универсальным ингредиентом.",
    footer_col1:     "Коллекция",
    footer_link1_1:  "Авторские ароматы",
    footer_link1_2:  "Лимитированный выпуск",
    footer_link1_3:  "Подарочные наборы",
    footer_link1_4:  "Пробники",
    footer_col2:     "Компания",
    footer_link2_1:  "Наша история",
    footer_link2_2:  "Сырьё",
    footer_col3:     "Поддержка",
    footer_link3_1:  "FAQ",
    footer_link3_2:  "Доставка",
    footer_link3_3:  "Возврат",
    footer_link3_4:  "Контакт",
    footer_copy:     "© 2026 Vanilla Voyage. Все права защищены.",

    login_left_h2:   "Ваш аромат,<br>ваша <em>история</em>",
    login_left_p:    "Создайте аккаунт, чтобы покупать любимые ароматы, отслеживать заказы и первыми получать новости.",
    login_tab1:      "Войти",
    login_tab2:      "Регистрация",
    login_eyebrow1:  "Добро пожаловать",
    login_h3_1:      "Войдите в свой аккаунт",
    login_google:    "Войти через Google",
    login_or:        "или продолжить по e-mail",
    login_email:     "E-mail",
    login_password:  "Пароль",
    login_forgot:    "Забыли пароль?",
    login_btn:       "Войти",
    login_no_acc:    "Нет аккаунта?",
    login_create:    "Создать",
    reg_eyebrow:     "Присоединяйтесь",
    reg_h3:          "Создайте свой аккаунт",
    reg_or:          "или создайте аккаунт по e-mail",
    reg_firstname:   "Имя",
    reg_lastname:    "Фамилия",
    reg_btn:         "Создать аккаунт",
    reg_terms:       "Создавая аккаунт, вы принимаете наши",
    reg_terms_link1: "Условия использования",
    reg_and:         "и",
    reg_terms_link2: "Политику конфиденциальности",
    reg_have_acc:    "Уже есть аккаунт?",
    reg_login:       "Войти",

    story_eyebrow:    "С 2026 года",
    story_h1:         "Наша <em>история</em>",
    story_hero_p:     "Vanilla Voyage родился в Армении из мечты основателя — соединить восточную древность и современную роскошь в одном флаконе.",
    story_s1_eyebrow: "Рождение",
    story_s1_h2:      "Всё началось с <em>капли ванили</em>",
    story_s1_p1:      "Весной 2026 года в небольшой мастерской Еревана наш основатель создал первый аромат — тёмный ром, горький шоколад и табачный лист. Никто не верил, что этот маленький эксперимент станет брендом.",
    story_s1_p2:      "Но в этом аромате было что-то особенное: тепло армянских ущелий и дух Древнего Востока одновременно. Именно в тот день родился Vanilla Voyage.",
    story_s2_eyebrow: "Философия",
    story_s2_h2:      "Один ингредиент, <em>бесконечные истории</em>",
    story_s2_p1:      "Вся наша коллекция построена вокруг ванили, но не так, как вы ожидаете. Ваниль для нас — не ингредиент, а основа: живая, гибкая, неисчерпаемая.",
    story_s2_p2:      "Каждый аромат рассказывает о путешествии: полночь на старых улочках Баку, рассвет в армянских горах или аромат специй на Гранд Базаре Стамбула.",
    story_quote:      "«Каждый аромат, который я создаю, начинается с вопроса: какое путешествие ведёт этот запах?»",
    story_quote_cite: "— Основатель Vanilla Voyage",
    story_tl_eyebrow: "Хронология",
    story_tl_h2:      "Наш путь",
    story_tl_p:       "С каждым днём мы всё ближе к своей мечте",
    story_y1_h3:      "Год основания",
    story_y1_p:       "В Ереване создан первый аромат — «Полночный Ром». Основатель вручную создал парфюм: тёмный шоколад, выдержанный ром, табачный лист.",
    story_y2_h3:      "Первая выставка и продажи",
    story_y2_p:       "На небольшой презентации на Yerevan Food & Lifestyle весь запас был продан в течение нескольких часов.",
    story_y3_h3:      "Первая коллекция",
    story_y3_p:       "На армянском рынке парфюмерии уже представлены 12 ароматов с дымными, цветочными и необычными нотами.",
    story_y4_h3:      "В сторону будущего",
    story_y4_p:       "С нами 8000+ клиентов из 67 стран. Наша мастерская продолжает работу — мастера создают новые ароматы.",
    story_val_eyebrow:"Наши ценности",
    story_val_h2:     "Что делает нас особенными",
    val1_h3:   "Сырьё высшего класса",
    val1_p:    "Только лучшее сырьё достойно наших ароматов. Ваниль привозим с Мадагаскара, сандал — из Индии.",
    val2_h3:   "Ручная работа",
    val2_p:    "Каждый флакон создаётся вручную. Мы не часть массового производства.",
    val3_h3:   "Подлинное своеобразие",
    val3_p:    "Для нас парфюмерия — настоящее искусство. Каждый аромат выражает видение, эмоцию.",
    story_cta_eyebrow:"Присоединяйтесь",
    story_cta_h2:     "Откройте ароматы",
    story_cta_p:      "Познакомьтесь с нашей коллекцией и найдите своё путешествие в наших ароматах.",
    story_cta_btn1:   "Коллекция",
    story_cta_btn2:   "Подписаться",

    coll_eyebrow: "Коллекция",
    coll_h2:      "Авторские ароматы",
    coll_p:       "Откройте уникальные ароматы вместе с нами",

    // Cart drawer
    cart_title:        "Корзина",
    cart_empty:        "Ваша корзина пуста",
    cart_empty_sub:    "Добавьте понравившиеся ароматы в корзину",
    cart_continue:     "Продолжить покупки",
    cart_total_label:  "Итого:",
    cart_checkout_btn: "Перейти к оплате",
    cart_remove:       "Удалить",
    cart_added_toast:  "Добавлено в корзину",

    // Checkout modal
    checkout_title:        "Безопасная оплата",
    checkout_subtitle:     "Введите данные карты, чтобы подтвердить заказ",
    checkout_name_label:   "Имя владельца карты",
    checkout_name_ph:      "Имя Фамилия",
    checkout_card_label:   "Номер карты",
    checkout_expiry_label: "Срок действия",
    checkout_cvv_label:    "CVV",
    checkout_total_label:  "Сумма к оплате",
    checkout_pay_btn:      "Оплатить",
    checkout_processing:   "Обработка…",
    checkout_back:         "← Назад в корзину",
    checkout_close:        "Закрыть",
    checkout_success_title:"Спасибо за ваш заказ",
    checkout_success_msg:  "Ваш платёж успешно принят. Ваши ароматы скоро отправятся в путешествие к вам.",
    checkout_error_card:   "Проверьте номер карты (16 цифр)",
    checkout_error_expiry: "Проверьте срок действия (ММ/ГГ)",
    checkout_error_cvv:    "Проверьте код CVV (3 цифры)",
    checkout_error_name:   "Введите имя владельца карты",

    // Checkout step labels
    checkout_step_personal:    "Доставка",
    checkout_step_payment:     "Оплата",
    checkout_personal_title:   "Данные доставки",
    checkout_fullname_label:   "Имя и фамилия",
    checkout_phone_label:      "Номер телефона",
    checkout_address_label:    "Адрес",
    checkout_city_label:       "Город",
    checkout_postal_label:     "Почтовый индекс",
    checkout_next_btn:         "Перейти к оплате →",
    checkout_back_to_info:     "← Назад к данным доставки",
    checkout_track_order:      "Отследить заказ",
    checkout_error_fullname:   "Введите ваше имя и фамилию",
    checkout_error_phone:      "Введите корректный номер телефона",
    checkout_error_address:    "Введите ваш адрес",
    checkout_error_city:       "Введите ваш город",
    checkout_error_postal:     "Введите почтовый индекс",
  },

  // ── ENGLISH ─────────────────────────────────
  en: {
    nav_collection:   "Collection",
    nav_our_story:    "Our Story",
    nav_contact:      "Contact",
    nav_buy:          "Shop Now",

    hero_eyebrow:     "A House of Luxury Fragrances",
    hero_h1:          "A scent for every <em>voyage</em>",
    hero_p:           "Fragrances crafted from the world's finest ingredients. Every bottle is a journey into the unknown.",
    hero_btn_explore: "Explore Collection",
    hero_btn_story:   "Our Story",

    scents_eyebrow:   "Collection",
    scents_h2:        "Signature Fragrances",
    scents_p:         "Each fragrance begins with a single ingredient — vanilla — and becomes an unforgettable experience.",
    scents_more_p:    "Discover all 12 fragrances",
    scents_more_btn:  "See more →",

    badge_new:        "New",
    badge_best:       "Bestseller",
    badge_limit:      "Limited Edition",
    badge_super:      "Ultra Limited",

    p1_name:  "Midnight Rum",
    p1_notes: "Dark Chocolate · Aged Rum · Tobacco Leaf",
    p1_desc:  "A rich, deep fragrance for those who appreciate elegance and mystery.",

    p2_name:  "Eastern Tale",
    p2_notes: "Vanilla · Cardamom · Sandalwood",
    p2_desc:  "A journey to the fairy-tale markets and grand palaces of the East.",

    p3_name:  "Moonbeam",
    p3_notes: "White Vanilla · Jasmine · Mint",
    p3_desc:  "A moonlit night when the air is filled with freshness and a gentle floral breath.",

    p4_name:  "Amber Desert",
    p4_notes: "Amber · Oud · Vanilla",
    p4_desc:  "A deep, smoky scent — like warm desert sand and the scent of ancient wood.",

    p5_name:  "Rose & Musk",
    p5_notes: "Rose · Musk · Cedar",
    p5_desc:  "A delicate floral fragrance — like a morning rose covered in dew.",

    p6_name:  "Vugen",
    p6_notes: "Oil · Baby Oil · Time",
    p6_desc:  "A clean, warm, sincere scent — like a memory impossible to forget.",

    // English

    p7_name:  "Midnight",
    p7_notes: "Ambroxan · Mint",
    p7_desc:  "Clean and calm, like a lake at night beneath the moonlight.",

    p8_name:  "Tropical Summer",
    p8_notes: "Alcohol · Fruits · Lemon",
    p8_desc:  "A fresh and sunny tropical fruit fragrance that recalls carefree summer days and warm ocean breezes.",

    p9_name:  "Sunveil",
    p9_notes: "Pineapple · Jasmine · Musk",
    p9_desc:  "A light, sweet, and radiant fragrance filled with summer warmth and the soft breath of sunlight.",

    p10_name:  "Luma Tropic",
    p10_notes: "Papaya · Grapefruit · Sandalwood",
    p10_desc:  "A vibrant and delicate fragrance created to highlight light summer moods and sunny moments.",

    p11_name:  "Azure Palm",
    p11_notes: "Lime · Sea Salt · Flowers",
    p11_desc:  "A blend of fresh and exotic notes that captures the freedom of the sea and tropical serenity.",
    btn_add:  "Add to Cart",

    stat1_label: "Signature Fragrances",
    stat2_label: "Countries Shipped To",
    stat3_label: "Happy Customers",
    stat4_label: "Founded in Armenia",

    about_eyebrow: "Our Story",
    about_h2:      "Created by one, loved by all",
    about_p1:      "At the heart of Vanilla Voyage is the founder's personal vision. This is a project created by one person from scratch, with their own hands and boundless love.",
    about_p2:      "Today every one of our bottles preserves that original sincerity and individual approach.",
    about_btn:     "Learn More",

    newsletter_eyebrow: "Be the first to know",
    newsletter_h2:      "Join the Journey",
    newsletter_p:       "Be the first to discover our new fragrances, exclusive offers and the story behind every perfume.",
    newsletter_placeholder: "Your email address",
    newsletter_btn:     "Subscribe",
    newsletter_alert:   "Thank you! You have successfully subscribed.",

    footer_tagline:  "A fine fragrance house inspired by the world's most universal ingredient.",
    footer_col1:     "Collection",
    footer_link1_1:  "Signature Fragrances",
    footer_link1_2:  "Limited Editions",
    footer_link1_3:  "Gift Sets",
    footer_link1_4:  "Samples",
    footer_col2:     "Company",
    footer_link2_1:  "Our Story",
    footer_link2_2:  "Ingredients",
    footer_col3:     "Support",
    footer_link3_1:  "FAQ",
    footer_link3_2:  "Shipping",
    footer_link3_3:  "Returns",
    footer_link3_4:  "Contact",
    footer_copy:     "© 2026 Vanilla Voyage. All rights reserved.",

    login_left_h2:   "Your scent,<br>your <em>story</em>",
    login_left_p:    "Create an account to purchase your favourite fragrances, track your orders and be the first to receive our news.",
    login_tab1:      "Sign In",
    login_tab2:      "Register",
    login_eyebrow1:  "Welcome back",
    login_h3_1:      "Sign in to your account",
    login_google:    "Continue with Google",
    login_or:        "or continue with email",
    login_email:     "Email",
    login_password:  "Password",
    login_forgot:    "Forgot your password?",
    login_btn:       "Sign In",
    login_no_acc:    "Don't have an account?",
    login_create:    "Create one",
    reg_eyebrow:     "Join us",
    reg_h3:          "Create your account",
    reg_or:          "or register with email",
    reg_firstname:   "First name",
    reg_lastname:    "Last name",
    reg_btn:         "Create Account",
    reg_terms:       "By creating an account you agree to our",
    reg_terms_link1: "Terms of Service",
    reg_and:         "and",
    reg_terms_link2: "Privacy Policy",
    reg_have_acc:    "Already have an account?",
    reg_login:       "Sign in",

    story_eyebrow:    "Since 2026",
    story_h1:         "Our <em>Story</em>",
    story_hero_p:     "Vanilla Voyage was born in Armenia from one founder's dream to unite the ancient East and modern luxury in a single bottle.",
    story_s1_eyebrow: "Origins",
    story_s1_h2:      "It all began with <em>a drop of vanilla</em>",
    story_s1_p1:      "In the spring of 2026, in a small Yerevan workshop, our founder blended his first fragrance — dark rum, bitter chocolate and tobacco leaf. Nobody believed that small experiment would become a brand.",
    story_s1_p2:      "But the scent had something special: the warmth of Armenia's gorges and the spirit of the Ancient East, all at once. That was the day Vanilla Voyage was born.",
    story_s2_eyebrow: "Philosophy",
    story_s2_h2:      "One ingredient, <em>endless stories</em>",
    story_s2_p1:      "Our entire collection is built around vanilla, but not in the way you'd expect. For us vanilla isn't an ingredient — it's a foundation: living, flexible, inexhaustible.",
    story_s2_p2:      "Each fragrance tells the story of a journey: midnight on old streets of Baku, sunrise in the Armenian mountains, or the scent of spice at Istanbul's Grand Bazaar.",
    story_quote:      "\"Every fragrance I create begins with one question: what journey does this scent lead?\"",
    story_quote_cite: "— Founder of Vanilla Voyage",
    story_tl_eyebrow: "Timeline",
    story_tl_h2:      "Our Journey",
    story_tl_p:       "Every day we grow closer to our dream",
    story_y1_h3:      "Founding Year",
    story_y1_p:       "The first fragrance — Midnight Rum — was created in Yerevan. The founder hand-blended the scent: dark chocolate, aged rum, tobacco leaf.",
    story_y2_h3:      "First Exhibition & Sales",
    story_y2_p:       "At a small showcase at Yerevan Food & Lifestyle, the entire stock sold out within hours.",
    story_y3_h3:      "First Collection",
    story_y3_p:       "The Armenian perfume market now hosts 12 fragrances with smoky, floral and unexpected notes.",
    story_y4_h3:      "Towards the Future",
    story_y4_p:       "8,000+ customers across 67 countries are with us. Our workshop continues — artisans are crafting new fragrances.",
    story_val_eyebrow:"Our Values",
    story_val_h2:     "What makes us worth choosing",
    val1_h3:   "Premium Ingredients",
    val1_p:    "Only the finest raw materials are worthy of our fragrances. Vanilla from Madagascar, sandalwood from India.",
    val2_h3:   "Handcrafted",
    val2_p:    "Every bottle is made by hand. We are not part of mass production.",
    val3_h3:   "Genuine Originality",
    val3_p:    "For us, perfumery is a true art. Every fragrance expresses a vision, an emotion.",
    story_cta_eyebrow:"Join Us",
    story_cta_h2:     "Discover the Fragrances",
    story_cta_p:      "Explore our collection and find your journey within our scents.",
    story_cta_btn1:   "Collection",
    story_cta_btn2:   "Subscribe",

    coll_eyebrow: "Collection",
    coll_h2:      "Signature Fragrances",
    coll_p:       "Discover our unique fragrances",

    // Cart drawer
    cart_title:        "Cart",
    cart_empty:        "Your cart is empty",
    cart_empty_sub:    "Add your favorite fragrances to the cart",
    cart_continue:     "Continue shopping",
    cart_total_label:  "Total:",
    cart_checkout_btn: "Proceed to checkout",
    cart_remove:       "Remove",
    cart_added_toast:  "Added to cart",

    // Checkout modal
    checkout_title:        "Secure checkout",
    checkout_subtitle:     "Enter your card details to confirm the order",
    checkout_name_label:   "Cardholder name",
    checkout_name_ph:      "First Last",
    checkout_card_label:   "Card number",
    checkout_expiry_label: "Expiry date",
    checkout_cvv_label:    "CVV",
    checkout_total_label:  "Amount due",
    checkout_pay_btn:      "Pay",
    checkout_processing:   "Processing…",
    checkout_back:         "← Back to cart",
    checkout_close:        "Close",
    checkout_success_title:"Thank you for your order",
    checkout_success_msg:  "Your payment was successful. Your fragrances will soon begin their voyage to you.",
    checkout_error_card:   "Check the card number (16 digits)",
    checkout_error_expiry: "Check the expiry date (MM/YY)",
    checkout_error_cvv:    "Check the CVV code (3 digits)",
    checkout_error_name:   "Enter the cardholder name",

    // Checkout step labels
    checkout_step_personal:    "Delivery",
    checkout_step_payment:     "Payment",
    checkout_personal_title:   "Delivery Information",
    checkout_fullname_label:   "Full Name",
    checkout_phone_label:      "Phone Number",
    checkout_address_label:    "Street Address",
    checkout_city_label:       "City",
    checkout_postal_label:     "Postal Code",
    checkout_next_btn:         "Continue to Payment →",
    checkout_back_to_info:     "← Back to Delivery Info",
    checkout_track_order:      "Track My Order",
    checkout_error_fullname:   "Please enter your full name",
    checkout_error_phone:      "Please enter a valid phone number",
    checkout_error_address:    "Please enter your street address",
    checkout_error_city:       "Please enter your city",
    checkout_error_postal:     "Please enter your postal code",
  }
};

// ── Engine ──────────────────────────────────────
const I18N = {
  current: localStorage.getItem('vv_lang') || 'hy',

  t(key) {
    return TRANSLATIONS[this.current][key] || TRANSLATIONS['hy'][key] || key;
  },

  apply() {
    const lang = this.current;
    document.documentElement.lang = lang;

    // Update all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (el.tagName === 'INPUT') {
        el.placeholder = val;
      } else {
        el.innerHTML = val;
      }
    });

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  },

  set(lang) {
    this.current = lang;
    localStorage.setItem('vv_lang', lang);
    this.apply();
  },

  init() {
    this.apply();
  }
};

document.addEventListener('DOMContentLoaded', () => I18N.init());
