var case_number = 1;

var x=0;
var y=0;
var cases = 0;

const wordData =
[
    [//part1
        [
            ["agree","賛成する"],["oppose","反対する"],["advise","忠告する"],["tip","助言"],["discuss","ついて話し合う"],
            ["blame","責任があるとする"],["argue","主張する"],["claim","主張する"],["complain","文句を言う"],["offer","申し出る"],
            ["suggest","示唆する"],["recommend","推薦する"],["grateful","感謝している"],["apologize","謝る"],["excuse","言い訳をする"],
            ["celebrate","祝う"],["admire","感心する"],["impress","感銘を与える"],["award","賞"],["describe","説明する"],
            ["explain","説明する"],["communicate","意思疎通をはかる"],["express","表現する"],["promise","約束"],["information","情報"],
            ["technology","技術"],["research","研究"],["material","材料"],["artificial","人口的な"],["electric","電気の"],
            ["invent","発明する"],["discover","発見する"],["develop","発達する"],["skill","技術"],["ability","能力"],
            ["talent","才能"],["effort","努力"],["practice","練習"],["game","試合"],["achieve","達成する"],
            ["manage","何とかして〜する"],["improve","改善する"],["produce","生産する"],["create","創造する"],["establish","確立する"],
            ["save","手間を省く"],["medicine","薬"],["patient","患者"],["condition","状態"],["medical","医療の"],
            ["stress","ストレス"],["suffer","苦しむ"],["exercise","運動"],["breathe","呼吸する"],["thirsty","喉が渇いた"],
            ["physical","身体的な"],["fever","熱"],["strength","体力"],["tear","涙"],["taste","味がする"],
            ["rule","規則"],["role","役割"],["habit","習慣"],["custom","習慣"],["tradition","伝統"],
            ["society","社会"],["law","法律"],["ancestor","祖先"],["population","人口"],["native","母国の"]
            ["abroad","海外へ"],["local","地元の"],["survey","調査"],["evidence","証拠"],["value","価値"],
            ["treasure","財宝"],["fashion","流行"],["public","公共の"],["vote","投票"],["government","政府"],
            ["nation","国家"],["capital","首都"],["state","州"],["political","政治的な"],["price","価格"],
            ["cost","費用がかかる"],["sum","金額"],["budget","予算"],["fee","料金"],["fare","運賃"],
            ["bill","勘定"],["trade","貿易"],["wealth","冨"],["economy","経済"],["company","会社"],
            ["task","仕事"],["earn","稼ぐ"],["hurt","痛む"],["injure","痛める"],["damage","損害を与える"],
	    ["abroad","海外へ"]
        ],
        [
            ["abroad","海外へ"],["local","地元の"],["survey","調査"],["evidence","証拠"],["value","価値"],
            ["treasure","財宝"],["fashion","流行"],["public","公共の"],["vote","投票"],["government","政府"],
            ["nation","国家"],["capital","首都"],["state","州"],["political","政治的な"],["price","価格"],
            ["cost","費用がかかる"],["sum","金額"],["budget","予算"],["fee","料金"],["fare","運賃"],
            ["bill","勘定"],["trade","貿易"],["wealth","冨"],["economy","経済"],["company","会社"],
            ["task","仕事"],["earn","稼ぐ"],["hurt","痛む"],["injure","痛める"],["damage","損害を与える"],
            ["destroy","破壊する"],["ruin","台無しにする"],["danger","危険"],["neighbor","近所の人"],["audience","観客"],
            ["crowd","群衆"],["author","著者"],["staff","職員"],["clerk","店員"],["customer","客"],
            ["passenger","乗客"],["elderly","年配の"],["female","女性の"],["head","向かう"],["follow","後についていく"],
            ["wander","歩き回る"],["travel","旅行する"],["pass","通り過ぎる"],["likely","しそうだ"],["natural","当然の"],
            ["certain","確かな"],["probably","おそらく"],["face","直面する"],["avoid","避ける"],["solve","解決する"],
            ["trouble","問題"],["issue","問題"],["cheer","声援を送る"],["encourage","促す"],["support","支持する"],
            ["prevent","妨げる"],["deny","否定する"],["enable","可能にする"]
        ],
        [
            ["succeed","成功する"],["miss","逃す"],["fail","失敗する"],["mistake","間違い"],["check","調べる"],
            ["hide","隠す"],["draw","描く"],["join","加わる"],["throw","投げる"],["operate","操作する"],
            ["repair","修理する"],["sew","縫う"],["raise","上げる"],["serve","出す"],["pour","注ぐ"],
            ["spill","こぼす"],["pretend","フリをする"],["bahave","ふるまう"],["bear","耐える"],["explore","探検する"],
            ["happen","起こる"],["appear","現れる"],["remain","〜のままでいる"],["survive","生き残る"],["belong","所属している"],
            ["represent","代表する"],["base","基礎を置く"],["include","含む"],["contain","含む"],["own","自分自身の"],
            ["share","共有する"],["collect","集める"],["gather","集める"],["history","歴史"],["subject","教科"],
            ["education","教育"],["knowledge","知識"],["uniform","制服"],["grade","学年"],["senior","最上級生"],
            ["graduate","卒業する"],["decide","決定する"],["judge","判断する"],["quit","やめる"],["retire","引退する"],
            ["review","再検討"],["choose","選ぶ"],["imagine","想像する"],["guess","推測する"],["expect","予期する"],
            ["predict","予測する"],["remember","覚えている"],["remind","思い出させる"],["realize","理解する"],["appreciate","理解する"]
            
        ],
        [
            ["accept","受け入れる"],["consider","よく考える"],["mind","気にする"],["wonder","〜かなとお思う"],["seem","〜のように思われる"],
            ["compare","比較する"],["concentrate","集中する"],["focus","焦点を当てる"],["allow","許可する"],["admit","認める"],
            ["ground","地面"],["pollution","汚染"],["sight","光景"],["view","眺め"],["landscape","風景"],
            ["nature","自然"],["seed","種"],["plant","植物"],["bloom","咲く"],["harvest","収穫"],
            ["insect","昆虫"],["earthquake","地震"],["temperature","温度"],["degree","度"],["flood","洪水"],
            ["freeze","凍る"],["reflect","反射する"],["polite","礼儀正しい"],["rude","無礼な"],["lonely","孤独な"],
            ["lazy","怠惰な"],["strict","厳しい"],["ugly","醜い"],["intelligent","知的な"],["silly","ばかな"],
            ["nervous","あがって"],["awake","目を覚まして"],["attitude","態度"],["character","性格"],["characteristic","特徴"],
            ["feature","特徴"],["detail","詳細"],["advantage","利点"],["fault","欠点"],["quality","質"],
            ["correct","正確な"],["ideal","理想的な"],["fair","公正な"],["appropriate","適切な"],["famous","有名な"],
            ["elementary","初歩的な"],["major","主要な"],["matter","重要である"],["bright","明るい"],["brilliant","輝いている"],
            ["lively","生き生きとした"],["comfortable","快適な"],["pleasant","楽しい"],["convenient","都合が良い"],["false","誤った"]
        ],
        [
            ["terrible","ひどい"],["awful","ひどい"],["thin","薄い"],["tight","引き締まった"],["loose","ゆるい"],
            ["raw","生の"],["empty","空の"],["smooth","なめらかな"],["direct","直接的な"],["familiar","知られた"],
            ["similar","似た"],["differ","異なる"],["vary","さまざまだ"],["specific","特定の"],["common","普及した"],
            ["unusual","珍しい"],["add","加える"],["increase","増える"],["reduce","減らす"],["divide","分割する"],
            ["count","数える"],["weigh","重さがある"],["quarter","４分の１"],["lot","多くの"],["pile","積み重ね"],
            ["rate","割合"],["figure","数字"],["lack","不足"],["extra","余分な"],["ready","用意ができている"],
            ["prepare","準備をする"],["adjust","慣れる"],["apply","当てはまる"],["suit","適している"],["case","場合"],
            ["scene","場面"],["chance","機会"],["opportunity","機会"],["experience","経験"],["time","時間"],
            ["spring","春"],["minute","分（時間の）"],["period","時代"],["generation","世代"],["anniversary","記念日"],
            ["recently","最近"],["used","以前は"],["early","早く"],["first","第１の"],["latest","最新の"],
            ["modern","現代の"]
        ],
        [
            ["latter","後半の"],["spend","を費やす"],["delay","遅らせる"],["borrow","借りる"],["lend","貸す"],
            ["rent","借りる"],["provide","供給する"],["shelf","棚"],["board","板"],["garbage","ゴミ"],
            ["item","品物"],["wheel","車輪"],["note","メモ"],["present","プレゼント"],["stuff","もの"],
            ["string","ひも"],["leisure","余暇"],["diet","食事"],["furniture","家具"],["refrigerator","冷蔵庫"],
            ["traffic","交通"],["jam","渋滞"],["sell","売る"],["pay","支払う"],["wear","身につけている"],
            ["clothes","服"],["marry","結婚する"],["greet","挨拶する"],["order","注文する"],["room","部屋"],
            ["story","階"],["site","用地"],["yard","庭"],["bottom","底"],["line","列"],
            ["row","列"],["background","背景"],["direction","方向"],["art","芸術"],["culture","文化"],
            ["cartoon","漫画"],["novel","小説"],["instrument","楽器"],["tune","曲"],["sentence","文"],
            ["article","記事"],["passage","一節"],["vocabulary","語彙"],["rumor","うわさ"],["spell","つづる"],
            ["pronounce","発音する"],["sign","兆候"],["mean","意味する"],["publsh","出版する"],["display","展示する"]
        ],
        [
            ["trust","信頼する"],["depend","次第である"],["rely","頼る"],["pray","祈る"],["beg","嘆願する"],
            ["prefer","好む"],["weep","しくしく泣く"],["hote","嫌う"],["worry","心配をする"],["anxious","心配して"],
            ["satisfy","満足させる"],["annoy","いらだたせる"],["bother","面倒をかける"],["disturb","迷惑をかける"],["frighten","おびえさせる"],
            ["upset","動揺させる"],["regret", "後悔する"], ["favor", "親切な行為"], ["interest", "関心"], ["pity", "残念なこと"],
            ["due","が原因で"],["reason","理由"],["result","結果"],["effect","効果"],["influence","影響"],
            ["cause","引き起こす"],["affect","影響を与える"],["way","方法"],["manner","方法"],["purpose","目的"],
            ["sake","ため"],["right","ちょうど"],["complete","完全な"],["hardly","ほとんど〜ない"],["nearly","ほとんど"],
            ["partly","ある程度"],["actually", "実は"], ["indeed", "実際に"], ["even","さえも"], ["exactly","正確に"],
            ["gradually","徐々に"],["therefore","それゆえに"],["instead","代わりに"],["until","〜まで"],["besides","〜に加えて"],
            ["except","〜を除いて"]
        ]
    ],

    [//part2
        [
            ["debate","討論"], ["criticize","批判する"], ["accuse","非難する"], ["insist","言い張る"], ["object","反対する"], 
            ["protest","抗議する"], ["controversial","論争を招く"], ["bound","きっと〜"], ["bet","きっと〜だと思う"], ["congratulate","祝う"], 
            ["praise","褒める"], ["honor","栄誉"], ["chat","おしゃべりする"], ["refer","言及する"], ["mention","〜について述べる"], 
            ["convey","伝える"], ["emphasize","強調する"], ["exaggerate","誇張する"], ["reply","返事をする"], ["respond","返答する"], 
            ["whisper","ささやく"], ["remark","発言"], ["observe","観察する"], ["theory","理論"], ["analysis","分析"], 
            ["experiment","実験"], ["device","装置"], ["phenomenon","現象"], ["substance","物質"], ["chemical","化学物質"], 
            ["fuel","燃料"], ["nuclear","原子力の"], ["statistics","統計"], ["pursue","追求する"], ["accomplish","やり遂げる"], 
            ["overcome","克服する"], ["fulfill","果たす"], ["devote","ささげる"], ["aim","狙う"], ["challenge","難問"], 
            ["trial","試み"], ["dizzy","めまいがして"], ["pale","青白い"], ["appetite","食欲"], ["starve","とてもお腹が空いている"], 
            ["mental","精神の"], ["rest","休憩"], ["ache","痛み"], ["surgery","手術"], ["disease","病気"], 
            ["symptom","病状"], ["cancer","がん"], ["ambulance","救急車"], ["recover","回復する"], ["sore","痛い"], 
            ["swell","腫れる"], ["cough","咳をする"], ["bleed","出血する"]
        ],
        [
            ["faint","かすかな"], ["exhaust","疲れ果てさせる"], 
            ["cure","治療する"], ["disabled","障害のある"], ["stiff","凝った"], ["muscle","筋肉"], ["tongue","舌"],
            ["sense","感覚"], ["sweat","汗"], ["nationality","国籍"], ["citizen","市民"], ["civil","市民の"],
            ["racial","人種の"], ["domestic","国内の"], ["rural","田舎の"], ["suburb","郊外"], ["border","国境"],
            ["burden","重荷"], ["impact","影響"], ["status","地位"], ["equal","等しい"], ["relationship","関係"],
            ["reputation","評判"], ["trend","風潮"], ["service","事業"], ["religion","宗教"], ["moral","道徳的な"],
            ["standard","基準"], ["prosperity","繁栄"], ["crisis","危険"], ["prejudice","偏見"], ["discrimination","差別"],
            ["charity","慈悲"], ["benefit","恩恵"], ["welfare","福祉"], ["community","社会"], ["individual","個人"],
            ["official","役人"], ["immigrant","移民"], ["volunteer","ボランティア"], ["contribute","貢献する"], ["abolish","廃止する"],
            ["impose","課す"], ["access","利用する権利"], ["duty","義務"], ["compulsory","義務的な"], ["responsible","責任がある"],
            ["policy","政策"], ["elect","選ぶ (選挙で)"], ["industry","工業"], ["income","収入"], ["profit","利益"],
            ["tax","税金"], ["expense","費用"], ["debt","借金"], ["deposit","預金"], ["charge","料金"],
            ["wage","賃金"], ["recession","不況"], ["consume","消費する"], ["waste","浪費する"], ["invest","投資する"]
        ],
        [
            ["import","輸入する"], ["financial","財政的な"], ["hire","雇う(一時的)"], ["employ","雇う"], ["resign","辞職する"],
            ["qualify","資格がある"], ["assign","割り当てる"], ["occupation","職業"], ["career","職業(経歴)"], ["profession","職業"],
            ["unemployment","失業"], ["document","書類"], ["department","部門"], ["branch","支店"], ["retail","小売り"],
            ["system","組織"], ["structure","構造"], ["architecture","建築"], ["construction","建設"], ["function","機能"],
            ["surface","表面"], ["aspect","側面"], ["edge","端"], ["consist","構成される"], ["compose","構成する"],
            ["attach","くっつける"], ["connect","つなげる"], ["relate","関連づける"], ["associate","関連づける"], ["stick","貼り付ける"],
            ["separate","引き離す"], ["thief","泥棒"], ["crime","犯罪"], ["motive","動機"], ["punish","罰する"],
            ["violate","違反する"], ["legal","合法の"], ["enemy","敵"], ["compete","競争する"], ["defeat","打ち負かす"],
            ["victim","犠牲者"], ["obstacle","障害"], ["harm","害"], ["invade","侵害する"], ["endanger","危険にさらす"],
            ["interrupt","中断する"], ["spoil","台無しにする"], ["spectator","観客"], ["relative","親戚"], ["enter","入る"],
            ["accompany","一緒に行く"], ["departure","出発"], ["destination","目的地"], ["transportation","交通機関"], ["via","経由で"],
            ["lead","至る"], ["rise","上がる"], ["lower","下げる"], ["flow","流れる"], ["burst","破裂する"],
            ["crack","割れる"], ["melt","溶ける"]
        ],
        [
            ["progress","進歩"], ["advance","進歩"], ["deal","扱う"],
            ["handle","~を扱う"], ["cope","対処する"], ["treat","〜を扱う"], ["clue","手がかり"], ["restrict","制限する"],
            ["limit","を制限する"], ["forbid","禁じる"], ["ban","禁止"], ["refuse","断る"], ["reject","拒絶する"],
            ["persuade","説得して~させる"], ["convince","確信させる"], ["inspire","奮起させる"], ["discourage","やる気をなくさせる"], ["promote","促進する"],
            ["expand","拡大する"], ["extend","延長する"], ["broaden","〜を広げる"], ["spread","~を広げる"], ["tie","縛る"],
            ["bind","結びつける"], ["fasten","〜固定する"], ["fix","~を固定する"], ["install","設置する"], ["resist","我慢する"],
            ["obey","従う"], ["engage","従事する"], ["bump","ぶつかる"], ["crash","激突する"], ["bend","身をかがめる"],
            ["hug","抱きしめる"], ["stare","じっと見つめる"], ["gaze","見つめる"], ["glance","ちらりと見る"], ["glimpse","〜がちらりと見える"],
            ["stretch","伸ばす"], ["stumble","つまづく"], ["press","押す"], ["drag","引きづる"]
        ],
        [
            ["lean","寄りかかる"],
            ["scratch","~をひっかく"], ["bow","おじぎする"], ["nod","うなずく"], ["sigh","ため息をつく"], ["yawn","あくびをする"],
            ["bury","~を埋める"], ["perform","~を遂行する"], ["adopt","~を採用する"], ["escape","逃れる"], ["scatter","~をまき散らす"],
            ["fold","~を折る"], ["hang","~を掛ける"], ["release","~を解放する"], ["strike","~を打つ"], ["beat","〜を打つ"],
            ["protect","~を守る"], ["twist","~を曲げる"], ["stir","を混ぜる"], ["shake","~を振る"], ["burn","焼ける"],
            ["skip","~をサボる"], ["expose","~をさらす"], ["dip","~をつける"], ["polish","~を磨く"], ["cheat","ごまかす"],
            ["attend","~に出席する"], ["participate","参加する"], ["imitate","~をまねる"], ["exist","存在する"], ["arise","生じる"],
            ["occur","生じる"], ["generate","を生み出す"], ["involve","巻き込まれる"], ["require","~を必要とする"], ["counterpart","対応する"],
            ["maintain","~を維持する"], ["last","続く"], ["persist","持続する"], ["gain","~を増す"], ["obtain","を得る"],
            ["acquire","~を習得する"]
        ],
        [
            ["examine","~を調査する"], ["search","を捜す"], ["reunion","同窓会"], ["scholarship","奨学金"],
            ["logic","論理"], ["instruction","指示"], ["determine","~を決める"], ["conclude","~と結論を下す"], ["distinguish","~を区別する"],
            ["classify","~を分類する"], ["estimate","~を推定する"], ["select","~を選ぶ"], ["organize","~をまとめる"], ["recognize","~が誰だかわかる"],
            ["suppose","~することになっている"], ["assume","~と思い込む"], ["care","気にする"], ["doubt","~を疑う"], ["notice","~に気がついている"],
            ["aware","気づいている"], ["conscious","意識している"], ["concerned","関心を持っている"], ["regard","'A'を'B'とみなす"], ["commit","~に専念する"],
            ["memorize","~を暗記する"], ["approve","認める"], ["forgive","~を許す"], ["grant","~を認める"], ["recall","~を思い出す"],
            ["abandon","~を捨てる"], ["rid","~を処分する"], ["eliminate","~を排除する"], ["relieve","~を取り除く"], ["remove","〜を取り除く"],
            ["resource","資源"], ["conservation","保護"], ["preserve","~を保護する"], ["disaster","災害"], ["planet","惑星"],
            ["environment","環境"]
        ],
        [
            ["horizon","水平線"], ["agriculture","農業"], ["crop","作物"], ["soil","土"],
            ["weed","雑草"], ["drown","溺れ死ぬ"], ["leak","漏れる"], ["climate","気候"], ["atmosphere","大気"],
            ["forecast","予報"], ["thermometer","温度計"], ["humid","湿気が多い"], ["tropical","熱帯の"], ["solar","太陽の"],
            ["mosquito","蚊"], ["species","種"], ["extinct","絶滅した"], ["feed","~に餌を与える"], ["energetic","活発な"],
            ["greedy","貪欲な"], ["brave","勇敢な"], ["generous","気前の良い"], ["intellectual","知的な"], ["curious","好奇心が強い"],
            ["imaginative","想像力豊かな"], ["talkative","おしゃべりの"], ["afford","~する余裕がある"], ["eager","熱心な"], ["selfish","利己的な"],
            ["aggressive","攻撃的な"], ["cruel","残酷な"], ["addicted","~の中毒になっている"], ["stubborn","頑固な"], ["earnest","真面目な"],
            ["bold","大胆な"], ["guilty","申し訳なく思う"], ["innocent","無実の"], ["sincere","誠実な"], ["modest","謙虚な"],
            ["stupid","ばかな"], ["indifferent","無関心で"], ["punctual","時間を守る"], ["coward","臆病者"], ["precise","正確な"],
            ["accurate","正確な"], ["proper","適切な"]
        ],
        [
            ["tidy","きちんとした"], ["neat","きちんとした"], ["efficient","能率的な"],
            ["reasonable","理にかなった"], ["significant","重要な"], ["precious","貴重な"], ["essential","不可欠な"], ["fundamental","根本的な"],
            ["critical","重大な"], ["serious","深刻な"], ["complex","複雑な"], ["complicated","複雑な"], ["delicate","繊細な"],
            ["plain","明白な"], ["obvious","明白な"], ["remarkable","注目すべき"], ["outstanding","傑出した"], ["various","さまざまな"],
            ["diverse","多様な"], ["sort","種"], ["fancy","高級な"], ["marvelous","驚くべき"], ["fabulous","とても素敵な"],
            ["active","積極的な"], ["positive","前向きな"], ["pure","純粋な"], ["steady","着実な"], ["flexible","柔軟な"],
            ["ripe","熟した"], ["mature","成熟した"], ["stable","安定した"], ["negative","否定的な"], ["vague","曖昧な"],
            ["weird","変な"], ["rough","粗い"], ["severe","厳しい"], ["passive","受動的な"], ["vain","無駄に"],
            ["fake","偽の"], ["risky","危険な"], ["absurd","ばかげた"], ["odd","奇妙な"], ["contrast","対比"],
            ["valid","妥当な"]
        ],
        [
            ["available","手に入る"], ["casual","気楽な"], ["rare","珍しい"], ["practical","現実的な"],
            ["brand-new","新品の"], ["rapid","急速な"], ["urgent","緊急の"], ["sharp","急激な"], ["calm","落ち着いた"],
            ["shallow","浅い"], ["bare","むき出しの"], ["naked","裸の"], ["independent","独立した"], ["tense","張り詰めた"],
            ["broad","幅広い"], ["narrow","狭い"], ["vacant","空いている"], ["vivid","鮮明な"], ["mutual","相互の"],
            ["awkward","ぎこちない"], ["objective","客観的な"], ["manual","手を使う"], ["alike","似ている"], ["tend","~する傾向にある"],
            ["deserve","~に値する"], ["fragment","破片"], ["ease","簡単さ"], ["range","範囲"], ["scale","規模"],
            ["unique","特有の"], ["particular","ある特定の"], ["general","一般的な"], ["ordinary","平凡な"], ["typical","典型的な"],
            ["account","占める"], ["calculate","~を計算する"], ["measure","~を測る"], ["split","~を割る"], ["volume","容積"],
            ["proportion","比率"], ["dozen","ダース"], ["amount","量"], ["mass","大量"]
        ],
        [
            ["shortage","不足"],
            ["enormous","莫大な"], ["spare","余分な"], ["arrange","~を手配する"], ["adapt","適応する"], ["match","~と調和する"],
            ["fit","に合う"], ["emergency","緊急事態"], ["occasion","場合"], ["circumstance","状況"], ["incident","出来事"],
            ["current","最新の"], ["temporary","一時的な"], ["permanent","永久的な"], ["previous","前の"], ["former","前者"],
            ["annual","年に1度の"], ["contemporary","現代の"], ["lately","最近"], ["immediately","すぐに"], ["supply","~を供給する"],
            ["replace","~に取って代わる"], ["exchange","~を交換する"], ["substitute","~の代わりに~を用いる"], ["submit","を提供する"], ["alternative","代わりのもの"],
            ["deliver","~を配達する"], ["enclose","~を同封する"], ["envelope","封筒"], ["trick","いたずら"], ["load","荷"],
            ["content","中身"], ["routine","日課"], ["household","所帯"], ["good","商品"], ["luxury","高級"],
            ["credit","クレジット,信頼"], ["questionnaire","アンケート"], ["reservation","予約"]
        ],
	[
            ["applause","拍手"],["fuss","大騒ぎ"],["reward","報酬"],["farewell","別れ"],["reception","もてなし,歓迎会"],
            ["hospitality","もてなし,歓迎"],["portion","1盛り"],["laundry","洗濯"],["stain","シミ"],["dye","~を染める"],
            ["outlet","コンセント"],["nap","昼寝"],["wake","目が覚める"],["vending-machine","自動販売機"],["grocery","食料雑貨店"],
            ["appointment","予約"],["consult","~に相談する"],["register","~を登録する"],["subscribe","定期購読する"],["guarantee","~を保証する"],
            ["wipe","~を拭く"],["sweep","~を掃く"],["transfer","乗り換える"],["divorce","離婚する"],["fate","運命"],
            ["destiny","運命"],["flavor","風味"],["perfume","香り"],["ingredient","材料"],["tender","柔らかい"],
            ["bitter","苦い"],["aisle","通路"],["track","足跡"],["district","地区"],["facility","施設"],
            ["basement","地下"],["height","高さ"],["distant","遠い"],["remote","へんぴな"],["locate","~に位置している"],
            ["occupy","~を占める"],["surround","~を取り囲む"],["classical","クラシックの"]
        ],
        [
            ["civilization","文明"],["heritage","遺産"],["script","台本"],["tale","話"],["literature","文学"],
            ["tragedy","悲劇"],["poetry","詩"],["biography","伝記"],["term","用語"],["proverb","ことわざ"],
            ["fluent","流暢な"],["translate","~を翻訳する"],["define","~を定義する"],["interpret","~を解釈する"],["quote","~を引用する"],
            ["literally","文字どおりに"],["indicate","~を示す"],["reveal","~を明らかにする"],["announce","~を発表する"],["broadcast","~を放送する"],
            ["prove","~を証明する"],["advertise","~を宣伝する"],["seek","~を求める"],["entertain","~を楽しませる"],["amuse","〜を楽しませる"],
            ["attract","~を引きつける"],["fascinate","~を魅了する"],["absorb","~に没頭する"],["fond","好きで"],["scare","~をおびえさせる"],
            ["alarm","~をぎょっとさせる"],["amaze","~を驚かせる"],["irritate","~をいらいらさせる"],["puzzle","~を当惑させる"],["confuse","~を混乱させる"],
            ["bore","~をうんざりさせる"],["frustrate","~を欲求不満にさせる"],["disappoint","~を失望させる"],["embarrass","~に恥ずかしい思いをさせる"],["ashamed","恥ずかしい"],
            ["uneasy","不安な"],["hesitate","ためらう"]
        ],
	[
	    ["reluctant","気が進まない"],["tremble","震える"],["boast","自慢する"],["jealous","嫉妬した"],["envy","~を羨ましく思う"],
	    ["yell","叫ぶ"],["respect","(人)を尊敬する"],["despair","絶望"],["emotion","感情"],["sympathy","同情"],
	    ["shame","残念なこと"],["ambition","願望"],["confidence","自信"],["courage","勇気"],["ignore","(人)を無視する"],
	    ["owe","~は~のおかげだ"],["fear","恐怖"],["method","方法"],["medium","手段"],["means","手段"],
	    ["extent","程度"],["extremely","極度に"],["total","全体の"],["largely","大部分は"],["moderate","適度な"],
	    ["somewhat","いくぶん"],["subtle","かすかな"],["possibly","ひょっとすると"],["eventually","最終的に"],["necessarily","必ずしも"],
	    ["frankly","率直に"],["ironically","皮肉なことに"],["moreover","その上"],["otherwise","さもなければ"],["regardless","無関係に"],
	    ["worth","~の価値がある"],["according-to","~によれば"]
        ]
    ]
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//object収納用
var object = [];

//class
class word {
    constructor (name,english,japanese,part,range) {
        this.name = name;
        this.japanese = japanese;
        this.english = english;
        this.part = part;
        this.range = range;
        this.result = 'none';
        this.pronounce = 'https://www.google.com/search?rlz=1C5CHFA_enJP892JP892&sxsrf=ALeKk00q8VFxTZwYwqx8jw6cM6r5cc74hQ%3A1598150874115&ei=2thBX8fKBs-JoAT_6LX4DA&q='+english+'+発音';
    }

    //正解、不正解を0,1で判断　▶　変更
    change_result (respons){
        if(respons === 0){
            this.result = 'mistake';
        }else if(respons === 1){
            this.result = 'correct';
        }else {
            this.result = 'none';
        }
    }
}

//---------------------------------------wordData ▶ class
//単語番号設定用
var number = 0;
//範囲指定用
var hanni = [];
var Part = [];

//Part回数分
for (var v=0; v < wordData.length; v++) {

    var part_range2 = [];
    var partsample = ("Part")+(v+1);

    //Part内の配列分
    for (var vv = 0; vv < wordData[v].length; vv++) {

        //二次元配列化のための配列
        var part_range = [];

        //範囲の最小値の設定
        var minimamu = 0;

        //範囲内の最大値を取得
        var range_max = wordData[v][vv].length - 1;

        //範囲内の単語の数分
        for(var vvv = 0; vvv < wordData[v][vv].length; vvv++){
            //単語ナンバーの更新
            number+=1;
            //numに入れ替える

            //範囲の最小値の設定
            if(minimamu === 0) {
                part_range[0] = number;
                minimamu++;
            }

            //範囲設定用　(もし、範囲内の最大値 = 現在扱っている単語　ならば　配列に単語番号を追加)
            if(range_max === vvv){
                part_range[1] = number;
            }

            //objectに単語を追加
            object[number] = new word(number,wordData[v][vv][vvv][0],wordData[v][vv][vvv][1],(v+1),(vv+1));
        }

        //part_rangeをrange配列に追加
        part_range2.push(part_range);
    }

    hanni.push(part_range2);
    Part.push(partsample);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var words = [];

//questionの中身を生成
make_array(1,object.length-1);

function make_array (Min,Max) {
    //questionのリセット
    words = [];
    var count = 1;

    for (var n=Min; n <= Max; n++) {
        //サンプル
        var sample = [];
    
        //contentを生成
        sample[0] = object[n].english;
        sample[1] = object[n].japanese;
        sample[2] = object[n].name;
    
        //questionへ追加
        words.push(sample);
        
        //count
        count++;
    }
}


//隠しコマンド
function DrawAll() {
  console.log(words);
  console.log(object);
  alert("隠しコマンドが入力されました。\nソフトのデータをコンソール内に表示します。");
}

//footer
$(".main_b").click(function(){
  shadow();
  $(".main_b").css("box-shadow","0 0 5px 2px rgba(69, 69, 201, 0.39)");
  $(".page1").css("display","block");
  home1();
  home2();
  words = old_words;
});

$(".card_b").click(function(){
  shadow();
  $(".card_b").css("box-shadow","0 0 5px 2px rgba(69, 69, 201, 0.39)");
  $(".page2").css("display","block");
  home1();
  home2();
  words = old_words;
});

$(".list_b").click(function(){
  shadow();
  $(".list_b").css("box-shadow","0 0 5px 2px rgba(69, 69, 201, 0.39)");
  $(".page3").css("display","block");
  home1();
  home2();
  words = old_words;
});

function shadow() {
  $(".main_b").css("box-shadow","none");
  $(".card_b").css("box-shadow","none");
  $(".list_b").css("box-shadow","none");
  $(".page1").css("display","none");
  $(".page2").css("display","none");
  $(".page3").css("display","none");
}

//part選択
for(var i=0; i<Part.length; i++){
  $(".parts_1").append(
    '<section class="select_list main_2_'+(i+1)+' p2">'+
    '<p><i class="fas fa-angle-double-right"></i><span>'+Part[i]+'</span></p>'+
    '</section>'
  );
  $(".main_3").append('<div class="row select_1_'+(i+1)+'" style="display: none;"></div>');
}

for(var i=0; i<Part.length; i++){
  $(".parts_2").append(
    '<section class="select_list card_2_'+(i+1)+' p5">'+
    '<p><i class="fas fa-angle-double-right"></i><span>'+Part[i]+'</span></p>'+
    '</section>'
  );
  $(".card_3").append('<div class="row select_2_'+(i+1)+'" style="display: none;"></div>');
}

/*$(".select").append(
    '<section id="g1_3_'+(i+1)+'" class="g1_3b select_list">'+
    	'<p><i class="fas fa-angle-right"></i>'+hanni[i][0]+'〜'+hanni[i][1]+'</p>'+
		'</section>'
  );*/

//範囲の選択
for(var i=0; i<hanni.length ; i++){
  for(var ii=0 ; ii < hanni[i].length ; ii++){
    $(".select_1_"+(i+1)).append(
      '<section class="select_list p3" onclick="x = '+hanni[i][ii][0]+'; y = '+hanni[i][ii][1]+';">'+
        '<p><i class="fas fa-angle-right"></i>'+hanni[i][ii][0]+'〜'+hanni[i][ii][1]+'</p>'+
      '</section>'
    );
  }
}

for(var i=0; i<hanni.length ; i++){
  for(var ii=0 ; ii < hanni[i].length ; ii++){
    $(".select_2_"+(i+1)).append(
      '<section class="select_list p6" onclick="x = '+hanni[i][ii][0]+'; y = '+hanni[i][ii][1]+';">'+
        '<p><i class="fas fa-angle-right"></i>'+hanni[i][ii][0]+'〜'+hanni[i][ii][1]+'</p>'+
      '</section>'
    );
  }
}

//グラフ
function chart ( maru , batu){
  new Chart(document.getElementById("myChart"), {
    type: "doughnut",
    data: {
      labels: ["正解", "不正解"],
      datasets: [
        {
          data: [maru,batu],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)"
          ]
        }
      ]
    }
  });
}

