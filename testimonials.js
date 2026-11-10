// WRITEopia 學生評價資料。新增評價：在對應陣列最上方加一筆即可。
// tag 可用：'IELTS' | 'TOEIC' | 'GEPT' | '寫作' | '發音' | '文法' | '生活英文'
// date 格式：'2024/9/4'（沒有可省略）。WO_NOTES 請依日期新到舊排列。
// WO_RESULTS exam 可用：'IELTS' | 'TOEIC' | 'GEPT'
// 成績單：用 score: { head, sub, rows: [['項目','分數', 是否為總分]] } 以清晰文字呈現。
// 暫不公開：在該筆加上 hidden: true，資料會保留但不顯示在網站上。
window.WO_RESULTS = [
  { exam: 'IELTS', score: '6.5', detail: '聽讀練習起點 3.5–4 · 首考 6 · 閱讀重考後 6.5' },
  { exam: 'TOEIC', score: '955', detail: '首次應考 · 聽力 480 · 閱讀 475' },
  { exam: 'IELTS', score: '7.5', detail: 'L 7.5 · R 9 · W 6.5 · S 6' },
  { exam: 'IELTS', score: '7', detail: 'R 7 · L 7 · W 6.5 · S 7' },
  { exam: 'IELTS', score: '6.5', detail: '達到學校要求' },
  { exam: 'IELTS', score: '6', detail: 'Speaking 6.5' },
  { exam: 'IELTS', score: '5.5', detail: 'L 5.5 · R 5.5 · W 5.5 · S 5.5 · 達到學校要求' },
  { exam: 'TOEIC', score: '700+', detail: '一個月內從 500 多分提升' }
];

