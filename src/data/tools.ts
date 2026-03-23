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
  { id: "copyai", name: "Copy.ai", description: "AI-powered copywriting assistant for marketing and content", icon: "✍️", category: "writing", pricing: "freemium", url: "#" },
  { id: "writesonic", name: "WriteSonic", description: "AI writer for SEO-optimized content and ads", icon: "📝", category: "writing", pricing: "freemium", url: "#" },
  { id: "jasper-w", name: "Jasper", description: "Enterprise AI content platform for teams", icon: "🤖", category: "writing", pricing: "paid", url: "#" },
  { id: "sudowrite", name: "Sudowrite", description: "AI writing partner for fiction and creative writing", icon: "📖", category: "writing", pricing: "paid", url: "#" },
  { id: "grammarly", name: "Grammarly", description: "AI-powered writing assistant for grammar and clarity", icon: "📋", category: "writing", pricing: "freemium", url: "#" },
  { id: "quillbot", name: "QuillBot", description: "AI paraphrasing and summarizing tool", icon: "🪶", category: "writing", pricing: "freemium", url: "#" },

  // Coding
  { id: "deepcode", name: "DeepCode", description: "AI-powered code review and bug detection", icon: "🔬", category: "coding", pricing: "free", url: "#" },
  { id: "codewhisperer", name: "CodeWhisperer", description: "Amazon's AI coding companion for IDEs", icon: "💡", category: "coding", pricing: "freemium", url: "#" },
  { id: "codiga", name: "Codiga", description: "Static code analysis with AI-powered fixes", icon: "🛡️", category: "coding", pricing: "freemium", url: "#" },
  { id: "studiobot", name: "Studio Bot", description: "Google's AI assistant for Android development", icon: "🤖", category: "coding", pricing: "free", url: "#" },
  { id: "codewp", name: "CodeWP", description: "AI code generator for WordPress", icon: "🌐", category: "coding", pricing: "paid", url: "#" },
  { id: "polycode", name: "Polycode", description: "Multi-language AI code generation platform", icon: "🧩", category: "coding", pricing: "freemium", url: "#" },

  // Marketing
  { id: "jasper-m", name: "Jasper", description: "AI marketing content generation at scale", icon: "🚀", category: "marketing", pricing: "paid", url: "#" },
  { id: "drift", name: "Drift", description: "Conversational AI for marketing automation", icon: "💬", category: "marketing", pricing: "paid", url: "#" },
  { id: "seventhsense-m", name: "Seventh Sense", description: "AI email send time optimization", icon: "🕐", category: "marketing", pricing: "paid", url: "#" },
  { id: "hubspot-m", name: "HubSpot", description: "AI-powered CRM and marketing platform", icon: "🔶", category: "marketing", pricing: "freemium", url: "#" },
  { id: "smartwriter-m", name: "Smartwriter", description: "AI personalized outreach at scale", icon: "✉️", category: "marketing", pricing: "paid", url: "#" },
  { id: "semrush", name: "Semrush", description: "AI-driven SEO and marketing analytics", icon: "📊", category: "marketing", pricing: "freemium", url: "#" },

  // Productivity
  { id: "ioniai", name: "Ioni AI", description: "AI customer support automation platform", icon: "🎯", category: "productivity", pricing: "paid", url: "#" },
  { id: "agentai", name: "Agent.ai", description: "Autonomous AI agents for task automation", icon: "🤖", category: "productivity", pricing: "freemium", url: "#" },
  { id: "emmaai", name: "Emma AI", description: "AI-powered project management assistant", icon: "📋", category: "productivity", pricing: "paid", url: "#" },
  { id: "bardeen", name: "Bardeen AI", description: "AI workflow automation without coding", icon: "⚡", category: "productivity", pricing: "freemium", url: "#" },
  { id: "venturefy", name: "Venturefy", description: "AI business relationship intelligence", icon: "🤝", category: "productivity", pricing: "paid", url: "#" },
  { id: "notionai", name: "Notion AI", description: "AI writing and organization in Notion", icon: "📓", category: "productivity", pricing: "freemium", url: "#" },

  // Image Tools
  { id: "vistly", name: "Vistly", description: "AI image enhancement and editing platform", icon: "🖼️", category: "image", pricing: "freemium", url: "#" },
  { id: "kiriart", name: "Kiri.Art", description: "AI art generation with style transfer", icon: "🎨", category: "image", pricing: "free", url: "#" },
  { id: "portraitpro", name: "Portrait Pro", description: "AI portrait retouching software", icon: "👤", category: "image", pricing: "paid", url: "#" },
  { id: "dalle", name: "DALL-E", description: "OpenAI's text-to-image generation model", icon: "🌈", category: "image", pricing: "paid", url: "#" },
  { id: "leonardoai", name: "Leonardo AI", description: "AI image generation for creative professionals", icon: "🎭", category: "image", pricing: "freemium", url: "#" },
  { id: "crayon", name: "Craiyon", description: "Free AI image generator from text prompts", icon: "🖍️", category: "image", pricing: "free", url: "#" },

  // Video Editing
  { id: "synthesia", name: "Synthesia", description: "AI video generation with virtual avatars", icon: "🎥", category: "video", pricing: "paid", url: "#" },
  { id: "animoto", name: "Animoto", description: "AI-powered video creation platform", icon: "🎞️", category: "video", pricing: "freemium", url: "#" },
  { id: "wavevideo", name: "Wave.video", description: "Online video editor with AI features", icon: "🌊", category: "video", pricing: "freemium", url: "#" },
  { id: "pictory", name: "Pictory", description: "AI video creation from long-form content", icon: "📸", category: "video", pricing: "paid", url: "#" },
  { id: "magisto", name: "Magisto", description: "AI-powered video editing and production", icon: "✨", category: "video", pricing: "freemium", url: "#" },
  { id: "invideo", name: "InVideo", description: "AI video editor with templates and stock media", icon: "🎬", category: "video", pricing: "freemium", url: "#" },

  // SEO Tools
  { id: "jasper-seo", name: "Jasper", description: "AI content optimized for search engines", icon: "🔍", category: "seo", pricing: "paid", url: "#" },
  { id: "marketmuse", name: "MarketMuse", description: "AI content strategy and optimization", icon: "📈", category: "seo", pricing: "paid", url: "#" },
  { id: "whalesync", name: "Whalesync", description: "AI-powered data sync for SEO workflows", icon: "🐋", category: "seo", pricing: "paid", url: "#" },
  { id: "deepbrain", name: "DeepBrain", description: "AI video content for SEO engagement", icon: "🧠", category: "seo", pricing: "paid", url: "#" },
  { id: "byword", name: "Byword", description: "AI article generator for SEO content", icon: "📰", category: "seo", pricing: "paid", url: "#" },
  { id: "semrush-seo", name: "Semrush", description: "Comprehensive AI SEO toolkit", icon: "📊", category: "seo", pricing: "freemium", url: "#" },

  // Email Marketing
  { id: "jasper-e", name: "Jasper", description: "AI email copy generation", icon: "✉️", category: "email", pricing: "paid", url: "#" },
  { id: "grammarly-e", name: "Grammarly", description: "AI writing for professional emails", icon: "📋", category: "email", pricing: "freemium", url: "#" },
  { id: "seventhsense", name: "Seventh Sense", description: "AI-optimized email delivery timing", icon: "🕐", category: "email", pricing: "paid", url: "#" },
  { id: "hubspot-e", name: "HubSpot", description: "AI email marketing automation", icon: "🔶", category: "email", pricing: "freemium", url: "#" },
  { id: "smartwriter", name: "Smartwriter", description: "AI personalized email outreach", icon: "🎯", category: "email", pricing: "paid", url: "#" },
  { id: "marketmuse-e", name: "MarketMuse", description: "AI content for email newsletters", icon: "📧", category: "email", pricing: "paid", url: "#" },

  // Sales
  { id: "writerly", name: "Writerly AI", description: "AI sales copy and proposal generator", icon: "💼", category: "sales", pricing: "paid", url: "#" },
  { id: "copymatic", name: "Copymatic", description: "AI copywriting for sales funnels", icon: "📝", category: "sales", pricing: "freemium", url: "#" },
  { id: "inkeditor", name: "INK Editor", description: "AI content optimization for conversions", icon: "🖊️", category: "sales", pricing: "freemium", url: "#" },
  { id: "nocontent", name: "NoContent", description: "AI content at scale for sales teams", icon: "⚡", category: "sales", pricing: "paid", url: "#" },
  { id: "quillbot-s", name: "QuillBot", description: "AI writing enhancement for proposals", icon: "🪶", category: "sales", pricing: "freemium", url: "#" },
  { id: "warmer", name: "Warmer", description: "AI cold email personalization", icon: "🔥", category: "sales", pricing: "paid", url: "#" },

  // Management
  { id: "later", name: "Later", description: "AI social media scheduling and analytics", icon: "📅", category: "management", pricing: "freemium", url: "#" },
  { id: "postifyai", name: "PostifyAI", description: "AI-powered social media management", icon: "📱", category: "management", pricing: "paid", url: "#" },
  { id: "ocoya", name: "Ocoya", description: "AI social media content creation and scheduling", icon: "🐙", category: "management", pricing: "freemium", url: "#" },
  { id: "rapidely", name: "Rapidely", description: "AI content calendar management", icon: "🗓️", category: "management", pricing: "paid", url: "#" },
  { id: "sprinklr", name: "Sprinklr", description: "AI unified customer experience management", icon: "💧", category: "management", pricing: "paid", url: "#" },
  { id: "typegrow", name: "Typegrow", description: "AI LinkedIn growth and scheduling", icon: "📈", category: "management", pricing: "freemium", url: "#" },

  // Content Creation
  { id: "copyai-c", name: "Copy.ai", description: "AI content generation for all platforms", icon: "✍️", category: "content", pricing: "freemium", url: "#" },
  { id: "writesonic-c", name: "WriteSonic", description: "AI blog and article content creator", icon: "📝", category: "content", pricing: "freemium", url: "#" },
  { id: "inkeditor-c", name: "INK Editor", description: "SEO-optimized AI content creation", icon: "🖊️", category: "content", pricing: "freemium", url: "#" },
  { id: "copymatic-c", name: "Copymatic", description: "AI content generation at scale", icon: "🤖", category: "content", pricing: "freemium", url: "#" },
  { id: "contentpup", name: "Contentpup", description: "AI content planning and generation", icon: "🐶", category: "content", pricing: "freemium", url: "#" },
  { id: "wordai", name: "Word AI", description: "AI article rewriting and spinning", icon: "🔄", category: "content", pricing: "paid", url: "#" },

  // Music
  { id: "amper", name: "Amper", description: "AI music composition and production", icon: "🎹", category: "music", pricing: "freemium", url: "#" },
  { id: "soundful", name: "Soundful", description: "AI music generation for creators", icon: "🎶", category: "music", pricing: "freemium", url: "#" },
  { id: "aiva", name: "Aiva", description: "AI composer for emotional soundtracks", icon: "🎼", category: "music", pricing: "freemium", url: "#" },
  { id: "suno", name: "Suno", description: "AI song generation from text prompts", icon: "🎤", category: "music", pricing: "freemium", url: "#" },
  { id: "udio", name: "Udio", description: "AI music creation with vocal generation", icon: "🎧", category: "music", pricing: "freemium", url: "#" },
  { id: "beatoven", name: "Beatoven.AI", description: "AI background music for videos", icon: "🥁", category: "music", pricing: "freemium", url: "#" },

  // Daily Life
  { id: "elsa", name: "Elsa", description: "AI English pronunciation coach", icon: "🗣️", category: "daily", pricing: "freemium", url: "#" },
  { id: "spellar", name: "Spellar AI", description: "AI spelling and grammar assistant", icon: "📚", category: "daily", pricing: "free", url: "#" },
  { id: "sibyl", name: "Sibyl AI", description: "AI spiritual guidance and wisdom", icon: "🔮", category: "daily", pricing: "freemium", url: "#" },
  { id: "taskade", name: "Taskade", description: "AI task management and collaboration", icon: "✅", category: "daily", pricing: "freemium", url: "#" },
  { id: "vondy", name: "Vondy", description: "AI tools collection for daily tasks", icon: "🧰", category: "daily", pricing: "freemium", url: "#" },

  // Chrome Extensions
  { id: "fireflies", name: "Fireflies", description: "AI meeting transcription and notes", icon: "🔥", category: "chrome", pricing: "freemium", url: "#" },
  { id: "speakai", name: "Speak AI", description: "AI transcription and analysis extension", icon: "🎙️", category: "chrome", pricing: "paid", url: "#" },
  { id: "otterai", name: "Otter AI", description: "AI meeting assistant and transcriber", icon: "🦦", category: "chrome", pricing: "freemium", url: "#" },
  { id: "gizzmoai", name: "Gizzmo AI", description: "AI affiliate content generator", icon: "⚙️", category: "chrome", pricing: "paid", url: "#" },
  { id: "naturalreader", name: "NaturalReader", description: "AI text-to-speech browser extension", icon: "📢", category: "chrome", pricing: "freemium", url: "#" },
  { id: "paragraphai", name: "ParagraphAI", description: "AI writing assistant extension", icon: "📄", category: "chrome", pricing: "freemium", url: "#" },

  // Social Media / Twitter
  { id: "tweetyai", name: "Tweety AI", description: "AI tweet generation and scheduling", icon: "🐤", category: "twitter", pricing: "freemium", url: "#" },
  { id: "buffer", name: "Buffer", description: "AI social media scheduling platform", icon: "📊", category: "twitter", pricing: "freemium", url: "#" },
  { id: "tweetsocial", name: "TweetSocial", description: "AI Twitter growth and engagement", icon: "📈", category: "twitter", pricing: "paid", url: "#" },
  { id: "tweeteen", name: "Tweeteen", description: "AI-powered tweet optimization", icon: "🎯", category: "twitter", pricing: "freemium", url: "#" },
  { id: "tweethunter", name: "TweetHunter", description: "AI Twitter content and growth tool", icon: "🏹", category: "twitter", pricing: "paid", url: "#" },
  { id: "tweetwriter", name: "Tweet Writer", description: "AI tweet and thread composer", icon: "✏️", category: "twitter", pricing: "freemium", url: "#" },

  // YouTube
  { id: "kittl", name: "Kittl", description: "AI design tool for YouTube thumbnails", icon: "🎨", category: "youtube", pricing: "freemium", url: "#" },
  { id: "filmora", name: "Filmora", description: "AI video editor for YouTube creators", icon: "🎞️", category: "youtube", pricing: "freemium", url: "#" },
  { id: "vocalai", name: "Vocal AI", description: "AI voice enhancement for videos", icon: "🎙️", category: "youtube", pricing: "freemium", url: "#" },
  { id: "pictory-y", name: "Pictory", description: "AI short video creation from long content", icon: "📸", category: "youtube", pricing: "paid", url: "#" },
  { id: "clipmaker", name: "ClipMaker", description: "AI clip extraction from long videos", icon: "✂️", category: "youtube", pricing: "freemium", url: "#" },
  { id: "steveai", name: "Steve AI", description: "AI animated video creation", icon: "🤖", category: "youtube", pricing: "paid", url: "#" },
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
