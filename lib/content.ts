import type { Locale } from "./i18n";
export type Localized = Record<Locale, string>;
export type Story = {
  slug: string;
  title: Localized;
  summary: Localized;
  genre: "fantasy" | "science-fiction" | "adventure";
  genreName: Localized;
  art: string;
  paragraphs: Record<Locale, string[]>;
};
export const stories: Story[] = [
  {
    slug: "the-first-world",
    title: { en: "The First World", zh: "第一个世界" },
    summary: {
      en: "At the edge of a quiet sea, a door appears. Beyond it is a world waiting to be named.",
      zh: "寂静的海边出现了一扇门。门的另一端，是一个等待被命名的世界。",
    },
    genre: "fantasy",
    genreName: { en: "Fantasy", zh: "奇幻" },
    art: "door",
    paragraphs: {
      en: [
        "The door had not been there yesterday. Lin was certain of that. Yesterday there had been only the sea, the pale sand, and the particular silence that comes just before sunrise.",
        "Now a tall, narrow doorway stood in the shallows. It had no wall to hold it up. Through its open frame, the water continued into a sky of an entirely different colour.",
        "Lin took the notebook from her pocket. On the first page, she had written a list of things she knew. It was a short list. On the second, she had written things she wanted to understand. That page was full.",
        "She turned to a clean page and drew the door. The moment her pencil touched the paper, a small island appeared on the other side.",
        "She drew a tree. Its branches unfolded against the unfamiliar sky. Then she drew a path, but stopped before it reached the horizon. A world, she thought, ought to have somewhere left to go.",
        "The water was cold around her ankles. Lin closed the notebook, held it above the waves, and stepped through.",
      ],
      zh: [
        "昨天，这扇门还不在这里。林很确定。昨天只有海、浅色的沙滩，以及日出前那种独特的寂静。",
        "现在，一扇细长的门立在浅水里，没有墙壁支撑。透过敞开的门框，海水延伸进一片颜色全然不同的天空。",
        "林从口袋里拿出笔记本。第一页写着她已经知道的事，那是一份很短的清单。第二页写着她想弄明白的事，那一页已经满了。",
        "她翻到空白的一页，画下那扇门。铅笔碰到纸面的瞬间，门的另一端出现了一座小岛。",
        "她画了一棵树，树枝在陌生的天空下舒展开来。接着，她画了一条路，却在地平线前停住了。一个世界，她想，总该留一些尚未抵达的地方。",
        "海水漫过脚踝，有些凉。林合上笔记本，把它举过浪花，迈了过去。",
      ],
    },
  },
  {
    slug: "letters-from-tomorrow",
    title: { en: "Letters From Tomorrow", zh: "来自明天的信" },
    summary: {
      en: "A letter arrives one day too early. Its message is not a warning, but an invitation to notice.",
      zh: "一封信提前一天抵达。它带来的不是警告，而是一份邀请：留意身边的世界。",
    },
    genre: "science-fiction",
    genreName: { en: "Science fiction", zh: "科幻" },
    art: "moon",
    paragraphs: {
      en: [
        "Every morning, June checked the brass letterbox. Every morning, it was empty. Until Tuesday, when she found an envelope dated Wednesday.",
        "Inside were seven words: Look at the window across the street.",
        "June looked. An old man was setting a tiny paper boat on his windowsill. He caught her watching and waved. She waved back.",
        "The next letter arrived on Wednesday, dated Thursday. Ask him about the sea, it said.",
        "So she did. He had been a sailor, once, before the city grew tall enough to hide the harbour. His boats were maps of places he could still remember.",
        "That evening June folded a boat of her own. She wrote a letter, too. It was addressed to someone she had not met yet. She left the date blank.",
      ],
      zh: [
        "每天早上，六月都会查看那只黄铜信箱。每天早上，里面都是空的。直到星期二，她发现一只信封，上面写着星期三的日期。",
        "信里只有一句话：看看街对面的窗户。",
        "六月抬起头。一位老人正把一只小纸船放在窗台上。他发现她在看，便挥了挥手。她也向他挥手。",
        "下一封信在星期三抵达，日期是星期四。问问他关于大海的事，信上说。",
        "于是她去问了。老人曾经是一名水手，那时候城里的楼还没有高到挡住港口。他折的纸船，是那些仍留在记忆里的地方的地图。",
        "那天晚上，六月也折了一只船，还写了一封信。收信人是一个她尚未认识的人。她把日期留白了。",
      ],
    },
  },
  {
    slug: "the-map-without-borders",
    title: { en: "The Map Without Borders", zh: "没有边界的地图" },
    summary: {
      en: "An unfinished map, a borrowed compass, and a journey that begins where the road runs out.",
      zh: "一张未完成的地图，一只借来的指南针，一段从道路尽头开始的旅程。",
    },
    genre: "adventure",
    genreName: { en: "Adventure", zh: "冒险" },
    art: "mountain",
    paragraphs: {
      en: [
        "The mapmaker left one instruction: Do not draw the edges.",
        "Mara had spent all winter trying to understand it. Every map she had ever seen ended somewhere. At the sea. At the mountains. At the neat border of the paper.",
        "In spring, she borrowed a compass and walked north. At the end of the road, she unfolded the map. A thin line of ink was moving across the blank space.",
        "It did not show where she should go. It showed where she had been.",
        "Mara looked back. The village was smaller than a fingernail now, but its roads were clear on the paper. Beside them, almost too faint to see, were other lines. Other journeys.",
        "She put the compass away. Then she took out her pencil and, carefully, marked a place to rest. Whoever came next might need it.",
      ],
      zh: [
        "制图师只留下一句话：不要画出边界。",
        "玛拉花了一整个冬天去理解。她见过的每一张地图都有终点：海边、山脚，或是纸张整齐的边缘。",
        "春天，她借来一只指南针，向北走去。走到道路尽头时，她展开地图。一条细细的墨线正在空白处移动。",
        "它没有指引她该去哪里，而是记录她已经走过的路。",
        "玛拉回头望去。村庄已经比指甲还小，但村里的道路清清楚楚地出现在纸上。旁边还有一些几乎看不见的线条，那是别人的旅程。",
        "她收起指南针，拿出铅笔，认真标出一个可以休息的地方。下一位路过的人，也许会需要它。",
      ],
    },
  },
];
export type Journal = {
  slug: string;
  title: Localized;
  summary: Localized;
  category: Localized;
  paragraphs: Record<Locale, string[]>;
};
export const journals: Journal[] = [
  {
    slug: "begin-with-a-question",
    title: {
      en: "A world begins with a question",
      zh: "用一个问题，打开一个世界",
    },
    summary: {
      en: "Before the map, before the characters: find the small question that makes you want to keep writing.",
      zh: "在地图和人物之前，先找到那个让你想继续写下去的小问题。",
    },
    category: { en: "Worldbuilding", zh: "世界构建" },
    paragraphs: {
      en: [
        "What if a door appeared where no door should be? A question gives a story movement before it has a plot. It creates a gap between what a character knows and what they need to discover.",
        "Try writing three questions about an ordinary place. Choose the one that makes you curious, rather than the one that sounds most impressive. Then give that curiosity to a character.",
        "You do not need to explain the whole world at once. Describe what the character can touch, what they misunderstand, and what they decide to do next. Let the rest of the world arrive when the story needs it.",
      ],
      zh: [
        "如果一扇门出现在不该有门的地方，会发生什么？在情节成形之前，问题就能让故事动起来。它在人物已知的世界和需要探索的世界之间，留下一道缝隙。",
        "试着围绕一个普通的地方提出三个问题。选择最让你好奇的那个，而不是听起来最宏大的那个。再把这份好奇交给一个人物。",
        "不必一次解释整个世界。写下人物能够触碰的东西、他们的误解，以及下一步的决定。其余部分，等故事需要时再慢慢展开。",
      ],
    },
  },
  {
    slug: "room-for-the-reader",
    title: { en: "Leave a little room for the reader", zh: "给读者留一点空间" },
    summary: {
      en: "Some of the most memorable details are the ones a story lets us imagine for ourselves.",
      zh: "故事中最难忘的细节，有时正是那些留给我们自己想象的部分。",
    },
    category: { en: "Writing practice", zh: "写作练习" },
    paragraphs: {
      en: [
        "A description does not need to account for everything in a room. A cold cup of tea and a chair facing the door may tell us more than a complete inventory.",
        "Choose details that change how we understand the scene. If removing a sentence leaves the feeling untouched, try reading the paragraph without it.",
        "Space is not the absence of care. It is an invitation for another imagination to join yours.",
      ],
      zh: [
        "描写不必列出房间里的一切。一杯凉茶和一张朝向门口的椅子，也许比一份完整的物品清单更有意味。",
        "选择能改变我们对场景理解的细节。如果删掉一句话并不影响感受，就试着读一读删减后的段落。",
        "留白不是缺少用心，而是邀请另一个人的想象，与你的想象相遇。",
      ],
    },
  },
  {
    slug: "carrying-a-story-between-languages",
    title: { en: "Carrying a story between languages", zh: "让故事跨越语言" },
    summary: {
      en: "Translation starts with meaning, but the voice of a story lives in rhythm, detail, and choice.",
      zh: "翻译始于意义，而故事的声音藏在节奏、细节与选择里。",
    },
    category: { en: "Across languages", zh: "跨越语言" },
    paragraphs: {
      en: [
        "A sentence can be accurate and still feel unlike the story it belongs to. Translation asks us to listen for more than information: pace, distance, humour, and the things a character leaves unsaid.",
        "AI can help explore alternative phrasings. A human reader still needs to check names, cultural context, tone, and whether the passage feels natural in its new language.",
        "Read a paragraph aloud in both languages. Where do you pause? Which image stays with you? Those are useful clues when deciding what to preserve.",
      ],
      zh: [
        "一句话可以很准确，却依然不像原来的故事。翻译需要倾听的不只是信息，还有节奏、距离感、幽默，以及人物没有说出口的部分。",
        "AI 可以帮助探索不同表达，但仍需要人来检查姓名、文化背景、语气，以及译文是否自然。",
        "用两种语言分别朗读同一段文字。你在哪里停顿？哪一个画面留在脑海里？这些都是判断该保留什么的线索。",
      ],
    },
  },
];