window.WO_STORIES = [
  { tags: ['IELTS', '寫作'], result: 'IELTS Overall 6.5', title: '聽讀從練習 3.5–4 起步：九個月的雅思準備', date: '2026/11/8',
    score: { head: 'IELTS Test Results', sub: '10/15 首考 · 11/7 閱讀單科重考', rows: [['Listening', '6.0'], ['Reading', '5.5 → 6.5'], ['Writing', '6.0'], ['Speaking', '6.5'], ['Overall', '6 → 6.5', true]] },
    paras: [
    '謝謝老師這段時間的教學，我的閱讀跟聽力一開始都只有3.5-4.0，一直到今年九月後才慢慢出現有6-6.5這部分的數據。我認為這部分的教學，像是在帶我了解題目、理解為什麼會選錯的答案，以及給予其他的複習材料，這點幫助很大！',
    '在寫作上一直是我的瓶頸，老師幫我改了超多的作文，也很仔細的給予回饋，這部分的感謝真的很難形容 😭 我的作文從無法寫完到最後正式考試時有完成，這是一件不簡單的事情！也謝謝您的幫忙🥹',
    '最後在口說上也有提供了很多回答的思考邏輯，剛好平常也頻繁使用英文口說，所以這樣的搭配已經足夠了！',
    '最後，我認為您是非常優秀的老師，我也很開心自己是一個積極的學生，才能達到這樣的目標分數，雖然不是很高，但對現階段來說已足夠！🙇'
  ]},
  { tags: ['生活英文'], title: '家長回饋', paras: [
    '謝謝老師～～～ ○○喜歡今天的課程內容，想要繼續規律的上課🥰',
    '她剛剛自己說，上課時腦袋裡有想法，但沒辦法快速組織用英文說出來',
    '但老師上課內容好玩，可以可以學很多',
    '老師的教材選擇跟引導我們都覺得很棒👍',
    '剛爸爸還說，如果小時候自己也能被這樣引導就太棒了🤭'
  ]},
  { tags: ['TOEIC'], result: 'TOEIC 955', title: '第一次考多益就 955 分', img: 'assets/results/toeic-955.png', paras: [
    '聽力 480、閱讀 475，總分 955。',
    '謝謝老師'
  ]},
  { tags: ['IELTS', '寫作'], title: 'IELTS 四項全面準備', result: 'IELTS Overall 5.5', img: 'assets/results/ielts-5-5.png', paras: [
    '成績：聽力 5.5、閱讀 5.5、寫作 5.5、口說 5.5，Overall 5.5（CEFR B2），達到學校要求。',
    '聽、讀：會提到考試技巧覺得實用',
    '寫：很喜歡Jessie的書寫概念，邏輯很清晰，也很易懂。後續會根據學生的狀況及想法，個別化適合的書寫風格。考試時，不會擔心一定要照著什麼格式走才能拿高分，自然的表達即可。此外，還會整理、歸納學生常犯的錯誤，讓學生清楚自己目前需要加強的部分。',
    '說：除了會很耐心的陪練外，情境練習的模擬也與考場的感覺很像。教學時，會引導學生如何應對和思考考試題目。若有想要特定領域的口說學習，也都可以提供相對應的教材。',
    '教學內容：我覺得知識量很豐富，基本上我的問題都可以有很完善的回覆，即使有不太常見的疑問，也會很細心的確認後再告知我。對於雅思考試的準備方式也很有經驗，基本上都可以獲得可執行且有效的方法。'
  ]},
  { tags: ['TOEIC', '文法'], result: 'TOEIC 500 → 700+', paras: [
    '過去我的英文一直停留在死背文法的階段，缺乏真正的詞性判斷與讀題能力。Jessie老師以系統化方式重新建立我的文法觀念，透過帶題與解題訓練，幫助我掌握正確的判題邏輯。使我在一個月內多益成績從500多分提升到700多分。'
  ]},
  { tags: ['IELTS', '寫作'], result: 'IELTS Overall 7', date: '2024/9/4', lang: 'en', paras: [
    'I finally took IELTS last Saturday and here are the results: Overall: 7  R: 7  L: 7  W: 6.5  S: 7',
    'Though there is still room for improvement in writing, I am so grateful that you were of great help in bringing my writing and reading skills to the next level. Thank you!'
  ]},
  { tags: ['發音', '文法'], title: '一對一發音・文法', paras: [
    '之前的英文底子打得不夠好，在正式踏入1對1的英文會既期待又怕自己毫無長進，跟不上學習',
    '1. 能夠矯正【發音】方式，多次練習矯正 — Jessie很厲害的是抓出發音錯誤位置、舌腔內的發音方式，以為自己已經念對但會被抓出舌頭擺放位置錯誤導致發音也會錯誤；Jessie口音是屬於很美式發音，不會有台式發音，這也是當初在找老師會注重的重點',
    '2. 藉由引導式發想句子 — 初學最怕單字拼不出來無法構思完整句子，在上課過程即使想不出來，Jessie會藉由引導式來幫助發想句子，也能藉由額外發想學習許多額外單字、句子',
    '3. 文法解釋【簡易明白】 — 在學習文法過程，因為太特定說法容易跟中文語意打架搞不懂用法，Jessie會使用簡單明白的字眼說明細微的差距與差別，了解文法的使用方式',
    '4. 彈性更改課程並客製化 — 會根據每次上次結果狀況調整課程內容，修改為最適當自己的課程模式，又能知道自己在那些地方不足、上課並不會感受到急促'
  ]},
  { tags: ['寫作'], lang: 'en', title: '24 堂寫作課', paras: [
    'Jessie, First of all, I really appreciate your 24 lessons over the past 6 months. If anyone asks me which classes are worth taking on … I would say the series of Jessie’s 24 writing classes, because her enthusiastic teaching can motivate you not to miss any class.',
    'In today’s class, the unclear position reminded me of my emails to clients. Sometimes I feel I’ve written everything crystal clear, but they still ask questions I’ve already addressed. It seems I need to use the same writing skills to make my points clearer. Haha!',
    'Sorry for writing so much, but I don’t want to say goodbye. Of course, I will definitely take your B1 classes on Tuesdays sometimes. Again, thank you, Jessie.'
  ]},
  { tags: ['發音'], title: '出國前的發音課', paras: [
    '老師～這兩天看影片回放突然很有感，想跟你分享心得，我第一次線上課結束，下課還會主動回放重複聽自己說英文的聲音，再錄音練習。',
    '很感謝老師除了教發音技巧，還十分有耐心的幫我練習，可以聽出我哪些音不太標準，並明確告訴我要怎麼發音，用什麼位置發音，加上提供一個讓我安心敢開口練習的環境覺得超關鍵。',
    '謝謝老師～我去英國後，祝福也有其他學生可以很幸運的找到老師！'
  ]},
  { tags: ['IELTS'], result: 'IELTS Overall 6.5', paras: [
    '有考到學校要求的overall 6.5了，不過還是有點失望考沒有考到7…',
    '不過很開心跟老師學習的這幾週，除了每週的作業+老師給我的主題單字、題型整理，我覺得每堂課都學到很多，也莫名覺得雅思寫作蠻好玩的，後面寫的順時我都寫的很快樂。',
    '很感謝老師這幾週的教學。'
  ]},
  { tags: ['文法', '寫作'], paras: [
    '曾經試著自學英文，卻總是在低效率的背單字中打轉。直到跟著Jessie學英文，才開始從零基礎穩步前進，一年內已能閱讀短文、理解文章內容。在學習的過程中，我找到適合自己的複習方式，加上Jessie輕鬆無壓力的教學風格，讓我持續學習，也享受到進步的喜悅。'
  ]},
  { tags: ['生活英文'], lang: 'en', paras: [
    'Jessie, thank you for your support and patience with me. You never mind overtime for me. I’m so touched by you.',
    'No one ask me those English learning questions before, you try to understand my situation and feelings, help me solve my English learning issue step by step.',
    'I think I am very lucky to be your student. You are the best teacher I have ever met.'
  ]},
  { tags: ['寫作', '發音'], paras: [
    '嗨老師！我順利上完語言課，下週要邁入碩士課程了，想跟妳分享之前的發音課程我們口說課也都有強調，作文Topic sentence 主題跟control 部分也有！上到的時候就想到老師～'
  ]},
  { tags: ['寫作'], paras: [
    '整體很好～寫作變得比較有依據和能夠理清邏輯。之前為了考試準備寫作時，反而都沒有理解到寫作的內容思維，都只是架構。',
    '如果時間充裕早點遇到老師，是會想把這系列上完的！'
  ]},
  { tags: ['生活英文'], date: '2025/8/25', paras: [
    'Jessie 妳讓我感覺不會壓力很大又很有耐心，有些東西妳有講過了下一次問我還是不會或不記得妳就會再講一次或是換個方式讓我理解。',
    '高中時期有請過兩年的英文家教，或許那時候沒有找到正確的方法，就一直放棄到現在。',
    '一開始我只要求自己能堅持下去不要排斥或放棄，默默的就過了6個月。'
  ]},
  { tags: ['IELTS'], result: 'IELTS Overall 6', lang: 'en', paras: [
    'Hi Jessie, I would like to thanks your teaching. I got overall band score 6. Except for speaking, other items are 6. Speaking is 6.5. I’m gonna move on next stage.',
    'Again, I would like to express my appreciation for the course that you give me. Thank you so much.'
  ]},
  { tags: ['寫作'], paras: [
    '我之後都選其他國家老師，不過作文老師一直都找不到，看過…的功課後我認為較合適我，所以便找上你了',
    '能夠遇到個好老師，好難得喔 不是客套說話'
  ]}
];