//---------------------------------------------------------------------------------------------
//ボタン操作
$(".p1").click(function(){
  $(".main_1").css("display","none");
  $(".main_2").css("display","block");
});

$(".p2").click(function(){
  $(".main_2").css("display","none");
  $(".main_3").css("display","block");
});

$(".p4").click(function(){
  $(".card_1").css("display","none");
  $(".card_2").css("display","block");
});

$(".p5").click(function(){
  $(".card_2").css("display","none");
  $(".card_3").css("display","block");
});

//partが増えた際は、必ずここを編集して下さい。-------------------------------------------------------
$(".main_2_1").click(function(){$(".select_1_1").css("display","block");});
$(".main_2_2").click(function(){$(".select_1_2").css("display","block");});

//ホームに戻るボタン
$(".home1").click(function(){
  home1();
});

$(".home2").click(function(){
  home2();
});

function home1 (){
  x=0;
  y=0;
  ok=		0;
	i=		0;
  result=	0;
  $(".main_2").css("display","none");
  $(".main_3").css("display","none");
  $(".main_4").css("display","none");
  $(".main_5").css("display","none");
  $(".main_1").css("display","block");
  new_words = [];
  random=	0;
	 i1=		0;
	 answer=	0;
	 select1=	0;
	 select2=	0;
	 num=		0;
	 iq=		0;
	 iq2=		0;
	 random7=	0;
	 push=	0;
	 num7=   [];
	 i9=		0;
	 ver=		0;
	 n = 		0;
	 $("#check").	text("問：sample text");
	 $("#PN").	text("0");
	 $("#QN").	text("0");
   $("#WN").	text("0");
   document.form.reset();
   cases = 0;
   words = old_words;
   for(var iii = 0; iii < Part.length; iii++ ){
    $(".select_1_"+(iii+1)).css("display","none");
   }
}

