export type PricingType = "free" | "paid" | "freemium";

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  pricing: PricingType;
  url: string;
}

export interface Category {
  id: string;
  name: string;
  colorClass: string;
  borderClass: string;
  icon: string;
}

export const categories: Category[] = [
  { id: "writing", name: "Writing", colorClass: "text-cat-writing", borderClass: "border-cat-writing", icon: "✏️" },
  { id: "coding", name: "Coding", colorClass: "text-cat-coding", borderClass: "border-cat-coding", icon: "💻" },
  { id: "marketing", name: "Marketing", colorClass: "text-cat-marketing", borderClass: "border-cat-marketing", icon: "📣" },
  { id: "productivity", name: "Productivity", colorClass: "text-cat-productivity", borderClass: "border-cat-productivity", icon: "⚡" },
  { id: "image", name: "Image Tools", colorClass: "text-cat-image", borderClass: "border-cat-image", icon: "🎨" },
  { id: "video", name: "Video Editing", colorClass: "text-cat-video", borderClass: "border-cat-video", icon: "🎬" },
  { id: "seo", name: "SEO Tools", colorClass: "text-cat-seo", borderClass: "border-cat-seo", icon: "🔍" },
  { id: "email", name: "Email Marketing", colorClass: "text-cat-email", borderClass: "border-cat-email", icon: "📧" },
  { id: "sales", name: "Sales Tools", colorClass: "text-cat-sales", borderClass: "border-cat-sales", icon: "💰" },
  { id: "management", name: "Management", colorClass: "text-cat-management", borderClass: "border-cat-management", icon: "📊" },
  { id: "content", name: "Content Creation", colorClass: "text-cat-content", borderClass: "border-cat-content", icon: "🖊️" },
  { id: "music", name: "Music Tools", colorClass: "text-cat-music", borderClass: "border-cat-music", icon: "🎵" },
  { id: "daily", name: "Daily Life", colorClass: "text-cat-daily", borderClass: "border-cat-daily", icon: "☀️" },
  { id: "chrome", name: "Chrome Extensions", colorClass: "text-cat-chrome", borderClass: "border-cat-chrome", icon: "🌐" },
  { id: "twitter", name: "Social Media", colorClass: "text-cat-twitter", borderClass: "border-cat-twitter", icon: "🐦" },
  { id: "youtube", name: "YouTube", colorClass: "text-cat-youtube", borderClass: "border-cat-youtube", icon: "📺" },
];