window.WO_NOTES = [
  { d: '2024/11/20', t: "謝謝Jessie很用心的解釋，額外補充，讓我們有能清理解" },
  { d: '2024/11/19', t: "老師非常專業且有耐心，不僅在教學上條理清晰，還能在面對突發狀況時從容應對，課堂氛圍輕鬆愉快，值得五星好評！" },
  { d: '2024/11/19', t: "謝謝Jessie老師充滿笑容的解說，老師的笑容很棒，讓人感受到真誠與投入。謝謝老師清晰的解說及額外補充，很棒的課程！" },
  { d: '2024/11/4', t: "Jessie老師上課很仔細,充份引導學生發言,並補充。這堂課一起上課的同學很認真學習。這是一堂很有收穫的課。" },
  { d: '2024/10/20', t: "感謝老師耐心指導，五星好評" },
  { d: '2024/10/15', t: "nice to meet you! Looking forward to seeing you next time" },
  { d: '2024/10/15', t: "這堂課很有趣且充實!! 謝謝老師!" },
  { d: '2024/10/14', t: "老師很清楚的解釋了我的問題！" },
  { d: '2024/10/14', t: "I am pleased to attend this class." },
  { d: '2024/10/8', t: "老師課堂本身的內容講解的很詳細,能夠了解如何正確的分辨用法~謝謝老師" },
  { d: '2024/10/3', t: "老師的文法解說非常清楚,很喜歡上老師的課,謝謝老師:)" },
  { d: '2024/10/2', t: "謝謝老師補充很多，講解也很清楚。" },
  { d: '2024/10/1', t: "I love Jessie’s class. She gave us extra information to build up certain grammar points." },
  { d: '2024/10/1', t: "老師能夠理解學生程度不同給予不同的提示,謝謝老師" },
  { d: '2024/9/25', t: "老師有讓每個學生都練習到，很棒!" },
  { d: '2024/9/25', t: "Thank you teacher. It was a good class that I learned more detail about it-cleft." },
  { d: '2024/9/24', t: "老師很熱情教得很好有學到很多還沒有壓力" },
  { d: '2024/9/22', t: "老師講解非常詳細,也舉了非常多例子,及閱讀發音重點,給我學習上很大幫助,謝謝~" },
  { d: '2024/9/18', t: "I have learned new concepts on grammars of future tense. Thank you !" },
  { d: '2024/9/18', t: "我喜歡的部分在於 當課堂靜音時,老師知道學生在困惑了,然後解決了我們的困惑" },
  { d: '2024/9/4', t: "通過這堂課我了解了我的語法還有進步空間" },
  { d: '2024/8/19', t: "Thank you, Jessie. You always give us very clear and detailed feedback on our assignments." },
  { d: '2024/8/19', t: "謝謝Jessie老師，課程教學清楚有節奏感" },
  { d: '2024/7/30', t: "謝謝老師總是給予我很多，不只是教材上的學習，還有好多相關的補充！每次上您的課都覺得學到了好多" },
  { d: '2024/7/29', t: "Thank you so much for improving my English as best as you can. I highly appreciate it." },
  { d: '2024/7/17', t: "老師會適時指引我們正確的回答，非常熱情的一位老師，thank you" },
  { d: '2024/6/25', t: "Jessie老師上課很有熱情，會去思考學生回答方式的原因並加以指導，並適時提供一些額外英文文法應用!" },
  { d: '2024/6/20', t: "謝謝Jessie! I like you like sunshine~~" },
  { d: '2024/6/19', t: "Jessie老師在講解規則時邏輯很清楚，讓人很好理解" },
  { d: '2024/6/12', t: "謝謝老師提供方法，讓我的表達可以更流暢。" },
  { d: '2024/6/9', t: "Dear Jessie, 謝謝妳的課程總是滿滿的乾貨！ 每次上完都有一種收穫滿載的感受~ 端午節快樂 :D 好喜歡上你的課~~" },
  { d: '2024/6/2', t: "課題補充說明，Jessie讓我能更靈活運用句型，很棒!" },
  { d: '2024/5/21', t: "老師超熱情，也會根據學生的上課狀況調整上課方式跟內容，超讚~" },
  { d: '2024/5/21', t: "老師非常專業。" },
  { d: '2024/5/14', t: "這堂課老師講解非常清晰明瞭，真的有學到了一項了，超讚" },
  { d: '2024/5/9', t: "I had a great time and learned a lot, thanks." },
  { d: '2024/5/6', t: "Wow, it was an amazing class. I should take Jessie's class as early as possible. I enjoyed the teaching pace and clear explanation for each part. Thank you, Jessie. I can't wait to take the second class, even if there will be some assignments as homework." },
  { d: '2024/4/29', t: "老師講解非常細心！很積極回答學生問題！" },
  { d: '2024/3/24', t: "老師講解得很清楚，不論是單字、文法或句子架構的小細節也都說明的非常仔細。" },
  { d: '2024/3/13', t: "感謝老師都會延伸課程,讓我們學到更多東西,還會糾正我們的錯誤" },
  { d: '2024/2/19', t: "I noticed that you assigned some analysis work to students who might need it the most. You are so thoughtful." },
  { d: '2024/2/6', t: "老師教學仔細，有耐心，也會補充相關句型並和我們互動，讓我更有信心學習，很喜歡老師的課" },
  { d: '2024/1/22', t: "第一次上雅思聽力，真的發現很多不足尤其口音XD，但透過老師的帶領，真的很有感很有幫助，透過老師針對題目的預先解析，更有助於在聽之前先找到方向，即使答題未正確，後需的回放音檔及協助找出關鍵字、補充說明及把我們未注意到的細枝末節提點出來，真的幫助很多。" },
  { d: '2024/1/16', t: "老師會幫忙學生增加句子長度和內容，很棒！" },
  { d: '2024/1/3', t: "細心補充很多用法並講解" },
  { d: '2023/12/20', t: "謝謝您系統化今天的課程內容，協助我組織零散的知識" },
  { d: '2023/12/19', t: "謝謝老師~~~ 您上的超好~~ 好充實好開心 XD" },
  { d: '2023/12/16', t: "Jessie老師活潑有活力，上課完全不無聊，加分!!" },
  { d: '2023/12/10', t: "Thanks for treating my question asked in last class seriously." },
  { d: '2023/12/10', t: "Thank you for Jessie’s instructions. Jessie is very kind and patient, and explains things very clearly. I feel like I have learned a lot." },
  { d: '2023/12/3', t: "Many thanks for teacher Jessie’s patience and detailed explanation on today’s exam/class. I’ll pay attention on those parts what you especially mentioned during the class." },
  { d: '2023/11/29', t: "謝謝老師顧及到程度不同的學生" },
  { d: '2023/11/23', t: "太喜歡Jessie，上她的課很放鬆又可以學到很多補充的字句，互動很好，讓人很享受課程中的內容，儘管課程看似簡單的話題，但都可以讓老師教出很多新高度" },
  { d: '2023/10/12', t: "老師很用心教學，會把複雜的文法用簡單的方式解說，並且會重複說明，不會因為部分同學懂了就往下一個部分前進，而是會盡可能的完整解釋文法的使用方式。重複再說一次我個人覺得很受用，可以再加強觀點及增加記憶點。個人很喜歡這個老師的教學方式，因為有時候我們可能還在消化或者思考，可能還卡在某處，老師彷彿能心電感應一般，再以不同思維及角度頗析，重複剛剛要表達意思，這樣同學就可以把不完整的拼圖慢慢拼湊起來。另外老師會以鼓勵的方式，引導同學開口或這協助完成同學想表達的意思，並且給予其他更道地英文表示補充。整體而言上課起來的氣氛，不會死氣沈沈或者因自身沒自信而不敢表達，可以感覺得到老師有這方面的舞台魅力，將不同程度的學生帶動起來。" },
  { d: '2023/10/10', t: "Jessie老師總是親切的教學，讓學生都能說得出/ 寫得出。謝謝老師" },
  { d: '2023/9/26', t: "老師試著用英文解釋單字，肢體動作使學生了解英文，很棒。" },
  { d: '2023/9/19', t: "老師很認真地補充相關字彙，並放入實用的生活用語，讓學員可以在短時間內從原本所學再延伸學習，是一個很棒的老師。" },
  { d: '2023/9/6', t: "充分感受到老師希望學員能夠真正學習到本次課程內容,謝謝您!" },
  { d: '2023/8/30', t: "老師十分有耐心，我學習到了許多運用不同文法表達的方式，謝謝老師。" }
];