function home2 (){
  x=0;
  y=0;
  ok=		0;
  i=		0;
  ii = 0;
  now = 0;
  is = 0;
  $(".card_2").css("display","none");
  $(".card_3").css("display","none");
  $(".card_4").css("display","none");
  $(".card_1").css("display","block");
  cases = 0;
  $('main.card_main').html('');
  for(var iii = 0; iii < Part.length; iii++ ){
    $(".select_2_"+(iii+1)).css("display","none");
   }
}

var japanese = 3;
var english  = 3;

var color1;
var color2;


$(".card_1_1").click(function() {
  japanese = 1;
  english  = 0;
  color1 = "red";
  color2 = "black";
});

$(".card_1_2").click(function() {
  japanese = 0;
  english  = 1;
  color1 = "black";
  color2 = "red";
});

$(".card_2_1").click(function(){$(".select_2_1").css("display","block");});
$(".card_2_2").click(function(){$(".select_2_2").css("display","block");});

$(".p3").click(function(){
  $(".main_3").css("display","none");
  $(".main_4").css("display","block");
  cases=1;
});

$(".p6").click(function(){
  $(".card_3").css("display","none");
  $(".card_4").css("display","block");
  pre();
  cases=2;
  setTimeout(p6(),0);
});

function p6(){
  $(".now").text(now + 1);
  $("main.card_main").css("display","block");
  $("main.card_main").css("transform","rotateX(0deg)");
}