export const tools: Tool[] = [
  // Writing
  { id: "copyai", name: "Copy.ai", description: "AI-powered copywriting assistant for marketing and content", icon: "✍️", category: "writing", pricing: "freemium", url: "https://www.copy.ai" },
  { id: "writesonic", name: "WriteSonic", description: "AI writer for SEO-optimized content and ads", icon: "📝", category: "writing", pricing: "freemium", url: "https://writesonic.com" },
  { id: "jasper-w", name: "Jasper", description: "Enterprise AI content platform for teams", icon: "🤖", category: "writing", pricing: "paid", url: "https://www.jasper.ai" },
  { id: "sudowrite", name: "Sudowrite", description: "AI writing partner for fiction and creative writing", icon: "📖", category: "writing", pricing: "paid", url: "https://www.sudowrite.com" },
  { id: "grammarly", name: "Grammarly", description: "AI-powered writing assistant for grammar and clarity", icon: "📋", category: "writing", pricing: "freemium", url: "https://www.grammarly.com" },
  { id: "quillbot", name: "QuillBot", description: "AI paraphrasing and summarizing tool", icon: "🪶", category: "writing", pricing: "freemium", url: "https://quillbot.com" },
  { id: "wordtune", name: "Wordtune", description: "AI writing companion that rewrites and rephrases", icon: "🔄", category: "writing", pricing: "freemium", url: "https://www.wordtune.com" },
  { id: "rytr", name: "Rytr", description: "AI writing assistant for blogs, emails, and ads", icon: "✒️", category: "writing", pricing: "freemium", url: "https://rytr.me" },
  { id: "anyword", name: "Anyword", description: "AI copywriting with predictive performance scoring", icon: "📊", category: "writing", pricing: "paid", url: "https://anyword.com" },

  // Coding
  { id: "github-copilot", name: "GitHub Copilot", description: "AI pair programmer that suggests code in real-time", icon: "🐙", category: "coding", pricing: "paid", url: "https://github.com/features/copilot" },
  { id: "codewhisperer", name: "Amazon CodeWhisperer", description: "Amazon's AI coding companion for IDEs", icon: "💡", category: "coding", pricing: "freemium", url: "https://aws.amazon.com/codewhisperer" },
  { id: "tabnine", name: "Tabnine", description: "AI code completion for all major IDEs", icon: "⚡", category: "coding", pricing: "freemium", url: "https://www.tabnine.com" },
  { id: "replit-ai", name: "Replit AI", description: "AI-powered coding assistant in the browser", icon: "💻", category: "coding", pricing: "freemium", url: "https://replit.com" },
  { id: "cursor", name: "Cursor", description: "AI-first code editor built for pair programming", icon: "🖱️", category: "coding", pricing: "freemium", url: "https://cursor.sh" },
  { id: "codiga", name: "Codiga", description: "Static code analysis with AI-powered fixes", icon: "🛡️", category: "coding", pricing: "freemium", url: "https://www.codiga.io" },
  { id: "codeium", name: "Codeium", description: "Free AI code completion and search", icon: "🆓", category: "coding", pricing: "free", url: "https://codeium.com" },
  { id: "codewp", name: "CodeWP", description: "AI code generator for WordPress", icon: "🌐", category: "coding", pricing: "paid", url: "https://codewp.ai" },
  { id: "sourcegraph-cody", name: "Sourcegraph Cody", description: "AI coding assistant that understands your codebase", icon: "🧠", category: "coding", pricing: "freemium", url: "https://sourcegraph.com/cody" },

  // Marketing
  { id: "jasper-m", name: "Jasper", description: "AI marketing content generation at scale", icon: "🚀", category: "marketing", pricing: "paid", url: "https://www.jasper.ai" },
  { id: "drift", name: "Drift", description: "Conversational AI for marketing automation", icon: "💬", category: "marketing", pricing: "paid", url: "https://www.drift.com" },
  { id: "hubspot-m", name: "HubSpot", description: "AI-powered CRM and marketing platform", icon: "🔶", category: "marketing", pricing: "freemium", url: "https://www.hubspot.com" },
  { id: "smartwriter-m", name: "Smartwriter", description: "AI personalized outreach at scale", icon: "✉️", category: "marketing", pricing: "paid", url: "https://www.smartwriter.ai" },
  { id: "semrush", name: "Semrush", description: "AI-driven SEO and marketing analytics", icon: "📊", category: "marketing", pricing: "freemium", url: "https://www.semrush.com" },
  { id: "surfer-seo", name: "Surfer SEO", description: "AI content optimization for organic traffic", icon: "🏄", category: "marketing", pricing: "paid", url: "https://surferseo.com" },
  { id: "adcreative", name: "AdCreative.ai", description: "AI-powered ad creative generation", icon: "🎨", category: "marketing", pricing: "paid", url: "https://www.adcreative.ai" },
  { id: "persado", name: "Persado", description: "AI-generated marketing language that converts", icon: "🎯", category: "marketing", pricing: "paid", url: "https://www.persado.com" },
  { id: "albert-ai", name: "Albert AI", description: "Autonomous AI marketing platform", icon: "🤖", category: "marketing", pricing: "paid", url: "https://albert.ai" },

  // Productivity
  { id: "notion-ai", name: "Notion AI", description: "AI writing and organization in Notion", icon: "📓", category: "productivity", pricing: "freemium", url: "https://www.notion.so/product/ai" },
  { id: "otter-ai", name: "Otter.ai", description: "AI meeting transcription and notes", icon: "🦦", category: "productivity", pricing: "freemium", url: "https://otter.ai" },
  { id: "bardeen", name: "Bardeen AI", description: "AI workflow automation without coding", icon: "⚡", category: "productivity", pricing: "freemium", url: "https://www.bardeen.ai" },
  { id: "reclaim-ai", name: "Reclaim.ai", description: "AI calendar management and scheduling", icon: "📅", category: "productivity", pricing: "freemium", url: "https://reclaim.ai" },
  { id: "clickup-ai", name: "ClickUp AI", description: "AI-powered project management assistant", icon: "✅", category: "productivity", pricing: "freemium", url: "https://clickup.com/ai" },
  { id: "taskade", name: "Taskade", description: "AI task management and team collaboration", icon: "📋", category: "productivity", pricing: "freemium", url: "https://www.taskade.com" },
  { id: "mem-ai", name: "Mem.ai", description: "AI-powered self-organizing workspace", icon: "🧠", category: "productivity", pricing: "freemium", url: "https://mem.ai" },
  { id: "tldv", name: "tl;dv", description: "AI meeting recorder for Google Meet and Zoom", icon: "🎥", category: "productivity", pricing: "freemium", url: "https://tldv.io" },
  { id: "motion-app", name: "Motion", description: "AI calendar that auto-schedules your tasks", icon: "🔄", category: "productivity", pricing: "paid", url: "https://www.usemotion.com" },

  // Image Tools
  { id: "midjourney", name: "Midjourney", description: "AI art generation with stunning visual quality", icon: "🎨", category: "image", pricing: "paid", url: "https://www.midjourney.com" },
  { id: "dalle", name: "DALL-E 3", description: "OpenAI's text-to-image generation model", icon: "🌈", category: "image", pricing: "paid", url: "https://openai.com/dall-e-3" },
  { id: "stable-diffusion", name: "Stable Diffusion", description: "Open-source AI image generation model", icon: "🖼️", category: "image", pricing: "free", url: "https://stability.ai" },
  { id: "leonardoai", name: "Leonardo AI", description: "AI image generation for creative professionals", icon: "🎭", category: "image", pricing: "freemium", url: "https://leonardo.ai" },
  { id: "ideogram", name: "Ideogram", description: "AI image generator with excellent text rendering", icon: "🔤", category: "image", pricing: "freemium", url: "https://ideogram.ai" },
  { id: "crayon", name: "Craiyon", description: "Free AI image generator from text prompts", icon: "🖍️", category: "image", pricing: "free", url: "https://www.craiyon.com" },
  { id: "canva-ai", name: "Canva AI", description: "AI design tools integrated in Canva", icon: "🎨", category: "image", pricing: "freemium", url: "https://www.canva.com/ai-image-generator" },
  { id: "removebg", name: "Remove.bg", description: "AI background removal in seconds", icon: "✂️", category: "image", pricing: "freemium", url: "https://www.remove.bg" },
  { id: "photoroom", name: "PhotoRoom", description: "AI photo editing and background removal", icon: "📸", category: "image", pricing: "freemium", url: "https://www.photoroom.com" },

  // Video Editing
  { id: "synthesia", name: "Synthesia", description: "AI video generation with virtual avatars", icon: "🎥", category: "video", pricing: "paid", url: "https://www.synthesia.io" },
  { id: "runway", name: "Runway ML", description: "AI-powered creative video editing suite", icon: "🎬", category: "video", pricing: "freemium", url: "https://runwayml.com" },
  { id: "descript", name: "Descript", description: "AI video and podcast editing by editing text", icon: "📝", category: "video", pricing: "freemium", url: "https://www.descript.com" },
  { id: "pictory", name: "Pictory", description: "AI video creation from long-form content", icon: "📸", category: "video", pricing: "paid", url: "https://pictory.ai" },
  { id: "invideo", name: "InVideo AI", description: "AI video editor with templates and stock media", icon: "🎞️", category: "video", pricing: "freemium", url: "https://invideo.io" },
  { id: "opus-clip", name: "Opus Clip", description: "AI tool to repurpose long videos into viral clips", icon: "✂️", category: "video", pricing: "freemium", url: "https://www.opus.pro" },
  { id: "heygen", name: "HeyGen", description: "AI video generator with talking avatars", icon: "🗣️", category: "video", pricing: "freemium", url: "https://www.heygen.com" },
  { id: "capcut", name: "CapCut", description: "Free AI-powered video editing app", icon: "🎯", category: "video", pricing: "free", url: "https://www.capcut.com" },
  { id: "fliki", name: "Fliki", description: "AI text-to-video with realistic voiceovers", icon: "🎙️", category: "video", pricing: "freemium", url: "https://fliki.ai" },

  // SEO Tools
  { id: "semrush-seo", name: "Semrush", description: "Comprehensive AI SEO toolkit", icon: "📊", category: "seo", pricing: "freemium", url: "https://www.semrush.com" },
  { id: "ahrefs", name: "Ahrefs", description: "AI-powered SEO toolset for backlinks and keywords", icon: "🔗", category: "seo", pricing: "paid", url: "https://ahrefs.com" },
  { id: "surfer-seo2", name: "Surfer SEO", description: "AI content editor for on-page SEO optimization", icon: "🏄", category: "seo", pricing: "paid", url: "https://surferseo.com" },
  { id: "marketmuse", name: "MarketMuse", description: "AI content strategy and optimization platform", icon: "📈", category: "seo", pricing: "paid", url: "https://www.marketmuse.com" },
  { id: "clearscope", name: "Clearscope", description: "AI content optimization for search visibility", icon: "🔍", category: "seo", pricing: "paid", url: "https://www.clearscope.io" },
  { id: "frase", name: "Frase", description: "AI SEO content research and writing tool", icon: "📰", category: "seo", pricing: "freemium", url: "https://www.frase.io" },
  { id: "neuronwriter", name: "NeuronWriter", description: "AI content optimization with NLP analysis", icon: "🧠", category: "seo", pricing: "paid", url: "https://www.neuronwriter.com" },
  { id: "scalenut", name: "Scalenut", description: "AI SEO content lifecycle management", icon: "📐", category: "seo", pricing: "freemium", url: "https://www.scalenut.com" },
  { id: "rankiq", name: "RankIQ", description: "AI SEO toolset for bloggers", icon: "🏆", category: "seo", pricing: "paid", url: "https://www.rankiq.com" },

  // Email Marketing
  { id: "mailchimp-ai", name: "Mailchimp AI", description: "AI email marketing and automation platform", icon: "📧", category: "email", pricing: "freemium", url: "https://mailchimp.com" },
  { id: "seventh-sense", name: "Seventh Sense", description: "AI-optimized email delivery timing", icon: "🕐", category: "email", pricing: "paid", url: "https://www.theseventhsense.com" },
  { id: "smartwriter", name: "Smartwriter", description: "AI personalized email outreach", icon: "🎯", category: "email", pricing: "paid", url: "https://www.smartwriter.ai" },
  { id: "instantly", name: "Instantly.ai", description: "AI cold email outreach and warmup", icon: "⚡", category: "email", pricing: "paid", url: "https://instantly.ai" },
  { id: "lavender-ai", name: "Lavender", description: "AI email coach that helps you write better emails", icon: "💜", category: "email", pricing: "freemium", url: "https://www.lavender.ai" },
  { id: "rasa-io", name: "rasa.io", description: "AI-powered smart newsletter platform", icon: "📰", category: "email", pricing: "paid", url: "https://rasa.io" },
  { id: "phrasee", name: "Phrasee", description: "AI-optimized email subject lines and copy", icon: "✉️", category: "email", pricing: "paid", url: "https://phrasee.co" },
  { id: "brevo-ai", name: "Brevo AI", description: "AI email marketing and CRM automation", icon: "📬", category: "email", pricing: "freemium", url: "https://www.brevo.com" },

  // Sales
  { id: "gong", name: "Gong", description: "AI revenue intelligence and sales analytics", icon: "🔔", category: "sales", pricing: "paid", url: "https://www.gong.io" },
  { id: "apollo", name: "Apollo.io", description: "AI sales intelligence and engagement platform", icon: "🚀", category: "sales", pricing: "freemium", url: "https://www.apollo.io" },
  { id: "outreach", name: "Outreach", description: "AI sales engagement and execution platform", icon: "📞", category: "sales", pricing: "paid", url: "https://www.outreach.io" },
  { id: "salesloft", name: "SalesLoft", description: "AI-powered sales engagement platform", icon: "💼", category: "sales", pricing: "paid", url: "https://www.salesloft.com" },
  { id: "clari", name: "Clari", description: "AI revenue platform for pipeline management", icon: "📊", category: "sales", pricing: "paid", url: "https://www.clari.com" },
  { id: "warmer", name: "Warmer.ai", description: "AI cold email personalization", icon: "🔥", category: "sales", pricing: "paid", url: "https://warmer.ai" },
  { id: "seamless-ai", name: "Seamless.AI", description: "AI-powered lead generation and prospecting", icon: "🎯", category: "sales", pricing: "freemium", url: "https://seamless.ai" },
  { id: "reply-io", name: "Reply.io", description: "AI sales outreach and automation", icon: "💬", category: "sales", pricing: "paid", url: "https://reply.io" },

  // Management
  { id: "later", name: "Later", description: "AI social media scheduling and analytics", icon: "📅", category: "management", pricing: "freemium", url: "https://later.com" },
  { id: "hootsuite", name: "Hootsuite", description: "AI social media management platform", icon: "🦉", category: "management", pricing: "freemium", url: "https://www.hootsuite.com" },
  { id: "sprout-social", name: "Sprout Social", description: "AI social media management and analytics", icon: "🌱", category: "management", pricing: "paid", url: "https://sproutsocial.com" },
  { id: "buffer", name: "Buffer", description: "AI social media scheduling and publishing", icon: "📊", category: "management", pricing: "freemium", url: "https://buffer.com" },
  { id: "ocoya", name: "Ocoya", description: "AI social media content creation and scheduling", icon: "🐙", category: "management", pricing: "freemium", url: "https://www.ocoya.com" },
  { id: "sprinklr", name: "Sprinklr", description: "AI unified customer experience management", icon: "💧", category: "management", pricing: "paid", url: "https://www.sprinklr.com" },
  { id: "monday-ai", name: "Monday.com AI", description: "AI-powered work management platform", icon: "📋", category: "management", pricing: "freemium", url: "https://monday.com" },
  { id: "asana-ai", name: "Asana AI", description: "AI project management and task automation", icon: "✅", category: "management", pricing: "freemium", url: "https://asana.com" },

  // Content Creation
  { id: "copyai-c", name: "Copy.ai", description: "AI content generation for all platforms", icon: "✍️", category: "content", pricing: "freemium", url: "https://www.copy.ai" },
  { id: "canva", name: "Canva", description: "AI-powered graphic design platform", icon: "🎨", category: "content", pricing: "freemium", url: "https://www.canva.com" },
  { id: "lumen5", name: "Lumen5", description: "AI video creator for content marketing", icon: "🎬", category: "content", pricing: "freemium", url: "https://lumen5.com" },
  { id: "tome", name: "Tome", description: "AI-powered storytelling and presentation tool", icon: "📖", category: "content", pricing: "freemium", url: "https://tome.app" },
  { id: "beautiful-ai", name: "Beautiful.ai", description: "AI presentation maker with smart templates", icon: "✨", category: "content", pricing: "paid", url: "https://www.beautiful.ai" },
  { id: "contentbot", name: "ContentBot", description: "AI content writing and automation", icon: "🤖", category: "content", pricing: "freemium", url: "https://contentbot.ai" },
  { id: "predis", name: "Predis.ai", description: "AI social media content generator", icon: "📱", category: "content", pricing: "freemium", url: "https://predis.ai" },
  { id: "peppertype", name: "Peppertype.ai", description: "AI content generation for teams", icon: "🌶️", category: "content", pricing: "paid", url: "https://www.peppertype.ai" },

  // Music
  { id: "suno", name: "Suno", description: "AI song generation from text prompts", icon: "🎤", category: "music", pricing: "freemium", url: "https://suno.com" },
  { id: "udio", name: "Udio", description: "AI music creation with vocal generation", icon: "🎧", category: "music", pricing: "freemium", url: "https://www.udio.com" },
  { id: "aiva", name: "Aiva", description: "AI composer for emotional soundtracks", icon: "🎼", category: "music", pricing: "freemium", url: "https://www.aiva.ai" },
  { id: "soundful", name: "Soundful", description: "AI music generation for creators", icon: "🎶", category: "music", pricing: "freemium", url: "https://soundful.com" },
  { id: "mubert", name: "Mubert", description: "AI generative music for content creators", icon: "🎵", category: "music", pricing: "freemium", url: "https://mubert.com" },
  { id: "beatoven", name: "Beatoven.AI", description: "AI background music for videos and podcasts", icon: "🥁", category: "music", pricing: "freemium", url: "https://www.beatoven.ai" },
  { id: "amper", name: "Amper Music", description: "AI music composition and production", icon: "🎹", category: "music", pricing: "freemium", url: "https://www.shutterstock.com/discover/ampermusic" },
  { id: "boomy", name: "Boomy", description: "Create and release AI-generated songs", icon: "💥", category: "music", pricing: "free", url: "https://boomy.com" },

  // Daily Life
  { id: "chatgpt", name: "ChatGPT", description: "OpenAI's conversational AI assistant", icon: "💬", category: "daily", pricing: "freemium", url: "https://chat.openai.com" },
  { id: "perplexity", name: "Perplexity AI", description: "AI search engine with cited answers", icon: "🔍", category: "daily", pricing: "freemium", url: "https://www.perplexity.ai" },
  { id: "claude", name: "Claude", description: "Anthropic's helpful AI assistant", icon: "🤖", category: "daily", pricing: "freemium", url: "https://claude.ai" },
  { id: "elsa", name: "ELSA Speak", description: "AI English pronunciation coach", icon: "🗣️", category: "daily", pricing: "freemium", url: "https://elsaspeak.com" },
  { id: "replika", name: "Replika", description: "AI companion for conversation and support", icon: "💙", category: "daily", pricing: "freemium", url: "https://replika.com" },
  { id: "google-gemini", name: "Google Gemini", description: "Google's multimodal AI assistant", icon: "✨", category: "daily", pricing: "freemium", url: "https://gemini.google.com" },
  { id: "vondy", name: "Vondy", description: "AI tools collection for daily tasks", icon: "🧰", category: "daily", pricing: "freemium", url: "https://www.vondy.com" },
  { id: "pi-ai", name: "Pi AI", description: "Personal AI assistant for everyday conversations", icon: "🥧", category: "daily", pricing: "free", url: "https://pi.ai" },

  // Chrome Extensions
  { id: "fireflies", name: "Fireflies.ai", description: "AI meeting transcription and notes", icon: "🔥", category: "chrome", pricing: "freemium", url: "https://fireflies.ai" },
  { id: "grammarly-ext", name: "Grammarly", description: "AI writing assistant browser extension", icon: "📋", category: "chrome", pricing: "freemium", url: "https://www.grammarly.com" },
  { id: "otter-ext", name: "Otter.ai", description: "AI meeting assistant and transcriber extension", icon: "🦦", category: "chrome", pricing: "freemium", url: "https://otter.ai" },
  { id: "compose-ai", name: "Compose AI", description: "AI autocompletion for emails and messages", icon: "✏️", category: "chrome", pricing: "free", url: "https://www.compose.ai" },
  { id: "merlin-ai", name: "Merlin AI", description: "ChatGPT powered Chrome extension", icon: "🧙", category: "chrome", pricing: "freemium", url: "https://www.getmerlin.in" },
  { id: "wiseone", name: "Wiseone", description: "AI reading assistant for web articles", icon: "📚", category: "chrome", pricing: "freemium", url: "https://wiseone.io" },
  { id: "harpa-ai", name: "HARPA AI", description: "AI web automation Chrome extension", icon: "🤖", category: "chrome", pricing: "freemium", url: "https://harpa.ai" },
  { id: "sider-ai", name: "Sider AI", description: "ChatGPT sidebar for any webpage", icon: "📌", category: "chrome", pricing: "freemium", url: "https://sider.ai" },

  // Social Media
  { id: "tweethunter", name: "TweetHunter", description: "AI Twitter/X content and growth tool", icon: "🏹", category: "twitter", pricing: "paid", url: "https://tweethunter.io" },
  { id: "taplio", name: "Taplio", description: "AI LinkedIn growth and content tool", icon: "💼", category: "twitter", pricing: "paid", url: "https://taplio.com" },
  { id: "publer", name: "Publer", description: "AI social media scheduling and analytics", icon: "📊", category: "twitter", pricing: "freemium", url: "https://publer.io" },
  { id: "feedhive", name: "FeedHive", description: "AI social media content recycling and scheduling", icon: "🐝", category: "twitter", pricing: "freemium", url: "https://www.feedhive.com" },
  { id: "hypefury", name: "Hypefury", description: "AI Twitter/X scheduling and monetization", icon: "🔥", category: "twitter", pricing: "paid", url: "https://hypefury.com" },
  { id: "typefully", name: "Typefully", description: "AI Twitter/X thread writing and scheduling", icon: "✏️", category: "twitter", pricing: "freemium", url: "https://typefully.com" },
  { id: "socialbee", name: "SocialBee", description: "AI social media management and scheduling", icon: "🐝", category: "twitter", pricing: "paid", url: "https://socialbee.com" },
  { id: "tribescaler", name: "TribeScaler", description: "AI tweet hook and viral content generator", icon: "📈", category: "twitter", pricing: "freemium", url: "https://tribescaler.com" },

  // YouTube
  { id: "vidiq", name: "vidIQ", description: "AI YouTube SEO and channel growth tool", icon: "📈", category: "youtube", pricing: "freemium", url: "https://vidiq.com" },
  { id: "tubebuddy", name: "TubeBuddy", description: "AI YouTube optimization and management", icon: "🤝", category: "youtube", pricing: "freemium", url: "https://www.tubebuddy.com" },
  { id: "filmora", name: "Filmora", description: "AI video editor for YouTube creators", icon: "🎞️", category: "youtube", pricing: "freemium", url: "https://filmora.wondershare.com" },
  { id: "opus-clip-yt", name: "Opus Clip", description: "AI clip extraction from long YouTube videos", icon: "✂️", category: "youtube", pricing: "freemium", url: "https://www.opus.pro" },
  { id: "thumbnaily", name: "Thumbly", description: "AI YouTube thumbnail generator", icon: "🖼️", category: "youtube", pricing: "freemium", url: "https://thumbly.ai" },
  { id: "castmagic", name: "Castmagic", description: "AI content from YouTube videos and podcasts", icon: "🎙️", category: "youtube", pricing: "paid", url: "https://www.castmagic.io" },
  { id: "pictory-yt", name: "Pictory", description: "AI short video creation from YouTube content", icon: "📸", category: "youtube", pricing: "paid", url: "https://pictory.ai" },
  { id: "riverside", name: "Riverside", description: "AI-powered recording and editing for creators", icon: "🎬", category: "youtube", pricing: "freemium", url: "https://riverside.fm" },
];

export function getToolsByCategory(categoryId: string): Tool[] {
  return tools.filter(t => t.category === categoryId);
}

export function searchTools(query: string): Tool[] {
  const q = query.toLowerCase();
  return tools.filter(t =>
    t.name.toLowerCase().includes(q) ||
    t.description.toLowerCase().includes(q) ||
    t.category.toLowerCase().includes(q)
  );
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}
