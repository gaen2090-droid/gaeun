// ── COMPETENCIES DATA ────────────────────────────────────────────────
const COMPS = [
  { id:'c4', emoji:'🤖', name:'기술 기획 역량', desc:'SNOW에서 Gemini, Seedream 등 생성형 AI를 활용해 AI Style 콘텐츠를 기획하고 실제 출시했습니다. 글로벌 유저 반응과 기술 트렌드를 함께 분석하며 콘텐츠 방향과 운영 전략을 조정했습니다. 기술 콘텐츠 에이전시 WE-AR에서는 AR/AI 기반 캠페인 제안에 참여하여 기술을 유저가 직접 경험할 수 있는 서비스 플로우로 구체화했습니다.' },
  { id:'c1', emoji:'📊', name:'데이터 분석력', desc:'아이디어스와 SNOW의 인턴십에서 주간 단위로 프로모션/콘텐츠 지표를 분석하고 성과를 보고했습니다. CTR, 페이지 뷰, 콘텐츠 저장률, 유료 구독 전환률 등 주요 데이터를 지속적으로 확인하며 운영 방향과 노출 전략을 조정했습니다. 최근 SQLD 자격증을 취득하여 데이터 활용 역량을 확장했습니다.' },
  { id:'c2', emoji:'💡', name:'문제 해결력', desc:'아이디어스 재직 당시 담당하던 상시 이벤트의 참여 지표가 지속적으로 하락하는 현상을 발견했습니다.\n참여 과정에서 \'댓글 작성\'이 유저 진입 장벽으로 작용한다고 판단했고, 이를 보완한 새로운 포맷(퀴즈형)의 참여형 이벤트를 선제안하고 운영했습니다.\n문제 원인을 빠르게 가설화하고 실제 운영 액션으로 연결하며 리텐션 및 참여율 개선에 기여했습니다.' },
  { id:'c3', emoji:'📈', name:'트렌드 분석력', desc:'마케팅 전략 학회 GML과 연합광고동아리 애드레날린 등지에서 다양한 기업의 시장·유저 트렌드를 분석하고 전략을 제안하며 총 5회 수상했습니다.\n설문조사와 FGI, 경쟁사 분석을 바탕으로 타깃의 행동 맥락과 숨은 니즈를 도출했고,\n실무자로부터 실제 적용 가능성이 높은 인사이트라는 평가를 받았습니다.' },
  { id:'c1779214309637', emoji:'🤝', name:'커뮤니케이션 역량', desc:'성인이 된 이후로 아르바이트를 쉬지 않고 해왔습니다. 6번의 카페/베이커리 아르바이트와, 3번의 인턴십에서 꾸준히 들어온 말이 있습니다.\n\n"알아서 잘 찾아본 뒤 필요한 질문을 적시에 한다"\n"적응력이 빠르고 업무적 센스가 좋다"\n\n다양한 이해관계자와 소통하며 커뮤니케이션 역량을 기를 수 있었고, 새로운 상황에서의 적응력과 센스 또한 기를 수 있었습니다.' },
  { id:'c1779210255431', emoji:'🌟', name:'리더십', desc:'마케팅 전략 학회 학회장, 동아리 운영진 등 조직에서 핵심 역할을 주로 맡아왔고, 공모전 참여 시에도 팀장 역할을 수행해왔습니다. 이 과정에서 커뮤니케이션 역량을 기를 수 있었을 뿐만 아니라, 나 개인의 아이디어를 관철시키기보다는 팀이 함께 달성해야 할 목표를 먼저 고민하게 되었습니다.' },
];