//内部リンク時の処理---------------------------------------------------------------
$(function(){
	$('a[href^="#"]').click(function(){
	  //スクロールのスピード
	  var speed = 500;
	  //リンク元を取得
	  var href= $(this).attr("href");
	  //リンク先を取得
	  var target = $(href == "#" || href == "" ? 'html' : href);
	  //リンク先までの距離を取得
	  var position = target.offset().top;
	  //スムーススクロール
	  $("html, body").animate({scrollTop:position}, speed, "swing");
	  return false;
	});
  });
  
  //リセットボタンの処理-------------------------------------------------------------
  function clearh	(){document.location.reload();}
  function re	(){setInterval( clearh , 500);}
  
  //------------------------------------------------------------------------------
  console.log("javascriptは有効です");
  
   //もう一度ボタンーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  $(".reset").click(function () {
	  more();
	  ques = question3;
	  $(".step1").fadeOut();
	  $(".step2").fadeOut();
	  $(".step3").fadeOut();
	  $(".box_Q").fadeOut();
	  $(".result").fadeOut();
	  setTimeout('hid();',500);
    setTimeout('$(".step1").fadeIn();',500);
    location.reload();
  });
  
  function hid() {
	  $(".p0,.p1,.p2").css('display','none');
  }
  
  $(".more").click(function (){
	  more();
    $(".main_5").css("display","none");
    $(".main_4").css("display","block");
  });
  
   function more ()
   {
	 ok=		0;
	 i=		0;
	 result=	0;
	 random=	0;
	 i1=		0;
	 answer=	0;
	 select1=	0;
	 select2=	0;
	 num=		0;
	 iq=		0;
	 iq2=		0;
	 random7=	0;
	 push=	0;
	 num7=   [];
	 i9=		0;
	 ver=		0;
	 n = 		0;
	 $("#check").	text("問：sample text");
	 $("#PN").	text("0");
	 $("#QN").	text("0");
   $("#WN").	text("0");
   document.form.reset();
   var canvas = document.getElementById("myChart");
   var ctx = canvas.getContext('2d');
   ctx.clearRect(0, 0, canvas.Width, canvas.Height);
   }


  //間違えた問題のみの処理
  const old_words = words;
  var new_words = [];


  $(".only").click(function (){
    words = new_words;
    console.log(words[0][0] );
    x = 1;
    y = new_words.length;
    console.log(x,y);
    ques = question2;
    more();
    $(".main_5").css("display","none");
    $(".main_4").css("display","block");
    setTimeout(function(){new_words = [];},10);
  });
  
  //ボタンを押した時の処理ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  let ques = question3;
  let ur = "ここで発音を確認できます。";
  let url = 'https://www.google.com/search?rlz=1C5CHFA_enJP892JP892&sxsrf=ALeKk00q8VFxTZwYwqx8jw6cM6r5cc74hQ%3A1598150874115&ei=2thBX8fKBs-JoAT_6LX4DA&q='+ur+'+発音';
  
  

  $("#ano").click(function (){
	  window.open(url);
  });

  $("#hin").click(function (){
    alert("ヒント(先頭二文字)： "+ur.slice(0,2));
  });

  //採点ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  var i = 0;
  function checking ()
  {
	  if (i==0){
		  i++;
		  ques();
	  }else if (i==1) {
		  i--;
		  getValue();
	  }
  }

  //採点関数ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  let ok=		0;
  let result=	0;
  let $check = 	$("#check");
  let $PN = 	$("#PN");
  let before_text;
  function getValue()
  {
    // value値を取得する
    before_text = document.getElementById("form").value;
    result = before_text.toLowerCase();
    console.log(result);
	  // 表示する
	  if(result　==　answer)
	  {
		  ok++;
		  $check.text("⭕️正解です");
      $PN.text((Math.floor((ok/i1)*100)));
	  }else if(result !==　answer)
	  {
		  $check.text("❌"+"正解は　"+answer+"　です");
      $PN.text((Math.floor((ok/i1)*100)));
      new_words.push([ur,ja]);
	  }
  }
  //問題表示関数ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  let random=	0;
  let i1=		0;
  let answer=	0;
  let select1=	0;
  let select2=	0;
  let num=	0;
  function select()
  {
	  select1=x;
	  select2=y;
  }
  
  //問題を順番に表示する関数ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  let iq=0;
  function question2()
  {
    select();
	  if(iq+select1>select2)
	  {
      $(".result_1").text((Math.floor((ok/i1)*100))+"%");
      $(".result_2").text(ok);
      $(".result_3").text((select2 - select1 + 1) - ok);

      $(".main_4").css("display","none")
      $(".main_5").css("display","block")
      chart(ok,(select2 - select1 + 1)-ok);
		  return false;
	  }
	  let num2=iq+select1;
	  iq++;
	  i1++;
	  $("#QN").text(i1);
	  $("#check").text("問："+words[num2-1][1]);
    ur = words[num2-1][0];
    ja = words[num2-1][1];
	  url = 'https://www.google.com/search?rlz=1C5CHFA_enJP892JP892&sxsrf=ALeKk00q8VFxTZwYwqx8jw6cM6r5cc74hQ%3A1598150874115&ei=2thBX8fKBs-JoAT_6LX4DA&q='+ur+'+発音';
	  $("#WN").text((num2));
	  answer = words[num2-1][0];
	  document.form.reset();
  }
  
  //問題を重複なしにランダムに表示する関数ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  let iq2=0;
  function question3 (){
	  select();
	  num=select2-select1+1;
	  iq2++;
	  if(iq2+select1-1>select2)
	  {
      $(".result_1").text((Math.floor((ok/i1)*100))+"%");
      $(".result_2").text(ok);
      $(".result_3").text((select2 - select1 + 1) - ok);

      $(".main_4").css("display","none")
      $(".main_5").css("display","block")
      chart(ok,(select2 - select1 + 1)-ok);
		  return false;
	  }
	  i1++;
	  norandom();
	  $("#QN").text(i1);
	  $("#check").text("問："+words[random7][1]);
    ur = words[random7][0];
    ja = words[random7][1];
	  url = 'https://www.google.com/search?rlz=1C5CHFA_enJP892JP892&sxsrf=ALeKk00q8VFxTZwYwqx8jw6cM6r5cc74hQ%3A1598150874115&ei=2thBX8fKBs-JoAT_6LX4DA&q='+ur+'+発音';
	  $("#WN").text((random7+1));
	  answer = words[random7][0];
	  document.form.reset();
  }
  
  //重複なしのランダム
  
  let random7=0;
  let push=	0;
  let num7=  [];
  let i9=		0;
  let ver=	0;
  let n = num7.length;
  function norandom()
  {
	  randomnum();
	  function randomnum()
	  {
		  push +=1
		  random7 = Math.floor( Math.random() * num)+select1-1;
		  for(i9=0 ; i9<=num7.length ; i9++)
		  {
			  if(num7.length==num)
			  {
				  return false;
			  }
			  if(num7[i9]==random7)
			  {
				  randomnum();
				  return false;
			  }
		  }
		  num7.push(random7);
	  }
  }

  //カード----------------------------------------------------------------------------------------------
//高さの指定
var main_height = window.innerHeight;
$('main').css("min-height",main_height);

//処理
/*
var x = 1;
var y = 100;*/

function pre() {
  for (var is=0; is < (y - x)+1 ; is++){
    $('main.card_main').append('<div class="box page" id="page'+(is)+'"><h1 class="text" id="text'+(is)+'" style="color: '+color2+';">'+words[x+is-1][japanese]+'</h1></div>');
    if(is>0){
      $('div#page'+(is)).css("display","none");
    }
  }
}

//進む、戻る、裏返す
var now =0;
var ii = 0;
const speed2 = 300;

//切り替え
function draw_after(){
    $("div#page"+(now - 1)).css("display","none");
    $("h1#text"+(now - 1)).text(words[x+now-2][japanese]);
    $("main.card_main").css("transform","rotateY(0deg)");
    $("div#page"+now).css("display","block");
    ii=0;
    $(".now").text(now + 1);
    $("h1#text"+now).css("color",color2);
}

function draw_before(){
    $("div#page"+(now + 1)).css("display","none");
    $("h1#text"+(now + 1)).text(words[x+now][japanese]);
    $("main.card_main").css("transform","rotateY(0deg)");
    $("div#page"+now).css("display","block");
    ii=0;
    $(".now").text(now + 1);
    $("h1#text"+now).css("color",color2);
}