// ── PROJECT DATA ──────────────────────────────────────────────────────
// slug: stable, URL-friendly identifier for /p/<slug>/ pages.
// Falls back to `id` when omitted (most ids are already readable slugs).
const PROJECTS = {
  work: [
    {
      id:'snow-ops',
      title:'SNOW/B612 AI Style 콘텐츠 운영',
      subtitle:'데이터 기반의 AI 콘텐츠 운영',
      org:'SNOW', period:'2025.09 – 2026.03', contrib:'기여도 80%',
      thumb:'images/snow1_operate/1.jpg',
      images:[{src:'images/snow1_operate/1.jpg',caption:''},{src:'images/snow1_operate/2.jpg',caption:''},{src:'images/snow1_operate/3.png',caption:''},{src:'images/snow1_operate/4.png',caption:''},{src:'images/snow1_operate/5.jpg',caption:''},{src:'images/snow1_operate/6.jpg',caption:''},{src:'images/snow1_operate/7.jpg',caption:''}],
      summary:'글로벌 카메라 서비스 SNOW, B612의 AI Style* 콘텐츠 전반을 운영했습니다.\n*이용자가 선택한 사진을 AI API(Gemini, Seedream, GPT 등)를 통해 다양한 이미지로 변환해주는 콘텐츠',
      details:'[AI Style 콘텐츠 출시]\n콘텐츠 출시 작업, 글로벌 타이틀 작성, 글로벌 국가 전체 대응\n인앱 프로모션 세팅 작업, 프로모션 문구 작성\n\n[AI Style 콘텐츠 지표 분석]\n매주 생성수·저장률·유료 구독 전환률 등 핵심 지표 중심으로 인사이트 공유\n\n[인앱 AI 페이지 노출 구좌별 전략 수립]\n지표 인사이트를 바탕으로 노출 구좌별 전략 수립 및 페이지 운영\nex) 생성 수는 높으나 저장률이 낮은 경우 UX 오류 여부를 점검하고 안내 문구를 개선, 구독 전환율이 높은 콘텐츠는 상단에 노출하거나 인앱 프로모션으로 확장, 전환율이 낮은 콘텐츠는 하단으로 내려 운영 효율을 높임',
      result:'계약 종료 시점에 입사 직후 대비 평균 저장률 20% 상승',
    },
    {
      id:'snow-plan',
      title:'SNOW/B612 AI Style 콘텐츠 기획',
      subtitle:'글로벌 카메라 서비스의 콘텐츠를 직접 제작하다',
      org:'SNOW', period:'2025.09 – 2026.03', contrib:'기여도 100%',
      thumb:'images/snow2_planning/1.jpg',
      images:[{src:'images/snow2_planning/1.jpg',caption:'두쫀쿠 플러팅'},{src:'images/snow2_planning/2.jpg',caption:'100kg'},{src:'images/snow2_planning/3.jpg',caption:'마녀 코스튬(영화 위키드 코스튬)'}],
      summary:'글로벌 카메라 서비스 SNOW, B612의 AI Style* 콘텐츠를 기획하고 직접 제작했습니다.\n*이용자가 선택한 사진을 AI API(gemini, seedream, gpt 등)를 통해 다양한 콘셉트의 이미지로 변환해주는 콘텐츠',
      details:'[AI 콘텐츠 기획]\n기획안 작성, 매주 기획 회의에서 브리핑\n\n[AI 콘텐츠 제작]\n기획 회의 통과 후 긴 프롬프트 작업 (API 통해 제작 진행)\n디자이너 피드백 이후 출시\n\n[체크 포인트]\n• AI로 원하는 느낌을 충분히 구현할 수 있을지\n• 빠른 제작을 위해 공수는 최대한 적게\n• 유저가 반응할 포인트가 확실하게 있을지\n• 트렌드에 부합하는지 (구체적 사례 필요)',
      result:'\'마녀 코스튬\' 콘텐츠: 5.9만회 제작 (Gemini 2.5)\n\'100kg\' 콘텐츠: 4만회 제작 (Seedream 4.5)\n\'두쫀쿠 플러팅\' 콘텐츠: 1.2만회 제작 (Gemini Pro)',
    },
    {
      id:'idus-quiz',
      title:"'오늘의 퀴즈' 기획 및 운영",
      subtitle:'직접 제안한 이벤트가 메인배너에 올라가기까지',
      org:'아이디어스', period:'2023.01 – 2023.07', contrib:'기여도 80%',
      thumb:'images/idus1_quiz/4.jpg',
      images:[{src:'images/idus1_quiz/1.jpg',caption:''},{src:'images/idus1_quiz/2.jpg',caption:''},{src:'images/idus1_quiz/3.jpg',caption:''},{src:'images/idus1_quiz/4.jpg',caption:''},{src:'images/idus1_quiz/5.png',caption:''},{src:'images/idus1_quiz/6.jpg',caption:'하단 기획전 노출 / 작품 노출 / 앱 내 랜딩 / 별도 url 랜딩'},{src:'images/idus1_quiz/7.jpg',caption:''}],
      summary:'매일 사용자들이 방문하여 간단하면서 재밌는 퀴즈를 풀고 적립금을 받아가는 형식의 이벤트',
      details:'[전략]\n입사 이후 맡게 된 이벤트의 페이지수 대비 참여율이 아쉬워 해당 이벤트를 제안\n기존 이벤트의 참여 과정에서 \'댓글 작성\'이 유저 진입 장벽으로 작용한다고 판단, 진입 장벽을 최소화한 \'퀴즈형\' 이벤트를 시도\n특히, 참여자들이 쉽게, 동시에 꾸준하게 참여할 수 있는지에 주목\n\n[제작 방법]\nFigma로 기획안 제작, 디자이너에게 전달 → 디자이너 파일 검수 → 피드백 요청 → 최종본 완성 → CRM 마케터 등 협업 담당자에게 사전 협업 요청 → 어드민 통해 세팅',
      result:'문제 원인을 빠르게 가설화하고 실제 액션으로 연결한 사례\n하루 4,000건~6,000건의 높은 view와 메인배너 클릭률 3~4%대로 사내 호평\n쿼리 데이터 기반으로 지속적으로 운영 방향 개선하여 페이지수 대비 참여율을 초기 대비 18.8% 증가시킴, 특히 이전 댓글 참여형 이벤트 대비 약 3.2배 수준으로 증가',
    },
    {
      id:'idus-magazine',
      title:'네이버포스트 및 인앱 매거진 발행',
      subtitle:'후킹한 제목으로 네이버포스트 메인에 노출되다',
      org:'아이디어스', period:'2023.01 – 2023.07', contrib:'기여도 90%',
      thumb:'images/idus2_post/1.png',
      images:[{src:'images/idus2_post/1.png',caption:''},{src:'images/idus2_post/2.png',caption:''}],
      summary:'아이디어스의 프로모션 마케터로서 콘텐츠 마케팅 업무 병행. 시즌 트렌드에 맞는 아이템을 선정하여 네이버 포스트와 인앱 매거진으로 풀어냄',
      details:'[전략]\n타깃 3040 여성에 중점을 두고 작성\n특히, 포스트의 경우 제목을 타깃함에 맞춰 후킹하게 작성',
      result:'• \'B급 할인관\' 홍보 포스트 → 네이버 포스트 메인 노출, 제목이 후킹하다는 평을 받음\n• \'댕기 스크런치\' 소개 매거진 → 블랙핑크 로제 착용 이후 빠르게 발행, \'댕기\' 검색어 상위 랭킹',
    },
    {
      id:'idus-event',
      title:'인앱 이벤트 기획 및 운영',
      subtitle:'3040 타깃의 쉽고 간단한 이벤트 기획',
      org:'아이디어스', period:'2023.01 – 2023.07', contrib:'기여도 80%',
      thumb:'images/idus3_event/7.jpg',
      images:[{src:'images/idus3_event/1.jpg',caption:''},{src:'images/idus3_event/2.jpg',caption:''},{src:'images/idus3_event/3.jpg',caption:''},{src:'images/idus3_event/4.jpg',caption:''},{src:'images/idus3_event/5.jpg',caption:''},{src:'images/idus3_event/6.jpg',caption:''},{src:'images/idus3_event/7.jpg',caption:''},{src:'images/idus3_event/8.jpg',caption:''},{src:'images/idus3_event/9.jpg',caption:''}],
      summary:'아이디어스의 프로모션 마케터로서 인앱 이벤트(non-feature) 기획 및 진행',
      details:'[전략]\n타깃(3040 여성)에 맞게 기획\n쉽고 간단하게 참여할 수 있도록 기획\n\n[내용]\n버튼사이트, OG, 카카오톡 푸시, 피드, 메인홈 배너, 이벤트 페이지 등 모두 주체적으로 기획\n주로 댓글 참여형 이벤트를 진행했으나 퀴즈형 이벤트를 진행하기도 함',
      result:'[주요 이벤트: 아이디어스데이 사전 홍보]\n전사 행사 사전 홍보용 퀴즈쇼에서 준수한 성과: 페이지뷰 6.6만회, 적립금 받기 클릭 약 5만회로 CTR 약 75% 기록\n특히 \'공유하기\'가 약 1.3천회를 기록: 기존에 세자리 수를 못넘던 공유하기 수가 급등\n퀴즈형 이벤트로 아이디어스데이에 대한 기대감을 사전에 효과적으로 조성했다는 호평',
    },
    {
      id:'card-1779210104419',
      slug:'hyundai-livart',
      title:'현대리바트 팝업스토어 캠페인 제안',
      subtitle:'기술을 입힌 브랜드 경험 설계',
      org:'WE-AR', period:'2025.01', contrib:'기여도 50%',
      thumb:'images/wear1_livart/3.jpg',
      images:[{src:'images/wear1_livart/1.png',caption:''},{src:'images/wear1_livart/2.png',caption:''},{src:'images/wear1_livart/3.jpg',caption:''}],
      summary:'현대리바트 팝업스토어 캠페인 제안에 AE 인턴으로 참여. MZ세대에게 프리미엄 가구 브랜드를 어떻게 경험하게 할 것인가라는 과제 하에 기획 서포트',
      details:'[제안 내용]\n2030 타깃이 공감할 수 있는 \'프리미엄\' 정의 재구성\n콘셉트 제안: \'세상에 없었던 가구 연구소\'\nAR 가구 제작 체험, AR 도슨트, AI 영감 노트 자판기 등 기술 기반 프로그램 제안\n\n[전략]\n사용자 입장에서 참여가 편하도록 직관적이고 쉬운 플로우로 설계\n현장 제약사항(AR 인식 각도 등)을 고려해 현실적 콘텐츠 연출 방식 설계',
      result:'제안서 채택 → 인턴십 종료 이후 2025년 6월 실제 운영\n공간 콘셉트, 콘텐츠 흐름, 굿즈 등 일부가 제안서 기반으로 구현됨\n실행에는 참여하지 않았지만, 기획안이 실행으로 이어진 사례',
    },
    {
      id:'wear-lake',
      title:'호수 관광 활성화 프로젝트 제안',
      subtitle:'AI/AR 기반 기술 스탬프 투어 기획',
      org:'WE-AR', period:'2025.02', contrib:'기여도 50%',
      thumb:'images/wear2/1.png',
      images:[{src:'images/wear2/1.png',caption:''},{src:'images/wear2/2.png',caption:''},{src:'images/wear2/3.png',caption:''}],
      summary:'지방 도시 호수 유대 관광 활성화를 위한 오프라인 체험형 콘텐츠 제안서 작성에 참여. 총 10개의 현장 스팟에서 진행하는 스탬프 투어 콘텐츠(기술 기반)를 제안',
      details:'[AR/AI 기술 기반의 스토리텔링]\n10개 스팟에 각기 다른 미션 기반 콘텐츠 기획\nAR 인터랙티브 필터, 생성형 AI 이미지/음성/메시지 제작\n\n[사용자 참여 플로우 설계]\nQR 접속 → 마커 인식 → 체험 → 스탬프 수집 → 보상 플로우\n\n[확산형 인터랙션]\n결과 이미지 저장 및 SNS 공유 기능 포함',
      result:'사용자 입장에서 참여가 편하도록 직관적이고 쉬운 플로우로 설계\n클라이언트가 요청한 키워드 \'고래\' 등을 확실하게 각인할 수 있도록 일관적 설계',
    },
  ],

  academic: [
    {
      id:'bazaar',
      title:'하퍼스바자 경쟁PT 최우수상 🏆',
      subtitle:'타깃의 행동 맥락을 해석해 감각적인 콘셉트로 만들다',
      org:'마케팅학회 GML', period:'2022.09 – 2022.10', contrib:'기여도 50%',
      thumb:'images/bazaar/4.JPG',
      images:[{src:'images/bazaar/1.JPG',caption:''},{src:'images/bazaar/2.JPG',caption:''},{src:'images/bazaar/3.JPG',caption:''},{src:'images/bazaar/4.JPG',caption:''},{src:'images/bazaar/5.JPG',caption:''},{src:'images/bazaar/6.JPG',caption:''},{src:'images/bazaar/7.JPG',caption:''}],
      summary:'마케팅 학회 연합 내에서 진행된 산학협력 경쟁PT. 패션 매거진 하퍼스바자에서 신규 런칭하는 아트 디지털 APP \'바자예술산책\' 관련 앱 기능 및 마케팅 전략을 제안',
      details:'[역할]\n로직 구체화, 컨셉명 제안 등 기획을 주도, 대부분의 디자인을 담당\n\n[전략]\n첫 포지셔닝을 위해선 2030의 니즈를 세분화하여 자사의 정체성과 부합하는 니즈를 가진 타겟층을 초기 이용자로 확보해야 함을 강조\n또한 이들이 전시 관람 시 전-중-후 단계적으로 여러움을 겪는 것을 파악하여 코스요리 \'파인다이닝\' 개념의 컨셉 고안\n설문조사, 자체 FGI 등을 통해 타겟의 니즈를 심층 분석하는 것에 중점을 둠',
      result:'"아주 탄탄하고 이해가 잘 된다. 많은 아이디어와 상세한 자료들은 앞으로의 실무에 많은 도움 될 것 같다."\n→ 최우수상 수상',
    },
    {
      id:'card-1779209968104',
      slug:'mizuno-pt',
      title:'한국미즈노 경쟁PT 2위 🏆',
      subtitle:'타깃 행동 인사이트로 전략의 방향을 전환',
      org:'애드레날린', period:'2024.05 – 2024.06', contrib:'기여도 60%',
      thumb:'images/mizno/4.png',
      images:[{src:'images/mizno/1.png',caption:''},{src:'images/mizno/2.png',caption:''},{src:'images/mizno/3.png',caption:''},{src:'images/mizno/4.png',caption:''},{src:'images/mizno/5.png',caption:''},{src:'images/mizno/6.png',caption:''},{src:'images/mizno/7.png',caption:''}],
      summary:'대학생 광고연합동아리 \'애드레날린\' 내 산학협력 경쟁PT. 미즈노의 러닝화 \'WAVE RIDER 27\'과 \'편안함\'이라는 키워드를 연결하여 2030 타겟의 브랜드 인지도를 높이기 위한 전략 제안',
      details:'[역할]\n팀장으로서 기획을 주도, 대부분의 디자인을 담당\n\n[전략]\nWAVE RIDER 27 러닝화가 확보해야할 타겟층을 먼저 찾고, 이들이 러닝을 자주 하지 않는 이유에 역으로 주목해 타겟층이 러닝을 즐기도록 트리거를 유발할 것을 제안\n설문조사를 통해 모수 230명 확보 후 심층 분석',
      result:'"분석과 조사가 우수하고 본래 해당 제품군이 추구하고자 했던 초기의 방향성을 잘 짚어주어 고맙다"\n→ 2위(우수상) 수상',
    },
    {
      id:'cosrx',
      title:'COSRX 경쟁PT 우수상 🏆',
      subtitle:'타깃층의 숨겨진 니즈를 찾아내 제품 USP와 연결하다',
      org:'마케팅학회 GML', period:'2022.10 – 2022.11', contrib:'기여도 60%',
      thumb:'images/cosrx/4.JPG',
      images:[{src:'images/cosrx/1.JPG',caption:''},{src:'images/cosrx/2.JPG',caption:''},{src:'images/cosrx/3.JPG',caption:''},{src:'images/cosrx/4.JPG',caption:''},{src:'images/cosrx/5.JPG',caption:''},{src:'images/cosrx/6.JPG',caption:''}],
      summary:'더마 코스메틱 브랜드 COSRX에서 퍼드 카테고리에 집중되어있는 비즈니스를 자사 신규 라인인 THE RX로 올릴 수 있는 전략을 제안',
      details:'[역할]\n팀장으로서 기획을 주도, 대부분의 디자인을 담당\n\n[전략]\n더마 코스매틱 시장에서 인지도가 미미한 제품의 성공적인 바이럴을 위해선 2030 소비자에 대한 심층 분석을 통해 숨겨진 니즈를 파악하여 제품의 USP와 연결짓는 것이 중요함을 강조\n설문조사를 통해 타깃은 특정 제품에 이미 정착한 상황이지만 사실 이에 불만족하여 잘 맞는 제품에 대한 니즈를 갖고 있었음을 파악\n이 니즈를 해당 제품이 충족시킬 수 있음을 드러냄',
      result:'"기획서의 흐름이 매우 논리적이며 탁월했다. 실제로 실행해보고 싶은 IMC가 많아 좋았다."\n→ 우수상 수상',
    },
  ],

  campaign: [
    {
      id:'galaxy',
      title:'갤럭시 스튜디오 캠퍼스 큐레이터',
      subtitle:'1,200명의 방문객을 불러온 폴더블폰 팝업스토어',
      org:'마케팅학회 GML', period:'2022.08 – 2022.10', contrib:'기여도 50%',
      thumb:'images/galaxy/1.jpg',
      images:[{src:'images/galaxy/1.jpg',caption:''},{src:'images/galaxy/2.jpg',caption:''},{src:'images/galaxy/3.jpg',caption:''},{src:'images/galaxy/4.jpg',caption:''},{src:'images/galaxy/5.jpg',caption:''},{src:'images/galaxy/6.jpg',caption:''},{src:'images/galaxy/7.jpg',caption:''},{src:'images/galaxy/8.jpg',caption:''},{src:'images/galaxy/9.jpg',caption:''},{src:'images/galaxy/10.jpg',caption:''},{src:'images/galaxy/11.jpg',caption:''},{src:'images/galaxy/12.jpg',caption:''}],
      summary:'중앙대학교 갤럭시 Z Fold/Z Flip 스튜디오를 기획 및 운영. 팀장으로서 팀(10인)을 이끌며 기획&제작&운영 총괄, 실무자와의 대외 소통 담당',
      details:'[전략]\n캠퍼스 일상 속에서 폴더블폰이 전달하고자 하는 핵심 메시지인 \'각\'을 자연스럽게 반복적으로 접하도록 유도\n\n[스튜디오 사진/영상 전시]\n\'각양각색 캠퍼스 공간\'이라는 테마를 바탕으로 캠퍼스 속 일상을 다양한 각도로 담아냄\n중앙대학교 캠퍼스와 폴더블폰 간의 자연스러운 접점을 제시하고자 함\n\n[스튜디오 체험 프로그램]\n폴더블폰의 플렉스모드, 멀티태스킹 기능 등 다양한 기능을 친구와 함께 재밌게 체험해볼 수 있도록 구성\n\n[이벤트데이 프로그램]\n캠퍼스 곳곳에 미션을 마련하여 스탬프 투어 진행\n투명필름지를 활용한 촬영 미션으로, 폴더블폰의 다양한 \'각\'을 표현할 수 있는 자세를 취하는 것이 핵심',
      result:'2주간 1,000~1,200명의 방문객\n이벤트데이 당일 경품 200개 조기소진\n실무자: "지금까지 해온 학교들 중 가장 완벽하고 체계적이다."',
    },
    {
      id:'paralympics',
      title:'패럴림픽 응원카페 캠페인 기획 및 운영',
      subtitle:'무겁고 낯선 주제를 친근하게 풀어낸 공간 기획',
      org:'애드레날린', period:'2024.06 – 2024.08', contrib:'기여도 50%',
      thumb:'images/cafe/2.jpg',
      images:[{src:'images/cafe/1.png',caption:''},{src:'images/cafe/2.jpg',caption:''},{src:'images/cafe/3.jpg',caption:''},{src:'images/cafe/4.jpg',caption:''},{src:'images/cafe/5.jpg',caption:''},{src:'images/cafe/6.jpg',caption:''},{src:'images/cafe/7.jpg',caption:''},{src:'images/cafe/8.jpg',caption:''},{src:'images/cafe/9.jpg',caption:''},{src:'images/cafe/10.jpg',caption:''},{src:'images/cafe/11.jpg',caption:''}],
      summary:'대학생 연합 광고동아리 \'애드레날린\'에서 \'패럴림픽 응원카페\' 콘셉트의 오프라인 캠페인 기획. 북카페 \'다독다독\'과 협업하여 이틀간 운영. 팀장으로서 팀(9인) 총괄',
      details:'[전략]\n낯선 주제도 재밌고 새로운 방식으로 전달하기 위해 \'생일카페 트렌드\' 차용\n\n[내용]\n곧 개최될 패럴림픽을 곧 개봉할 하나의 영화로 간주하여 영화 카페 컨셉의 공간 조성\n음료 구매자 대상으로 영화 컨셉의 컵홀더, 티코스터, 페이크 영화 티켓 제공\n영화 티켓의 뒷면에 적힌 좌석 번호로 경품을 받아갈 수 있는 럭키드로우(책갈피, 빨대, 머그컵) 진행\n엔딩크레딧(응원메시지) 작성, 퀴즈 참여 등 이벤트 참여 시에도 책갈피 등 경품 증정\n\n[역할]\n기획 및 디자인 총괄, 협업 제안, 대외 소통 담당, 발주 담당, 컵홀더 디자인',
      result:'이틀간 방문객 175명\n"좋은 캠페인 열어주어 고맙다"\n"패럴림픽에 대해 생각해볼 수 있는 귀중한 시간이었다"',
    },
  ],

  comms: [
    {
      id:'ooh-ad',
      title:'휠체어 교통약자 인식제고 옥외광고',
      subtitle:'서울역 앞에 설치된 심리적 장벽 개선 옥외광고(AI 제작)',
      org:'애드레날린', period:'2024.07 – 2024.09', contrib:'기여도 70%',
      thumb:'images/wheelchair/1.png',
      images:[{src:'images/wheelchair/1.png',caption:''},{src:'images/wheelchair/2.jpg',caption:''}],
      summary:'대학생 연합 광고동아리 \'애드레날린\' PR부 프로젝트. \'서울역공항철도15번출구, 국립극단\' 버스쉘터에 휠체어 교통약자 인식제고 옥외광고 집행. 광고 카피 기획 및 미드저니를 통한 이미지 제작',
      details:'[전략]\n휠체어의 바퀴를 \'동그라미\'로 표현하여 의인화\n\'굴러가고 싶음/굴러가기 싫음\'의 대비를 통해 그들의 자유로운 이동을 응원하고 안전한 이동에 함께해달라는 두 가지 메시지를 효과적으로 배치\n\n[핵심 인사이트]\n휠체어 교통약자의 이동권을 침해하는 교통장벽,\n특히 \'물리적 장벽\'에 비해 그간 부각되지 않은 \'심리적 장벽\'에 대해 알림',
      result:'2024.08.09 – 2024.09.08\n서울역공항철도15번출구 버스쉘터에 노출',
    },
    {
      id:'ambient',
      title:'치매환자 지문 사전등록 앰비언트 광고',
      subtitle:'시선의 이동을 유도해 반전 메시지를 전달(AI 제작)',
      org:'사이드 프로젝트', period:'2025.02', contrib:'기여도 40%',
      thumb:'images/dementia/2.png',
      images:[{src:'images/dementia/1.png',caption:''},{src:'images/dementia/2.png',caption:''}],
      summary:'\'치매 노인 지문 사전등록 제도\'의 필요성에 대해 알리는 가로로 긴 포스터를 꺾어서 기둥에 부착. QR 코드 스캔 시 지문 사전등록 안내 사이트로 연결',
      details:'[전략]\n골목 기둥에 포스터를 꺾어 부착, 시선 흐름을 활용\n처음엔 오른쪽 이미지에 시선이 머물고, 동선을 따라 왼쪽을 보며 치매 노인 실종임을 인지하게 되는 반전 구조\n귀가 시간 56시간 → 1시간 등 통계 기반 설득 정보 포함\n\n[제작]\n카피 기획 및 AI를 통한 이미지 제작',
      result:'실증 아동 이미지로 관성적 주목 유도(오른쪽) → 치매 노인 메시지로 전환(왼쪽)',
    },
  ],
};

// UMD-style export so this file works both as a browser <script> (window.PROJECTS/COMPS)
// and as a Node `require()` target for the static-page build script.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COMPS, PROJECTS };
} else if (typeof window !== 'undefined') {
  window.COMPS = COMPS;
  window.PROJECTS = PROJECTS;
}