function draw_right() {
    if(now+1 < (y - x + 1)){
      now++;
      $("main").css("transform","rotateY(90deg)");
      setTimeout(draw_after,speed2);
    }
    
}

function draw_left(){
    if(now-1 >= 0){
      now--;
      $("main").css("transform","rotateY(90deg)");
    setTimeout(draw_before,speed2);
    }
    
}

//回転
function draw_turn0 (){
    $("h1#text"+now).text(words[x+now-1][english]);
    $("h1#text"+now).css("color",color1);
    $("main").css("transform","rotateX(0deg)");
}

function draw_turn1 (){
    $("h1#text"+now).text(words[x+now-1][japanese]);
    $("main").css("transform","rotateX(0deg)");
    $("h1#text"+now).css("color",color2);
}

function draw_turn(){
    if(ii === 0){
        $("main").css("transform","rotateX(90deg)");
        setTimeout(draw_turn0,speed2);
        ii++;
    }
    else if(ii === 1){
        $("main").css("transform","rotateX(90deg)");
        setTimeout(draw_turn1,speed2);
        ii--;
    }
}

//スワイプ
var xs;
var xe;
var dist = 30;

document.body.addEventListener( "touchstart", function( event ) {
	var touchObject = event.changedTouches[0] ;

	xs = touchObject.pageX ;
} ) ;

document.body.addEventListener( "touchend", function( event ) {
	var touchObject = event.changedTouches[0] ;

	xe = touchObject.pageX ;

    swipe();
} ) ;

function swipe() {
    if(cases === 2){
      if(xs + dist < xe && xs - xe < 0){//左から右へ　▶
        draw_left();
      }
      else if(xe < xs - dist && xs - xe > 0){//右から左へ　◀
          draw_right();
      }
      else if(xe === xe){
          draw_turn();
      }
    }
}

//キーの処理
window.addEventListener("keydown", handleKeydown);

$(window).keydown(function(e){
  if(event.shiftKey){
    if(e.keyCode === 39){
      DrawAll();
    }
  }
});

function handleKeydown(event){
  // キーコード
  var keyCode = event.keyCode;

  //cases = 1;

    if(cases === 1){
      if(13 === keyCode)
      {
        result = document.getElementById("form").value;
        checking();
      }
      if(32 === keyCode)
      {
        event.preventDefault()
      }
    }

    if(cases === 2){
      if(keyCode == 39 || keyCode == 68 || keyCode == 13) {
        draw_right();
      }

      if(keyCode == 37|| keyCode == 65 || keyCode == 8) {
          draw_left();
      }

      if(keyCode == 38 || keyCode == 40 || keyCode == 87 || keyCode == 83 || keyCode == 32) {
          draw_turn();
      }
    }

}
